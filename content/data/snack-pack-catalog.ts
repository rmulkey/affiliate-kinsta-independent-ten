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
    "name": "Bento Box Adult Lunch Box, Containers for Adults Men Women with 4 Compartments, Lunchable Food Container with Utensils, Sauce Jar, Muffin L...",
    "category": "Lunch And Snacks",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71GpXNB86HL._AC_UL320_.jpg",
      "alt": "Bento Box Adult Lunch Box, Containers for Adults Men Women with 4 Compartments, Lunchable Food Container with Utensils, Sauce Jar, Muffin L...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C1YZCZYG"
  },
  {
    "name": "buluker 4 Pack Bento Lunch Box Set 3 Compartment Food Storage Containers Wheat Straw Meal Prep Lunch Box Plastic Food Storage Containers, M...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iKdcZkEOL._AC_UL320_.jpg",
      "alt": "buluker 4 Pack Bento Lunch Box Set 3 Compartment Food Storage Containers Wheat Straw Meal Prep Lunch Box Plastic Food Storage Containers, M...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B3MSDKQY"
  },
  {
    "name": "Bentgo Classic - Adult Bento Box, Stackable 3-Compartment Lunch Box with Removable Utensil Set and Sealing Strap, BPA-Free, Food Container...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71fuW8+KfrL._AC_UL320_.jpg",
      "alt": "Bentgo Classic - Adult Bento Box, Stackable 3-Compartment Lunch Box with Removable Utensil Set and Sealing Strap, BPA-Free, Food Container...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B081PQTKSZ"
  },
  {
    "name": "Rubbermaid Brilliance Tritan Plastic Food Storage Containers BPA Free Airtight Lids Ideal for Lunch Meal Prep & Leftovers Set of 5 (3.2 Cup)",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Ap89R-ajL._AC_UL320_.jpg",
      "alt": "Rubbermaid Brilliance Tritan Plastic Food Storage Containers BPA Free Airtight Lids Ideal for Lunch Meal Prep & Leftovers Set of 5 (3.2 Cup)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B079M8FPTW"
  },
  {
    "name": "Sinnsally Bento Box Adult Lunch Box with Compartments for Women & Men,(47oz)Stackable Japanese Bento Lunchbox,Rectangle Lunchable Food Cont...",
    "category": "Lunch And Snacks",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/717xnEUIamL._AC_UL320_.jpg",
      "alt": "Sinnsally Bento Box Adult Lunch Box with Compartments for Women & Men,(47oz)Stackable Japanese Bento Lunchbox,Rectangle Lunchable Food Cont...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BY6LDHPH"
  },
  {
    "name": "KEMETHY Adults Bento Lunch Box Set with Thermo Bag, 74oz Stackable Leak-proof 3-tiers Bento Box, Built-in Utensil and Sauce Container for W...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/8102TsTB1CL._AC_UL320_.jpg",
      "alt": "KEMETHY Adults Bento Lunch Box Set with Thermo Bag, 74oz Stackable Leak-proof 3-tiers Bento Box, Built-in Utensil and Sauce Container for W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F8NHK6K1"
  },
  {
    "name": "Vtopmart 8 Pack Glass Food Storage Containers with Airtight Lids, Glass Meal Prep Containers, Lunch Office Meal for Microwave, Oven, Freeze...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71xlXpdVSUL._AC_UL320_.jpg",
      "alt": "Vtopmart 8 Pack Glass Food Storage Containers with Airtight Lids, Glass Meal Prep Containers, Lunch Office Meal for Microwave, Oven, Freeze...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B9S5HZ26"
  },
  {
    "name": "Dealusy 50 Pack (100-Piece) 24 oz Meal Prep Containers Reusable with Lids, Sturdy Leakproof & Food Safe, Microwave, Freezer, Dishwasher Saf...",
    "category": "Lunch And Snacks",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71oB3+94jBL._AC_UL320_.jpg",
      "alt": "Dealusy 50 Pack (100-Piece) 24 oz Meal Prep Containers Reusable with Lids, Sturdy Leakproof & Food Safe, Microwave, Freezer, Dishwasher Saf...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D3HYC8H1"
  },
  {
    "name": "50 Pack (100-Piece) 32 oz Meal Prep Containers Reusable with Easy Open Lids, Sturdy Leakproof Food Safe, Microwave Freezer Dishwasher Safe,...",
    "category": "Lunch And Snacks",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71j8KwQFGVL._AC_UL320_.jpg",
      "alt": "50 Pack (100-Piece) 32 oz Meal Prep Containers Reusable with Easy Open Lids, Sturdy Leakproof Food Safe, Microwave Freezer Dishwasher Safe,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DK3HY47Z"
  },
  {
    "name": "Rubbermaid Brilliance Meal Prep Containers, 2-Compartment Food Storage Containers, 2.85 Cup, 5-Pack, BPA-Free, Clear/Grey",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81MWNSp7WwL._AC_UL320_.jpg",
      "alt": "Rubbermaid Brilliance Meal Prep Containers, 2-Compartment Food Storage Containers, 2.85 Cup, 5-Pack, BPA-Free, Clear/Grey",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08WR1P45C"
  },
  {
    "name": "Ello 2-Pack Lunch Stack Plastic Food Storage Container Bento Box with Airtight, Leak-Proof Locking Plastic Lids and Silicone Base, BPA-Free...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ePufo2ZBL._AC_UL320_.jpg",
      "alt": "Ello 2-Pack Lunch Stack Plastic Food Storage Container Bento Box with Airtight, Leak-Proof Locking Plastic Lids and Silicone Base, BPA-Free...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CHGHCZLT"
  },
  {
    "name": "Bento Box for Adults,4 Compartments Lunch Box, Snack Containers Reusable Lunch Containers Drop-Proof, Dishwasher Safe & Made with BPA-Free...",
    "category": "Lunch And Snacks",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71lDgCCVHuL._AC_UL320_.jpg",
      "alt": "Bento Box for Adults,4 Compartments Lunch Box, Snack Containers Reusable Lunch Containers Drop-Proof, Dishwasher Safe & Made with BPA-Free...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GSVSHHF6"
  },
  {
    "name": "Bentgo Prep - 20-Piece 1-Compartment Reusable Meal Prep Containers with Lids, PFAS & BPA Free Materials, Durable, Microwave, Freezer, & Dis...",
    "category": "Lunch And Snacks",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81oVaOv3bEL._AC_UL320_.jpg",
      "alt": "Bentgo Prep - 20-Piece 1-Compartment Reusable Meal Prep Containers with Lids, PFAS & BPA Free Materials, Durable, Microwave, Freezer, & Dis...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08CVTY9FS"
  },
  {
    "name": "Rubbermaid Brilliance Glass Food Storage Containers, 3.2 Cup, Set of 4, BPA-Free, Leak-Proof, Clear",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81T0-lmYxPL._AC_UL320_.jpg",
      "alt": "Rubbermaid Brilliance Glass Food Storage Containers, 3.2 Cup, Set of 4, BPA-Free, Leak-Proof, Clear",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08B7GLYZC"
  },
  {
    "name": "Bentgo Salad Container - 54 oz Bowl with 4-Compartment Toppings Tray, Leak-Proof Dressing Container, Reusable Fork, BPA-Free Lunch Box for...",
    "category": "Lunch And Snacks",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71k7mEDHD6L._AC_UL320_.jpg",
      "alt": "Bentgo Salad Container - 54 oz Bowl with 4-Compartment Toppings Tray, Leak-Proof Dressing Container, Reusable Fork, BPA-Free Lunch Box for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B081PK8D3V"
  },
  {
    "name": "Bentgo Classic - Adult Bento Box, Stackable 3-Compartment Lunch Box with Removable Utensil Set and Sealing Strap, BPA-Free, Food Container...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71m8NtVWQ4L._AC_UL320_.jpg",
      "alt": "Bentgo Classic - Adult Bento Box, Stackable 3-Compartment Lunch Box with Removable Utensil Set and Sealing Strap, BPA-Free, Food Container...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B081P4LF73"
  },
  {
    "name": "Mfacoy 3 Pack Bento Boxes for Adults/Kids, 1100 ML Bento Lunch Box With Spoon & Fork, Lunch Box Containers, Bento Box for Dining Out, Work,...",
    "category": "Lunch And Snacks",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71D5Fb16S6L._AC_UL320_.jpg",
      "alt": "Mfacoy 3 Pack Bento Boxes for Adults/Kids, 1100 ML Bento Lunch Box With Spoon & Fork, Lunch Box Containers, Bento Box for Dining Out, Work,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2YD5SDC"
  },
  {
    "name": "EASYFUN Bento Box Adult, Lunch Box, 4-Compartment Lunch Containers, Drop-Proof, Dishwasher Safe & Made with BPA-Free Materials(Khaki)",
    "category": "Lunch And Snacks",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ypLvbXmzL._AC_UL320_.jpg",
      "alt": "EASYFUN Bento Box Adult, Lunch Box, 4-Compartment Lunch Containers, Drop-Proof, Dishwasher Safe & Made with BPA-Free Materials(Khaki)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DXDQSB16"
  },
  {
    "name": "Bento Box Adult Lunch Box - 4 Pack, 5 - Compartment Meal Prep Container for Kids, Reusable Food Storage Snack Containers - Stackable for Sc...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71X9BKBFvCL._AC_UL320_.jpg",
      "alt": "Bento Box Adult Lunch Box - 4 Pack, 5 - Compartment Meal Prep Container for Kids, Reusable Food Storage Snack Containers - Stackable for Sc...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CCJG3J57"
  },
  {
    "name": "TOUWMX Bento Box For Kids, 4 Pack 3 Compartments Meal Prep Containers Reusable Lunch Containers, Food Storage Containers With Lids, Stackab...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/811aeU7ckdL._AC_UL320_.jpg",
      "alt": "TOUWMX Bento Box For Kids, 4 Pack 3 Compartments Meal Prep Containers Reusable Lunch Containers, Food Storage Containers With Lids, Stackab...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CSXH7H46"
  },
  {
    "name": "Adults Bento Box with Insulated Lunch Bag, 74oz Capacity 3 Stackable Leak-Proof Bento Box Built-In Utensil and Sauce, PFAS & BPA-Free, Micr...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81yO3BqHh5L._AC_UL320_.jpg",
      "alt": "Adults Bento Box with Insulated Lunch Bag, 74oz Capacity 3 Stackable Leak-Proof Bento Box Built-In Utensil and Sauce, PFAS & BPA-Free, Micr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FPWXTBZV"
  },
  {
    "name": "[10-Pack] Glass Meal Prep Containers with Lids, MCIRCO Food Storage Containers with Snap Locking Lids, Airtight Lunch Containers, Microwave...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71VKuXwIKOL._AC_UL320_.jpg",
      "alt": "[10-Pack] Glass Meal Prep Containers with Lids, MCIRCO Food Storage Containers with Snap Locking Lids, Airtight Lunch Containers, Microwave...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B081JTZNRS"
  },
  {
    "name": "Vtopmart 5Pack 22oz Glass Storage Containers with Lids, Glass Meal Prep Food Container Sets with Snap Airtight Lids for Microwave, Oven, Fr...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81yZcHBqjaL._AC_UL320_.jpg",
      "alt": "Vtopmart 5Pack 22oz Glass Storage Containers with Lids, Glass Meal Prep Food Container Sets with Snap Airtight Lids for Microwave, Oven, Fr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7P6XKNP"
  },
  {
    "name": "KOMUEE 10 Packs 30 oz Glass Meal Prep Containers,Glass Food Storage Containers with Lids,Airtight Lunch Bento Boxes,Microwave,Freezer and D...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FEUOgXhfS._AC_UL320_.jpg",
      "alt": "KOMUEE 10 Packs 30 oz Glass Meal Prep Containers,Glass Food Storage Containers with Lids,Airtight Lunch Bento Boxes,Microwave,Freezer and D...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08X4615SC"
  },
  {
    "name": "Caperci Large Salad Container Bowl for Lunch - Better Adult Bento Lunch Box 68 oz, 5-Compartment Tray, 2pcs 3-oz Sauce Cups, Stackable, BPA...",
    "category": "Lunch And Snacks",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71IUu7qs+NL._AC_UL320_.jpg",
      "alt": "Caperci Large Salad Container Bowl for Lunch - Better Adult Bento Lunch Box 68 oz, 5-Compartment Tray, 2pcs 3-oz Sauce Cups, Stackable, BPA...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B247R9XB"
  },
  {
    "name": "C CREST [10 Pack] Glass Meal Prep Containers, Food Storage Containers with Lids Airtight, Glass Lunch Boxes, Microwave, Oven, Freezer and D...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81HfSfzlqUL._AC_UL320_.jpg",
      "alt": "C CREST [10 Pack] Glass Meal Prep Containers, Food Storage Containers with Lids Airtight, Glass Lunch Boxes, Microwave, Oven, Freezer and D...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07R8BQD66"
  },
  {
    "name": "M MCIRCO [8-Pack,30 oz] Glass Meal Prep Containers,Glass Food Storage Containers,Airtight lunch Containers with Lids, Microwave, Oven, Free...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713Zfdsgi4L._AC_UL320_.jpg",
      "alt": "M MCIRCO [8-Pack,30 oz] Glass Meal Prep Containers,Glass Food Storage Containers,Airtight lunch Containers with Lids, Microwave, Oven, Free...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07Q498XSZ"
  },
  {
    "name": "50-Pack Reusable Meal Prep Containers Microwave Safe Food Storage Containers with Lids, 28 oz - 1 Compartment Take Out Disposable Plastic B...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for lunch and snacks shoppers who want cleaner packing, fewer leaks, easier portions, or lunch gear that actually fits the bag.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Lunch And Snacks shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Snack Pack lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dishwasher, microwave, freezer, leakproof, and age-suitability details before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/815JjiBlrBL._AC_UL320_.jpg",
      "alt": "50-Pack Reusable Meal Prep Containers Microwave Safe Food Storage Containers with Lids, 28 oz - 1 Compartment Take Out Disposable Plastic B...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B079M174TQ"
  }
];

export function getSnackPackCatalog(
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
