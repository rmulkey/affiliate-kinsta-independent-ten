import fs from "node:fs";
import path from "node:path";

const today = "2026-06-23";
const roots = fs.readdirSync(".")
  .filter((name) => name.endsWith("-dist") && fs.statSync(name).isDirectory())
  .sort();

const reportPath = `data/prime-day-static-articles-${today}.json`;
const TREND_COPY = [
  "portable utility",
  "small-space reset",
  "summer routine upgrade",
  "cleaner storage",
  "grab-and-go setup"
];

function readMaybe(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function write(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, value);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function decodeHtml(value = "") {
  return String(value)
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function trimTitle(value = "") {
  const decoded = decodeHtml(value).replace(/\s+/g, " ").trim();
  return decoded.length > 118 ? `${decoded.slice(0, 115).trim()}...` : decoded;
}

function stripTags(value = "") {
  return decodeHtml(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function hostPathBase(url) {
  try {
    const pathname = new URL(url).pathname.replace(/\/$/, "");
    return pathname === "/" ? "" : pathname;
  } catch {
    return "";
  }
}

function ensureTrailingSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}

function siteUrlJoin(siteUrl, page = "prime-day/") {
  return `${ensureTrailingSlash(siteUrl)}${page}`;
}

function navHref(siteUrl) {
  const base = hostPathBase(siteUrl);
  return `${base}/prime-day/`.replace(/^\/\//, "/");
}

function extractMeta(html, name) {
  return html.match(new RegExp(`<meta[^>]+${name}=["']([^"']+)["'][^>]*>`, "i"))?.[1] ?? "";
}

function extractTitle(html, fallback) {
  return stripTags(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? fallback);
}

function extractBrand(homeHtml, site) {
  return site.brand || stripTags(homeHtml.match(/<a[^>]+class="brand"[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? "") || site.slug;
}

function normalizeProductImage(src = "") {
  return decodeHtml(src).trim();
}

function asinFromUrl(url = "") {
  return url.match(/\/dp\/([A-Z0-9]{10})/)?.[1] ?? "";
}

function productCandidates(html) {
  const products = [];
  const seen = new Set();
  const linkPattern = /<a\b[^>]*href="(https:\/\/www\.amazon\.com\/(?:[^"?#]+\/)?dp\/[A-Z0-9]{10}\?tag=[^"]+)"[^>]*>[\s\S]*?<\/a>/g;
  for (const match of html.matchAll(linkPattern)) {
    const href = decodeHtml(match[1]);
    const asin = asinFromUrl(href);
    if (!asin || seen.has(asin)) continue;

    const start = Math.max(0, match.index - 900);
    const end = Math.min(html.length, match.index + match[0].length + 1800);
    const context = html.slice(start, end);
    const anchor = match[0];
    const image = normalizeProductImage(
      anchor.match(/<img\b[^>]*src="([^"]+)"/i)?.[1] ??
      context.match(/<img\b[^>]*src="([^"]+)"/i)?.[1] ??
      ""
    );
    const alt = anchor.match(/<img\b[^>]*alt="([^"]+)"/i)?.[1] ?? "";
    const heading =
      context.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] ??
      context.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] ??
      "";
    const title = trimTitle(alt || heading);

    if (!href.includes("amazon.com") || !href.includes("/dp/") || !image || !title) continue;
    if (/placeholder|data:image\/svg|icon\.svg/i.test(image)) continue;

    seen.add(asin);
    products.push({
      asin,
      title,
      url: href,
      image,
      trend: TREND_COPY[products.length % TREND_COPY.length]
    });
  }
  return products;
}

function pickPrimeProducts(localDir) {
  const files = [
    "products/index.html",
    "top-50/index.html",
    "top-7/index.html",
    "index.html"
  ].map((file) => path.join(localDir, file)).filter(fs.existsSync);
  const products = [];
  const seen = new Set();
  for (const file of files) {
    for (const product of productCandidates(readMaybe(file))) {
      if (seen.has(product.asin)) continue;
      seen.add(product.asin);
      products.push(product);
    }
  }
  const offset = products.length >= 12 ? 7 : 0;
  return products.slice(offset, offset + 5);
}

function injectPrimeNav(html, href) {
  if (!html || html.includes(href) || html.includes(">Prime Day<")) return html;
  return html.replace(/(<nav\b[^>]*>[\s\S]*?)(<\/nav>)/i, `$1<a href="${href}">Prime Day</a>$2`);
}

function updateSiteHtmlNav(localDir, href) {
  let touched = 0;
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        const before = readMaybe(full);
        const after = injectPrimeNav(before, href);
        if (after !== before) {
          fs.writeFileSync(full, after);
          touched += 1;
        }
      }
    }
  }
  if (fs.existsSync(localDir)) walk(localDir);
  return touched;
}

