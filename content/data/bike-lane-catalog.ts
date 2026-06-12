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
    "name": "AstroAI L7 Tire Inflator Portable Air Compressor, 150 PSI Cordless Mini Air Bike Pump with Digital Dual Values Display, Lightning Fast Infl...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71JfTGoHzqL._AC_UL320_.jpg",
      "alt": "AstroAI L7 Tire Inflator Portable Air Compressor, 150 PSI Cordless Mini Air Bike Pump with Digital Dual Values Display, Lightning Fast Infl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CS3B7MD8"
  },
  {
    "name": "Lamicall Bike Phone Holder, Motorcycle Mount - Motorcycle Phone Holder, Handlebar Cell Phone Clamp, E-Bike Scooter Phone Clip for iPhone 17...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/711bZ97mpyL._AC_UL320_.jpg",
      "alt": "Lamicall Bike Phone Holder, Motorcycle Mount - Motorcycle Phone Holder, Handlebar Cell Phone Clamp, E-Bike Scooter Phone Clip for iPhone 17...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B085DMV7XD"
  },
  {
    "name": "ROCKBROS Bike/Bicycle Phone Front Frame Bag, Waterproof, Tube Bag,Cycling Pouch, Bike Accessories for Men Compatible Phone Under 7”",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/8189pErz+KL._AC_UL320_.jpg",
      "alt": "ROCKBROS Bike/Bicycle Phone Front Frame Bag, Waterproof, Tube Bag,Cycling Pouch, Bike Accessories for Men Compatible Phone Under 7”",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B079QKP848"
  },
  {
    "name": "LISEN Bike Phone Holder, [Super Easy Install] Motorcycle Phone Mount Ebike Accessories Bicycle Handlebar Holder Mount Gift for Adults Kids...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/716LElKeDlL._AC_UL320_.jpg",
      "alt": "LISEN Bike Phone Holder, [Super Easy Install] Motorcycle Phone Mount Ebike Accessories Bicycle Handlebar Holder Mount Gift for Adults Kids...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CJTGQVKC"
  },
  {
    "name": "WITTKOP Bike mirror | Large HD field of vision | 360° rotatable & foldable | Mounting above & below | Break-proof & durable | ebike accesso...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71sW9-SFFEL._AC_UL320_.jpg",
      "alt": "WITTKOP Bike mirror | Large HD field of vision | 360° rotatable & foldable | Mounting above & below | Break-proof & durable | ebike accesso...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CND6MSH9"
  },
  {
    "name": "ROCKBROS Bike Water Bottle Holder Ultra-Light Bicycle Bottle Cages with Screws Tool, Universal Bike Cup Holder Rack for Road MTB Bikes…",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61D-G0HWyGL._AC_UL320_.jpg",
      "alt": "ROCKBROS Bike Water Bottle Holder Ultra-Light Bicycle Bottle Cages with Screws Tool, Universal Bike Cup Holder Rack for Road MTB Bikes…",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B1J2Q5WD"
  },
  {
    "name": "8 Pack Bicycle Accessories, Bike Light Set USB Rechargeable, 1 Bike Water Bottle Holder, Bicycle Bag and 1 Bike Aluminum Bicycle Bell,Pump",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71BJVNf9ilL._AC_UL320_.jpg",
      "alt": "8 Pack Bicycle Accessories, Bike Light Set USB Rechargeable, 1 Bike Water Bottle Holder, Bicycle Bag and 1 Bike Aluminum Bicycle Bell,Pump",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08XZBBCGD"
  },
  {
    "name": "JXFUKAL Bike Bags for Bicycle Rear rack - 9.5L/17L/40L Hard Shell Waterproof Bike Ebike Trunk Pannier Saddle Seat Bag Carrier with Reflecto...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81wZjH7y7GL._AC_UL320_.jpg",
      "alt": "JXFUKAL Bike Bags for Bicycle Rear rack - 9.5L/17L/40L Hard Shell Waterproof Bike Ebike Trunk Pannier Saddle Seat Bag Carrier with Reflecto...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BYRMN21J"
  },
  {
    "name": "Victoper Bike Light, High Lumens Super Bright Bicycle Lite, 6+4 Modes USB Rechargeable Bike Headlight & Taillight Set, Waterproof Safety Bi...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Bd6qErUUL._AC_UL320_.jpg",
      "alt": "Victoper Bike Light, High Lumens Super Bright Bicycle Lite, 6+4 Modes USB Rechargeable Bike Headlight & Taillight Set, Waterproof Safety Bi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B4JCX6YN"
  },
  {
    "name": "Comfortable Seat Cushion for Men Women with Dual Shock Absorbing Ball Memory Foam Waterproof Wide Bicycle Saddle Fit for Road Bikes",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718gfD1kIwL._AC_UL320_.jpg",
      "alt": "Comfortable Seat Cushion for Men Women with Dual Shock Absorbing Ball Memory Foam Waterproof Wide Bicycle Saddle Fit for Road Bikes",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08HXQ96L5"
  },
  {
    "name": "WOTOW Bike Frame Storage Bag, Water Resistant Reflective Bicycle Triangle Bag with Two Side Pockets, Strap-On Under Seat Tool Accessories P...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71P0wq94D8L._AC_UL320_.jpg",
      "alt": "WOTOW Bike Frame Storage Bag, Water Resistant Reflective Bicycle Triangle Bag with Two Side Pockets, Strap-On Under Seat Tool Accessories P...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B083TG9F14"
  },
  {
    "name": "Bike Wheel Lights (2 Pack) - Waterproof LED Bicycle Spoke Tire Lights - Great Gift for Kids Adults - 30 Different Patterns Change - Bike Ac...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71hyOXNcW5L._AC_UL320_.jpg",
      "alt": "Bike Wheel Lights (2 Pack) - Waterproof LED Bicycle Spoke Tire Lights - Great Gift for Kids Adults - 30 Different Patterns Change - Bike Ac...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B087LVRMZV"
  },
  {
    "name": "Bicycle Repair Bag With Tire Pump, Portable Tool Kit for Camping Travel - Bike Glueless Patches, Maintenance Essentials All in One Safety Kit",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71MJCa8DlFL._AC_UL320_.jpg",
      "alt": "Bicycle Repair Bag With Tire Pump, Portable Tool Kit for Camping Travel - Bike Glueless Patches, Maintenance Essentials All in One Safety Kit",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B079K5N7KF"
  },
  {
    "name": "Bike Chain Lock, Heavy Duty Anti-Theft Bicycle Chain Lock, 2.72 Ft Security Bike Locks with 3 Keys, Waterproof Lock Chain for Bike, Bicycle...",
    "category": "Cycling",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61QuKqU5YwL._AC_UL320_.jpg",
      "alt": "Bike Chain Lock, Heavy Duty Anti-Theft Bicycle Chain Lock, 2.72 Ft Security Bike Locks with 3 Keys, Waterproof Lock Chain for Bike, Bicycle...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CG5R5T21"
  },
  {
    "name": "Accmor Classic Bike Bell, Aluminum Bicycle Bell, Loud Crisp Clear Sound Bicycle Bike Bell for Adults Kids",
    "category": "Cycling",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61IjMILLHOL._AC_UL320_.jpg",
      "alt": "Accmor Classic Bike Bell, Aluminum Bicycle Bell, Loud Crisp Clear Sound Bicycle Bike Bell for Adults Kids",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07DFF49R4"
  },
  {
    "name": "Lamicall Bike Frame Bag Waterproof - [1s Release] [2 in 1] Bike Phone Mount Holder, Bicycle Top Tube Bag, Cycling Pouch with Rain Cover, Bi...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71VKkKd2xtL._AC_UL320_.jpg",
      "alt": "Lamicall Bike Frame Bag Waterproof - [1s Release] [2 in 1] Bike Phone Mount Holder, Bicycle Top Tube Bag, Cycling Pouch with Rain Cover, Bi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D9GQMXBV"
  },
  {
    "name": "Bike Phone Holder Mount, Secure Handlebar Phone Mount Holder for Bike and Motorcycle, Suitable for iPhone and 4.5-6.8\" Smartphones, Black",
    "category": "Cycling",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61eq32vufZL._AC_UL320_.jpg",
      "alt": "Bike Phone Holder Mount, Secure Handlebar Phone Mount Holder for Bike and Motorcycle, Suitable for iPhone and 4.5-6.8\" Smartphones, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DH4PDJBL"
  },
  {
    "name": "Topcrown Bike Cover Waterproof Outdoor Storage for 1/2/3 Bikes, Bicycle Cover Rain Sun UV Dust Wind Proof with Storage Bag for Mountain Roa...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61UZuJEck4L._AC_UL320_.jpg",
      "alt": "Topcrown Bike Cover Waterproof Outdoor Storage for 1/2/3 Bikes, Bicycle Cover Rain Sun UV Dust Wind Proof with Storage Bag for Mountain Roa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8Y5F2V6"
  },
  {
    "name": "baleaf Men&#x27;s 3D Padded Bike Shorts Cycling Underwear MTB Liner",
    "category": "Cycling",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71DGvLSbmGL._AC_UL320_.jpg",
      "alt": "baleaf Men&#x27;s 3D Padded Bike Shorts Cycling Underwear MTB Liner",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00MTE6NEW"
  },
  {
    "name": "Ascher Ultra Bright USB Rechargeable Bike Light Set, Powerful Bicycle Front Headlight and Back Taillight, 4 Light Modes, Easy to Install fo...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71fZGZa7YrL._AC_UL320_.jpg",
      "alt": "Ascher Ultra Bright USB Rechargeable Bike Light Set, Powerful Bicycle Front Headlight and Back Taillight, 4 Light Modes, Easy to Install fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07FC9NRRR"
  },
  {
    "name": "Sttoraboks Vertical Bike Stand, Freestanding Bike Rack Garage Storage Upright Bicycle Floor Stand Indoor Bike Holder with Adjustable Height...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Xmq2PXa6L._AC_UL320_.jpg",
      "alt": "Sttoraboks Vertical Bike Stand, Freestanding Bike Rack Garage Storage Upright Bicycle Floor Stand Indoor Bike Holder with Adjustable Height...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CFR41Q94"
  },
  {
    "name": "Garmin Varia RTL515, Cycling Rearview Radar with Tail Light, Visual and Audible Alerts for Vehicles Up to 153 Yards Away - 010-02376-00",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41K-LhRcWlL._AC_UL320_.jpg",
      "alt": "Garmin Varia RTL515, Cycling Rearview Radar with Tail Light, Visual and Audible Alerts for Vehicles Up to 153 Yards Away - 010-02376-00",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B086TVFX1D"
  },
  {
    "name": "Onforu Portable Bluetooth Speaker for Bike, IP65 Waterproof Mini Outdoor Shower Travel Speakers, Bike Accessories Wireless Bicycle Speaker...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71MIoxHCA+L._AC_UL320_.jpg",
      "alt": "Onforu Portable Bluetooth Speaker for Bike, IP65 Waterproof Mini Outdoor Shower Travel Speakers, Bike Accessories Wireless Bicycle Speaker...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07N1DPZT8"
  },
  {
    "name": "CYCPLUS GPS Bike Computer, Wireless Cycling Computer with Automatic Backlight, Bicycle Speedometer Odometer with Waterproof and Lager Batte...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/618ohoWWjsL._AC_UL320_.jpg",
      "alt": "CYCPLUS GPS Bike Computer, Wireless Cycling Computer with Automatic Backlight, Bicycle Speedometer Odometer with Waterproof and Lager Batte...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08R75164S"
  },
  {
    "name": "Hestya 2 Pcs Bike Mirror 360 Degree Adjustable Safe Rotatable Handlebar Mirror Bicycle Accessories Shockproof Acrylic Convex for Mountain R...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71X9IT5ATkS._AC_UL320_.jpg",
      "alt": "Hestya 2 Pcs Bike Mirror 360 Degree Adjustable Safe Rotatable Handlebar Mirror Bicycle Accessories Shockproof Acrylic Convex for Mountain R...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B096527R6T"
  },
  {
    "name": "Accmor Stroller Cup Holder with Phone Holder, Bike Cup Holder, Universal Cup Holder for Uppababy Nuna Doona Strollers, 2-in-1 Cup Holder fo...",
    "category": "Cycling",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51LnqaPRVLL._AC_UL320_.jpg",
      "alt": "Accmor Stroller Cup Holder with Phone Holder, Bike Cup Holder, Universal Cup Holder for Uppababy Nuna Doona Strollers, 2-in-1 Cup Holder fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B086TZXKMJ"
  },
  {
    "name": "ROCKBROS Bike Seat Bag, Bicycle Saddle Bag Under Seat 3D Shell Cycling Seat Pack for Mountain Road Bikes Black",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61e5CdQvLIL._AC_UL320_.jpg",
      "alt": "ROCKBROS Bike Seat Bag, Bicycle Saddle Bag Under Seat 3D Shell Cycling Seat Pack for Mountain Road Bikes Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B075CZ1JVR"
  },
  {
    "name": "ROCKBROS Bike Bell Classic Bicycle Bell Mountain Bike Bells for Adults with Loud Sound and Fit for 0.87-1.25in/22.2-31.8mm Bicycle Handlebars",
    "category": "Cycling",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for cycling shoppers who want better visibility, easier repairs, safer locking, or a cleaner casual-ride setup.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cycling shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bike Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check bike compatibility, mounting size, local safety rules, lock ratings, and whether lights meet your riding conditions.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61aVICnJMzL._AC_UL320_.jpg",
      "alt": "ROCKBROS Bike Bell Classic Bicycle Bell Mountain Bike Bells for Adults with Loud Sound and Fit for 0.87-1.25in/22.2-31.8mm Bicycle Handlebars",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BY2ML8FK"
  }
];

export function getBikeLaneCatalog(
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
