import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import path from "node:path";

const affiliateTag = "kinsta-sites-20";
const rootOutDir = "kinsta-independent-dist";
const lastUpdated = new Date().toLocaleDateString("sv-SE", { timeZone: "America/New_York" });
const baseDomain = process.env.KINSTA_BASE_DOMAIN ?? "sevalla.page";
const indexNowKey = "d0d7459d522cb7137ce2f9513ec0b6072076e3732352c802";
const googleVerificationFile = "googleb6f86f0478c29141.html";
const googleVerificationBody = "google-site-verification: googleb6f86f0478c29141.html";
const googleMetaVerification = "0agZy5GuI7OZ1lxBtUf07f-FAqD_zjjvc0mJmrkIFW8";
const bingVerificationToken = "750056853078BFC5A0F22A9F1308D80B";

const sites = [
  {
    slug: "deskflow-edit",
    brand: "DeskFlow Edit",
    category: "Home Office And Gaming Desk Accessories",
    eyebrow: "Workspace buying map",
    h1: "Desk upgrades for cleaner workdays and better setup flow.",
    dek: "A larger affiliate shortlist for cable control, monitor height, desk storage, task lighting, laptop stands, and gaming-desk comfort.",
    intent: "commercial investigation for desk accessories",
    sources: ["desk-combo", "remote-den"],
    palette: ["#f2f5f1", "#141816", "#507d61", "#2d4638", "#dce8de"],
    monetization: [
      ["amazon_business_bounty", "Amazon Business fit", "Useful for home-office, studio, and team purchasing contexts once an approved bounty link is available."],
      ["prime_bounty", "Prime fit", "Relevant when shoppers compare shipping speed, returns, and repeat desk-supply purchases."]
    ],
    guidePages: [
      ["desk-cable-management", "Best Desk Cable Management Accessories", "cable"],
      ["monitor-stand-risers", "Best Monitor Stand Risers", "monitor"],
      ["small-desk-organizers", "Best Small Desk Organizers", "organizer"]
    ]
  },
  {
    slug: "morning-counter",
    brand: "Morning Counter",
    category: "Coffee Gear And Kitchen Prep Tools",
    eyebrow: "Morning routine edit",
    h1: "Kitchen tools for better coffee, cleaner prep, and fewer wasted steps.",
    dek: "A 50-plus product map for coffee gear, scales, prep tools, thermometers, organizers, and counter-friendly upgrades.",
    intent: "buyer comparison for kitchen and coffee tools",
    sources: ["brew-counter", "kitchen"],
    palette: ["#f5efe7", "#1d1711", "#9b6845", "#4c3121", "#e5d0bb"],
    monetization: [
      ["prime_bounty", "Prime fit", "Useful where shoppers are comparing restock timing, returns, and recurring kitchen supplies."]
    ],
    guidePages: [
      ["coffee-bar-accessories", "Best Coffee Bar Accessories", "coffee"],
      ["kitchen-measuring-tools", "Best Kitchen Measuring Tools", "scale"],
      ["weeknight-prep-tools", "Best Weeknight Prep Tools", "prep"]
    ]
  },
  {
    slug: "trail-cabin-kit",
    brand: "Trail Cabin Kit",
    category: "Camping Gear And Car Travel Accessories",
    eyebrow: "Trip-ready buying map",
    h1: "Packing, camp cooking, and car-cabin gear for easier weekends away.",
    dek: "A deeper static affiliate site for camping essentials, trail tools, car chargers, organizers, emergency add-ons, and road-trip helpers.",
    intent: "commercial investigation for travel and outdoor gear",
    sources: ["trail-signal", "cabin-mile"],
    palette: ["#eef2e8", "#171a13", "#758a55", "#3c472c", "#d9dec8"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for last-minute trip purchases where shipping and returns matter."],
      ["amazon_haul_bounty", "Amazon Haul fit", "Potential future fit for inexpensive add-ons such as backup organizers, small tools, and camp extras."]
    ],
    guidePages: [
      ["camp-kitchen-tools", "Best Camp Kitchen Tools", "camp"],
      ["car-charging-accessories", "Best Car Charging Accessories", "charger"],
      ["road-trip-organizers", "Best Road Trip Organizers", "organizer"]
    ]
  },
  {
    slug: "classroom-maker",
    brand: "Classroom Maker",
    category: "Teacher Supplies And Craft Tools",
    eyebrow: "Classroom supply edit",
    h1: "Teacher carts, craft bins, and classroom supplies that are easier to compare.",
    dek: "A combined buying guide for classroom organization, craft supplies, student activity tools, storage, labels, and everyday teacher-cart restocks.",
    intent: "buyer comparison for classroom and craft supplies",
    sources: ["teacher-cart", "craft-current"],
    palette: ["#f4f1ea", "#191713", "#b48539", "#4d3a1e", "#e5d7b8"],
    monetization: [
      ["amazon_business_bounty", "Amazon Business fit", "Strong fit for school, classroom, and small organization purchasing once approved Associates links are available."],
      ["prime_bounty", "Prime fit", "Relevant for repeat classroom supply orders and urgent restocks."]
    ],
    guidePages: [
      ["teacher-cart-organization", "Best Teacher Cart Organization", "cart"],
      ["classroom-craft-supplies", "Best Classroom Craft Supplies", "craft"],
      ["student-activity-storage", "Best Student Activity Storage", "storage"]
    ]
  },
  {
    slug: "dorm-study-stack",
    brand: "Dorm Study Stack",
    category: "Dorm Essentials And Study Desk Accessories",
    eyebrow: "Student setup map",
    h1: "Dorm and study gear for small spaces, better light, and easier routines.",
    dek: "A broad student-focused affiliate site for dorm storage, shower caddies, lamps, note tools, desk accessories, chargers, and compact organizers.",
    intent: "commercial investigation for college and study gear",
    sources: ["dorm-proof", "study-glow"],
    palette: ["#eef3f8", "#121821", "#5b7ba7", "#263f60", "#d7e2ef"],
    monetization: [
      ["prime_young_adult_bounty", "Prime for Young Adults fit", "Strong contextual fit for dorm shopping after owner-approved bounty links are available."],
      ["kindle_unlimited_bounty", "Kindle Unlimited fit", "Relevant only in study and reading workflow content with approved links."]
    ],
    guidePages: [
      ["dorm-storage-essentials", "Best Dorm Storage Essentials", "storage"],
      ["study-desk-lighting", "Best Study Desk Lighting", "lamp"],
      ["small-room-organizers", "Best Small Room Organizers", "organizer"]
    ]
  },
  {
    slug: "table-party-play",
    brand: "Table Party Play",
    category: "Family Games And Party Supplies",
    eyebrow: "Hosting and game-night edit",
    h1: "Games, party supplies, and table helpers for easier nights together.",
    dek: "A 50-plus product affiliate site for board games, family activities, serving supplies, party setup, hosting tools, and cleanup helpers.",
    intent: "buyer comparison for family games and party supplies",
    sources: ["game-night", "party-circuit"],
    palette: ["#f7eef1", "#201417", "#c25f78", "#653243", "#ead0d8"],
    monetization: [
      ["prime_video_bounty", "Prime Video fit", "Potential future fit for movie-night content, pending approved links."],
      ["prime_gaming_bounty", "Prime Gaming fit", "Potential future fit for households mixing tabletop and digital game nights."]
    ],
    guidePages: [
      ["family-board-games", "Best Family Board Games", "game"],
      ["party-table-supplies", "Best Party Table Supplies", "party"],
      ["hosting-cleanup-tools", "Best Hosting Cleanup Tools", "cleanup"]
    ]
  },
  {
    slug: "garden-plant-studio",
    brand: "Garden Plant Studio",
    category: "Gardening Tools And Indoor Plant Products",
    eyebrow: "Green-space buying map",
    h1: "Plant shelves, garden tools, and care gear for indoor and outdoor growing.",
    dek: "A larger static affiliate site for planters, watering tools, plant lights, soil helpers, pruning tools, supports, and small-space gardening gear.",
    intent: "commercial investigation for plant and garden tools",
    sources: ["sunny-garden", "plant-studio"],
    palette: ["#eef4eb", "#11190f", "#5f8c4f", "#2f4f28", "#d8e7d0"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for repeat plant-care supplies and seasonal garden restocks."]
    ],
    guidePages: [
      ["indoor-plant-care-tools", "Best Indoor Plant Care Tools", "plant"],
      ["small-garden-tools", "Best Small Garden Tools", "garden"],
      ["watering-and-pruning-gear", "Best Watering And Pruning Gear", "water"]
    ]
  },
  {
    slug: "active-daily-kit",
    brand: "Active Daily Kit",
    category: "Walking, Fitness, And Hydration Accessories",
    eyebrow: "Daily movement edit",
    h1: "Walking, workout, and hydration gear for routines that actually repeat.",
    dek: "A bigger affiliate buying map for walking accessories, home-fitness tools, bottles, mobility helpers, bags, bands, and everyday training gear.",
    intent: "buyer comparison for fitness and walking accessories",
    sources: ["walk-club", "home-fitness", "hydrate-desk"],
    palette: ["#edf5f4", "#101918", "#3e9488", "#24504d", "#d1e6e3"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for replenishable fitness accessories and quick routine upgrades."]
    ],
    guidePages: [
      ["walking-accessories", "Best Walking Accessories", "walking"],
      ["home-fitness-tools", "Best Home Fitness Tools", "fitness"],
      ["hydration-accessories", "Best Hydration Accessories", "bottle"]
    ]
  },
  {
    slug: "beauty-bath-edit",
    brand: "Beauty Bath Edit",
    category: "Beauty, Bath, And Hair Tools",
    eyebrow: "Routine upgrade map",
    h1: "Beauty tools, bath products, and hair helpers worth comparing first.",
    dek: "A deep affiliate site for skincare, bath storage, towels, hair tools, shower helpers, mirrors, organizers, and routine-friendly accessories.",
    intent: "commercial investigation for beauty and bath products",
    sources: ["beauty", "bath-atelier", "hair-edit"],
    palette: ["#f7eef3", "#1f151a", "#ba6a8b", "#5f3548", "#ecd4df"],
    monetization: [
      ["prime_bounty", "Prime fit", "Useful for routine replenishment and fast shipping comparisons."],
      ["amazon_haul_bounty", "Amazon Haul fit", "Potential future fit for low-cost bath and beauty add-ons after approved links are available."]
    ],
    guidePages: [
      ["bathroom-organization", "Best Bathroom Organization", "organizer"],
      ["hair-tool-accessories", "Best Hair Tool Accessories", "hair"],
      ["skincare-routine-tools", "Best Skincare Routine Tools", "skin"]
    ]
  },
  {
    slug: "home-reset-lab",
    brand: "Home Reset Lab",
    category: "Cleaning, Laundry, And Home Organization Products",
    eyebrow: "Reset routine edit",
    h1: "Cleaning, laundry, and organization products for a calmer home reset.",
    dek: "A 50-plus product affiliate site for cleaning tools, laundry helpers, bins, refillable home products, closet storage, and weekly reset routines.",
    intent: "buyer comparison for home reset products",
    sources: ["clean-slate-lab", "laundry-lane", "home-organization", "refill-house"],
    palette: ["#f1f3ef", "#161916", "#687b5e", "#394735", "#dde5d9"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for recurring cleaning, laundry, and organization supply purchases."],
      ["amazon_business_bounty", "Amazon Business fit", "Potential fit for short-term rental, office, or small-team supply contexts."]
    ],
    guidePages: [
      ["laundry-room-products", "Best Laundry Room Products", "laundry"],
      ["cleaning-tools", "Best Cleaning Tools", "clean"],
      ["home-organization-bins", "Best Home Organization Bins", "organizer"]
    ]
  }
];

