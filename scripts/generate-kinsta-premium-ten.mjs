import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  curateProductsForSite,
  editorialPolicyCopy,
  featuredHeading,
  guideCardDescription,
  guideHubHeading,
  guideIntro,
  productBadge,
  productDescription,
  productGuide,
  productIndexHeadline,
  selectGuideProducts
} from "./lib/premium-content-quality.mjs";

const affiliateTag = "kinsta-sites-20";
const rootOutDir = "kinsta-premium-dist";
const lastUpdated = new Date().toLocaleDateString("sv-SE", { timeZone: "America/New_York" });
const baseDomain = process.env.KINSTA_BASE_DOMAIN ?? "kinsta.page";
const indexNowKey = "d0d7459d522cb7137ce2f9513ec0b6072076e3732352c802";
const googleVerificationFile = "googleb6f86f0478c29141.html";
const googleVerificationBody = "google-site-verification: googleb6f86f0478c29141.html";
const googleMetaVerification = "0agZy5GuI7OZ1lxBtUf07f-FAqD_zjjvc0mJmrkIFW8";
const bingVerificationToken = "750056853078BFC5A0F22A9F1308D80B";

const sites = [
  {
    slug: "aroma-room-edit",
    domain: "aroma-room-edit.kinsta.page",
    brand: "Aroma Room Edit",
    category: "Candles, Diffusers, And Calm Home Fragrance",
    eyebrow: "Scent-layer buying edit",
    h1: "Candles, diffusers, and room scent gear for calmer spaces.",
    dek: "A premium affiliate shortlist for candle warmers, reed diffusers, incense holders, room sprays, cozy add-ons, and low-effort calm-home upgrades.",
    intent: "commercial investigation for home fragrance and calming room products",
    sources: ["layered-air", "tiny-calm-co"],
    palette: ["#f7f1eb", "#18110d", "#b97857", "#553323", "#ead7c8"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for recurring home-fragrance replenishment and giftable room upgrades."],
      ["amazon_haul_bounty", "Amazon Haul fit", "Potential fit for small scent add-ons after approved links are available."]
    ],
    guidePages: [
      ["candle-warmer-lamps", "Best Candle Warmer Lamps", "warmer"],
      ["reed-diffuser-sets", "Best Reed Diffuser Sets", "diffuser"],
      ["incense-and-room-sprays", "Best Incense And Room Sprays", "scent"]
    ]
  },
  {
    slug: "patio-pool-host",
    domain: "patio-pool-host.kinsta.page",
    brand: "Patio Pool Host",
    category: "Patio Hosting And Poolside Accessories",
    eyebrow: "Outdoor hosting board",
    h1: "Patio, pool, and backyard picks for easier outdoor hosting.",
    dek: "A real-product comparison hub for outdoor seating helpers, poolside organization, patio lighting, serving gear, shade add-ons, and backyard comfort tools.",
    intent: "buyer comparison for patio and pool accessories",
    sources: ["outpost-patio", "poolside-stack"],
    palette: ["#edf5f3", "#101918", "#2e8f93", "#1f595f", "#cfe8e7"],
    monetization: [
      ["prime_bounty", "Prime fit", "Useful for seasonal hosting purchases where fast shipping and returns matter."]
    ],
    guidePages: [
      ["poolside-organization", "Best Poolside Organization", "pool"],
      ["patio-serving-gear", "Best Patio Serving Gear", "serving"],
      ["backyard-comfort-tools", "Best Backyard Comfort Tools", "patio"]
    ]
  },
  {
    slug: "paper-creator-studio",
    domain: "paper-creator-studio-public-c78x4.kinsta.page",
    brand: "Paper Creator Studio",
    category: "Stationery, Journaling, And Creator Desk Tools",
    eyebrow: "Analog creator desk",
    h1: "Paper tools and creator desk gear for better planning sessions.",
    dek: "A polished buying map for notebooks, pens, planners, desk capture tools, creator accessories, organization pieces, and tactile workflow upgrades.",
    intent: "commercial investigation for stationery and creator desk tools",
    sources: ["paper-ritual", "creator-kit"],
    palette: ["#f4f0e8", "#171512", "#6b7b9d", "#313d5d", "#ded8c9"],
    monetization: [
      ["kindle_unlimited_bounty", "Kindle Unlimited fit", "Relevant only for reading, note-taking, and creator research pages with approved bounty links."],
      ["prime_bounty", "Prime fit", "Relevant for repeat stationery, desk, and creator-supply purchases."]
    ],
    guidePages: [
      ["planner-and-notebook-tools", "Best Planner And Notebook Tools", "paper"],
      ["creator-desk-accessories", "Best Creator Desk Accessories", "creator"],
      ["pen-and-capture-gear", "Best Pen And Capture Gear", "desk"]
    ]
  },
  {
    slug: "bake-bar-studio",
    domain: "bake-bar-studio.kinsta.page",
    brand: "Bake Bar Studio",
    category: "Baking Tools And Bar Cart Accessories",
    eyebrow: "Hosting prep edit",
    h1: "Baking tools and bar cart details for better gatherings.",
    dek: "A curated affiliate site for bakeware, measuring tools, serving pieces, cocktail helpers, glassware-adjacent accessories, and kitchen-to-hosting upgrades.",
    intent: "buyer comparison for baking tools and bar cart accessories",
    sources: ["bake-bench", "bar-cart-edit"],
    palette: ["#f6eee6", "#1d1410", "#b56f43", "#58311e", "#ead3be"],
    monetization: [
      ["prime_bounty", "Prime fit", "Useful for repeat kitchen, baking, and hosting supplies."],
      ["amazon_business_bounty", "Amazon Business fit", "Potential fit for event, studio, and small hospitality purchasing contexts."]
    ],
    guidePages: [
      ["baking-measuring-tools", "Best Baking Measuring Tools", "bake"],
      ["bar-cart-accessories", "Best Bar Cart Accessories", "bar"],
      ["hosting-prep-tools", "Best Hosting Prep Tools", "serving"]
    ]
  },
  {
    slug: "closet-weekend-edit",
    domain: "closet-weekend-edit.kinsta.page",
    brand: "Closet Weekend Edit",
    category: "Closet Organization And Weekend Style Accessories",
    eyebrow: "Wardrobe reset map",
    h1: "Closet systems and weekend accessories that make outfits easier.",
    dek: "A shopper-first guide for closet organization, seasonal wardrobe helpers, packing accessories, garment care, summer essentials, and weekend outfit support.",
    intent: "commercial investigation for closet and weekend style accessories",
    sources: ["closet-code", "summer-wear"],
    palette: ["#f4eef0", "#191418", "#9d667b", "#533140", "#ead2dc"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for closet refresh, garment-care, and seasonal accessory purchases."],
      ["amazon_haul_bounty", "Amazon Haul fit", "Potential fit for affordable outfit and closet add-ons after approved links are available."]
    ],
    guidePages: [
      ["closet-organization-tools", "Best Closet Organization Tools", "closet"],
      ["weekend-style-accessories", "Best Weekend Style Accessories", "summer"],
      ["garment-care-and-packing", "Best Garment Care And Packing Tools", "travel"]
    ]
  },
  {
    slug: "phone-ready-loop",
    domain: "phone-ready-loop.kinsta.page",
    brand: "Phone Ready Loop",
    category: "Phone Accessories And Everyday Carry Gear",
    eyebrow: "Daily carry upgrade",
    h1: "Phone and everyday-carry gear for cleaner daily exits.",
    dek: "A conversion-focused site for phone stands, chargers, cable helpers, bags, small organizers, travel-ready basics, and useful everyday-carry add-ons.",
    intent: "buyer comparison for phone accessories and everyday carry gear",
    sources: ["phone-loop", "ready-shelf"],
    palette: ["#eef1f5", "#12161c", "#526f9e", "#263d61", "#d6deea"],
    monetization: [
      ["prime_bounty", "Prime fit", "Useful for small tech and daily carry purchases where fast delivery matters."],
      ["amazon_business_bounty", "Amazon Business fit", "Potential fit for team phone stands, chargers, and desk-carry accessories."]
    ],
    guidePages: [
      ["phone-stand-and-charging", "Best Phone Stand And Charging Gear", "phone"],
      ["everyday-carry-organizers", "Best Everyday Carry Organizers", "carry"],
      ["cable-and-power-accessories", "Best Cable And Power Accessories", "power"]
    ]
  },
  {
    slug: "dog-calm-kit",
    domain: "dog-calm-kit.kinsta.page",
    brand: "Dog Calm Kit",
    category: "Dog Walking, Pet Care, And Rest Accessories",
    eyebrow: "Pet routine board",
    h1: "Dog walking and calm-home pet gear for smoother routines.",
    dek: "A practical affiliate hub for leashes, walking accessories, pet-care tools, small comfort items, rest-friendly products, and everyday dog-owner helpers.",
    intent: "commercial investigation for dog walking and pet care accessories",
    sources: ["dog-walk-kit", "pet-products", "rest-method"],
    palette: ["#f1f3ea", "#151811", "#78945a", "#3f512a", "#dfe8cc"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for repeat pet-care and walking accessory purchases."],
      ["subscribe_save", "Subscribe & Save fit", "Owner opportunity for replenishable pet-care items where approved and compliant links exist."]
    ],
    guidePages: [
      ["dog-walking-accessories", "Best Dog Walking Accessories", "dog"],
      ["pet-care-routine-tools", "Best Pet Care Routine Tools", "pet"],
      ["calm-home-rest-gear", "Best Calm Home Rest Gear", "rest"]
    ]
  },
  {
    slug: "golf-court-locker",
    domain: "golf-court-locker.kinsta.page",
    brand: "Golf Court Locker",
    category: "Golf, Tennis, And Court Sport Accessories",
    eyebrow: "Weekend sport locker",
    h1: "Golf and court-sport accessories for better weekend sessions.",
    dek: "A premium comparison site for golf helpers, court accessories, bags, training add-ons, hydration pieces, grip tools, and practical sport-locker upgrades.",
    intent: "buyer comparison for golf and court sport accessories",
    sources: ["golf-locker", "court-weekend"],
    palette: ["#edf2ea", "#121811", "#4f7d52", "#273f2b", "#d7e3d2"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for weekend sport accessories and repeat gear upgrades."]
    ],
    guidePages: [
      ["golf-bag-accessories", "Best Golf Bag Accessories", "golf"],
      ["court-sport-essentials", "Best Court Sport Essentials", "court"],
      ["training-and-locker-tools", "Best Training And Locker Tools", "training"]
    ]
  },
  {
    slug: "nail-gloss-table",
    domain: "nail-gloss-table.kinsta.page",
    brand: "Nail Gloss Table",
    category: "Nail Tools, Polish Storage, And Beauty Table Accessories",
    eyebrow: "At-home nail desk",
    h1: "Nail tools and gloss-table accessories worth comparing first.",
    dek: "A beauty-focused affiliate site for nail-care tools, polish organization, table lighting, manicure helpers, small storage, and routine-friendly beauty accessories.",
    intent: "commercial investigation for nail tools and polish storage",
    sources: ["nail-table", "pin-and-polish"],
    palette: ["#f8eef4", "#1f141b", "#c1608f", "#66324d", "#edd3e1"],
    monetization: [
      ["prime_bounty", "Prime fit", "Useful for recurring beauty-table and nail-care supplies."],
      ["amazon_haul_bounty", "Amazon Haul fit", "Potential fit for low-cost nail and beauty add-ons after approved links are available."]
    ],
    guidePages: [
      ["nail-care-tools", "Best Nail Care Tools", "nail"],
      ["polish-storage-accessories", "Best Polish Storage Accessories", "polish"],
      ["beauty-table-organization", "Best Beauty Table Organization", "table"]
    ]
  },
  {
    slug: "garage-bike-tools",
    domain: "garage-bike-tools.kinsta.page",
    brand: "Garage Bike Tools",
    category: "Bike Accessories And Garage Tool Storage",
    eyebrow: "Repair corner edit",
    h1: "Bike and garage tool picks for cleaner repair corners.",
    dek: "A utility-first affiliate site for bike accessories, small tools, storage, pumps, maintenance helpers, garage organization, and compact repair-corner upgrades.",
    intent: "buyer comparison for bike accessories and garage tool storage",
    sources: ["tool-drawer", "bike-lane"],
    palette: ["#f0f2ed", "#151713", "#727d42", "#3e4728", "#dfe4cf"],
    monetization: [
      ["prime_bounty", "Prime fit", "Relevant for quick tool, maintenance, and cycling accessory purchases."],
      ["amazon_business_bounty", "Amazon Business fit", "Potential fit for shop, facility, or team repair-supply contexts."]
    ],
    guidePages: [
      ["bike-maintenance-accessories", "Best Bike Maintenance Accessories", "bike"],
      ["garage-tool-storage", "Best Garage Tool Storage", "tool"],
      ["compact-repair-corner", "Best Compact Repair Corner Gear", "repair"]
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
  return curateProductsForSite(site, products, { limit: 60, minimum: 50 });
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

function brandNoun(site) {
  const nouns = {
    "deskflow-edit": "workspace edit",
    "morning-counter": "counter ritual",
    "trail-cabin-kit": "weekend kit",
    "classroom-maker": "teacher supply board",
    "dorm-study-stack": "small-space stack",
    "table-party-play": "hosting table",
    "garden-plant-studio": "plant studio",
    "active-daily-kit": "daily movement kit",
    "beauty-bath-edit": "routine shelf",
    "home-reset-lab": "home reset system"
  };
  return nouns[site.slug] ?? "buying edit";
}

function heroStats(site, products) {
  return [
    [`${products.length}+`, "real products"],
    [site.guidePages.length, "buyer paths"],
    ["0", "static prices"]
  ];
}

function shortCategory(site) {
  return site.category.replace(/\s+And\s+/g, " + ");
}

function logoHref(site) {
  return existsSync(path.join("public", "brand-assets", site.slug, "logo.png")) ? "/assets/logo.png" : "/assets/icon.svg";
}

function absoluteLogoUrl(site) {
  return `${site.baseUrl}${logoHref(site)}`;
}

function iconSvg(site) {
  const [, ink, accent, strong, soft] = site.palette;
  const id = slugify(site.slug);
  const line = `stroke="${ink}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const fine = `stroke="${ink}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const marks = {
    "deskflow-edit": `<path d="M20 47h32" ${line}/><path d="M25 26h22a4 4 0 0 1 4 4v13H21V30a4 4 0 0 1 4-4Z" fill="${strong}"/><path d="M30 32h12" ${fine}/><path d="M36 43v9" ${fine}/><path d="M24 53h24" ${fine}/><circle cx="51" cy="24" r="5" fill="${accent}"/>`,
    "morning-counter": `<path d="M22 44h25a9 9 0 0 0 0-18H22v18Z" fill="${strong}"/><path d="M47 30h4a5 5 0 0 1 0 10h-4" ${fine}/><path d="M27 26c0-6 4-7 4-12" ${fine}/><path d="M37 26c0-5 5-7 5-12" ${fine}/><path d="M20 50h33" ${line}/><circle cx="20" cy="21" r="5" fill="${accent}"/>`,
    "trail-cabin-kit": `<path d="M17 48 36 20l19 28H17Z" fill="${strong}"/><path d="M27 48V35h18v13" fill="${accent}"/><path d="M22 50h28" ${line}/><path d="M18 30c6 0 8-7 14-7" ${fine}/><path d="M43 19l9-6" ${fine}/><circle cx="53" cy="13" r="4" fill="${accent}"/>`,
    "classroom-maker": `<path d="M22 21h28v31H22z" fill="${strong}"/><path d="M28 28h16M28 35h12M28 42h18" ${fine}/><path d="M19 52h34" ${line}/><path d="M52 23l5 5-12 12-6 1 1-6 12-12Z" fill="${accent}"/>`,
    "dorm-study-stack": `<path d="M20 45h32v8H20z" fill="${strong}"/><path d="M24 35h24v10H24z" fill="${accent}"/><path d="M28 25h16v10H28z" fill="${strong}"/><path d="M30 20h12" ${fine}/><path d="M46 20h7v21" ${fine}/><circle cx="53" cy="45" r="4" fill="${accent}"/>`,
    "table-party-play": `<rect x="19" y="23" width="34" height="28" rx="6" fill="${strong}"/><circle cx="29" cy="33" r="3.5" fill="${accent}"/><circle cx="43" cy="41" r="3.5" fill="${accent}"/><path d="M25 51c3 4 19 4 22 0" ${fine}/><path d="M23 20l-5-5M49 20l5-5" ${fine}/>`,
    "garden-plant-studio": `<path d="M36 53V32" ${line}/><path d="M36 34c-10-1-16-7-17-17 10 1 17 6 17 17Z" fill="${strong}"/><path d="M36 39c11-1 17-7 18-18-11 1-18 7-18 18Z" fill="${accent}"/><path d="M25 54h22l3-13H22l3 13Z" fill="${strong}"/>`,
    "active-daily-kit": `<path d="M20 43c7-13 15-20 25-21" ${line}/><path d="M45 22l-3 9 9-3" fill="${accent}"/><path d="M23 46h19a8 8 0 0 1 8 8H30a8 8 0 0 1-7-8Z" fill="${strong}"/><circle cx="27" cy="23" r="6" fill="${accent}"/><path d="M20 54h34" ${fine}/>`,
    "beauty-bath-edit": `<path d="M23 48h26c4 0 7-3 7-7H16c0 4 3 7 7 7Z" fill="${strong}"/><path d="M24 48l3 7M45 48l-3 7" ${fine}/><path d="M28 26c0-5 4-8 8-8s8 3 8 8c0 8-8 12-8 12s-8-4-8-12Z" fill="${accent}"/><path d="M19 37h34" ${line}/><circle cx="53" cy="25" r="3" fill="${strong}"/>`,
    "home-reset-lab": `<path d="M18 34 36 20l18 14v20H18V34Z" fill="${strong}"/><path d="M28 54V39h16v15" fill="${accent}"/><path d="M23 32h26" ${fine}/><path d="M49 21l5-5M54 27h7M15 27H8" ${fine}/><circle cx="36" cy="32" r="3" fill="${accent}"/>`
  };
  const mark = marks[site.slug] ?? marks["morning-counter"];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" role="img" aria-label="${escapeHtml(site.brand)} logo"><defs><linearGradient id="g-${id}" x1="12" y1="8" x2="60" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="${soft}"/></linearGradient><filter id="s-${id}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="${ink}" flood-opacity=".18"/></filter></defs><rect x="5" y="5" width="62" height="62" rx="18" fill="url(#g-${id})"/><path d="M14 22c7-10 23-14 36-8 9 4 14 13 10 25-4 13-17 21-31 17-13-3-21-14-17-26 .5-2 1-5 2-8Z" fill="${accent}" opacity=".2"/><g filter="url(#s-${id})">${mark}</g></svg>`;
}

function shell(site, { title, description, canonical, body, schema }) {
  const [bg, ink, accent, strong, soft] = site.palette;
  const logo = logoHref(site);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="google-site-verification" content="${googleMetaVerification}"><meta name="msvalidate.01" content="${bingVerificationToken}"><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website"><meta property="og:image" content="${absoluteLogoUrl(site)}"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="${accent}"><link rel="icon" href="${logo}"><link rel="apple-touch-icon" href="${logo}"><link rel="stylesheet" href="/assets/styles.css"><style>:root{--bg:${bg};--ink:${ink};--accent:${accent};--strong:${strong};--soft:${soft}}</style><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body><a class="skip-link" href="#main">Skip to content</a><header class="topbar"><a class="brand" href="/"><img src="${logo}" alt="" width="40" height="40"><span>${escapeHtml(site.brand)}</span></a><nav aria-label="Primary"><a href="/top-50/">Top Picks</a><a href="/products/">Compare</a><a href="/editorial-policy/">How We Choose</a><a class="trust-link" href="/affiliate-disclosure/">Disclosure</a></nav></header>${body}<footer><strong>${escapeHtml(site.brand)}</strong><span>${escapeHtml(shortCategory(site))}. Updated ${lastUpdated}.</span><a href="/sitemap.xml">Sitemap</a></footer></body></html>`;
}

function disclosure(site) {
  return `<aside class="disclosure"><strong>Affiliate disclosure:</strong> ${escapeHtml(site.brand)} may earn from qualifying purchases through Amazon links. We avoid fixed prices, star ratings, review counts, and stock claims because Amazon listing details can change quickly.</aside>`;
}

function productCard(site, product, index, compact = false) {
  const guide = productGuide(site, product, index);
  const checks = verifyChecklist(site, product).slice(0, 3).join(", ");
  const guideLink = guide ? `<a class="internal-link" href="/best/${guide[0]}/">Related guide: ${escapeHtml(guide[1])}</a>` : "";
  return `<article class="product-card" id="pick-${index + 1}"><a class="product-image" href="${product.url}" target="_blank" rel="nofollow sponsored noopener"><span class="rank">#${index + 1}</span><img src="${product.image}" alt="${escapeHtml(product.imageAlt || product.name)}" loading="${index < 3 ? "eager" : "lazy"}" decoding="async"></a><div class="product-copy"><div class="card-kicker"><p class="mini">${escapeHtml(product.category)}</p><span class="best-for">${escapeHtml(productBadge(product, site, index))}</span></div><h3>${escapeHtml(displayTitle(product.name))}</h3><p>${escapeHtml(productDescription(product, site, index))}</p>${compact ? "" : `<ul><li>Real Amazon detail page</li><li>No static price or rating claims</li><li>Verify ${escapeHtml(checks)} on Amazon</li></ul>`}<a class="text-link" href="${product.url}" target="_blank" rel="nofollow sponsored noopener">Check on Amazon</a>${guideLink}</div></article>`;
}

function comparisonTable(site, products, title = "Comparison table") {
  return `<section class="section table-section"><div class="section-heading"><p class="eyebrow">Decision table</p><h2>${escapeHtml(title)}</h2><p>Editorial fit notes for quicker comparison. Open Amazon to confirm current price, options, shipping, returns, and availability.</p></div><div class="table-wrap"><table><thead><tr><th>Pick</th><th>Use case</th><th>Verify before buying</th><th></th></tr></thead><tbody>${products.slice(0, 10).map((product, index) => `<tr><td><strong>${escapeHtml(displayTitle(product.name))}</strong><span>Pick ${index + 1}</span></td><td>${escapeHtml(productBadge(product, site, index))}</td><td>${escapeHtml(verifyChecklist(site, product).slice(0, 4).join(", "))}</td><td><a href="${product.url}" target="_blank" rel="nofollow sponsored noopener">Check</a></td></tr>`).join("")}</tbody></table></div></section>`;
}

function serviceSection(site) {
  return `<section class="section service-section"><div class="section-heading"><p class="eyebrow">Trust system</p><h2>How this shortlist stays useful.</h2><p>Every pick is framed as a decision aid, not a static claim. Product pages can change, so the site pushes shoppers to verify volatile details on Amazon.</p></div><div class="service-grid"><article><span>clear disclosure</span><h3>Affiliate links are labeled early</h3><p>The disclosure appears before shopping sections, and outbound product links use sponsored/nofollow attributes.</p></article><article><span>no stale claims</span><h3>No fixed prices or ratings</h3><p>The site avoids static prices, star ratings, review counts, coupon claims, stock claims, and shipping promises.</p></article><article><span>decision support</span><h3>Verify before buying</h3><p>Each card points shoppers toward fit, sizing, materials, included pieces, returns, and current listing photos.</p></article></div></section>`;
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
  const stats = heroStats(site, products).map(([value, label]) => `<span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`).join("");
  const quickPaths = site.guidePages.map(([slug, title, keyword]) => `<a href="/best/${slug}/"><span>${escapeHtml(keyword)}</span>${escapeHtml(title.replace(/^Best /, ""))}</a>`).join("");
  const body = `<main id="main">${disclosure(site)}<section class="hero"><div class="hero-copy"><p class="eyebrow">${escapeHtml(site.eyebrow)}</p><h1>${escapeHtml(site.h1)}</h1><p>${escapeHtml(site.dek)}</p><div class="hero-stats">${stats}</div><div class="actions"><a class="button primary" href="/top-50/">Browse top picks</a><a class="button" href="/products/">Compare all products</a></div></div><div class="hero-board"><a class="hero-product" href="${products[0].url}" target="_blank" rel="nofollow sponsored noopener"><img src="${products[0].image}" alt="${escapeHtml(products[0].imageAlt || products[0].name)}"><span>Featured Amazon detail page</span></a><div class="quick-paths"><p class="mini">${escapeHtml(brandNoun(site))}</p>${quickPaths}</div></div></section><section class="section split intro-panel"><div><p class="eyebrow">Buyer intent</p><h2>A cleaner way to compare ${escapeHtml(shortCategory(site).toLowerCase())}.</h2></div><div class="copy"><p>${escapeHtml(site.brand)} is built around ${escapeHtml(site.intent)}. The page narrows the product set by use case, then sends qualified shoppers to Amazon to confirm current price, options, shipping, returns, and availability.</p><p>That keeps the experience conversion-focused without copying volatile Amazon details or making fake testing claims.</p></div></section>${comparisonTable(site, products, `${site.category} quick comparison`)}${serviceSection(site)}<section class="section" id="featured"><div class="section-heading"><p class="eyebrow">Featured shortlist</p><h2>${featuredHeading()}</h2></div><div class="product-grid">${products.slice(0, 12).map((product, index) => productCard(site, product, index)).join("")}</div></section><section class="section guide-hub"><div class="section-heading"><p class="eyebrow">Buying guides</p><h2>${guideHubHeading()}</h2></div><div class="guide-grid">${site.guidePages.map(([slug, title, keyword]) => `<a class="guide-card" href="/best/${slug}/"><span>${escapeHtml(keyword)}</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(guideCardDescription(site, [slug, title, keyword]))}</p></a>`).join("")}</div></section></main>`;
  return shell(site, { title: `${site.brand} | ${site.category}`, description: `${site.brand} compares ${products.length}+ real Amazon products for ${site.category.toLowerCase()} with affiliate disclosure and buyer-intent notes.`, canonical: `${site.baseUrl}/`, body, schema });
}

function productIndexPage(site, products) {
  const body = `<main id="main">${disclosure(site)}<section class="page-hero"><p class="eyebrow">Product index</p><h1>${escapeHtml(productIndexHeadline(products.length))}</h1><p>Use this as the full product map, then verify current listing details directly on Amazon before buying.</p></section><section class="section"><div class="section-heading"><p class="eyebrow">All picks</p><h2>Open the products that fit your buying job.</h2></div><div class="product-grid">${products.map((product, index) => productCard(site, product, index)).join("")}</div></section></main>`;
  return shell(site, { title: `${site.brand} Product Index`, description: `${products.length} real Amazon product-page picks for ${site.category.toLowerCase()}.`, canonical: `${site.baseUrl}/products/`, body, schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: `${site.brand} Product Index`, url: `${site.baseUrl}/products/` } });
}

