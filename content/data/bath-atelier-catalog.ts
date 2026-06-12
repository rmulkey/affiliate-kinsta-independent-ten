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
    "name": "Calgon Ageless Bath Series Renewing Pearls, 16 oz.",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81AjRG7hyiL._AC_UL320_.jpg",
      "alt": "Calgon Ageless Bath Series Renewing Pearls, 16 oz.",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B005JIXIAC"
  },
  {
    "name": "Bath Pillow Bathtub Pillow, Luxury Bath Pillows for Tub Neck and Back Support, Bath Tub Pillow Headrest with Soft 4D Mesh Fabric and Non-Sl...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61B+vIGPiOL._AC_UL320_.jpg",
      "alt": "Bath Pillow Bathtub Pillow, Luxury Bath Pillows for Tub Neck and Back Support, Bath Tub Pillow Headrest with Soft 4D Mesh Fabric and Non-Sl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJ8LLHF5"
  },
  {
    "name": "Ancient Minerals Magnesium Bath Flakes of Pure Genuine Zechstein Chloride - Resealable Magnesium Supplement Bag that Will Outperform Leadin...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iSrDwN9zL._AC_UL320_.jpg",
      "alt": "Ancient Minerals Magnesium Bath Flakes of Pure Genuine Zechstein Chloride - Resealable Magnesium Supplement Bag that Will Outperform Leadin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B005F1ATJQ"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Restorative Minerals with Magnesium, Potassium & Zinc, 3 lbs",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71PpMyUs7aL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Restorative Minerals with Magnesium, Potassium & Zinc, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2Y9GCK2"
  },
  {
    "name": "Body Restore Shower Steamers Aromatherapy 6 Pack – Fathers Day Gift for Dad, Birthday Gifts for Women & Men, Spa Stress Relief & Relaxation...",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71wc+wUusTL._AC_UL320_.jpg",
      "alt": "Body Restore Shower Steamers Aromatherapy 6 Pack – Fathers Day Gift for Dad, Birthday Gifts for Women & Men, Spa Stress Relief & Relaxation...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJYCRS51"
  },
  {
    "name": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Soothe & Sleep with Lavender, 34 fl oz (Pack of 2)",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81imI2Q+r8L._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Soothe & Sleep with Lavender, 34 fl oz (Pack of 2)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CK52TBH3"
  },
  {
    "name": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Shea Butter & Almond Oil, 62.5 fl oz",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81f93Wcn6AL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Shea Butter & Almond Oil, 62.5 fl oz",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FQL6T3RH"
  },
  {
    "name": "Gifts for Women Who Have Everything Spa Gift Basket, Epsom Bath Salts Gift Basket Set, Self Care Salt W/Essential Oil, Gifts for Mom, Her,...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81WZWmKn1QL._AC_UL320_.jpg",
      "alt": "Gifts for Women Who Have Everything Spa Gift Basket, Epsom Bath Salts Gift Basket Set, Self Care Salt W/Essential Oil, Gifts for Mom, Her,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09DSGTL65"
  },
  {
    "name": "LifeAround2Angels Bath Bombs Gift Set 12 USA made Fizzies, Shea & Coco Butter Dry Skin Moisturize, Perfect for Bubble Spa Bath. Handmade Bi...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91dSs7Lcs4L._AC_UL320_.jpg",
      "alt": "LifeAround2Angels Bath Bombs Gift Set 12 USA made Fizzies, Shea & Coco Butter Dry Skin Moisturize, Perfect for Bubble Spa Bath. Handmade Bi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01MFGN8S5"
  },
  {
    "name": "Bath Bombs Gift Set - USA Made with Organic & Natural Ingredients, Relaxing Spa Gifts for Women & Men",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81b7juZJqhL._AC_UL320_.jpg",
      "alt": "Bath Bombs Gift Set - USA Made with Organic & Natural Ingredients, Relaxing Spa Gifts for Women & Men",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00W2EH98I"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Sleep Blend with Melatonin, Lavender & Chamomile Essential Oils, 3 lbs",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71baWQaP1SL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Sleep Blend with Melatonin, Lavender & Chamomile Essential Oils, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07XKZPBHH"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Limited Edition Hawaiian Bliss, 3 lbs",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iey+EKF7L._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Limited Edition Hawaiian Bliss, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F2THVK72"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Soaking Solution, Soothe & Sleep, Lavender, 3lbs",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71do5I4NAWL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Soaking Solution, Soothe & Sleep, Lavender, 3lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00LW1KAYC"
  },
  {
    "name": "One with Nature 100% Dead Sea Bath Salt for Soaking - 5LB Unscented with High Mineral Content, Magnesium, Sulfur, Zinc, Potassium. Skin Nou...",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iEC1mwCDL._AC_UL320_.jpg",
      "alt": "One with Nature 100% Dead Sea Bath Salt for Soaking - 5LB Unscented with High Mineral Content, Magnesium, Sulfur, Zinc, Potassium. Skin Nou...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0127XRALY"
  },
  {
    "name": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Soothe & Sleep with Lavender, 62.5 fl oz",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ggb8jjzXL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Soothe & Sleep with Lavender, 62.5 fl oz",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DXKPTG92"
  },
  {
    "name": "Amazon Basics Epsom Salt Soaking Aid, Lavender Scented, Relax & Relief, Resealable, 3 Pound, 1-Pack (Previously Solimo)",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61aXZxT1v8L._AC_UL320_.jpg",
      "alt": "Amazon Basics Epsom Salt Soaking Aid, Lavender Scented, Relax & Relief, Resealable, 3 Pound, 1-Pack (Previously Solimo)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07NJQ9RRG"
  },
  {
    "name": "Coach Soak Recovery Bath Soak - Alternative to Epsom Salt Bath Soak - Fast-Absorbing Pure Magnesium Flakes & Dead Sea Salt with 21 Minerals...",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71gA1YyIZFL._AC_UL320_.jpg",
      "alt": "Coach Soak Recovery Bath Soak - Alternative to Epsom Salt Bath Soak - Fast-Absorbing Pure Magnesium Flakes & Dead Sea Salt with 21 Minerals...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07W4M3797"
  },
  {
    "name": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Sleep Blend with Melatonin, Lavender & Chamomile Essential Oils, 62.5 fl oz",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81tFenHP6nL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Foaming Bath with Pure Epsom Salt, Sleep Blend with Melatonin, Lavender & Chamomile Essential Oils, 62.5 fl oz",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FQL7MQ6S"
  },
  {
    "name": "Amazon Basics Lavender Scented Foaming Bath with Essential Oil and Epsom Salt, Soothing, 34 Fluid Ounce",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61beD1fVbXL._AC_UL320_.jpg",
      "alt": "Amazon Basics Lavender Scented Foaming Bath with Essential Oil and Epsom Salt, Soothing, 34 Fluid Ounce",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMJ8Z2YP"
  },
  {
    "name": "ELEMIS Aching Muscle Super Soak 400ml, Natural Bath Milk Soak To Ease Muscle Aches & Tension",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712gjDb74OL._AC_UL320_.jpg",
      "alt": "ELEMIS Aching Muscle Super Soak 400ml, Natural Bath Milk Soak To Ease Muscle Aches & Tension",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00K24YFIM"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Relax & Relief with Eucalyptus & Spearmint Essential Oils, 3 lbs",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qBdkMTVQL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Relax & Relief with Eucalyptus & Spearmint Essential Oils, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0092MG5JW"
  },
  {
    "name": "SAINT JANE - Deep Sleep Bath Salts with Magnesium + Peptides | Luxury, Floral-Infused, Clean Skincare (12 oz | 355 ml)",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41-9v3h8HaL._AC_UL320_.jpg",
      "alt": "SAINT JANE - Deep Sleep Bath Salts with Magnesium + Peptides | Luxury, Floral-Infused, Clean Skincare (12 oz | 355 ml)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CC9B45QT"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Soften & Moisturize with Shea Butter & Almond Oil, 3 lbs",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71WITBeAbML._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Soften & Moisturize with Shea Butter & Almond Oil, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07TZ52P3V"
  },
  {
    "name": "L&#x27;OCCITANE Foaming Bath: Relaxing Lavender, Comforting Shea, Beautifying Almond Milk, Citrusy Verbena, Cleansing Bubble Bath, 16.9 Fl. Oz",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71++6NA-sFL._AC_UL320_.jpg",
      "alt": "L&#x27;OCCITANE Foaming Bath: Relaxing Lavender, Comforting Shea, Beautifying Almond Milk, Citrusy Verbena, Cleansing Bubble Bath, 16.9 Fl. Oz",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B005I4WBDM"
  },
  {
    "name": "Amazon Basics Epsom Salt Soaking Aid, Eucalyptus Scented, 3 Pound",
    "category": "Bath",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61MIy1nwKFL._AC_UL320_.jpg",
      "alt": "Amazon Basics Epsom Salt Soaking Aid, Eucalyptus Scented, 3 Pound",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07NJPSDL7"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Stress Relief with Essential Oils, 3 lbs",
    "category": "Bath",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71BtesVDBaL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Stress Relief with Essential Oils, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2Y72MGQ"
  },
  {
    "name": "Calgon Ageless Bath Series Nourishing Milk Bath (26-Ounce)",
    "category": "Bath",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/512KdEV8TCL._AC_UL320_.jpg",
      "alt": "Calgon Ageless Bath Series Nourishing Milk Bath (26-Ounce)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B005JIXI5C"
  },
  {
    "name": "Epsom Salt Bath Gift Set – 6 Aromatherapy Blends with Essential Oils – Bath & Body Gift Set for Women, Stress Relief, Self Care, Birthday G...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for bath shoppers who want a cleaner shower, softer towel moment, better bathroom storage, or a small daily reset.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Bath shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bath Atelier lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check ingredients, fragrance notes, material care, and bathroom dimensions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71r92P+R96L._AC_UL320_.jpg",
      "alt": "Epsom Salt Bath Gift Set – 6 Aromatherapy Blends with Essential Oils – Bath & Body Gift Set for Women, Stress Relief, Self Care, Birthday G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FSFSKNPN"
  }
];

export function getBathAtelierCatalog(
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
