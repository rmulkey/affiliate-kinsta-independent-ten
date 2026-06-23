const STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "best",
  "by",
  "for",
  "from",
  "gear",
  "in",
  "of",
  "on",
  "or",
  "the",
  "to",
  "tools",
  "with"
]);

const GENERIC_DESCRIPTION_RE =
  /^(A practical first-click pick|A useful little upgrade|A strong add-to-cart candidate|A clean routine helper|A solid shortlist item)\b/i;

const SITE_HINTS = {
  figrally: {
    excludeTerms: ["bento", "lunch box", "meal prep", "food storage", "salad container", "refrigerator organizer"]
  },
  orvyn: {
    excludeTerms: ["playstation", "ps5", "xbox", "monkeybomb", "controller holder"]
  }
};

const TERM_ALIASES = {
  baby: ["baby", "nursery", "diaper", "stroller", "bottle warmer", "changing pad", "toddler"],
  bar: ["bar", "cocktail", "drink", "glass", "goblet", "wine", "mug", "dispenser", "ice"],
  bath: ["bath", "shower", "towel", "robe", "soap", "bathroom"],
  bedside: ["bedside", "nightstand", "night", "bedroom"],
  beauty: ["beauty", "makeup", "skincare", "serum", "cream", "mask", "moisturizer"],
  bike: ["bike", "bicycle", "cycling"],
  blender: ["blender", "smoothie", "shake", "frozen drink", "portable blender"],
  bottle: ["bottle", "tumbler", "jug", "cup", "hydration"],
  camp: ["camp", "camping", "tent", "stove", "lantern", "hammock", "tarp", "sleeping", "trail"],
  camera: ["camera", "security camera", "indoor cam", "outdoor cam", "doorbell", "floodlight"],
  car: ["car", "road", "seat", "trunk", "dash", "vehicle", "automotive"],
  clean: ["clean", "cleaning", "laundry", "scrub", "wipe", "soap"],
  coffee: ["coffee", "espresso", "pour", "brew", "mug", "kettle"],
  craft: ["craft", "cricut", "vinyl", "glue", "marker", "scissors"],
  desk: ["desk", "keyboard", "mouse", "monitor", "office", "workspace", "remote"],
  decor: ["decor", "mirror", "vase", "poster", "wall art", "pillow", "sconce", "clock"],
  dorm: ["dorm", "college", "campus", "roommate"],
  diffuser: ["diffuser", "reed diffuser", "room spray", "linen spray"],
  fitness: ["fitness", "workout", "exercise", "gym", "training", "bands"],
  game: ["game", "card", "board", "dice", "puzzle", "party game", "snack tray"],
  garden: ["garden", "pruner", "soil", "planter", "watering", "greenhouse"],
  golf: ["golf", "tee", "putting", "rangefinder"],
  hair: ["hair", "dryer", "curl", "brush", "scalp", "shampoo", "styler"],
  hosting: ["hosting", "serve", "serving", "tray", "plate", "napkin", "cutlery", "table"],
  light: ["light", "lamp", "ring light", "led", "lantern", "backlight"],
  nail: ["nail", "manicure", "pedicure", "polish", "cuticle"],
  paper: ["paper", "label", "planner", "notebook", "printer"],
  party: ["party", "balloon", "decor", "tablecloth", "cups", "plates", "buffet", "favor"],
  patio: ["patio", "outdoor", "porch", "deck"],
  phone: ["phone", "iphone", "android", "magsafe", "tripod", "selfie"],
  pickleball: ["pickleball", "paddle", "court", "balls"],
  plant: ["plant", "leaf", "grow", "pot", "indoor plant"],
  pool: ["pool", "float", "noodle", "water toy"],
  power: ["charger", "charging", "power", "battery", "adapter", "usb", "cable", "outlet"],
  refill: ["refill", "reusable", "dispenser", "bottle", "soap"],
  scent: ["scent", "fragrance", "diffuser", "room spray", "linen spray", "candle", "mist"],
  snack: ["snack", "charcuterie", "candy", "popcorn", "appetizer", "dip", "serving bowl"],
  sound: ["sound", "white noise", "alarm clock", "speaker", "sleep machine"],
  storage: ["storage", "organizer", "shelf", "bin", "caddy", "holder", "rack"],
  study: ["study", "notes", "flashcards", "lamp", "highlighter"],
  tea: ["tea", "teapot", "kettle", "mug", "infuser"],
  teacher: ["teacher", "classroom", "lesson", "students"],
  tech: ["tech", "charger", "charging", "power", "battery", "usb", "cable", "adapter", "magsafe", "wireless", "tracker", "airtag"],
  tool: ["tool", "multitool", "kit", "flashlight", "scraper", "jump starter", "emergency"],
  travel: ["travel", "carry-on", "packing", "passport", "adapter", "portable", "tech", "airtag"],
  vanity: ["vanity", "mirror", "drawer", "countertop", "makeup bag"],
  walking: ["walking", "steps", "waist pack", "pedometer", "reflective"],
  warmer: ["warmer", "candle warmer", "bottle warmer", "warming lamp"]
};