function topPage(site, products) {
  const body = `<main id="main">${disclosure(site)}<section class="page-hero"><p class="eyebrow">Top 50</p><h1>Top 50 ${escapeHtml(site.category)} picks worth checking first.</h1><p>Ranked as an editorial shortlist by use case, not by live Amazon price or star rating.</p></section>${comparisonTable(site, products.slice(0, 20), "Top decision table")}<section class="section"><div class="article-list">${products.slice(0, 50).map((product, index) => productCard(site, product, index, true)).join("")}</div></section></main>`;
  return shell(site, { title: `Top 50 ${site.category} | ${site.brand}`, description: `A Top 50 Amazon affiliate shortlist for ${site.category.toLowerCase()} with real product images and direct product-page links.`, canonical: `${site.baseUrl}/top-50/`, body, schema: { "@context": "https://schema.org", "@type": "Article", headline: `Top 50 ${site.category}`, dateModified: lastUpdated } });
}

function guidePage(site, products, page) {
  const [slug, title, keyword] = page;
  const selected = selectGuideProducts(site, products, page, 16);
  const body = `<main id="main">${disclosure(site)}<section class="page-hero"><p class="eyebrow">${escapeHtml(keyword)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(guideIntro(site, page))}</p></section>${comparisonTable(site, selected, `${title} comparison`)}<section class="section"><div class="product-grid">${selected.map((product, index) => productCard(site, product, index)).join("")}</div></section></main>`;
  return shell(site, { title: `${title} | ${site.brand}`, description: `${title} from ${site.brand}: compare real Amazon products, images, fit notes, and buying checks.`, canonical: `${site.baseUrl}/best/${slug}/`, body, schema: { "@context": "https://schema.org", "@type": "Article", headline: title, dateModified: lastUpdated } });
}

