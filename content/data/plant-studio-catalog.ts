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
    "name": "VIVOSUN 6.5 Inch Gardening Scissors Hand Pruner Pruning Shear with Straight Stainless Steel Blades Orange 1-Pack",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61IoQS+EgTL._AC_UL320_.jpg",
      "alt": "VIVOSUN 6.5 Inch Gardening Scissors Hand Pruner Pruning Shear with Straight Stainless Steel Blades Orange 1-Pack",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01EWH83FU"
  },
  {
    "name": "Miracle-Gro Indoor Plant Food for All Plants, Liquid Plant Food for Houseplants, Flowers, Vegetables, Herbs, and More, 8 fl. oz., 2-Pack",
    "category": "Indoor Plants",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71HuD1ZGrAL._AC_UL320_.jpg",
      "alt": "Miracle-Gro Indoor Plant Food for All Plants, Liquid Plant Food for Houseplants, Flowers, Vegetables, Herbs, and More, 8 fl. oz., 2-Pack",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0G21YBN37"
  },
  {
    "name": "40 Pcs 5 Shapes Yellow Extremely Sticky Traps for Fungus Gnat, Fruit Fly, Fly, Whitefly, Flying Insect Catcher Traps for Houseplants, Kitch...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7105XWXobxL._AC_UL320_.jpg",
      "alt": "40 Pcs 5 Shapes Yellow Extremely Sticky Traps for Fungus Gnat, Fruit Fly, Fly, Whitefly, Flying Insect Catcher Traps for Houseplants, Kitch...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09X3NMTK9"
  },
  {
    "name": "VELCRO Brand Adjustable Plant Ties | 75 ft x 1/2 in Green Garden Tape | Reusable, Cut-to-Length Hook & Loop Plant Support for Staking, Trai...",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81AZkZPHUZL._AC_UL320_.jpg",
      "alt": "VELCRO Brand Adjustable Plant Ties | 75 ft x 1/2 in Green Garden Tape | Reusable, Cut-to-Length Hook & Loop Plant Support for Staking, Trai...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B005755YSQ"
  },
  {
    "name": "Bamworld Plant Stand Indoor Plant Shelf Outdoor Wood Plant Rack for Multiple Plants 3 Tiers Ladder Plant Holder for Living Room Patio Boho...",
    "category": "Indoor Plants",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91uZi7zRBuL._AC_UL320_.jpg",
      "alt": "Bamworld Plant Stand Indoor Plant Shelf Outdoor Wood Plant Rack for Multiple Plants 3 Tiers Ladder Plant Holder for Living Room Patio Boho...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09234GQXV"
  },
  {
    "name": "SuperMoss (01710) Microfiber Dusting Gloves for Plants – Gentle Leaf Shine & Cleaner for Houseplants, Reusable Indoor Plant Care Accessorie...",
    "category": "Indoor Plants",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81BRTSGoy8L._AC_UL320_.jpg",
      "alt": "SuperMoss (01710) Microfiber Dusting Gloves for Plants – Gentle Leaf Shine & Cleaner for Houseplants, Reusable Indoor Plant Care Accessorie...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DTXL2QMD"
  },
  {
    "name": "GLCSC 8pcs Plant Stem Support, Plant Support for Indoor Plants, Plastic Reusable Plant Stabilizer, Indoor Plants Accessories",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71EM1zHHzSL._AC_UL320_.jpg",
      "alt": "GLCSC 8pcs Plant Stem Support, Plant Support for Indoor Plants, Plastic Reusable Plant Stabilizer, Indoor Plants Accessories",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F4CNR7WF"
  },
  {
    "name": "Mkono Macrame Plant Hanger Indoor Hanging Planter Basket with Wood Beads Decorative Flower Pot Holder No Tassels for Indoor Outdoor Boho Ho...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61dWZkgeJ0L._AC_UL320_.jpg",
      "alt": "Mkono Macrame Plant Hanger Indoor Hanging Planter Basket with Wood Beads Decorative Flower Pot Holder No Tassels for Indoor Outdoor Boho Ho...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07L4J1P9P"
  },
  {
    "name": "Miracle-Gro Water Storing Crystals - Soil Moisture Retention Crystals for Indoor and Outdoor Plants - 12 oz.",
    "category": "Indoor Plants",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qjLamqfML._AC_UL320_.jpg",
      "alt": "Miracle-Gro Water Storing Crystals - Soil Moisture Retention Crystals for Indoor and Outdoor Plants - 12 oz.",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0042YYVYG"
  },
  {
    "name": "Bamworld Tall Plant Stand Indoor Outdoor, Corner Metal Flower Pot Stands for Multiple Plants, 4 Tier Heavy Duty Plant Shelf for Patio Garde...",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7119xqE3x4L._AC_UL320_.jpg",
      "alt": "Bamworld Tall Plant Stand Indoor Outdoor, Corner Metal Flower Pot Stands for Multiple Plants, 4 Tier Heavy Duty Plant Shelf for Patio Garde...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CVVP4KLY"
  },
  {
    "name": "iDavosic.ly Plant Stand Indoor Outdoor, 5 Tier Corner Metal Flower Display Holder Shelf, Folding Tall Orchid Rack for Patio Balcony Porch G...",
    "category": "Indoor Plants",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7152aHBpceL._AC_UL320_.jpg",
      "alt": "iDavosic.ly Plant Stand Indoor Outdoor, 5 Tier Corner Metal Flower Display Holder Shelf, Folding Tall Orchid Rack for Patio Balcony Porch G...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B9WFTG1H"
  },
  {
    "name": "HNXTYAOB Repotting Mat for Indoor Plant Transplanting and Mess Control 27\"x 27\" Thickened Waterproof Potting Tray Foldable Succulent Pottin...",
    "category": "Indoor Plants",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/712S+JWmYuL._AC_UL320_.jpg",
      "alt": "HNXTYAOB Repotting Mat for Indoor Plant Transplanting and Mess Control 27\"x 27\" Thickened Waterproof Potting Tray Foldable Succulent Pottin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BC9LRD4L"
  },
  {
    "name": "Fiskars Planting Soil Scoop & Brush Set, Dual-Sided Tool for Indoor Digging & Cleanup, Narrow Rigid End & Flexible Dustpan for Potting, Sof...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71mgQdHK6kL._AC_UL320_.jpg",
      "alt": "Fiskars Planting Soil Scoop & Brush Set, Dual-Sided Tool for Indoor Digging & Cleanup, Narrow Rigid End & Flexible Dustpan for Potting, Sof...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLSF8219"
  },
  {
    "name": "Geiserailie 60 Pieces Plant Climbing Wall Fixture Clips with 72 Pieces Acrylic Adhesive Sticker Leaf Fixer Invisible Wall Vines Fixing Clip...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71sjSGGR18L._AC_UL320_.jpg",
      "alt": "Geiserailie 60 Pieces Plant Climbing Wall Fixture Clips with 72 Pieces Acrylic Adhesive Sticker Leaf Fixer Invisible Wall Vines Fixing Clip...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08Z7L3N1X"
  },
  {
    "name": "Iridescent Self Watering Globes, Glass Rainbow Plant Watering Globes, Self Watering Planter Insert, Automatic Plant Waterer Indoor (Medium-...",
    "category": "Indoor Plants",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81d1B1dqKhL._AC_UL320_.jpg",
      "alt": "Iridescent Self Watering Globes, Glass Rainbow Plant Watering Globes, Self Watering Planter Insert, Automatic Plant Waterer Indoor (Medium-...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D6PG686X"
  },
  {
    "name": "2 Pack 28&#x27;&#x27; Bendable Moss Pole Monstera Plant Support for Climbing Indoor Plants - Stakes for Potted Climbers - Tall Sticks Indoo...",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81IqyRJCE-L._AC_UL320_.jpg",
      "alt": "2 Pack 28&#x27;&#x27; Bendable Moss Pole Monstera Plant Support for Climbing Indoor Plants - Stakes for Potted Climbers - Tall Sticks Indoo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C8TZSD82"
  },
  {
    "name": "BACEKOLL Plant Stand Indoor with Grow Lights, 7 Tiered Indoor Plant Shelf, 49\" Corner Plant Stands for Indoor Plants, Metal Plant Flower Di...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71a+FMczcwL._AC_UL320_.jpg",
      "alt": "BACEKOLL Plant Stand Indoor with Grow Lights, 7 Tiered Indoor Plant Shelf, 49\" Corner Plant Stands for Indoor Plants, Metal Plant Flower Di...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DDXXBRMH"
  },
  {
    "name": "Miracle-Gro Indoor Plant Food, Liquid Plant Food for Houseplants, Snake Plants, Peace Lilies, Flowers, Vegetables, Herbs and More, 8 oz., 2...",
    "category": "Indoor Plants",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71cTl+fiDmL._AC_UL320_.jpg",
      "alt": "Miracle-Gro Indoor Plant Food, Liquid Plant Food for Houseplants, Snake Plants, Peace Lilies, Flowers, Vegetables, Herbs and More, 8 oz., 2...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B082BPQH6Z"
  },
  {
    "name": "XXXFLOWER Plant Terrarium with Wooden Stand, Air Planter Bulb Glass Vase Metal Swivel Holder Retro Tabletop for Hydroponics Home Garden Off...",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71GrAWYYDyL._AC_UL320_.jpg",
      "alt": "XXXFLOWER Plant Terrarium with Wooden Stand, Air Planter Bulb Glass Vase Metal Swivel Holder Retro Tabletop for Hydroponics Home Garden Off...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07D29P5Z1"
  },
  {
    "name": "Linpla 5-Pack Decent Metal Plant Stands, Heavy Duty Flower Pot Stands for Multiple Plant, Anti-Rust Iron Plant Pot Shelf, Decoration Racks...",
    "category": "Decor",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81c6QAI9oDL._AC_UL320_.jpg",
      "alt": "Linpla 5-Pack Decent Metal Plant Stands, Heavy Duty Flower Pot Stands for Multiple Plant, Anti-Rust Iron Plant Pot Shelf, Decoration Racks...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRPVLWZK"
  },
  {
    "name": "Bamworld Plant Stand Indoor Outdoor Tall Plant Shelf for Multiple Plants Pots Wood Flower Stand Large Flower Holder for Living Room, Patio,...",
    "category": "Indoor Plants",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81NGHI9crTL._AC_UL320_.jpg",
      "alt": "Bamworld Plant Stand Indoor Outdoor Tall Plant Shelf for Multiple Plants Pots Wood Flower Stand Large Flower Holder for Living Room, Patio,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BTSQRWH3"
  },
  {
    "name": "GEEBOBO 5 Tiered Tall Plant Stand for Indoor, Wood Plant Shelf Corner Display Rack, Multi-tier Planter Pot Holder Flower Stand for Living R...",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7129Yjz-mjL._AC_UL320_.jpg",
      "alt": "GEEBOBO 5 Tiered Tall Plant Stand for Indoor, Wood Plant Shelf Corner Display Rack, Multi-tier Planter Pot Holder Flower Stand for Living R...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09GY113GL"
  },
  {
    "name": "MOONSOUND Self Watering Globes for Plants - 10pcs Automatic Watering Bulbs for Indoor & Outdoor Potted Plants, Vacation Plant Care, Water C...",
    "category": "Indoor Plants",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71epyy1kndL._AC_UL320_.jpg",
      "alt": "MOONSOUND Self Watering Globes for Plants - 10pcs Automatic Watering Bulbs for Indoor & Outdoor Potted Plants, Vacation Plant Care, Water C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09CTS9F59"
  },
  {
    "name": "Extendable Plant Stakes, Length Scalable from 17.9IN to 42.3IN Plant Support Stake, Orchid Sticks with Clips for Indoor Outdoor,Garden Stak...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61VctrE2f4L._AC_UL320_.jpg",
      "alt": "Extendable Plant Stakes, Length Scalable from 17.9IN to 42.3IN Plant Support Stake, Orchid Sticks with Clips for Indoor Outdoor,Garden Stak...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F1MY82C3"
  },
  {
    "name": "AZERPIAN Plant Stand 5 Tier Indoor Metal Flower Shelf for Multiple Plants Corner Tall Flower Holders for Patio Garden Living Room Balcony B...",
    "category": "Indoor Plants",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71k05b5mmXL._AC_UL320_.jpg",
      "alt": "AZERPIAN Plant Stand 5 Tier Indoor Metal Flower Shelf for Multiple Plants Corner Tall Flower Holders for Patio Garden Living Room Balcony B...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B4D5NKFT"
  },
  {
    "name": "Repotting Mat for Indoor Plant Transplanting Control Mess, 26.8\"X26.8\" Waterproof Succulent Potting Mat Square Planting Tray Soil Change Ma...",
    "category": "Indoor Plants",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71pTlzIo4XL._AC_UL320_.jpg",
      "alt": "Repotting Mat for Indoor Plant Transplanting Control Mess, 26.8\"X26.8\" Waterproof Succulent Potting Mat Square Planting Tray Soil Change Ma...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BMDWHVWY"
  },
  {
    "name": "XXXFLOWER Wall Hanging Propagation Station with Wooden Stand 5 Glass Test Tubes 3 Tiered Planters Wall Terrarium for Home Office Plant Hang...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AjSXyijdL._AC_UL320_.jpg",
      "alt": "XXXFLOWER Wall Hanging Propagation Station with Wooden Stand 5 Glass Test Tubes 3 Tiered Planters Wall Terrarium for Home Office Plant Hang...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09M2K9F34"
  },
  {
    "name": "5pack Adjustable Plant Support Pole – Stackable Indoor/Outdoor Support Pole with Clamps, Suitable for Supporting Monstera and Climbing Plan...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for indoor plants shoppers who want less guesswork, cleaner watering, better light, or a nicer place for plants to live.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Indoor Plants shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Plant Studio lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match products to plant species, light, pot size, drainage, and your actual watering habits.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71MuCTN2SpL._AC_UL320_.jpg",
      "alt": "5pack Adjustable Plant Support Pole – Stackable Indoor/Outdoor Support Pole with Clamps, Suitable for Supporting Monstera and Climbing Plan...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F6LHWJZY"
  }
];

export function getPlantStudioCatalog(
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
