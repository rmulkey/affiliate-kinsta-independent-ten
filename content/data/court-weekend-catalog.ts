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
    "name": "JoncAye Pickleball Paddles Set of 4 or 2, USAPA Approved Fiberglass Rackets with Outdoor Indoor Balls, Bag, Overgrip, Lightweight for Famil...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81BhryHXmjL._AC_UL320_.jpg",
      "alt": "JoncAye Pickleball Paddles Set of 4 or 2, USAPA Approved Fiberglass Rackets with Outdoor Indoor Balls, Bag, Overgrip, Lightweight for Famil...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09C88QVHL"
  },
  {
    "name": "Dulce DOM Pickleball Paddles Set of 2/4 - USAPA Approved, 4 Indoor Outdoor Pickleball Balls, Fiberglass Surface Paddle Racket with Cover Ba...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81XvBmcGjyL._AC_UL320_.jpg",
      "alt": "Dulce DOM Pickleball Paddles Set of 2/4 - USAPA Approved, 4 Indoor Outdoor Pickleball Balls, Fiberglass Surface Paddle Racket with Cover Ba...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRMXW2WW"
  },
  {
    "name": "Pickleball Paddles Set of 2 or 4, or Single Paddle – USAPA Approved Fiberglass Surface Pickleball Rackets Set for Men & Women",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/817bcNLqMLL._AC_UL320_.jpg",
      "alt": "Pickleball Paddles Set of 2 or 4, or Single Paddle – USAPA Approved Fiberglass Surface Pickleball Rackets Set for Men & Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BYV7P9X7"
  },
  {
    "name": "Mangrove Pickleball Bag, Men&#x27;s & Women&#x27;s Pickleball Backpack, Adjustable Sling Bag w/Fence Hook/Large Capacity/Safety Pocket",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kO0v-eAeL._AC_UL320_.jpg",
      "alt": "Mangrove Pickleball Bag, Men&#x27;s & Women&#x27;s Pickleball Backpack, Adjustable Sling Bag w/Fence Hook/Large Capacity/Safety Pocket",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0972GTS8W"
  },
  {
    "name": "Sucipi Pickleball Bags for Women Lightweight Crossbody and Stylish Quilted Pickleball Paddle Sling Bag Backpack",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71aYpdmpALL._AC_UL320_.jpg",
      "alt": "Sucipi Pickleball Bags for Women Lightweight Crossbody and Stylish Quilted Pickleball Paddle Sling Bag Backpack",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F28Q1J6L"
  },
  {
    "name": "Paddle Reset - Pickleball Paddle Cleaner - Strips Impacted Residue and Increases Spin and Control",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51z+Vvsa9fL._AC_UL320_.jpg",
      "alt": "Paddle Reset - Pickleball Paddle Cleaner - Strips Impacted Residue and Increases Spin and Control",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CRQQKTLY"
  },
  {
    "name": "Movker Pickleball Tote Bag for Women Men with Paddle Cover Pocket External Ball Bag and Adjustable Shoulder Strap Fence Hook",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61nH95xBZPL._AC_UL320_.jpg",
      "alt": "Movker Pickleball Tote Bag for Women Men with Paddle Cover Pocket External Ball Bag and Adjustable Shoulder Strap Fence Hook",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DNDGWN1G"
  },
  {
    "name": "Lovepop Birthday Pop-Up Card for Her, Him, Women, Men - 3D Humor Greeting Cards 5\" x 7\" - Pickleball Real Baller - Blank Notecard & Envelop...",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Wm0hDvNGL._AC_UL320_.jpg",
      "alt": "Lovepop Birthday Pop-Up Card for Her, Him, Women, Men - 3D Humor Greeting Cards 5\" x 7\" - Pickleball Real Baller - Blank Notecard & Envelop...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D1KC6BGQ"
  },
  {
    "name": "Pickleball Gifts for Women Men, Pickleball Accessories, Lavender Scented Candle - Funny Gifts Pickleball for Lovers, Players, Fans, Sports",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61hVHimtXqL._AC_UL320_.jpg",
      "alt": "Pickleball Gifts for Women Men, Pickleball Accessories, Lavender Scented Candle - Funny Gifts Pickleball for Lovers, Players, Fans, Sports",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FBGMQW5Q"
  },
  {
    "name": "Pickleball Ball Retriever 2 Pack, Picks Up Easily Without Bending Down, Protects Your Back, Fits Any Standard Paddles, Elastic and Durable,...",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Lu5mALVZL._AC_UL320_.jpg",
      "alt": "Pickleball Ball Retriever 2 Pack, Picks Up Easily Without Bending Down, Protects Your Back, Fits Any Standard Paddles, Elastic and Durable,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09XVGR5ZJ"
  },
  {
    "name": "Franklin Sports X-40 Outdoor Pickleballs - Official Ball of USA Pickleball, APP Tour + US Open - Regulation Size",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61v3jWr-AlL._AC_UL320_.jpg",
      "alt": "Franklin Sports X-40 Outdoor Pickleballs - Official Ball of USA Pickleball, APP Tour + US Open - Regulation Size",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B06XTW1BND"
  },
  {
    "name": "Professor Pickleball - Carbon Cleaner, Premium Pickleball Paddle Eraser for Raw Carbon Fiber Paddles, Effortless Residue Removal, Quick & E...",
    "category": "Court Gear",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/814dKhA-GeL._AC_UL320_.jpg",
      "alt": "Professor Pickleball - Carbon Cleaner, Premium Pickleball Paddle Eraser for Raw Carbon Fiber Paddles, Effortless Residue Removal, Quick & E...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CJSK2D21"
  },
  {
    "name": "Pickleball Set with 4 Premium Wood Paddles, Cushion Comfort Grip, 4 Cooling Towels, 4 Pickleball Balls & Carry Bag, Pickle Ball Paddle for...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71G6mxoJPdL._AC_UL320_.jpg",
      "alt": "Pickleball Set with 4 Premium Wood Paddles, Cushion Comfort Grip, 4 Cooling Towels, 4 Pickleball Balls & Carry Bag, Pickle Ball Paddle for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRD7RZYH"
  },
  {
    "name": "YACO STORE Pickleball Gifts, Funny Pickle Doll for Men Women",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61G4I8JqfiL._AC_UL320_.jpg",
      "alt": "YACO STORE Pickleball Gifts, Funny Pickle Doll for Men Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FD9PWSMP"
  },
  {
    "name": "KAVIGOR Pickleball Sling Bag, Convertible Ultra-Light Backpack with Skin-Soft Fabric & Wet/Dry Pocket, Fits 4 Paddles + Gear",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71UFXCXU+kL._AC_UL320_.jpg",
      "alt": "KAVIGOR Pickleball Sling Bag, Convertible Ultra-Light Backpack with Skin-Soft Fabric & Wet/Dry Pocket, Fits 4 Paddles + Gear",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FFCMH2CF"
  },
  {
    "name": "2PCS Pickleball Paddle Eraser, Carbon Cleaner, Quick & Effective Pickleball Accessories to Remove Ball Residue, Dirt and Scratches",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81zE+RWnjUL._AC_UL320_.jpg",
      "alt": "2PCS Pickleball Paddle Eraser, Carbon Cleaner, Quick & Effective Pickleball Accessories to Remove Ball Residue, Dirt and Scratches",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4TY5G7Y"
  },
  {
    "name": "Fun Pickleball Tennis Socks For Women, Funny Gift For Women, One Size",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51JFo2Fh-sL._AC_UL320_.jpg",
      "alt": "Fun Pickleball Tennis Socks For Women, Funny Gift For Women, One Size",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FR2TYKNG"
  },
  {
    "name": "sportsnew Pickleball Bag Large Sports Pickleball Backpack with Shoe Compartment for Men Women, Patent Pending",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71pTYlGG6gL._AC_UL320_.jpg",
      "alt": "sportsnew Pickleball Bag Large Sports Pickleball Backpack with Shoe Compartment for Men Women, Patent Pending",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FB8QR3HZ"
  },
  {
    "name": "Pickleball Paddles Set of 2/4- USAPA Approved Graphite/Fiberglass Pickleball Racket, 2 Pickleball Rackets, 4 Balls and 1 Portable Carry Bag...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81PlKdEzu2L._AC_UL320_.jpg",
      "alt": "Pickleball Paddles Set of 2/4- USAPA Approved Graphite/Fiberglass Pickleball Racket, 2 Pickleball Rackets, 4 Balls and 1 Portable Carry Bag...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C99SJJLH"
  },
  {
    "name": "TENVINA Pickleball Paddles, Multi-Layer T700SC Textured Carbon Fiber Pickleball Paddle, Pickle Ball Paddle with Strong Spin & Power Surface...",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61SE6MTrATL._AC_UL320_.jpg",
      "alt": "TENVINA Pickleball Paddles, Multi-Layer T700SC Textured Carbon Fiber Pickleball Paddle, Pickle Ball Paddle with Strong Spin & Power Surface...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F6XSV7XB"
  },
  {
    "name": "Skechers Women&#x27;s 3-pack Performance Pickleball Low Cut Socks, Odor Control & Mesh Ventilation",
    "category": "Court Gear",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71hc1JEnZGL._AC_UL320_.jpg",
      "alt": "Skechers Women&#x27;s 3-pack Performance Pickleball Low Cut Socks, Odor Control & Mesh Ventilation",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FCXYFGJQ"
  },
  {
    "name": "Pickleball Bags, 30L Deluxe Waterproof Pickleball Backpack with Shoe Compartment for Men Women Pickle Ball Gift Accessories for Pickball Lo...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71NQ4uRlH+L._AC_UL320_.jpg",
      "alt": "Pickleball Bags, 30L Deluxe Waterproof Pickleball Backpack with Shoe Compartment for Men Women Pickle Ball Gift Accessories for Pickball Lo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FWR75LMG"
  },
  {
    "name": "Pickleball Paddles Set of 2 or 4, or Single Paddle – USAPA Approved Fiberglass Surface Pickleball Rackets Set for Men & Women",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Zb8DsvliL._AC_UL320_.jpg",
      "alt": "Pickleball Paddles Set of 2 or 4, or Single Paddle – USAPA Approved Fiberglass Surface Pickleball Rackets Set for Men & Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CHBBRRN2"
  },
  {
    "name": "Pickleball Art for Men Women Pickleball Player Pickle Ball T-Shirt",
    "category": "Court Gear",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71UIFGYNY0L._AC_UL320_.jpg",
      "alt": "Pickleball Art for Men Women Pickleball Player Pickle Ball T-Shirt",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F83RHRBV"
  },
  {
    "name": "Super Fly Goods Sweatbands Pickleball Golf Tennis Great Gift or for Your Sports or Team Wristband Sports Band Set Including Towel Wrist and...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71fSpavXoYL._AC_UL320_.jpg",
      "alt": "Super Fly Goods Sweatbands Pickleball Golf Tennis Great Gift or for Your Sports or Team Wristband Sports Band Set Including Towel Wrist and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BM512JWR"
  },
  {
    "name": "Lavley Funny Pickleball Socks for Adults - Pickleball Gifts for Men, Women, and Teens - One Size Fits Most",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91GEoZu6ahL._AC_UL320_.jpg",
      "alt": "Lavley Funny Pickleball Socks for Adults - Pickleball Gifts for Men, Women, and Teens - One Size Fits Most",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CCW7Z3M6"
  },
  {
    "name": "Hesacore Pickleball Paddle Grip - 5.25in - Regular Feel - Supports Tennis Elbow, Enhances Grip Strength, Reduces Vibration with Finger Supp...",
    "category": "Court Gear",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51ddBNnBrHL._AC_UL320_.jpg",
      "alt": "Hesacore Pickleball Paddle Grip - 5.25in - Regular Feel - Supports Tennis Elbow, Enhances Grip Strength, Reduces Vibration with Finger Supp...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C2XHMYD1"
  },
  {
    "name": "JOJOLEMON Pickleball Paddles, Carbon Fiber Pickleball Paddle with a 16mm Shark Power Polymer Core, The Pickleball Rackets Designed for Ulti...",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for pickleball shoppers who want an easier first match, cleaner bag, better grip, or a court-day item you will actually use.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Pickleball shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Court Weekend lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "For serious league play, check paddle specs and local rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kJl6-KTgL._AC_UL320_.jpg",
      "alt": "JOJOLEMON Pickleball Paddles, Carbon Fiber Pickleball Paddle with a 16mm Shark Power Polymer Core, The Pickleball Rackets Designed for Ulti...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DD7C9WGH"
  }
];

export function getCourtWeekendCatalog(
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
