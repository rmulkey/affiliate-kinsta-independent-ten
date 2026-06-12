import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type BeautySeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const beautySeeds: BeautySeed[] = [
  {
    name: "Mighty Patch Original",
    category: "Acne & Pore Care",
    priceHint: "$ Budget-friendly",
    description:
      "A fast, low-drama fix for surprise breakouts when you want something simple that actually gets used.",
    highlights: ["Hydrocolloid patch", "Night or daytime use", "Easy repeat buy"],
    bestFor: "Overnight breakout triage",
    whyPicked:
      "This is still one of the clearest Amazon beauty staples because it solves one annoying problem fast and doesn’t need a long explanation.",
    trustNote: "Saved from the exact Amazon product page using the full-size PDP image.",
    image: {
      src: "/images/beauty/mighty-patch-original.jpg",
      alt: "Mighty Patch Original acne patches",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Mighty-Patch-Hydrocolloid-Absorbing-count/dp/B074PVTPBW"
  },
  {
    name: "Biodance Bio-Collagen Real Deep Mask",
    category: "Acne & Pore Care",
    priceHint: "$ Mid-range",
    description:
      "One of the K-beauty masks that keeps showing up because it feels like a quick glow reset instead of a random impulse buy.",
    highlights: ["Hydration-focused sheet mask", "Collagen-centered formula", "TikTok-friendly favorite"],
    bestFor: "A plumper, smoother skin day",
    whyPicked:
      "This one has real momentum on Amazon right now and makes sense for anyone building a tighter high-impact mask lineup.",
    trustNote: "Real Amazon PDP image paired with an exact Amazon product page.",
    image: {
      src: "/images/beauty/biodance-bio-collagen-mask.jpg",
      alt: "Biodance Bio-Collagen Real Deep Mask box",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Biodance-Bio-Collagen-Tightening-Hydrating-Molecular/dp/B0B2RM68G2"
  },
  {
    name: "Medicube Zero Pore Pad 2.0",
    category: "Acne & Pore Care",
    priceHint: "$ Mid-range",
    description:
      "An easy swipe-on product for people chasing smoother texture and cleaner-looking pores without building a 12-step routine.",
    highlights: ["Dual-textured pads", "Daily pore care", "K-beauty best seller"],
    bestFor: "Texture and visible pores",
    whyPicked:
      "Pore pads keep trending because they’re easy to stick with, and this is one of the Amazon names that keeps getting pulled into repeat carts.",
    trustNote: "Localized from the exact Amazon PDP for a sharper product shot.",
    image: {
      src: "/images/beauty/medicube-zero-pore-pad.jpg",
      alt: "Medicube Zero Pore Pad 2.0 tub",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Medicube-Zero-Pore-Pads-Dual-Textured/dp/B09V7Z4TJG"
  },
  {
    name: "The Ordinary Glycolic Acid 7% Exfoliating Toner",
    category: "Acne & Pore Care",
    priceHint: "$ Budget-friendly",
    description:
      "A popular exfoliating toner for people who want smoother-looking texture, but only if they are ready to use it carefully.",
    highlights: ["Exfoliating acid toner", "Texture-focused", "Low-cost active"],
    bestFor: "Occasional exfoliation routines",
    whyPicked:
      "It appears in current Amazon beauty bestseller coverage and gives the skincare section a high-intent active product without making cure-all claims.",
    trustNote:
      "Real commerce image with an exact Amazon product-page URL; use instructions should always come from the product label.",
    image: {
      src: "/images/beauty/the-ordinary-glycolic-toner.jpg",
      alt: "The Ordinary Glycolic Acid 7% Exfoliating Toner bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Ordinary-Glycolic-Exfoliating-Brightening-Even-Looking/dp/B071914GGL"
  },
  {
    name: "Clean Skin Club Clean Towels XL",
    category: "Acne & Pore Care",
    priceHint: "$ Mid-range",
    description:
      "A clean-routine upgrade for anyone who hates wondering what is living in the bathroom towel situation.",
    highlights: ["Single-use face towels", "Dry towel format", "Makeup-removal friendly"],
    bestFor: "Fresh face-drying after cleansing",
    whyPicked:
      "This is one of those TikTok-to-repeat-buy products that actually has a clear use case, especially for skincare routines.",
    trustNote:
      "Exact Amazon ASIN and real commerce image added after the second QA/product expansion pass.",
    image: {
      src: "/images/beauty/clean-skin-club-towels-xl.jpg",
      alt: "Clean Skin Club Clean Towels XL box",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Clean-Skin-Club-Clean-Towels/dp/B07PBXXNCY"
  },
  {
    name: "PanOxyl Acne Foaming Wash 10% Benzoyl Peroxide",
    category: "Acne & Pore Care",
    priceHint: "$ Budget-friendly",
    description:
      "A strong acne-wash option that belongs in the catalog because shoppers look for it by name, not because it needs hype.",
    highlights: ["10% benzoyl peroxide", "Face and body wash", "Acne-care staple"],
    bestFor: "People already shopping benzoyl peroxide washes",
    whyPicked:
      "It is a high-intent Amazon skincare search and a useful counterweight to patches, pads, and softer hydration products.",
    trustNote:
      "Real product image and exact Amazon product page; follow product directions and patch-test when introducing actives.",
    image: {
      src: "/images/beauty/panoxyl-acne-foaming-wash.jpg",
      alt: "PanOxyl Acne Foaming Wash 10% Benzoyl Peroxide tube",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/PanOxyl-Acne-Foaming-Wash-Benzoyl/dp/B081KL2QYJ"
  },
  {
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "Acne & Pore Care",
    priceHint: "$ Budget-friendly",
    description:
      "A familiar oil-and-texture serum that stays popular because it feels specific, affordable, and easy to compare.",
    highlights: ["Niacinamide serum", "Oil-control focused", "Very affordable"],
    bestFor: "Blemish-prone and shiny-skin routines",
    whyPicked:
      "It is one of the named products in 2026 Amazon beauty bestseller coverage and gives the catalog another strong search-intent staple.",
    trustNote:
      "Matched to the exact Amazon ASIN with a real product image; avoid stacking too many actives at once.",
    image: {
      src: "/images/beauty/the-ordinary-niacinamide.jpg",
      alt: "The Ordinary Niacinamide 10% + Zinc 1% serum bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Ordinary-Niacinamide-10-Zinc-30ml/dp/B01MDTVZTZ"
  },
  {
    name: "CeraVe Moisturizing Cream",
    category: "Hydration & Glow",
    priceHint: "$ Budget-friendly",
    description:
      "The dependable barrier-care pick that keeps showing up for a reason: it’s simple, familiar, and actually gets finished.",
    highlights: ["Ceramides and hyaluronic acid", "Face and body use", "Big value tub"],
    bestFor: "Dry, sensitive, or overworked skin",
    whyPicked:
      "Every trending beauty edit still needs at least one non-flashy workhorse, and this is probably the most reliable one on Amazon.",
    trustNote: "Exact Amazon product page and full-size commerce image.",
    image: {
      src: "/images/beauty/cerave-moisturizing-cream.jpg",
      alt: "CeraVe Moisturizing Cream jar",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC"
  },
  {
    name: "La Roche-Posay Toleriane Double Repair Face Moisturizer",
    category: "Hydration & Glow",
    priceHint: "$ Mid-range",
    description:
      "A no-drama daily moisturizer for people who want barrier support, comfort, and a cleaner skincare shelf.",
    highlights: ["Fragrance-free", "Ceramide and niacinamide", "Derm-brand staple"],
    bestFor: "Sensitive-feeling daily moisture",
    whyPicked:
      "It keeps showing up in Amazon moisturizer demand because the job is easy to understand: dependable hydration without a trend-product personality.",
    trustNote:
      "Added from current Amazon trend checks with an exact Amazon PDP and a real commerce image.",
    image: {
      src: "/images/beauty/la-roche-posay-toleriane-double-repair.jpg",
      alt: "La Roche-Posay Toleriane Double Repair Face Moisturizer bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Roche-Posay-Toleriane-Double-Repair-Moisturizer/dp/B01N9SPQHQ"
  },
  {
    name: "The Ordinary Hyaluronic Acid 2% + B5",
    category: "Hydration & Glow",
    priceHint: "$ Budget-friendly",
    description:
      "A simple hydration serum that makes sense when skin feels tight, dull, or overdone from too many actives.",
    highlights: ["Lightweight serum", "Hydration-focused", "Budget-friendly"],
    bestFor: "Adding moisture without a heavy cream",
    whyPicked:
      "The Ordinary keeps converting because shoppers can understand the product fast, and this one fills a useful hydration slot.",
    trustNote: "Real product image and exact Amazon PDP added in the second catalog pass.",
    image: {
      src: "/images/beauty/the-ordinary-hyaluronic-acid.jpg",
      alt: "The Ordinary Hyaluronic Acid 2% + B5 serum bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Ordinary-Hyaluronic-Acid-2-B5/dp/B01MYEZPC8"
  },
  {
    name: "Aquaphor Healing Ointment Advanced Therapy",
    category: "Hydration & Glow",
    priceHint: "$ Budget-friendly",
    description:
      "The unglamorous little hero for dry spots, chapped lips, rough hands, and the kind of skin stuff that needs boring reliability.",
    highlights: ["Multi-use ointment", "Fragrance-free", "Barrier-style care"],
    bestFor: "Dry patches and simple skin protection",
    whyPicked:
      "Every beauty edit needs a practical repair product. This one has years of trust and still makes sense next to trendier picks.",
    trustNote:
      "Matched to an exact Amazon product page and a real product image during QA expansion.",
    image: {
      src: "/images/beauty/aquaphor-healing-ointment.jpg",
      alt: "Aquaphor Healing Ointment Advanced Therapy jar",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Aquaphor-Healing-Ointment-Moisturizer-Protectant/dp/B006IB5T4W"
  },
  {
    name: "e.l.f. Holy Hydration Face Cream",
    category: "Hydration & Glow",
    priceHint: "$ Budget-friendly",
    description:
      "A softer, budget-friendlier hydration pick when you want skin to feel smoother without paying prestige prices.",
    highlights: ["Cream texture", "Hyaluronic acid", "Cruelty-free"],
    bestFor: "Affordable daily moisture",
    whyPicked:
      "This stays relevant because it gives the budget beauty crowd a product that still feels current, polished, and easy to recommend.",
    trustNote: "Real image saved from the exact Amazon PDP.",
    image: {
      src: "/images/beauty/elf-holy-hydration-face-cream.jpg",
      alt: "e.l.f. Holy Hydration Face Cream jar",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/l-f-Holy-Hydration-Face-Cream/dp/B0984H7XH5"
  },
  {
    name: "LANEIGE Lip Sleeping Mask",
    category: "Hydration & Glow",
    priceHint: "$ Mid-range",
    description:
      "Still one of the easiest beauty splurges to justify if you like products that feel a little nicer without being hard to use.",
    highlights: ["Overnight lip treatment", "Soft glossy finish", "Cult favorite"],
    bestFor: "Dry lips and bedside routines",
    whyPicked:
      "It keeps showing up because it’s familiar, giftable, and still one of the safest ‘viral but useful’ picks in beauty.",
    trustNote: "Exact Amazon page with a localized full-size product image.",
    image: {
      src: "/images/beauty/laneige-lip-sleeping-mask.jpg",
      alt: "LANEIGE Lip Sleeping Mask jar",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/LANEIGE-Sleeping-Mask-Peach-Iced/dp/B0DQF1S914"
  },
  {
    name: "e.l.f. Halo Glow Liquid Filter",
    category: "Makeup Staples",
    priceHint: "$ Budget-friendly",
    description:
      "The glow-base product that makes sense if you want skin to look a little fresher without going full heavy-foundation mode.",
    highlights: ["Soft-focus glow", "Multi-use complexion layer", "Budget favorite"],
    bestFor: "Light makeup days with extra glow",
    whyPicked:
      "This is one of the Amazon beauty products that crossed from trend to routine because it’s flattering, easy, and not too precious.",
    trustNote: "Localized from the exact Amazon PDP for a clean, real product shot.",
    image: {
      src: "/images/beauty/elf-halo-glow-liquid-filter.jpg",
      alt: "e.l.f. Halo Glow Liquid Filter bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/l-f-Complexion-Soft-Focus-Hyaluronic-Cruelty-Free/dp/B0B5MGBDHZ"
  },
  {
    name: "Maybelline Lash Sensational Sky High Mascara",
    category: "Makeup Staples",
    priceHint: "$ Budget-friendly",
    description:
      "A modern drugstore mascara pick that still feels current if you want length and lift without overthinking it.",
    highlights: ["Lengthening focus", "Flexible brush", "Big mainstream following"],
    bestFor: "Everyday lashes with more length",
    whyPicked:
      "The Amazon beauty chart almost always has a mascara like this in the mix, and Sky High is still one of the easier ones to recommend broadly.",
    trustNote: "Real Amazon pack shot tied to the exact product page.",
    image: {
      src: "/images/beauty/maybelline-sky-high-mascara.jpg",
      alt: "Maybelline Lash Sensational Sky High Mascara tube",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Maybelline-Volumizing-Buildable-Lengthening-Multiplying/dp/B08H3JPH74"
  },
  {
    name: "essence Lash Princess False Lash Effect Mascara",
    category: "Makeup Staples",
    priceHint: "$ Budget-friendly",
    description:
      "A classic low-cost mascara pick that still gets picked up because it delivers drama without asking for much money.",
    highlights: ["Volumizing look", "Cruelty-free", "Very affordable"],
    bestFor: "Budget-friendly bold lashes",
    whyPicked:
      "This is still one of Amazon beauty’s easiest under-$10 wins, which makes it perfect for a trending roundup that needs real conversion power.",
    trustNote: "Localized from the exact Amazon listing with a real PDP image.",
    image: {
      src: "/images/beauty/essence-lash-princess-mascara.jpg",
      alt: "essence Lash Princess False Lash Effect Mascara",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/essence-Princess-Effect-Mascara-Cruelty/dp/B00T0C9XRK"
  },
  {
    name: "Mielle Rosemary Mint Scalp & Hair Strengthening Oil",
    category: "Hair Repair & Styling",
    priceHint: "$ Budget-friendly",
    description:
      "One of the clearest Amazon hair-care trend products because it sits right at the crossover of scalp care, growth talk, and simple routine upgrades.",
    highlights: ["Scalp oil", "Minty feel", "Widely repurchased"],
    bestFor: "Scalp-care routines and hair growth-focused users",
    whyPicked:
      "This product keeps showing up because it feels practical, affordable, and easy to work into a real routine instead of a one-week obsession.",
    trustNote: "Exact Amazon product page with a saved full-size commerce image.",
    image: {
      src: "/images/beauty/mielle-rosemary-mint-oil.jpg",
      alt: "Mielle Rosemary Mint Scalp and Hair Strengthening Oil bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Mielle-Rosemary-Mint-Scalp-Strengthening/dp/B07N7PK9QK"
  },
  {
    name: "Olaplex No. 6 Bond Smoother",
    category: "Hair Repair & Styling",
    priceHint: "$ Premium",
    description:
      "A cleaner high-end styling-and-repair pick when you want smoother ends and less frizz without a huge routine.",
    highlights: ["Leave-in styling cream", "Frizz control", "Bond-building name recognition"],
    bestFor: "Dry ends, frizz, and smoother blowouts",
    whyPicked:
      "This is one of the prestige hair names people already know, and No. 6 is one of the more approachable products in the lineup.",
    trustNote: "Real Amazon PDP image with an exact destination link.",
    image: {
      src: "/images/beauty/olaplex-no-6.jpg",
      alt: "Olaplex No. 6 Bond Smoother bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Olaplex-Bond-Smoother-3-3-Fl/dp/B07PW4MTHV"
  },
  {
    name: "CHI 44 Iron Guard Thermal Protection Spray",
    category: "Hair Repair & Styling",
    priceHint: "$ Mid-range",
    description:
      "One of the easiest thermal-protection picks to understand if you use hot tools and want something familiar and straightforward.",
    highlights: ["Heat protection spray", "Salon-brand recognition", "Layer-friendly mist"],
    bestFor: "Hot-tool users who want a basic safeguard",
    whyPicked:
      "Thermal protection is one of the least exciting but most useful beauty categories, and this is a long-running Amazon staple.",
    trustNote: "Saved from the exact Amazon product page to keep the image real and sharp.",
    image: {
      src: "/images/beauty/chi-44-iron-guard.jpg",
      alt: "CHI 44 Iron Guard Thermal Protection Spray bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/CHI-Guard-Thermal-Protection-Spray/dp/B002RS6JSA"
  },
  {
    name: "Nizoral Anti-Dandruff Shampoo",
    category: "Hair Repair & Styling",
    priceHint: "$ Budget-friendly",
    description:
      "A scalp-care staple for people who want something more purposeful than another random glossy-hair product.",
    highlights: ["Ketoconazole 1%", "Scalp-care focused", "Recognizable staple"],
    bestFor: "Dandruff-focused scalp routines",
    whyPicked:
      "Scalp care is still a strong Amazon beauty lane, and Nizoral is one of the easiest products for shoppers to recognize by name.",
    trustNote:
      "Exact Amazon PDP and real product image added during the second QA/product expansion pass.",
    image: {
      src: "/images/beauty/nizoral-anti-dandruff-shampoo.jpg",
      alt: "Nizoral Anti-Dandruff Shampoo bottles",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Nizoral-Anti-Dandruff-Shampoo-Ketoconazole-Fresh/dp/B00AINMFAC"
  },
  {
    name: "L'Oreal Paris Sleek It Iron Straight Heat Spray",
    category: "Hair Repair & Styling",
    priceHint: "$ Budget-friendly",
    description:
      "A more affordable heat-protection option that makes sense if you want solid basics and not another expensive styling step.",
    highlights: ["Heat spray", "Drugstore price point", "Made for smoothing"],
    bestFor: "Budget styling routines",
    whyPicked:
      "This is a useful counterweight to salon-brand options and gives the catalog a better real-world price mix.",
    trustNote: "Localized from the exact Amazon PDP.",
    image: {
      src: "/images/beauty/loreal-sleek-it-heat-spray.jpg",
      alt: "L'Oreal Paris Sleek It Iron Straight Heat Spray bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Paris-Advanced-Hairstyle-Straight-Heatspray/dp/B00ID1A5TO"
  },
  {
    name: "DAE Cactus Fruit 3-In-1 Styling Cream",
    category: "Hair Repair & Styling",
    priceHint: "$ Mid-range",
    description:
      "A newer-feeling styling cream that lands well if you want hair products that feel current, polished, and not overly salon-coded.",
    highlights: ["3-in-1 styling cream", "Frizz control", "Brand with strong social pull"],
    bestFor: "Softer, smoother styled hair",
    whyPicked:
      "This brings in a more trend-aware hair brand without losing the practical side of the catalog.",
    trustNote: "Real PDP image and direct Amazon destination.",
    image: {
      src: "/images/beauty/dae-cactus-fruit-styling-cream.jpg",
      alt: "DAE Cactus Fruit 3-In-1 Styling Cream bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/DAE-Cactus-Fruit-Styling-Taming/dp/B0DTMFM1B8"
  },
  {
    name: "Revlon One-Step Volumizer Plus",
    category: "Hair Repair & Styling",
    priceHint: "$ Premium",
    description:
      "The blow-dry shortcut tool that still makes sense for anyone who wants more shape and volume without salon-level effort.",
    highlights: ["Hot air brush", "Volume and smoothing", "Known Amazon staple"],
    bestFor: "At-home blowout shortcuts",
    whyPicked:
      "It’s still one of the most recognizable Amazon beauty tools because it solves time, volume, and ease in one device.",
    trustNote: "Localized from the exact Amazon listing for a cleaner, larger product shot.",
    image: {
      src: "/images/beauty/revlon-one-step-plus.jpg",
      alt: "Revlon One-Step Volumizer Plus hot air brush",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/REVLON-One-Step-Dryer-Volumizer-Brush/dp/B096SVJZSW"
  },
  {
    name: "Sol de Janeiro Brazilian Bum Bum Cream",
    category: "Body & SPF",
    priceHint: "$ Premium",
    description:
      "Still one of the most recognizable body-care splurges on Amazon if you want something fun, fragrant, and giftable.",
    highlights: ["Body cream", "Signature scent", "Gift-friendly pick"],
    bestFor: "Body care that feels more indulgent",
    whyPicked:
      "Some beauty products trend because they’re useful. This one trends because it’s useful and fun, which matters in a site like this.",
    trustNote: "Real Amazon commerce image from the exact product page.",
    image: {
      src: "/images/beauty/sol-de-janeiro-bum-bum-cream.jpg",
      alt: "Sol de Janeiro Brazilian Bum Bum Cream jar",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Brazilian-Bum-Cream-150ml/dp/B09KDMFMX4"
  },
  {
    name: "Tree Hut Tropic Glow Firming Shea Sugar Scrub",
    category: "Body & SPF",
    priceHint: "$ Budget-friendly",
    description:
      "A scrub that fits the ‘fun but still useful’ lane and keeps showing up in body-care routines for good reason.",
    highlights: ["Body scrub", "Glow-focused formula", "Good price point"],
    bestFor: "Smoother skin and shower-routine upgrades",
    whyPicked:
      "Tree Hut makes the body-care side of Amazon beauty feel less boring, and this is one of the strongest picks in that world.",
    trustNote: "Localized from the exact Amazon PDP image.",
    image: {
      src: "/images/beauty/tree-hut-tropic-glow-scrub.jpg",
      alt: "Tree Hut Tropic Glow Firming Shea Sugar Scrub jar",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Tree-Hut-Tropic-Firming-Sugar/dp/B091B99DR1"
  },
  {
    name: "eos Shea Better Body Lotion Vanilla Cashmere",
    category: "Body & SPF",
    priceHint: "$ Budget-friendly",
    description:
      "The body lotion that keeps showing up because it smells cozy, feels easy to use, and does not feel like a big beauty decision.",
    highlights: ["Vanilla Cashmere scent", "Lightweight body lotion", "Repeat-buy favorite"],
    bestFor: "Affordable body care that feels fun",
    whyPicked:
      "Current Amazon marketplace reports show huge demand around this exact lotion, and it fits the site’s practical-but-cute body-care lane.",
    trustNote:
      "Real commerce image and exact Amazon ASIN added from the second product expansion pass.",
    image: {
      src: "/images/beauty/eos-shea-better-body-lotion.jpg",
      alt: "eos Shea Better Body Lotion Vanilla Cashmere bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/eos-Shea-Better-Lotion-Cashmere/dp/B08KT2Z93D"
  },
  {
    name: "Neutrogena Makeup Remover Wipes Twin Pack",
    category: "Body & SPF",
    priceHint: "$ Budget-friendly",
    description:
      "A practical, familiar makeup-removal pick for travel bags, gym bags, and nights when the full routine is simply not happening.",
    highlights: ["Twin pack", "Makeup-removal wipe", "Travel-friendly"],
    bestFor: "Fast makeup removal backup",
    whyPicked:
      "It is a current Amazon beauty bestseller-list product and rounds out the catalog with a high-frequency personal-care staple.",
    trustNote:
      "Exact Amazon PDP and real product image added; this is positioned as convenience care, not a replacement for every cleanse.",
    image: {
      src: "/images/beauty/neutrogena-makeup-remover-wipes.jpg",
      alt: "Neutrogena Makeup Remover Wipes twin pack",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Neutrogena-Cleansing-Towelettes-Waterproof-Alcohol-Free/dp/B00U2VQZDS"
  },
  {
    name: "Hawaiian Tropic Tanning Oil Pump Spray SPF 25",
    category: "Body & SPF",
    priceHint: "$ Budget-friendly",
    description:
      "A classic summer beauty add if you want the catalog to feel seasonal, practical, and very Amazon-friendly.",
    highlights: ["SPF 25", "Pump spray", "Beach-bag staple"],
    bestFor: "Vacation bags and pool days",
    whyPicked:
      "Summer beauty shopping on Amazon always pulls in body and sun products, and this one fits that lane naturally.",
    trustNote: "Saved from the exact Amazon product page with the real PDP image.",
    image: {
      src: "/images/beauty/hawaiian-tropic-tanning-oil.jpg",
      alt: "Hawaiian Tropic Tanning Oil Pump Spray SPF 25 bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Hawaiian-Tropic-Tanning-Spray-Ounce/dp/B07FQS6SRJ"
  },
  {
    name: "La Roche-Posay Anthelios Melt-In Milk Sunscreen SPF 100",
    category: "Body & SPF",
    priceHint: "$ Premium",
    description:
      "A more serious sunscreen pick for people who want high protection from a dermatologist-recognized brand.",
    highlights: ["SPF 100", "Face and body use", "Derm-brand trust"],
    bestFor: "High-protection sun care",
    whyPicked:
      "Beauty shoppers still want at least one SPF that feels dependable and grown-up, and this is that product in the mix.",
    trustNote: "Real Amazon PDP image and direct product-page link.",
    image: {
      src: "/images/beauty/la-roche-posay-anthelios-spf-100.jpg",
      alt: "La Roche-Posay Anthelios Melt-In Milk Sunscreen SPF 100 bottle",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Roche-Posay-Anthelios-Melt-Sunscreen-Milk/dp/B002CML1VG"
  }
];

export function getBeautyCatalog(affiliateTag: string): ProductCardContent[] {
  return beautySeeds.map((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}

export function getBeautySkincareCatalog(
  affiliateTag: string
): ProductCardContent[] {
  return getBeautyCatalog(affiliateTag).filter((product) =>
    ["Acne & Pore Care", "Hydration & Glow"].includes(product.category)
  );
}
