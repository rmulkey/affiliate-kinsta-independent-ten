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
    "name": "Wavytalk Thermal Brush, Blowout Boost 1.5 inch Heated Round Brush for Blowout Look, Dual Voltage, Pink, Sakura, Tourmaline Ceramic, Negativ...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61QfCr+64wL._AC_UL320_.jpg",
      "alt": "Wavytalk Thermal Brush, Blowout Boost 1.5 inch Heated Round Brush for Blowout Look, Dual Voltage, Pink, Sakura, Tourmaline Ceramic, Negativ...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQSNXLJR"
  },
  {
    "name": "TYMO CurlPro Plus Automatic Rotating Curling Iron - Upgraded Long Barrel Curling Wand for Long Hair, Ceramic Hair Curler for Women, Anti-Sc...",
    "category": "Hair",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61tEN+BEbtL._AC_UL320_.jpg",
      "alt": "TYMO CurlPro Plus Automatic Rotating Curling Iron - Upgraded Long Barrel Curling Wand for Long Hair, Ceramic Hair Curler for Women, Anti-Sc...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DPZLWX8J"
  },
  {
    "name": "TYMO Hair Dryer Brush Blow Dryer Brush in One, 4 in 1 Ionic Hairdryer and Styler Volumizer with Oval Titanium Barrel, Hot Air Straightener...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LVtB1oWqL._AC_UL320_.jpg",
      "alt": "TYMO Hair Dryer Brush Blow Dryer Brush in One, 4 in 1 Ionic Hairdryer and Styler Volumizer with Oval Titanium Barrel, Hot Air Straightener...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08VWF7R91"
  },
  {
    "name": "REVLON One-Step Volumizer Hair Dryer and Styler – Easy Salon-Style Blowouts – Less Frizz, More Shine, and Reduced Heat Damage, for All Hair...",
    "category": "Hair",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61SrWfdHa1L._AC_UL320_.jpg",
      "alt": "REVLON One-Step Volumizer Hair Dryer and Styler – Easy Salon-Style Blowouts – Less Frizz, More Shine, and Reduced Heat Damage, for All Hair...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01LSUQSB0"
  },
  {
    "name": "ELLA BELLA® 6 in 1 Professional Hot Air Styler • Powerful Hair Dryer & Straightener Set • Styling Without Heat Damage • Fast Drying Curling...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Azvitr7PL._AC_UL320_.jpg",
      "alt": "ELLA BELLA® 6 in 1 Professional Hot Air Styler • Powerful Hair Dryer & Straightener Set • Styling Without Heat Damage • Fast Drying Curling...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CN3XNVJT"
  },
  {
    "name": "7MAGIC 6 in 1 Multi Hair Styler Dryer Brush, 110,000 RPM High-Speed, Negative Ionic, Fast Drying for Professional Blow Dry, Curling, Volumi...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71n91JSnjuL._AC_UL320_.jpg",
      "alt": "7MAGIC 6 in 1 Multi Hair Styler Dryer Brush, 110,000 RPM High-Speed, Negative Ionic, Fast Drying for Professional Blow Dry, Curling, Volumi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8GJ6XLX"
  },
  {
    "name": "Wavytalk Power Wave Hair Crimper, Curling Iron Hair Crimper Waver, Ventilation Design for Less Damage, Ionic Reduces Frizz, Effortless-Wave...",
    "category": "Hair",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61E+OHPYiUL._AC_UL320_.jpg",
      "alt": "Wavytalk Power Wave Hair Crimper, Curling Iron Hair Crimper Waver, Ventilation Design for Less Damage, Ionic Reduces Frizz, Effortless-Wave...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FWBH9ZF9"
  },
  {
    "name": "L&#x27;ANGE HAIR Le Duo Grande 360° Airflow 2 in 1 Straightener and Curler | 1 Inch Curling Wand & Titanium Flat Iron with 5.3\" Plates | Ha...",
    "category": "Hair",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71dnegfq4wL._AC_UL320_.jpg",
      "alt": "L&#x27;ANGE HAIR Le Duo Grande 360° Airflow 2 in 1 Straightener and Curler | 1 Inch Curling Wand & Titanium Flat Iron with 5.3\" Plates | Ha...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CD33RXR9"
  },
  {
    "name": "TYMO Automatic Rotating Curling Iron - TYMO CURLPRO Beach Waves Curling Wand, Portable Hair Curler, 500 Million Ionic, Dual Voltage & Light...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/513hI1Hg4-L._AC_UL320_.jpg",
      "alt": "TYMO Automatic Rotating Curling Iron - TYMO CURLPRO Beach Waves Curling Wand, Portable Hair Curler, 500 Million Ionic, Dual Voltage & Light...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSJ127VR"
  },
  {
    "name": "HOT TOOLS Black Gold Ionic 1 1/4 Inch Flat Iron, Use as Straightener for Sleek Straight Hair or Use Rounded Edges for Shiny Curls and Waves...",
    "category": "Hair",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51n3OMrYOyL._AC_UL320_.jpg",
      "alt": "HOT TOOLS Black Gold Ionic 1 1/4 Inch Flat Iron, Use as Straightener for Sleek Straight Hair or Use Rounded Edges for Shiny Curls and Waves...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07KSQZ4MR"
  },
  {
    "name": "Shark FlexStyle Air Styling & Drying System, Powerful Hair Dryer Brush & Multi-Styler with Auto-Wrap Curlers, Paddle Brush, Oval Brush, Con...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71XnLIh6Q1L._AC_UL320_.jpg",
      "alt": "Shark FlexStyle Air Styling & Drying System, Powerful Hair Dryer Brush & Multi-Styler with Auto-Wrap Curlers, Paddle Brush, Oval Brush, Con...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B89P16MC"
  },
  {
    "name": "Hair Straightener Brush, TYMO Ring Hair Straightener Comb Straightening Brush for Women with 5 Temps 20s Fast Heating & Dual Voltage, Black",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/711r5qeAFjL._AC_UL320_.jpg",
      "alt": "Hair Straightener Brush, TYMO Ring Hair Straightener Comb Straightening Brush for Women with 5 Temps 20s Fast Heating & Dual Voltage, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07MMQ4BZH"
  },
  {
    "name": "Hair Dryer Brush 5 in 1, Negative Ion Blow Dryer Brush Set - 110,000 RPM High - Speed Hot Air Brush Air Styler Curling Wrap Air Curler,Curl...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61fO6tBQZIL._AC_UL320_.jpg",
      "alt": "Hair Dryer Brush 5 in 1, Negative Ion Blow Dryer Brush Set - 110,000 RPM High - Speed Hot Air Brush Air Styler Curling Wrap Air Curler,Curl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FZHC8CQD"
  },
  {
    "name": "Remington Shine Therapy 1 inch Hair Straightener Iron, Flat Iron Infused with Argan Oil & Keratin, Professional Ceramic Flat Iron for Less...",
    "category": "Hair",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61VkRoH0BSL._AC_UL320_.jpg",
      "alt": "Remington Shine Therapy 1 inch Hair Straightener Iron, Flat Iron Infused with Argan Oil & Keratin, Professional Ceramic Flat Iron for Less...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09GKY436P"
  },
  {
    "name": "Wavytalk 5 in 1 Curling Wand Set, Multi Curl, Curling Wand Set with Thermal Brush and 4 Interchangeable Ceramic Curling Wand(0.5”-1.25”), I...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71aWQIc5dpL._AC_UL320_.jpg",
      "alt": "Wavytalk 5 in 1 Curling Wand Set, Multi Curl, Curling Wand Set with Thermal Brush and 4 Interchangeable Ceramic Curling Wand(0.5”-1.25”), I...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09CGDXW32"
  },
  {
    "name": "Shark Hair Dryer | FlexStyle Hair Styling System | Portable & Powerful Blow Dryer Brush | Hair Curler & Volumizer | 6 Styling Tools Include...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71b5gpPEKxL._AC_UL320_.jpg",
      "alt": "Shark Hair Dryer | FlexStyle Hair Styling System | Portable & Powerful Blow Dryer Brush | Hair Curler & Volumizer | 6 Styling Tools Include...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B9ZMZ65C"
  },
  {
    "name": "Bed Head Wave Artist Deep Waver | Combat Frizz, Get Long Lasting Results, & Add Massive Shine for Beachy Waves | With Tourmaline Ceramic Te...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61HDKxMaCvL._AC_UL320_.jpg",
      "alt": "Bed Head Wave Artist Deep Waver | Combat Frizz, Get Long Lasting Results, & Add Massive Shine for Beachy Waves | With Tourmaline Ceramic Te...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07CSZBWGQ"
  },
  {
    "name": "Bed Head Wave Affair Jumbo 3 Barrel Hair Waver | Quick Styling, Serious Hold, & Less Heat Damage | Heat Protectant Glove Included for Easy,...",
    "category": "Hair",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61WQD5ie+UL._AC_UL320_.jpg",
      "alt": "Bed Head Wave Affair Jumbo 3 Barrel Hair Waver | Quick Styling, Serious Hold, & Less Heat Damage | Heat Protectant Glove Included for Easy,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B096L1DDXZ"
  },
  {
    "name": "TYMO Flat Iron Hair Straightener Brush 2 in 1, 200M Ions Hair Straighteners for Women, Ceramic Straightening Hot Comb for Anti-Frizz Straig...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/616-mtZ7AcL._AC_UL320_.jpg",
      "alt": "TYMO Flat Iron Hair Straightener Brush 2 in 1, 200M Ions Hair Straighteners for Women, Ceramic Straightening Hot Comb for Anti-Frizz Straig...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJDK6BMT"
  },
  {
    "name": "5 in 1 Hot Air Styler Wrap - High-Speed Hair Dryer, Volumizing Brush with Auto Curlers, Fast Drying & Frizz-Free Styling Straightening, No...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71CCZNNPjeL._AC_UL320_.jpg",
      "alt": "5 in 1 Hot Air Styler Wrap - High-Speed Hair Dryer, Volumizing Brush with Auto Curlers, Fast Drying & Frizz-Free Styling Straightening, No...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7W64SF8"
  },
  {
    "name": "Bio Ionic Long Barrel Curling Iron with Moisture Heat Technology & NanoIonic MX Versatile Curling Wand - Multiple Barrel Sizes for Tight, C...",
    "category": "Hair",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61YjYlHNnBL._AC_UL320_.jpg",
      "alt": "Bio Ionic Long Barrel Curling Iron with Moisture Heat Technology & NanoIonic MX Versatile Curling Wand - Multiple Barrel Sizes for Tight, C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01J248HWM"
  },
  {
    "name": "Mythsight StyleVibe 6-in-1 Air Styler, Hair Dryer & Blow Dryer Brush with Auto-Wrap Curl L/R, Fast Drying, Smooth Blowouts, Root-Lift Volum...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71aQCZ-c8YL._AC_UL320_.jpg",
      "alt": "Mythsight StyleVibe 6-in-1 Air Styler, Hair Dryer & Blow Dryer Brush with Auto-Wrap Curl L/R, Fast Drying, Smooth Blowouts, Root-Lift Volum...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FFLTC255"
  },
  {
    "name": "L&#x27;ANGE HAIR Le Ceramique 1-Pass Flat Iron Hair Straightener | Fast Heating Ceramic Flat Iron | Best Hot Tools Professional Hair Straig...",
    "category": "Hair",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71nP3Q6SczL._AC_UL320_.jpg",
      "alt": "L&#x27;ANGE HAIR Le Ceramique 1-Pass Flat Iron Hair Straightener | Fast Heating Ceramic Flat Iron | Best Hot Tools Professional Hair Straig...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B6QH99GB"
  },
  {
    "name": "Dyson Airwrap i.d.™ Multi-Styler, Allure Winner, Bluetooth Connected, No Heat Damage, 6-in-1 Versatility, Intelligent Hair Styler",
    "category": "Hair",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61k259EyWRL._AC_UL320_.jpg",
      "alt": "Dyson Airwrap i.d.™ Multi-Styler, Allure Winner, Bluetooth Connected, No Heat Damage, 6-in-1 Versatility, Intelligent Hair Styler",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F96LDS27"
  },
  {
    "name": "7MAGIC 7-in-1 Hot Air Styler, Hair Styler Dryer Brush with Auto-Wrap Curlers, High-Speed Hair Dryer for Fast Drying, Volumizing & Straighte...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61m5LgZRC9L._AC_UL320_.jpg",
      "alt": "7MAGIC 7-in-1 Hot Air Styler, Hair Styler Dryer Brush with Auto-Wrap Curlers, High-Speed Hair Dryer for Fast Drying, Volumizing & Straighte...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FXZY5VTW"
  },
  {
    "name": "Conair Double Ceramic 3 Barrel Curling Iron, Triple Barrel Waver Hair Tool Creates Deep, Continuous Waves, Hair Curler for All Hair Lengths...",
    "category": "Hair",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61wxFMSbrkL._AC_UL320_.jpg",
      "alt": "Conair Double Ceramic 3 Barrel Curling Iron, Triple Barrel Waver Hair Tool Creates Deep, Continuous Waves, Hair Curler for All Hair Lengths...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07WRSW956"
  },
  {
    "name": "L&#x27;ANGE HAIR Le Volume 2-in-1 Titanium Blow Dryer Brush | Frizz Control Blowout Hair Dryer Brush For Drying And Straightening | Volumiz...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51vyqujH32L._AC_UL320_.jpg",
      "alt": "L&#x27;ANGE HAIR Le Volume 2-in-1 Titanium Blow Dryer Brush | Frizz Control Blowout Hair Dryer Brush For Drying And Straightening | Volumiz...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B3FT3T3D"
  },
  {
    "name": "HOT TOOLS 24K Gold Blow Dryer Brush, Round Brush Blow Dryer for Salon-Worthy Blowouts in One Step, Fast Styling & Long-Lasting Results",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for hair shoppers who want faster styling, gentler prep, cleaner storage, or a trend that is actually wearable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Hair shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Hair Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Use heat tools carefully and follow the product instructions for your hair type.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61SlMsztu5L._AC_UL320_.jpg",
      "alt": "HOT TOOLS 24K Gold Blow Dryer Brush, Round Brush Blow Dryer for Salon-Worthy Blowouts in One Step, Fast Styling & Long-Lasting Results",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07SH1MKZ6"
  }
];

export function getHairEditCatalog(
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
