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
    "name": "MDOZQ Office Desk Accessories 2pcs Computer Monitor Memo Board Message Board Supplies for Women Men Sticky Note Holder Home Desktop Decor",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61yjorGIhAL._AC_UL320_.jpg",
      "alt": "MDOZQ Office Desk Accessories 2pcs Computer Monitor Memo Board Message Board Supplies for Women Men Sticky Note Holder Home Desktop Decor",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRMX3SWH"
  },
  {
    "name": "Taja To Do List Notepad - To Do List Notebook for Work with 52 Sheets, 9.8\" x 6.5\", Undated Daily Planner Perfect for Daily Tasks and Goal...",
    "category": "Home Office",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61oTqneGKNL._AC_UL320_.jpg",
      "alt": "Taja To Do List Notepad - To Do List Notebook for Work with 52 Sheets, 9.8\" x 6.5\", Undated Daily Planner Perfect for Daily Tasks and Goal...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C1GW4GD4"
  },
  {
    "name": "Crpich Acrylic Cell Phone Stand, Portable Clear Phone Stand for Desk, Compatible with Phone16 15 14 13 Pro Max Mini 12 11 Plus SE, Switch,...",
    "category": "Home Office",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61xq34OCYUL._AC_UL320_.jpg",
      "alt": "Crpich Acrylic Cell Phone Stand, Portable Clear Phone Stand for Desk, Compatible with Phone16 15 14 13 Pro Max Mini 12 11 Plus SE, Switch,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0949DWJCV"
  },
  {
    "name": "INCHOR Cord Organizer, Cable Clips Cord Holder, Cable Management USB Cable Power Wire Cord Clips, 2 Packs Cable Organizers for Car Home and...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81jDakdFrvL._AC_UL320_.jpg",
      "alt": "INCHOR Cord Organizer, Cable Clips Cord Holder, Cable Management USB Cable Power Wire Cord Clips, 2 Packs Cable Organizers for Car Home and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B087TH1R6T"
  },
  {
    "name": "Anker Power Strip with 2100J Surge Protector, Outlet Extender, 5ft Extension Cord with Multiple Outlets, 12 AC, 2 USB A,1 USB C Port for 20...",
    "category": "Home Office",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FtSiqsK3L._AC_UL320_.jpg",
      "alt": "Anker Power Strip with 2100J Surge Protector, Outlet Extender, 5ft Extension Cord with Multiple Outlets, 12 AC, 2 USB A,1 USB C Port for 20...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09SG2Q23M"
  },
  {
    "name": "Airlonv LED Desk Lamp for Office Home, Eye-Caring Desk Light with Stepless Dimming Adjustable Flexible Gooseneck, 10W USB Adapter Desk Lamp...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Xa0fzUiGL._AC_UL320_.jpg",
      "alt": "Airlonv LED Desk Lamp for Office Home, Eye-Caring Desk Light with Stepless Dimming Adjustable Flexible Gooseneck, 10W USB Adapter Desk Lamp...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C4JTPPYY"
  },
  {
    "name": "10Ft Extension Cord with Multiple Outlets, Flat Plug Surge Protector Power Strip 10 Ft Long Cord, 8 Outlets & 4 USB Ports (2 USB C), Desk C...",
    "category": "Home Office",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/612NrGLfOqL._AC_UL320_.jpg",
      "alt": "10Ft Extension Cord with Multiple Outlets, Flat Plug Surge Protector Power Strip 10 Ft Long Cord, 8 Outlets & 4 USB Ports (2 USB C), Desk C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DZ254SSR"
  },
  {
    "name": "CasaZenith Foot Rest for Under Desk at Work - Ergonomic Foot Stools for Under Office Desk - Rocking Footrest with Roller Massager - Leg Res...",
    "category": "Home Office",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61TupahbNKL._AC_UL320_.jpg",
      "alt": "CasaZenith Foot Rest for Under Desk at Work - Ergonomic Foot Stools for Under Office Desk - Rocking Footrest with Roller Massager - Leg Res...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CPFTDT6P"
  },
  {
    "name": "9 Pack Magnetic Cable Clips [Cable Smooth Adjustable] Cord Holder, Under Desk Cable Management, JOYROOM Adhesive Wire Holder Keeper Organiz...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81yvBDKR49L._AC_UL320_.jpg",
      "alt": "9 Pack Magnetic Cable Clips [Cable Smooth Adjustable] Cord Holder, Under Desk Cable Management, JOYROOM Adhesive Wire Holder Keeper Organiz...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CH159ZNT"
  },
  {
    "name": "Flat Plug Extension Cord, HANYCONY 5ft Power Strip with 4 USB Ports(2 USB C), 4 Widely Outlets Extender, Wall Mount, Desk Charging Station...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/518tiMuntLL._AC_UL320_.jpg",
      "alt": "Flat Plug Extension Cord, HANYCONY 5ft Power Strip with 4 USB Ports(2 USB C), 4 Widely Outlets Extender, Wall Mount, Desk Charging Station...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C5HT9LMP"
  },
  {
    "name": "MOSISO Wrist Rest Support for Mouse Pad&Keyboard Set, Circle Curved Ergonomic Mousepad&Coaster Non-Slip Base Home/Office Pain Relief&Easy T...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/515G2Wi323L._AC_UL320_.jpg",
      "alt": "MOSISO Wrist Rest Support for Mouse Pad&Keyboard Set, Circle Curved Ergonomic Mousepad&Coaster Non-Slip Base Home/Office Pain Relief&Easy T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DCVVZ6CT"
  },
  {
    "name": "Amazon Basics Narrow Ruled Writing Pads, Perforated, 5\" x 8\", Multicolor, 6-Pack of 50 Sheets",
    "category": "Home Office",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71euci0sK5L._AC_UL320_.jpg",
      "alt": "Amazon Basics Narrow Ruled Writing Pads, Perforated, 5\" x 8\", Multicolor, 6-Pack of 50 Sheets",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07TQ8567K"
  },
  {
    "name": "Anker Nano Power Strip, Desk Clamp with 1500J Surge Protector, 5ft Extension Cord, 70W Max Gaming Desk Accessories, 6 AC, 2 USB A, 2 USB C,...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71cQC41LIfL._AC_UL320_.jpg",
      "alt": "Anker Nano Power Strip, Desk Clamp with 1500J Surge Protector, 5ft Extension Cord, 70W Max Gaming Desk Accessories, 6 AC, 2 USB A, 2 USB C,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FFGZH2S2"
  },
  {
    "name": "LISEN Cell Phone Stand Phone Holder for Desk Office Decor, Office Desk Accessories Women PC Gaming Essentials iPhone Stand Gadgets Men Gift...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61KD4hoirXL._AC_UL320_.jpg",
      "alt": "LISEN Cell Phone Stand Phone Holder for Desk Office Decor, Office Desk Accessories Women PC Gaming Essentials iPhone Stand Gadgets Men Gift...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07Z82895W"
  },
  {
    "name": "OPNICE Desk Organizer and Accessories, 2-Tier Computer Monitor Stand Riser with Drawer and 2 Pen Holders, Laptop Stand, Office Desk Accesso...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81MeUftFm8L._AC_UL320_.jpg",
      "alt": "OPNICE Desk Organizer and Accessories, 2-Tier Computer Monitor Stand Riser with Drawer and 2 Pen Holders, Laptop Stand, Office Desk Accesso...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DB8F7GDN"
  },
  {
    "name": "gianotter Desk Organizers and Accessories with File Holder, 4-Tier Desk Accessories & Workspace Organizers with Drawer and 2 Pen Holder, Pa...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iE5xG2+pL._AC_UL320_.jpg",
      "alt": "gianotter Desk Organizers and Accessories with File Holder, 4-Tier Desk Accessories & Workspace Organizers with Drawer and 2 Pen Holder, Pa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BWTT3WK1"
  },
  {
    "name": "WOLFBOX MegaFlow 50 Compressed Air Duster-110000RPM Super Power Electric Air Duster, 3-Gear Adjustable Mini Blower with Fast Charging, Dust...",
    "category": "Home Office",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713BEhBxXWL._AC_UL320_.jpg",
      "alt": "WOLFBOX MegaFlow 50 Compressed Air Duster-110000RPM Super Power Electric Air Duster, 3-Gear Adjustable Mini Blower with Fast Charging, Dust...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSW7R4VN"
  },
  {
    "name": "BlissTrends Foot Rest for Under Desk at Work-Versatile Foot Stool with Washable Cover-Comfortable Footrest with 2 Adjustable Heights for Ca...",
    "category": "Home Office",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81x+otHOTeL._AC_UL320_.jpg",
      "alt": "BlissTrends Foot Rest for Under Desk at Work-Versatile Foot Stool with Washable Cover-Comfortable Footrest with 2 Adjustable Heights for Ca...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BFQX3YFY"
  },
  {
    "name": "Vtopmart 25 PCS Clear Plastic Drawer Organizers Set, 4-Size Versatile Bathroom and Vanity Drawer Organizer Trays, Storage Bins for Makeup,...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81yj+PUYVxL._AC_UL320_.jpg",
      "alt": "Vtopmart 25 PCS Clear Plastic Drawer Organizers Set, 4-Size Versatile Bathroom and Vanity Drawer Organizer Trays, Storage Bins for Makeup,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08KXKVT4K"
  },
  {
    "name": "Lumbar Support Pillow for Office Chair, Office Home Essentials,Gifts for Mom,Dad, Back Support Pillow for Car, Chair Cushions,Back Pain Rel...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Qm1-Fja2L._AC_UL320_.jpg",
      "alt": "Lumbar Support Pillow for Office Chair, Office Home Essentials,Gifts for Mom,Dad, Back Support Pillow for Car, Chair Cushions,Back Pain Rel...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B074C9F45S"
  },
  {
    "name": "Under Desk Cable Management Tray White, Cinati Wire Organizers No Drill, Cable Tray with Clamp for Wire Management, Cord Organization Box f...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81vGseJ4e6L._AC_UL320_.jpg",
      "alt": "Under Desk Cable Management Tray White, Cinati Wire Organizers No Drill, Cable Tray with Clamp for Wire Management, Cord Organization Box f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BPLRX32S"
  },
  {
    "name": "Simple Trending 7 Tier Desk File Organizer, Letter Tray Paper Organizer with Pen Holder and Metal Hanging Basket, Black",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91AUT7AZwJL._AC_UL320_.jpg",
      "alt": "Simple Trending 7 Tier Desk File Organizer, Letter Tray Paper Organizer with Pen Holder and Metal Hanging Basket, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07R7FZ6RG"
  },
  {
    "name": "Voncerus LED Desk Lamp with Clamp, Eye-Caring Clip on Lights for Home Office, 3 Modes 10 Brightness, Long Flexible Goose-Neck, Metal, Swing...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61RJ3ZzSURL._AC_UL320_.jpg",
      "alt": "Voncerus LED Desk Lamp with Clamp, Eye-Caring Clip on Lights for Home Office, 3 Modes 10 Brightness, Long Flexible Goose-Neck, Metal, Swing...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BB5ZBT42"
  },
  {
    "name": "Univivi No Drill Under Desk Cable Management Tray, 36\" Cord Organizer for Table, Clamp/Screw Mount Desk Cable Management, Premium Fabric Ca...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ujmpvYlkL._AC_UL320_.jpg",
      "alt": "Univivi No Drill Under Desk Cable Management Tray, 36\" Cord Organizer for Table, Clamp/Screw Mount Desk Cable Management, Premium Fabric Ca...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DK13ZHNJ"
  },
  {
    "name": "LOVIMAG Fridge Magnets 12Pcs Refrigerator Whiteboard Small Strong Magnet Classroom Kitchen Accessories Decorative Locker Set Decor Must Hav...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71sDVu6cHKL._AC_UL320_.jpg",
      "alt": "LOVIMAG Fridge Magnets 12Pcs Refrigerator Whiteboard Small Strong Magnet Classroom Kitchen Accessories Decorative Locker Set Decor Must Hav...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRXLBBN1"
  },
  {
    "name": "Lamicall Cell Phone Stand, Desk Accessories - Clear Office Cell Phone Holder, Acrylic Phone Stand, Desktop, Acrylic Office Desk Decor Acces...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61cqKUkBTKL._AC_UL320_.jpg",
      "alt": "Lamicall Cell Phone Stand, Desk Accessories - Clear Office Cell Phone Holder, Acrylic Phone Stand, Desktop, Acrylic Office Desk Decor Acces...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BFWL7TKP"
  },
  {
    "name": "Jgstkcity Desk Clamp Power Strip USB C,40W Total Fast Charging Station,4 PD 20W USB C Ports,Desk Edge Mount Surge Protector,5 Outlets,Fit 1...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51LfO2+Kn9L._AC_UL320_.jpg",
      "alt": "Jgstkcity Desk Clamp Power Strip USB C,40W Total Fast Charging Station,4 PD 20W USB C Ports,Desk Edge Mount Surge Protector,5 Outlets,Fit 1...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BXP2ZTWB"
  },
  {
    "name": "Ddaowanx Gel Pens, 6 Pcs 0.5mm Quick Dry Black Ink Pens Fine Point Smooth Writing Pens, Cute Office School Supplies Gifts for Women",
    "category": "Home Office",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for home office shoppers who want cleaner desk flow, better video calls, less cable clutter, or a more comfortable work setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Office shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Remote Den lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk dimensions, monitor/laptop compatibility, weight limits, adjustability, and ergonomic fit before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61mcgT64xQL._AC_UL320_.jpg",
      "alt": "Ddaowanx Gel Pens, 6 Pcs 0.5mm Quick Dry Black Ink Pens Fine Point Smooth Writing Pens, Cute Office School Supplies Gifts for Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9W8DD9S"
  }
];

export function getRemoteDenCatalog(
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
