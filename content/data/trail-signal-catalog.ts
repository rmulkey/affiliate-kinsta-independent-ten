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
    "name": "MalloMe Sleeping Bags for Adults Cold Weather & Warm - Backpacking Camping Sleeping Bag for Kids 10-12, Girls, Boys - Lightweight Compact C...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Mz+EmqRgL._AC_UL320_.jpg",
      "alt": "MalloMe Sleeping Bags for Adults Cold Weather & Warm - Backpacking Camping Sleeping Bag for Kids 10-12, Girls, Boys - Lightweight Compact C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B077XQDZW4"
  },
  {
    "name": "Picnic Table Cover with Bench Covers Camping Essentials Waterproof Windproof Camping Tablecloth with Drawstring Bag, Fitted Rectangle Table...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FsisG8w5L._AC_UL320_.jpg",
      "alt": "Picnic Table Cover with Bench Covers Camping Essentials Waterproof Windproof Camping Tablecloth with Drawstring Bag, Fitted Rectangle Table...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRN7JD86"
  },
  {
    "name": "LifeStraw Personal Water Filter for Hiking, Camping, Travel, and Emergency Preparedness",
    "category": "Camping",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/610MT9qiRyL._AC_UL320_.jpg",
      "alt": "LifeStraw Personal Water Filter for Hiking, Camping, Travel, and Emergency Preparedness",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B006QF3TW4"
  },
  {
    "name": "MEKER Fire Color Changing Packets - Fire Pit, Campfires, Outdoor Fireplaces, Bonfire - Magic Colorful Changing Fire - Perfect Fire Camping...",
    "category": "Camping",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-zlcjUwHL._AC_UL320_.jpg",
      "alt": "MEKER Fire Color Changing Packets - Fire Pit, Campfires, Outdoor Fireplaces, Bonfire - Magic Colorful Changing Fire - Perfect Fire Camping...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9THKCWY"
  },
  {
    "name": "Rainleaf Microfiber Towel Perfect Travel & Gym & Camping Towel. Quick Dry - Super Absorbent - Ultra Compact - Lightweight. Suitable for Tri...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61HHXRkRz6L._AC_UL320_.jpg",
      "alt": "Rainleaf Microfiber Towel Perfect Travel & Gym & Camping Towel. Quick Dry - Super Absorbent - Ultra Compact - Lightweight. Suitable for Tri...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01K1TX77W"
  },
  {
    "name": "Gas One GS-3400P Propane or Butane Stove Dual Fuel Stove Portable Camping Stove - Patented - with Carrying Case Great for Emergency Prepare...",
    "category": "Camping",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61XKJ6Mfa3L._AC_UL320_.jpg",
      "alt": "Gas One GS-3400P Propane or Butane Stove Dual Fuel Stove Portable Camping Stove - Patented - with Carrying Case Great for Emergency Prepare...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01HQRD8EO"
  },
  {
    "name": "Emergency Blanket 4-Pack Space Mylar Blankets Survival Gear and Supplies Reusable Thermal Camping Hunting Essentials First Aid Car Backpack...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71eCGdR7nfL._AC_UL320_.jpg",
      "alt": "Emergency Blanket 4-Pack Space Mylar Blankets Survival Gear and Supplies Reusable Thermal Camping Hunting Essentials First Aid Car Backpack...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B098KJMMGC"
  },
  {
    "name": "MalloMe Smores Sticks for Fire Pit Long - Marshmallow Roasting Sticks Smores Kit - Smore Skewers Hot Dog Fork Campfire Cooking Equipment, C...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71tW1eoVlUL._AC_UL320_.jpg",
      "alt": "MalloMe Smores Sticks for Fire Pit Long - Marshmallow Roasting Sticks Smores Kit - Smore Skewers Hot Dog Fork Campfire Cooking Equipment, C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07VDKMGPM"
  },
  {
    "name": "OGERY Camping String Lights, 4 in 1 Quick Storage 32.8FT Rechargeable Tent Lights String with 8 Lighting Modes, Hanging Waterproof Portable...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71xgUVAO+9L._AC_UL320_.jpg",
      "alt": "OGERY Camping String Lights, 4 in 1 Quick Storage 32.8FT Rechargeable Tent Lights String with 8 Lighting Modes, Hanging Waterproof Portable...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D5HTW1NB"
  },
  {
    "name": "Wise Owl Outfitters Camping Hammock – 500lbs Portable Hammock with Tree Straps - Travel, Backpacking, Hiking, Outdoors Camping Gear - Singl...",
    "category": "Camping",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81K6leBY4-L._AC_UL320_.jpg",
      "alt": "Wise Owl Outfitters Camping Hammock – 500lbs Portable Hammock with Tree Straps - Travel, Backpacking, Hiking, Outdoors Camping Gear - Singl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01N45NNCL"
  },
  {
    "name": "Camping Water Container 2 Gallon Collapsible Water Jug with Spout - Reusable Plastic Flasks, Foldable Empty Gallon Jug for Water Storage, W...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71YATOD+GXL._AC_UL320_.jpg",
      "alt": "Camping Water Container 2 Gallon Collapsible Water Jug with Spout - Reusable Plastic Flasks, Foldable Empty Gallon Jug for Water Storage, W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FTZ5M84W"
  },
  {
    "name": "Sleeping Bags for Adults Backpacking Lightweight Waterproof- Cold Weather Sleeping Bag for Girls Boys Mens for Warm Camping Hiking Outdoor...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kuIw4CNwL._AC_UL320_.jpg",
      "alt": "Sleeping Bags for Adults Backpacking Lightweight Waterproof- Cold Weather Sleeping Bag for Girls Boys Mens for Warm Camping Hiking Outdoor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08DQQ6N95"
  },
  {
    "name": "FUN PAC Camping Sleeping Pad, Ultralight Camping Mat with Pillow, Built-in Foot Pump Inflatable Sleeping Pads Compact for Camping Backpacki...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71PHS9MmZwL._AC_UL320_.jpg",
      "alt": "FUN PAC Camping Sleeping Pad, Ultralight Camping Mat with Pillow, Built-in Foot Pump Inflatable Sleeping Pads Compact for Camping Backpacki...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09XDNQWXP"
  },
  {
    "name": "Carabiner Clip - Heavy Duty Carabiners 800lbs-13KN (2922 lbs) Carabeaner D Ring Shape,Key Chain Clip Hook,Keychain Clip,Multipurpose for Ca...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71tG-8Ak2PL._AC_UL320_.jpg",
      "alt": "Carabiner Clip - Heavy Duty Carabiners 800lbs-13KN (2922 lbs) Carabeaner D Ring Shape,Key Chain Clip Hook,Keychain Clip,Multipurpose for Ca...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08T6LC7SK"
  },
  {
    "name": "Amazon Basics Waterproof Camping Tarp",
    "category": "Camping",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81D1MWWYeaL._AC_UL320_.jpg",
      "alt": "Amazon Basics Waterproof Camping Tarp",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0748HGDVD"
  },
  {
    "name": "Coleman Sundome Camping Tent with Rainfly, 2/3/4/6 Person Tent Sets Up in 10 Mins, Weatherproof Shelter for Camping, Festivals, Backyard, S...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ADgccHF4L._AC_UL320_.jpg",
      "alt": "Coleman Sundome Camping Tent with Rainfly, 2/3/4/6 Person Tent Sets Up in 10 Mins, Weatherproof Shelter for Camping, Festivals, Backyard, S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7QHY574"
  },
  {
    "name": "FRIZCOL 3-in-1 Camping Fan - Portable Fans Rechargeable - 24000mAh Battery Powered Fan with Light & Remote for Indoor, Outdoor, Tent, Trave...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71E1s4gODdL._AC_UL320_.jpg",
      "alt": "FRIZCOL 3-in-1 Camping Fan - Portable Fans Rechargeable - 24000mAh Battery Powered Fan with Light & Remote for Indoor, Outdoor, Tent, Trave...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BVTHPXLB"
  },
  {
    "name": "Odoland 30000mAh Camping Fan with LED Lantern, Rechargeable Battery Operated Oscillating Fan with Remote & Hook, Portable Tent Fan with Tim...",
    "category": "Camping",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Y+mUzO4IL._AC_UL320_.jpg",
      "alt": "Odoland 30000mAh Camping Fan with LED Lantern, Rechargeable Battery Operated Oscillating Fan with Remote & Hook, Portable Tent Fan with Tim...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQ2CGVL8"
  },
  {
    "name": "FLY2SKY Portable LED Tent Lamp, Clip Hook Hurricane Emergency Light Bulb, Camping Equipment Lanterns for Hiking, Backpacking Outage, B-CLOS...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61OFGQkHlVL._AC_UL320_.jpg",
      "alt": "FLY2SKY Portable LED Tent Lamp, Clip Hook Hurricane Emergency Light Bulb, Camping Equipment Lanterns for Hiking, Backpacking Outage, B-CLOS...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07MKBKN4H"
  },
  {
    "name": "SZHLUX Camping Hammock Double & Single Portable Hammocks with 2 Tree Straps and Attached Carry Bag,Great for Outdoor,Indoor,Beach,Camping,L...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71kLhzAzSfL._AC_UL320_.jpg",
      "alt": "SZHLUX Camping Hammock Double & Single Portable Hammocks with 2 Tree Straps and Attached Carry Bag,Great for Outdoor,Indoor,Beach,Camping,L...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09VGNJTPW"
  },
  {
    "name": "Kootek Camping Hammock, Portable Hammocks with Tree Straps & Attached Carry Bag, Camping Essentials Gear, Perfect for Outside Indoor Hiking...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Hy7mRB+8L._AC_UL320_.jpg",
      "alt": "Kootek Camping Hammock, Portable Hammocks with Tree Straps & Attached Carry Bag, Camping Essentials Gear, Perfect for Outside Indoor Hiking...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B082X3P3FD"
  },
  {
    "name": "Fire-Maple \"Fixed Star 1\" Backpacking and Camping Stove System | Outdoor Propane Cooking Gear | Portable Pot/Jet Burner Set | Ideal for Hik...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51D4jGU98IL._AC_UL320_.jpg",
      "alt": "Fire-Maple \"Fixed Star 1\" Backpacking and Camping Stove System | Outdoor Propane Cooking Gear | Portable Pot/Jet Burner Set | Ideal for Hik...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07F2VP353"
  },
  {
    "name": "Arcturus Military Wool Blanket - Warm, Thick, Washable - Great for Outdoors, Camping, Stadium Blanket, Picnics, Travel - Car & Bushcraft Su...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81WeiP+XeYL._AC_UL320_.jpg",
      "alt": "Arcturus Military Wool Blanket - Warm, Thick, Washable - Great for Outdoors, Camping, Stadium Blanket, Picnics, Travel - Car & Bushcraft Su...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01IJWUYLK"
  },
  {
    "name": "MEREZA Double Sleeping Bag for Adults Mens with Pillow, XL Queen Size Two Person Sleeping Bag for All Season Camping Hiking Backpacking 2 P...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61mMeO7b36L._AC_UL320_.jpg",
      "alt": "MEREZA Double Sleeping Bag for Adults Mens with Pillow, XL Queen Size Two Person Sleeping Bag for All Season Camping Hiking Backpacking 2 P...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09KBV184H"
  },
  {
    "name": "Frelaxy Dry Bag 3-Pack/5-Pack, Ultralight Dry Sack, Outdoor Bags Keep Gear Dry for Hiking, Backpacking, Kayaking, Camping, Swimming, Boating",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61fGQ74-5WS._AC_UL320_.jpg",
      "alt": "Frelaxy Dry Bag 3-Pack/5-Pack, Ultralight Dry Sack, Outdoor Bags Keep Gear Dry for Hiking, Backpacking, Kayaking, Camping, Swimming, Boating",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B095K6PQ1T"
  },
  {
    "name": "Energizer Universal LED Headlamp (2-Pack), Bright Head Lamp for Outdoors, Camping and Emergency Light, IPX4 Water Resistant (Batteries Incl...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61CSF0ZXqKL._AC_UL320_.jpg",
      "alt": "Energizer Universal LED Headlamp (2-Pack), Bright Head Lamp for Outdoors, Camping and Emergency Light, IPX4 Water Resistant (Batteries Incl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08WC2VYMS"
  },
  {
    "name": "TRIPTIPS Bucket Toilet Seat with Soft Cushion, 270°Rotatable Lid,XL Portable, Luggable Loo Camping Toilet Seat for Adults and Kids, 5 Gallon",
    "category": "Camping",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/510cLj8T1rL._AC_UL320_.jpg",
      "alt": "TRIPTIPS Bucket Toilet Seat with Soft Cushion, 270°Rotatable Lid,XL Portable, Luggable Loo Camping Toilet Seat for Adults and Kids, 5 Gallon",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BQR5ZFSL"
  },
  {
    "name": "Free Soldier Waterproof Portable Tarp Multifunctional Outdoor Camping Traveling Awning Backpacking Tarp shelter Rain Tarp",
    "category": "Camping",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for camping shoppers who want more comfort, safer packing, clearer setup, or less campsite chaos.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Camping shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Trail Signal lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Outdoor gear still needs common sense, weather checks, sizing checks, and local safety rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61rG0kJ2vxL._AC_UL320_.jpg",
      "alt": "Free Soldier Waterproof Portable Tarp Multifunctional Outdoor Camping Traveling Awning Backpacking Tarp shelter Rain Tarp",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01HO15DGS"
  }
];

export function getTrailSignalCatalog(
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
