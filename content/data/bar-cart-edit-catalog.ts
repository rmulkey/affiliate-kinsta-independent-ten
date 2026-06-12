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
    "name": "KITESSENSU Cocktail Shaker Set Bartender Kit with Stand | Bar Set Drink Mixer Set with All Essential Accessory Tools: Martini Shaker, Jigge...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71glMBKGZqL._AC_UL320_.jpg",
      "alt": "KITESSENSU Cocktail Shaker Set Bartender Kit with Stand | Bar Set Drink Mixer Set with All Essential Accessory Tools: Martini Shaker, Jigge...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08BYJ8KSR"
  },
  {
    "name": "Whiskey Smoker Kit with Torch - 6 Flavors Wood Chips, 2 Glasses, 2 Ice Ball Molds - Cocktail Smoker Infuser Kit, Old Fashioned Drink Smoker...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81giNCIRH5L._AC_UL320_.jpg",
      "alt": "Whiskey Smoker Kit with Torch - 6 Flavors Wood Chips, 2 Glasses, 2 Ice Ball Molds - Cocktail Smoker Infuser Kit, Old Fashioned Drink Smoker...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJV68C17"
  },
  {
    "name": "1 Pack 3 Tier Bar Glass Rimmer for Margarita and Cocktail, Bartender Tool,Salt Box Spice Container",
    "category": "Home Bar",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71alAtvenoL._AC_UL320_.jpg",
      "alt": "1 Pack 3 Tier Bar Glass Rimmer for Margarita and Cocktail, Bartender Tool,Salt Box Spice Container",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08X77VP4S"
  },
  {
    "name": "Pafusen 12 Pack Liquor Pour Spout With Dust Caps - Bottle Pourers for Alcohol, Olive Oil - Speed Pourers, Bar Bartender Accessories",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61wr6zDDK-L._AC_UL320_.jpg",
      "alt": "Pafusen 12 Pack Liquor Pour Spout With Dust Caps - Bottle Pourers for Alcohol, Olive Oil - Speed Pourers, Bar Bartender Accessories",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09ZKRXT8M"
  },
  {
    "name": "The Art of Mixology: Classic Cocktails and Curious Concoctions",
    "category": "Home Bar",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ok9P4Y5PL._AC_UL320_.jpg",
      "alt": "The Art of Mixology: Classic Cocktails and Curious Concoctions",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/1680524100"
  },
  {
    "name": "XieNie Bar Mat, 6\" x 12\" Black Small Coffee Mat for Home Bar Kitchen Countertop, Non-Slip Service Spill Mat for Cocktail Bartender Accessor...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71gyxIJVHsL._AC_UL320_.jpg",
      "alt": "XieNie Bar Mat, 6\" x 12\" Black Small Coffee Mat for Home Bar Kitchen Countertop, Non-Slip Service Spill Mat for Cocktail Bartender Accessor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09WDXWNS6"
  },
  {
    "name": "Mixology Bartender Kit with Stand - 15 Piece Bar Tool Set, Silver Bar Set Cocktail Shaker Set for Drink Mixing - Includes Martini Shaker, J...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/817OrGbanRL._AC_UL320_.jpg",
      "alt": "Mixology Bartender Kit with Stand - 15 Piece Bar Tool Set, Silver Bar Set Cocktail Shaker Set for Drink Mixing - Includes Martini Shaker, J...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B094SP5F5M"
  },
  {
    "name": "Amrules Moscow Mule Mugs Set of 4, 16 OZ Hammered Copper Cups with 304 Stainless Steel Lining and Gold Brass Handles, for Cold Drinks, Beer...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71BLrpE8vuL._AC_UL320_.jpg",
      "alt": "Amrules Moscow Mule Mugs Set of 4, 16 OZ Hammered Copper Cups with 304 Stainless Steel Lining and Gold Brass Handles, for Cold Drinks, Beer...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9SN2MLW"
  },
  {
    "name": "Briout Jigger for Bartending, Double Cocktail Jigger Japanese Premium 304 Stainless Steel Jigger 2 OZ 1 OZ with Measurements Inside",
    "category": "Home Bar",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/613I17mm3pL._AC_UL320_.jpg",
      "alt": "Briout Jigger for Bartending, Double Cocktail Jigger Japanese Premium 304 Stainless Steel Jigger 2 OZ 1 OZ with Measurements Inside",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08RCHQL11"
  },
  {
    "name": "KLM Liquor Bottle Display Shelf, Coffee Syrup Rack Organizer, 3 Step Countertop Liquor Wine Rack, mini bar,liquor cabinet, Home Retro Bar S...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81GZtaBv75L._AC_UL320_.jpg",
      "alt": "KLM Liquor Bottle Display Shelf, Coffee Syrup Rack Organizer, 3 Step Countertop Liquor Wine Rack, mini bar,liquor cabinet, Home Retro Bar S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D8TFHH3F"
  },
  {
    "name": "ME.FAN Silicone Coasters with Holder,[6 Pack] Drinking Coasters - Cup Mat for Hot or Cold Drinks, Thickened, Non-Slip, Non-Stick,Deep Tray...",
    "category": "Home Bar",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61XOosHGPKL._AC_UL320_.jpg",
      "alt": "ME.FAN Silicone Coasters with Holder,[6 Pack] Drinking Coasters - Cup Mat for Hot or Cold Drinks, Thickened, Non-Slip, Non-Stick,Deep Tray...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BHSW6NWB"
  },
  {
    "name": "Cocktail Shaker Set, 18-Piece Bartender Kit with Acrylic Stand, 18/8 Stainless Steel Bar Set with Martini Shaker, Jigger, Muddler & Recipe...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81yD9K5jJNL._AC_UL320_.jpg",
      "alt": "Cocktail Shaker Set, 18-Piece Bartender Kit with Acrylic Stand, 18/8 Stainless Steel Bar Set with Martini Shaker, Jigger, Muddler & Recipe...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FH76Y7N4"
  },
  {
    "name": "Collins Candied Fruit Orange Peel Twist in Syrup, Popular Cocktail Garnish for Skinny Margarita, Martini, Mojito, Orange Peel for Old Fashi...",
    "category": "Home Bar",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81fhdV+hiBL._AC_UL320_.jpg",
      "alt": "Collins Candied Fruit Orange Peel Twist in Syrup, Popular Cocktail Garnish for Skinny Margarita, Martini, Mojito, Orange Peel for Old Fashi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07V4T1K6B"
  },
  {
    "name": "Condiment Tray with Stainless Steel 5 Spoons, 5 Forks and 1 Clip, Chilled Condiment Server, Condiment Server, Bar Garnish Holder on Ice, Ba...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FSw42C7eL._AC_UL320_.jpg",
      "alt": "Condiment Tray with Stainless Steel 5 Spoons, 5 Forks and 1 Clip, Chilled Condiment Server, Condiment Server, Bar Garnish Holder on Ice, Ba...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B14ZQD6H"
  },
  {
    "name": "Cocktail Shaker Set Bartender Kit,Professional Bar Set, Martini Shaker, Jigger, Strainer, Mixer Spoon, Muddler, Liquor Pourers Ideal Bar Ac...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Ivk8tn-qL._AC_UL320_.jpg",
      "alt": "Cocktail Shaker Set Bartender Kit,Professional Bar Set, Martini Shaker, Jigger, Strainer, Mixer Spoon, Muddler, Liquor Pourers Ideal Bar Ac...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FNKLDGKY"
  },
  {
    "name": "tifanso Muddler for Cocktails, 10\" Muddler and Long Handle Bar Cocktail Mixing Spoon, Stainless Steel Stirrer, Bar Accessories Tools for Mo...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51fcIKht2zL._AC_UL320_.jpg",
      "alt": "tifanso Muddler for Cocktails, 10\" Muddler and Long Handle Bar Cocktail Mixing Spoon, Stainless Steel Stirrer, Bar Accessories Tools for Mo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BW4372FF"
  },
  {
    "name": "Home Hero Bartender Kit - 22-Piece Cocktail Shaker & Bar Tool Set - Wooden Stand Display & Bar Cart Accessories - Recipe Book & Housewarmin...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81LGa0rC87L._AC_UL320_.jpg",
      "alt": "Home Hero Bartender Kit - 22-Piece Cocktail Shaker & Bar Tool Set - Wooden Stand Display & Bar Cart Accessories - Recipe Book & Housewarmin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BKH14N5N"
  },
  {
    "name": "Vintage Metal Sign Funny Bar Signs Home Bar Accessories Man Cave Signs For Men Decor 12x8 Inches",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ZFhTSAnwL._AC_UL320_.jpg",
      "alt": "Vintage Metal Sign Funny Bar Signs Home Bar Accessories Man Cave Signs For Men Decor 12x8 Inches",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CYLSBCHH"
  },
  {
    "name": "Coffee Stirrers Sticks, Disposable Plastic Drink Stirrer Sticks, 1000 Stirrers, Use It As A Coffee Straws Or A Cocktail Mixers (Black, 5-In...",
    "category": "Home Bar",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91gcC6bQ1PL._AC_UL320_.jpg",
      "alt": "Coffee Stirrers Sticks, Disposable Plastic Drink Stirrer Sticks, 1000 Stirrers, Use It As A Coffee Straws Or A Cocktail Mixers (Black, 5-In...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00B4M83MU"
  },
  {
    "name": "6 Pcs Best Wooden Coasters with Holder Coffee Table Decor Acacia Wood Coaster Set Modern Cup Coaster for Drink Home Dining Table Kitchen Ac...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71OEWl8tiWL._AC_UL320_.jpg",
      "alt": "6 Pcs Best Wooden Coasters with Holder Coffee Table Decor Acacia Wood Coaster Set Modern Cup Coaster for Drink Home Dining Table Kitchen Ac...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9WSP6LW"
  },
  {
    "name": "YQBRAO 4-Tier Liquor Bottle Display Shelf, Spice Rack - 16-Inch Coffee Syrup Organizer Rack - Heavy-Duty Countertop Bar Shelves for Liquor...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81H79VCyHdL._AC_UL320_.jpg",
      "alt": "YQBRAO 4-Tier Liquor Bottle Display Shelf, Spice Rack - 16-Inch Coffee Syrup Organizer Rack - Heavy-Duty Countertop Bar Shelves for Liquor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FB2XCM5F"
  },
  {
    "name": "Zulay Kitchen Powerful Milk Frother Wand With Duracell Batteries - Ultra Fast Handheld Drink Mixer - Electric Whisk Foam Maker for Coffee,...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/811azKMn+yL._AC_UL320_.jpg",
      "alt": "Zulay Kitchen Powerful Milk Frother Wand With Duracell Batteries - Ultra Fast Handheld Drink Mixer - Electric Whisk Foam Maker for Coffee,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09D8T11YS"
  },
  {
    "name": "Cocktail Shaker Set Bartender Kit : 15-Piece Bar Tool Set with Acrylic Stand Bars Set with All Practical Bar Accessories, for Drink Mixing,...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71HP+Jk2aBL._AC_UL320_.jpg",
      "alt": "Cocktail Shaker Set Bartender Kit : 15-Piece Bar Tool Set with Acrylic Stand Bars Set with All Practical Bar Accessories, for Drink Mixing,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CH9K479X"
  },
  {
    "name": "ZJWZLG Bar Mat - Premium 18\"X12\" Rubber Bar Mats for Countertop, Non-slip Dish Drying Pad & Bartender Mat with for Fast Drying, Ideal Bar T...",
    "category": "Home Bar",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ONT694dsL._AC_UL320_.jpg",
      "alt": "ZJWZLG Bar Mat - Premium 18\"X12\" Rubber Bar Mats for Countertop, Non-slip Dish Drying Pad & Bartender Mat with for Fast Drying, Ideal Bar T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F98YM62L"
  },
  {
    "name": "Bar Mat, Bar Accessories, Multifunctional Folding Cocktail Mat with Cutting Board, 18\" X 12\"(Black) Drying Mats,Bar Mat for Countertop,Bar...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71iuQF0QF-L._AC_UL320_.jpg",
      "alt": "Bar Mat, Bar Accessories, Multifunctional Folding Cocktail Mat with Cutting Board, 18\" X 12\"(Black) Drying Mats,Bar Mat for Countertop,Bar...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BX5XKHQK"
  },
  {
    "name": "BARsics 17.5x3.5 inches Long PVC Bar Rail Mat Non-Slip Serving Spill Mat (Pack of 2)",
    "category": "Home Bar",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61BbwQsLHUL._AC_UL320_.jpg",
      "alt": "BARsics 17.5x3.5 inches Long PVC Bar Rail Mat Non-Slip Serving Spill Mat (Pack of 2)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D49C82SV"
  },
  {
    "name": "Winco Condiment Caddy 6 Compartment, Plastic",
    "category": "Home Bar",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81lLQfNvwfL._AC_UL320_.jpg",
      "alt": "Winco Condiment Caddy 6 Compartment, Plastic",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B001EVBBKC"
  },
  {
    "name": "Drinking Glasses with Bamboo Lids and Glass Straw 4pcs Set - 16oz Glass Cups, Iced Coffee Glasses, Cute iced Tea Glasses, Beer Glasses, Ide...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for home bar shoppers who want cleaner hosting, better drink prep, nicer glassware, or a cart that looks pulled together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Home Bar shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Bar Cart Edit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Drink responsibly, check glass dimensions and care instructions, and keep bar tools away from children.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81YS7014JPL._AC_UL320_.jpg",
      "alt": "Drinking Glasses with Bamboo Lids and Glass Straw 4pcs Set - 16oz Glass Cups, Iced Coffee Glasses, Cute iced Tea Glasses, Beer Glasses, Ide...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09QKTQ9TB"
  }
];

export function getBarCartEditCatalog(
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
