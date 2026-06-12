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
    "name": "2 Pack USB C Charger Block, Dual Port Type C Wall Charger Fast Charging 20W Power Adapter Cube for iPhone 14/14 Pro/14 Pro Max/14 Plus/13/1...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/5134nknNJxL._AC_UY218_.jpg",
      "alt": "2 Pack USB C Charger Block, Dual Port Type C Wall Charger Fast Charging 20W Power Adapter Cube for iPhone 14/14 Pro/14 Pro Max/14 Plus/13/1...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CPSBD68W"
  },
  {
    "name": "Anker iPhone Charger, 2-Pack 20W Fast USB C Charger Block, Type C Charger Fast Charging for iPhone 17/17 Pro Max/16 Series/iPad Pro and Mor...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719R46dVUTL._AC_UY218_.jpg",
      "alt": "Anker iPhone Charger, 2-Pack 20W Fast USB C Charger Block, Type C Charger Fast Charging for iPhone 17/17 Pro Max/16 Series/iPad Pro and Mor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C8HHV9DK"
  },
  {
    "name": "Anker Nano USB C Charger Block, 30W PIQ 3.0 Foldable iPhone Charger Fast Charging for iPhone 17/16 Series, Galaxy, iPad, Compatible with Ma...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51rRo55PUwL._AC_UY218_.jpg",
      "alt": "Anker Nano USB C Charger Block, 30W PIQ 3.0 Foldable iPhone Charger Fast Charging for iPhone 17/16 Series, Galaxy, iPad, Compatible with Ma...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B2MM1W65"
  },
  {
    "name": "USB C Charger Block 20W, Ocupwei PD 3.0 Fast Charging Wall Charger USBC Power Adapter Type C Brick Cube for iPhone 17/Pro/Pro Max/17 Air/ 1...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51ryIc6O8rL._AC_UY218_.jpg",
      "alt": "USB C Charger Block 20W, Ocupwei PD 3.0 Fast Charging Wall Charger USBC Power Adapter Type C Brick Cube for iPhone 17/Pro/Pro Max/17 Air/ 1...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B79JGSTL"
  },
  {
    "name": "USB C Charger Block,3-Pack Dual Port USB C Fast Charging Block，Type C Wall Charger Plug for iPhone 17/16/15/14/13/12/11/ Pro Max/Plus/Xs Ma...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61LJVclD6KL._AC_UY218_.jpg",
      "alt": "USB C Charger Block,3-Pack Dual Port USB C Fast Charging Block，Type C Wall Charger Plug for iPhone 17/16/15/14/13/12/11/ Pro Max/Plus/Xs Ma...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9BFXJ1"
  },
  {
    "name": "[4 Pack] USB C Charger Block Fast Charging Multiport Adpater [PD 20W USB-C & QC 3.0 USB-A Port] for iPhone 17/16/15/14/13/12/11/X/8, iPad,...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51eAnSUfXSL._AC_UY218_.jpg",
      "alt": "[4 Pack] USB C Charger Block Fast Charging Multiport Adpater [PD 20W USB-C & QC 3.0 USB-A Port] for iPhone 17/16/15/14/13/12/11/X/8, iPad,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B2WLSY9D"
  },
  {
    "name": "Anker Nano 47W Fast Charger USB C, 2-Port Compact Foldable USB C GaN Charger for iPhone 17/16, Galaxy, Pixel, Compatible with MagSafe (White)",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51qvw4IcVTL._AC_UY218_.jpg",
      "alt": "Anker Nano 47W Fast Charger USB C, 2-Port Compact Foldable USB C GaN Charger for iPhone 17/16, Galaxy, Pixel, Compatible with MagSafe (White)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BDKCBJ95"
  },
  {
    "name": "Apple 20W USB-C Compact Power Adapter: Fast and Convenient Charging, Type C Wall Charger",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/31EQge6IQQL._AC_UY218_.jpg",
      "alt": "Apple 20W USB-C Compact Power Adapter: Fast and Convenient Charging, Type C Wall Charger",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DJFW7PNM"
  },
  {
    "name": "Anker Zolo USB C Charger Block,2-Pack Type C Charger Fast Charging with 50W Max Output,2 USB-C and 2 USB-A,Compact and Stable Design,for iP...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/811v5gUSlJL._AC_UY218_.jpg",
      "alt": "Anker Zolo USB C Charger Block,2-Pack Type C Charger Fast Charging with 50W Max Output,2 USB-C and 2 USB-A,Compact and Stable Design,for iP...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FCFL13ZL"
  },
  {
    "name": "USB C Fast Charger Block, 60W USBC Wall Charger Plug, 2Pack 5-Port Type C Phone Charging Cubes Power Adapter Multiport Brick for iPhone 17/...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51U8pdPwMaL._AC_UY218_.jpg",
      "alt": "USB C Fast Charger Block, 60W USBC Wall Charger Plug, 2Pack 5-Port Type C Phone Charging Cubes Power Adapter Multiport Brick for iPhone 17/...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F1YGC8KB"
  },
  {
    "name": "Anker Phone Charger, 65W 3-Port Fast Compact Foldable USB C Charger Block, Type C Charger Fast Charging for MacBook Pro/Air, iPad Pro, Gala...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/5164giE9fFL._AC_UY218_.jpg",
      "alt": "Anker Phone Charger, 65W 3-Port Fast Compact Foldable USB C Charger Block, Type C Charger Fast Charging for MacBook Pro/Air, iPad Pro, Gala...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09C5RG6KV"
  },
  {
    "name": "Anker USB Charger Block,67W GaN Wall Charger,3-Port Compact Fast Charging Phone Charger,For MacBook Pro/Air, Pixelbook, iPad Pro, iPhone 17...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51KUzDBK-bL._AC_UY218_.jpg",
      "alt": "Anker USB Charger Block,67W GaN Wall Charger,3-Port Compact Fast Charging Phone Charger,For MacBook Pro/Air, Pixelbook, iPad Pro, iPhone 17...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C4YTB56H"
  },
  {
    "name": "Anker Nano 47W Fast Charger USB C, 2-Port Compact Foldable USB C GaN Charger for iPhone 17/16, Galaxy, Pixel, Compatible with MagSafe (Black)",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51FZTLwB7QL._AC_UY218_.jpg",
      "alt": "Anker Nano 47W Fast Charger USB C, 2-Port Compact Foldable USB C GaN Charger for iPhone 17/16, Galaxy, Pixel, Compatible with MagSafe (Black)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BDKB4W7N"
  },
  {
    "name": "Anker MacBook Pro Charger,140W Max 4-Port GaN USB C Charger Block with Smart Display,Fast Charger USB C Power Adapter,Touch Controls for Ma...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71TNYvW23mL._AC_UY218_.jpg",
      "alt": "Anker MacBook Pro Charger,140W Max 4-Port GaN USB C Charger Block with Smart Display,Fast Charger USB C Power Adapter,Touch Controls for Ma...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DFCH3C4W"
  },
  {
    "name": "Anker Nano Charger, USB C GaN Charger 30W, PIQ 3.0 Foldable PPS Fast Charger for iPhone 17 / 16 and more series, Galaxy, iPad, Compatible w...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51+oMO+PTeL._AC_UY218_.jpg",
      "alt": "Anker Nano Charger, USB C GaN Charger 30W, PIQ 3.0 Foldable PPS Fast Charger for iPhone 17 / 16 and more series, Galaxy, iPad, Compatible w...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B2MLRF93"
  },
  {
    "name": "Anker USB C Charger Block 20W (Nano Pro), PIQ 3.0 Compact Fast Charger for iPhone 17/16/15/14 Series, Galaxy, Pixel 4/3, iPad (Cable Not In...",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/611AeVe08SL._AC_UY218_.jpg",
      "alt": "Anker USB C Charger Block 20W (Nano Pro), PIQ 3.0 Compact Fast Charger for iPhone 17/16/15/14 Series, Galaxy, Pixel 4/3, iPad (Cable Not In...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B099F2H5KH"
  },
  {
    "name": "VIMOSE 66\" Phone Tripod, Tripod for iPhone with Remote & Phone Stand, Extendable Cell Phone Tripod for Video Recording, Ultimate Tripod & M...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61hqCOrNXNL._AC_UY218_.jpg",
      "alt": "VIMOSE 66\" Phone Tripod, Tripod for iPhone with Remote & Phone Stand, Extendable Cell Phone Tripod for Video Recording, Ultimate Tripod & M...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FB349R8G"
  },
  {
    "name": "EUCOS 62\" Phone Tripod, Tripod for iPhone & Selfie Stick with Remote, Extendable Cell Phone Stand & Ultimate Phone Holder, Solidest Phone S...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61LnPbT7KML._AC_UY218_.jpg",
      "alt": "EUCOS 62\" Phone Tripod, Tripod for iPhone & Selfie Stick with Remote, Extendable Cell Phone Stand & Ultimate Phone Holder, Solidest Phone S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09XHZ8F7F"
  },
  {
    "name": "Liphisy 64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Sturdy & Stable Height Adjustable Multi-Angle Shot S...",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61G1zIdlFwL._AC_UY218_.jpg",
      "alt": "Liphisy 64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Sturdy & Stable Height Adjustable Multi-Angle Shot S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMM89Y6Z"
  },
  {
    "name": "SENSYNE 62\" Phone Tripod & Selfie Stick, Extendable Cell Phone Tripod Stand with Wireless Remote and Phone Holder, Compatible with iPhone A...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51svJuNXDyL._AC_UY218_.jpg",
      "alt": "SENSYNE 62\" Phone Tripod & Selfie Stick, Extendable Cell Phone Tripod Stand with Wireless Remote and Phone Holder, Compatible with iPhone A...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09TQY66NH"
  },
  {
    "name": "Phone Tripod, 86\" Tall Tripod for iPhone with Flexible Gooseneck & Remote, Portable Aluminum Cellphone Stand for Selfies, Video Recording,T...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/615NOMjmPPL._AC_UY218_.jpg",
      "alt": "Phone Tripod, 86\" Tall Tripod for iPhone with Flexible Gooseneck & Remote, Portable Aluminum Cellphone Stand for Selfies, Video Recording,T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CJ579TLB"
  },
  {
    "name": "Amazon Basics 64-inch Extendable Tripod for iPhones and Smartphones, Selfie Stick Mode and Phone Tripod Mode, Black",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61wiBVYMLbL._AC_UY218_.jpg",
      "alt": "Amazon Basics 64-inch Extendable Tripod for iPhones and Smartphones, Selfie Stick Mode and Phone Tripod Mode, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQP9S8Q2"
  },
  {
    "name": "Selfie Stick Travel Tripod for Cell Phone with Remote Control and Phone Holder, Extendable Selfie Stick for iPhone, iPhone Tripod for Video...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61GZzMcZxVL._AC_UY218_.jpg",
      "alt": "Selfie Stick Travel Tripod for Cell Phone with Remote Control and Phone Holder, Extendable Selfie Stick for iPhone, iPhone Tripod for Video...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DLNZSRNB"
  },
  {
    "name": "71” Phone Tripod & Selfie Stick, Portable All in One Extendable Cell Phone Tripod Stand, with Wireless Remote Control for iPhone/Samsung/An...",
    "category": "Phone Accessories",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61JDV+ZBL9L._AC_UY218_.jpg",
      "alt": "71” Phone Tripod & Selfie Stick, Portable All in One Extendable Cell Phone Tripod Stand, with Wireless Remote Control for iPhone/Samsung/An...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DXFFY4YV"
  },
  {
    "name": "TONEOF 68\" Magnetic Selfie Stick Tripod with Aluminum Strong Magnetic Holder for Magsafe, 360° Rotatable Travel Phone Tripod Stand with Met...",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/618JNIVFMbL._AC_UY218_.jpg",
      "alt": "TONEOF 68\" Magnetic Selfie Stick Tripod with Aluminum Strong Magnetic Holder for Magsafe, 360° Rotatable Travel Phone Tripod Stand with Met...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F21QY3H8"
  },
  {
    "name": "EMART 62’’ Cell Phone Tripod Stand, Adjustable Floor Cellphone Tri Pod Holder with Remote for iPhone and Android, Portable Compact Smartpho...",
    "category": "Phone Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/511JOPc-8oL._AC_UY218_.jpg",
      "alt": "EMART 62’’ Cell Phone Tripod Stand, Adjustable Floor Cellphone Tri Pod Holder with Remote for iPhone and Android, Portable Compact Smartpho...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D172J4ZL"
  },
  {
    "name": "Aureday Phone Tripod, Flexible Tripod for iPhone and Android Cell Phone, Come with Wireless Remote and Clip for Video Recording/Vlogging/Se...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qN-CDbP4L._AC_UY218_.jpg",
      "alt": "Aureday Phone Tripod, Flexible Tripod for iPhone and Android Cell Phone, Come with Wireless Remote and Clip for Video Recording/Vlogging/Se...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09V4XYHR5"
  },
  {
    "name": "ANXRE 71\" Phone Tripod, NT79 Extendable Selfie Stick with 1/4\" Camera Mount for Cell Phone＆Camera, Phone Tripod Stand Holder with Remote Co...",
    "category": "Phone Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for phone accessories shoppers who want faster charging, cleaner carrying, better mounting, or fewer cable problems.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Phone Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Phone Loop lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone model, case thickness, charging wattage, MagSafe compatibility, and cable type before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61IFlrb8crL._AC_UY218_.jpg",
      "alt": "ANXRE 71\" Phone Tripod, NT79 Extendable Selfie Stick with 1/4\" Camera Mount for Cell Phone＆Camera, Phone Tripod Stand Holder with Remote Co...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DS24YLFM"
  }
];

export function getPhoneLoopCatalog(
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
