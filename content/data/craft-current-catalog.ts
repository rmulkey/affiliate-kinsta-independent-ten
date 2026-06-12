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
    "name": "Arts & Crafts Supplies Kits & Materials Set for Kids, Toddler - Carl & Kay",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/A1zjgYZSxsL._AC_UL320_.jpg",
      "alt": "Arts & Crafts Supplies Kits & Materials Set for Kids, Toddler - Carl & Kay",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07ZG6JY5J"
  },
  {
    "name": "Sundaymot Kids Arts and Crafts Set 2000+ Piece DIY Craft Supplies Kit with Assorted Accessories for Boys & Girls Ages 6-12, School Classroo...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91f43JmnAUL._AC_UL320_.jpg",
      "alt": "Sundaymot Kids Arts and Crafts Set 2000+ Piece DIY Craft Supplies Kit with Assorted Accessories for Boys & Girls Ages 6-12, School Classroo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GV28QYZ5"
  },
  {
    "name": "Crayola Construction Paper Bulk Pack (480 Sheets) – 10 Assorted Colors, 9x12, Teacher School Supplies & Classroom Must Haves, Card Making C...",
    "category": "Crafts",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61TbDzO158L._AC_UL320_.jpg",
      "alt": "Crayola Construction Paper Bulk Pack (480 Sheets) – 10 Assorted Colors, 9x12, Teacher School Supplies & Classroom Must Haves, Card Making C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00MJ8JSFE"
  },
  {
    "name": "Itopstar 3000 Kids Arts and Crafts Supplies for Kids Crafting Supply in 3 Layered Plastic Art Box All in One Ages 8 9 10 11 & 12 Year Old G...",
    "category": "Crafts",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81+kix2uY-L._AC_UL320_.jpg",
      "alt": "Itopstar 3000 Kids Arts and Crafts Supplies for Kids Crafting Supply in 3 Layered Plastic Art Box All in One Ages 8 9 10 11 & 12 Year Old G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BBMF9XCM"
  },
  {
    "name": "Caydo 200 PCS Thick Pipe Cleaners Craft Supplies Multi-Color Chenille Stems for Art and Craft Projects Kids Creative Toys DIY Home Decorati...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91QRd3kbzEL._AC_UL320_.jpg",
      "alt": "Caydo 200 PCS Thick Pipe Cleaners Craft Supplies Multi-Color Chenille Stems for Art and Craft Projects Kids Creative Toys DIY Home Decorati...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09WV4JJRC"
  },
  {
    "name": "Crayola Air Dry Clay (5lbs), Teacher Supplies, Natural White Modeling Clay for Kids, Sculpting Material, Bulk Craft Supplies for Art Classr...",
    "category": "Crafts",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61orX92CK8L._AC_UL320_.jpg",
      "alt": "Crayola Air Dry Clay (5lbs), Teacher Supplies, Natural White Modeling Clay for Kids, Sculpting Material, Bulk Craft Supplies for Art Classr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B089T7PX27"
  },
  {
    "name": "Mr. Pen- Craft Scissors Decorative Edge, 6 Pack, Bright, Zig Zag Scissors for Crafting, Scrapbooking, Fancy, Pattern, Design",
    "category": "Decor",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71oLNpwGpEL._AC_UL320_.jpg",
      "alt": "Mr. Pen- Craft Scissors Decorative Edge, 6 Pack, Bright, Zig Zag Scissors for Crafting, Scrapbooking, Fancy, Pattern, Design",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08F2SPQZR"
  },
  {
    "name": "MYDBUYSOME 2774pcs Gem Stickers Jewels for Crafts, Self Adhesive Rhinestone Jewel Stick on Gems, Acrylic Bling Heart Stickers, Craft Suppli...",
    "category": "Crafts",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/810pPjR0R5L._AC_UL320_.jpg",
      "alt": "MYDBUYSOME 2774pcs Gem Stickers Jewels for Crafts, Self Adhesive Rhinestone Jewel Stick on Gems, Acrylic Bling Heart Stickers, Craft Suppli...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BS4BVG3M"
  },
  {
    "name": "Secopad Scrapbook Tape, 4 Pack Double Sided Tape Roller for Crafts, Adhesive Glue Runner Scrapbooking Supplies Journaling School Office Tea...",
    "category": "Crafts",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71lfbwPaQXL._AC_UL320_.jpg",
      "alt": "Secopad Scrapbook Tape, 4 Pack Double Sided Tape Roller for Crafts, Adhesive Glue Runner Scrapbooking Supplies Journaling School Office Tea...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CHTZD63Q"
  },
  {
    "name": "Dan&Darci Arts and Crafts Vault - Craft Supplies Kit in a Box - Birthday Gift for Kids Ages 4 5 6 7 8 9 10 11 & 12 Year Old Girls & Boys -...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Y86A3IpkL._AC_UL320_.jpg",
      "alt": "Dan&Darci Arts and Crafts Vault - Craft Supplies Kit in a Box - Birthday Gift for Kids Ages 4 5 6 7 8 9 10 11 & 12 Year Old Girls & Boys -...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08H4SG94J"
  },
  {
    "name": "Zefy 3200+ Pcs Arts and Crafts Supplies for Kids, All in One Craft Kits with 12 Crafts Design, DIY School Supplies Kit Craft Box Easter Gif...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81mF7TRRTNL._AC_UL320_.jpg",
      "alt": "Zefy 3200+ Pcs Arts and Crafts Supplies for Kids, All in One Craft Kits with 12 Crafts Design, DIY School Supplies Kit Craft Box Easter Gif...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FCLWN2PC"
  },
  {
    "name": "Mod Podge Matte Sealer, Glue & Finish: All-in-One Craft Solution- Quick Dry, Easy Clean, for Wood, Paper, Fabric & More. Non-Toxic - Craft...",
    "category": "Crafts",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61gNyTc584L._AC_UL320_.jpg",
      "alt": "Mod Podge Matte Sealer, Glue & Finish: All-in-One Craft Solution- Quick Dry, Easy Clean, for Wood, Paper, Fabric & More. Non-Toxic - Craft...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000HWY6EM"
  },
  {
    "name": "KTOJOY 200 Pcs Craft Sticks Ice Cream Sticks Natural Wood Popsicle Craft Sticks 4.5 inch Length Treat Sticks Ice Pop Sticks for DIY Crafts",
    "category": "Crafts",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71flWa841dL._AC_UL320_.jpg",
      "alt": "KTOJOY 200 Pcs Craft Sticks Ice Cream Sticks Natural Wood Popsicle Craft Sticks 4.5 inch Length Treat Sticks Ice Pop Sticks for DIY Crafts",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07F367TCK"
  },
  {
    "name": "260 Pieces Colorful Glitter Foam Stickers Self Adhesive Stars Mini Heart Shapes Glitter Stickers, Arts Craft Supplies for Greeting Cards Ho...",
    "category": "Crafts",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71X2j24Q3CL._AC_UL320_.jpg",
      "alt": "260 Pieces Colorful Glitter Foam Stickers Self Adhesive Stars Mini Heart Shapes Glitter Stickers, Arts Craft Supplies for Greeting Cards Ho...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B072JW6NQT"
  },
  {
    "name": "KUNMINGER 40 Rolls Washi Tape Set - 15 mm Wide Colored Decorative Tape for DIY Crafts, Junk Journal Supplies, Scrapbooking Supplies, Bullet...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iCJfgzTZL._AC_UL320_.jpg",
      "alt": "KUNMINGER 40 Rolls Washi Tape Set - 15 mm Wide Colored Decorative Tape for DIY Crafts, Junk Journal Supplies, Scrapbooking Supplies, Bullet...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08TWB425H"
  },
  {
    "name": "34000Pcs Resin Jelly Rhinestones for Bedazzling, Multicolor 3mm Flatback Gems for Diamond Art, Bedazzler Kit with 3Pcs 10ml B7000 Jewelry G...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81XtjfI2MEL._AC_UL320_.jpg",
      "alt": "34000Pcs Resin Jelly Rhinestones for Bedazzling, Multicolor 3mm Flatback Gems for Diamond Art, Bedazzler Kit with 3Pcs 10ml B7000 Jewelry G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D5TQJXRN"
  },
  {
    "name": "Goody King Arts and Crafts Supplies for Kids - 1170Pcs+ Craft Art Supply Kit for Toddlers Kids Craft Supplies & Materials Age 4 5 6 7 8 9 -...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81iZA+0bvyL._AC_UL320_.jpg",
      "alt": "Goody King Arts and Crafts Supplies for Kids - 1170Pcs+ Craft Art Supply Kit for Toddlers Kids Craft Supplies & Materials Age 4 5 6 7 8 9 -...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B082WJRGCZ"
  },
  {
    "name": "38000Pcs Jelly Rhinestones Bedazzling Kit, Multicolor 3mm Flatback Resin Bedazzler Gems with 3Pcs 10ml B7000 Jewelry Glue for Bedazzled Thi...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91rPC79KQgL._AC_UL320_.jpg",
      "alt": "38000Pcs Jelly Rhinestones Bedazzling Kit, Multicolor 3mm Flatback Resin Bedazzler Gems with 3Pcs 10ml B7000 Jewelry Glue for Bedazzled Thi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DYJ266VC"
  },
  {
    "name": "Simetufy 5400 Pcs 1 Inch Tissue Paper Squares, 36 Assorted Colors for Crafts, Art Rainbow Bulk for Mother&#x27;s Day, Projects, Collage, Su...",
    "category": "Crafts",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/715FNfwbODL._AC_UL320_.jpg",
      "alt": "Simetufy 5400 Pcs 1 Inch Tissue Paper Squares, 36 Assorted Colors for Crafts, Art Rainbow Bulk for Mother&#x27;s Day, Projects, Collage, Su...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B1ZYCJPG"
  },
  {
    "name": "3 Pack Silicone mat Large Silicone Sheets for Crafts, Liquid, Resin Jewelry Casting Molds Mat, Silicone Placemat 15.7” x 11.8” (Blue & Rose...",
    "category": "Crafts",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61jdykVuWgL._AC_UL320_.jpg",
      "alt": "3 Pack Silicone mat Large Silicone Sheets for Crafts, Liquid, Resin Jewelry Casting Molds Mat, Silicone Placemat 15.7” x 11.8” (Blue & Rose...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07XFJ5YKN"
  },
  {
    "name": "PerkHomy Natural Jute Twine 600 Feet Long Twine String for Crafts Gift Wrapping Packing Gardening Crochet Knitting Macrame Decor (Brown 2mm...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uelAWQVoL._AC_UL320_.jpg",
      "alt": "PerkHomy Natural Jute Twine 600 Feet Long Twine String for Crafts Gift Wrapping Packing Gardening Crochet Knitting Macrame Decor (Brown 2mm...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BCK98LLG"
  },
  {
    "name": "Mod Podge Gloss Sealer, Glue & Finish: All-in-One Craft Solution- Quick Dry, Easy Clean, for Wood, Paper, Fabric & More. Non-Toxic - Craft...",
    "category": "Crafts",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719FHcaVnrL._AC_UL320_.jpg",
      "alt": "Mod Podge Gloss Sealer, Glue & Finish: All-in-One Craft Solution- Quick Dry, Easy Clean, for Wood, Paper, Fabric & More. Non-Toxic - Craft...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00178QQJ8"
  },
  {
    "name": "Dried Flowers, Resiners 100Pcs Pressed Flowers for Craft Purple Real Natural Dried Flowers Dry Leaves Kit for DIY Making Crafts Resin Soap...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81kS-zJhUaL._AC_UL320_.jpg",
      "alt": "Dried Flowers, Resiners 100Pcs Pressed Flowers for Craft Purple Real Natural Dried Flowers Dry Leaves Kit for DIY Making Crafts Resin Soap...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C8J5QQT4"
  },
  {
    "name": "Elmer&#x27;s Disappearing Purple School Glue Sticks, Washable, 7 Grams, 30 Count - Posters, Back to School, Bulk Pack for Classrooms, #1 Te...",
    "category": "Crafts",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/610GhfDymuL._AC_UL320_.jpg",
      "alt": "Elmer&#x27;s Disappearing Purple School Glue Sticks, Washable, 7 Grams, 30 Count - Posters, Back to School, Bulk Pack for Classrooms, #1 Te...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000VXO4L2"
  },
  {
    "name": "iBayam 3-Pack 8\" Heavy Duty Scissors with Ultra Sharp Blades and Comfort Grip Handles - For Office, Home, School, Sewing, and Crafts",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61iVyRt2AfL._AC_UL320_.jpg",
      "alt": "iBayam 3-Pack 8\" Heavy Duty Scissors with Ultra Sharp Blades and Comfort Grip Handles - For Office, Home, School, Sewing, and Crafts",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07YDDX4JL"
  },
  {
    "name": "A&R CO. 3000+ Pcs Arts and Crafts Supplies & Materials for Kids - Ultimate Bulk Craft Kit for Boys & Girls with 99 Activities Book for Ages...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91VbBwjvd4L._AC_UL320_.jpg",
      "alt": "A&R CO. 3000+ Pcs Arts and Crafts Supplies & Materials for Kids - Ultimate Bulk Craft Kit for Boys & Girls with 99 Activities Book for Ages...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0953XMJZ5"
  },
  {
    "name": "42pcs Felt Fabric Sheet 4\"x4\" Assorted Color DIY Craft Squares Nonwoven 1mm Thick",
    "category": "Crafts",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71XL8mnP3NL._AC_UL320_.jpg",
      "alt": "42pcs Felt Fabric Sheet 4\"x4\" Assorted Color DIY Craft Squares Nonwoven 1mm Thick",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01GCLS32M"
  },
  {
    "name": "Elmer&#x27;s All Purpose School Glue Sticks, Acid-Free and Washable, Clear, 7 Grams, 30 Count - Craft Projects, Poster, Classroom Supplies,...",
    "category": "Crafts",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for crafts shoppers who want easier starting, cleaner storage, better cutting, or a project kit that does not require a second cart.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Crafts shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Craft Current lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age suitability, blade safety, glue warnings, mess level, and what is included before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61qmiizujcL._AC_UL320_.jpg",
      "alt": "Elmer&#x27;s All Purpose School Glue Sticks, Acid-Free and Washable, Clear, 7 Grams, 30 Count - Craft Projects, Poster, Classroom Supplies,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0013CDGT6"
  }
];

export function getCraftCurrentCatalog(
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