function escapeHtml(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function slugify(value = "") {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function cleanTitle(value = "") {
  return String(value).replace(/<[^>]+>/g, "").replace(/\\"/g, '"').replace(/\\&/g, "&").replace(/\s+/g, " ").trim();
}

function asinFromUrl(url = "") {
  return url.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/)?.[1] ?? url.match(/\/([A-Z0-9]{10})(?:[/?]|$)/)?.[1] ?? null;
}

function affiliateUrl(url = "") {
  const asin = asinFromUrl(url);
  return asin ? `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}` : url;
}

function displayTitle(title = "") {
  const clean = cleanTitle(title).replace(/\s*-\s*Amazon\.com.*$/i, "");
  return clean.length > 118 ? `${clean.slice(0, 115).replace(/\s+\S*$/, "").trim()}...` : clean;
}

function parseCatalog(slug) {
  const file = `content/data/${slug}-catalog.ts`;
  const raw = readFileSyncText(file);
  const products = [];
  const pattern = /\{[\s\S]*?(?:"amazonUrl"|amazonUrl):\s*"([^"]+)"[\s\S]*?\}/g;
  for (const match of raw.matchAll(pattern)) {
    const block = match[0];
    const field = (name) => block.match(new RegExp(`(?:"${name}"|${name}):\\s*"((?:[^"\\\\]|\\\\.)*)"`))?.[1] ?? "";
    const image = field("src") || field("imageSrc");
    const amazonUrl = match[1];
    const asin = asinFromUrl(amazonUrl);
    if (!asin) continue;
    products.push({
      asin,
      source: slug,
      name: cleanTitle(field("name")),
      category: cleanTitle(field("category")),
      description: cleanTitle(field("description")),
      bestFor: cleanTitle(field("bestFor")),
      image,
      imageAlt: cleanTitle(field("alt") || field("name")),
      url: affiliateUrl(amazonUrl)
    });
  }
  return products;
}

function readFileSyncText(file) {
  return readFileSync(file, "utf8");
}

async function loadProducts(site) {
  const seen = new Set();
  const products = [];
  for (const source of site.sources) {
    for (const product of parseCatalog(source)) {
      const key = product.asin || product.name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      products.push(product);
    }
  }
  if (products.length < 50) {
    throw new Error(`${site.slug} has ${products.length} products; needs at least 50.`);
  }
  return products.slice(0, 60);
}

function productFit(product, site, index) {
  const lower = `${product.name} ${product.category}`.toLowerCase();
  if (lower.includes("organizer") || lower.includes("storage") || lower.includes("bin")) return "Best for reducing clutter";
  if (lower.includes("kit") || lower.includes("set")) return "Best starter bundle";
  if (lower.includes("charger") || lower.includes("power")) return "Best for keeping gear ready";
  if (lower.includes("light") || lower.includes("lamp")) return "Best visibility upgrade";
  if (lower.includes("clean") || lower.includes("laundry")) return "Best routine helper";
  if (lower.includes("bag") || lower.includes("case")) return "Best carry or storage pick";
  return site.guidePages[index % site.guidePages.length][1].replace(/^Best /, "Best for ");
}

function verifyChecklist(site, product) {
  const base = ["current price", "availability", "shipping/returns", "recent listing photos"];
  const lower = `${site.category} ${product.name}`.toLowerCase();
  if (lower.includes("desk")) return ["dimensions", "desk fit", "mounting method", ...base];
  if (lower.includes("coffee") || lower.includes("kitchen")) return ["counter footprint", "included pieces", "cleaning method", ...base];
  if (lower.includes("camp") || lower.includes("car")) return ["packed size", "vehicle/space fit", "included pieces", ...base];
  if (lower.includes("teacher") || lower.includes("craft")) return ["pack count", "classroom fit", "storage needs", ...base];
  if (lower.includes("dorm") || lower.includes("study")) return ["room size", "power needs", "shared-space fit", ...base];
  if (lower.includes("garden") || lower.includes("plant")) return ["plant/space fit", "material", "care notes", ...base];
  return ["dimensions", "materials", "included pieces", ...base];
}

function iconSvg(site) {
  const initials = site.brand.split(/\s+/).map((word) => word[0]).join("").slice(0, 2);
  const [, ink, accent, strong, soft] = site.palette;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" role="img" aria-label="${escapeHtml(site.brand)} logo"><rect width="72" height="72" rx="16" fill="${soft}"/><path d="M18 48V24l18-10 18 10v24L36 58 18 48Z" fill="${accent}" opacity=".88"/><path d="M24 46V28l12-7 12 7v18l-12 7-12-7Z" fill="${strong}"/><text x="36" y="41" text-anchor="middle" fill="${ink}" font-family="Arial,sans-serif" font-size="17" font-weight="900">${escapeHtml(initials)}</text></svg>`;
}

function shell(site, { title, description, canonical, body, schema }) {
  const [bg, ink, accent, strong, soft] = site.palette;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="google-site-verification" content="${googleMetaVerification}"><meta name="msvalidate.01" content="${bingVerificationToken}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website"><meta property="og:image" content="${site.baseUrl}/assets/icon.svg"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="${accent}"><link rel="icon" href="/assets/icon.svg"><link rel="stylesheet" href="/assets/styles.css"><style>:root{--bg:${bg};--ink:${ink};--accent:${accent};--strong:${strong};--soft:${soft}}</style><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body><a class="skip-link" href="#main">Skip to content</a><header class="topbar"><a class="brand" href="/"><img src="/assets/icon.svg" alt="" width="36" height="36"><span>${escapeHtml(site.brand)}</span></a><nav><a href="/products/">Products</a><a href="/top-50/">Top 50</a><a href="/editorial-policy/">How we choose</a><a href="/affiliate-disclosure/">Disclosure</a></nav></header>${body}<footer><strong>${escapeHtml(site.brand)}</strong><span>Kinsta/Sevalla-ready static affiliate site. Updated ${lastUpdated}.</span><a href="/sitemap.xml">Sitemap</a></footer></body></html>`;
}

function disclosure(site) {
  return `<aside class="disclosure"><strong>Affiliate disclosure:</strong> ${escapeHtml(site.brand)} may earn from qualifying purchases through Amazon links. We avoid fixed prices, star ratings, review counts, and stock claims because Amazon listing details can change quickly.</aside>`;
}

function productCard(site, product, index, compact = false) {
  const guide = site.guidePages[index % site.guidePages.length];
  return `<article class="product-card" id="pick-${index + 1}"><a class="product-image" href="${product.url}" target="_blank" rel="nofollow sponsored noopener"><img src="${product.image}" alt="${escapeHtml(product.imageAlt || product.name)}" loading="${index < 3 ? "eager" : "lazy"}" decoding="async"></a><div><p class="mini">${escapeHtml(product.category)} / pick ${index + 1}</p><span class="best-for">${escapeHtml(productFit(product, site, index))}</span><h3>${escapeHtml(displayTitle(product.name))}</h3><p>${escapeHtml(product.description || `A real Amazon product-page pick for ${site.category.toLowerCase()} shoppers.`)}</p>${compact ? "" : `<ul><li>Real Amazon product page</li><li>Real product image</li><li>Verify ${verifyChecklist(site, product).slice(0, 3).join(", ")} on Amazon</li></ul>`}<a class="text-link" href="${product.url}" target="_blank" rel="nofollow sponsored noopener">Check on Amazon</a><a class="internal-link" href="/best/${guide[0]}/">Related guide: ${escapeHtml(guide[1])}</a></div></article>`;
}

function comparisonTable(site, products, title = "Comparison table") {
  return `<section class="section table-section"><div class="section-heading"><p class="eyebrow">Compare before buying</p><h2>${escapeHtml(title)}</h2><p>These are editorial fit notes, not Amazon ratings. Open the current product page to verify exact details before buying.</p></div><div class="table-wrap"><table><thead><tr><th>Pick</th><th>Best for</th><th>Verify on Amazon</th><th></th></tr></thead><tbody>${products.slice(0, 10).map((product, index) => `<tr><td><strong>${escapeHtml(displayTitle(product.name))}</strong></td><td>${escapeHtml(productFit(product, site, index))}</td><td>${escapeHtml(verifyChecklist(site, product).slice(0, 4).join(", "))}</td><td><a href="${product.url}" target="_blank" rel="nofollow sponsored noopener">Check</a></td></tr>`).join("")}</tbody></table></div></section>`;
}

function serviceSection(site) {
  return `<section class="section service-section"><div class="section-heading"><p class="eyebrow">Monetization surface</p><h2>Affiliate expertise built into the page.</h2><p>The primary surface is Amazon product commissions. Service opportunities stay informational until owner-approved Associates bounty links are added.</p></div><div class="service-grid"><article><span>standard commission</span><h3>Product-page revenue</h3><p>Every product CTA uses a tagged Amazon detail-page URL with sponsored/nofollow attributes and a disclosure before monetized links.</p></article>${site.monetization.map(([kind, title, note]) => `<article><span>${escapeHtml(kind.replace(/_/g, " "))}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p></article>`).join("")}</div></section>`;
}

function homePage(site, products) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: site.brand, url: site.baseUrl },
      { "@type": "CollectionPage", name: `${site.brand} ${site.category}`, url: `${site.baseUrl}/`, dateModified: lastUpdated },
      { "@type": "ItemList", numberOfItems: products.length, itemListElement: products.slice(0, 50).map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `${site.baseUrl}/products/#pick-${index + 1}`, name: product.name, image: product.image })) }
    ]
  };
  const body = `<main id="main">${disclosure(site)}<section class="hero"><div><p class="eyebrow">${escapeHtml(site.eyebrow)}</p><h1>${escapeHtml(site.h1)}</h1><p>${escapeHtml(site.dek)}</p><div class="actions"><a class="button primary" href="/top-50/">Browse top 50</a><a class="button" href="/products/">Open product index</a></div></div><a class="hero-product" href="${products[0].url}" target="_blank" rel="nofollow sponsored noopener"><img src="${products[0].image}" alt="${escapeHtml(products[0].imageAlt || products[0].name)}"><span>Featured Amazon detail page</span></a></section><section class="trust-strip"><span>${products.length}+ real products</span><span>Real product images</span><span>No stale prices</span><span>Updated ${lastUpdated}</span></section><section class="section split"><div><p class="eyebrow">Buyer intent</p><h2>Use this before Amazon turns into fifty tabs.</h2></div><div class="copy"><p>${escapeHtml(site.brand)} is built around ${escapeHtml(site.intent)}. The page narrows the product set by use case, then sends qualified shoppers to Amazon to confirm current price, options, shipping, returns, and availability.</p><p>That keeps the site conversion-focused without copying volatile Amazon details or making fake testing claims.</p></div></section>${comparisonTable(site, products, `${site.category} quick comparison`)}${serviceSection(site)}<section class="section" id="featured"><div class="section-heading"><p class="eyebrow">Featured shortlist</p><h2>Start with twelve strong first clicks.</h2></div><div class="product-grid">${products.slice(0, 12).map((product, index) => productCard(site, product, index)).join("")}</div></section><section class="section guide-hub"><div class="section-heading"><p class="eyebrow">Deeper pages</p><h2>Search-intent paths for internal links.</h2></div><div class="guide-grid">${site.guidePages.map(([slug, title, keyword]) => `<a class="guide-card" href="/best/${slug}/"><span>${escapeHtml(keyword)}</span><strong>${escapeHtml(title)}</strong><p>Compare the most relevant ${escapeHtml(site.category.toLowerCase())} products for this specific buying job.</p></a>`).join("")}</div></section></main>`;
  return shell(site, { title: `${site.brand} | ${site.category}`, description: `${site.brand} compares ${products.length}+ real Amazon products for ${site.category.toLowerCase()} with affiliate disclosure and buyer-intent notes.`, canonical: `${site.baseUrl}/`, body, schema });
}