function supportPage(site, slug) {
  const isDisclosure = slug === "affiliate-disclosure";
  const title = isDisclosure ? "Affiliate Disclosure" : slug === "editorial-policy" ? "Editorial Policy" : "Contact";
  const isPolicy = slug === "editorial-policy";
  const copy = isDisclosure
    ? `${site.brand} may earn from qualifying Amazon purchases. Product prices, ratings, review counts, stock, shipping, coupons, and seller terms can change on Amazon, so this site avoids publishing those details as static claims.`
    : isPolicy
      ? `${editorialPolicyCopy(site)}`
      : `${site.brand} is maintained as an independent affiliate shopping guide. Use this page for site questions, stale product reports, or correction requests.`;
  const description = isDisclosure
    ? `${site.brand} may earn from qualifying Amazon purchases and avoids static price, rating, stock, and shipping claims.`
    : isPolicy
      ? `${site.brand} explains how products are selected, linked, disclosed, and refreshed for affiliate shoppers.`
      : copy;
  const details = isDisclosure
    ? `<div class="policy-grid"><article><span>Amazon Associate</span><h2>Qualifying purchases</h2><p>${escapeHtml(site.brand)} may earn from qualifying purchases through tagged Amazon links.</p></article><article><span>Variable listings</span><h2>Verify current details</h2><p>Prices, ratings, reviews, coupons, shipping, stock, seller terms, and availability can change after publication.</p></article><article><span>Editorial independence</span><h2>No Amazon endorsement implied</h2><p>Product selections are organized for shopper comparison and should be checked on the current Amazon detail page.</p></article></div>`
    : isPolicy
      ? `<div class="policy-grid"><article><span>Selection method</span><h2>Built around buyer jobs</h2><p>Products are grouped by use case, category fit, clear product-page destination, image quality, and practical shopper checks.</p></article><article><span>Claims discipline</span><h2>What we do not publish</h2><p>The site avoids static prices, star ratings, review counts, stock claims, unsupported testing claims, and fake urgency.</p></article><article><span>Refresh cadence</span><h2>What gets reviewed</h2><p>Stale product images, broken links, missing disclosures, weak fit notes, and indexing issues are candidates for periodic updates.</p></article></div>`
      : `<div class="policy-grid"><article><span>Corrections</span><h2>Report stale product details</h2><p>Product listings can change. Stale images, broken links, and outdated fit notes should be reviewed and corrected.</p></article><article><span>Affiliate clarity</span><h2>Disclosures stay visible</h2><p>Questions about affiliate disclosure, tracking IDs, or product-page destinations should be handled before adding new shopping surfaces.</p></article><article><span>Portfolio maintenance</span><h2>Keep pages useful</h2><p>Updates should improve shopper comparison, compliance, internal links, or product-page click quality.</p></article></div>`;
  const body = `<main id="main"><section class="page-hero support-hero"><p class="eyebrow">${escapeHtml(site.brand)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(copy)}</p></section><section class="section">${details}</section></main>`;
  return shell(site, { title: `${title} | ${site.brand}`, description, canonical: `${site.baseUrl}/${slug}/`, body, schema: { "@context": "https://schema.org", "@type": "WebPage", name: `${title} | ${site.brand}` } });
}

