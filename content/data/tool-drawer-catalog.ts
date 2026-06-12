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
    "name": "DEKOPRO 228 Piece Socket Wrench Auto Repair Tool Combination Package Mixed Tool Set Hand Tool Kit with Plastic Toolbox Storage Case",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71PexuvCDNL._AC_UL320_.jpg",
      "alt": "DEKOPRO 228 Piece Socket Wrench Auto Repair Tool Combination Package Mixed Tool Set Hand Tool Kit with Plastic Toolbox Storage Case",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0723914V1"
  },
  {
    "name": "CRAFTSMAN 57 Piece Mechanics Tool Set Home Tool Set, Sockets, Ratchet, Screwdrivers, Hammer, Pliers, Hex Keys, Specialty Bits Hand Tools (C...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81tWR8sNgzL._AC_UL320_.jpg",
      "alt": "CRAFTSMAN 57 Piece Mechanics Tool Set Home Tool Set, Sockets, Ratchet, Screwdrivers, Hammer, Pliers, Hex Keys, Specialty Bits Hand Tools (C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2PN4785"
  },
  {
    "name": "Amazon Basics 142-Piece Household Tool Kit for Home Repair, Hand Tools with Storage Case, 13.39 x 9.25 x 2.95 inch, Turquoise",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81e2XwflIoL._AC_UL320_.jpg",
      "alt": "Amazon Basics 142-Piece Household Tool Kit for Home Repair, Hand Tools with Storage Case, 13.39 x 9.25 x 2.95 inch, Turquoise",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08KTV3VB8"
  },
  {
    "name": "CRAFTSMAN 102-Piece Tool Kit for Home and Car, Durable Hand Tools Set with SAE and Metric Socket Set, Screwdrivers, Wrench, Hammer, Pliers,...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81wVSAJPsoL._AC_UL320_.jpg",
      "alt": "CRAFTSMAN 102-Piece Tool Kit for Home and Car, Durable Hand Tools Set with SAE and Metric Socket Set, Screwdrivers, Wrench, Hammer, Pliers,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CYFJL7QR"
  },
  {
    "name": "DEKOPRO Tool Set：Tool Kit with 8V Cordless Drill,Tool Box with Drill,Hand Drill Set for Men & Women,Home Tool Kits for House Repair,Handyma...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719ZN5pPeWL._AC_UL320_.jpg",
      "alt": "DEKOPRO Tool Set：Tool Kit with 8V Cordless Drill,Tool Box with Drill,Hand Drill Set for Men & Women,Home Tool Kits for House Repair,Handyma...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2VRS76D"
  },
  {
    "name": "KingTool 325 Piece Home Repair Tool Kit, General Home/Auto Repair Tool Set, Toolbox Storage Case with Drawer, General Household Tool Kit -...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/711pTh86caS._AC_UL320_.jpg",
      "alt": "KingTool 325 Piece Home Repair Tool Kit, General Home/Auto Repair Tool Set, Toolbox Storage Case with Drawer, General Household Tool Kit -...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08VWCZ9H8"
  },
  {
    "name": "OLIXIS 330-Piece Home Repair Tool Kit with Pull-Out Drawer, Carbon & Cr-V Steel Tool Box for Home, Complete Homeowners Tool Kit for DIY & A...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71j+Fk7AmmL._AC_UL320_.jpg",
      "alt": "OLIXIS 330-Piece Home Repair Tool Kit with Pull-Out Drawer, Carbon & Cr-V Steel Tool Box for Home, Complete Homeowners Tool Kit for DIY & A...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GZ4YTKMX"
  },
  {
    "name": "CARTMAN 39 Piece Tool Set General Household Hand Kit with Plastic Toolbox Storage Case Orange",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81aQ8A8IRzL._AC_UL320_.jpg",
      "alt": "CARTMAN 39 Piece Tool Set General Household Hand Kit with Plastic Toolbox Storage Case Orange",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00RF9J8DY"
  },
  {
    "name": "KingTool 276-Piece Tool Set Kit - Tool kit with 12V Cordless Power Drill Driver Toolbox Storage Case with Drawer, Drill Set Perfect for Hom...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71UtiDpvjtL._AC_UL320_.jpg",
      "alt": "KingTool 276-Piece Tool Set Kit - Tool kit with 12V Cordless Power Drill Driver Toolbox Storage Case with Drawer, Drill Set Perfect for Hom...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7HC5DZQ"
  },
  {
    "name": "DEKOPRO Drill Set: Tool Set with 8V Red Cordless Drill, Home Tool Kit with Drill, Hand Tool Kits for Women 126 Piece",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81qSxwKLUbL._AC_UL320_.jpg",
      "alt": "DEKOPRO Drill Set: Tool Set with 8V Red Cordless Drill, Home Tool Kit with Drill, Hand Tool Kits for Women 126 Piece",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZNRT9ZH"
  },
  {
    "name": "151PC DEKO Household Tool Set with 12V Cordless Drill Driver, Home Repair Kit Includes Hammer, Adjustable Wrench, Pliers, Screwdrivers & Dr...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81qq91IKxgL._AC_UL320_.jpg",
      "alt": "151PC DEKO Household Tool Set with 12V Cordless Drill Driver, Home Repair Kit Includes Hammer, Adjustable Wrench, Pliers, Screwdrivers & Dr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0H1MSRLM9"
  },
  {
    "name": "Amazon Basics 65 Piece Home Repair Tool Kit Set With Carrying Bag, Hand Tools, Socket Set, SAE and Metric, Silver, Black",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61+G3urcMgL._AC_UL320_.jpg",
      "alt": "Amazon Basics 65 Piece Home Repair Tool Kit Set With Carrying Bag, Hand Tools, Socket Set, SAE and Metric, Silver, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01GUDO4Z2"
  },
  {
    "name": "Amazon Basics 173-Piece General Household Hand Tool Set with Storage Case, Portable Tool Kit for Home Maintenance and Everyday Repairs",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71pPQze7jxL._AC_UL320_.jpg",
      "alt": "Amazon Basics 173-Piece General Household Hand Tool Set with Storage Case, Portable Tool Kit for Home Maintenance and Everyday Repairs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07V3TD5Q7"
  },
  {
    "name": "Upgraded 180 Piece Tool Set, Tool Kit with 8V Cordless Drill Set, General Household Hand Drill Kit for Men and Women, Plastic Storage Toolb...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/715fyTJbNGL._AC_UL320_.jpg",
      "alt": "Upgraded 180 Piece Tool Set, Tool Kit with 8V Cordless Drill Set, General Household Hand Drill Kit for Men and Women, Plastic Storage Toolb...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F1D1H36Y"
  },
  {
    "name": "DEKOPRO Drill Set, Home Tool Set with 8V Pink Cordless Drill, Hand Tool Kit for Women, 126 pcs",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71At+v9whNL._AC_UL320_.jpg",
      "alt": "DEKOPRO Drill Set, Home Tool Set with 8V Pink Cordless Drill, Hand Tool Kit for Women, 126 pcs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BXC81MFC"
  },
  {
    "name": "Sundpey Home Tool Kit 148-Pcs - Household Basic portable Hand Repair Tool Set with Case & Ratcheting Screwdriver & Hex Key & Pliers & Wrenc...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71-mDqOwJLL._AC_UL320_.jpg",
      "alt": "Sundpey Home Tool Kit 148-Pcs - Household Basic portable Hand Repair Tool Set with Case & Ratcheting Screwdriver & Hex Key & Pliers & Wrenc...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09P3FTB6Y"
  },
  {
    "name": "DEWALT 20V MAX Cordless Drill and Impact Driver, Power Tool Combo Kit , Includes 2 Batteries, Charger and Bag (DCK240C2)",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81XPDrUh9sL._AC_UL320_.jpg",
      "alt": "DEWALT 20V MAX Cordless Drill and Impact Driver, Power Tool Combo Kit , Includes 2 Batteries, Charger and Bag (DCK240C2)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00IJ0ALYS"
  },
  {
    "name": "328 Piece Tool Kit for Home,Hand Repair Tool Set,Toolbox Storage Case with Drawer,General Household/Auto Tool Kit,Perfect for Homeowner, DI...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/816dDdm4NwL._AC_UL320_.jpg",
      "alt": "328 Piece Tool Kit for Home,Hand Repair Tool Set,Toolbox Storage Case with Drawer,General Household/Auto Tool Kit,Perfect for Homeowner, DI...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FQ64HCPQ"
  },
  {
    "name": "Prostormer 259-Piece Tool Kit, General Household Hand Tool Set with Plastic Storage Toolbox, Portable Complete Repair Tool Box for Home and...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713FaO78oBL._AC_UL320_.jpg",
      "alt": "Prostormer 259-Piece Tool Kit, General Household Hand Tool Set with Plastic Storage Toolbox, Portable Complete Repair Tool Box for Home and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07JYZVPKP"
  },
  {
    "name": "Amazon Basics 131-Piece General Household Hand Tool Set with Storage Case for Home Repair, Portable",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71MX2frU8VL._AC_UL320_.jpg",
      "alt": "Amazon Basics 131-Piece General Household Hand Tool Set with Storage Case for Home Repair, Portable",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07V4TFJC9"
  },
  {
    "name": "Tool Set - 8V Cordless Drill Set, 132 Piece Home Tool Set With Hand Drill, Tool Kit for Women & Men, Perfect for Homeowner, Diyer, Handyman",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81S+WnJK6-L._AC_UL320_.jpg",
      "alt": "Tool Set - 8V Cordless Drill Set, 132 Piece Home Tool Set With Hand Drill, Tool Kit for Women & Men, Perfect for Homeowner, Diyer, Handyman",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DHP8WXMF"
  },
  {
    "name": "TOPLINE 467-Piece Household Home Tool Sets for Mechanics, 16-Inch Tool Bag with Heavy Duty Home Tool Kit Included, Tool Sets for Men, Tool...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/819ByX0NYmL._AC_UL320_.jpg",
      "alt": "TOPLINE 467-Piece Household Home Tool Sets for Mechanics, 16-Inch Tool Bag with Heavy Duty Home Tool Kit Included, Tool Sets for Men, Tool...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08XPBR9JD"
  },
  {
    "name": "GRENPRO 239PCS Tool Set Tool Kit For Home, Basic Household Automotive Motorcycle Car Tool Kits, Portable Plastic Mechanics Tools Boxes Sets...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81BAP+91kgL._AC_UL320_.jpg",
      "alt": "GRENPRO 239PCS Tool Set Tool Kit For Home, Basic Household Automotive Motorcycle Car Tool Kits, Portable Plastic Mechanics Tools Boxes Sets...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FN7P4J21"
  },
  {
    "name": "CRAFTSMAN 230 Pcs Mechanics Tool Set, Socket Wrench Set, Car Tool Kit with VERSASTACK Toolbox, SAE and Metric,1/4 in, 3/8 in, and 1/2 Drive...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81qJzb4m3bL._AC_UL320_.jpg",
      "alt": "CRAFTSMAN 230 Pcs Mechanics Tool Set, Socket Wrench Set, Car Tool Kit with VERSASTACK Toolbox, SAE and Metric,1/4 in, 3/8 in, and 1/2 Drive...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMJF6DYD"
  },
  {
    "name": "WINNER 156-Piece Delicate All-Purpose Home Tool Kit in Foldable Toolbox, Unisex | Complete and Essential Hand Tools Set for General House R...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71UWJRcuqbL._AC_UL320_.jpg",
      "alt": "WINNER 156-Piece Delicate All-Purpose Home Tool Kit in Foldable Toolbox, Unisex | Complete and Essential Hand Tools Set for General House R...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FPDPVGB7"
  },
  {
    "name": "FASTPRO 220-Piece Home Tool Set, Household Repairing Tool Kit, with 12-Inch Wide Mouth Open Storage Tool Bag, Green",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81CTzspjH5L._AC_UL320_.jpg",
      "alt": "FASTPRO 220-Piece Home Tool Set, Household Repairing Tool Kit, with 12-Inch Wide Mouth Open Storage Tool Bag, Green",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09N997YWY"
  },
  {
    "name": "Cartman 148 Piece Automotive and Household Tool Set Perfect for Car Enthusiasts and DIY Home Repairs",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91JQZ+jOi4L._AC_UL320_.jpg",
      "alt": "Cartman 148 Piece Automotive and Household Tool Set Perfect for Car Enthusiasts and DIY Home Repairs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01NCJTSW7"
  },
  {
    "name": "DEWALT 20V Max Cordless Drill Driver Set, 2 Speed, High Performance Motor, Includes 2 XR 1.3Ah Li-Ion Batteries, Charger and Contractor Bag...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for home repair shoppers who want faster small fixes, cleaner tool storage, better measuring, or a starter kit that covers real home annoyances.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Repair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Tool Drawer lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use tools safely, wear protective gear, follow instructions, and hire a professional for electrical, plumbing, or structural work.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81dmm7FomNL._AC_UL320_.jpg",
      "alt": "DEWALT 20V Max Cordless Drill Driver Set, 2 Speed, High Performance Motor, Includes 2 XR 1.3Ah Li-Ion Batteries, Charger and Contractor Bag...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00ET5VMTU"
  }
];

export function getToolDrawerCatalog(
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
