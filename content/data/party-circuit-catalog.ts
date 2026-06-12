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
    "name": "Amazon Basics Disposable Clear Plastic Cutlery Set, Premium Quality, Strong, 192 Count, Large Combo Pack Forks, Spoons and Knives",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71TGT46kvSL._AC_UL320_.jpg",
      "alt": "Amazon Basics Disposable Clear Plastic Cutlery Set, Premium Quality, Strong, 192 Count, Large Combo Pack Forks, Spoons and Knives",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLH1VCLC"
  },
  {
    "name": "Hefty Party On Disposable Plastic Cups, Assorted, 16 Ounce, 100 Count",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81uf-BZz2eL._AC_UL320_.jpg",
      "alt": "Hefty Party On Disposable Plastic Cups, Assorted, 16 Ounce, 100 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00OCGUG02"
  },
  {
    "name": "Alpha Living 6 Pack - Disposable Chafing Dish Buffet Set, Half Size Pans, Welded Body Food Warmers for Parties, Fuel Cans Complete Set, War...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71WtiwFwX-L._AC_UL320_.jpg",
      "alt": "Alpha Living 6 Pack - Disposable Chafing Dish Buffet Set, Half Size Pans, Welded Body Food Warmers for Parties, Fuel Cans Complete Set, War...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DC1T1ZSB"
  },
  {
    "name": "12pcs Mini Chalkboard Signs with Stand,Food Labels for Party Buffet, Food Tag/Name Card for Wedding Table, Name Tag Drink Labels Taco/Candy...",
    "category": "Party Hosting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AxcDjoskL._AC_UL320_.jpg",
      "alt": "12pcs Mini Chalkboard Signs with Stand,Food Labels for Party Buffet, Food Tag/Name Card for Wedding Table, Name Tag Drink Labels Taco/Candy...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FL22TP6C"
  },
  {
    "name": "PartySticks Glow Sticks Party Supplies 100pk - 8 Inch Glow in the Dark Light Up Sticks Party Favors, Glow Party Decorations, Neon Party Glo...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81JYNlch58L._AC_UL320_.jpg",
      "alt": "PartySticks Glow Sticks Party Supplies 100pk - 8 Inch Glow in the Dark Light Up Sticks Party Favors, Glow Party Decorations, Neon Party Glo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00N1QPNMA"
  },
  {
    "name": "IDAODAN Electric Balloon Pump, Portable Electric Balloon Blower Machine Balloon Air Pump Dual Nozzle Rose Red 110V 600W Balloon Inflator fo...",
    "category": "Gear",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71+zOwxb15L._AC_UL320_.jpg",
      "alt": "IDAODAN Electric Balloon Pump, Portable Electric Balloon Blower Machine Balloon Air Pump Dual Nozzle Rose Red 110V 600W Balloon Inflator fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJ5G1Y31"
  },
  {
    "name": "White and Gold Paper Plates Napkins Party Supplies,Disposable Gold Dot Paper Dessert Plates,105 PCS Birthday Plates and Napkins Party Suppl...",
    "category": "Party Hosting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71tQShJImFL._AC_UL320_.jpg",
      "alt": "White and Gold Paper Plates Napkins Party Supplies,Disposable Gold Dot Paper Dessert Plates,105 PCS Birthday Plates and Napkins Party Suppl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BW6SYNVM"
  },
  {
    "name": "Pureegg Plastic Table Cloth Disposable 8 Pack, 54 x 108 Inch Table Cloths, Party, Picnic, Wedding, Decorative Tablecloths, Rectangle, White...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71nr45d4ITL._AC_UL320_.jpg",
      "alt": "Pureegg Plastic Table Cloth Disposable 8 Pack, 54 x 108 Inch Table Cloths, Party, Picnic, Wedding, Decorative Tablecloths, Rectangle, White...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D62WZY5P"
  },
  {
    "name": "WDF Partyware 350Piece Gold Dinnerware Set for 50 Guests - Gold Plastic Plates with Disposable Cutlery - 50Dinner Plates-50Dessert Plates-5...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71fm7qLFtbL._AC_UL320_.jpg",
      "alt": "WDF Partyware 350Piece Gold Dinnerware Set for 50 Guests - Gold Plastic Plates with Disposable Cutlery - 50Dinner Plates-50Dessert Plates-5...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CYL6LCDG"
  },
  {
    "name": "200 Bamboo Appetizer Forks, 3.5\" Disposable Bamboo Fork for Charcuterie, Mini Forks for Appetizers, Cocktail Forks for Weddings, Small Appe...",
    "category": "Party Hosting",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Y4441OisL._AC_UL320_.jpg",
      "alt": "200 Bamboo Appetizer Forks, 3.5\" Disposable Bamboo Fork for Charcuterie, Mini Forks for Appetizers, Cocktail Forks for Weddings, Small Appe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMXZTM2X"
  },
  {
    "name": "Amazon Basics Disposable Clear Plastic Forks, Premium Quality, BPA-Free, for Everyday Use, Party Supply, Events, 100 Count",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71CHjO+kHvL._AC_UL320_.jpg",
      "alt": "Amazon Basics Disposable Clear Plastic Forks, Premium Quality, BPA-Free, for Everyday Use, Party Supply, Events, 100 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLH1445W"
  },
  {
    "name": "Ring Pop Lollipops - Bulk Candy Individually Wrapped Suckers Variety Party Pack- 20 Count w/Assorted Flavors - Hard Candy for Party Favors,...",
    "category": "Party Hosting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81caeWEBoFL._AC_UL320_.jpg",
      "alt": "Ring Pop Lollipops - Bulk Candy Individually Wrapped Suckers Variety Party Pack- 20 Count w/Assorted Flavors - Hard Candy for Party Favors,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B06XGNL1RX"
  },
  {
    "name": "WOWBOX 4 pcs Serving Tray for Party, Grilling Accessories, Serving Platters for Snacks, Fruit, Reusable Plastic Trays for Serving Food and...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719pRWSWZnL._AC_UL320_.jpg",
      "alt": "WOWBOX 4 pcs Serving Tray for Party, Grilling Accessories, Serving Platters for Snacks, Fruit, Reusable Plastic Trays for Serving Food and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CCP3YXNJ"
  },
  {
    "name": "Vanity Fair Everyday Paper Napkins, 100 Count, Disposable Napkins Made Soft And Smooth For Everyday Meals",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81NReXeBGFL._AC_UL320_.jpg",
      "alt": "Vanity Fair Everyday Paper Napkins, 100 Count, Disposable Napkins Made Soft And Smooth For Everyday Meals",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0014E89WM"
  },
  {
    "name": "9 oz Clear Plastic Cups Green Plastic Disposable Cups for Cocktail 50 Pack Fancy Cocktail Cup for Party Stemless Wine Glasses for Wedding G...",
    "category": "Party Hosting",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/810TuDa3VjL._AC_UL320_.jpg",
      "alt": "9 oz Clear Plastic Cups Green Plastic Disposable Cups for Cocktail 50 Pack Fancy Cocktail Cup for Party Stemless Wine Glasses for Wedding G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F7JY4SCM"
  },
  {
    "name": "Goodluck 350 Piece Silver Plastic Dinnerware Set for 50 Guests, Fancy Disposable Plates for Party, Include: 50 Dinner Plates, 50 Dessert Pl...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71oUlbrRVSL._AC_UL320_.jpg",
      "alt": "Goodluck 350 Piece Silver Plastic Dinnerware Set for 50 Guests, Fancy Disposable Plates for Party, Include: 50 Dinner Plates, 50 Dessert Pl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C45WNDYN"
  },
  {
    "name": "175 PCS Sage Green Gingham Party Supplies Includes Green Gingham Paper Plates, Cups, Napkins, Cutlery for Wedding Bridal Shower Birthday Ba...",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71yumllogZL._AC_UL320_.jpg",
      "alt": "175 PCS Sage Green Gingham Party Supplies Includes Green Gingham Paper Plates, Cups, Napkins, Cutlery for Wedding Bridal Shower Birthday Ba...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FQJ1YBRT"
  },
  {
    "name": "Party Favors for Kids 8-12 4-8, 150-Pack Fidget Toys Bulk, Treasure Box Toys for Classroom, Stocking Stuffers Goodie Bags, Classroom Prizes...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/815sofq0avL._AC_UL320_.jpg",
      "alt": "Party Favors for Kids 8-12 4-8, 150-Pack Fidget Toys Bulk, Treasure Box Toys for Classroom, Stocking Stuffers Goodie Bags, Classroom Prizes...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F8LLT3JR"
  },
  {
    "name": "AIRE 175PCS Pink Rose Gold Party Supplies, Heavy Duty Disposable Dinnerware Set Serves 25, Paper Plates Plastic Forks Knives Spoons Cutlery...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81WyVWdNAmL._AC_UL320_.jpg",
      "alt": "AIRE 175PCS Pink Rose Gold Party Supplies, Heavy Duty Disposable Dinnerware Set Serves 25, Paper Plates Plastic Forks Knives Spoons Cutlery...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09J16XVGX"
  },
  {
    "name": "Lifewit 1 Gallon Drink Dispenser for Parties 2 Pcs, 4L Plastic Beverage Container with Stand for Juice/Tea/Soda & Lemonade, Clear Water Pit...",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71t7m-SuRLL._AC_UL320_.jpg",
      "alt": "Lifewit 1 Gallon Drink Dispenser for Parties 2 Pcs, 4L Plastic Beverage Container with Stand for Juice/Tea/Soda & Lemonade, Clear Water Pit...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FQV77384"
  },
  {
    "name": "OLUPP 150 PCS Glow in the Dark Party Supplies, 16 Foam Sticks, 16 LED Glasses, 100 Glow Sticks and 18 Finger Lights for Neon Party, 4th of...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Heqp8REiL._AC_UL320_.jpg",
      "alt": "OLUPP 150 PCS Glow in the Dark Party Supplies, 16 Foam Sticks, 16 LED Glasses, 100 Glow Sticks and 18 Finger Lights for Neon Party, 4th of...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CWNTL35B"
  },
  {
    "name": "DSTELIN 10 Pack Mini Chalkboards Signs with Easel Stand, Small Rectangle Chalkboards Blackboard, Wood Place Cards for Weddings, Birthday Pa...",
    "category": "Party Hosting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51cA++UfYBL._AC_UL320_.jpg",
      "alt": "DSTELIN 10 Pack Mini Chalkboards Signs with Easel Stand, Small Rectangle Chalkboards Blackboard, Wood Place Cards for Weddings, Birthday Pa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07FCDXXC8"
  },
  {
    "name": "Amazon Basics Disposable Clear Plastic Cups for Cold Drinks, BPA-Free, Easy to Hold, 16oz, 50 Count",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61h+vXeB1BL._AC_UL320_.jpg",
      "alt": "Amazon Basics Disposable Clear Plastic Cups for Cold Drinks, BPA-Free, Easy to Hold, 16oz, 50 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D6SQFXF7"
  },
  {
    "name": "Nervure 350PCS Gold Plastic Plates - Gold Plastic Dinnerware Sets for 50 Guests - 100 Disposable Plates, 150 Silverware, 50 Cups, 50 Napkin...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81MSE3C7qBL._AC_UL320_.jpg",
      "alt": "Nervure 350PCS Gold Plastic Plates - Gold Plastic Dinnerware Sets for 50 Guests - 100 Disposable Plates, 150 Silverware, 50 Cups, 50 Napkin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08ZLHMBJS"
  },
  {
    "name": "150PCS Glow in the Dark Party Supplies for Kids Adults, Light Up Party Favors with Light Up Glasses, Headband, Rings, 100 Glow Sticks Bulk...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81c8VYUGPXL._AC_UL320_.jpg",
      "alt": "150PCS Glow in the Dark Party Supplies for Kids Adults, Light Up Party Favors with Light Up Glasses, Headband, Rings, 100 Glow Sticks Bulk...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CYFZRZRV"
  },
  {
    "name": "Ring Pop Lollipops - Bulk Candy Individually Wrapped Suckers Variety Party Pack- 50 Count w/Assorted Flavors - Hard Candy for Party Favors,...",
    "category": "Party Hosting",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81coWT1NyDL._AC_UL320_.jpg",
      "alt": "Ring Pop Lollipops - Bulk Candy Individually Wrapped Suckers Variety Party Pack- 50 Count w/Assorted Flavors - Hard Candy for Party Favors,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07CY78RVR"
  },
  {
    "name": "Glad Clear Disposable Cutlery Set with Heavy Duty Plastic Forks, Knives, and Spoons, Reusable Dishwasher Safe Plastic Utensils for Parties...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/714qpPSapIL._AC_UL320_.jpg",
      "alt": "Glad Clear Disposable Cutlery Set with Heavy Duty Plastic Forks, Knives, and Spoons, Reusable Dishwasher Safe Plastic Utensils for Parties...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07KMND3JC"
  },
  {
    "name": "Rubtlamp 175 Pcs Plastic Dinnerware Set (25 Guests), Blue Disposable Plates With Gold Rim, Hammered Party Plates Set Include Dinner Platos,...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for party hosting shoppers who want faster setup, cleaner tables, better photos, or hosting that feels more pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Party Hosting shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Party Circuit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, choking hazards, flame safety, wall-safe adhesives, and cleanup requirements.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81zqjxDem-L._AC_UL320_.jpg",
      "alt": "Rubtlamp 175 Pcs Plastic Dinnerware Set (25 Guests), Blue Disposable Plates With Gold Rim, Hammered Party Plates Set Include Dinner Platos,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CY3SJ3SN"
  }
];

export function getPartyCircuitCatalog(
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