function styles() {
  return `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 90%,white) 0%,var(--bg) 46%,color-mix(in srgb,var(--soft) 16%,var(--bg)) 100%);color:var(--ink);font-family:Inter,Avenir Next,Helvetica,Arial,sans-serif;line-height:1.5}a{color:inherit}.skip-link{position:absolute;left:12px;top:12px;z-index:20;transform:translateY(-140%);background:var(--ink);color:var(--bg);padding:10px 14px;border-radius:8px}.skip-link:focus{transform:none}.topbar{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;gap:18px;align-items:center;padding:13px clamp(18px,4vw,56px);background:color-mix(in srgb,var(--bg) 82%,white);border-bottom:1px solid color-mix(in srgb,var(--ink) 12%,transparent);backdrop-filter:blur(18px)}.brand{display:flex;align-items:center;gap:12px;text-decoration:none;font-size:18px;font-weight:950}.brand img{border-radius:12px;filter:drop-shadow(0 8px 18px color-mix(in srgb,var(--ink) 16%,transparent))}nav{display:flex;gap:6px;align-items:center;flex-wrap:wrap;font-size:14px}nav a{text-decoration:none;font-weight:850;padding:9px 11px;border-radius:8px;color:color-mix(in srgb,var(--ink) 78%,transparent)}nav a:hover{background:color-mix(in srgb,var(--soft) 58%,white);color:var(--ink)}.trust-link{border:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}.disclosure{margin:18px clamp(18px,5vw,72px) 0;padding:13px 16px;border:1px solid color-mix(in srgb,var(--accent) 34%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 70%,white);box-shadow:0 10px 28px color-mix(in srgb,var(--ink) 6%,transparent)}.hero{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(330px,.78fr);gap:clamp(24px,4vw,48px);align-items:center;padding:clamp(48px,8vw,92px) clamp(18px,5vw,72px) 40px}.hero-copy{max-width:820px}.hero h1,.page-hero h1{font-size:clamp(42px,6.5vw,80px);line-height:.98;letter-spacing:0;margin:0 0 18px;text-wrap:balance}.hero p,.page-hero p{font-size:clamp(17px,2vw,20px);max-width:760px;color:color-mix(in srgb,var(--ink) 82%,transparent)}.eyebrow,.mini{margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:.12em;font-weight:950;color:var(--strong)}.hero-stats{display:flex;gap:10px;flex-wrap:wrap;margin:22px 0 0}.hero-stats span{display:grid;gap:1px;min-width:112px;padding:12px 14px;border:1px solid color-mix(in srgb,var(--ink) 11%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 72%,white)}.hero-stats strong{font-size:22px;line-height:1}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:8px;padding:12px 16px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);text-decoration:none;font-weight:950}.primary{background:var(--ink);color:var(--bg);box-shadow:0 14px 30px color-mix(in srgb,var(--ink) 18%,transparent)}.hero-board{display:grid;gap:14px}.hero-product{position:relative;display:grid;place-items:center;min-height:370px;border-radius:8px;background:linear-gradient(135deg,#fff,color-mix(in srgb,var(--soft) 35%,white));overflow:hidden;border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);box-shadow:0 26px 70px color-mix(in srgb,var(--ink) 16%,transparent)}.hero-product img{width:100%;height:100%;max-height:350px;object-fit:contain;padding:26px}.hero-product span{position:absolute;left:14px;right:14px;bottom:14px;background:color-mix(in srgb,var(--ink) 92%,black);color:var(--bg);padding:9px 11px;border-radius:8px;font-size:13px;font-weight:950}.quick-paths{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding:12px;border:1px solid color-mix(in srgb,var(--ink) 11%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 76%,white)}.quick-paths .mini{grid-column:1/-1;margin-bottom:0}.quick-paths a{min-height:66px;padding:10px;border-radius:8px;text-decoration:none;background:color-mix(in srgb,var(--soft) 42%,white);font-weight:900}.quick-paths a span{display:block;margin-bottom:3px;color:var(--strong);font-size:11px;text-transform:uppercase;letter-spacing:.08em}.section,.page-hero{padding:44px clamp(18px,5vw,72px)}.page-hero{padding-top:clamp(52px,7vw,86px);border-bottom:1px solid color-mix(in srgb,var(--ink) 9%,transparent)}.split{display:grid;grid-template-columns:.72fr 1.28fr;gap:30px}.intro-panel{background:color-mix(in srgb,var(--bg) 74%,white);border-block:1px solid color-mix(in srgb,var(--ink) 8%,transparent)}.copy{font-size:18px}.section-heading{max-width:840px;margin-bottom:20px}h2{font-size:clamp(28px,4vw,48px);line-height:1.04;letter-spacing:0;margin:0 0 14px;text-wrap:balance}h3{font-size:20px;line-height:1.16;margin:0 0 10px;overflow-wrap:anywhere}.product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.product-card{position:relative;display:flex;flex-direction:column;border:1px solid color-mix(in srgb,var(--ink) 11%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 80%,white);overflow:hidden;isolation:isolate;box-shadow:0 12px 34px color-mix(in srgb,var(--ink) 5%,transparent)}.product-card:hover{border-color:color-mix(in srgb,var(--accent) 42%,transparent);box-shadow:0 18px 46px color-mix(in srgb,var(--ink) 9%,transparent)}.product-image{position:relative;display:grid;place-items:center;height:224px;min-height:224px;max-height:224px;overflow:hidden;background:linear-gradient(180deg,#fff,color-mix(in srgb,var(--soft) 18%,white));border-bottom:1px solid color-mix(in srgb,var(--ink) 8%,transparent);z-index:0}.product-image img{display:block;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;padding:18px}.rank{position:absolute;top:10px;left:10px;z-index:1;padding:5px 8px;border-radius:8px;background:var(--ink);color:var(--bg);font-size:12px;font-weight:950}.product-copy{position:relative;z-index:1;display:flex;flex-direction:column;flex:1;padding:17px;background:color-mix(in srgb,var(--bg) 84%,white)}.card-kicker{display:grid;gap:8px;margin-bottom:10px}.best-for{display:inline-flex;width:fit-content;max-width:100%;padding:5px 9px;border-radius:999px;background:var(--soft);color:var(--strong);font-size:12px;font-weight:950}.product-card ul{padding-left:18px;margin:8px 0 0}.text-link,.internal-link{display:block;margin-top:10px;font-weight:950;color:var(--strong);text-decoration:none}.text-link{margin-top:auto;padding-top:12px}.internal-link{font-size:13px;color:color-mix(in srgb,var(--strong) 82%,var(--ink))}.service-grid,.guide-grid,.policy-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.service-grid article,.guide-card,.policy-grid article{padding:19px;border:1px solid color-mix(in srgb,var(--ink) 11%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 78%,white);text-decoration:none;box-shadow:0 10px 30px color-mix(in srgb,var(--ink) 4%,transparent)}.service-grid span,.guide-card span,.policy-grid span{display:block;margin-bottom:10px;color:var(--strong);font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}.table-wrap{overflow:auto;border:1px solid color-mix(in srgb,var(--ink) 13%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 86%,white);box-shadow:0 16px 42px color-mix(in srgb,var(--ink) 5%,transparent)}table{width:100%;min-width:760px;border-collapse:separate;border-spacing:0}th,td{text-align:left;vertical-align:top;padding:14px;border-bottom:1px solid color-mix(in srgb,var(--ink) 9%,transparent)}th{position:sticky;top:0;background:color-mix(in srgb,var(--bg) 86%,white);font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--strong)}td:first-child strong{display:block}td:first-child span{display:block;margin-top:4px;color:var(--strong);font-size:12px;font-weight:900}td a{display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:8px 10px;border-radius:8px;background:var(--ink);color:var(--bg);text-decoration:none;font-weight:950}.article-list{display:grid;gap:16px}.article-list .product-card{display:grid;grid-template-columns:250px minmax(0,1fr)}.article-list .product-image{height:auto;min-height:230px;max-height:none;border-bottom:0;border-right:1px solid color-mix(in srgb,var(--ink) 8%,transparent)}footer{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:28px clamp(18px,5vw,72px);border-top:1px solid color-mix(in srgb,var(--ink) 12%,transparent);background:color-mix(in srgb,var(--bg) 72%,white)}@media(max-width:1120px){.product-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.hero{grid-template-columns:1fr}.hero-board{max-width:720px}}@media(max-width:850px){.topbar{align-items:flex-start;flex-direction:column}.topbar nav{width:100%;overflow-x:auto;flex-wrap:nowrap;padding-bottom:2px}.topbar nav a{white-space:nowrap}.hero,.split,.article-list .product-card{grid-template-columns:1fr}.quick-paths,.service-grid,.guide-grid,.policy-grid{grid-template-columns:1fr 1fr}.article-list .product-image{height:224px;min-height:224px;max-height:224px;border-right:0;border-bottom:1px solid color-mix(in srgb,var(--ink) 8%,transparent)}.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hero-product{min-height:300px}}@media(max-width:620px){.topbar nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));overflow:visible;gap:7px}.topbar nav a{text-align:center;white-space:normal}.hero h1,.page-hero h1{font-size:38px}.product-grid,.quick-paths,.service-grid,.guide-grid,.policy-grid{grid-template-columns:1fr}.section,.page-hero,.hero{padding-left:18px;padding-right:18px}.hero-stats span{min-width:0;flex:1 1 96px}.product-image{height:216px;min-height:216px;max-height:216px}.table-wrap{margin-inline:-6px}.button{width:100%}}`;
  return `*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,Avenir Next,Helvetica,Arial,sans-serif;line-height:1.5}a{color:inherit}.skip-link{position:absolute;left:12px;top:12px;z-index:10;transform:translateY(-140%);background:var(--ink);color:var(--bg);padding:10px 14px;border-radius:8px}.skip-link:focus{transform:none}.topbar{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:14px clamp(18px,4vw,56px);background:color-mix(in srgb,var(--bg) 88%,white);border-bottom:1px solid color-mix(in srgb,var(--ink) 12%,transparent);backdrop-filter:blur(14px)}.brand{display:flex;align-items:center;gap:11px;text-decoration:none;font-size:18px;font-weight:900}.brand img{border-radius:10px;filter:drop-shadow(0 4px 10px color-mix(in srgb,var(--ink) 14%,transparent))}nav{display:flex;gap:14px;flex-wrap:wrap;font-size:14px}nav a{text-decoration:none;font-weight:800}.disclosure{margin:18px clamp(18px,5vw,72px) 0;padding:14px 16px;border:1px dashed color-mix(in srgb,var(--ink) 24%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 72%,white)}.hero{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(290px,.72fr);gap:34px;align-items:center;padding:clamp(46px,8vw,94px) clamp(18px,5vw,72px) 32px}.hero h1,.page-hero h1{font-size:clamp(42px,7vw,82px);line-height:.96;letter-spacing:0;margin:0 0 18px}.hero p,.page-hero p{font-size:19px;max-width:760px}.eyebrow,.mini{font-size:12px;text-transform:uppercase;letter-spacing:.11em;font-weight:900;color:var(--strong)}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.button{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;padding:12px 15px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);text-decoration:none;font-weight:900}.primary{background:var(--ink);color:var(--bg)}.hero-product{position:relative;display:grid;place-items:center;min-height:360px;border-radius:8px;background:#fff;overflow:hidden;box-shadow:0 24px 70px color-mix(in srgb,var(--ink) 16%,transparent)}.hero-product img{width:100%;height:100%;max-height:340px;object-fit:contain;padding:24px}.hero-product span{position:absolute;left:14px;right:14px;bottom:14px;background:var(--ink);color:var(--bg);padding:8px 10px;border-radius:8px;font-size:13px;font-weight:900}.section,.page-hero{padding:42px clamp(18px,5vw,72px)}.split{display:grid;grid-template-columns:.75fr 1.25fr;gap:26px}.copy{font-size:18px}.section-heading{max-width:820px;margin-bottom:18px}h2{font-size:clamp(28px,4vw,48px);line-height:1.02;margin:0 0 14px}h3{font-size:20px;line-height:1.15;margin:0 0 10px;overflow-wrap:anywhere}.product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.product-card{position:relative;display:flex;flex-direction:column;border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 78%,white);overflow:hidden;isolation:isolate}.product-image{position:relative;display:grid;place-items:center;height:218px;min-height:218px;max-height:218px;overflow:hidden;background:#fff;border-bottom:1px solid color-mix(in srgb,var(--ink) 8%,transparent);z-index:0}.product-image img{display:block;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;padding:16px}.product-card>div{position:relative;z-index:1;flex:1;padding:16px;background:color-mix(in srgb,var(--bg) 82%,white)}.best-for{display:inline-flex;width:fit-content;max-width:100%;margin-bottom:10px;padding:5px 9px;border-radius:999px;background:var(--soft);color:var(--strong);font-size:12px;font-weight:900}.text-link,.internal-link{display:block;margin-top:9px;font-weight:900;color:var(--strong);text-decoration:none}.internal-link{font-size:13px}.service-grid,.guide-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.service-grid article,.guide-card{padding:18px;border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 78%,white);text-decoration:none}.service-grid span,.guide-card span{display:block;margin-bottom:10px;color:var(--strong);font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.table-wrap{overflow:auto;border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);border-radius:8px;background:color-mix(in srgb,var(--bg) 82%,white)}table{width:100%;min-width:760px;border-collapse:collapse}th,td{text-align:left;vertical-align:top;padding:13px;border-bottom:1px solid color-mix(in srgb,var(--ink) 10%,transparent)}th{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--strong)}.article-list{display:grid;gap:16px}.article-list .product-card{display:grid;grid-template-columns:240px minmax(0,1fr)}.article-list .product-image{height:auto;min-height:220px;max-height:none;border-bottom:0;border-right:1px solid color-mix(in srgb,var(--ink) 8%,transparent)}footer{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:28px clamp(18px,5vw,72px);border-top:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}@media(max-width:1050px){.product-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:850px){.topbar{align-items:flex-start;flex-direction:column}.hero,.split,.article-list .product-card{grid-template-columns:1fr}.article-list .product-image{height:218px;min-height:218px;max-height:218px;border-right:0;border-bottom:1px solid color-mix(in srgb,var(--ink) 8%,transparent)}.service-grid,.guide-grid{grid-template-columns:1fr 1fr}.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hero-product{min-height:280px}}@media(max-width:560px){.hero h1,.page-hero h1{font-size:40px}.product-grid,.service-grid,.guide-grid{grid-template-columns:1fr}.section,.page-hero,.hero{padding-left:18px;padding-right:18px}}`;
}

async function buildSite(site) {
  site.baseUrl = `https://${site.domain ?? `${site.slug}.${baseDomain}`}`;
  const products = await loadProducts(site);
  const outDir = path.join(rootOutDir, site.slug);
  await mkdir(path.join(outDir, "assets"), { recursive: true });
  await cp("public/images", path.join(outDir, "images"), { recursive: true });
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
  const customLogo = path.join("public", "brand-assets", site.slug, "logo.png");
  if (existsSync(customLogo)) {
    await cp(customLogo, path.join(outDir, "assets", "logo.png"));
  }
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
