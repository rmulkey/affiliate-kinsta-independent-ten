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
    "name": "JODSONE Gel Nail Polish Kit 60 PCS with U V Light Soak off Base Top Coat 55 Shine Colors Gel Nail Kit Bright and Dark Brown Wine Red Series...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71G-mlJMJsL._AC_UL320_.jpg",
      "alt": "JODSONE Gel Nail Polish Kit 60 PCS with U V Light Soak off Base Top Coat 55 Shine Colors Gel Nail Kit Bright and Dark Brown Wine Red Series...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BK9872HC"
  },
  {
    "name": "Beetles Gel Nail Polish Kit with U V Light - 80Pcs Color Enchantment 55 Colors Gel Nail Kit with Everything Base Top Coat Beginner Starter...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71STzNIRHPL._AC_UL320_.jpg",
      "alt": "Beetles Gel Nail Polish Kit with U V Light - 80Pcs Color Enchantment 55 Colors Gel Nail Kit with Everything Base Top Coat Beginner Starter...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CL4RWBYR"
  },
  {
    "name": "COSCELIA 53pcs Gel Nail Polish Kit with U V light and Drill Starter Kit 35 Colors Gel Nail Polish with 5pcs Top Base Coat Nail Art Professi...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81gzeVn+OlL._AC_UL320_.jpg",
      "alt": "COSCELIA 53pcs Gel Nail Polish Kit with U V light and Drill Starter Kit 35 Colors Gel Nail Polish with 5pcs Top Base Coat Nail Art Professi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8KK5VBK"
  },
  {
    "name": "JODSONE Gel Nail Polish Kit with U V Light 32 Colors Gel Polish Nail + 4 Functional Adhesive Bottles Kit Soak Off Manicure Tools Gifts for...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81JuXVcBcjL._AC_UL320_.jpg",
      "alt": "JODSONE Gel Nail Polish Kit with U V Light 32 Colors Gel Polish Nail + 4 Functional Adhesive Bottles Kit Soak Off Manicure Tools Gifts for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B097BSKN9P"
  },
  {
    "name": "OPI GELement LED Cure Gel Nail Polish System | DIY Salon Quality | Assorted Colors, Base & Top Coat | LED Curing Lamp | Starter Kit + Prep...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71K5ACp2OFL._AC_UL320_.jpg",
      "alt": "OPI GELement LED Cure Gel Nail Polish System | DIY Salon Quality | Assorted Colors, Base & Top Coat | LED Curing Lamp | Starter Kit + Prep...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FBPTYFDL"
  },
  {
    "name": "Beetles Gel Nail Polish Kit with U V Light -54 Pcs Gel Nail Kit Four Seasons Glow 32 Colors Set with Everything Base Top Coat Soak Off at H...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71alX45aIBL._AC_UL320_.jpg",
      "alt": "Beetles Gel Nail Polish Kit with U V Light -54 Pcs Gel Nail Kit Four Seasons Glow 32 Colors Set with Everything Base Top Coat Soak Off at H...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CL4QS55M"
  },
  {
    "name": "Beetles Deal Box Gel Nail Polish Kit with U V Light - 32 Colors Studio Essentials Gel Polish 68 Pcs Nail Kit with TPO & HEMA Free Base Coat...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Z90T87J2L._AC_UL320_.jpg",
      "alt": "Beetles Deal Box Gel Nail Polish Kit with U V Light - 32 Colors Studio Essentials Gel Polish 68 Pcs Nail Kit with TPO & HEMA Free Base Coat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FFFZ99WS"
  },
  {
    "name": "Beetles Gel Nail Polish Kit with U V Light, 68 Pcs Gel Nail Kit 35 Colors Emotional Spectrum with Base Matte&Glossy Top Coat Soak Off Nails...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81lHMdnrllL._AC_UL320_.jpg",
      "alt": "Beetles Gel Nail Polish Kit with U V Light, 68 Pcs Gel Nail Kit 35 Colors Emotional Spectrum with Base Matte&Glossy Top Coat Soak Off Nails...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CCR8TRGF"
  },
  {
    "name": "JODSONE 36 PCS Gel Nail Polish Set-32 Colors Gel Polish Kit Base Coat Glossy Matte and Glitter Top Coat Nail Polish Set Green Blue Red Pink...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81WMaPyG07L._AC_UL320_.jpg",
      "alt": "JODSONE 36 PCS Gel Nail Polish Set-32 Colors Gel Polish Kit Base Coat Glossy Matte and Glitter Top Coat Nail Polish Set Green Blue Red Pink...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09KC56289"
  },
  {
    "name": "beetles Summer Gel Polish Set - Fingertip Palette, 32 Colors Polish Set with Base Top Coat Pink Red Blue Purple Brown Yellow Green Black Wh...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81dkpJyT0GL._AC_UL320_.jpg",
      "alt": "beetles Summer Gel Polish Set - Fingertip Palette, 32 Colors Polish Set with Base Top Coat Pink Red Blue Purple Brown Yellow Green Black Wh...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2MG495V"
  },
  {
    "name": "beetles 44pcs Gel Nail Polish Set - 36 Colors Colorful Muse Gel Polish Kit Pink Nude Red Yellow Green Black White Glitter Nail Kit Base Top...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81kGlvLhWCL._AC_UL320_.jpg",
      "alt": "beetles 44pcs Gel Nail Polish Set - 36 Colors Colorful Muse Gel Polish Kit Pink Nude Red Yellow Green Black White Glitter Nail Kit Base Top...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGZBNB24"
  },
  {
    "name": "Beetles Gel Nail Polish Set, 119 PCS 100 Colors Nail Gel Polish Kit with Base, Glossy Matte Glitter Top Coat, Nail Nook Pearl Cat Eye White...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81pFaHvAfGL._AC_UL320_.jpg",
      "alt": "Beetles Gel Nail Polish Set, 119 PCS 100 Colors Nail Gel Polish Kit with Base, Glossy Matte Glitter Top Coat, Nail Nook Pearl Cat Eye White...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2MFX5V2"
  },
  {
    "name": "beetles Gel Polish Whispers of Love Jelly Gel Nail Polish Set - 6 Colors Milky White Nude Pink Neutral Sheer Translucent Soak Off UV Gel Na...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71YfaRq5H8L._AC_UL320_.jpg",
      "alt": "beetles Gel Polish Whispers of Love Jelly Gel Nail Polish Set - 6 Colors Milky White Nude Pink Neutral Sheer Translucent Soak Off UV Gel Na...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BWF17Q5T"
  },
  {
    "name": "Beetles No Wipe Gel Top Coat and Base Coat Set for Gel Nail Polish - 2Pcs 15ml Super Shiny and Long Lasting Soak Off UV/LED Lamp Nail Art D...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Eim+cliUL._AC_UL320_.jpg",
      "alt": "Beetles No Wipe Gel Top Coat and Base Coat Set for Gel Nail Polish - 2Pcs 15ml Super Shiny and Long Lasting Soak Off UV/LED Lamp Nail Art D...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DTP7MKZV"
  },
  {
    "name": "Beetles Builder Gel for Nails-3 Colors 9 in 1 Nail Extension Sculpting Building,Clear Nude Pink Hard Gel Kit with Base Top Coat for Pros,Gi...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71OkyWq6iTL._AC_UL320_.jpg",
      "alt": "Beetles Builder Gel for Nails-3 Colors 9 in 1 Nail Extension Sculpting Building,Clear Nude Pink Hard Gel Kit with Base Top Coat for Pros,Gi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C4YQGM4D"
  },
  {
    "name": "Beetles 3D Gel Nail Art Kit-1oz Clear Solid Builder Nail Gel,5 in 1 Non-Sticky Hand Sculpting Building 3D Nails with Sculpting Pen for Begi...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/811wRiW7+ZL._AC_UL320_.jpg",
      "alt": "Beetles 3D Gel Nail Art Kit-1oz Clear Solid Builder Nail Gel,5 in 1 Non-Sticky Hand Sculpting Building 3D Nails with Sculpting Pen for Begi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D6TWD6RR"
  },
  {
    "name": "VANREESA 42 Pcs Gel Nail Polish Kit with U V Light 24 Popular Colors Gel Polish Nail Kit Green Blue Purple Pink Orange Complete Nail Kit wi...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81UrMJRaEnL._AC_UL320_.jpg",
      "alt": "VANREESA 42 Pcs Gel Nail Polish Kit with U V Light 24 Popular Colors Gel Polish Nail Kit Green Blue Purple Pink Orange Complete Nail Kit wi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CSWKHK5X"
  },
  {
    "name": "VANREESA 148Pcs Gel Nail Polish Kit with U V Light Almond Nail Tips Nail Drill -60 All Seasons Colors Gel Polish Set with 6Pcs Base Top Coa...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81D1wD9m-CL._AC_UL320_.jpg",
      "alt": "VANREESA 148Pcs Gel Nail Polish Kit with U V Light Almond Nail Tips Nail Drill -60 All Seasons Colors Gel Polish Set with 6Pcs Base Top Coa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7RM1H66"
  },
  {
    "name": "JODSONE 20 Colors Gel Nail Polish Kit with U V Light Base Top Matte Coat High Shine Vibrant Nail Gel Equipped with Manicure Tools",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71UxgLQLCYL._AC_UL320_.jpg",
      "alt": "JODSONE 20 Colors Gel Nail Polish Kit with U V Light Base Top Matte Coat High Shine Vibrant Nail Gel Equipped with Manicure Tools",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMHVDZXQ"
  },
  {
    "name": "YALSYNY NAIL POLISH KIT with U V Lamp and Drill Starter Kit 36 Colors Gel Nail Polish Nail Art Gel Manicure Kit",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/914WbN-Ef4L._AC_UL320_.jpg",
      "alt": "YALSYNY NAIL POLISH KIT with U V Lamp and Drill Starter Kit 36 Colors Gel Nail Polish Nail Art Gel Manicure Kit",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DZ2SDTFC"
  },
  {
    "name": "VANREESA 60 Pcs Gel Nail Polish Set, 55 Colors Gel Polish with Base Coat & 4 Effects Top Coat Full-Color Nail Polish Set All Seasons Nail K...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91ZaMMweulL._AC_UL320_.jpg",
      "alt": "VANREESA 60 Pcs Gel Nail Polish Set, 55 Colors Gel Polish with Base Coat & 4 Effects Top Coat Full-Color Nail Polish Set All Seasons Nail K...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2HWZT95"
  },
  {
    "name": "JODSONE 36 Pieces Easy to Apply Gel Nail Polish Kit with U V Light Base Coat Top Matte Glitter Gel Polish for Salon and Home Use",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71C3kBelYDL._AC_UL320_.jpg",
      "alt": "JODSONE 36 Pieces Easy to Apply Gel Nail Polish Kit with U V Light Base Coat Top Matte Glitter Gel Polish for Salon and Home Use",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZVNJNBH"
  },
  {
    "name": "MelodySusie Gel Nail Polish Kit with P-Plus30F UV Nail Lamp - Handheld Cordless P-Art01R UV Light Classic Popular Colors Plant Based Gel Po...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Ky7faYQzL._AC_UL320_.jpg",
      "alt": "MelodySusie Gel Nail Polish Kit with P-Plus30F UV Nail Lamp - Handheld Cordless P-Art01R UV Light Classic Popular Colors Plant Based Gel Po...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FCM8Y4RG"
  },
  {
    "name": "Beetles Gel Nail Polish Kit with UV Light - 31Pcs Nail Polish Set Popular Color Gel with Base and Matte&Glossy Top Coat Soak Off All Season...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qSyI9xRKL._AC_UL320_.jpg",
      "alt": "Beetles Gel Nail Polish Kit with UV Light - 31Pcs Nail Polish Set Popular Color Gel with Base and Matte&Glossy Top Coat Soak Off All Season...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CL4R2354"
  },
  {
    "name": "Beetles Summer Gel Nail Polish Set, 36 Colors Verse of Flower Gel Polish Kit with Pink White Black Red Purple Blue Yellow Nail Gel, 3Pcs Ba...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81W8qXU11IL._AC_UL320_.jpg",
      "alt": "Beetles Summer Gel Nail Polish Set, 36 Colors Verse of Flower Gel Polish Kit with Pink White Black Red Purple Blue Yellow Nail Gel, 3Pcs Ba...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CF4DDY2T"
  },
  {
    "name": "GAOY 42 Pcs Gel Nail Polish Kit, Nude Neutral Blue Burgundy Colors All Seasons Gel Nail Polish Set with Glossy & Matte Top Coat and Base Co...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71N1YMUCBIL._AC_UL320_.jpg",
      "alt": "GAOY 42 Pcs Gel Nail Polish Kit, Nude Neutral Blue Burgundy Colors All Seasons Gel Nail Polish Set with Glossy & Matte Top Coat and Base Co...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJXDFWZ6"
  },
  {
    "name": "JODSONE 15ML Gel Nail Polish Remover No Need Soaking or Wrapping Gel Remover for Nails 3-5 Minutes Easy And Quick",
    "category": "Nail Care",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71DdMEOtNfL._AC_UL320_.jpg",
      "alt": "JODSONE 15ML Gel Nail Polish Remover No Need Soaking or Wrapping Gel Remover for Nails 3-5 Minutes Easy And Quick",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8TB8J8T"
  },
  {
    "name": "Beetles White Gel Nail Polish Kit with U V Light, 5 Pcs Gel Polish Starter Kit with Base & Top Coat and Nail File for Beginners Soak Off DI...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for nail care shoppers who want cleaner prep, easier polish, faster touch-ups, or a manicure drawer that actually works.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Nail Care shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Nail Table lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Follow product instructions, ingredient warnings, UV lamp guidance, and removal steps to avoid damaging nails.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LP7EwKFgL._AC_UL320_.jpg",
      "alt": "Beetles White Gel Nail Polish Kit with U V Light, 5 Pcs Gel Polish Starter Kit with Base & Top Coat and Nail File for Beginners Soak Off DI...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CL4QM8H3"
  }
];

export function getNailTableCatalog(
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