const BUCKET_PATTERNS = [
  ["organization", ["organizer", "storage", "bin", "shelf", "holder", "rack", "caddy", "pegboard"]],
  ["power", ["charger", "charging", "power", "battery", "adapter", "usb", "cable", "surge protector"]],
  ["lighting", ["light", "lamp", "lantern", "led", "backlight"]],
  ["cleaning", ["clean", "laundry", "wipe", "scrub", "soap", "towel"]],
  ["carry", ["bag", "case", "backpack", "pouch", "carry"]],
  ["mounting", ["mount", "stand", "tripod", "clamp", "arm"]],
  ["hydration", ["bottle", "tumbler", "cup", "jug", "hydration"]],
  ["hosting", ["party", "serving", "tray", "plate", "napkin", "cutlery", "balloon", "buffet", "snack"]],
  ["hair", ["hair", "dryer", "curl", "scalp", "shampoo", "styler"]],
  ["nail", ["nail", "manicure", "pedicure", "cuticle", "polish"]],
  ["camp", ["camp", "camping", "tent", "stove", "hammock", "tarp", "sleeping bag"]],
  ["road", ["car", "road", "trunk", "seat", "dash", "vehicle"]],
  ["desk", ["desk", "keyboard", "mouse", "monitor", "office", "workspace"]],
  ["phone", ["phone", "iphone", "android", "magsafe", "selfie"]],
  ["outdoor", ["garden", "patio", "outdoor", "pool", "plant", "watering"]],
  ["starter", ["kit", "set", "bundle", "pack"]],
  ["beauty", ["beauty", "makeup", "skincare", "serum", "cream", "mask", "moisturizer"]]
];

