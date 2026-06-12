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
    "name": "NEWITIN 69 Pieces Gold Jewelry Set for Women Fashion Costume Jewelry Gold Plated Necklace Bracelet Earrings Set for Women",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/818BnYh9Q8L._AC_UL320_.jpg",
      "alt": "NEWITIN 69 Pieces Gold Jewelry Set for Women Fashion Costume Jewelry Gold Plated Necklace Bracelet Earrings Set for Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CRKTWVZS"
  },
  {
    "name": "Gokeey Gold Bracelets Set for Women Non Tarnish, Waterproof 14K Gold Plated Sterling Silver Chunky Cuff Bracelet Stackable...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81+MhJFPyFL._AC_UL320_.jpg",
      "alt": "Gokeey Gold Bracelets Set for Women Non Tarnish, Waterproof 14K Gold Plated Sterling Silver Chunky Cuff Bracelet Stackable...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DX6Q2K5D"
  },
  {
    "name": "WomenGifts Layered Gold Necklaces for Women, 14K Gold Sterling Silver Plated Dainty Pendant Necklace Set Non Tarnish, Chun...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/615sXIJbXsL._AC_UL320_.jpg",
      "alt": "WomenGifts Layered Gold Necklaces for Women, 14K Gold Sterling Silver Plated Dainty Pendant Necklace Set Non Tarnish, Chun...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FFTH89XT"
  },
  {
    "name": "Fesciory Leopard Bracelet for Women, Boho Leather Wrap Multi-Layer Pearl Crystal Bracelet Bangle Jewelry",
    "category": "Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71mp0QCxg8L._AC_UL320_.jpg",
      "alt": "Fesciory Leopard Bracelet for Women, Boho Leather Wrap Multi-Layer Pearl Crystal Bracelet Bangle Jewelry",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BVZF37MV"
  },
  {
    "name": "FAXHION 68 Pcs Gold Jewelry Set for Women with 7 Necklace, 17 Bracelet, 5 Hoop Earrings, 15 Stud Earrings, 24 Knuckle Ring...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81sSfHk-VyL._AC_UL320_.jpg",
      "alt": "FAXHION 68 Pcs Gold Jewelry Set for Women with 7 Necklace, 17 Bracelet, 5 Hoop Earrings, 15 Stud Earrings, 24 Knuckle Ring...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FCY8GX7N"
  },
  {
    "name": "Sriomu Natural Healing Stone Fishhoop Dangle Drop Earrings Statement Gold silver earrings",
    "category": "Accessories",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61-P2SIA9LL._AC_UL320_.jpg",
      "alt": "Sriomu Natural Healing Stone Fishhoop Dangle Drop Earrings Statement Gold silver earrings",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DGQW4PKS"
  },
  {
    "name": "4pcs Cubic Zirconia Wedding Jewelry Sets for Bride Bridesmaid Cubic Zirconia Pendant Necklace Earrings Link Tennis Bracele...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91fcC78hZCL._AC_UL320_.jpg",
      "alt": "4pcs Cubic Zirconia Wedding Jewelry Sets for Bride Bridesmaid Cubic Zirconia Pendant Necklace Earrings Link Tennis Bracele...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJ8VN3QV"
  },
  {
    "name": "17 MILE 78 Pieces Gold Jewelry Set for Women, 9 Necklace, 24 Bracelet, 22 Earrings, 23 Knuckle Rings Gold Plated Jewerly s...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91krpHS1OUL._AC_UL320_.jpg",
      "alt": "17 MILE 78 Pieces Gold Jewelry Set for Women, 9 Necklace, 24 Bracelet, 22 Earrings, 23 Knuckle Rings Gold Plated Jewerly s...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FPW1R6S3"
  },
  {
    "name": "Gold Statement Earrings For Women 18K Gold Plated Sectored Flower Leaf Shell Angel Wing Earring Large Stud Earrings Hypoal...",
    "category": "Accessories",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81JxZsqaJML._AC_UL320_.jpg",
      "alt": "Gold Statement Earrings For Women 18K Gold Plated Sectored Flower Leaf Shell Angel Wing Earring Large Stud Earrings Hypoal...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FLCDB6RK"
  },
  {
    "name": "YEEZII 56 Pcs Gold Jewelry Set for Women with 5Pcs Layered Necklace, 5Pcs Layered Necklace, 12 Bracelets, 4 Hoop Earrings,...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81GZwmGF3XL._AC_UL320_.jpg",
      "alt": "YEEZII 56 Pcs Gold Jewelry Set for Women with 5Pcs Layered Necklace, 5Pcs Layered Necklace, 12 Bracelets, 4 Hoop Earrings,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FS13NG6D"
  },
  {
    "name": "Caiyao 4Pcs Bohemia Multilayer Stackable Beaded Bracelets Set Colorful Crystal Stone Gold Beaded Stretch Bracelets Hawaii ...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/714eqh3mP5L._AC_UL320_.jpg",
      "alt": "Caiyao 4Pcs Bohemia Multilayer Stackable Beaded Bracelets Set Colorful Crystal Stone Gold Beaded Stretch Bracelets Hawaii ...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSPKSRMH"
  },
  {
    "name": "Sixexey Rhinestone Earrings Sparkly Bracelet Earring Party Prom Earrings Jewelry for Women",
    "category": "Accessories",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61cMcwgdmQL._AC_UL320_.jpg",
      "alt": "Sixexey Rhinestone Earrings Sparkly Bracelet Earring Party Prom Earrings Jewelry for Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9HLWT58"
  },
  {
    "name": "42 Pairs Gold Hoop Earrings Set for Women, Hypoallergenic Multipack Small to Chunky Hoops, Pearl & Twisted Trendy Earrings...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91xxcsSsuwL._AC_UL320_.jpg",
      "alt": "42 Pairs Gold Hoop Earrings Set for Women, Hypoallergenic Multipack Small to Chunky Hoops, Pearl & Twisted Trendy Earrings...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C2Z4BFZN"
  },
  {
    "name": "AIPPK 18K Gold Plated Clover Lucky Bracelet for Women White/Black/Red/Green Flower Four Leaf Link Bracelets Trendy Jewelry...",
    "category": "Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61yKzac-YFL._AC_UL320_.jpg",
      "alt": "AIPPK 18K Gold Plated Clover Lucky Bracelet for Women White/Black/Red/Green Flower Four Leaf Link Bracelets Trendy Jewelry...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CY27F8C5"
  },
  {
    "name": "iF YOU 25 Pcs Gold Stackable Ring Set for Women, Chunky Knuckle Finger Midi Rings, Silver Simple Stacking Cute Rings Pack ...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51LjCWKkBwL._AC_UL320_.jpg",
      "alt": "iF YOU 25 Pcs Gold Stackable Ring Set for Women, Chunky Knuckle Finger Midi Rings, Silver Simple Stacking Cute Rings Pack ...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DS2D78PT"
  },
  {
    "name": "Kendra Scott Elisa Pendant Necklace for Women, Fashion Jewelry, 14k Gold-Plated",
    "category": "Accessories",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51dSKjL6BxL._AC_UL320_.jpg",
      "alt": "Kendra Scott Elisa Pendant Necklace for Women, Fashion Jewelry, 14k Gold-Plated",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00RYURH8M"
  },
  {
    "name": "Poxtex Layered Gold Necklaces for Women, Stackable Dainty 14K Gold Silver Plated Trendy Simple Heart Diamond Cross Bow Cir...",
    "category": "Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61dk3JqBMiL._AC_UL320_.jpg",
      "alt": "Poxtex Layered Gold Necklaces for Women, Stackable Dainty 14K Gold Silver Plated Trendy Simple Heart Diamond Cross Bow Cir...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D3T518P6"
  },
  {
    "name": "4 Pcs Dainty Gold Silver Bracelets Set for Women 14K Plated Link Cubic Zirconia Paperclip Stake Layering Chain Adjustable ...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71TwmPg75KL._AC_UL320_.jpg",
      "alt": "4 Pcs Dainty Gold Silver Bracelets Set for Women 14K Plated Link Cubic Zirconia Paperclip Stake Layering Chain Adjustable ...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C5M7RF8N"
  },
  {
    "name": "YOOESTORES82 Gold Disc Pendant Necklace Earrings Set Leather Cord Black Circle Statement Necklaces Geometric Textured Meda...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/41FQmrJvFQL._AC_UL320_.jpg",
      "alt": "YOOESTORES82 Gold Disc Pendant Necklace Earrings Set Leather Cord Black Circle Statement Necklaces Geometric Textured Meda...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FK4KLPFK"
  },
  {
    "name": "AICase 18K Gold Plated Clover Bracelet Dupes Gold/White/Black Bracelet Set for Women Flower Leaf Lucky Clover Bracelets Tr...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71wVBEPyOzL._AC_UL320_.jpg",
      "alt": "AICase 18K Gold Plated Clover Bracelet Dupes Gold/White/Black Bracelet Set for Women Flower Leaf Lucky Clover Bracelets Tr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DPZ7Z7R6"
  },
  {
    "name": "SILANER Crystal Charms Multilayer Bracelets - 3PCS Gold/Silver/Rose Gold Corn Chain Bracelet for Women, Tree of Life Heart...",
    "category": "Accessories",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71+KDcD2SaL._AC_UL320_.jpg",
      "alt": "SILANER Crystal Charms Multilayer Bracelets - 3PCS Gold/Silver/Rose Gold Corn Chain Bracelet for Women, Tree of Life Heart...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09BYPLXMW"
  },
  {
    "name": "73 Pcs Gold Jewelry Set with 6Pcs Layered Necklace, 11 Pcs anklet and 7Pcs Earring Ear Cuff,12Hoop Earrings ,15pcs Rings,2...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71J9ynr6mEL._AC_UL320_.jpg",
      "alt": "73 Pcs Gold Jewelry Set with 6Pcs Layered Necklace, 11 Pcs anklet and 7Pcs Earring Ear Cuff,12Hoop Earrings ,15pcs Rings,2...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D5DCZQGV"
  },
  {
    "name": "SELSHE Dangle Earrings for Women,14k Gold Plated Triple Huggie Stud Earrings Cute Statement Chain Earring Dainty Drop Earr...",
    "category": "Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51WDk+QvNnL._AC_UL320_.jpg",
      "alt": "SELSHE Dangle Earrings for Women,14k Gold Plated Triple Huggie Stud Earrings Cute Statement Chain Earring Dainty Drop Earr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FGD286GZ"
  },
  {
    "name": "Obidos 14K Gold Plated Illusion Stud Earrings for Women | Triple Huggie Hoop Earrings for One Hole| Trendy Simple Hypoalle...",
    "category": "Accessories",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61H2JxOnZDL._AC_UL320_.jpg",
      "alt": "Obidos 14K Gold Plated Illusion Stud Earrings for Women | Triple Huggie Hoop Earrings for One Hole| Trendy Simple Hypoalle...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08YNNF5TZ"
  },
  {
    "name": "DEARMAY Gold Bracelets for Women Waterproof, 14K Gold Plated Stackable Jewelry Sets Non Tarnish Trendy Thin Dainty Cuban L...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/814Xi+KEYJL._AC_UL320_.jpg",
      "alt": "DEARMAY Gold Bracelets for Women Waterproof, 14K Gold Plated Stackable Jewelry Sets Non Tarnish Trendy Thin Dainty Cuban L...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C2P72WY6"
  },
  {
    "name": "GIGB PBDK Chunky Gold Choker Necklace for Women,Trendy Silver Statement Necklace Long Snake Chain Drop Necklace,Charm Prom...",
    "category": "Accessories",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/513UiaE375L._AC_UL320_.jpg",
      "alt": "GIGB PBDK Chunky Gold Choker Necklace for Women,Trendy Silver Statement Necklace Long Snake Chain Drop Necklace,Charm Prom...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D1XYYJ6W"
  },
  {
    "name": "IFKM Gold Plated Jewelry Set for Women,14k Gold Plated Multi Layer Necklaces Stackable Bangle Bracelets Stackable Knuckle ...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81YUtidOP5L._AC_UL320_.jpg",
      "alt": "IFKM Gold Plated Jewelry Set for Women,14k Gold Plated Multi Layer Necklaces Stackable Bangle Bracelets Stackable Knuckle ...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BN57HRJJ"
  },
  {
    "name": "NEWITIN 49 Pieces Gold Jewelry Set for Women Fashion Costume Jewelry Gold Plated Necklace Bracelet Ring Earrings Set for W...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for accessories shoppers who want a sharper outfit finish, easier storage, or a small accessory with real styling range.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Accessories shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Pin & Polish lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check metal details, sizing, clasp style, and return policies if you have sensitive skin.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71yZCKlOAVL._AC_UL320_.jpg",
      "alt": "NEWITIN 49 Pieces Gold Jewelry Set for Women Fashion Costume Jewelry Gold Plated Necklace Bracelet Ring Earrings Set for W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DL5JN2YN"
  }
];

export function getPinAndPolishCatalog(
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
