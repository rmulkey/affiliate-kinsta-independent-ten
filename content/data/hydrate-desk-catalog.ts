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
    "name": "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Denim",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Gvw0-b0eL._AC_UL320_.jpg",
      "alt": "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Denim",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZYCJK89"
  },
  {
    "name": "DYSANKY Insulated Water Bottle | Thickened Stainless Steel Vacuum Metal | Portable Sports Half Gallon Large Water Jug for Gym and Hiking wi...",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71bQt+V4flL._AC_UL320_.jpg",
      "alt": "DYSANKY Insulated Water Bottle | Thickened Stainless Steel Vacuum Metal | Portable Sports Half Gallon Large Water Jug for Gym and Hiking wi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DLCG65B5"
  },
  {
    "name": "17 oz Ceramic Lined Water Bottle, No Metallic Taste Insulated Coffee Travel Mug, Double Wall Vacuum Stainless Steel Tumbler with Leak-Proof...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61q8UwyIXcL._AC_UL320_.jpg",
      "alt": "17 oz Ceramic Lined Water Bottle, No Metallic Taste Insulated Coffee Travel Mug, Double Wall Vacuum Stainless Steel Tumbler with Leak-Proof...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GS5R1SQ3"
  },
  {
    "name": "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Very, Very Dark",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718RbhzhVbL._AC_UL320_.jpg",
      "alt": "Owala FreeSip Insulated Stainless Steel Water Bottle with Straw, BPA-Free Sports Water Bottle, Great for Travel, 24 Oz, Very, Very Dark",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B085DTZQNZ"
  },
  {
    "name": "POWCAN 26 oz Insulated Water Bottle with 2-in-1 Straw and Spout Lid, Keep Cold 24H, Leak-Proof, Fits in Car Cup Holder, Stainless Steel Wat...",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/515ELeeh4OL._AC_UL320_.jpg",
      "alt": "POWCAN 26 oz Insulated Water Bottle with 2-in-1 Straw and Spout Lid, Keep Cold 24H, Leak-Proof, Fits in Car Cup Holder, Stainless Steel Wat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8J2ZB8P"
  },
  {
    "name": "CIVAGO 32 oz Insulated Water Bottle With Straw, Stainless Steel Sports Water Cup Flask with 3 Lids (Straw, Spout and Handle Lid), Wide Mout...",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61XntLH2loL._AC_UL320_.jpg",
      "alt": "CIVAGO 32 oz Insulated Water Bottle With Straw, Stainless Steel Sports Water Cup Flask with 3 Lids (Straw, Spout and Handle Lid), Wide Mout...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09LLZNJYV"
  },
  {
    "name": "12oz Pink Florals Insulated Water Bottle with Straw & Handle – Stainless Steel Kids Bottle for School, Leak-Proof, Double-Wall Vacuum Insul...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51wOHXPpeNL._AC_UL320_.jpg",
      "alt": "12oz Pink Florals Insulated Water Bottle with Straw & Handle – Stainless Steel Kids Bottle for School, Leak-Proof, Double-Wall Vacuum Insul...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GVY64CD7"
  },
  {
    "name": "Half Gallon Water Bottle Insulated with Straw & 3 Lids, Coolflask 64 oz Water Jug Large Metal Stainless Steel Wide Mouth for Sports, Gym or...",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81GSkqiWHzL._AC_UL320_.jpg",
      "alt": "Half Gallon Water Bottle Insulated with Straw & 3 Lids, Coolflask 64 oz Water Jug Large Metal Stainless Steel Wide Mouth for Sports, Gym or...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B091DTM448"
  },
  {
    "name": "POWCAN 26 oz Insulated Water Bottle with 2-in-1 Straw and Spout Lid, Keep Cold 24H, Leak-Proof, Fits in Car Cup Holder, Stainless Steel Wat...",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51rRzUbgDOL._AC_UL320_.jpg",
      "alt": "POWCAN 26 oz Insulated Water Bottle with 2-in-1 Straw and Spout Lid, Keep Cold 24H, Leak-Proof, Fits in Car Cup Holder, Stainless Steel Wat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8J37DHP"
  },
  {
    "name": "Owala FreeSip Sway Insulated Stainless Steel Water Bottle with Two-Way Spout, Built-In Straw and Bucket Handle, Made for Travel, School, an...",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51GiCw2F1RL._AC_UL320_.jpg",
      "alt": "Owala FreeSip Sway Insulated Stainless Steel Water Bottle with Two-Way Spout, Built-In Straw and Bucket Handle, Made for Travel, School, an...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FK1CDVHB"
  },
  {
    "name": "Owala FreeSip Sway Insulated Stainless Steel Water Bottle with Two-Way Spout, Built-In Straw and Bucket Handle, Made for Travel, School, an...",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ezSdimm-L._AC_UL320_.jpg",
      "alt": "Owala FreeSip Sway Insulated Stainless Steel Water Bottle with Two-Way Spout, Built-In Straw and Bucket Handle, Made for Travel, School, an...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJZDV6BH"
  },
  {
    "name": "IRON °FLASK Camping & Hiking Hydration Flask with Straw, Wide Mouth Insulated Stainless Steel Sports Water Bottle - 40 oz Midnight Black",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61HJZ677AgL._AC_UL320_.jpg",
      "alt": "IRON °FLASK Camping & Hiking Hydration Flask with Straw, Wide Mouth Insulated Stainless Steel Sports Water Bottle - 40 oz Midnight Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07N2F3JXP"
  },
  {
    "name": "CamelBak Chute Mag Vacuum Insulated Stainless Steel Water Bottle, Magnetic Leak‑Resistant Cap for Everyday Hydration",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71s1GX6XXvL._AC_UL320_.jpg",
      "alt": "CamelBak Chute Mag Vacuum Insulated Stainless Steel Water Bottle, Magnetic Leak‑Resistant Cap for Everyday Hydration",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07XRXFWD4"
  },
  {
    "name": "Hydro Flask Water Bottle - Insulated Stainless Steel - Non Spill, Leakproof in 24 Oz White",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61xdGYKzurL._AC_UL320_.jpg",
      "alt": "Hydro Flask Water Bottle - Insulated Stainless Steel - Non Spill, Leakproof in 24 Oz White",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01KXHGWQU"
  },
  {
    "name": "RAYMYLO Insulated Water Bottle 40 oz, Triple Wall Vacuum Stainless Steel (Cold for 36Hrs, Hot for 18Hrs), Leak Proof & Non-BPA, Modern Wate...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LfdDBFZNL._AC_UL320_.jpg",
      "alt": "RAYMYLO Insulated Water Bottle 40 oz, Triple Wall Vacuum Stainless Steel (Cold for 36Hrs, Hot for 18Hrs), Leak Proof & Non-BPA, Modern Wate...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CBLY5GWQ"
  },
  {
    "name": "Stanley IceFlow 2.0 Flip Straw Tumbler with Handle 30 oz | Twist On Lid and Flip Up Straw | Leak Resistant Water Bottle | Insulated Stainle...",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61-niRLVOcL._AC_UL320_.jpg",
      "alt": "Stanley IceFlow 2.0 Flip Straw Tumbler with Handle 30 oz | Twist On Lid and Flip Up Straw | Leak Resistant Water Bottle | Insulated Stainle...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DR9PVSC9"
  },
  {
    "name": "HydroJug Traveler - 40 oz Water Bottle with Handle & Flip Straw - Fits in Cup Holder, Leak Resistant Tumbler-Reusable Insulated Stainless S...",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41Dz7KzIs6L._AC_UL320_.jpg",
      "alt": "HydroJug Traveler - 40 oz Water Bottle with Handle & Flip Straw - Fits in Cup Holder, Leak Resistant Tumbler-Reusable Insulated Stainless S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQVWT2NH"
  },
  {
    "name": "YETI Rambler 26 oz Bottle, Vacuum Insulated, Stainless Steel with Chug Cap, Black",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51S0d-FOcbL._AC_UL320_.jpg",
      "alt": "YETI Rambler 26 oz Bottle, Vacuum Insulated, Stainless Steel with Chug Cap, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0842S56G8"
  },
  {
    "name": "Fijinhom 24 oz Insulated Water Bottle with Handle, 304 Stainless Steel Water Bottles with Wide Mouth, Double Wall Vacuum Sports Water Bottl...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61m9TPSjEqL._AC_UL320_.jpg",
      "alt": "Fijinhom 24 oz Insulated Water Bottle with Handle, 304 Stainless Steel Water Bottles with Wide Mouth, Double Wall Vacuum Sports Water Bottl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2W1MKZX"
  },
  {
    "name": "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Mouth Flex Lid, Non Spill, Leakproof and Refillable in 32 Oz White",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61JEB+cGneL._AC_UL320_.jpg",
      "alt": "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Mouth Flex Lid, Non Spill, Leakproof and Refillable in 32 Oz White",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07YXLXX7S"
  },
  {
    "name": "YETI Rambler 36 oz Bottle, Vacuum Insulated, Leakproof, Stainless Steel with Chug Cap | Vacuum Insulated",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61BogStpCRL._AC_UL320_.jpg",
      "alt": "YETI Rambler 36 oz Bottle, Vacuum Insulated, Leakproof, Stainless Steel with Chug Cap | Vacuum Insulated",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0842S75K7"
  },
  {
    "name": "Fanhaw 20 oz Insulated Stainless Steel Water Bottle with Anti-Dust Chug Lid, Leakproof Vacuum Metal Everyday Use Bottle for Kids, Teens & A...",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61gWGWkLAQL._AC_UL320_.jpg",
      "alt": "Fanhaw 20 oz Insulated Stainless Steel Water Bottle with Anti-Dust Chug Lid, Leakproof Vacuum Metal Everyday Use Bottle for Kids, Teens & A...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09RVRLKNT"
  },
  {
    "name": "CamelBak Podium Chill Insulated Bike Squeeze Water Bottle, Cold Retention for Cycling, 24oz, White/Black",
    "category": "Water Bottles",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/613V1KMO+vL._AC_UL320_.jpg",
      "alt": "CamelBak Podium Chill Insulated Bike Squeeze Water Bottle, Cold Retention for Cycling, 24oz, White/Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07HGTSN7X"
  },
  {
    "name": "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Mouth Flex Lid, Non Spill, Leakproof and Refillable in 32 Oz Indigo Blue",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61AxCk7BhlL._AC_UL320_.jpg",
      "alt": "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Mouth Flex Lid, Non Spill, Leakproof and Refillable in 32 Oz Indigo Blue",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09SQQL36M"
  },
  {
    "name": "YETI Rambler 64 oz Bottle, Vacuum Insulated, Leakproof, Stainless Steel with Chug Cap, Black",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61p21aBxx+L._AC_UL320_.jpg",
      "alt": "YETI Rambler 64 oz Bottle, Vacuum Insulated, Leakproof, Stainless Steel with Chug Cap, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B098Z97297"
  },
  {
    "name": "TOURIT 32 oz Insulated Water Bottle, Stainless Steel Water Bottles With Handle, Double-Wall Vacuum Sports Water Bottle, BPA Free Leakproof...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uIjjSa+jL._AC_UL320_.jpg",
      "alt": "TOURIT 32 oz Insulated Water Bottle, Stainless Steel Water Bottles With Handle, Double-Wall Vacuum Sports Water Bottle, BPA Free Leakproof...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FYPNMZTP"
  },
  {
    "name": "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Straw Lid, Non Spill, Leakproof in 32 Oz Indigo Blue",
    "category": "Water Bottles",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/610WOfiDvWL._AC_UL320_.jpg",
      "alt": "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Straw Lid, Non Spill, Leakproof in 32 Oz Indigo Blue",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BG6NFJZ9"
  },
  {
    "name": "STANLEY Quencher H2.0 Tumbler with Handle and Straw 30 oz | Flowstate 3-Position Lid | Cup Holder Compatible for Travel | Insulated Stainle...",
    "category": "Water Bottles",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for water bottles shoppers who want better hydration routines, fewer spills, easier cleaning, or a bottle that fits the bag and the day.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Water Bottles shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hydrate Desk lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check capacity, lid style, cup-holder fit, dishwasher instructions, and whether replacement parts are easy to find.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51-U5dEbEBL._AC_UL320_.jpg",
      "alt": "STANLEY Quencher H2.0 Tumbler with Handle and Straw 30 oz | Flowstate 3-Position Lid | Cup Holder Compatible for Travel | Insulated Stainle...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CP9YB3Q4"
  }
];

export function getHydrateDeskCatalog(
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