function productIndexPage(site, products) {
  const body = `<main id="main">${disclosure(site)}<section class="page-hero"><p class="eyebrow">Product index</p><h1>${products.length} real Amazon products to compare.</h1><p>Use this as the full product map, then verify current listing details directly on Amazon before buying.</p></section><section class="section"><div class="product-grid">${products.map((product, index) => productCard(site, product, index)).join("")}</div></section></main>`;
  return shell(site, { title: `${site.brand} Product Index`, description: `${products.length} real Amazon product-page picks for ${site.category.toLowerCase()}.`, canonical: `${site.baseUrl}/products/`, body, schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: `${site.brand} Product Index`, url: `${site.baseUrl}/products/` } });
}

function topPage(site, products) {
  const body = `<main id="main">${disclosure(site)}<section class="page-hero"><p class="eyebrow">Top 50</p><h1>Top 50 ${escapeHtml(site.category)} picks worth checking first.</h1><p>Ranked as an editorial shortlist by use case, not by live Amazon price or star rating.</p></section>${comparisonTable(site, products.slice(0, 20), "Top decision table")}<section class="section"><div class="article-list">${products.slice(0, 50).map((product, index) => productCard(site, product, index, true)).join("")}</div></section></main>`;
  return shell(site, { title: `Top 50 ${site.category} | ${site.brand}`, description: `A Top 50 Amazon affiliate shortlist for ${site.category.toLowerCase()} with real product images and direct product-page links.`, canonical: `${site.baseUrl}/top-50/`, body, schema: { "@context": "https://schema.org", "@type": "Article", headline: `Top 50 ${site.category}`, dateModified: lastUpdated } });
}