function normalize(text) {
  return String(text || "").toLowerCase();
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesTerm(text, term) {
  const escaped = escapeRegExp(normalize(term)).replace(/\s+/g, "\\s+");
  return new RegExp(`\\b${escaped}\\b`, "i").test(text);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function stableHash(text) {
  let hash = 0;
  const value = String(text || "");
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function chooseVariant(seed, variants) {
  if (!variants.length) return "";
  return variants[stableHash(seed) % variants.length];
}

function tokenize(text) {
  return unique(
    normalize(text)
      .split(/[^a-z0-9]+/)
      .map((token) => token.trim())
      .filter((token) => token.length > 2 && !STOPWORDS.has(token))
  );
}

function phraseHits(text, phrases) {
  return phrases.reduce((score, phrase) => score + (matchesTerm(text, phrase) ? 1 : 0), 0);
}

function expandedTerms(tokens) {
  const terms = new Set();
  for (const token of tokens) {
    terms.add(token);
    for (const alias of TERM_ALIASES[token] || []) terms.add(alias);
  }
  return [...terms];
}

function siteText(site) {
  return [
    site.brand,
    site.category,
    site.eyebrow,
    site.h1,
    site.dek,
    site.intent,
    ...(site.guidePages || []).flat()
  ].join(" ");
}

function productSeed(site, product, extra = "") {
  return `${site.slug}:${product.asin || product.name}:${extra}`;
}

function meaningfulDescription(product) {
  const description = String(product.description || "").trim();
  if (!description || GENERIC_DESCRIPTION_RE.test(description)) return "";
  return description;
}

function productCoreText(product) {
  return [product.name, product.category].join(" ").toLowerCase();
}

function productText(product, { includeDescription = true } = {}) {
  const parts = [product.name, product.category];
  const description = includeDescription ? meaningfulDescription(product) : "";
  if (description) parts.push(description);
  return parts.join(" ").toLowerCase();
}

function siteTerms(site) {
  return expandedTerms(tokenize(siteText(site)));
}

function guideTerms(page) {
  return expandedTerms(tokenize(page.join(" ")));
}

function expandTermList(terms = []) {
  const expanded = new Set();
  for (const term of terms) {
    if (!term) continue;
    expanded.add(normalize(term));
    for (const token of tokenize(term)) {
      expanded.add(token);
      for (const alias of TERM_ALIASES[token] || []) expanded.add(alias);
    }
  }
  return [...expanded];
}

function guideConfig(site, page) {
  const slug = Array.isArray(page) ? page[0] : page;
  return site.guideRules?.[slug] || {};
}

function shortSiteCategory(site) {
  return String(site.category || "")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s+And\s+/g, " and ")
    .toLowerCase();
}

function humanList(items = []) {
  const clean = items.filter(Boolean);
  if (!clean.length) return "";
  if (clean.length === 1) return clean[0];
  if (clean.length === 2) return `${clean[0]} and ${clean[1]}`;
  return `${clean.slice(0, -1).join(", ")}, and ${clean.at(-1)}`;
}

function siteVoice(site) {
  const defaults = {
    shopper: "shoppers",
    scene: shortSiteCategory(site),
    promise: `a clearer edit for ${shortSiteCategory(site)}`,
    compareNoun: "edit",
    rhythm: "clean",
    methodologyLead: "The shortlist stays grounded in fit, footprint, and the details shoppers actually have to live with.",
    openingLabel: "How to use this shortlist",
    trustLabel: "Editorial standards",
    quickPathLabel: "shopping routes"
  };
  return { ...defaults, ...(site.voice || {}) };
}

function exclusionPenalty(site, text) {
  const terms = SITE_HINTS[site.slug]?.excludeTerms || [];
  return phraseHits(text, terms) * 6;
}

function termScore(text, terms) {
  let score = 0;
  for (const term of terms) {
    if (matchesTerm(text, term)) score += term.includes(" ") ? 3 : 2;
  }
  return score;
}

function siteRelevanceScore(site, product) {
  const text = productText(product);
  return termScore(text, siteTerms(site)) - exclusionPenalty(site, text);
}

function guideRelevanceScore(site, product, page) {
  const text = productText(product);
  const [slug, title, keyword] = page;
  const pageText = normalize(page.join(" "));
  const config = guideConfig(site, page);
  const requiredTerms = expandTermList(config.requiredAny || []);
  const preferredTerms = expandTermList(config.preferAny || []);
  const excludedTerms = expandTermList(config.excludeAny || []);
  let score = termScore(text, guideTerms(page));
  if (matchesTerm(text, normalize(keyword))) score += 4;
  if (matchesTerm(text, normalize(slug).replace(/-/g, " "))) score += 3;
  if (matchesTerm(text, normalize(title.replace(/^Best\s+/i, "")))) score += 3;
  if (requiredTerms.length) {
    const requiredHits = termScore(text, requiredTerms);
    score += Math.min(requiredHits, 8);
    if (requiredHits === 0) score -= 12;
  }
  if (preferredTerms.length) {
    score += Math.min(termScore(text, preferredTerms), 10);
  }
  if (excludedTerms.length) {
    score -= termScore(text, excludedTerms) * 3;
  }
  if (matchesTerm(pageText, "tech")) {
    const techScore = termScore(text, TERM_ALIASES.tech);
    score += techScore * 2;
    if (techScore === 0 && termScore(text, TERM_ALIASES.camp)) score -= 8;
  }
  if (config.focusBucket) {
    const bucket = classifyBucket(productCoreText(product));
    if (bucket === config.focusBucket) score += 4;
    else if (config.strictBucket && bucket && bucket !== config.focusBucket) score -= 6;
  }
  score -= exclusionPenalty(site, text);
  return score;
}

function bucketScores(text) {
  return BUCKET_PATTERNS
    .map(([bucket, terms]) => ({
      bucket,
      score: terms.reduce((total, term) => total + (matchesTerm(text, term) ? (term.includes(" ") ? 2 : 1) : 0), 0)
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
}

function classifyBucket(text) {
  const ranked = bucketScores(text);
  const best = ranked[0];
  if (!best) return null;
  const next = ranked[1];
  if (best.score < 2) return null;
  if (next && best.score === next.score) return null;
  return best.bucket;
}

function guideLabel(title) {
  return title
    .replace(/^Best\s+/i, "")
    .replace(/\b(products?|tools?|accessories|essentials|gear|supplies|picks?)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function minimumGuideScore(page) {
  const [, title, keyword] = page;
  const normalized = `${title} ${keyword}`.toLowerCase();
  if (/(tech|desk|phone|power|travel|lighting)/.test(normalized)) return 4;
  return 3;
}

function guideMeetsHardRules(site, product, page) {
  const config = guideConfig(site, page);
  const text = productText(product);
  const requiredTerms = expandTermList(config.requiredAny || []);
  const excludedTerms = expandTermList(config.excludeAny || []);
  if (excludedTerms.length && excludedTerms.some((term) => matchesTerm(text, term))) return false;
  if (requiredTerms.length && !requiredTerms.some((term) => matchesTerm(text, term))) return false;
  if (config.focusBucket && config.strictBucket) {
    const bucket = classifyBucket(productCoreText(product));
    if (bucket && bucket !== config.focusBucket) return false;
  }
  return true;
}

function bestGuideMatch(site, product, fallbackIndex = 0) {
  const scored = (site.guidePages || []).map((page, index) => ({
    page,
    index,
    score: guideRelevanceScore(site, product, page)
  }));
  const ranked = scored.sort((a, b) => b.score - a.score || a.index - b.index);
  const best = ranked[0];
  if (!best) return null;
  if (best.score < minimumGuideScore(best.page)) {
    return null;
  }
  return best.page;
}

export function curateProductsForSite(site, products, { limit = 60, minimum = 50 } = {}) {
  const scored = products
    .map((product, index) => ({
      product,
      index,
      score: siteRelevanceScore(site, product)
    }))
    .filter((entry) => entry.score > -2)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  if (scored.length < minimum) return products.slice(0, limit);
  return scored.slice(0, limit).map((entry) => entry.product);
}

export function productGuide(site, product, fallbackIndex = 0) {
  return bestGuideMatch(site, product, fallbackIndex);
}

export function productBadge(product, site, fallbackIndex = 0) {
  const text = productCoreText(product);
  const bucket = classifyBucket(text);
  const directLabels = {
    power: ["Best power pick", "Best charging upgrade"],
    hydration: ["Best hydration companion", "Best bottle-and-carry pick"],
    hair: ["Best hair-routine pick", "Best styling-routine helper"],
    nail: ["Best nail-routine pick", "Best manicure-table helper"],
    camp: ["Best campsite staple", "Best camp setup add-on"],
    road: ["Best road-trip helper", "Best car-cabin add-on"],
    desk: ["Best desk-setup upgrade", "Best workspace helper"],
    phone: ["Best phone-mount pick", "Best phone setup add-on"]
  };
  if (bucket && directLabels[bucket]) {
    return chooseVariant(productSeed(site, product, bucket), directLabels[bucket]);
  }
  const guide = bestGuideMatch(site, product, fallbackIndex);
  if (guide) return `Best for ${guideLabel(guide[1]).toLowerCase()}`;
  const fallbackLabels = {
    organization: ["Best space-saving pick", "Best storage-minded pick"],
    starter: ["Best starter set", "Best ready-to-go bundle"],
    lighting: ["Best light-friendly pick", "Best visibility upgrade"],
    cleaning: ["Best easy-clean pick", "Best cleanup helper"],
    carry: ["Best grab-and-go pick", "Best carry-ready pick"],
    mounting: ["Best setup helper", "Best mount-ready pick"],
    hosting: ["Best hosting essential", "Best table-ready pick"],
    outdoor: ["Best outdoor-ready pick", "Best patio-friendly pick"],
    beauty: ["Best routine staple", "Best vanity-side pick"]
  };
  if (bucket && fallbackLabels[bucket]) {
    return chooseVariant(productSeed(site, product, `fallback-${bucket}`), fallbackLabels[bucket]);
  }
  return chooseVariant(productSeed(site, product, "shortlist"), ["Best shortlist pick", "Best compare-now pick"]);
}

export function productDescription(product, site, fallbackIndex = 0) {
  const existingDescription = meaningfulDescription(product);
  if (existingDescription) return existingDescription;

  const text = productCoreText(product);
  const bucket = classifyBucket(text);
  const guide = bestGuideMatch(site, product, fallbackIndex);
  const guideName = guide ? guideLabel(guide[1]).toLowerCase() : site.category.toLowerCase();
  const bucketCopy = {
    power: [
      "Worth opening if port mix, charging speed, cable length, or battery size will decide the cart.",
      "Useful when the live listing details on output, recharge time, and packability matter more than marketing copy."
    ],
    starter: [
      "A sensible fit if you would rather compare one bundled setup than piece the whole thing together item by item.",
      "Useful for shoppers who want a ready-to-go bundle and need the live listing to confirm what is actually included."
    ],
    cleaning: [
      "Worth a look when low-fuss cleanup, washable materials, and repeat-use convenience matter.",
      "Makes more sense when the real question is how easy this is to clean, store, and use again next week."
    ],
    carry: [
      "Helpful when compact carry, protection, and quick access matter more than extra features.",
      "Useful if the cart is about grab-and-go packing, basic protection, and less bag clutter."
    ],
    mounting: [
      "A better fit when clamp style, viewing angle, and day-to-day stability are the details that matter.",
      "Worth opening when the mount itself needs to work in a real setup, not just look tidy in photos."
    ],
    hydration: [
      "Useful when capacity, leak control, and how easy it is to carry all matter at the same time.",
      "Worth checking when you care about daily carry comfort, sealing, and how this fits into a repeat routine."
    ],
    hosting: [
      "A better match for carts where setup speed, serving ease, and cleanup friction are the real comparison points.",
      "Useful when you want the table to come together faster and break down with less annoyance afterward."
    ],
    hair: [
      "Worth checking if storage, routine speed, and how the tool behaves day after day are the real decision points.",
      "A better fit when the live listing details on heat range, storage, and accessories will make or break the buy."
    ],
    nail: [
      "Useful when tabletop footprint, cleanup, and repeat-use convenience matter more than trend packaging.",
      "Worth opening when your real comparison is table space, storage, and how easy the setup is to repeat."
    ],
    camp: [
      "Useful when packed size, setup time, and how often it earns space in the car are the real questions.",
      "Worth comparing for camp setups where storage footprint and real-world usefulness matter more than novelty."
    ],
    road: [
      "Helpful when quick access, trunk discipline, and how this behaves in a real car matter more than gimmicks.",
      "A better fit for carts where cabin clutter, fast reach, and everyday drivability are the real comparison points."
    ],
    desk: [
      "Worth opening when footprint, cable control, clamp fit, or desktop compatibility will decide the purchase.",
      "Useful for setups where the boring details like reach, routing, and mount fit matter more than the render."
    ],
    phone: [
      "Helpful when reach, mount stability, and charging convenience are what you actually care about.",
      "Worth checking if the live listing will answer the real questions about grip, angle, and charging fit."
    ],
    outdoor: [
      "A better match when weather tolerance, setup friction, and storage between uses matter.",
      "Useful for outdoor setups where the live listing details on materials and footprint will decide the buy."
    ],
    beauty: [
      "Worth checking when counter footprint, storage habits, and routine convenience matter more than hype.",
      "Useful for routines where the real comparison is texture, storage, and how this fits into the daily setup."
    ],
    organization: [
      `Worth opening if ${guideName} is the job and you want the live listing for dimensions, included pieces, and recent photos.`,
      `Useful when you are comparing ${guideName} and need a quicker read on footprint, access, and setup fit.`
    ],
    lighting: [
      `Worth opening if ${guideName} is the job and you still need the live listing for size, setup, and recent photos.`,
      `Useful for ${guideName} shoppers who want the real listing details before committing space on the shelf, desk, or cart.`
    ]
  };
  const guideCopy = [
    `Worth opening if ${guideName} is the shopping job and you want the live listing for dimensions, included pieces, and recent photos.`,
    `Useful for ${guideName} shoppers who still need Amazon to confirm the size, materials, and latest listing details.`,
    `A practical compare-now option for ${guideName}, especially if you want the live listing to answer the final fit questions.`
  ];
  const leadSentence = chooseVariant(productSeed(site, product, `lead-${bucket || "guide"}`), [
    `${product.name} makes the most sense when ${guideName} is the part of the cart you want to get right first.`,
    `This product fits best when ${guideName} is the job and you still want the live listing to settle the details.`,
    `A plausible pick for ${guideName}, especially when footprint, included pieces, or everyday ease matter more than novelty.`
  ]);
  const secondSentence = chooseVariant(
    productSeed(site, product, `desc-${bucket || "guide"}`),
    bucketCopy[bucket] || guideCopy
  );
  return `${leadSentence} ${secondSentence}`;
}

export function selectGuideProducts(site, products, page, limit = 16) {
  const finalLimit = guideConfig(site, page).limit ?? limit;
  const uniqueProducts = [];
  const seen = new Set();
  for (const product of products) {
    const key = product.asin || product.name;
    if (seen.has(key)) continue;
    seen.add(key);
    uniqueProducts.push(product);
  }

  const ranked = uniqueProducts
    .map((product, index) => ({
      product,
      index,
      guideScore: guideRelevanceScore(site, product, page),
      siteScore: siteRelevanceScore(site, product),
      hardMatch: guideMeetsHardRules(site, product, page)
    }))
    .filter((entry) => entry.siteScore > -2)
    .sort((a, b) => (b.guideScore * 5 + b.siteScore) - (a.guideScore * 5 + a.siteScore) || a.index - b.index);

  const minimum = minimumGuideScore(page);
  const hardMatches = ranked.filter((entry) => entry.hardMatch);
  const strongMatches = hardMatches.filter((entry) => entry.guideScore >= minimum);
  const secondaryMatches = hardMatches.filter((entry) => entry.guideScore > 0 && entry.guideScore < minimum);
  const selected = [...strongMatches, ...secondaryMatches].slice(0, finalLimit).map((entry) => entry.product);
  if (selected.length) return selected;
  const siteMatches = ranked.filter((entry) => entry.siteScore > 2).slice(0, Math.min(finalLimit, 8)).map((entry) => entry.product);
  return siteMatches.length ? siteMatches : uniqueProducts.slice(0, finalLimit);
}

export function featuredHeading(site) {
  const voice = site ? siteVoice(site) : siteVoice({});
  return chooseVariant(`${site?.slug || "global"}:featured-heading`, [
    `Start with the ${voice.compareNoun} that is easiest to picture in a real ${voice.scene}.`,
    `Begin with the picks that do the clearest job in a real ${voice.scene}.`,
    `Open the shortlist pieces that are most likely to earn space in a real ${voice.scene}.`
  ]);
}

export function guideHubHeading(site) {
  const voice = site ? siteVoice(site) : siteVoice({});
  return chooseVariant(`${site?.slug || "global"}:guide-hub-heading`, [
    `Follow the ${voice.quickPathLabel} that matches the cart you are building.`,
    `Choose the route that best matches how you actually plan to use the space.`,
    `Pick the guide that matches the corner, routine, or setup you are trying to finish.`
  ]);
}

export function guideCardDescription(site, page) {
  const [, title] = page;
  const voice = siteVoice(site);
  return chooseVariant(`${site.slug}:${page[0]}:guide-card`, [
    `A tighter ${voice.compareNoun} for ${guideLabel(title).toLowerCase()}, aimed at shoppers who want the shortlist before the live spec check.`,
    `A shorter path to ${guideLabel(title).toLowerCase()}, built around fit and feel before Amazon handles the last-mile details.`,
    `A focused guide for ${guideLabel(title).toLowerCase()}, so the browsing step feels more edited before you open the listing.`
  ]);
}

export function productIndexHeadline(count) {
  return `${count} real product pages, sorted by shopping job.`;
}

export function guideIntro(site, page) {
  const [, title] = page;
  const voice = siteVoice(site);
  return chooseVariant(`${site.slug}:${page[0]}:guide-intro`, [
    `This guide narrows ${shortSiteCategory(site)} down to ${guideLabel(title).toLowerCase()} for shoppers trying to make a cleaner call in ${voice.scene}.`,
    `${site.brand} uses this page to tighten the field around ${guideLabel(title).toLowerCase()}, then leaves the live listing to confirm the details that change most often.`,
    `Use this page when ${guideLabel(title).toLowerCase()} is the actual job and you want the shortlist to feel more edited before you click through.`
  ]);
}

export function editorialPolicyCopy(site) {
  const voice = siteVoice(site);
  return chooseVariant(`${site.slug}:editorial-policy`, [
    `${site.brand} only points shoppers to real Amazon detail pages and keeps the on-site copy centered on fit, use case, and the parts of ${voice.scene} that people actually have to live with.`,
    `${site.brand} is built around live product pages, current imagery, clear disclosure, and practical buying notes instead of padded claims or filler copy.`,
    `${site.brand} narrows the field with real product pages, useful fit notes, and a more edited point of view before any outbound click.`
  ]);
}

export function homeIntroContent(site) {
  const voice = siteVoice(site);
  return {
    eyebrow: chooseVariant(`${site.slug}:home-intro-eyebrow`, [
      voice.openingLabel,
      "What this site does well",
      "How this edit stays useful"
    ]),
    heading: chooseVariant(`${site.slug}:home-intro-heading`, [
      `A more edited way to compare ${shortSiteCategory(site)}.`,
      `The shortlist is built for ${voice.scene}, not for generic catalog sprawl.`,
      `This ${voice.compareNoun} stays focused on what tends to matter in real use.`
    ]),
    paragraphs: [
      chooseVariant(`${site.slug}:home-intro-p1`, [
        `${site.brand} is for ${voice.shopper} who want ${voice.promise}. The page narrows the field by use case so the first click already feels filtered.`,
        `${site.brand} is built for ${voice.shopper}, with a tighter lens on ${voice.scene}. The goal is to separate the pieces that genuinely help from the ones that only photograph well.`,
        `${site.brand} keeps the category centered on ${voice.scene} and real buying jobs. That makes the early comparison step feel closer to an editor's shelf than a warehouse browse.`
      ]),
      chooseVariant(`${site.slug}:home-intro-p2`, [
        `${voice.methodologyLead} Amazon still handles the live variables like current pricing, options, and seller terms.`,
        `The copy stays out of the way of the live listing details that change fastest. What remains is a tighter read on fit, footprint, and what deserves a second look.`,
        `That keeps the site grounded in judgment instead of fake certainty. Shoppers can use the shortlist for direction, then use Amazon for the current listing facts.`
      ])
    ]
  };
}

export function serviceSectionContent(site) {
  const voice = siteVoice(site);
  return {
    eyebrow: voice.trustLabel,
    heading: chooseVariant(`${site.slug}:service-heading`, [
      `Why the ${voice.compareNoun} feels more useful than a generic roundup.`,
      `What keeps the shortlist tight instead of noisy.`,
      `The editorial rules behind the shortlist.`
    ]),
    intro: chooseVariant(`${site.slug}:service-intro`, [
      `The site is meant to help ${voice.shopper} sort the category without pretending the internet stands still.`,
      `The shortlist is designed to be clear before it is exhaustive, which matters more in ${voice.scene} than raw product count.`,
      `The point is not to mimic an Amazon page. It is to give shoppers a cleaner read on what deserves their attention.`
    ]),
    items: [
      {
        label: "edited on purpose",
        title: "The page stays inside its lane",
        body: chooseVariant(`${site.slug}:service-item-1`, [
          `Each section is trimmed around a specific shopping job, so the page does not drift into loosely related filler just to hit a number.`,
          `The shortlist keeps separate jobs separate. That matters when you are shopping for ${voice.scene} and do not want every nearby category shoved into the same feed.`
        ])
      },
      {
        label: "live details stay live",
        title: "Amazon handles the volatile parts",
        body: chooseVariant(`${site.slug}:service-item-2`, [
          `Prices, seller terms, shipping windows, and current options can move too fast to treat like permanent copy, so the site leaves those details to the listing.`,
          `The site focuses on fit notes and buying context, then lets the live product page confirm the pieces that actually change week to week.`
        ])
      },
      {
        label: "written for real rooms",
        title: "The comparison lens is practical",
        body: chooseVariant(`${site.slug}:service-item-3`, [
          `The notes stay closer to footprint, cleanup, storage, setup time, and everyday friction than to hype phrases that do not help once the box arrives.`,
          `What gets surfaced here is the stuff people notice after checkout: fit, usability, storage, and whether the thing earns space more than once.`
        ])
      }
    ]
  };
}

function defaultGuideConcerns(site, page) {
  const text = normalize(page.join(" "));
  if (/(patio|outdoor|garden|plant)/.test(text)) return ["size and footprint", "weather exposure", "setup effort"];
  if (/(camera|door|plug|power|tech|phone|desk)/.test(text)) return ["compatibility", "power method", "where it sits day to day"];
  if (/(bath|sleep|scent|beauty|hair|nail)/.test(text)) return ["routine fit", "storage footprint", "cleanup or refill needs"];
  if (/(car|travel|camp|bike|hike|walking)/.test(text)) return ["packed size", "reach or access", "how often it earns space"];
  if (/(coffee|tea|smoothie|kitchen|hosting|bar)/.test(text)) return ["counter footprint", "cleanup", "what is included"];
  return ["footprint", "included pieces", "everyday friction"];
}

export function guideArticleContent(site, page, products = []) {
  const [, title] = page;
  const voice = siteVoice(site);
  const config = guideConfig(site, page);
  const label = guideLabel(title).toLowerCase();
  const concerns = config.concerns?.length ? config.concerns : defaultGuideConcerns(site, page);
  const audience = config.audience || `${voice.shopper} trying to get ${label} right without overbuying`;
  const skipIf = config.skipIf || `you need a broader category page instead of a guide centered on ${label}`;
  const topCategories = unique(products.slice(0, 4).map((product) => normalize(product.category))).filter(Boolean);
  const categorySummary = humanList(topCategories.slice(0, 3));
  return {
    overviewHeading: chooseVariant(`${site.slug}:${page[0]}:overview-heading`, [
      `How to separate strong ${label} picks from filler.`,
      `What usually matters first in ${label}.`,
      `A cleaner way to read this ${label} shortlist.`
    ]),
    overviewParagraphs: [
      chooseVariant(`${site.slug}:${page[0]}:overview-p1`, [
        `${site.brand} built this page for ${audience}. The shortlist leans toward ${categorySummary || label}, because those are the shapes most likely to solve the actual job without padding the cart.`,
        `This page is less about chasing every adjacent product and more about keeping the focus on ${label}. In practice that means comparing a smaller field of ${categorySummary || "relevant product types"} before the listing details take over.`,
        `When ${label} is the thing you are trying to solve, the useful distinction is usually not brand story. It is how quickly the product fits the routine, shelf, room, or bag it is headed into.`
      ]),
      chooseVariant(`${site.slug}:${page[0]}:overview-p2`, [
        `The on-page notes stay focused on ${humanList(concerns)}. Amazon still handles the moving parts like current pricing, options, and seller-specific details.`,
        `The guide is written to shorten the first decision. The live listing is still the place to confirm the current version, what ships with it, and what has changed since publication.`,
        `The goal is not to replace the product page. It is to help you arrive there with a better idea of what you actually need to verify.`
      ])
    ],
    noteCards: [
      {
        label: "best if",
        title: "You want the shortlist to stay narrow",
        body: `This guide keeps its attention on ${label}, so the comparison is less likely to drift into loosely related products that belong on another page.`
      },
      {
        label: "check first",
        title: `Look hard at ${humanList(concerns.slice(0, 2))}`,
        body: `Those details tend to decide whether a product earns repeat use or becomes something you work around after the first week.`
      },
      {
        label: "skip this guide if",
        title: "The shopping job is broader than the title",
        body: `If ${skipIf}, the site-wide product index or top picks page will give you a better starting point.`
      }
    ],
    closingHeading: chooseVariant(`${site.slug}:${page[0]}:closing-heading`, [
      `Before you open Amazon, know what would make ${label} feel easy to live with.`,
      `The best ${label} picks usually win on fit, not on hype.`,
      `Use the shortlist to narrow the job, then use the listing to verify the moving parts.`
    ]),
    closingParagraph: chooseVariant(`${site.slug}:${page[0]}:closing-p`, [
      `If a pick survives the questions around ${humanList(concerns)}, it is usually worth the click-through. If it only looks good in a broad category sweep, it probably belongs somewhere else.`,
      `The strongest options here are the ones that make sense in a real ${voice.scene}, not just in a polished product photo. That is the bar this page is trying to hold.`,
      `A good guide should leave you with fewer open tabs and better questions. That is the standard this page is aiming for.`
    ])
  };
}

export function comparisonTableIntro(site, title, pageType = "default") {
  const voice = siteVoice(site);
  const label = title.replace(/\s+comparison$/i, "").replace(/^Top decision table$/i, "top picks").toLowerCase();
  const variants = {
    home: [
      `A fast first-pass comparison for shoppers trying to sort ${voice.scene} without opening every listing in a new tab.`,
      `Use the table to narrow the field quickly, then let the live listing confirm the details that matter most to your setup.`
    ],
    guide: [
      `A tighter read on ${label}, with the shortlist focused on the details that usually decide whether a product actually earns space.`,
      `This table is meant to make ${label} easier to scan before you open the live listing for current options and specs.`
    ],
    top: [
      `A quick skim of the top shortlist before you drop into the full card-by-card list.`,
      `Use the table to spot the strongest fits fast, then open the products that deserve a closer look.`
    ],
    default: [
      `A quicker comparison view before the live Amazon pages handle the last-mile detail check.`,
      `Use the table as the short version, then open Amazon for the current listing specifics.`
    ]
  };
  return chooseVariant(`${site.slug}:${pageType}:${label}:table-intro`, variants[pageType] || variants.default);
}
