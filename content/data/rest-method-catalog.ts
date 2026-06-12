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
    "name": "Dr Teal&#x27;s Calm Blend Spray with Melatonin, Lavender & Chamomile Essential Oils, 6 fl oz (Pack of 3)",
    "category": "Sleep",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Sy5O5MxZL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Calm Blend Spray with Melatonin, Lavender & Chamomile Essential Oils, 6 fl oz (Pack of 3)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09VH85M4Y"
  },
  {
    "name": "MyHalos® Sleep Mask – 3D Blackout Eye Mask for Women & Men, Side Sleepers, Zero Pressure Memory Foam Eyelash Friendly, Breathable,Award-Win...",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81R3Yidb8dL._AC_UL320_.jpg",
      "alt": "MyHalos® Sleep Mask – 3D Blackout Eye Mask for Women & Men, Side Sleepers, Zero Pressure Memory Foam Eyelash Friendly, Breathable,Award-Win...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09CZ68WV3"
  },
  {
    "name": "Lemme Sleep Gummies with 5mg Melatonin, Elderberry, Magnesium, L-Theanine, Chamomile and Lavender, Drug-Free Nighttime Sleep Aid, Gluten Fr...",
    "category": "Sleep",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71yHlpcuqCL._AC_UL320_.jpg",
      "alt": "Lemme Sleep Gummies with 5mg Melatonin, Elderberry, Magnesium, L-Theanine, Chamomile and Lavender, Drug-Free Nighttime Sleep Aid, Gluten Fr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BL79D45P"
  },
  {
    "name": "Aromasong Lavender Pillow Spray for Sleeping - All Natural Calming Linen & Bedtime Sleep Mist for Deep Sleep - Pillow Spray Aromatherapy wi...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61b7bRnbBDL._AC_UL320_.jpg",
      "alt": "Aromasong Lavender Pillow Spray for Sleeping - All Natural Calming Linen & Bedtime Sleep Mist for Deep Sleep - Pillow Spray Aromatherapy wi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B093LPTTB9"
  },
  {
    "name": "Ultra Pain Relief Cooling Pillow for Neck Support, Adjustable Cervical Pillow Cozy Sleeping, Odorless Ergonomic Contour Memory Foam Pillows...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AwLlzE0pL._AC_UL320_.jpg",
      "alt": "Ultra Pain Relief Cooling Pillow for Neck Support, Adjustable Cervical Pillow Cozy Sleeping, Odorless Ergonomic Contour Memory Foam Pillows...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C1GQ54QD"
  },
  {
    "name": "OLLY Restful Sleep Gummy Supplement with Melatonin & L-Theanine Chamomile, Blackberry Zen, 50 Gummies (25 Day Supply) Supports a Healthy Sl...",
    "category": "Sleep",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71QEIZ5yD5L._AC_UL320_.jpg",
      "alt": "OLLY Restful Sleep Gummy Supplement with Melatonin & L-Theanine Chamomile, Blackberry Zen, 50 Gummies (25 Day Supply) Supports a Healthy Sl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0145QI7O0"
  },
  {
    "name": "Unisom SleepTabs, Nighttime Sleep-aid, Doxylamine Succinate, 80 Tablets",
    "category": "Sleep",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/6193Ld8ADSL._AC_UL320_.jpg",
      "alt": "Unisom SleepTabs, Nighttime Sleep-aid, Doxylamine Succinate, 80 Tablets",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01683HFGY"
  },
  {
    "name": "HealthA2Z Sleep Aid, Diphenhydramine Softgels, 50mg, Supports Deeper, Restful Sleeping (250 Counts)",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Kha0WYBGL._AC_UL320_.jpg",
      "alt": "HealthA2Z Sleep Aid, Diphenhydramine Softgels, 50mg, Supports Deeper, Restful Sleeping (250 Counts)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0848WCZFM"
  },
  {
    "name": "Cooling Eye Mask for Puffy Eyes: Fsa Eligible ltems Hsa, Migraines Headache Fast Relief After Surgery Care Cold Compress, Reusable Face Ice...",
    "category": "Sleep",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71pkANVWMUL._AC_UL320_.jpg",
      "alt": "Cooling Eye Mask for Puffy Eyes: Fsa Eligible ltems Hsa, Migraines Headache Fast Relief After Surgery Care Cold Compress, Reusable Face Ice...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7922DH6"
  },
  {
    "name": "Relaxium Sleep Aid for Adults - Melatonin 5mg with Magnesium Glycinate, Valerest & Ashwagandha - Non-Habit Forming Sleep Support for Fallin...",
    "category": "Sleep",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71GZiRnZojL._AC_UL320_.jpg",
      "alt": "Relaxium Sleep Aid for Adults - Melatonin 5mg with Magnesium Glycinate, Valerest & Ashwagandha - Non-Habit Forming Sleep Support for Fallin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00NJ1BQZA"
  },
  {
    "name": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Sleep Blend with Melatonin, Lavender & Chamomile Essential Oils, 3 lbs",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71baWQaP1SL._AC_UL320_.jpg",
      "alt": "Dr Teal&#x27;s Epsom Salt Magnesium Soak, Sleep Blend with Melatonin, Lavender & Chamomile Essential Oils, 3 lbs",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07XKZPBHH"
  },
  {
    "name": "MZOO Luxury Sleep Eye Mask for Side Sleeper Men Women, Zero Eye Pressure 3D Sleeping Mask, Light Blocking Patented Design Night Blindfold,...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71SMSJDNOBL._AC_UL320_.jpg",
      "alt": "MZOO Luxury Sleep Eye Mask for Side Sleeper Men Women, Zero Eye Pressure 3D Sleeping Mask, Light Blocking Patented Design Night Blindfold,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07KC5DWCC"
  },
  {
    "name": "This Works Deep Sleep Pillow Spray with Lavender, Vetivert & Chamomile – Natural Aromatherapy Sleep Mist for Bedtime Relaxation, 75ml / 2.5...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61po7Sj5YEL._AC_UL320_.jpg",
      "alt": "This Works Deep Sleep Pillow Spray with Lavender, Vetivert & Chamomile – Natural Aromatherapy Sleep Mist for Bedtime Relaxation, 75ml / 2.5...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B006VT8G1O"
  },
  {
    "name": "Fygrip 3D Eye Mask Sleep Mask for Men & Women, 100% Pressure-Free & Light Block-Out Eye Mask for Sleep with Easy Adjustable Strap, Night Ey...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71O3dAYHfCL._AC_UL320_.jpg",
      "alt": "Fygrip 3D Eye Mask Sleep Mask for Men & Women, 100% Pressure-Free & Light Block-Out Eye Mask for Sleep with Easy Adjustable Strap, Night Ey...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DJNSZ8VW"
  },
  {
    "name": "BeeVines 100% Real Mulberry Silk 2 Pack Sleep Mask, Natural Pure Silk Eye Masks with Adjustable Strap for Sleeping, 100% Block Light Eye Sl...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61AkmB-Ha5L._AC_UL320_.jpg",
      "alt": "BeeVines 100% Real Mulberry Silk 2 Pack Sleep Mask, Natural Pure Silk Eye Masks with Adjustable Strap for Sleeping, 100% Block Light Eye Sl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08817H6HS"
  },
  {
    "name": "LitBear Sleep Mask for Side Sleeper Women Men, Eye Mask for Sleeping Light Blocking, 3D Contoured Cup Sleeping Mask, Soft Breathable Sleep...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/813M0YqSLzL._AC_UL320_.jpg",
      "alt": "LitBear Sleep Mask for Side Sleeper Women Men, Eye Mask for Sleeping Light Blocking, 3D Contoured Cup Sleeping Mask, Soft Breathable Sleep...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09H7FZ5JM"
  },
  {
    "name": "Amazon Basic Care Nighttime Sleep Aid Tablets for Adults, Doxylamine Succinate 25 mg, 96 Count",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61IR8K0uRAL._AC_UL320_.jpg",
      "alt": "Amazon Basic Care Nighttime Sleep Aid Tablets for Adults, Doxylamine Succinate 25 mg, 96 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B079HXLZGY"
  },
  {
    "name": "BeHoomi Steam Eye Mask, 10Packs Heated Eye Mask, Self Heating Disposable SPA Warm Compress for Eyes Sleep Mask, Travel Essentials & Relaxat...",
    "category": "Sleep",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ePyFq+JpL._AC_UL320_.jpg",
      "alt": "BeHoomi Steam Eye Mask, 10Packs Heated Eye Mask, Self Heating Disposable SPA Warm Compress for Eyes Sleep Mask, Travel Essentials & Relaxat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B6VT7KG5"
  },
  {
    "name": "Zen Sleep Essential Oil Roll-On 10 ml - Calming Blend for Serenity & Deep Sleep with Lavender, Rosemary - Easy-to-Use Roller Ball - Nexon B...",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71C9PBPdiKL._AC_UL320_.jpg",
      "alt": "Zen Sleep Essential Oil Roll-On 10 ml - Calming Blend for Serenity & Deep Sleep with Lavender, Rosemary - Easy-to-Use Roller Ball - Nexon B...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BC5D7FB9"
  },
  {
    "name": "Boiron SleepCalm Sleep Aid for Deep, Relaxing, Restful Nighttime Sleep - Melatonin-Free and Non Habit-Forming - 60 Count",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7143ksh9O6L._AC_UL320_.jpg",
      "alt": "Boiron SleepCalm Sleep Aid for Deep, Relaxing, Restful Nighttime Sleep - Melatonin-Free and Non Habit-Forming - 60 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08DQLFG4V"
  },
  {
    "name": "ZzzQuil, Pure Zzzs Melatonin Gummies, Sleep Aid, Melatonin 2mg, with Chamomile and Lavender, Melatonin Sleep Gummies, Sleep Aids for Adults...",
    "category": "Sleep",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7129sag1N7L._AC_UL320_.jpg",
      "alt": "ZzzQuil, Pure Zzzs Melatonin Gummies, Sleep Aid, Melatonin 2mg, with Chamomile and Lavender, Melatonin Sleep Gummies, Sleep Aids for Adults...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07N46LTJJ"
  },
  {
    "name": "Formulation Factory The Night Before Magnesium Glycinate Sleep Aid, 10-in-1 Sleep Supplement with Melatonin 4mg, L-Theanine, Lemon Balm, Ta...",
    "category": "Sleep",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81KF86Vue7L._AC_UL320_.jpg",
      "alt": "Formulation Factory The Night Before Magnesium Glycinate Sleep Aid, 10-in-1 Sleep Supplement with Melatonin 4mg, L-Theanine, Lemon Balm, Ta...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DP3MT8YJ"
  },
  {
    "name": "Nello Supercalm Powdered Drink Mix, Cortisol Reducer and Sleep Aid Supplement, L Theanine, Ksm-66 Ashwagandha, Magnesium Glycinate, Vitamin...",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81GtThpozwL._AC_UL320_.jpg",
      "alt": "Nello Supercalm Powdered Drink Mix, Cortisol Reducer and Sleep Aid Supplement, L Theanine, Ksm-66 Ashwagandha, Magnesium Glycinate, Vitamin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BY3FDX3K"
  },
  {
    "name": "MABAO Sleep Mask for Side Sleeper, Eye Mask for Sleeping Women Men, 3D Contoured Cup No Eye Pressure 100% Light Blocking Sleeping Mask with...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/816U06Gxm4L._AC_UL320_.jpg",
      "alt": "MABAO Sleep Mask for Side Sleeper, Eye Mask for Sleeping Women Men, 3D Contoured Cup No Eye Pressure 100% Light Blocking Sleeping Mask with...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09XTVHMQ1"
  },
  {
    "name": "ZzzQuil Pure Zzzs Complete Sleep, Melatonin 10mg, L-Theanine, GABA, with Ashwagandha, and Magnesium, Melatonin Sleep Aid, 100 Count",
    "category": "Sleep",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ohcXniW5L._AC_UL320_.jpg",
      "alt": "ZzzQuil Pure Zzzs Complete Sleep, Melatonin 10mg, L-Theanine, GABA, with Ashwagandha, and Magnesium, Melatonin Sleep Aid, 100 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DQQF4PCX"
  },
  {
    "name": "Plus One Blissful Sleep Spray – Magnesium, Lavender & Ashwagandha for Relaxation, Calm & Rest – Hormone-Free, Fragrance-Free, Menopause-Fri...",
    "category": "Sleep",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Dim0a3d9L._AC_UL320_.jpg",
      "alt": "Plus One Blissful Sleep Spray – Magnesium, Lavender & Ashwagandha for Relaxation, Calm & Rest – Hormone-Free, Fragrance-Free, Menopause-Fri...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FLTHH2WQ"
  },
  {
    "name": "ZzzQuil, Sleep Aid, Nighttime Sleep Aid Liquid, 50 mg Diphenhydramine HCl, Fall Asleep Fast, Non-Habit Forming, Warming Berry Flavor, 12 FL...",
    "category": "Sleep",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81k5296xl7L._AC_UL320_.jpg",
      "alt": "ZzzQuil, Sleep Aid, Nighttime Sleep Aid Liquid, 50 mg Diphenhydramine HCl, Fall Asleep Fast, Non-Habit Forming, Warming Berry Flavor, 12 FL...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B007OSBYRY"
  },
  {
    "name": "Natrol 10 mg Melatonin Gummies, Sleep Support for Adults, Melatonin Supplements for Sleeping, 90 Strawberry-Flavored Gummies, 45 Day Supply",
    "category": "Sleep",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for sleep shoppers who want a calmer room cue, better bedding feel, or one less nightstand annoyance.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Sleep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Rest Method lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "This site does not diagnose, treat, or promise sleep outcomes. It is shopping guidance only.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/710yu6FlQ7L._AC_UL320_.jpg",
      "alt": "Natrol 10 mg Melatonin Gummies, Sleep Support for Adults, Melatonin Supplements for Sleeping, 90 Strawberry-Flavored Gummies, 45 Day Supply",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B079TD7HG2"
  }
];

export function getRestMethodCatalog(
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
