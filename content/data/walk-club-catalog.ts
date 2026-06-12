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
    "name": "Zeerun Weighted Vest for Women & Men with Reflective Stripe and Adjustable Buckle, Comfortable & Durable Rucking Vest for Walking, Running...",
    "category": "Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81zh-RIi18L._AC_UL320_.jpg",
      "alt": "Zeerun Weighted Vest for Women & Men with Reflective Stripe and Adjustable Buckle, Comfortable & Durable Rucking Vest for Walking, Running...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FG7WXNP3"
  },
  {
    "name": "AIKENDO Slim Running Belt for Women Men,Runners Fanny Pack Phone Holder,Running Pouch Waist bag for Workout Jogging,Money Belt Running Gear...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51DJCRn+7sL._AC_UL320_.jpg",
      "alt": "AIKENDO Slim Running Belt for Women Men,Runners Fanny Pack Phone Holder,Running Pouch Waist bag for Workout Jogging,Money Belt Running Gear...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09X9NGMWY"
  },
  {
    "name": "SABRE Runner Pepper Gel, Police Strength OC Spray, Adjustable 360° Reflective Hand Strap for Easy Carry & Access, 0.67 fl oz, 4X Longer Spr...",
    "category": "Walking",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71xV7GACRYL._AC_UL320_.jpg",
      "alt": "SABRE Runner Pepper Gel, Police Strength OC Spray, Adjustable 360° Reflective Hand Strap for Easy Carry & Access, 0.67 fl oz, 4X Longer Spr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B004NKSPXC"
  },
  {
    "name": "Fitgriff® Running Belt for Men & Women - Secure Jogging Pouch for Phone, Keys & Essentials - For All Cell Phones",
    "category": "Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81z1A-lFk6L._AC_UL320_.jpg",
      "alt": "Fitgriff® Running Belt for Men & Women - Secure Jogging Pouch for Phone, Keys & Essentials - For All Cell Phones",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07WH7JH6W"
  },
  {
    "name": "Cliganic 10 Pack Mosquito Repellent Bracelets for Adults & Kids - Natural DEET-Free Bands, Individually Wrapped",
    "category": "Walking",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71SaoXHCP2L._AC_UL320_.jpg",
      "alt": "Cliganic 10 Pack Mosquito Repellent Bracelets for Adults & Kids - Natural DEET-Free Bands, Individually Wrapped",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B017G1051Y"
  },
  {
    "name": "ZELUS Weighted Vest, 6lb/8lb/12lb/16lb/20lb/25lb/30lb Weight Vest with Reflective Stripe for Workout, Strength Training, Running, Fitness,...",
    "category": "Walking",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81l7AwlRcDL._AC_UL320_.jpg",
      "alt": "ZELUS Weighted Vest, 6lb/8lb/12lb/16lb/20lb/25lb/30lb Weight Vest with Reflective Stripe for Workout, Strength Training, Running, Fitness,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07518RBH2"
  },
  {
    "name": "Dr. Scholl&#x27;s Walk Longer Insoles - Comfortable Plush Foam Cushioning Inserts for Walking, Hiking, and Standing on Feet All-Day with Ar...",
    "category": "Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/810cxGYfHlL._AC_UL320_.jpg",
      "alt": "Dr. Scholl&#x27;s Walk Longer Insoles - Comfortable Plush Foam Cushioning Inserts for Walking, Hiking, and Standing on Feet All-Day with Ar...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BVXD7P1Q"
  },
  {
    "name": "JISULIFE Portable Neck Fan, Hands Free Bladeless Fan, 5 Speeds, 4000 mAh Battery Operated Wearable Personal Fan, Twistable, Rechargeable, G...",
    "category": "Walking",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61NuknhNWxL._AC_UL320_.jpg",
      "alt": "JISULIFE Portable Neck Fan, Hands Free Bladeless Fan, 5 Speeds, 4000 mAh Battery Operated Wearable Personal Fan, Twistable, Rechargeable, G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08911JGGW"
  },
  {
    "name": "IRAMY Compression Ankle Support Socks Women - Wicking, Cushioned Athletic, Plantar Fasciitis Relief 2/3/6 Pairs",
    "category": "Walking",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81TSpqzihbL._AC_UL320_.jpg",
      "alt": "IRAMY Compression Ankle Support Socks Women - Wicking, Cushioned Athletic, Plantar Fasciitis Relief 2/3/6 Pairs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BYYJBQNW"
  },
  {
    "name": "iYoShop Hands Free Dog Leash with Zipper Pouch, Dual Padded Handles and Durable Bungee for Walking, Jogging and Running Your Dog (Large, 25...",
    "category": "Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81J3PqjxomL._AC_UL320_.jpg",
      "alt": "iYoShop Hands Free Dog Leash with Zipper Pouch, Dual Padded Handles and Durable Bungee for Walking, Jogging and Running Your Dog (Large, 25...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07R56CBWX"
  },
  {
    "name": "Megababe Thigh Rescue Anti-Chafe Stick Mini | Travel size, great for on-the-go | Prevents skin chafe & irritation | Thighs, arms, bra-lines...",
    "category": "Walking",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51AyW4ihMlL._AC_UL320_.jpg",
      "alt": "Megababe Thigh Rescue Anti-Chafe Stick Mini | Travel size, great for on-the-go | Prevents skin chafe & irritation | Thighs, arms, bra-lines...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07GJZQTWS"
  },
  {
    "name": "MAXTOP Large Crossbody Fanny Pack with 4-Zipper Pockets,Gifts for Enjoy Sports Festival Workout Traveling Running Casual Hands-Free Wallets...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61uozaua++L._AC_UL320_.jpg",
      "alt": "MAXTOP Large Crossbody Fanny Pack with 4-Zipper Pockets,Gifts for Enjoy Sports Festival Workout Traveling Running Casual Hands-Free Wallets...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07WYKJXXY"
  },
  {
    "name": "Cascade Mountain Tech Lightweight Aircraft-Grade Aluminum Trekking Poles with Extended Down Grip Plus Tip Kit",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71TJLm0G1HL._AC_UL320_.jpg",
      "alt": "Cascade Mountain Tech Lightweight Aircraft-Grade Aluminum Trekking Poles with Extended Down Grip Plus Tip Kit",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01L2HYPNW"
  },
  {
    "name": "CAMBIVO 2 Pack Patella Tendon Knee Straps, Knee Brace for Women & Men with Extra Straps, Patella Bands for Pain Relief, Osgood Schlatter, J...",
    "category": "Walking",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81jXPqw47cL._AC_UL320_.jpg",
      "alt": "CAMBIVO 2 Pack Patella Tendon Knee Straps, Knee Brace for Women & Men with Extra Straps, Patella Bands for Pain Relief, Osgood Schlatter, J...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07K66HXZL"
  },
  {
    "name": "WATERFLY Crossbody Sling Backpack Sling Bag Travel Hiking Chest Bags Daypack (Teal blue)",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61UGXZfyX1L._AC_UL320_.jpg",
      "alt": "WATERFLY Crossbody Sling Backpack Sling Bag Travel Hiking Chest Bags Daypack (Teal blue)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07WNM894Y"
  },
  {
    "name": "Portable Neck Fan, Hands Free Bladeless, 360° Cooling Personal Fan,Wearable Quiet Fan for Outdoor Indoor, Birthday Gifts for Men Women Mom...",
    "category": "Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61wNF9vOVwL._AC_UL320_.jpg",
      "alt": "Portable Neck Fan, Hands Free Bladeless, 360° Cooling Personal Fan,Wearable Quiet Fan for Outdoor Indoor, Birthday Gifts for Men Women Mom...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09PCSR9SX"
  },
  {
    "name": "Allclair Nausea Relief Inhaler for Motion & Morning Sickness – Fast-Acting, Non-Drowsy, Natural Alternative to Pills & Patches, Travel Esse...",
    "category": "Walking",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71g6L2TP-aL._AC_UL320_.jpg",
      "alt": "Allclair Nausea Relief Inhaler for Motion & Morning Sickness – Fast-Acting, Non-Drowsy, Natural Alternative to Pills & Patches, Travel Esse...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CK185NTX"
  },
  {
    "name": "GOEWY Water Bottle Carrier Bag for Stanley 40/30 oz Tumbler with Phone Pocket Neoprene Water Bottle Holder with Shoulder & Handheld Strap S...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71eZfDkxqsL._AC_UL320_.jpg",
      "alt": "GOEWY Water Bottle Carrier Bag for Stanley 40/30 oz Tumbler with Phone Pocket Neoprene Water Bottle Holder with Shoulder & Handheld Strap S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CM6RBL9H"
  },
  {
    "name": "YQXCC Cooling Towels | 4 Pack 47\"x12\" | Ice Cool for Neck | Microfiber Soft Breathable Chilly | for Yoga, Sports, Golf, Gym, Camping, Runni...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91WCr0g5oSL._AC_UL320_.jpg",
      "alt": "YQXCC Cooling Towels | 4 Pack 47\"x12\" | Ice Cool for Neck | Microfiber Soft Breathable Chilly | for Yoga, Sports, Golf, Gym, Camping, Runni...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B082HNFVVZ"
  },
  {
    "name": "Bodyprox Patella Tendon Knee Strap 2 Pack, Knee Pain Relief Support Brace Hiking, Soccer, Basketball, Running, Jumpers Knee, Tennis, Tendon...",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71navnAvHlL._AC_UL320_.jpg",
      "alt": "Bodyprox Patella Tendon Knee Strap 2 Pack, Knee Pain Relief Support Brace Hiking, Soccer, Basketball, Running, Jumpers Knee, Tennis, Tendon...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07DLFP8Q5"
  },
  {
    "name": "United Ortho USA14115 Short Air Cam Walker Fracture Boot, Medium, Black",
    "category": "Walking",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712ulgENtRL._AC_UL320_.jpg",
      "alt": "United Ortho USA14115 Short Air Cam Walker Fracture Boot, Medium, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B009G5QAM2"
  },
  {
    "name": "Clip on Flashlight, Running Lights for Runners Dog Light for Dog Walking at Night Rechargeable Safety Portable EDC Flashlight Gift for Runn...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61WW-WRunhL._AC_UL320_.jpg",
      "alt": "Clip on Flashlight, Running Lights for Runners Dog Light for Dog Walking at Night Rechargeable Safety Portable EDC Flashlight Gift for Runn...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJPX358D"
  },
  {
    "name": "Poudee Weighted Vest, 6lb/8lb/10lb/12lb/16lb/20lb/25lb/30lb Weight Vest for Men Women, Body Weight Vests Adjustable with Reflective Stripe...",
    "category": "Walking",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/618btCg0HVL._AC_UL320_.jpg",
      "alt": "Poudee Weighted Vest, 6lb/8lb/10lb/12lb/16lb/20lb/25lb/30lb Weight Vest for Men Women, Body Weight Vests Adjustable with Reflective Stripe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DP8FQD18"
  },
  {
    "name": "EVENup - Shoe Lift for Walking Boot I Adult Size Medium I Shoe Balancer for Use with Fracture Boots or Leg Length Discrepancy I 3 Adjustabl...",
    "category": "Walking",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61jvoFwu-cL._AC_UL320_.jpg",
      "alt": "EVENup - Shoe Lift for Walking Boot I Adult Size Medium I Shoe Balancer for Use with Fracture Boots or Leg Length Discrepancy I 3 Adjustabl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08FX3YPWQ"
  },
  {
    "name": "CIVPOWER Neck Fan: Portable Personal Neck Cooling Rechargeable Bladeless Fan - Hands Free 3 Speed 4000 mAh Battery USB Operated Wearable He...",
    "category": "Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/617444ao-QS._AC_UL320_.jpg",
      "alt": "CIVPOWER Neck Fan: Portable Personal Neck Cooling Rechargeable Bladeless Fan - Hands Free 3 Speed 4000 mAh Battery USB Operated Wearable He...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0963TNK19"
  },
  {
    "name": "TREKOLOGY Trek-Z Cork Grip Trekking Poles – Lightweight Folding Hiking Poles, Adjustable Height, Compact Travel Design, Aircraft-Grade Alum...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81bw2L6AVML._AC_UL320_.jpg",
      "alt": "TREKOLOGY Trek-Z Cork Grip Trekking Poles – Lightweight Folding Hiking Poles, Adjustable Height, Compact Travel Design, Aircraft-Grade Alum...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07X6MXH51"
  },
  {
    "name": "Waist Pack with Water Bottle Holder for Running Walking Hiking Fanny Pack Hydration Belt",
    "category": "Walking",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71QchQ0kwFL._AC_UL320_.jpg",
      "alt": "Waist Pack with Water Bottle Holder for Running Walking Hiking Fanny Pack Hydration Belt",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B5TR8T5R"
  },
  {
    "name": "Lightweight Hydration Backpack, Running Backpack with 2L Water Bladder, Hydro Water Daypack for Cycling Hiking Rave for Men Women",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for walking shoppers who want better carrying, stronger visibility, fewer friction points, or a routine that is easier to repeat.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Walk Club lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check fit, weather, visibility needs, terrain, and comfort before using walking gear outside.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81PzR0zY5bL._AC_UL320_.jpg",
      "alt": "Lightweight Hydration Backpack, Running Backpack with 2L Water Bladder, Hydro Water Daypack for Cycling Hiking Rave for Men Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09TR9LPKN"
  }
];

export function getWalkClubCatalog(
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
