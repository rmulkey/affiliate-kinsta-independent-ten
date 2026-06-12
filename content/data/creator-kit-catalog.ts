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
    "name": "Vlogging Kit for iPhone/Android, 63”Auto Face Tracking Tripod for iPhone with Light, Wireless Microphones, Scrolling Remote Control for Tik...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/610R8hD8IEL._AC_UY218_.jpg",
      "alt": "Vlogging Kit for iPhone/Android, 63”Auto Face Tracking Tripod for iPhone with Light, Wireless Microphones, Scrolling Remote Control for Tik...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DWJH4BHS"
  },
  {
    "name": "Yeaki Vlogging Kit for iPhone/Android, 71\" Selfie Stick Tripod for iPhone with Light, Wireless Remote & Microphone, Adjustable Phone Tripod...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61QguOU11WL._AC_UY218_.jpg",
      "alt": "Yeaki Vlogging Kit for iPhone/Android, 71\" Selfie Stick Tripod for iPhone with Light, Wireless Remote & Microphone, Adjustable Phone Tripod...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F8NCLBVG"
  },
  {
    "name": "Sensyne Ring Light with Stand, 50\" Phone Tripod for iPhone & Android, LED Ring Light with Remote, 3 Color Modes & 10 Brightness Levels for...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ANURHY7qL._AC_UY218_.jpg",
      "alt": "Sensyne Ring Light with Stand, 50\" Phone Tripod for iPhone & Android, LED Ring Light with Remote, 3 Color Modes & 10 Brightness Levels for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08B3X7NXC"
  },
  {
    "name": "Vlogging Kit for iPhone/Android, YouTube Starter Kit with Wireless Microphone/Camera Tripod/Flexible Tripod/RGB Fill Light, Content Creator...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/619sakvfXdL._AC_UY218_.jpg",
      "alt": "Vlogging Kit for iPhone/Android, YouTube Starter Kit with Wireless Microphone/Camera Tripod/Flexible Tripod/RGB Fill Light, Content Creator...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F9FD52N7"
  },
  {
    "name": "Auto Face Tracking Tripod 360° Rotating Cell Phone Photo and Video Kits Stand, No App, Camera Stand with Remote and Gesture Control, Rechar...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61i1fNNGbTL._AC_UY218_.jpg",
      "alt": "Auto Face Tracking Tripod 360° Rotating Cell Phone Photo and Video Kits Stand, No App, Camera Stand with Remote and Gesture Control, Rechar...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CPXP7PVX"
  },
  {
    "name": "KraftGeek 64\" Magnetic Phone Tripod for iPhone MagSafe, Reinforced Aluminum Selfie Stick Tripod Stand for Video Recording, Vlogging & Trave...",
    "category": "Creator Gear",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61SfnjH1y7L._AC_UY218_.jpg",
      "alt": "KraftGeek 64\" Magnetic Phone Tripod for iPhone MagSafe, Reinforced Aluminum Selfie Stick Tripod Stand for Video Recording, Vlogging & Trave...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CR6ZD61D"
  },
  {
    "name": "71\" Content Creator Essentials Vlogging Kit - 2 Lights & 2 Mics, 360° Rotating Auto Face Tracking Tripod for iPhone/Android/Camera with Wir...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71T1zSJIl3L._AC_UY218_.jpg",
      "alt": "71\" Content Creator Essentials Vlogging Kit - 2 Lights & 2 Mics, 360° Rotating Auto Face Tracking Tripod for iPhone/Android/Camera with Wir...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJF7YXD9"
  },
  {
    "name": "yAyusi Magnetic Vlogging Kit for iPhone/Android, 71\" Auto Face Tracking Tripod for iPhone with Light, Magnetic Microphone/Remote Control, C...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61R0FDFJ+TL._AC_UY218_.jpg",
      "alt": "yAyusi Magnetic Vlogging Kit for iPhone/Android, 71\" Auto Face Tracking Tripod for iPhone with Light, Magnetic Microphone/Remote Control, C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F8NCBKPS"
  },
  {
    "name": "Content Creator Vlogging Kit for iPhone/Android,70-inch Auto Face Tracking Tripod for iPhone with Light and Wireless Microphones,TikTok/You...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/612OHh-hcgL._AC_UY218_.jpg",
      "alt": "Content Creator Vlogging Kit for iPhone/Android,70-inch Auto Face Tracking Tripod for iPhone with Light and Wireless Microphones,TikTok/You...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FW4KL9RS"
  },
  {
    "name": "MQOUNY Auto Face Tracking Phone Holder, 360° Rotation Face Body Phone Tripod Smart Shooting Camera Mount with Rechargeable Remote and Light...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LtYurKBiL._AC_UY218_.jpg",
      "alt": "MQOUNY Auto Face Tracking Phone Holder, 360° Rotation Face Body Phone Tripod Smart Shooting Camera Mount with Rechargeable Remote and Light...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CW5ZFT6W"
  },
  {
    "name": "OMOTON TP02-Pro Magnetic Phone Holder for Vlogging, Content Creator Essentials with 1/4\" Screw, Arca, Strong Back Magnet for Gym, Adjustabl...",
    "category": "Creator Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/6122YZQ7auL._AC_UY218_.jpg",
      "alt": "OMOTON TP02-Pro Magnetic Phone Holder for Vlogging, Content Creator Essentials with 1/4\" Screw, Arca, Strong Back Magnet for Gym, Adjustabl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FXM5Q8VZ"
  },
  {
    "name": "Content Creator Starter Kit,Vlogging Kit for iPhone/Android,70”Auto Face Tracking Tripod 360 Rotation with Light, Wireless Microphones,Self...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71n6QEKkDsL._AC_UY218_.jpg",
      "alt": "Content Creator Starter Kit,Vlogging Kit for iPhone/Android,70”Auto Face Tracking Tripod 360 Rotation with Light, Wireless Microphones,Self...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GDCQ234T"
  },
  {
    "name": "Magnetic Vlog Selfie Monitor Screen for iPhone 17 & Android, 4K Wireless Video Recording with Remote Zoom & Shoot, Content Creator Essentia...",
    "category": "Creator Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71iL0JCrOFL._AC_UY218_.jpg",
      "alt": "Magnetic Vlog Selfie Monitor Screen for iPhone 17 & Android, 4K Wireless Video Recording with Remote Zoom & Shoot, Content Creator Essentia...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0G499QVQS"
  },
  {
    "name": "Belkin Stage Content Creator Essentials, Tripod for iPhone, Magnetic Phone Mount, Dual Wireless Microphones - Portable Vlogging kit for iPh...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61umEm84+mL._AC_UY218_.jpg",
      "alt": "Belkin Stage Content Creator Essentials, Tripod for iPhone, Magnetic Phone Mount, Dual Wireless Microphones - Portable Vlogging kit for iPh...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GGF7KWY2"
  },
  {
    "name": "Canal Toys New So DIY TikTok Instagram YouTube Multicolored Ring Light with Green Screen and Phone Mount Tripod. Studio Creator 2 Influence...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81DPacnurwL._AC_UY218_.jpg",
      "alt": "Canal Toys New So DIY TikTok Instagram YouTube Multicolored Ring Light with Green Screen and Phone Mount Tripod. Studio Creator 2 Influence...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08SQB61BB"
  },
  {
    "name": "USKEYVISION Vlogging Kit for iPhone&Android,Content Creator Essentials,YouTube Starter Kit w/Wireless Microphone&Remote,68” Auto Face Track...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61E4P+J6oFL._AC_UY218_.jpg",
      "alt": "USKEYVISION Vlogging Kit for iPhone&Android,Content Creator Essentials,YouTube Starter Kit w/Wireless Microphone&Remote,68” Auto Face Track...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FVXYL73W"
  },
  {
    "name": "VIMOSE 66\" Phone Tripod, Tripod for iPhone with Remote & Phone Stand, Extendable Cell Phone Tripod for Video Recording, Ultimate Tripod & M...",
    "category": "Creator Gear",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61hqCOrNXNL._AC_UY218_.jpg",
      "alt": "VIMOSE 66\" Phone Tripod, Tripod for iPhone with Remote & Phone Stand, Extendable Cell Phone Tripod for Video Recording, Ultimate Tripod & M...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FB349R8G"
  },
  {
    "name": "EUCOS 62\" Phone Tripod, Tripod for iPhone & Selfie Stick with Remote, Extendable Cell Phone Stand & Ultimate Phone Holder, Solidest Phone S...",
    "category": "Creator Gear",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61LnPbT7KML._AC_UY218_.jpg",
      "alt": "EUCOS 62\" Phone Tripod, Tripod for iPhone & Selfie Stick with Remote, Extendable Cell Phone Stand & Ultimate Phone Holder, Solidest Phone S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09XHZ8F7F"
  },
  {
    "name": "Selfie Stick Travel Tripod for Cell Phone with Remote Control and Phone Holder, Extendable Selfie Stick for iPhone, iPhone Tripod for Video...",
    "category": "Creator Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61GZzMcZxVL._AC_UY218_.jpg",
      "alt": "Selfie Stick Travel Tripod for Cell Phone with Remote Control and Phone Holder, Extendable Selfie Stick for iPhone, iPhone Tripod for Video...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DLNZSRNB"
  },
  {
    "name": "Liphisy 64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Sturdy & Stable Height Adjustable Multi-Angle Shot S...",
    "category": "Creator Gear",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61G1zIdlFwL._AC_UY218_.jpg",
      "alt": "Liphisy 64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Sturdy & Stable Height Adjustable Multi-Angle Shot S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMM89Y6Z"
  },
  {
    "name": "SENSYNE 62\" Phone Tripod & Selfie Stick, Extendable Cell Phone Tripod Stand with Wireless Remote and Phone Holder, Compatible with iPhone A...",
    "category": "Creator Gear",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51svJuNXDyL._AC_UY218_.jpg",
      "alt": "SENSYNE 62\" Phone Tripod & Selfie Stick, Extendable Cell Phone Tripod Stand with Wireless Remote and Phone Holder, Compatible with iPhone A...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09TQY66NH"
  },
  {
    "name": "Phone Tripod, 86\" Tall Tripod for iPhone with Flexible Gooseneck & Remote, Portable Aluminum Cellphone Stand for Selfies, Video Recording,T...",
    "category": "Creator Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/615NOMjmPPL._AC_UY218_.jpg",
      "alt": "Phone Tripod, 86\" Tall Tripod for iPhone with Flexible Gooseneck & Remote, Portable Aluminum Cellphone Stand for Selfies, Video Recording,T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CJ579TLB"
  },
  {
    "name": "71” Phone Tripod & Selfie Stick, Portable All in One Extendable Cell Phone Tripod Stand, with Wireless Remote Control for iPhone/Samsung/An...",
    "category": "Creator Gear",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61JDV+ZBL9L._AC_UY218_.jpg",
      "alt": "71” Phone Tripod & Selfie Stick, Portable All in One Extendable Cell Phone Tripod Stand, with Wireless Remote Control for iPhone/Samsung/An...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DXFFY4YV"
  },
  {
    "name": "TONEOF 68\" Magnetic Selfie Stick Tripod with Aluminum Strong Magnetic Holder for Magsafe, 360° Rotatable Travel Phone Tripod Stand with Met...",
    "category": "Creator Gear",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/618JNIVFMbL._AC_UY218_.jpg",
      "alt": "TONEOF 68\" Magnetic Selfie Stick Tripod with Aluminum Strong Magnetic Holder for Magsafe, 360° Rotatable Travel Phone Tripod Stand with Met...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F21QY3H8"
  },
  {
    "name": "Aureday Phone Tripod, Flexible Tripod for iPhone and Android Cell Phone, Come with Wireless Remote and Clip for Video Recording/Vlogging/Se...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qN-CDbP4L._AC_UY218_.jpg",
      "alt": "Aureday Phone Tripod, Flexible Tripod for iPhone and Android Cell Phone, Come with Wireless Remote and Clip for Video Recording/Vlogging/Se...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09V4XYHR5"
  },
  {
    "name": "Amazon Basics 64-inch Extendable Tripod for iPhones and Smartphones, Selfie Stick Mode and Phone Tripod Mode, Black",
    "category": "Creator Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61wiBVYMLbL._AC_UY218_.jpg",
      "alt": "Amazon Basics 64-inch Extendable Tripod for iPhones and Smartphones, Selfie Stick Mode and Phone Tripod Mode, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQP9S8Q2"
  },
  {
    "name": "Vimose Phone Tripod & Selfie Stick with Remote, Portable, Lightweight for Video Recording Vlog, Extendable Travel Tripod Stand Compatible w...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71cedH1Bh8L._AC_UY218_.jpg",
      "alt": "Vimose Phone Tripod & Selfie Stick with Remote, Portable, Lightweight for Video Recording Vlog, Extendable Travel Tripod Stand Compatible w...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DCMQF2SN"
  },
  {
    "name": "ANXRE 71\" Phone Tripod, NT79 Extendable Selfie Stick with 1/4\" Camera Mount for Cell Phone＆Camera, Phone Tripod Stand Holder with Remote Co...",
    "category": "Creator Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for creator gear shoppers who want cleaner light, steadier filming, faster setup, or a content corner that looks less improvised.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Creator Gear shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Creator Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check phone size, mount thread, power needs, app compatibility, and audio inputs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61IFlrb8crL._AC_UY218_.jpg",
      "alt": "ANXRE 71\" Phone Tripod, NT79 Extendable Selfie Stick with 1/4\" Camera Mount for Cell Phone＆Camera, Phone Tripod Stand Holder with Remote Co...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DS24YLFM"
  }
];

export function getCreatorKitCatalog(
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
