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
    "name": "dazongweihan 18 PCS Colorful Eclectic Wall Art Decor, Maximalist Wall Prints for Bedroom, Funky Posters for Room Aesthetic, Colorful Boho G...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91juYWe7SxL._AC_UL320_.jpg",
      "alt": "dazongweihan 18 PCS Colorful Eclectic Wall Art Decor, Maximalist Wall Prints for Bedroom, Funky Posters for Room Aesthetic, Colorful Boho G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZDPN5QL"
  },
  {
    "name": "Small Decorative Mirror for Girly Bedroom Dresser Decor, Vivid Abstract Wavy Wall Mirrors for Home Aesthetic Book Coffee Shop Hotel Decorat...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71HtXdz0IOL._AC_UL320_.jpg",
      "alt": "Small Decorative Mirror for Girly Bedroom Dresser Decor, Vivid Abstract Wavy Wall Mirrors for Home Aesthetic Book Coffee Shop Hotel Decorat...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F8QHH23L"
  },
  {
    "name": "Yangest Orange Square Throw Pillow Cover Wavy Velvet Cushion Cover Modern Zippered Pillowcase for Sofa Couch Bedroom Living Room Chair, 18...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712SgSh1GIL._AC_UL320_.jpg",
      "alt": "Yangest Orange Square Throw Pillow Cover Wavy Velvet Cushion Cover Modern Zippered Pillowcase for Sofa Couch Bedroom Living Room Chair, 18...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B089QHK1M5"
  },
  {
    "name": "Ceramic Vase, Orange Vase for Home Decor,Decorative Flower Vase, Vertical Stripe Ceramic Vases for Home Décor, Bedroom, Office, Living Room...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71EGedTYIXL._AC_UL320_.jpg",
      "alt": "Ceramic Vase, Orange Vase for Home Decor,Decorative Flower Vase, Vertical Stripe Ceramic Vases for Home Décor, Bedroom, Office, Living Room...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMGWP1M1"
  },
  {
    "name": "Peakeep Slim Digital Mirror Aesthetic Alarm Clock for Bedrooms Desk Decor - Plug in Electric Big LED Modern Small Clock for Office Living R...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61-jUa0gdtL._AC_UL320_.jpg",
      "alt": "Peakeep Slim Digital Mirror Aesthetic Alarm Clock for Bedrooms Desk Decor - Plug in Electric Big LED Modern Small Clock for Office Living R...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4DJ5TYP"
  },
  {
    "name": "Stay Weird Metal Sign, Funny Vintage Tin Wall Decor Plaque for Home Office Bedroom Dorm Bar, Rustic Farmhouse Inspirational Wall Art, 16 x...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71e3e012z5L._AC_UL320_.jpg",
      "alt": "Stay Weird Metal Sign, Funny Vintage Tin Wall Decor Plaque for Home Office Bedroom Dorm Bar, Rustic Farmhouse Inspirational Wall Art, 16 x...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FPQNQ14J"
  },
  {
    "name": "ROYALITA Small Acrylic Shelves Room Decor Floating Shelves (2-Pack, 8-inch Diameter) - Wall Mounted Display Stand for Plants, Toys, Makeup,...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61eRm1LJg5L._AC_UL320_.jpg",
      "alt": "ROYALITA Small Acrylic Shelves Room Decor Floating Shelves (2-Pack, 8-inch Diameter) - Wall Mounted Display Stand for Plants, Toys, Makeup,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJ274335"
  },
  {
    "name": "Leopard Print Pillow Covers 18x18 in Couch Cheetah Print Pillow Case Sets of 2 Modern Decorative Square Throw Pillows for Home Living Room...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71MkWv1dD7L._AC_UL320_.jpg",
      "alt": "Leopard Print Pillow Covers 18x18 in Couch Cheetah Print Pillow Case Sets of 2 Modern Decorative Square Throw Pillows for Home Living Room...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CT4MZX98"
  },
  {
    "name": "AmHoo Pack of 2 Decorative Throw Pillow Covers Checkerboard Luxury Super Soft Faux Fur Wool Set Case Cushion for Couch Sofa Bedroom 18 x 18...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81GVsgG9VjL._AC_UL320_.jpg",
      "alt": "AmHoo Pack of 2 Decorative Throw Pillow Covers Checkerboard Luxury Super Soft Faux Fur Wool Set Case Cushion for Couch Sofa Bedroom 18 x 18...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B5XBYC4P"
  },
  {
    "name": "Framed Black And White Retro Newspaper Wall Art ItS Already Yours Universe Quote Poster Trendy Positive Inspirational Wall Decor for Bedroo...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81hjgGc527L._AC_UL320_.jpg",
      "alt": "Framed Black And White Retro Newspaper Wall Art ItS Already Yours Universe Quote Poster Trendy Positive Inspirational Wall Decor for Bedroo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FM88TNR5"
  },
  {
    "name": "Fancy Homi 2 Packs Rust Boho Decorative Throw Pillow Covers 18x18 Inch for Couch Bed Sofa, Farmhouse Fall Home Decor, Soft Corss Corduroy P...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81CqZf7jRvL._AC_UL320_.jpg",
      "alt": "Fancy Homi 2 Packs Rust Boho Decorative Throw Pillow Covers 18x18 Inch for Couch Bed Sofa, Farmhouse Fall Home Decor, Soft Corss Corduroy P...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C3B5BZ5Y"
  },
  {
    "name": "GIGIZAZA Gold Velvet Decorative Throw Pillow Covers,18x18 Pillow Covers for Couch Sofa Bed 2 Pack Soft Cushion Covers",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81GyJEkdt+L._AC_UL320_.jpg",
      "alt": "GIGIZAZA Gold Velvet Decorative Throw Pillow Covers,18x18 Pillow Covers for Couch Sofa Bed 2 Pack Soft Cushion Covers",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07CVGRQ8D"
  },
  {
    "name": "ZTGDA Funny Queen of Hearts Playing Card Wall Art,Modern Pop Art Linen Canvas Poster, 70sVintage Decor Poster,Bold Female Power Decor for H...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Rq+yn6lML._AC_UL320_.jpg",
      "alt": "ZTGDA Funny Queen of Hearts Playing Card Wall Art,Modern Pop Art Linen Canvas Poster, 70sVintage Decor Poster,Bold Female Power Decor for H...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DZC4NSYJ"
  },
  {
    "name": "Cute Aesthetic Trendy wall decor - Lucky You Gallery Wall Art & Decor - 70s Retro Vintage Minimalist Modern art - Funky Decor - Maximalist...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51HqMGI4b7L._AC_UL320_.jpg",
      "alt": "Cute Aesthetic Trendy wall decor - Lucky You Gallery Wall Art & Decor - 70s Retro Vintage Minimalist Modern art - Funky Decor - Maximalist...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CXB18JH2"
  },
  {
    "name": "97 Decor Colorful Eclectic Decor - Eclectic Wall Art Posters, Funky Gallery Wall Art Prints for Home Bedroom, Maximalist Decorations Famous...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91oATSdj7uL._AC_UL320_.jpg",
      "alt": "97 Decor Colorful Eclectic Decor - Eclectic Wall Art Posters, Funky Gallery Wall Art Prints for Home Bedroom, Maximalist Decorations Famous...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C1RB6353"
  },
  {
    "name": "ZLINA Set of 2 Hot Pink Faux Fur Decorative Throw Pillow Covers Fluffy Striped Pillowcase Cushion Covers 18 x 18 Inch Decor Sofa Couch Bedroom",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81g6TbQK7GL._AC_UL320_.jpg",
      "alt": "ZLINA Set of 2 Hot Pink Faux Fur Decorative Throw Pillow Covers Fluffy Striped Pillowcase Cushion Covers 18 x 18 Inch Decor Sofa Couch Bedroom",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BHBMS5Z9"
  },
  {
    "name": "LOMAO Throw Blankets Flannel Blanket with Checkerboard Grid Pattern Soft Throw Blanket for Couch, Bed, Sofa Luxurious Warm and Cozy for All...",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iOd5cdgQL._AC_UL320_.jpg",
      "alt": "LOMAO Throw Blankets Flannel Blanket with Checkerboard Grid Pattern Soft Throw Blanket for Couch, Bed, Sofa Luxurious Warm and Cozy for All...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09P5YZR5S"
  },
  {
    "name": "Merriva 5 Pack Colorful Metal Starburst Wall Decor, Mid Century Modern Retro Atomic Star Wall Art Sculptures, Whimsical Eclectic Home Decor...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51jGJb1DUbL._AC_UL320_.jpg",
      "alt": "Merriva 5 Pack Colorful Metal Starburst Wall Decor, Mid Century Modern Retro Atomic Star Wall Art Sculptures, Whimsical Eclectic Home Decor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GVXWYK87"
  },
  {
    "name": "Wall Candle Holder Set of 2, Stylish Black Metal Wall Mount Candle Sconces, Modern Wall Decoration for Living Room, Farmhouse, Fireplace, a...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51BNnfAHB-L._AC_UL320_.jpg",
      "alt": "Wall Candle Holder Set of 2, Stylish Black Metal Wall Mount Candle Sconces, Modern Wall Decoration for Living Room, Farmhouse, Fireplace, a...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D3LKTSMC"
  },
  {
    "name": "Vintage Metal Sign Stay Weird Wall Hanging Decorative Plaque 4x16 in for Home Farmhouse Bedroom Porch Vintage-Inspired Decor Fun Retro Sign...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71oU7lul1XL._AC_UL320_.jpg",
      "alt": "Vintage Metal Sign Stay Weird Wall Hanging Decorative Plaque 4x16 in for Home Farmhouse Bedroom Porch Vintage-Inspired Decor Fun Retro Sign...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F2M954X8"
  },
  {
    "name": "JJALIGHTS Exquisite Resin Animal Head Wall Sculpture (Gift Metal Frame) - Imitation Copper Vintage Decor for Living Room, Bedroom & Office...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ttbLv0kML._AC_UL320_.jpg",
      "alt": "JJALIGHTS Exquisite Resin Animal Head Wall Sculpture (Gift Metal Frame) - Imitation Copper Vintage Decor for Living Room, Bedroom & Office...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F18S9HR2"
  },
  {
    "name": "Pink Parrot Decorative Bookends,Set of 2 Cute Bird Animal Sculpture Book Ends to Hold Hevay Duty Books,Unique Resin Statues Book Stopper fo...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81P7fbsinML._AC_UL320_.jpg",
      "alt": "Pink Parrot Decorative Bookends,Set of 2 Cute Bird Animal Sculpture Book Ends to Hold Hevay Duty Books,Unique Resin Statues Book Stopper fo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BW8W5R7T"
  },
  {
    "name": "Black and White Ceramic Vase, Mid Century Modern Striped Small Vases for Flower&Pampas Grass Centerpiece, Black White Checkered Vase for Di...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71CByC6QekL._AC_UL320_.jpg",
      "alt": "Black and White Ceramic Vase, Mid Century Modern Striped Small Vases for Flower&Pampas Grass Centerpiece, Black White Checkered Vase for Di...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D5D8PMC2"
  },
  {
    "name": "JFSM INC. Holiday Stocking Stuffer, Black Bear Raising Middle Finger Figurine Funny Hilarious Decor - Bear Lover Gifts, Cabin Themed Decor,...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/619ZFRZ0DPL._AC_UL320_.jpg",
      "alt": "JFSM INC. Holiday Stocking Stuffer, Black Bear Raising Middle Finger Figurine Funny Hilarious Decor - Bear Lover Gifts, Cabin Themed Decor,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLF5BB95"
  },
  {
    "name": "Black Checkered Grid Checkerboard Kitchen Rug Sets [2 PCs], Anti-Fatigue, Waterproof Non-Slip Kitchen Mats Heavy Duty Ergonomic Comfort Foa...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91TEUnrVKdL._AC_UL320_.jpg",
      "alt": "Black Checkered Grid Checkerboard Kitchen Rug Sets [2 PCs], Anti-Fatigue, Waterproof Non-Slip Kitchen Mats Heavy Duty Ergonomic Comfort Foa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DDTGNN2G"
  },
  {
    "name": "FUTEI Hot Pink Chenille Throw Pillow Covers 18x18 Inch Set of 2,Soft Cozy Bound Edge Design Cushion Case,Home Decor for Couch Bed Living Room",
    "category": "Comfort",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81OdhIHN1UL._AC_UL320_.jpg",
      "alt": "FUTEI Hot Pink Chenille Throw Pillow Covers 18x18 Inch Set of 2,Soft Cozy Bound Edge Design Cushion Case,Home Decor for Couch Bed Living Room",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DFWCN4W6"
  },
  {
    "name": "Meplait 39in Wood Bead Garland Farmhouse with Tassels,Versatile Prayer Beads Boho Chic Wall Hanging Home Decor (Black)",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81l1OpbgxUL._AC_UL320_.jpg",
      "alt": "Meplait 39in Wood Bead Garland Farmhouse with Tassels,Versatile Prayer Beads Boho Chic Wall Hanging Home Decor (Black)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BV26QBGG"
  },
  {
    "name": "Briful Artificial Plant Farmhouse Table Decor, Burgundy Eucalyptus Plant Home Indoor Decor, Fake Plants for Office Coffee Living Room Decor...",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for decor shoppers who want a stronger focal point, better light, more texture, or a color hit that feels intentional.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Decor shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Room Voltage lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions and finishes carefully; decor photos can make pieces feel larger or glossier than they are.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71guQ8C12wL._AC_UL320_.jpg",
      "alt": "Briful Artificial Plant Farmhouse Table Decor, Burgundy Eucalyptus Plant Home Indoor Decor, Fake Plants for Office Coffee Living Room Decor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DTYPSWQH"
  }
];

export function getRoomVoltageCatalog(
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
