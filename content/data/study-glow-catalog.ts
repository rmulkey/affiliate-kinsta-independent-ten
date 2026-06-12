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
    "name": "gianotter Desk Organizers and Accessories with File Holder, 4-Tier Desk Accessories & Workspace Organizers with Drawer and 2 Pen Holder, Pa...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iE5xG2+pL._AC_UL320_.jpg",
      "alt": "gianotter Desk Organizers and Accessories with File Holder, 4-Tier Desk Accessories & Workspace Organizers with Drawer and 2 Pen Holder, Pa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BWTT3WK1"
  },
  {
    "name": "gianotter Desk Organizers and Accessories, Monitor Stand with Drawer and 2 Pen Holder, Desktop Organizer Suitable for Offices and Dormitori...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/711rO4WnvOL._AC_UL320_.jpg",
      "alt": "gianotter Desk Organizers and Accessories, Monitor Stand with Drawer and 2 Pen Holder, Desktop Organizer Suitable for Offices and Dormitori...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CSFH1R36"
  },
  {
    "name": "Crpich Acrylic Cell Phone Stand, Portable Clear Phone Stand for Desk, Compatible with Phone16 15 14 13 Pro Max Mini 12 11 Plus SE, Switch,...",
    "category": "Study Desk",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61xq34OCYUL._AC_UL320_.jpg",
      "alt": "Crpich Acrylic Cell Phone Stand, Portable Clear Phone Stand for Desk, Compatible with Phone16 15 14 13 Pro Max Mini 12 11 Plus SE, Switch,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0949DWJCV"
  },
  {
    "name": "Marbrasse Pen Organizer with 2 Drawer, Multi-Functional Pencil Holder for Desk, Desk Organizers and Accessories with 5 Compartments + Drawe...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71B4FwZxCAL._AC_UL320_.jpg",
      "alt": "Marbrasse Pen Organizer with 2 Drawer, Multi-Functional Pencil Holder for Desk, Desk Organizers and Accessories with 5 Compartments + Drawe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BYMRJD7R"
  },
  {
    "name": "SKYDUE 360 Rotating Plastic Desk Pen Organizer with 5 Slots, Dual-Purpose Art Supply Pencil Cup for Office, School, Home",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61yhHuVQp4L._AC_UL320_.jpg",
      "alt": "SKYDUE 360 Rotating Plastic Desk Pen Organizer with 5 Slots, Dual-Purpose Art Supply Pencil Cup for Office, School, Home",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9ZHWC9K"
  },
  {
    "name": "YSAGi Leather Desk Protector, Office Mat, Large Mouse Mat, Non-Slip PU Leather Blotter, Laptop Pad, Waterproof Writing Pad for Office and H...",
    "category": "Study Desk",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61jQecz8NpL._AC_UL320_.jpg",
      "alt": "YSAGi Leather Desk Protector, Office Mat, Large Mouse Mat, Non-Slip PU Leather Blotter, Laptop Pad, Waterproof Writing Pad for Office and H...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGT9MQGP"
  },
  {
    "name": "OPNICE Desk Organizer and Accessories, 2-Tier Computer Monitor Stand Riser with Drawer and 2 Pen Holders, Laptop Stand, Office Desk Accesso...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81MeUftFm8L._AC_UL320_.jpg",
      "alt": "OPNICE Desk Organizer and Accessories, 2-Tier Computer Monitor Stand Riser with Drawer and 2 Pen Holders, Laptop Stand, Office Desk Accesso...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DB8F7GDN"
  },
  {
    "name": "MDOZQ Office Desk Accessories 2pcs Computer Monitor Memo Board Message Board Supplies for Women Men Sticky Note Holder Home Desktop Decor",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61yjorGIhAL._AC_UL320_.jpg",
      "alt": "MDOZQ Office Desk Accessories 2pcs Computer Monitor Memo Board Message Board Supplies for Women Men Sticky Note Holder Home Desktop Decor",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRMX3SWH"
  },
  {
    "name": "MOSISO Wrist Rest Support for Mouse Pad&Keyboard Set, Circle Curved Ergonomic Mousepad&Coaster Non-Slip Base Home/Office Pain Relief&Easy T...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/515G2Wi323L._AC_UL320_.jpg",
      "alt": "MOSISO Wrist Rest Support for Mouse Pad&Keyboard Set, Circle Curved Ergonomic Mousepad&Coaster Non-Slip Base Home/Office Pain Relief&Easy T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DCVVZ6CT"
  },
  {
    "name": "Lamicall Pink Phone Holder, Desk Accessories - Rose Gold Pink Office Cell Phone Holder, Desktop, Office Desks Accessories, Desk Decor Gifts...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ONJnu3D9L._AC_UL320_.jpg",
      "alt": "Lamicall Pink Phone Holder, Desk Accessories - Rose Gold Pink Office Cell Phone Holder, Desktop, Office Desks Accessories, Desk Decor Gifts...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B2J1QNBX"
  },
  {
    "name": "TSJ OFFICE Small Desktop Whiteboard -Glass Dry Erase Board Computer Keyboard Stand White Board Surface Pad with Drawer, Desk Organizers wit...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61BePy39eeL._AC_UL320_.jpg",
      "alt": "TSJ OFFICE Small Desktop Whiteboard -Glass Dry Erase Board Computer Keyboard Stand White Board Surface Pad with Drawer, Desk Organizers wit...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B089NL8QMN"
  },
  {
    "name": "COMFYROOM Desk Organizer with 6 Compartments and 2 Drawers, Plastic Makeup Organizer, Pen Holder for Desktop Storage, Desk Organization for...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ii+XVBJ8L._AC_UL320_.jpg",
      "alt": "COMFYROOM Desk Organizer with 6 Compartments and 2 Drawers, Plastic Makeup Organizer, Pen Holder for Desktop Storage, Desk Organization for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C2ZBBPY9"
  },
  {
    "name": "One Beat Small LED Desk Lamp Power Strip 5ft Extension Cord with 3 Outlets 4 USB Ports(2 USB C), 4 Modes, 5 Level Touch Lamp Study Reading...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ndeyWcaHL._AC_UL320_.jpg",
      "alt": "One Beat Small LED Desk Lamp Power Strip 5ft Extension Cord with 3 Outlets 4 USB Ports(2 USB C), 4 Modes, 5 Level Touch Lamp Study Reading...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CRY97FPB"
  },
  {
    "name": "Lamicall 8 Pack Cord Organizer, [1s Lock] Spring Cable Management Clips - Adhesive Phone Cord Holder Clips for Nightstand Desk Car Office H...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uQ8L3QzHL._AC_UL320_.jpg",
      "alt": "Lamicall 8 Pack Cord Organizer, [1s Lock] Spring Cable Management Clips - Adhesive Phone Cord Holder Clips for Nightstand Desk Car Office H...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DBVCL44N"
  },
  {
    "name": "2-Tier Desk Shelf, Expandable Under Desk Storage, Clamp on Desk Shelf, Desktop Accessories for Offices, Study Rooms, and Game Rooms (Wood)",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71rR83kwsEL._AC_UL320_.jpg",
      "alt": "2-Tier Desk Shelf, Expandable Under Desk Storage, Clamp on Desk Shelf, Desktop Accessories for Offices, Study Rooms, and Game Rooms (Wood)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F4R8MPQP"
  },
  {
    "name": "LED Desk Lamp with USB Ports,Touch Desk Lamps for Home Office with 5 Color Modes,3 Brightness Desk Light with Small Night Light,Reading Lam...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61po0IyEmOL._AC_UL320_.jpg",
      "alt": "LED Desk Lamp with USB Ports,Touch Desk Lamps for Home Office with 5 Color Modes,3 Brightness Desk Light with Small Night Light,Reading Lam...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08923SXXP"
  },
  {
    "name": "TROND Desk Clamp Power Strip USB C PD 20W- Surge Protector with 4 AC Outlets 4 USB Ports, Flat Plug 6ft Extension Cord, 1700J, ETL Listed,...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61FSg-yMU2L._AC_UL320_.jpg",
      "alt": "TROND Desk Clamp Power Strip USB C PD 20W- Surge Protector with 4 AC Outlets 4 USB Ports, Flat Plug 6ft Extension Cord, 1700J, ETL Listed,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DCK9ZCDF"
  },
  {
    "name": "Lamicall Cell Phone Stand, Desk Accessories - Clear Office Cell Phone Holder, Acrylic Phone Stand, Desktop, Acrylic Office Desk Decor Acces...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61cqKUkBTKL._AC_UL320_.jpg",
      "alt": "Lamicall Cell Phone Stand, Desk Accessories - Clear Office Cell Phone Holder, Acrylic Phone Stand, Desktop, Acrylic Office Desk Decor Acces...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BFWL7TKP"
  },
  {
    "name": "SKYDUE Pink Desk Accessories 10Pcs, Rotating Pen Holder for Desk, Stapler, Staple Remover, Tape Dispenser,2pcs Tape Refills, Binder Paper C...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71lRLSlvgOL._AC_UL320_.jpg",
      "alt": "SKYDUE Pink Desk Accessories 10Pcs, Rotating Pen Holder for Desk, Stapler, Staple Remover, Tape Dispenser,2pcs Tape Refills, Binder Paper C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DHXDDQK3"
  },
  {
    "name": "SUPERDANNY Eye-Caring LED Desk Lamp 360° Flexible Gooseneck Work Lamp with Desk Side Clamp Touch Control 3 Light Colors Smooth Dimming Task...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71YudVkqw1L._AC_UL320_.jpg",
      "alt": "SUPERDANNY Eye-Caring LED Desk Lamp 360° Flexible Gooseneck Work Lamp with Desk Side Clamp Touch Control 3 Light Colors Smooth Dimming Task...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D1QY8PL6"
  },
  {
    "name": "LISEN for iPad Stand Holder Adjustable Tablet Stand for Desk, 2026 Kids for iPad Accessories Rotating Display Stand PC Office Accessories f...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718d7IFXzBL._AC_UL320_.jpg",
      "alt": "LISEN for iPad Stand Holder Adjustable Tablet Stand for Desk, 2026 Kids for iPad Accessories Rotating Display Stand PC Office Accessories f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CST4CYVH"
  },
  {
    "name": "R RUCKERCO Led Desk Lamp Dimmable Desk Light Reading Lamp 3 Lighting Modes, Eye Protection Accessories, Study Desk Lamp Equipped USB Charge...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71fJyc-FZ3L._AC_UL320_.jpg",
      "alt": "R RUCKERCO Led Desk Lamp Dimmable Desk Light Reading Lamp 3 Lighting Modes, Eye Protection Accessories, Study Desk Lamp Equipped USB Charge...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CNZS9RRB"
  },
  {
    "name": "LXEVIHK 21Pcs Pink Desk Organizers and Accessories With Mesh Desk Organizer and 360°Rotating Pen Holder and a Lot of Office Pink Office Sup...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81oRpDVr3zL._AC_UL320_.jpg",
      "alt": "LXEVIHK 21Pcs Pink Desk Organizers and Accessories With Mesh Desk Organizer and 360°Rotating Pen Holder and a Lot of Office Pink Office Sup...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F228XCZD"
  },
  {
    "name": "OPNICE Desk Organizer, 4-Tier Desktop File Organizer with Drawer and 2 Pen Holders, Office Desk Accessories, File Sorters, Workspace Organi...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81CYxEUhq-L._AC_UL320_.jpg",
      "alt": "OPNICE Desk Organizer, 4-Tier Desktop File Organizer with Drawer and 2 Pen Holders, Office Desk Accessories, File Sorters, Workspace Organi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BYDGF8DT"
  },
  {
    "name": "Magnetic Cable Clips, Adjustable Cord Holder Management, Adhesive Wire Keeper Organizer for Home Office Desk Phone PC Car Wall Desktop Nigh...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71J9ySQH7UL._AC_UL320_.jpg",
      "alt": "Magnetic Cable Clips, Adjustable Cord Holder Management, Adhesive Wire Keeper Organizer for Home Office Desk Phone PC Car Wall Desktop Nigh...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DD7BF3XG"
  },
  {
    "name": "Der Rose Set of 2 Succulents Plants Artificial Mini Fake Succulents Plants Graduation Gifts Office Desk Accessories for Women Pink Home Van...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81RwHqGeIEL._AC_UL320_.jpg",
      "alt": "Der Rose Set of 2 Succulents Plants Artificial Mini Fake Succulents Plants Graduation Gifts Office Desk Accessories for Women Pink Home Van...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZP1F6J5"
  },
  {
    "name": "BlissTrends Foot Rest for Under Desk at Work-Versatile Foot Stool with Washable Cover-Comfortable Footrest with 2 Adjustable Heights for Ca...",
    "category": "Study Desk",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81x+otHOTeL._AC_UL320_.jpg",
      "alt": "BlissTrends Foot Rest for Under Desk at Work-Versatile Foot Stool with Washable Cover-Comfortable Footrest with 2 Adjustable Heights for Ca...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BFQX3YFY"
  },
  {
    "name": "OMOTON Adjustable Tablet Stand for Desk, Upgraded Longer Arms for Greater Stability, T2 Tablet Holder with Hollow Design for Bigger Sized P...",
    "category": "Study Desk",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for study desk shoppers who want better lighting, cleaner notes, tidier cables, or a desk that makes starting easier.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Study Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Study Glow lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk size, lamp brightness, power needs, school rules, and ergonomics before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kPTwv71QL._AC_UL320_.jpg",
      "alt": "OMOTON Adjustable Tablet Stand for Desk, Upgraded Longer Arms for Greater Stability, T2 Tablet Holder with Hollow Design for Bigger Sized P...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08LYSTZV9"
  }
];

export function getStudyGlowCatalog(
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
