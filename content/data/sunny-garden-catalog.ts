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
    "name": "Heavy Duty Gardening Tools - Gardening Gifts for Women, Men, Mom, Dad - Durable, Ergonomic Garden Tools Set (Green)",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81fFCeay55L._AC_UL320_.jpg",
      "alt": "Heavy Duty Gardening Tools - Gardening Gifts for Women, Men, Mom, Dad - Durable, Ergonomic Garden Tools Set (Green)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BW8X2XND"
  },
  {
    "name": "Garden Tools Set, 8 Piece Gardening Tools Set with Non Slip Ergonomic Handle, Heavy Duty Garden Tool Set with Storage Bag, Gardening Kit fo...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71OQZ-AkZYL._AC_UL320_.jpg",
      "alt": "Garden Tools Set, 8 Piece Gardening Tools Set with Non Slip Ergonomic Handle, Heavy Duty Garden Tool Set with Storage Bag, Gardening Kit fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DY1FLC1R"
  },
  {
    "name": "9-Piece Stainless Steel Garden Tools Set, HaSteeL Outdoors Gardening Hand Utensils Kit with Storage Bag, Rust Resistant, Heavy Duty, Gift f...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81AKMF3t+gL._AC_UL320_.jpg",
      "alt": "9-Piece Stainless Steel Garden Tools Set, HaSteeL Outdoors Gardening Hand Utensils Kit with Storage Bag, Rust Resistant, Heavy Duty, Gift f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GVJHR966"
  },
  {
    "name": "Garden Tools Set, 3 Pack Heavy Duty Gardening Tools Set Include Garden Shovel, Transplant Trowel and Hand Rake with Ergonomic Handle, Alumi...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/618WM4MT8gL._AC_UL320_.jpg",
      "alt": "Garden Tools Set, 3 Pack Heavy Duty Gardening Tools Set Include Garden Shovel, Transplant Trowel and Hand Rake with Ergonomic Handle, Alumi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGHGQ96X"
  },
  {
    "name": "Kynup 7-Piece Gardening Tools Set, Heavy Duty Garden Tools Kit with Garden Trowel, Garden Hand Shovel, Repotting Mat, Rust Resistant, Garde...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71P3Pke7ubL._AC_UL320_.jpg",
      "alt": "Kynup 7-Piece Gardening Tools Set, Heavy Duty Garden Tools Kit with Garden Trowel, Garden Hand Shovel, Repotting Mat, Rust Resistant, Garde...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4DX9KXW"
  },
  {
    "name": "Grenebo Gardening Tools 9-Piece Heavy Duty Garden Hand Tools with Fashion and Durable Garden Tools Organizer Handbag, Rust-Proof Garden Too...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81hk0PGpklL._AC_UL320_.jpg",
      "alt": "Grenebo Gardening Tools 9-Piece Heavy Duty Garden Hand Tools with Fashion and Durable Garden Tools Organizer Handbag, Rust-Proof Garden Too...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09F9C3KFS"
  },
  {
    "name": "GIAMZONP Long Gardening Gloves for Women Men - Leather Rose Pruning Gloves Thorn Proof",
    "category": "Gardening",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71tNkHfZJBL._AC_UL320_.jpg",
      "alt": "GIAMZONP Long Gardening Gloves for Women Men - Leather Rose Pruning Gloves Thorn Proof",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GQH3KNBD"
  },
  {
    "name": "Fiskars Bypass Pruning Shears, 5/8\" Cut Capacity Gardening Scissors, Self-Cleaning Sap Groove Prevents Sticking, Non-Slip Grip for Cutting...",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712oOsznuxL._AC_UL320_.jpg",
      "alt": "Fiskars Bypass Pruning Shears, 5/8\" Cut Capacity Gardening Scissors, Self-Cleaning Sap Groove Prevents Sticking, Non-Slip Grip for Cutting...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00002N66H"
  },
  {
    "name": "Fiskars 3-in-1 Garden Tool Set, Polished Cast-Aluminum Heads for Rust Resistance, Heavy-Duty Trowel, Transplanter & Cultivator for Digging...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71PleuJ7lyL._AC_UL320_.jpg",
      "alt": "Fiskars 3-in-1 Garden Tool Set, Polished Cast-Aluminum Heads for Rust Resistance, Heavy-Duty Trowel, Transplanter & Cultivator for Digging...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01MUXL5V8"
  },
  {
    "name": "Grampa&#x27;s Weeder - The Original Stand Up Weed Puller Tool with Long Handle - Made with Real Bamboo & 4-Claw Steel Head Design - Easily...",
    "category": "Gardening",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718DYJIqv4L._AC_UL320_.jpg",
      "alt": "Grampa&#x27;s Weeder - The Original Stand Up Weed Puller Tool with Long Handle - Made with Real Bamboo & 4-Claw Steel Head Design - Easily...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B001D1FFZA"
  },
  {
    "name": "MelonArt Garden Tool Set,10 Pcs Heavy Duty Gardening Hand Tool Kit for Women Aluminum with Non Slip Ergonomic Handle, Storage Tote Bag and...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-FnrK+YLL._AC_UL320_.jpg",
      "alt": "MelonArt Garden Tool Set,10 Pcs Heavy Duty Gardening Hand Tool Kit for Women Aluminum with Non Slip Ergonomic Handle, Storage Tote Bag and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D41TPDL9"
  },
  {
    "name": "2-in-1 Garden Hoe and Weed Puller Rake, 60 Inch Adjustable Long Handle Weeding Tool Heavy Duty Spring Steel Head with Sand Texture Finish,...",
    "category": "Gardening",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61rSVYQH6yL._AC_UL320_.jpg",
      "alt": "2-in-1 Garden Hoe and Weed Puller Rake, 60 Inch Adjustable Long Handle Weeding Tool Heavy Duty Spring Steel Head with Sand Texture Finish,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FL7MKZ4V"
  },
  {
    "name": "SIXCAR Weed Remover Tool,Portable Garden Weeder Tool,New Gardening Weeding Tools,for Garden Hand Tools for Vegetable Gardening Backyard Far...",
    "category": "Gardening",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Cpg9ixg5L._AC_UL320_.jpg",
      "alt": "SIXCAR Weed Remover Tool,Portable Garden Weeder Tool,New Gardening Weeding Tools,for Garden Hand Tools for Vegetable Gardening Backyard Far...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CXXQVVFP"
  },
  {
    "name": "Gardening Tools Set of 10 - Complete Heavy Duty Garden Tools Set with Fashion Handbag - Durable Gardening Supplies Kit Ideal Garden Gifts f...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91qFY3-tD9L._AC_UL320_.jpg",
      "alt": "Gardening Tools Set of 10 - Complete Heavy Duty Garden Tools Set with Fashion Handbag - Durable Gardening Supplies Kit Ideal Garden Gifts f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B1SCKMBV"
  },
  {
    "name": "Chapin 20004 Pump Sprayer, 1-Gallon SureSpray Translucent Tank with an Easy Fill Funnel-Top Opening, Adjustable Cone Nozzle & 34\" Long Reac...",
    "category": "Gardening",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71oqfMsZf6L._AC_UL320_.jpg",
      "alt": "Chapin 20004 Pump Sprayer, 1-Gallon SureSpray Translucent Tank with an Easy Fill Funnel-Top Opening, Adjustable Cone Nozzle & 34\" Long Reac...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000E28UQU"
  },
  {
    "name": "Fiskars Vegetable Gardening Essentials 6-Piece Tool Set for Cultivating, Serrated Stainless Steel Shears & 4-in-1 Seed Sower for Planting,...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71E82Ufr3ZL._AC_UL320_.jpg",
      "alt": "Fiskars Vegetable Gardening Essentials 6-Piece Tool Set for Cultivating, Serrated Stainless Steel Shears & 4-in-1 Seed Sower for Planting,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D88VCMJD"
  },
  {
    "name": "Fiskars Trowel, Heavy Duty Gardening Hand Tool with Hang Hole, For Digging and Planting, Rust Resistant Cast Aluminum, Ergonomic Handle and...",
    "category": "Gardening",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71t68gVD+KL._AC_UL320_.jpg",
      "alt": "Fiskars Trowel, Heavy Duty Gardening Hand Tool with Hang Hole, For Digging and Planting, Rust Resistant Cast Aluminum, Ergonomic Handle and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B004S0PGPM"
  },
  {
    "name": "Fiskars 28\" Loppers for Tree Trimming, Heavy Duty, Rust-Resistant Sharp Bypass Steel Blade Loppers, Branch Cutter up to 1.5\" Diameter Cut C...",
    "category": "Gardening",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61pFXu5ytLL._AC_UL320_.jpg",
      "alt": "Fiskars 28\" Loppers for Tree Trimming, Heavy Duty, Rust-Resistant Sharp Bypass Steel Blade Loppers, Branch Cutter up to 1.5\" Diameter Cut C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000BX1IB6"
  },
  {
    "name": "WOWBOX Garden Tools Set - 10 PCS, Heavy Duty Gardening Hand Tools Kit with Storage Tote, Rust-Resistant Gardening Supplies for Planting wit...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71P3coPZvuL._AC_UL320_.jpg",
      "alt": "WOWBOX Garden Tools Set - 10 PCS, Heavy Duty Gardening Hand Tools Kit with Storage Tote, Rust-Resistant Gardening Supplies for Planting wit...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0G8JQJ9L4"
  },
  {
    "name": "Giraffe Tools Retractable Garden Hose Reel 1/2 Inch x 130 ft, Super Heavy Duty, Any Length Lock, Slow Return System, Wall Mounted and 180 D...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qngyqEVHL._AC_UL320_.jpg",
      "alt": "Giraffe Tools Retractable Garden Hose Reel 1/2 Inch x 130 ft, Super Heavy Duty, Any Length Lock, Slow Return System, Wall Mounted and 180 D...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B081W9LGL2"
  },
  {
    "name": "Garden Tools Set, 3 Pack Heavy Duty Gardening Tools Set Include Garden Shovel, Transplant Trowel and Hand Rake with Ergonomic Non-Slip Hand...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61knesYdOYL._AC_UL320_.jpg",
      "alt": "Garden Tools Set, 3 Pack Heavy Duty Gardening Tools Set Include Garden Shovel, Transplant Trowel and Hand Rake with Ergonomic Non-Slip Hand...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C61PF3CQ"
  },
  {
    "name": "Gardening Tools 9-Piece Heavy-Duty Garden Tools Set, Stainless Steel Garden Hand Tools with Purple Floral Tote Bag and Repotting Mat Garden...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81e6qv1voHL._AC_UL320_.jpg",
      "alt": "Gardening Tools 9-Piece Heavy-Duty Garden Tools Set, Stainless Steel Garden Hand Tools with Purple Floral Tote Bag and Repotting Mat Garden...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DS62FVKJ"
  },
  {
    "name": "Grenebo 12-Piece Gardening Tools Set, Floral Print Garden Tool Set Gift, Rust-Proof & Heavy-Duty Trowel, Rake, Weeder, Pruner with Hard Cas...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71kiDGnt8hL._AC_UL320_.jpg",
      "alt": "Grenebo 12-Piece Gardening Tools Set, Floral Print Garden Tool Set Gift, Rust-Proof & Heavy-Duty Trowel, Rake, Weeder, Pruner with Hard Cas...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DWHSCGRL"
  },
  {
    "name": "PERWIN Hori Hori Garden Knife, Garden Tools with Sheath for Weeding, Planting, Digging, 7\" Stainless Steel Blade with Cutting Edge, Full-Ta...",
    "category": "Gardening",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71rS+m9pqHL._AC_UL320_.jpg",
      "alt": "PERWIN Hori Hori Garden Knife, Garden Tools with Sheath for Weeding, Planting, Digging, 7\" Stainless Steel Blade with Cutting Edge, Full-Ta...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BCK7NRBH"
  },
  {
    "name": "Fiskars Stand-Up Weed Puller Tool, 4 Serrated Stainless Steel Claws Grip Roots for Permanent Removal, Reinforced Foot Platform Penetrates T...",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61zif1JQAwL._AC_UL320_.jpg",
      "alt": "Fiskars Stand-Up Weed Puller Tool, 4 Serrated Stainless Steel Claws Grip Roots for Permanent Removal, Reinforced Foot Platform Penetrates T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0030MIHAU"
  },
  {
    "name": "EWPJDK 3 Pack Garden Pruning Shears, Stainless Steel Shears, Gardening Shears, Scissors, Garden Clippers, Pruning Snips, Pruning Shears for...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71GIW2QhX2L._AC_UL320_.jpg",
      "alt": "EWPJDK 3 Pack Garden Pruning Shears, Stainless Steel Shears, Gardening Shears, Scissors, Garden Clippers, Pruning Snips, Pruning Shears for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CNK8VRWR"
  },
  {
    "name": "Garden Tool Set, 3 Pack Aluminum Heavy Duty Gardening Kit Includes Hand Trowel, Transplant Trowel and Cultivator Hand Rake with Soft Rubber...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51u3FBumeCL._AC_UL320_.jpg",
      "alt": "Garden Tool Set, 3 Pack Aluminum Heavy Duty Gardening Kit Includes Hand Trowel, Transplant Trowel and Cultivator Hand Rake with Soft Rubber...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B083QJYTKX"
  },
  {
    "name": "NICOFPHY Weed Puller Tool with Long Handle - 60\" Manual Weeder Remover Tool, 2 in 1 Hand Weed Rake and Garden Hoe for Gardening, Heavy Duty...",
    "category": "Gardening",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for gardening shoppers who want easier planting, cleaner watering, better patio setups, or beginner gardening gear that feels approachable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gardening shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Sunny Garden lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check outdoor dimensions, drainage, climate fit, soil needs, and whether tools match the plants you actually want to grow.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61zvrwN9mML._AC_UL320_.jpg",
      "alt": "NICOFPHY Weed Puller Tool with Long Handle - 60\" Manual Weeder Remover Tool, 2 in 1 Hand Weed Rake and Garden Hoe for Gardening, Heavy Duty...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D76K43LR"
  }
];

export function getSunnyGardenCatalog(
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
