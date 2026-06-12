import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type GeneratedSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const seeds: GeneratedSeed[] = [
  {
    "name": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Clean Linen, 6.7 Fl Oz, 10 Count",
    "category": "Sustainable Home",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81rd5E9pQuL._AC_UL320_.jpg",
      "alt": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Clean Linen, 6.7 Fl Oz, 10 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BKKPYX6P"
  },
  {
    "name": "Febreze Plug-In Air Freshener, Odor-Fighting Scented Oil Refill, Air Fresheners for Home and Bathroom and Kitchen, Long Lasting for Strong...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51qppONVr6L._AC_UL320_.jpg",
      "alt": "Febreze Plug-In Air Freshener, Odor-Fighting Scented Oil Refill, Air Fresheners for Home and Bathroom and Kitchen, Long Lasting for Strong...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08492PZ8Y"
  },
  {
    "name": "Air Wick Essential Mist Starter Kit, Diffuser + 1 Refill, Lavender and Almond Blossom, Air Freshener, Essential Oils",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/815-ikS0QOL._AC_UL320_.jpg",
      "alt": "Air Wick Essential Mist Starter Kit, Diffuser + 1 Refill, Lavender and Almond Blossom, Air Freshener, Essential Oils",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B075HP5G2D"
  },
  {
    "name": "Febreze Plug-In Air Freshener, Odor-Fighting Scented Oil Starter Kit, Air Fresheners for Home and Bathroom and Kitchen, Long Lasting for St...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81n2Tn6cNgL._AC_UL320_.jpg",
      "alt": "Febreze Plug-In Air Freshener, Odor-Fighting Scented Oil Starter Kit, Air Fresheners for Home and Bathroom and Kitchen, Long Lasting for St...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B6LKNF2N"
  },
  {
    "name": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Clean Linen, 3.35 Fl Oz, 5 Count",
    "category": "Sustainable Home",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81xbbp5l47L._AC_UL320_.jpg",
      "alt": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Clean Linen, 3.35 Fl Oz, 5 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07G3YXPXQ"
  },
  {
    "name": "Air Wick Plug in Scented Oil Starter Kit, 2 Warmers + 6 Refills, Lavender & Chamomile, Eco Friendly, Essential Oils, Air Freshener",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81oVGD+wsWL._AC_UL320_.jpg",
      "alt": "Air Wick Plug in Scented Oil Starter Kit, 2 Warmers + 6 Refills, Lavender & Chamomile, Eco Friendly, Essential Oils, Air Freshener",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07QLQ3QP4"
  },
  {
    "name": "Refill Sponge For #00008 (2 pack)",
    "category": "Sustainable Home",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61gu3L9jIWL._AC_UL320_.jpg",
      "alt": "Refill Sponge For #00008 (2 pack)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00122GFEK"
  },
  {
    "name": "Ourfreshe Refills, Spa Minerals, 6/Box",
    "category": "Sustainable Home",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61yHeks1zAS._AC_UL320_.jpg",
      "alt": "Ourfreshe Refills, Spa Minerals, 6/Box",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08HMCBXBP"
  },
  {
    "name": "Arrow Dish Wand Sponge Refills, 6pk - Replacement Sponge Heads for Dish Wand - Quick, Convenient Cleaning - Easy to Refill",
    "category": "Sustainable Home",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71RuydzKS7L._AC_UL320_.jpg",
      "alt": "Arrow Dish Wand Sponge Refills, 6pk - Replacement Sponge Heads for Dish Wand - Quick, Convenient Cleaning - Easy to Refill",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B073Z57Q9J"
  },
  {
    "name": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Cashmere Woods, 6.7 Fl Oz, 10 Count",
    "category": "Sustainable Home",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ykd9GsVrL._AC_UL320_.jpg",
      "alt": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Cashmere Woods, 6.7 Fl Oz, 10 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BKH5W88Y"
  },
  {
    "name": "Febreze Plug-In Air Freshener, Odor-Fighting Scented Oil Refill, Air Fresheners for Home, Bathroom and Kitchen, Long Lasting, Gain Original...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71wS4O0WeEL._AC_UL320_.jpg",
      "alt": "Febreze Plug-In Air Freshener, Odor-Fighting Scented Oil Refill, Air Fresheners for Home, Bathroom and Kitchen, Long Lasting, Gain Original...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08492F6Y9"
  },
  {
    "name": "Air Wick Essential Mist Refill, Essential Oils Diffuser, Lavender and Almond Blossom, 3 ct, Air Freshener, Aroma diffuser",
    "category": "Sustainable Home",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Pb2bhpiQL._AC_UL320_.jpg",
      "alt": "Air Wick Essential Mist Refill, Essential Oils Diffuser, Lavender and Almond Blossom, 3 ct, Air Freshener, Aroma diffuser",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08S2XV852"
  },
  {
    "name": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Vanilla Passion Fruit, 3.35 Fl Oz, 5 Count",
    "category": "Sustainable Home",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81IJnRqqakL._AC_UL320_.jpg",
      "alt": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Vanilla Passion Fruit, 3.35 Fl Oz, 5 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07TPZ4JSS"
  },
  {
    "name": "DampRid Refillable Moisture Absorber, 11 oz., 6-Pack - Fresh Scent Moisture Absorbers, 10% More Absorbing Power*, Eliminates Musty Odors fo...",
    "category": "Sustainable Home",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81cSkabP0gL._AC_UL320_.jpg",
      "alt": "DampRid Refillable Moisture Absorber, 11 oz., 6-Pack - Fresh Scent Moisture Absorbers, 10% More Absorbing Power*, Eliminates Musty Odors fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09QXT1ZK1"
  },
  {
    "name": "Air Wick Plug In Scented Oil Refill, Infused with Essential Oils, Plug In Air Fresheners for Home, Honeysuckle & Raspberry, 4 ct",
    "category": "Sustainable Home",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81YGfqtKWEL._AC_UL320_.jpg",
      "alt": "Air Wick Plug In Scented Oil Refill, Infused with Essential Oils, Plug In Air Fresheners for Home, Honeysuckle & Raspberry, 4 ct",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FT91H4CN"
  },
  {
    "name": "Febreze Plug In Air Freshener, Odor-Fighting Scented Oil Refill For Home, Bathroom, & Kitchen, Long Lasting, Refresh & Energize and Soothe...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71J23LgBFQL._AC_UL320_.jpg",
      "alt": "Febreze Plug In Air Freshener, Odor-Fighting Scented Oil Refill For Home, Bathroom, & Kitchen, Long Lasting, Refresh & Energize and Soothe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CTD67S44"
  },
  {
    "name": "Safer Home SH503 Trap Refill Pack of Glue Cards for SH502 Indoor Fly Trap, Official Safer Home Refills with StickyTech Glue Card Technology...",
    "category": "Sustainable Home",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71XG3dmPkGL._AC_UL320_.jpg",
      "alt": "Safer Home SH503 Trap Refill Pack of Glue Cards for SH502 Indoor Fly Trap, Official Safer Home Refills with StickyTech Glue Card Technology...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09T3SZ79V"
  },
  {
    "name": "Unoutur Reusable Dry Sweeping Cloths Microfiber Wet Mop Pads Compatible with Swiffer Sweeper Mop Replacement Sweeping Mopping pad Refills f...",
    "category": "Sustainable Home",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81KADKhfJuL._AC_UL320_.jpg",
      "alt": "Unoutur Reusable Dry Sweeping Cloths Microfiber Wet Mop Pads Compatible with Swiffer Sweeper Mop Replacement Sweeping Mopping pad Refills f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLV7VNCG"
  },
  {
    "name": "Fresh Products Eco Air Refill Air Freshener Dry Fragrance Technology Natural Oils No Acetone or Propellants Lasts 30 Days Eco Friendly Powe...",
    "category": "Sustainable Home",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71mbFYAu9JL._AC_UL320_.jpg",
      "alt": "Fresh Products Eco Air Refill Air Freshener Dry Fragrance Technology Natural Oils No Acetone or Propellants Lasts 30 Days Eco Friendly Powe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8K38HFS"
  },
  {
    "name": "Febreze Plug Scent Booster in Black, Continuous Scent Device Oil Diffuser, Compatible with Febreze Air Freshener Plug in Refills - Refills...",
    "category": "Sustainable Home",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71flIqi7xWL._AC_UL320_.jpg",
      "alt": "Febreze Plug Scent Booster in Black, Continuous Scent Device Oil Diffuser, Compatible with Febreze Air Freshener Plug in Refills - Refills...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FKQPSPLG"
  },
  {
    "name": "Enviroscent Non-Toxic Air Freshener Plug Hub® Warmer Refillable Kit - Refillable Plug-in Air Freshener for Home w/Paper Refill - Home Fragr...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712PkOv2gXL._AC_UL320_.jpg",
      "alt": "Enviroscent Non-Toxic Air Freshener Plug Hub® Warmer Refillable Kit - Refillable Plug-in Air Freshener for Home w/Paper Refill - Home Fragr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLVNX1KZ"
  },
  {
    "name": "32 Pack Refill Glue Cards, Saferr Home Fly Trap Refill Compatible with Saferr Home SH502, S23005-06 and Dynatrap DT3005W Dot Indoor Fly Tra...",
    "category": "Sustainable Home",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71BP4EYcajL._AC_UL320_.jpg",
      "alt": "32 Pack Refill Glue Cards, Saferr Home Fly Trap Refill Compatible with Saferr Home SH502, S23005-06 and Dynatrap DT3005W Dot Indoor Fly Tra...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2VVZ3TX"
  },
  {
    "name": "CHOMP! Microfiber Mop Refill Pack: 5 Minute CleanWalls 3-pak Yellow Reusable Washable Wall Washer, Ceiling Cleaner and Baseboard Duster - D...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91Q5H7d8NEL._AC_UL320_.jpg",
      "alt": "CHOMP! Microfiber Mop Refill Pack: 5 Minute CleanWalls 3-pak Yellow Reusable Washable Wall Washer, Ceiling Cleaner and Baseboard Duster - D...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0716LCCJZ"
  },
  {
    "name": "Cocorrína Clean Linen Scented Reed Diffuser Oil with 8 Sticks Fragrance for Bedroom, Bathroom, Oil Diffuser, Home Décor, 6.7 fl oz. (200 ml)",
    "category": "Sustainable Home",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61RF794nmeL._AC_UL320_.jpg",
      "alt": "Cocorrína Clean Linen Scented Reed Diffuser Oil with 8 Sticks Fragrance for Bedroom, Bathroom, Oil Diffuser, Home Décor, 6.7 fl oz. (200 ml)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B9GSGVV7"
  },
  {
    "name": "Febreze Plug in Air Freshener, Odor-Fighting Scented Oil Refill, Air Fresheners for Home and Bathroom and Kitchen, Long Lasting for Strong...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Lm822WaQL._AC_UL320_.jpg",
      "alt": "Febreze Plug in Air Freshener, Odor-Fighting Scented Oil Refill, Air Fresheners for Home and Bathroom and Kitchen, Long Lasting for Strong...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08492LXZP"
  },
  {
    "name": "Swiffer PowerMop Liquid Floor Cleaner Refills, Solution for Power Mop, Fresh Scent, 2 Count Mopping Fluid Replacement Bottle, Spray Mops Cl...",
    "category": "Sustainable Home",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81qKmxfC7eL._AC_UL320_.jpg",
      "alt": "Swiffer PowerMop Liquid Floor Cleaner Refills, Solution for Power Mop, Fresh Scent, 2 Count Mopping Fluid Replacement Bottle, Spray Mops Cl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C1R4C4J1"
  },
  {
    "name": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Exotic Tropical Blossoms, 3.35 Fl Oz, 5 Count",
    "category": "Sustainable Home",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ogpjAhAIL._AC_UL320_.jpg",
      "alt": "Glade PlugIns Refills Air Freshener, Scented and Essential Oils for Home and Bathroom, Exotic Tropical Blossoms, 3.35 Fl Oz, 5 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B083JGWBKX"
  },
  {
    "name": "Airkeep Reed Diffuser Set of 3,Clean Linen Ocean Mist&Sea Salt Lavender Eucalyptus Oil Reed Diffusers for Bedroom Living Room Office Aromat...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for sustainable home shoppers who want less repeat waste, cleaner counters, easier refills, or a swap that does not make life harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Sustainable Home shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Refill House lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Sustainability claims vary by brand; check materials, refill availability, and local disposal rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/819Id3o252L._AC_UL320_.jpg",
      "alt": "Airkeep Reed Diffuser Set of 3,Clean Linen Ocean Mist&Sea Salt Lavender Eucalyptus Oil Reed Diffusers for Bedroom Living Room Office Aromat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DG8G3569"
  }
];

export function getRefillHouseCatalog(
  affiliateTag: string
): ProductCardContent[] {
  return seeds.map((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}
