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
    "name": "Kootek 158PCs Cake Decorating Kit, Baking Supplies Tools - Includes Cake Stand Turntable, 64 Icing Piping Tips Set, 2 Frosting Spatulas, 3...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81j8ry+i1KL._AC_UL320_.jpg",
      "alt": "Kootek 158PCs Cake Decorating Kit, Baking Supplies Tools - Includes Cake Stand Turntable, 64 Icing Piping Tips Set, 2 Frosting Spatulas, 3...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FHKNX6TF"
  },
  {
    "name": "ChefAide 5 Pieces Silicone Spatula Set, Food Grade Rubber Spatula, Upgrade Strong Handle with Ergonomic Grip, Heat Resistant Up to 600°F fo...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51hm8-fJJkL._AC_UL320_.jpg",
      "alt": "ChefAide 5 Pieces Silicone Spatula Set, Food Grade Rubber Spatula, Upgrade Strong Handle with Ergonomic Grip, Heat Resistant Up to 600°F fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CHGFG64S"
  },
  {
    "name": "26x16 Inch Extra Thick Silicone Baking Mat with Measurements, Non-slip and Reusable - For Cookies, Bread, Pastry",
    "category": "Baking",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81rE3PP6OEL._AC_UL320_.jpg",
      "alt": "26x16 Inch Extra Thick Silicone Baking Mat with Measurements, Non-slip and Reusable - For Cookies, Bread, Pastry",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0999594RR"
  },
  {
    "name": "Ecavria Bench Scraper, Premium Stainless Steel Dough Scraper with 2 PCS Flexible Bowl Scraper, Dough Cutter with Measuring Scale, Versatile...",
    "category": "Baking",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71TFFG4KGiL._AC_UL320_.jpg",
      "alt": "Ecavria Bench Scraper, Premium Stainless Steel Dough Scraper with 2 PCS Flexible Bowl Scraper, Dough Cutter with Measuring Scale, Versatile...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D96JFFXF"
  },
  {
    "name": "Mixing Bowls with Airtight Lids Set, 26PCS Stainless Steel Khaki Bowls with Grater Attachments, Non-Slip Bottoms & Kitchen Gadgets Set, Siz...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71XR3lo00cL._AC_UL320_.jpg",
      "alt": "Mixing Bowls with Airtight Lids Set, 26PCS Stainless Steel Khaki Bowls with Grater Attachments, Non-Slip Bottoms & Kitchen Gadgets Set, Siz...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BWHJ1FNK"
  },
  {
    "name": "HULISEN Flour Duster for Baking, One-Handed Operation, 304 Stainless Steel Powdered Sugar Shaker Duster, Pick Up and Dust Flour Sifter, Gif...",
    "category": "Baking",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71vUpgwjpaL._AC_UL320_.jpg",
      "alt": "HULISEN Flour Duster for Baking, One-Handed Operation, 304 Stainless Steel Powdered Sugar Shaker Duster, Pick Up and Dust Flour Sifter, Gif...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08GPLXCKZ"
  },
  {
    "name": "Non-slip Silicone Pastry Mat Extra Large with Measurements 28&#x27;&#x27;By 20&#x27;&#x27; for Silicone Baking Mat, Counter, Dough Rolling,...",
    "category": "Baking",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ZyKwpJxAL._AC_UL320_.jpg",
      "alt": "Non-slip Silicone Pastry Mat Extra Large with Measurements 28&#x27;&#x27;By 20&#x27;&#x27; for Silicone Baking Mat, Counter, Dough Rolling,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01ACUA8HC"
  },
  {
    "name": "Etekcity Food Kitchen Scale, Digital Grams and Ounces for Weight Loss, Baking, Cooking, Keto and Meal Prep, LCD Display, Medium, 304 Stainl...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91YrLTBnMcL._AC_UL320_.jpg",
      "alt": "Etekcity Food Kitchen Scale, Digital Grams and Ounces for Weight Loss, Baking, Cooking, Keto and Meal Prep, LCD Display, Medium, 304 Stainl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0113UZJE2"
  },
  {
    "name": "OXO Good Grips Stainless Steel Multi-Purpose Scraper & Chopper, Dough Cutter for Pizza, Bread and Cookie Dough, Multi-Purpose Vegetable Cho...",
    "category": "Court Gear",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61txfa10m3L._AC_UL320_.jpg",
      "alt": "OXO Good Grips Stainless Steel Multi-Purpose Scraper & Chopper, Dough Cutter for Pizza, Bread and Cookie Dough, Multi-Purpose Vegetable Cho...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00004OCNJ"
  },
  {
    "name": "KITCHENAID Ribbed Soft Silicone Oven Mitt 2-Pack Set, 7.5\"x13\", Milkshake",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/617z6N3l59L._AC_UL320_.jpg",
      "alt": "KITCHENAID Ribbed Soft Silicone Oven Mitt 2-Pack Set, 7.5\"x13\", Milkshake",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08J8GZXKZ"
  },
  {
    "name": "WEPSEN 5-Speed Electric Hand Mixer, 4 Large Mixing Bowls Set, Handheld Mixers with Whisks Beater, Stainless Steel Metal Nesting Bowl Measur...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71peEToDbLL._AC_UL320_.jpg",
      "alt": "WEPSEN 5-Speed Electric Hand Mixer, 4 Large Mixing Bowls Set, Handheld Mixers with Whisks Beater, Stainless Steel Metal Nesting Bowl Measur...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08FB31NH5"
  },
  {
    "name": "SURDOCA Dough Scraper Bench Scraper - 3P 4.7x3.7\" Plastic Flexible Bowl Scraper, Sharp Edge & Angles Cake Scraper. Non-Slip Bakeware Decora...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kAaBQpxdL._AC_UL320_.jpg",
      "alt": "SURDOCA Dough Scraper Bench Scraper - 3P 4.7x3.7\" Plastic Flexible Bowl Scraper, Sharp Edge & Angles Cake Scraper. Non-Slip Bakeware Decora...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0894HTQVZ"
  },
  {
    "name": "2PCS Cooling Racks for Cooking and Baking - 10\" x 15\"Heavy Duty Stainless Steel Wire Rack for Baking, Grilling, Roasting - Oven & Dishwashe...",
    "category": "Baking",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81U2PrCeEaL._AC_UL320_.jpg",
      "alt": "2PCS Cooling Racks for Cooking and Baking - 10\" x 15\"Heavy Duty Stainless Steel Wire Rack for Baking, Grilling, Roasting - Oven & Dishwashe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4LX9Z3Q"
  },
  {
    "name": "Piping Bags and Tips Set, Reusable Cake Decorating Supplies with 2 Reusable Bags, 12 Icing Tips, 2 Silicone Rings, 2 Couplers and 3 Scraper...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61gniTof-YL._AC_UL320_.jpg",
      "alt": "Piping Bags and Tips Set, Reusable Cake Decorating Supplies with 2 Reusable Bags, 12 Icing Tips, 2 Silicone Rings, 2 Couplers and 3 Scraper...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0924MKRJ7"
  },
  {
    "name": "Kootek 71PCs Cake Decorating Kit, Baking Supplies Tools - Includes Cake Stand Turntable, 12 Icing Piping Tips Set, 2 Frosting Spatulas, 3 S...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Yf3k4nBeL._AC_UL320_.jpg",
      "alt": "Kootek 71PCs Cake Decorating Kit, Baking Supplies Tools - Includes Cake Stand Turntable, 12 Icing Piping Tips Set, 2 Frosting Spatulas, 3 S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07M7M898T"
  },
  {
    "name": "NileHome Silicone Spatula Set, 6 Pieces Food Grade Kitchen Utensils with Silicone Brush Heat Resistant Up to 600°F Dishwasher Safe BPA-Free...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71CZuGEhoDL._AC_UL320_.jpg",
      "alt": "NileHome Silicone Spatula Set, 6 Pieces Food Grade Kitchen Utensils with Silicone Brush Heat Resistant Up to 600°F Dishwasher Safe BPA-Free...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B7J62MV9"
  },
  {
    "name": "LuoCoCo Cute Egg Separator, Ceramics Vomiting Chicken Egg Yolk White Separator, Practical Household Small Egg Filter Splitter, Kitchen Gadg...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41261oKUHmS._AC_UL320_.jpg",
      "alt": "LuoCoCo Cute Egg Separator, Ceramics Vomiting Chicken Egg Yolk White Separator, Practical Household Small Egg Filter Splitter, Kitchen Gadg...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B094NTCSDJ"
  },
  {
    "name": "FARBERWARE Classic Wood Rolling Pin, 18-Inch Hardwood Dough Roller for Baking Pizza, Pies, Pastry and Cookies, Ergonomic Handles, Kitchen E...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51MBKGGJu+L._AC_UL320_.jpg",
      "alt": "FARBERWARE Classic Wood Rolling Pin, 18-Inch Hardwood Dough Roller for Baking Pizza, Pies, Pastry and Cookies, Ergonomic Handles, Kitchen E...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B005D6GFFA"
  },
  {
    "name": "Pyrex Essentials (3-Pack) Glass Measuring Cups Set, (1, 2 & 4 Cup) Measuring Cups For Prepping, Baking and Cooking, Preheated Oven, Dishwas...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ygLu2o0OL._AC_UL320_.jpg",
      "alt": "Pyrex Essentials (3-Pack) Glass Measuring Cups Set, (1, 2 & 4 Cup) Measuring Cups For Prepping, Baking and Cooking, Preheated Oven, Dishwas...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00M2J7PCI"
  },
  {
    "name": "Spring Chef Dough Blender, Top Professional Pastry Cutter with Heavy Duty Stainless Steel Blades, Medium Size, Black",
    "category": "Baking",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71N6765pp9L._AC_UL320_.jpg",
      "alt": "Spring Chef Dough Blender, Top Professional Pastry Cutter with Heavy Duty Stainless Steel Blades, Medium Size, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01CX1RIMQ"
  },
  {
    "name": "Bake Choice 200pcs Natural Tulip Cupcake Liners for Baking Cups Unbleached European Parchment paper Tulip Muffin Liners, Cupcake Wrapper fo...",
    "category": "Baking",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71IFPmReenL._AC_UL320_.jpg",
      "alt": "Bake Choice 200pcs Natural Tulip Cupcake Liners for Baking Cups Unbleached European Parchment paper Tulip Muffin Liners, Cupcake Wrapper fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BNSYKZSN"
  },
  {
    "name": "HOMURE H Cookie Scoop Set, Include 1 Tbsp/2 Tbsp/3 Tbsp, Cookie Dough Scoop, Cookie Scoops for Baking Set of 3, 18/8 Stainless Steel, Good...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61066xs6uGL._AC_UL320_.jpg",
      "alt": "HOMURE H Cookie Scoop Set, Include 1 Tbsp/2 Tbsp/3 Tbsp, Cookie Dough Scoop, Cookie Scoops for Baking Set of 3, 18/8 Stainless Steel, Good...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08LVY3F83"
  },
  {
    "name": "12 Pieces Round Cookie Biscuit Cutter Set,Graduated Circle Pastry Cutters,18/8 Stainless Steel Cookie Cutters and Donut Cutter Ring Molds",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71iDjtGYBmL._AC_UL320_.jpg",
      "alt": "12 Pieces Round Cookie Biscuit Cutter Set,Graduated Circle Pastry Cutters,18/8 Stainless Steel Cookie Cutters and Donut Cutter Ring Molds",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08BWL2TR5"
  },
  {
    "name": "TILUCK Stainless Steel Measuring Cups & Spoons Set, Cups and Spoons,Kitchen Gadgets for Cooking & Baking (10)",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713cp4XSG7L._AC_UL320_.jpg",
      "alt": "TILUCK Stainless Steel Measuring Cups & Spoons Set, Cups and Spoons,Kitchen Gadgets for Cooking & Baking (10)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B091JXDLDX"
  },
  {
    "name": "Parchment Paper Sheets 9x13 Inch – 70Pcs Precut Unbleached Baking Paper, Plant-Based Silicone Coating, Non-Stick Quarter Sheet Liner for Ai...",
    "category": "Baking",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71lCn+5mdZL._AC_UL320_.jpg",
      "alt": "Parchment Paper Sheets 9x13 Inch – 70Pcs Precut Unbleached Baking Paper, Plant-Based Silicone Coating, Non-Stick Quarter Sheet Liner for Ai...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D3PWHQD9"
  },
  {
    "name": "0.5 Sec Instant Read Meat Thermometer Digital with ±0.5℉ Precision, Food Thermometer for Cooking Kitchen Gadgets, Oven Grill Candy BBQ Esse...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61is4F1PDOL._AC_UL320_.jpg",
      "alt": "0.5 Sec Instant Read Meat Thermometer Digital with ±0.5℉ Precision, Food Thermometer for Cooking Kitchen Gadgets, Oven Grill Candy BBQ Esse...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F5X4FM3Q"
  },
  {
    "name": "Kootek 700pcs Cake Decorating Kit, Baking Supplies with Springform Pans, Cake Turntable for Decorating, Piping Tips Set, Pastry Bags, and M...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81zznvbQhgL._AC_UL320_.jpg",
      "alt": "Kootek 700pcs Cake Decorating Kit, Baking Supplies with Springform Pans, Cake Turntable for Decorating, Piping Tips Set, Pastry Bags, and M...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DBLKMPCG"
  },
  {
    "name": "Adjustable Rolling Pin with Thickness Rings for Baking, Stainless Steel Designs Dough Roller Pins for Cookie Decorating Baking Supplies Fon...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for baking shoppers who want more accurate measuring, cleaner prep, easier decorating, or a baking drawer that feels less chaotic.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Baking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bake Bench lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check oven-safe temperatures, pan dimensions, material care, and food-contact instructions before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61K02VJ1KIL._AC_UL320_.jpg",
      "alt": "Adjustable Rolling Pin with Thickness Rings for Baking, Stainless Steel Designs Dough Roller Pins for Cookie Decorating Baking Supplies Fon...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CM3ML9TZ"
  }
];

export function getBakeBenchCatalog(
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
