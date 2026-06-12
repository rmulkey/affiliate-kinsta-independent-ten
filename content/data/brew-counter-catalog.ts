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
    "name": "Mini Manual Coffee Grinder with 40 Adjustable Settings, Portable Hand Coffee Bean Mill with 30g Capacity, Conical Burr Coffee Grinder with...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71sC269K6YL._AC_UL320_.jpg",
      "alt": "Mini Manual Coffee Grinder with 40 Adjustable Settings, Portable Hand Coffee Bean Mill with 30g Capacity, Conical Burr Coffee Grinder with...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DMZL1K3G"
  },
  {
    "name": "AeroPress Original Coffee Press - All-in-One French Press, Pour-Over & Espresso Style Manual Brewer, 2 Min Brew for Less Bitterness, More F...",
    "category": "Gear",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61u3sW4Vx4L._AC_UL320_.jpg",
      "alt": "AeroPress Original Coffee Press - All-in-One French Press, Pour-Over & Espresso Style Manual Brewer, 2 Min Brew for Less Bitterness, More F...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0047BIWSK"
  },
  {
    "name": "Bodum 34oz Pour Over Coffee Maker, High-Heat Borosilicate Glass with Reusable Stainless Steel Filter and Cork Grip - Made in Portugal",
    "category": "Gear",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ShLwhRkML._AC_UL320_.jpg",
      "alt": "Bodum 34oz Pour Over Coffee Maker, High-Heat Borosilicate Glass with Reusable Stainless Steel Filter and Cork Grip - Made in Portugal",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07KQVW6RR"
  },
  {
    "name": "STANLEY Perfect Brew Pour Over Set | 12 oz Camp Mug with Lid Included | Drip Coffee Maker with Reusable Filter | Insulated Stainless Steel...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51NWe6e1hsL._AC_UL320_.jpg",
      "alt": "STANLEY Perfect Brew Pour Over Set | 12 oz Camp Mug with Lid Included | Drip Coffee Maker with Reusable Filter | Insulated Stainless Steel...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BY3SXZ56"
  },
  {
    "name": "Veken Coffee Canister with Window,Airtight Stainless Steel Pantry Container,Kitchen Food Storage Organizers for Beans,Ground,Espresso,Rice,...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71JsCC8nqaL._AC_UL320_.jpg",
      "alt": "Veken Coffee Canister with Window,Airtight Stainless Steel Pantry Container,Kitchen Food Storage Organizers for Beans,Ground,Espresso,Rice,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CWH57Q9F"
  },
  {
    "name": "Ceramic Coffee Bean Dosing Cup + Sprayer Gift Set, Spoon Rest, Mini Coffee Spoon Holder for Tea Spoons Stirrers, Coffee Station Decor, Espr...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61jL7XEXObL._AC_UL320_.jpg",
      "alt": "Ceramic Coffee Bean Dosing Cup + Sprayer Gift Set, Spoon Rest, Mini Coffee Spoon Holder for Tea Spoons Stirrers, Coffee Station Decor, Espr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FHFLQCP6"
  },
  {
    "name": "OXO Brew Rapid Brewer",
    "category": "Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Akip44kaL._AC_UL320_.jpg",
      "alt": "OXO Brew Rapid Brewer",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DC8JYJQX"
  },
  {
    "name": "Amrules Milk Frothing Pitcher, 12oz Milk Frother Cup with Clear Scale, 304 Stainless Steel Cappuccino Espresso Machine Accessories for Bari...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61OZRRKTdcL._AC_UL320_.jpg",
      "alt": "Amrules Milk Frothing Pitcher, 12oz Milk Frother Cup with Clear Scale, 304 Stainless Steel Cappuccino Espresso Machine Accessories for Bari...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CJM76VFY"
  },
  {
    "name": "OXO Brew Conical Burr Coffee Grinder - Silver, Stainless Steel Burrs, One-Touch Automatic Smart Grind",
    "category": "Coffee",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71DeUg8G7kS._AC_UL320_.jpg",
      "alt": "OXO Brew Conical Burr Coffee Grinder - Silver, Stainless Steel Burrs, One-Touch Automatic Smart Grind",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07CSKGLMM"
  },
  {
    "name": "Cold Brew Coffee Maker,64 oz Mason Jar Pitcher with Stainless Steel Filter, Pour Spout Handle Lid, Heavy Duty Glass Airtight & Leak-Proof f...",
    "category": "Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81pX9Dz162L._AC_UL320_.jpg",
      "alt": "Cold Brew Coffee Maker,64 oz Mason Jar Pitcher with Stainless Steel Filter, Pour Spout Handle Lid, Heavy Duty Glass Airtight & Leak-Proof f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGWS1M51"
  },
  {
    "name": "YETI Rambler 14 oz Ceramic Lined Stackable Mug, Vacuum Insulated, Stainless Steel with MagSlider Lid, Navy",
    "category": "Coffee",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51mIEuCCs2L._AC_UL320_.jpg",
      "alt": "YETI Rambler 14 oz Ceramic Lined Stackable Mug, Vacuum Insulated, Stainless Steel with MagSlider Lid, Navy",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FDXYKKCN"
  },
  {
    "name": "Coffee Bean Dosing Cup & RDT Spray Bottle Set - Walnut Wood Espresso Accessories Kit with Static Reduction Spray, Measuring Tray for Coffee...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61u8hzE9OYL._AC_UL320_.jpg",
      "alt": "Coffee Bean Dosing Cup & RDT Spray Bottle Set - Walnut Wood Espresso Accessories Kit with Static Reduction Spray, Measuring Tray for Coffee...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F5PZQWBD"
  },
  {
    "name": "Greater Goods Coffee Scale with Timer – 0.1g Precision Digital Coffee & Espresso Scale for Pour-Over, Coffee Bean Weighing, Barista Brewing...",
    "category": "Coffee",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-L+FLDJYL._AC_UL320_.jpg",
      "alt": "Greater Goods Coffee Scale with Timer – 0.1g Precision Digital Coffee & Espresso Scale for Pour-Over, Coffee Bean Weighing, Barista Brewing...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09B4CB7C1"
  },
  {
    "name": "Utopia Kitchen 304 Grade Stainless Steel French Press Coffee Maker 34 Oz, Double Wall Insulated Coffee Press with 4-Level Filtration System...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/817MkkxdLoL._AC_UL320_.jpg",
      "alt": "Utopia Kitchen 304 Grade Stainless Steel French Press Coffee Maker 34 Oz, Double Wall Insulated Coffee Press with 4-Level Filtration System...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01G2CCWGY"
  },
  {
    "name": "YETI Pour Over Coffee Maker Accessory Ramblers, Designed for Perfect Coffee Extraction Anywhere, Stainless Steel, fits any V60 Filter, Navy",
    "category": "Gear",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41KDsn-es4L._AC_UL320_.jpg",
      "alt": "YETI Pour Over Coffee Maker Accessory Ramblers, Designed for Perfect Coffee Extraction Anywhere, Stainless Steel, fits any V60 Filter, Navy",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DS6LPYBK"
  },
  {
    "name": "Veken French Press Coffee Maker 34oz, No Plastic Touching Cafe,Thickened Glass Stainless Steel Brewer, Cold Brew Cafetera Tea pot for Kitch...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71tCTtEUMaL._AC_UL320_.jpg",
      "alt": "Veken French Press Coffee Maker 34oz, No Plastic Touching Cafe,Thickened Glass Stainless Steel Brewer, Cold Brew Cafetera Tea pot for Kitch...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FDQJFRYS"
  },
  {
    "name": "Attsky Collapsible Pour Over Coffee Dripper for Camp Coffee, Reusable Silicone Coffee Filter Holder for Camping Red",
    "category": "Coffee",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61tFprph7uL._AC_UL320_.jpg",
      "alt": "Attsky Collapsible Pour Over Coffee Dripper for Camp Coffee, Reusable Silicone Coffee Filter Holder for Camping Red",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09FHPRCDW"
  },
  {
    "name": "Artizan Coffee Gear - Specialty Coffee Association (SCA) Professional Coffee Cupping Spoon - Stainless Steel (4 Spoons)",
    "category": "Coffee",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/815FW83R9AL._AC_UL320_.jpg",
      "alt": "Artizan Coffee Gear - Specialty Coffee Association (SCA) Professional Coffee Cupping Spoon - Stainless Steel (4 Spoons)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07VFYC3J8"
  },
  {
    "name": "Rhino Coffee Gear - Double Spouted Shot Glass",
    "category": "Coffee",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41fVD4lQQML._AC_UL320_.jpg",
      "alt": "Rhino Coffee Gear - Double Spouted Shot Glass",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01FAV4DJM"
  },
  {
    "name": "Milk Frothing Pitcher 350ml/600ml/900ml/1500ml (12oz/20oz/32oz/50oz) Steaming Pitchers Stainless Steel Milk/Coffee/Cappuccino/Latte Art Bar...",
    "category": "Coffee",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61qpJ7dCyHL._AC_UL320_.jpg",
      "alt": "Milk Frothing Pitcher 350ml/600ml/900ml/1500ml (12oz/20oz/32oz/50oz) Steaming Pitchers Stainless Steel Milk/Coffee/Cappuccino/Latte Art Bar...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07KFYXTRR"
  },
  {
    "name": "COLETTI Bozeman Percolator Coffee Pot — NO Aluminum or Plastic [9 cup]",
    "category": "Coffee",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FYVaSTiLL._AC_UL320_.jpg",
      "alt": "COLETTI Bozeman Percolator Coffee Pot — NO Aluminum or Plastic [9 cup]",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01HZYPQVG"
  },
  {
    "name": "STANLEY Coffee Percolator, Wide Mouth Coffee Press, Large Capacity, Ergonomic Handle, Dishwasher Safe",
    "category": "Coffee",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71S0uage89L._AC_UL320_.jpg",
      "alt": "STANLEY Coffee Percolator, Wide Mouth Coffee Press, Large Capacity, Ergonomic Handle, Dishwasher Safe",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B52MQMMQ"
  },
  {
    "name": "Pour Over Coffee Dripper, Stainless Steel Coffee Filter, Paperless Reusable Coffee Filter, Double Micromesh 600 Mesh Strainer Coffee Maker...",
    "category": "Gear",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71EdOtD1QfL._AC_UL320_.jpg",
      "alt": "Pour Over Coffee Dripper, Stainless Steel Coffee Filter, Paperless Reusable Coffee Filter, Double Micromesh 600 Mesh Strainer Coffee Maker...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0G437ZF7W"
  },
  {
    "name": "Perfect Pod EZ-Scoop Coffee Scooper & Funnel for Reusable K Cup Refillable Coffee Pods, 2 Tablespoon Capacity Black",
    "category": "Coffee",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61zywxK1fJL._AC_UL320_.jpg",
      "alt": "Perfect Pod EZ-Scoop Coffee Scooper & Funnel for Reusable K Cup Refillable Coffee Pods, 2 Tablespoon Capacity Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B099CQ4M7V"
  },
  {
    "name": "Subminimal Subscale Digital Dosing Cup with LED Display – Sleek & Precise Scale - Dosing & Brewing Accessories, Measures Coffee Grounds for...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71UPFUovYkL._AC_UL320_.jpg",
      "alt": "Subminimal Subscale Digital Dosing Cup with LED Display – Sleek & Precise Scale - Dosing & Brewing Accessories, Measures Coffee Grounds for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DGLWFX7Q"
  },
  {
    "name": "Chemex Pour-Over Glass Coffeemaker - Classic Series - 8-Cup - Exclusive Packaging",
    "category": "Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51rEZwQAmqL._AC_UL320_.jpg",
      "alt": "Chemex Pour-Over Glass Coffeemaker - Classic Series - 8-Cup - Exclusive Packaging",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000I1WP7W"
  },
  {
    "name": "STANLEY Stay-Hot Stacking Camp Cup | Press In Drink Through Lid | Cup for Coffee, Tea and Drinks | Insulated Stainless Steel Coffee Mug | B...",
    "category": "Coffee",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61mMo6A-d0L._AC_UL320_.jpg",
      "alt": "STANLEY Stay-Hot Stacking Camp Cup | Press In Drink Through Lid | Cup for Coffee, Tea and Drinks | Insulated Stainless Steel Coffee Mug | B...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZC6M49S"
  },
  {
    "name": "Roogaluckeep Pour over Coffee Dripper, Stainless Steel Paperless Reusable Coffee Filter, Metal 600 Mesh Strainer Coffee Ma...",
    "category": "Coffee",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for coffee shoppers who want better coffee flow, easier prep, cleaner storage, or a nicer counter ritual.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Coffee shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Brew Counter lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match gear to how you actually brew: drip, espresso, cold brew, pour-over, or capsule.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qsb4DCsEL._AC_UL320_.jpg",
      "alt": "Roogaluckeep Pour over Coffee Dripper, Stainless Steel Paperless Reusable Coffee Filter, Metal 600 Mesh Strainer Coffee Ma...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FKG2N7G8"
  }
];

export function getBrewCounterCatalog(
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
