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
    "name": "SNSLXH 5 Pack Stackable Closet Storage Basket, Multifunctional & Foldable Closet Organizer for Bathroom Kitchen Laundry Room Wardrobe Stora...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718gPdLAncL._AC_UL320_.jpg",
      "alt": "SNSLXH 5 Pack Stackable Closet Storage Basket, Multifunctional & Foldable Closet Organizer for Bathroom Kitchen Laundry Room Wardrobe Stora...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGJJJC4M"
  },
  {
    "name": "Closet Organizers and Storage,3 Pack Organization and Storage Pants-Hangers-Space-Saving,Velvet Hanger for Dorm Room for College Students G...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71apXFP2ReL._AC_UL320_.jpg",
      "alt": "Closet Organizers and Storage,3 Pack Organization and Storage Pants-Hangers-Space-Saving,Velvet Hanger for Dorm Room for College Students G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRKHCLGZ"
  },
  {
    "name": "Pants Hangers with Clips,Space Saving Hanging Closet Organizer-6 Tiers Skirt Hangers with 360° Swivel Hook,Closet Organizer-Clothes Hangers...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-3UVrsGhL._AC_UL320_.jpg",
      "alt": "Pants Hangers with Clips,Space Saving Hanging Closet Organizer-6 Tiers Skirt Hangers with 360° Swivel Hook,Closet Organizer-Clothes Hangers...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CB8B1M41"
  },
  {
    "name": "NECAMOCU 2 Pack Bra Hanger for Closet Organizer, Premium Wooden Tank Top Hangers with 36 Foldable Hooks, 360° Rotating Design, Space Saving...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/710f-GufFYL._AC_UL320_.jpg",
      "alt": "NECAMOCU 2 Pack Bra Hanger for Closet Organizer, Premium Wooden Tank Top Hangers with 36 Foldable Hooks, 360° Rotating Design, Space Saving...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DQ67STGL"
  },
  {
    "name": "5 Pack Stackable Closet Storage Basket - Stackable Storage Bins, Multifunctional & Foldable Closet Organizer Waterproof, Wardrobe Cupboard...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71j55FnA0SL._AC_UL320_.jpg",
      "alt": "5 Pack Stackable Closet Storage Basket - Stackable Storage Bins, Multifunctional & Foldable Closet Organizer Waterproof, Wardrobe Cupboard...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CL9NHS27"
  },
  {
    "name": "Kitsure Shoe Rack - Non-Woven Shoe Rack Shelf, Shoe Organizer for Closet, Entryway, Garage & Corridor, Stackable Shoe Shelves, 27.5\" Wide -...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/614DfIW6jFL._AC_UL320_.jpg",
      "alt": "Kitsure Shoe Rack - Non-Woven Shoe Rack Shelf, Shoe Organizer for Closet, Entryway, Garage & Corridor, Stackable Shoe Shelves, 27.5\" Wide -...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CNGTZ3B5"
  },
  {
    "name": "AMKUFO 6 Pack-Closet-Organizers-and-Storage, Magic-Hangers-Space-Saving-for-Clothes, Closer-Organizer-for-Closet-Organization, Space-Saver-...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712T34l+u4L._AC_UL320_.jpg",
      "alt": "AMKUFO 6 Pack-Closet-Organizers-and-Storage, Magic-Hangers-Space-Saving-for-Clothes, Closer-Organizer-for-Closet-Organization, Space-Saver-...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B082K8XTBS"
  },
  {
    "name": "YOUDENOVA Hanging Closet Organizer and Storage, 6-Shelf Closet Hanging Storage Shelves, Grey",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61+pb4y2RLL._AC_UL320_.jpg",
      "alt": "YOUDENOVA Hanging Closet Organizer and Storage, 6-Shelf Closet Hanging Storage Shelves, Grey",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07SYPLVTG"
  },
  {
    "name": "ZEDODIER Belt Organizer for Closet, Heavy-Duty Rotating Belt Hanger Rack Holds up to 24 Belts, Hanging Space Saving Metal Belt Holder for C...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FIfmnvQML._AC_UL320_.jpg",
      "alt": "ZEDODIER Belt Organizer for Closet, Heavy-Duty Rotating Belt Hanger Rack Holds up to 24 Belts, Hanging Space Saving Metal Belt Holder for C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BTWDNY8P"
  },
  {
    "name": "Volnamal Legging Organizer for Closet, 2 Pack Metal Yoga Pants Hangers w/10 Clips Holds 20 Leggings, Space Saving Hanging Closet Organizer...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71aytsbjg7L._AC_UL320_.jpg",
      "alt": "Volnamal Legging Organizer for Closet, 2 Pack Metal Yoga Pants Hangers w/10 Clips Holds 20 Leggings, Space Saving Hanging Closet Organizer...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZCBJ7RL"
  },
  {
    "name": "Homsorout Closet Organizers Bins 6 Packs - Large Closet Shelf Organizer with Handles, Fabric Trapezoid Storage Bins, Collapsible Storage Cu...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/811-2Uy3e1L._AC_UL320_.jpg",
      "alt": "Homsorout Closet Organizers Bins 6 Packs - Large Closet Shelf Organizer with Handles, Fabric Trapezoid Storage Bins, Collapsible Storage Cu...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BR7MSWN2"
  },
  {
    "name": "5 Tier Closet Hanging Organizer, Clothes Hanging Shelves with 4 Hanging Hooks 5 S Hooks, Wire Storage Basket Bins, for Clothing Sweaters Sh...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718-Od33DEL._AC_UL320_.jpg",
      "alt": "5 Tier Closet Hanging Organizer, Clothes Hanging Shelves with 4 Hanging Hooks 5 S Hooks, Wire Storage Basket Bins, for Clothing Sweaters Sh...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09MK34HL5"
  },
  {
    "name": "Durmmur 2 Pack Hat Racks for Baseball Caps, Stainless Steel Hat Organizer for Baseball Cap, Hat Holder Storage Organizer, Hat Hanger Strong...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71CeQAUdmbL._AC_UL320_.jpg",
      "alt": "Durmmur 2 Pack Hat Racks for Baseball Caps, Stainless Steel Hat Organizer for Baseball Cap, Hat Holder Storage Organizer, Hat Hanger Strong...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C4H3Z6K7"
  },
  {
    "name": "Budding Joy 90L Under Bed Storage Containers, Closet Organizers and Storage Bins, Foldable Underbed Storage Bags for Linen Sheets, Blanket,...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Fap+ZlUIL._AC_UL320_.jpg",
      "alt": "Budding Joy 90L Under Bed Storage Containers, Closet Organizers and Storage Bins, Foldable Underbed Storage Bags for Linen Sheets, Blanket,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09Q38H2J4"
  },
  {
    "name": "SPACEKEEPER Adjustable Shelf Divider for Closet, Clear Purse Organizers for Closet Acrylic Handbag Separators Storage Organizer Bookshelf S...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Q2oCUBUmL._AC_UL320_.jpg",
      "alt": "SPACEKEEPER Adjustable Shelf Divider for Closet, Clear Purse Organizers for Closet Acrylic Handbag Separators Storage Organizer Bookshelf S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CHRSPMXL"
  },
  {
    "name": "BOOMIBOO Hanging Closet Organize and Shelves，5-Hanging Shelf with 2 Side Pockets，Storage Foldable （Grey）",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71WIkiANaxL._AC_UL320_.jpg",
      "alt": "BOOMIBOO Hanging Closet Organize and Shelves，5-Hanging Shelf with 2 Side Pockets，Storage Foldable （Grey）",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DHMJSDXM"
  },
  {
    "name": "Hat Stand for Baseball Caps, 2 Pack No Install Acrylic Hat Organizer for 14 Baseball Caps Storage Organizer, Hat Racks Hat Holder Display a...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71OqOiodx2L._AC_UL320_.jpg",
      "alt": "Hat Stand for Baseball Caps, 2 Pack No Install Acrylic Hat Organizer for 14 Baseball Caps Storage Organizer, Hat Racks Hat Holder Display a...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZL9R25L"
  },
  {
    "name": "HBlife 6 Pack Closet Organizers and Storage, Clear Shelf Dividers, Vertical Purse Organizer for Closet Perfect for Sweater, Shirts, Handbag...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Fe0GmQzlL._AC_UL320_.jpg",
      "alt": "HBlife 6 Pack Closet Organizers and Storage, Clear Shelf Dividers, Vertical Purse Organizer for Closet Perfect for Sweater, Shirts, Handbag...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B093C7BZV5"
  },
  {
    "name": "Amazon Basics Slim Velvet Non-Slip Space Saving Suit Clothes Hangers for Closet Organization, Black/Silver, 30-Pack",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/617+Wg+p7WL._AC_UL320_.jpg",
      "alt": "Amazon Basics Slim Velvet Non-Slip Space Saving Suit Clothes Hangers for Closet Organization, Black/Silver, 30-Pack",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00FXNABPI"
  },
  {
    "name": "caktraie 4 Pack Stackable Closet Storage Basket - Stackable Storage Bins, Multifunctional & Foldable Closet Organizer Divided, Wardrobe Cup...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71aQjzoLLkL._AC_UL320_.jpg",
      "alt": "caktraie 4 Pack Stackable Closet Storage Basket - Stackable Storage Bins, Multifunctional & Foldable Closet Organizer Divided, Wardrobe Cup...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CHVKCWS7"
  },
  {
    "name": "Sakugi Storage Shelves - 5 Tier Shelf Organizer, Heavy Duty Garage Shelving Unit with Leveling Feet, Stable Metal Shelves Organizer for Pan...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71on9WAB0KL._AC_UL320_.jpg",
      "alt": "Sakugi Storage Shelves - 5 Tier Shelf Organizer, Heavy Duty Garage Shelving Unit with Leveling Feet, Stable Metal Shelves Organizer for Pan...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D5CKB5CT"
  },
  {
    "name": "AWTATOS Cube Storage Organizer Storage 12 Cube Bookshelf DIY Plastic Closet Clothes Storage Shelves with Wooden Mallet, Stackable Storage S...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61gWx+++SwL._AC_UL320_.jpg",
      "alt": "AWTATOS Cube Storage Organizer Storage 12 Cube Bookshelf DIY Plastic Closet Clothes Storage Shelves with Wooden Mallet, Stackable Storage S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09DX34YB6"
  },
  {
    "name": "Lifewit 6 Pack Clothes Storage Bins with Lids, Foldable Blanket Storage Bags with Zippers, Clear Window and Reinforced Handles, Closet and...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ATH1p6zWL._AC_UL320_.jpg",
      "alt": "Lifewit 6 Pack Clothes Storage Bins with Lids, Foldable Blanket Storage Bags with Zippers, Clear Window and Reinforced Handles, Closet and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09ZV2TX28"
  },
  {
    "name": "Vtopmart 4 Pack Large Stackable Storage Drawers,Easily Assemble Acrylic Bathroom Closet Undersink Organizers and Storage,Plastic Bins for K...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81UsPrx1EJL._AC_UL320_.jpg",
      "alt": "Vtopmart 4 Pack Large Stackable Storage Drawers,Easily Assemble Acrylic Bathroom Closet Undersink Organizers and Storage,Plastic Bins for K...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZCTXKPZ"
  },
  {
    "name": "8 Pack Extra Large Heavy Duty Moving Bags, Clear Storage Bins with Lids, Reinforced Handles & Heavy-Duty Zippers Moving Boxes Storage Bags...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-K+JK60JL._AC_UL320_.jpg",
      "alt": "8 Pack Extra Large Heavy Duty Moving Bags, Clear Storage Bins with Lids, Reinforced Handles & Heavy-Duty Zippers Moving Boxes Storage Bags...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FDWLX8QP"
  },
  {
    "name": "NestOrganix 2 Pack Shoe Organizer for Closet, Large Shoe Box Storage Containers, Foldable Shoe Storage Organizer Box Bin with Adjustable Di...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81fVmnJNNdL._AC_UL320_.jpg",
      "alt": "NestOrganix 2 Pack Shoe Organizer for Closet, Large Shoe Box Storage Containers, Foldable Shoe Storage Organizer Box Bin with Adjustable Di...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJ83F7KH"
  },
  {
    "name": "5 Tier Extra Large Closet Hanging Shelves with Divider,2 Pair Hook,16.5\"L x 11.8\"W x 51.4\"H Closets Organizers and Storage,Clothes Organize...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uC5JuqSTL._AC_UL320_.jpg",
      "alt": "5 Tier Extra Large Closet Hanging Shelves with Divider,2 Pair Hook,16.5\"L x 11.8\"W x 51.4\"H Closets Organizers and Storage,Clothes Organize...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DM5VS16F"
  },
  {
    "name": "Amazon Basics 6-Cube Wire Grid Stackable Storage Organizer, Metal Shelving Unit, No-Tool Assembly, 26\"W x 38\"H x 12.6\"D, Black",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for wardrobe care shoppers who want cleaner hanging, easier folding, better shoe storage, or clothes that stay easier to find.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Wardrobe Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Closet Code lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Measure your closet, shelves, drawers, and garment lengths before buying storage products.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/812CVGJnYML._AC_UL320_.jpg",
      "alt": "Amazon Basics 6-Cube Wire Grid Stackable Storage Organizer, Metal Shelving Unit, No-Tool Assembly, 26\"W x 38\"H x 12.6\"D, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BY2PKY5X"
  }
];

export function getClosetCodeCatalog(
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