function updateSitemap(sitemapFile, url) {
  if (!fs.existsSync(sitemapFile)) return false;
  const xml = readMaybe(sitemapFile);
  if (xml.includes(`<loc>${url}</loc>`)) return false;
  const entry = `  <url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>\n`;
  fs.writeFileSync(sitemapFile, xml.replace("</urlset>", `${entry}</urlset>`));
  return true;
}

function addPrimeProductsToSiteJson(siteJsonFile, products) {
  if (!fs.existsSync(siteJsonFile)) return false;
  const site = JSON.parse(readMaybe(siteJsonFile));
  site.lastUpdated = today;
  site.primeDayTrendProducts = products.map((product) => ({
    asin: product.asin,
    title: product.title,
    image: product.image,
    url: product.url,
    trend: product.trend,
    addedFor: "Prime Day 2026 trend watch"
  }));
  if (Array.isArray(site.urls)) {
    const primeUrl = siteUrlJoin(site.baseUrl ?? site.url ?? "");
    if (primeUrl && !site.urls.includes(primeUrl)) site.urls.push(primeUrl);
  }
  fs.writeFileSync(siteJsonFile, `${JSON.stringify(site, null, 2)}\n`);
  return true;
}

function pageHtml({ homeHtml, site, products, href }) {
  const brand = escapeHtml(extractBrand(homeHtml, site));
  const category = escapeHtml(site.category || site.title || "Amazon product finds");
  const canonical = siteUrlJoin(site.url || site.baseUrl);
  const pageTitle = `${brand} Prime Day Watch | Trending Amazon Products`;
  const description = `${brand} Prime Day 2026 watchlist with five real Amazon product-page candidates, product images, and practical checks for ${category}.`;
  const header = injectPrimeNav(homeHtml.match(/<header\b[\s\S]*?<\/header>/i)?.[0] ?? "", href);
  const footer = homeHtml.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0] ?? `<footer><strong>${brand}</strong><a href="/sitemap.xml">Sitemap</a></footer>`;
  const bodyClass = homeHtml.match(/<body([^>]*)>/i)?.[1] ?? "";
  const styleLinks = [
    ...homeHtml.matchAll(/<link\b[^>]+rel="stylesheet"[^>]*>/gi),
    ...homeHtml.matchAll(/<style>[\s\S]*?<\/style>/gi)
  ].map((match) => match[0]).join("");
  const iconLinks = [...homeHtml.matchAll(/<link\b[^>]+(?:rel="icon"|rel="apple-touch-icon")[^>]*>/gi)].map((match) => match[0]).join("");
  const themeColor = homeHtml.match(/<meta name="theme-color"[^>]*>/i)?.[0] ?? "";
  const image = products[0]?.image ?? extractMeta(homeHtml, "og:image");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: `${brand} Prime Day 2026 watchlist`, url: canonical, dateModified: today, author: { "@type": "Organization", name: brand } },
      { "@type": "ItemList", numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: product.url, name: product.title, image: product.image })) }
    ]
  };

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(pageTitle)}</title><meta name="description" content="${escapeHtml(description)}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:title" content="${escapeHtml(pageTitle)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="article"><meta property="og:image" content="${escapeHtml(image)}"><meta name="twitter:card" content="summary_large_image">${themeColor}${iconLinks}${styleLinks}<style>.prime-day-note{margin:18px clamp(18px,5vw,72px);padding:16px 18px;border-radius:22px;background:rgba(255,255,255,.78);border:1px solid rgba(0,0,0,.1);line-height:1.55}.prime-day-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}.prime-day-card{display:flex;flex-direction:column;gap:14px;border-radius:26px;padding:18px;background:rgba(255,255,255,.82);box-shadow:0 18px 50px rgba(0,0,0,.08)}.prime-day-card img{width:100%;aspect-ratio:1;object-fit:contain;border-radius:20px;background:white}.prime-day-card h2{font-size:clamp(20px,2vw,28px);line-height:1.05;margin:.1em 0}.prime-day-card p{line-height:1.55}.prime-day-card .button,.prime-day-card .text-link{margin-top:auto}</style><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body${bodyClass}>${header}<main id="main"><aside class="disclosure prime-day-note"><strong>Affiliate disclosure:</strong> ${brand} may earn from qualifying purchases through Amazon links. Product prices, ratings, review counts, stock, coupons, and shipping details can change quickly, so this Prime Day page avoids static deal claims and sends you to Amazon to verify current details.</aside><section class="hero article-hero"><div class="hero-copy"><p class="eyebrow">Prime Day Watch</p><h1>Five ${category} products worth opening during Prime Day 2026.</h1><p>This is the quick, practical watchlist: real Amazon product pages, visible product images, and five trend-aligned picks to compare while the June 23-26 Prime Day event is live.</p><div class="actions"><a class="button primary" href="#prime-day-products">See the products</a><a class="button secondary" href="${href.replace(/prime-day\/$/, "")}">Back to ${brand}</a></div></div></section><section class="section split"><div><p class="eyebrow">How this list works</p><h2>Trend-aware, but not hype-drunk.</h2></div><div class="copy"><p>Prime Day shopping is most useful when the product solves a job you already have: storage, setup speed, summer use, travel friction, cleanup, gifting, or a repeat routine.</p><p>Open the Amazon listing before buying and verify dimensions, included pieces, materials, compatibility, current seller terms, and live availability.</p></div></section><section class="section" id="prime-day-products"><div class="section-heading"><p class="eyebrow">Trending product watchlist</p><h2>Five product-page candidates to compare first.</h2></div><div class="prime-day-grid">${products.map((product, index) => `<article class="prime-day-card"><a href="${product.url}" target="_blank" rel="nofollow sponsored noopener"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async"></a><p class="mini-label">${escapeHtml(product.trend)}</p><h2>${escapeHtml(product.title)}</h2><p>This pick earns a Prime Day look because it fits a clear ${category.toLowerCase()} job and has a direct Amazon product page with a product image. Treat the listing as the source of truth before buying.</p><a class="button primary compact" href="${product.url}" target="_blank" rel="nofollow sponsored noopener">Check on Amazon</a></article>`).join("")}</div></section><section class="section split"><div><p class="eyebrow">Buying check</p><h2>Do the boring verification before the fun click.</h2></div><div class="copy"><p>Check the exact variant, size, compatibility, included accessories, return window, and seller details. If the listing does not answer the real-world fit question, skip it.</p><p>No static discounts are listed here because Prime Day pricing and availability can change throughout the event.</p></div></section></main>${footer}</body></html>`;
}

