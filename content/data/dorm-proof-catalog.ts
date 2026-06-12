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
    "name": "10Ft Extension Cord with Multiple Outlets, Flat Plug Surge Protector Power Strip 10 Ft Long Cord, 8 Outlets & 4 USB Ports (2 USB C), Desk C...",
    "category": "Dorm",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/612NrGLfOqL._AC_UL320_.jpg",
      "alt": "10Ft Extension Cord with Multiple Outlets, Flat Plug Surge Protector Power Strip 10 Ft Long Cord, 8 Outlets & 4 USB Ports (2 USB C), Desk C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DZ254SSR"
  },
  {
    "name": "BAND-AID Brand Travel Ready Portable Emergency First Aid Kit, Minor Wound Care, Perfect for Home, Car, Camping, Travel & Outdoor Essentials...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81vQmvJOqyL._AC_UL320_.jpg",
      "alt": "BAND-AID Brand Travel Ready Portable Emergency First Aid Kit, Minor Wound Care, Perfect for Home, Car, Camping, Travel & Outdoor Essentials...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B41MYSGP"
  },
  {
    "name": "LEVOIT Air Purifiers for Bedroom Home Dorm, AHAM VERIFIDE, 3-in-1 Filter Cleaner With Aroma Pad, Filters Smoke, Allergens, Pet Dander, Odor...",
    "category": "Dorm",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71wGv7Fh2AL._AC_UL320_.jpg",
      "alt": "LEVOIT Air Purifiers for Bedroom Home Dorm, AHAM VERIFIDE, 3-in-1 Filter Cleaner With Aroma Pad, Filters Smoke, Allergens, Pet Dander, Odor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09GTRVJQM"
  },
  {
    "name": "Addtam LED Desk Lamp, Power Strip with 3 Outlets 4 USB Charging Ports(2 USBC), 4 Modes 5 Level Brightness Touch Lamp, Small Desk Lamp for H...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61RTVGWbTzL._AC_UL320_.jpg",
      "alt": "Addtam LED Desk Lamp, Power Strip with 3 Outlets 4 USB Charging Ports(2 USBC), 4 Modes 5 Level Brightness Touch Lamp, Small Desk Lamp for H...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2LGK82V"
  },
  {
    "name": "Command Variety Pack, Including 10 Pairs of Picture Hanging Strips, 6 Wire Hooks and 8 Utility Hooks for Hanging Christmas Decorations, Dam...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Livypa6vL._AC_UL320_.jpg",
      "alt": "Command Variety Pack, Including 10 Pairs of Picture Hanging Strips, 6 Wire Hooks and 8 Utility Hooks for Hanging Christmas Decorations, Dam...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07712H557"
  },
  {
    "name": "Dalykate Backpack Laundry Bag, Laundry Backpack with Shoulder Straps and Mesh Pocket Durable Nylon Clothes Hamper Bag with Drawstring Closu...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61p4SubT6CS._AC_UL320_.jpg",
      "alt": "Dalykate Backpack Laundry Bag, Laundry Backpack with Shoulder Straps and Mesh Pocket Durable Nylon Clothes Hamper Bag with Drawstring Closu...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08R7FP1HT"
  },
  {
    "name": "EUDELE Mesh Shower Caddy Portable for College Dorm Room Essentials, Shower Caddy Dorm with 8-Pocket Large Capacity for Beach, Swimming, Gym...",
    "category": "Dorm",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/810iTm77M7L._AC_UL320_.jpg",
      "alt": "EUDELE Mesh Shower Caddy Portable for College Dorm Room Essentials, Shower Caddy Dorm with 8-Pocket Large Capacity for Beach, Swimming, Gym...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09SZ9T4MV"
  },
  {
    "name": "Clorox Disinfecting Wipes for Allergy Season, Bleach-Free, Multi-Surface Cleaner, Antibacterial, Fresh Scent & Crisp Lemon, 75 Count Each,...",
    "category": "Dorm",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ViEehuSvL._AC_UL320_.jpg",
      "alt": "Clorox Disinfecting Wipes for Allergy Season, Bleach-Free, Multi-Surface Cleaner, Antibacterial, Fresh Scent & Crisp Lemon, 75 Count Each,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00HSC9F2C"
  },
  {
    "name": "Bedsure Twin XL Mattress Pad - Soft Mattress Topper for College Dorm Room Essentials, Extra Long Twin Quilted Fitted Bed Cover Protector wi...",
    "category": "Dorm",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81dTkiWb-WL._AC_UL320_.jpg",
      "alt": "Bedsure Twin XL Mattress Pad - Soft Mattress Topper for College Dorm Room Essentials, Extra Long Twin Quilted Fitted Bed Cover Protector wi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0738B8SQS"
  },
  {
    "name": "Closet Organizers and Storage,College Dorm Room Essentials,Pack of 6 Multifunctional Organizer Magic Space Saving Hangers with 9 Holes Stor...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FBThbhYAL._AC_UL320_.jpg",
      "alt": "Closet Organizers and Storage,College Dorm Room Essentials,Pack of 6 Multifunctional Organizer Magic Space Saving Hangers with 9 Holes Stor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08RJC5B74"
  },
  {
    "name": "FYY Over the Door Hooks, 4 Pack Hangers Hooks with Rubber Prevent Scratches Heavy Duty Organizer for Living Room, Bathroom, Bedroom, Kitche...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51+oY1kC8kL._AC_UL320_.jpg",
      "alt": "FYY Over the Door Hooks, 4 Pack Hangers Hooks with Rubber Prevent Scratches Heavy Duty Organizer for Living Room, Bathroom, Bedroom, Kitche...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B99VKV8P"
  },
  {
    "name": "6 Pack Extra Heavy Duty Large Moving Bags with Strong Zipper & Comfortable Handles, Sturdy & Durable Clothes Storage Bags Totes Bins, Blue...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71izg8Ai-KL._AC_UL320_.jpg",
      "alt": "6 Pack Extra Heavy Duty Large Moving Bags with Strong Zipper & Comfortable Handles, Sturdy & Durable Clothes Storage Bags Totes Bins, Blue...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DGF616XN"
  },
  {
    "name": "Pipishell 3 Tier Rolling Cart Organizer, Plastic Rolling Cart with Lockable Wheels & Reinforced Handle, Lightweight Utility Cart Storage Ca...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/613bbYJQ2uL._AC_UL320_.jpg",
      "alt": "Pipishell 3 Tier Rolling Cart Organizer, Plastic Rolling Cart with Lockable Wheels & Reinforced Handle, Lightweight Utility Cart Storage Ca...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CR3R6XHM"
  },
  {
    "name": "DREO Fan for Bedroom, 12 Inches, 70ft Powerful Airflow, 25db Quiet Table Air Circulator Fans for Whole Room, 120° Adjustable Tilt, 3 Speeds...",
    "category": "Dorm",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qYVE1hZmL._AC_UL320_.jpg",
      "alt": "DREO Fan for Bedroom, 12 Inches, 70ft Powerful Airflow, 25db Quiet Table Air Circulator Fans for Whole Room, 120° Adjustable Tilt, 3 Speeds...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BSH75KZ3"
  },
  {
    "name": "HomeHacks 2 Pack Large Laundry Baskets, Waterproof, Freestanding Laundry Hampers, Collapsible Clothes Hamper with Reinforced Handles in Lau...",
    "category": "Dorm",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81rYQCVHPlL._AC_UL320_.jpg",
      "alt": "HomeHacks 2 Pack Large Laundry Baskets, Waterproof, Freestanding Laundry Hampers, Collapsible Clothes Hamper with Reinforced Handles in Lau...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09KT67BL1"
  },
  {
    "name": "One Beat Small LED Desk Lamp Power Strip 5ft Extension Cord with 3 Outlets 4 USB Ports(2 USB C), 4 Modes, 5 Level Touch Lamp Study Reading...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ndeyWcaHL._AC_UL320_.jpg",
      "alt": "One Beat Small LED Desk Lamp Power Strip 5ft Extension Cord with 3 Outlets 4 USB Ports(2 USB C), 4 Modes, 5 Level Touch Lamp Study Reading...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CRY97FPB"
  },
  {
    "name": "SUNLONG Dorm Room Essential Clip on Light Wall-Mounted, 3 Color Portable Desk Light Mini Clip Lamp, Battery Operation Small Desk Lamp with...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41WS9sc0b5L._AC_UL320_.jpg",
      "alt": "SUNLONG Dorm Room Essential Clip on Light Wall-Mounted, 3 Color Portable Desk Light Mini Clip Lamp, Battery Operation Small Desk Lamp with...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BMPNQ5PJ"
  },
  {
    "name": "LED Desk Lamp with Power Strip, 3 AC Outlets & 4 USB Ports (2 USB-C), Stepless Dimming & 2800K-6500K Eye-Caring Desk Light, Foldable Table...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71dau9RTrSL._AC_UL320_.jpg",
      "alt": "LED Desk Lamp with Power Strip, 3 AC Outlets & 4 USB Ports (2 USB-C), Stepless Dimming & 2800K-6500K Eye-Caring Desk Light, Foldable Table...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GXV4S23L"
  },
  {
    "name": "One Beat 10Ft Extension Cord with Multiple Outlets,Flat Plug Power Strip Surge Protector with 10 Ft Long Cord,6 Outlet 4 USB Ports (2USB C)...",
    "category": "Dorm",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/618I9hPCIjL._AC_UL320_.jpg",
      "alt": "One Beat 10Ft Extension Cord with Multiple Outlets,Flat Plug Power Strip Surge Protector with 10 Ft Long Cord,6 Outlet 4 USB Ports (2USB C)...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CKKLDZM8"
  },
  {
    "name": "Pants Hangers with Clips,Space Saving Hanging Closet Organizer-6 Tiers Skirt Hangers with 360° Swivel Hook,Closet Organizer-Clothes Hangers...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-3UVrsGhL._AC_UL320_.jpg",
      "alt": "Pants Hangers with Clips,Space Saving Hanging Closet Organizer-6 Tiers Skirt Hangers with 360° Swivel Hook,Closet Organizer-Clothes Hangers...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CB8B1M41"
  },
  {
    "name": "Lysol Disinfecting Wipes Bundle, Home Apartment Dorm Room Essentials and Cleaning Supplies, All Purpose Cleaner, Multi-surface Cleaning Wip...",
    "category": "Dorm",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81KwmKND15L._AC_UL320_.jpg",
      "alt": "Lysol Disinfecting Wipes Bundle, Home Apartment Dorm Room Essentials and Cleaning Supplies, All Purpose Cleaner, Multi-surface Cleaning Wip...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BNNVT2VH"
  },
  {
    "name": "Gaiatop USB Desk Fan, 3 Speeds Strong Airflow, 5.5 Inch Portable 90° Rotate Quiet Cooling, Small Personal Table Fans for Bedroom Home Offic...",
    "category": "Dorm",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qu3USX5+L._AC_UL320_.jpg",
      "alt": "Gaiatop USB Desk Fan, 3 Speeds Strong Airflow, 5.5 Inch Portable 90° Rotate Quiet Cooling, Small Personal Table Fans for Bedroom Home Offic...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BWDHZP8J"
  },
  {
    "name": "Hantinstom 39-Piece Household Tools Kit Essential Home Repair Set with Plastic Toolbox Ideal for College Students, Home Use & More",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61hIw9NUz5L._AC_UL320_.jpg",
      "alt": "Hantinstom 39-Piece Household Tools Kit Essential Home Repair Set with Plastic Toolbox Ideal for College Students, Home Use & More",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CW6353D1"
  },
  {
    "name": "Lingerie Bags for Washing Delicates,Small Fine Mesh Laundry Bags,3Pcs(1 Large,1 Medium,1 Small)",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81bZxB9d3ML._AC_UL320_.jpg",
      "alt": "Lingerie Bags for Washing Delicates,Small Fine Mesh Laundry Bags,3Pcs(1 Large,1 Medium,1 Small)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B968L1W4"
  },
  {
    "name": "Beckham Hotel Collection Bed Pillows King Size Set of 2 - Down Alternative Pillow for Back, Stomach or Side Sleepers",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/617W9ccRr-L._AC_UL320_.jpg",
      "alt": "Beckham Hotel Collection Bed Pillows King Size Set of 2 - Down Alternative Pillow for Back, Stomach or Side Sleepers",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01LYC1XSM"
  },
  {
    "name": "TICONN 6 Pack Extra Large Moving Bags Heavy Duty with Zippers & Carrying Handles, Durable Storage Bags Moving Boxes for Closet Organizers a...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91ZpAfw57OL._AC_UL320_.jpg",
      "alt": "TICONN 6 Pack Extra Large Moving Bags Heavy Duty with Zippers & Carrying Handles, Durable Storage Bags Moving Boxes for Closet Organizers a...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B086WNKLTM"
  },
  {
    "name": "6 Pack Moving Bags Heavy Duty 210GSM with Full-Open Side Zipper, 93L 65lbs Waterproof Foldable Storage Totes for College Dorm Move-In, Movi...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61iOoMW91ZL._AC_UL320_.jpg",
      "alt": "6 Pack Moving Bags Heavy Duty 210GSM with Full-Open Side Zipper, 93L 65lbs Waterproof Foldable Storage Totes for College Dorm Move-In, Movi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F92JPR7C"
  },
  {
    "name": "Utopia Home - Plastic Hangers 50 Pack - Space Saving Clothes Hanger - Durable and Strong Closet Organizers and Storage Makes It Ideal Stock...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for dorm shoppers who want more storage, easier move-in, cleaner shared routines, or a tiny room that works harder.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Dorm shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dorm Proof lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dorm rules for power strips, appliances, adhesives, furniture, and wall mounting before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61q0fe5zizL._AC_UL320_.jpg",
      "alt": "Utopia Home - Plastic Hangers 50 Pack - Space Saving Clothes Hanger - Durable and Strong Closet Organizers and Storage Makes It Ideal Stock...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B06X421WJ6"
  }
];

export function getDormProofCatalog(
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