function guidePage(site, products, page) {
  const [slug, title, keyword] = page;
  const selected = products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(keyword)).concat(products).filter((product, index, all) => all.findIndex((item) => item.asin === product.asin) === index).slice(0, 16);
  const body = `<main id="main">${disclosure(site)}<section class="page-hero"><p class="eyebrow">${escapeHtml(keyword)}</p><h1>${escapeHtml(title)}</h1><p>This page narrows ${escapeHtml(site.category.toLowerCase())} around one buying job, then links back to real Amazon detail pages for current specs.</p></section>${comparisonTable(site, selected, `${title} comparison`)}<section class="section"><div class="product-grid">${selected.map((product, index) => productCard(site, product, index)).join("")}</div></section></main>`;
  return shell(site, { title: `${title} | ${site.brand}`, description: `${title} from ${site.brand}: compare real Amazon products, images, fit notes, and buying checks.`, canonical: `${site.baseUrl}/best/${slug}/`, body, schema: { "@context": "https://schema.org", "@type": "Article", headline: title, dateModified: lastUpdated } });
}

function supportPage(site, slug) {
  const isDisclosure = slug === "affiliate-disclosure";
  const title = isDisclosure ? "Affiliate Disclosure" : slug === "editorial-policy" ? "Editorial Policy" : "Contact";
  const copy = isDisclosure
    ? `${site.brand} may earn from qualifying Amazon purchases. Product prices, ratings, review counts, stock, shipping, coupons, and seller terms can change on Amazon, so this site avoids publishing those details as static claims.`
    : slug === "editorial-policy"
      ? `${site.brand} uses real product-page URLs, real product imagery, clear affiliate labeling, buyer-intent grouping, and internal links designed to help shoppers compare without pretending to provide hands-on lab testing.`
      : `For ${site.brand}, use the portfolio owner workflow to update products, tracking IDs, bounty links, or stale images.`;
  const body = `<main id="main"><section class="page-hero"><p class="eyebrow">${escapeHtml(site.brand)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(copy)}</p></section></main>`;
  return shell(site, { title: `${title} | ${site.brand}`, description: copy, canonical: `${site.baseUrl}/${slug}/`, body, schema: { "@context": "https://schema.org", "@type": "WebPage", name: `${title} | ${site.brand}` } });
}