function discoverNetworkSites(root) {
  const file = path.join(root, "network.json");
  if (!fs.existsSync(file)) return [];
  const network = JSON.parse(readMaybe(file));
  return (network.sites ?? []).map((site) => {
    const url = site.url || site.baseUrl || "";
    let localDir;
    const pathname = new URL(url).pathname.replace(/^\/|\/$/g, "");
    if (pathname) localDir = path.join(root, ...pathname.split("/"));
    else localDir = path.join(root, site.slug);
    return {
      root,
      networkFile: file,
      sitemapFile: path.join(root, "sitemap.xml"),
      localDir,
      siteJsonFile: "",
      site: { ...site, url, category: site.category || site.title }
    };
  });
}

function discoverSiteJsonSites(root) {
  const sites = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const localDir = path.join(root, entry.name);
    const siteJsonFile = path.join(localDir, "site.json");
    if (!fs.existsSync(siteJsonFile)) continue;
    const site = JSON.parse(readMaybe(siteJsonFile));
    sites.push({
      root,
      sitemapFile: path.join(localDir, "sitemap.xml"),
      localDir,
      siteJsonFile,
      site: { ...site, url: site.baseUrl || site.url || "" }
    });
  }
  return sites;
}

const results = [];

for (const root of roots) {
  const sites = [...discoverNetworkSites(root), ...discoverSiteJsonSites(root)];
  for (const record of sites) {
    const homeHtml = readMaybe(path.join(record.localDir, "index.html"));
    const products = pickPrimeProducts(record.localDir);
    const brand = extractBrand(homeHtml, record.site);
    if (!homeHtml || products.length < 5 || !record.site.url) {
      results.push({
        root,
        slug: record.site.slug,
        brand,
        status: "skipped",
        reason: !homeHtml ? "missing home html" : !record.site.url ? "missing site url" : "fewer than five direct Amazon product candidates with images"
      });
      continue;
    }

    const href = navHref(record.site.url);
    const primeUrl = siteUrlJoin(record.site.url);
    write(path.join(record.localDir, "prime-day", "index.html"), pageHtml({ homeHtml, site: record.site, products, href }));
    const navFilesTouched = updateSiteHtmlNav(record.localDir, href);
    const sitemapUpdated = updateSitemap(record.sitemapFile, primeUrl);
    const siteJsonUpdated = addPrimeProductsToSiteJson(record.siteJsonFile, products);

    results.push({
      root,
      slug: record.site.slug,
      brand,
      status: "created",
      url: primeUrl,
      products: products.map(({ asin, title, url, image, trend }) => ({ asin, title, url, image, trend })),
      navFilesTouched,
      sitemapUpdated,
      siteJsonUpdated
    });
  }
}

write(reportPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), date: today, total: results.length, created: results.filter((r) => r.status === "created").length, skipped: results.filter((r) => r.status === "skipped").length, results }, null, 2)}\n`);

const created = results.filter((result) => result.status === "created").length;
const skipped = results.filter((result) => result.status === "skipped");
console.log(`Prime Day static articles: ${created} created, ${skipped.length} skipped, ${results.length} discovered`);
for (const result of skipped.slice(0, 20)) {
  console.log(`SKIP | ${result.root} | ${result.slug} | ${result.reason}`);
}
if (skipped.length) process.exitCode = 1;
