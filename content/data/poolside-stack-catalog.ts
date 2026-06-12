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
    "name": "Mowend Swimming Pool Skimmer Net Total Length 57 inches, Leaf Rake Net with 4 Section Telescopic Aluminum Pole for Fast Cleaning Ponds, Hot...",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/6114z-OPqpL._AC_UL320_.jpg",
      "alt": "Mowend Swimming Pool Skimmer Net Total Length 57 inches, Leaf Rake Net with 4 Section Telescopic Aluminum Pole for Fast Cleaning Ponds, Hot...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09P4WD862"
  },
  {
    "name": "Swimming Pool Ladder Mat - Protective Pool Ladder Pad Step Mat with Non-Slip Texture, Blue Medium Pool Step Mat, 36 inch X 9 inch",
    "category": "Pool And Beach",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ZQaqOJQTL._AC_UL320_.jpg",
      "alt": "Swimming Pool Ladder Mat - Protective Pool Ladder Pad Step Mat with Non-Slip Texture, Blue Medium Pool Step Mat, 36 inch X 9 inch",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B099VZJ25P"
  },
  {
    "name": "BITIWEND Solar Pool Lights for Framed Above Ground Pools, Waterproof Swimming Pool Accessories Lights, for Outdoor Pool Yard Garden Decorat...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71pfZRFtsAL._AC_UL320_.jpg",
      "alt": "BITIWEND Solar Pool Lights for Framed Above Ground Pools, Waterproof Swimming Pool Accessories Lights, for Outdoor Pool Yard Garden Decorat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0G3WQBMLL"
  },
  {
    "name": "4 Pack Inflatable Pool Floats, OKSUWATER 4-in-1 Water Hammock, Pool Floats Adult Size for Swimming Pool Party Summer Lake Water Fun",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Kk-xDIdeL._AC_UL320_.jpg",
      "alt": "4 Pack Inflatable Pool Floats, OKSUWATER 4-in-1 Water Hammock, Pool Floats Adult Size for Swimming Pool Party Summer Lake Water Fun",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSPWPH4C"
  },
  {
    "name": "Pool Fountain for Above and In-Ground Pools, Adjustable Dual Spray Waterfall Sprinkler Cooler for Pool, Swimming Pool Spa Water Fountain, H...",
    "category": "Pool And Beach",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91tnjf+rlvL._AC_UL320_.jpg",
      "alt": "Pool Fountain for Above and In-Ground Pools, Adjustable Dual Spray Waterfall Sprinkler Cooler for Pool, Swimming Pool Spa Water Fountain, H...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BX965YWC"
  },
  {
    "name": "Pool Foot Bath, Inflatable Pool Foot Wash Tray for Pool Entry Ladder, Portable Foot Bath Basin for In Ground and Above Ground Swimming Pools",
    "category": "Pool And Beach",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71op8F598wL._AC_UL320_.jpg",
      "alt": "Pool Foot Bath, Inflatable Pool Foot Wash Tray for Pool Entry Ladder, Portable Foot Bath Basin for In Ground and Above Ground Swimming Pools",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D12CZ491"
  },
  {
    "name": "Hoyle Waterproof Playing Cards, Clear Plastic Deck of Cards for Outdoor Card Games, Camping, Beach, Pool & Travel Games (1 Deck)",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81JkEmp-ZCL._AC_UL320_.jpg",
      "alt": "Hoyle Waterproof Playing Cards, Clear Plastic Deck of Cards for Outdoor Card Games, Camping, Beach, Pool & Travel Games (1 Deck)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000J3Z7TC"
  },
  {
    "name": "XY-WQ Floating Pool Thermometer, Large Size Easy Read for Water Temperature with String - Swimming Pools, Spas, Hot Tubs, Ponds (Turtle)",
    "category": "Pool And Beach",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/616qH2-1VfL._AC_UL320_.jpg",
      "alt": "XY-WQ Floating Pool Thermometer, Large Size Easy Read for Water Temperature with String - Swimming Pools, Spas, Hot Tubs, Ponds (Turtle)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CRB7H6YN"
  },
  {
    "name": "SLOOSH Inflatable Pool Floats Adult,2 Packs Floating Lounge Chairs,Blow up Pool Noodles for Adult Heavy Duty,Floating Chair for Party Summe...",
    "category": "Pool And Beach",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91bpiQBEqyL._AC_UL320_.jpg",
      "alt": "SLOOSH Inflatable Pool Floats Adult,2 Packs Floating Lounge Chairs,Blow up Pool Noodles for Adult Heavy Duty,Floating Chair for Party Summe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BKTLNSLG"
  },
  {
    "name": "VICHTOP 2026 Upgrade 2 Sets Poolside Storage Basket, Above Ground Pool Accessories, Swimming Pool Storage Basket with Cup Holder, Mesh Bag...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81OSYUgRzhL._AC_UL320_.jpg",
      "alt": "VICHTOP 2026 Upgrade 2 Sets Poolside Storage Basket, Above Ground Pool Accessories, Swimming Pool Storage Basket with Cup Holder, Mesh Bag...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GRGH75N3"
  },
  {
    "name": "Pool Chlorine Floater for Pools Fits 3\" Tablets,7\" Diameter Chlorine Tablet Floater with Adjustable Flow Vents Balanced Chemical Dispenser...",
    "category": "Pool And Beach",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61S9-L5sC1L._AC_UL320_.jpg",
      "alt": "Pool Chlorine Floater for Pools Fits 3\" Tablets,7\" Diameter Chlorine Tablet Floater with Adjustable Flow Vents Balanced Chemical Dispenser...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DRG6JSSB"
  },
  {
    "name": "Utopia Towels Pack of 4 Cabana Beach Towels, Oversized 30 x 60 Inches Cotton Beach Towel Set, Smooth Ring Spun Texture for Pool and Swim Da...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91MXVlmrtOL._AC_UL320_.jpg",
      "alt": "Utopia Towels Pack of 4 Cabana Beach Towels, Oversized 30 x 60 Inches Cotton Beach Towel Set, Smooth Ring Spun Texture for Pool and Swim Da...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00AA4H9BE"
  },
  {
    "name": "LanPool Floating Water Fountain with Underwater Lights, Powered Pump Outdoor, 2 Modes Sprinkler Waterfall Fountain for Inground Above Groun...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/811kF8iF73L._AC_UL320_.jpg",
      "alt": "LanPool Floating Water Fountain with Underwater Lights, Powered Pump Outdoor, 2 Modes Sprinkler Waterfall Fountain for Inground Above Groun...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BPLWBY2M"
  },
  {
    "name": "Solar Pool Lights for Inground & Above Ground Pool, 10-Color 4-Mode LED Pool Lights, Underwater Swimming Pool Lights with Timer, Submersibl...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81+KNrJ-ilL._AC_UL320_.jpg",
      "alt": "Solar Pool Lights for Inground & Above Ground Pool, 10-Color 4-Mode LED Pool Lights, Underwater Swimming Pool Lights with Timer, Submersibl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GHQWR7BD"
  },
  {
    "name": "Large Beach Towel Clips for Beach Chairs, 8 Pcs Towel Holder for Beach Chair Pool Chair on Cruise, Jumbo Size Heavy Duty Clothes Pins, Beac...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61xKr0b17uL._AC_UL320_.jpg",
      "alt": "Large Beach Towel Clips for Beach Chairs, 8 Pcs Towel Holder for Beach Chair Pool Chair on Cruise, Jumbo Size Heavy Duty Clothes Pins, Beac...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D16ZX14Y"
  },
  {
    "name": "PoolRX+ pool unit 7.5k-20k gallons",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51Chco5gK2L._AC_UL320_.jpg",
      "alt": "PoolRX+ pool unit 7.5k-20k gallons",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09FWQ8QCH"
  },
  {
    "name": "SoCozy Swim Leave In Conditioner Spray & Treatment for Kids Hair (8 Fl Oz) Protects & Repairs Pool, Sun & Salt Damaged Hair, Gentle Formula...",
    "category": "Pool And Beach",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ml9ewe8WL._AC_UL320_.jpg",
      "alt": "SoCozy Swim Leave In Conditioner Spray & Treatment for Kids Hair (8 Fl Oz) Protects & Repairs Pool, Sun & Salt Damaged Hair, Gentle Formula...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01F9BNC90"
  },
  {
    "name": "Betta SE Solar Powered Automatic Robotic Pool Surface Skimmer Cleaner with 24/7 Continuous Cleaning Battery Power and Re-Engineered Twin Sa...",
    "category": "Pool And Beach",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51BsvbSYEuL._AC_UL320_.jpg",
      "alt": "Betta SE Solar Powered Automatic Robotic Pool Surface Skimmer Cleaner with 24/7 Continuous Cleaning Battery Power and Re-Engineered Twin Sa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BW38MP5C"
  },
  {
    "name": "AquaJoyer 2 Sets of Poolside Storage Baskets with Cup Holders - Perfect for 3-Inch or Smaller Top Rails - Above Ground Pool Accessories - F...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81OjvQPoaiL._AC_UL320_.jpg",
      "alt": "AquaJoyer 2 Sets of Poolside Storage Baskets with Cup Holders - Perfect for 3-Inch or Smaller Top Rails - Above Ground Pool Accessories - F...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CYCHN8VN"
  },
  {
    "name": "2 PCS Swimming Pool Pipe Holders, Above Ground Pool Accessories with Hose Support - Pool Hose Holder Prevents Pipe Sagging, Universal Pool...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FPWK5JUrL._AC_UL320_.jpg",
      "alt": "2 PCS Swimming Pool Pipe Holders, Above Ground Pool Accessories with Hose Support - Pool Hose Holder Prevents Pipe Sagging, Universal Pool...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GF6JDZVY"
  },
  {
    "name": "Yozoluck Pool Towel Rack Outdoor, 6 Bars Metal Heavy Duty Never Tilt Pool Accessories with Heavy Metal Base, Hot Tub Accessories Towel Dyin...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71bXuCEq2KL._AC_UL320_.jpg",
      "alt": "Yozoluck Pool Towel Rack Outdoor, 6 Bars Metal Heavy Duty Never Tilt Pool Accessories with Heavy Metal Base, Hot Tub Accessories Towel Dyin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CKRS5PG2"
  },
  {
    "name": "EASYTEST 7-Way Pool Test Strips, 150 Strips Water Chemical Testing for Hot tub and Spa, Accurate Test Bromine, Total Alkalinity, pH, Free C...",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Wg2gRD-5L._AC_UL320_.jpg",
      "alt": "EASYTEST 7-Way Pool Test Strips, 150 Strips Water Chemical Testing for Hot tub and Spa, Accurate Test Bromine, Total Alkalinity, pH, Free C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09MSY8BLB"
  },
  {
    "name": "POOLWHALE Professional Pool Skimmer Net, Heavy Duty Swimming Leaf Rake Cleaning Tool with Deep Fine Nylon Mesh Net Bag - Fast Cleaning,Easy...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51g1TifevML._AC_UL320_.jpg",
      "alt": "POOLWHALE Professional Pool Skimmer Net, Heavy Duty Swimming Leaf Rake Cleaning Tool with Deep Fine Nylon Mesh Net Bag - Fast Cleaning,Easy...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08NPRYKH4"
  },
  {
    "name": "ETENWOLF AIR 3 Air Pump for Inflatables with 2600 mAh Battery & Camping Light, Ultra-Fast and Mini Electric Air Pump, Inflate Deflate for A...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Z0pNIHeqL._AC_UL320_.jpg",
      "alt": "ETENWOLF AIR 3 Air Pump for Inflatables with 2600 mAh Battery & Camping Light, Ultra-Fast and Mini Electric Air Pump, Inflate Deflate for A...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CL8ZVM3R"
  },
  {
    "name": "Clorox Pool&Spa XTRABLUE 3” Chlorinating Tablets, Individually Wrapped, Kills Bacteria & Stops Algae (5 LB)",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kF85NiWWL._AC_UL320_.jpg",
      "alt": "Clorox Pool&Spa XTRABLUE 3” Chlorinating Tablets, Individually Wrapped, Kills Bacteria & Stops Algae (5 LB)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00PZZFG0O"
  },
  {
    "name": "GoSports Splash Hoop PRO - Choose Your Color - Swimming Pool Basketball Game, Includes Poolside Water Basketball Hoop, 2 Balls and Pump",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ssFqrVptL._AC_UL320_.jpg",
      "alt": "GoSports Splash Hoop PRO - Choose Your Color - Swimming Pool Basketball Game, Includes Poolside Water Basketball Hoop, 2 Balls and Pump",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0812LQ8GW"
  },
  {
    "name": "TempPro Waterproof Wireless Pool Thermometer Easy Read, Digital Pool Thermometer Floating for Swimming Pool, Hot Tub, Cold Plunge, Pond, Up...",
    "category": "Pool And Beach",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71VuxHap6CL._AC_UL320_.jpg",
      "alt": "TempPro Waterproof Wireless Pool Thermometer Easy Read, Digital Pool Thermometer Floating for Swimming Pool, Hot Tub, Cold Plunge, Pond, Up...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F82YHBYQ"
  },
  {
    "name": "ARM & Hammer Clear Balance, One Step Alkalinity & pH Maintenance Tablets for Swimming Pools & Spa, Long-Lasting Water Balancer, 24 Count",
    "category": "Pool And Beach",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for pool and beach shoppers who want better shade, easier carrying, cleaner drying, or more fun without a trunk full of chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pool And Beach shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Poolside Stack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Water products need supervision, sizing checks, and common-sense safety. No float or toy is a safety device.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81kUkYBG2JL._AC_UL320_.jpg",
      "alt": "ARM & Hammer Clear Balance, One Step Alkalinity & pH Maintenance Tablets for Swimming Pools & Spa, Long-Lasting Water Balancer, 24 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CBT4TGFW"
  }
];

export function getPoolsideStackCatalog(
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