function styles() {
  return `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,Avenir Next,Helvetica,Arial,sans-serif;line-height:1.5}a{color:inherit}.skip-link{position:absolute;left:12px;top:12px;z-index:10;transform:translateY(-140%);background:var(--ink);color:var(--bg);padding:10px 14px;border-radius:8px}.skip-link:focus{transform:none}.topbar{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:14px clamp(18px,4vw,56px);background:color-mix(in srgb,var(--bg) 88%,white);border-bottom:1px solid color-mix(in srgb,var(--ink) 12%,transparent);backdrop-filter:blur(14px)}.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-weight:900}.brand img{border-radius:8px}nav{display:flex;gap:14px;flex-wrap:wrap;font-size:14px}nav a{text-decoration:none;font-weight:800}.disclosure{margin:18px clamp(18px,5vw,72px) 0;padding:14px 16px;border:1px dashed color-mix(in srgb,var(--ink) 24%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 72%,white)}.hero{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(290px,.72fr);gap:34px;align-items:center;padding:clamp(46px,8vw,94px) clamp(18px,5vw,72px) 32px}.hero h1,.page-hero h1{font-size:clamp(42px,7vw,82px);line-height:.96;letter-spacing:0;margin:0 0 18px}.hero p,.page-hero p{font-size:19px;max-width:760px}.eyebrow,.mini{font-size:12px;text-transform:uppercase;letter-spacing:.11em;font-weight:900;color:var(--strong)}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.button{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;padding:12px 15px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);text-decoration:none;font-weight:900}.primary{background:var(--ink);color:var(--bg)}.hero-product{position:relative;display:grid;place-items:center;min-height:360px;border-radius:8px;background:#fff;overflow:hidden;box-shadow:0 24px 70px color-mix(in srgb,var(--ink) 16%,transparent)}.hero-product img{width:100%;height:100%;max-height:340px;object-fit:contain;padding:24px}.hero-product span{position:absolute;left:14px;right:14px;bottom:14px;background:var(--ink);color:var(--bg);padding:8px 10px;border-radius:8px;font-size:13px;font-weight:900}.trust-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 clamp(18px,5vw,72px) 24px}.trust-strip span{padding:12px;border-radius:8px;background:var(--ink);color:var(--bg);font-weight:900;text-align:center}.section,.page-hero{padding:42px clamp(18px,5vw,72px)}.split{display:grid;grid-template-columns:.75fr 1.25fr;gap:26px}.copy{font-size:18px}.section-heading{max-width:820px;margin-bottom:18px}h2{font-size:clamp(28px,4vw,48px);line-height:1.02;margin:0 0 14px}h3{font-size:20px;line-height:1.15;margin:0 0 10px;overflow-wrap:anywhere}.product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.product-card{border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 78%,white);overflow:hidden}.product-image{height:215px;display:grid;place-items:center;background:#fff}.product-image img{width:100%;height:100%;object-fit:contain;padding:14px}.product-card>div{padding:16px}.best-for{display:inline-flex;width:fit-content;max-width:100%;margin-bottom:10px;padding:5px 9px;border-radius:999px;background:var(--soft);color:var(--strong);font-size:12px;font-weight:900}.text-link,.internal-link{display:block;margin-top:9px;font-weight:900;color:var(--strong);text-decoration:none}.internal-link{font-size:13px}.service-grid,.guide-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.service-grid article,.guide-card{padding:18px;border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 78%,white);text-decoration:none}.service-grid span,.guide-card span{display:block;margin-bottom:10px;color:var(--strong);font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.table-wrap{overflow:auto;border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 82%,white)}table{width:100%;min-width:760px;border-collapse:collapse}th,td{text-align:left;vertical-align:top;padding:13px;border-bottom:1px solid color-mix(in srgb,var(--ink) 10%,transparent)}th{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--strong)}.article-list{display:grid;gap:16px}.article-list .product-card{display:grid;grid-template-columns:240px minmax(0,1fr)}footer{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:28px clamp(18px,5vw,72px);border-top:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}@media(max-width:1050px){.product-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:850px){.topbar{align-items:flex-start;flex-direction:column}.hero,.split,.article-list .product-card{grid-template-columns:1fr}.trust-strip,.service-grid,.guide-grid{grid-template-columns:1fr 1fr}.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hero-product{min-height:280px}}@media(max-width:560px){.hero h1,.page-hero h1{font-size:40px}.product-grid,.trust-strip,.service-grid,.guide-grid{grid-template-columns:1fr}.section,.page-hero,.hero{padding-left:18px;padding-right:18px}}`;
}

