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
    "name": "Magic Bullet Blender, Small, Silver, 11 Piece Set",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61w2Tj7r0BL._AC_UY218_.jpg",
      "alt": "Magic Bullet Blender, Small, Silver, 11 Piece Set",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B012T634SM"
  },
  {
    "name": "Ninja Fit Compact Personal Blender | For Smoothies, Shakes & Frozen Drinks | (2) 16-oz. To-Go Cups with Spout Lids | 700-Watt Countertop |...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/710oNE8RCjL._AC_UY218_.jpg",
      "alt": "Ninja Fit Compact Personal Blender | For Smoothies, Shakes & Frozen Drinks | (2) 16-oz. To-Go Cups with Spout Lids | 700-Watt Countertop |...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01FHOWYA2"
  },
  {
    "name": "Portable Blender, 20oz Powerful Personal Blender Shakes and Smoothies USB Rechargeable - Efficient Safe On The Go Blenders Fruit Juicer Cup...",
    "category": "Smoothies",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71zjGSG5-NL._AC_UY218_.jpg",
      "alt": "Portable Blender, 20oz Powerful Personal Blender Shakes and Smoothies USB Rechargeable - Efficient Safe On The Go Blenders Fruit Juicer Cup...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GS5TLCT3"
  },
  {
    "name": "Ninja Blast Max, Portable Blender + Twist & Go, Personal Smoothie, Blend, Ice Crush, 3 Programs, Cordless, 22 oz removable Vessel, Dishwash...",
    "category": "Smoothies",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71lJNuwnCcL._AC_UY218_.jpg",
      "alt": "Ninja Blast Max, Portable Blender + Twist & Go, Personal Smoothie, Blend, Ice Crush, 3 Programs, Cordless, 22 oz removable Vessel, Dishwash...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DB8ZN253"
  },
  {
    "name": "Ninja Nutri-Blender Pro with Auto-iQ | For Smoothies, Shakes, Frozen Drinks, Salsa, Dips | (2) 24-oz. To-Go Cups & Spout Lids | 1100-Peak-W...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81zqZV+WSbL._AC_UY218_.jpg",
      "alt": "Ninja Nutri-Blender Pro with Auto-iQ | For Smoothies, Shakes, Frozen Drinks, Salsa, Dips | (2) 24-oz. To-Go Cups & Spout Lids | 1100-Peak-W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08QXJ31WR"
  },
  {
    "name": "Ninja Nutri-Plus Personal Blender | Compact Push to Blend | Make Frozen Drinks, Smoothies, Sauces & More | With (3) 20 oz. To-Go Cups, (2)...",
    "category": "Smoothies",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7160sKnK+lL._AC_UY218_.jpg",
      "alt": "Ninja Nutri-Plus Personal Blender | Compact Push to Blend | Make Frozen Drinks, Smoothies, Sauces & More | With (3) 20 oz. To-Go Cups, (2)...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08QZWDLP4"
  },
  {
    "name": "GreenPan Spin & Go Portable Blender, 24oz BPA-Free Cup, Self-Cleaning, Shakes Smoothies Juices, Crushed Ice & Frozen Fruits, Leakproof Lid,...",
    "category": "Smoothies",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71nER6VBaXL._AC_UY218_.jpg",
      "alt": "GreenPan Spin & Go Portable Blender, 24oz BPA-Free Cup, Self-Cleaning, Shakes Smoothies Juices, Crushed Ice & Frozen Fruits, Leakproof Lid,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GXX7CC2R"
  },
  {
    "name": "Ganiza Blender for Smoothies, 14Pcs Personal Blender for Shake and Smoothies for Kitchen with 3 Portable Cups (1x24oz & 2X17oz), Single Ser...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81RRa6fuKBL._AC_UY218_.jpg",
      "alt": "Ganiza Blender for Smoothies, 14Pcs Personal Blender for Shake and Smoothies for Kitchen with 3 Portable Cups (1x24oz & 2X17oz), Single Ser...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DJM4QW9B"
  },
  {
    "name": "Nutribullet Personal Blender, Shakes, Smoothies, Food Prep, and Frozen Blending, 24 Ounces, 600 Watt, Dark Gray, NBR-0601WM",
    "category": "Smoothies",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Am3i23tGL._AC_UY218_.jpg",
      "alt": "Nutribullet Personal Blender, Shakes, Smoothies, Food Prep, and Frozen Blending, 24 Ounces, 600 Watt, Dark Gray, NBR-0601WM",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07CTBHQZK"
  },
  {
    "name": "Consciot CB08 11-Piece Blender for Kitchen and Personal Size, Blend Shakes and Smoothies, Frozen Drinks, Baby Food, Spreads & More, 3 Porta...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71S+Q+1jhQL._AC_UY218_.jpg",
      "alt": "Consciot CB08 11-Piece Blender for Kitchen and Personal Size, Blend Shakes and Smoothies, Frozen Drinks, Baby Food, Spreads & More, 3 Porta...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DDC6DNFF"
  },
  {
    "name": "Hamilton Beach Portable Blender for Shakes and Smoothies, 14 Oz BPA Free Travel Cup & Lid, Durable Stainless Steel Blades, Personal Smoothi...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61R7wiDoKCL._AC_UY218_.jpg",
      "alt": "Hamilton Beach Portable Blender for Shakes and Smoothies, 14 Oz BPA Free Travel Cup & Lid, Durable Stainless Steel Blades, Personal Smoothi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CN3S2SW2"
  },
  {
    "name": "Ganiza Smoothie Blender, 900W Blenders for Shakes and Smoothies, 15-Piece Personal Blender and Grinder Combo for Kitchen, Smoothies Maker w...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81VoJ7+UmaL._AC_UY218_.jpg",
      "alt": "Ganiza Smoothie Blender, 900W Blenders for Shakes and Smoothies, 15-Piece Personal Blender and Grinder Combo for Kitchen, Smoothies Maker w...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CCDG91CS"
  },
  {
    "name": "Hamilton Beach Portable Blender for Shakes and Smoothies, 14 Oz BPA Free Travel Cup & Lid, Durable Stainless Steel Blades, Personal Smoothi...",
    "category": "Smoothies",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61twvHkbgAL._AC_UY218_.jpg",
      "alt": "Hamilton Beach Portable Blender for Shakes and Smoothies, 14 Oz BPA Free Travel Cup & Lid, Durable Stainless Steel Blades, Personal Smoothi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00QNUCV0I"
  },
  {
    "name": "Hamilton Beach Portable Blender for Shakes and Smoothies, 14 Oz BPA Free Travel Cup & Lid, Durable Stainless Steel Blades, Personal Smoothi...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/716DiCk9hiL._AC_UY218_.jpg",
      "alt": "Hamilton Beach Portable Blender for Shakes and Smoothies, 14 Oz BPA Free Travel Cup & Lid, Durable Stainless Steel Blades, Personal Smoothi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B085FXHQZB"
  },
  {
    "name": "Ninja Blendboss™ | Personal Blender for Smoothies & Frozen Drinks | 26oz Travel Tumbler with LeakProof Lid, Chug Spout & Detachable Straw |...",
    "category": "Smoothies",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LeBJvWoKL._AC_UY218_.jpg",
      "alt": "Ninja Blendboss™ | Personal Blender for Smoothies & Frozen Drinks | 26oz Travel Tumbler with LeakProof Lid, Chug Spout & Detachable Straw |...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FSGSYF79"
  },
  {
    "name": "Ninja Kitchen System | All-in-One Food Processor & Blender for Smoothies | Includes Pitcher, (2) 16 oz. To-Go Cups & 8-Cup Bowl | Makes Sal...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ME5sqz5TL._AC_UY218_.jpg",
      "alt": "Ninja Kitchen System | All-in-One Food Processor & Blender for Smoothies | Includes Pitcher, (2) 16 oz. To-Go Cups & 8-Cup Bowl | Makes Sal...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00939I7EK"
  },
  {
    "name": "Dealusy 100 Pack - 16 oz Clear Plastic Cups with Lids and Straws, Sturdy & Food Safe Iced Coffee Cups with lids, Disposable Plastic Smoothi...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Rpi8FxjmL._AC_UL320_.jpg",
      "alt": "Dealusy 100 Pack - 16 oz Clear Plastic Cups with Lids and Straws, Sturdy & Food Safe Iced Coffee Cups with lids, Disposable Plastic Smoothi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZDSCKJC"
  },
  {
    "name": "Cappatua 20 oz Clear Plastic Cups with Lids and STRAWS, Disposable Drinking Cups for Cold Drinks, Iced Coffee, Milkshakes, Smoothies, 25 Sets",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uhk987EyL._AC_UL320_.jpg",
      "alt": "Cappatua 20 oz Clear Plastic Cups with Lids and STRAWS, Disposable Drinking Cups for Cold Drinks, Iced Coffee, Milkshakes, Smoothies, 25 Sets",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B777VDSB"
  },
  {
    "name": "GUSTO [24 oz. - 100 Count Clear Cups with Flat Lids & Straws - Disposable Clear Drinking Cups for Iced Coffee, Cold Drinks, Milkshakes, and...",
    "category": "Smoothies",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81cCImX8W8L._AC_UL320_.jpg",
      "alt": "GUSTO [24 oz. - 100 Count Clear Cups with Flat Lids & Straws - Disposable Clear Drinking Cups for Iced Coffee, Cold Drinks, Milkshakes, and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BV7HGZ3W"
  },
  {
    "name": "VELOMIX -2 Pack- 28 oz Protein Shaker Bottles for Protein Mixes - 2x Wire Whisk | Leak Proof Shaker Cups for Protein Shakes | Protein Shake...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71gz8Q2tRiL._AC_UL320_.jpg",
      "alt": "VELOMIX -2 Pack- 28 oz Protein Shaker Bottles for Protein Mixes - 2x Wire Whisk | Leak Proof Shaker Cups for Protein Shakes | Protein Shake...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CXPWMSX6"
  },
  {
    "name": "DWTS DANWEITESI Glass Cups with Lids and Straws,24 oz Smoothie Cup with Lid and Straw-Boba Mason Jar,Matcha Cup Wide Mouth Reusable Drinkin...",
    "category": "Smoothies",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713TW9GOSXL._AC_UL320_.jpg",
      "alt": "DWTS DANWEITESI Glass Cups with Lids and Straws,24 oz Smoothie Cup with Lid and Straw-Boba Mason Jar,Matcha Cup Wide Mouth Reusable Drinkin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BPXVBB5V"
  },
  {
    "name": "12 oz Clear Plastic Cups with Lids and STRAWS, Disposable Drinking Cups for Cold Drinks, Iced Coffee, Milkshakes, Smoothies, 25 Sets",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71h3VbJh3gL._AC_UL320_.jpg",
      "alt": "12 oz Clear Plastic Cups with Lids and STRAWS, Disposable Drinking Cups for Cold Drinks, Iced Coffee, Milkshakes, Smoothies, 25 Sets",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B775CW1X"
  },
  {
    "name": "110 Pack Clear Plastic Cups with Lids and Straws, 16 oz Disposable Iced Coffee Cups To Go, BPA-Free Cold Drink Cups for Smoothie, Matcha, P...",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/810JwzD2+lL._AC_UL320_.jpg",
      "alt": "110 Pack Clear Plastic Cups with Lids and Straws, 16 oz Disposable Iced Coffee Cups To Go, BPA-Free Cold Drink Cups for Smoothie, Matcha, P...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FXRFNLFT"
  },
  {
    "name": "Lamosi 100 Pack 16 oz Clear Plastic Cups with Lids and Straws, Disposable Plastic Coffee Cups with Lids for Iced Coffee, Cold Beverages, Sm...",
    "category": "Smoothies",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71zroJ1ZlLL._AC_UL320_.jpg",
      "alt": "Lamosi 100 Pack 16 oz Clear Plastic Cups with Lids and Straws, Disposable Plastic Coffee Cups with Lids for Iced Coffee, Cold Beverages, Sm...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSF5ST57"
  },
  {
    "name": "Lamosi 100 Pack 20 oz Clear Plastic Cups with Lids and Straws, Disposable Iced Coffee Cups with Lids for To-Go Cold Drinks, Smoothies and S...",
    "category": "Smoothies",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71XUzcCMZcL._AC_UL320_.jpg",
      "alt": "Lamosi 100 Pack 20 oz Clear Plastic Cups with Lids and Straws, Disposable Iced Coffee Cups with Lids for To-Go Cold Drinks, Smoothies and S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F5PHX4CS"
  },
  {
    "name": "Meoky Plastic Cute Cold Cups with Lids and Straws Bulk for Iced Coffee - 6 Pack 24 oz Color Changing Reusable for Adults Kid Women Party",
    "category": "Smoothies",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61+0B7C3ZgL._AC_UL320_.jpg",
      "alt": "Meoky Plastic Cute Cold Cups with Lids and Straws Bulk for Iced Coffee - 6 Pack 24 oz Color Changing Reusable for Adults Kid Women Party",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09QMF7MHZ"
  },
  {
    "name": "TashiBox Plastic Cups with Flat Lids 100 Sets 16 oz, Clear Crystal drink cups with lids",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71y4+QyDWnL._AC_UL320_.jpg",
      "alt": "TashiBox Plastic Cups with Flat Lids 100 Sets 16 oz, Clear Crystal drink cups with lids",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01HHQ40IC"
  },
  {
    "name": "VITEVER [100 Sets - 16oz] Clear Plastic Cups with Lids and Straws, Disposable Iced Coffee Cups for Smoothie, Milkshake, Cold Drinks - BPA free",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for smoothies shoppers who want faster prep, easier cleanup, portable drinks, or a more repeatable breakfast routine.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Smoothies shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Smoothie Station lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check blender wattage, cup size, dishwasher guidance, leak resistance, and whether parts are easy to replace.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81nuWD2tHgL._AC_UL320_.jpg",
      "alt": "VITEVER [100 Sets - 16oz] Clear Plastic Cups with Lids and Straws, Disposable Iced Coffee Cups for Smoothie, Milkshake, Cold Drinks - BPA free",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B87S8S2Z"
  }
];

export function getSmoothieStationCatalog(
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