async function buildSite(site) {
  site.baseUrl = `https://${site.slug}.${baseDomain}`;
  const products = await loadProducts(site);
  const outDir = path.join(rootOutDir, site.slug);
  await mkdir(path.join(outDir, "assets"), { recursive: true });
  await mkdir(path.join(outDir, "products"), { recursive: true });
  await mkdir(path.join(outDir, "top-50"), { recursive: true });
  for (const [slug] of site.guidePages) await mkdir(path.join(outDir, "best", slug), { recursive: true });
  for (const support of ["affiliate-disclosure", "editorial-policy", "contact"]) await mkdir(path.join(outDir, support), { recursive: true });
  await writeFile(path.join(outDir, "index.html"), homePage(site, products));
  await writeFile(path.join(outDir, "products", "index.html"), productIndexPage(site, products));
  await writeFile(path.join(outDir, "top-50", "index.html"), topPage(site, products));
  for (const page of site.guidePages) await writeFile(path.join(outDir, "best", page[0], "index.html"), guidePage(site, products, page));
  for (const support of ["affiliate-disclosure", "editorial-policy", "contact"]) await writeFile(path.join(outDir, support, "index.html"), supportPage(site, support));
  await writeFile(path.join(outDir, "assets", "icon.svg"), iconSvg(site));
  await writeFile(path.join(outDir, "assets", "styles.css"), styles());
  await writeFile(path.join(outDir, `${indexNowKey}.txt`), indexNowKey);
  await writeFile(path.join(outDir, googleVerificationFile), googleVerificationBody);
  const urls = [`${site.baseUrl}/`, `${site.baseUrl}/products/`, `${site.baseUrl}/top-50/`, ...site.guidePages.map(([slug]) => `${site.baseUrl}/best/${slug}/`), `${site.baseUrl}/affiliate-disclosure/`, `${site.baseUrl}/editorial-policy/`, `${site.baseUrl}/contact/`];
  await writeFile(path.join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc><lastmod>${lastUpdated}</lastmod><changefreq>weekly</changefreq><priority>${url === `${site.baseUrl}/` ? "1.0" : "0.8"}</priority></url>`).join("\n")}\n</urlset>\n`);
  await writeFile(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.baseUrl}/sitemap.xml\n`);
  await writeFile(path.join(outDir, "site.json"), JSON.stringify({ slug: site.slug, brand: site.brand, baseUrl: site.baseUrl, platform: "Kinsta/Sevalla Static Site Hosting", affiliateTag, lastUpdated, productCount: products.length, monetizationSurface: [{ kind: "standard_commission", title: "Amazon product commissions" }, ...site.monetization.map(([kind, title]) => ({ kind, title }))], sourceCatalogs: site.sources, urls, products }, null, 2));
  return { slug: site.slug, brand: site.brand, projectName: site.slug, baseUrl: site.baseUrl, productCount: products.length };
}

await rm(rootOutDir, { recursive: true, force: true });
await mkdir(rootOutDir, { recursive: true });
await cp("public/images", path.join(rootOutDir, "images"), { recursive: true });
const summary = [];
for (const site of sites) {
  console.log(`Building ${site.brand}...`);
  summary.push(await buildSite(site));
}
await writeFile(path.join(rootOutDir, "manifest.json"), JSON.stringify({ affiliateTag, indexNowKey, lastUpdated, baseDomain, siteCount: summary.length, sites: summary }, null, 2));
console.table(summary);
