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
    "name": "4 Pack Laundry Pods Container, Clear Laundry Room Organization Containers Essentials, Large Detergent Powder Storage Containers Black Woode...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/810CLBSpAWL._AC_UL320_.jpg",
      "alt": "4 Pack Laundry Pods Container, Clear Laundry Room Organization Containers Essentials, Large Detergent Powder Storage Containers Black Woode...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F9NPWTY4"
  },
  {
    "name": "ROMOON Laundry Hamper Sorter Cart: 4-Section Organizer with Heavy-Duty Lockable Wheels and Removable Bags | 180L Rolling Laundry Basket for...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81n1wTh2cRL._AC_UL320_.jpg",
      "alt": "ROMOON Laundry Hamper Sorter Cart: 4-Section Organizer with Heavy-Duty Lockable Wheels and Removable Bags | 180L Rolling Laundry Basket for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRTRJGTD"
  },
  {
    "name": "OUTNILI Mop and Broom Holder Wall Mount - Wood Broom Mop Hanger - Wall Mounted Garden Tool Rack Organizer for Closet Garage Laundry Room, R...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71xmVD7a2aL._AC_UL320_.jpg",
      "alt": "OUTNILI Mop and Broom Holder Wall Mount - Wood Broom Mop Hanger - Wall Mounted Garden Tool Rack Organizer for Closet Garage Laundry Room, R...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BDLCDPB7"
  },
  {
    "name": "Vivihomety Utility Slim Storage Cart with Wheels, 4-Tier Narrow Rolling Organizer Shelf with Wood Top, Metal Storage Rack and Space-Saving...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/818WL7hvDOL._AC_UL320_.jpg",
      "alt": "Vivihomety Utility Slim Storage Cart with Wheels, 4-Tier Narrow Rolling Organizer Shelf with Wood Top, Metal Storage Rack and Space-Saving...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F7QTFXT6"
  },
  {
    "name": "HomePekite Laundry Pods Storage Container, Clear Laundry Room Organization and Storage ,Detergent Powder Container,with Wooden Lids & Label...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81MDPLjs4AL._AC_UL320_.jpg",
      "alt": "HomePekite Laundry Pods Storage Container, Clear Laundry Room Organization and Storage ,Detergent Powder Container,with Wooden Lids & Label...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DFH3ZBCN"
  },
  {
    "name": "Laundry Room Long Mat Area Rug Non-Slip Floor Mat Waterproof Farmhouse Carpet for Kitchen 40\" x 20\"(Black-2)",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81zcyhiBHJL._AC_UL320_.jpg",
      "alt": "Laundry Room Long Mat Area Rug Non-Slip Floor Mat Waterproof Farmhouse Carpet for Kitchen 40\" x 20\"(Black-2)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09QZNV2D2"
  },
  {
    "name": "VASAGLE Laundry Hamper, Laundry Basket, Laundry Sorter with 3 Pull-Out and Removable Bags, Shelf, Metal Frame, 3 x 10.6 Gallons (40 L), 36....",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91zkvXmAIwL._AC_UL320_.jpg",
      "alt": "VASAGLE Laundry Hamper, Laundry Basket, Laundry Sorter with 3 Pull-Out and Removable Bags, Shelf, Metal Frame, 3 x 10.6 Gallons (40 L), 36....",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09QM7RMX2"
  },
  {
    "name": "(2 Pack) Laundry Detergent Cup Holder Drip Catcher Organizer Clip Tight on Laundry Bottle Spouts, No More Leaks or Mess with Detergent and...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61SvuEvM9BL._AC_UL320_.jpg",
      "alt": "(2 Pack) Laundry Detergent Cup Holder Drip Catcher Organizer Clip Tight on Laundry Bottle Spouts, No More Leaks or Mess with Detergent and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09VCLYVDQ"
  },
  {
    "name": "Galasily 3 Pack Laundry Detergent Dispenser Container with Tray, 54OZ Liquid Laundry Soap Dispenser with 12 Labels, Black Laundry Room Orga...",
    "category": "Laundry",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81aRY1eKaDL._AC_UL320_.jpg",
      "alt": "Galasily 3 Pack Laundry Detergent Dispenser Container with Tray, 54OZ Liquid Laundry Soap Dispenser with 12 Labels, Black Laundry Room Orga...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FVWYW9W8"
  },
  {
    "name": "Herture Laundry Hamper with Shelf, Laundry Basket 4 Section, Laundry Sorter with Pull-Out Removable Large 4 Color Bags and Movable Wheels,...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81CnqsyLajL._AC_UL320_.jpg",
      "alt": "Herture Laundry Hamper with Shelf, Laundry Basket 4 Section, Laundry Sorter with Pull-Out Removable Large 4 Color Bags and Movable Wheels,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D17T8Q32"
  },
  {
    "name": "Front Load Washer Door Prop and Stopper - Magnetic Washing Machine Door Holder with 2.6-Inch Magnet Base, Removable Washer Door Stopper Kee...",
    "category": "Gear",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61uuO5zRauL._AC_UL320_.jpg",
      "alt": "Front Load Washer Door Prop and Stopper - Magnetic Washing Machine Door Holder with 2.6-Inch Magnet Base, Removable Washer Door Stopper Kee...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09L1MQBDY"
  },
  {
    "name": "iDesign Laundry Detergent Holder, Liquid Detergent Stand for Laundry Room Organization, Clear",
    "category": "Laundry",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/615z3cQzBGL._AC_UL320_.jpg",
      "alt": "iDesign Laundry Detergent Holder, Liquid Detergent Stand for Laundry Room Organization, Clear",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CS7JP3Q6"
  },
  {
    "name": "Lifewit 2 Pack Laundry Basket 80L Each, Collapsible Clothes Hamper with Reinforced Handles, Freestanding Waterproof Design for Bedroom and...",
    "category": "Laundry",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71QBskj6jRL._AC_UL320_.jpg",
      "alt": "Lifewit 2 Pack Laundry Basket 80L Each, Collapsible Clothes Hamper with Reinforced Handles, Freestanding Waterproof Design for Bedroom and...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B7JGC67R"
  },
  {
    "name": "Command Broom Grippers, 2 Hangers and 4 Strips, Damage-Free Mop and Broom Holder Wall Mount, Household Cleaning Tool Organizer for Kitchen,...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71wyqZY2CKL._AC_UL320_.jpg",
      "alt": "Command Broom Grippers, 2 Hangers and 4 Strips, Damage-Free Mop and Broom Holder Wall Mount, Household Cleaning Tool Organizer for Kitchen,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01G1Y42H0"
  },
  {
    "name": "SNSLXH 5 Pack Stackable Closet Storage Basket, Multifunctional & Foldable Closet Organizer for Bathroom Kitchen Laundry Room Wardrobe Stora...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/718gPdLAncL._AC_UL320_.jpg",
      "alt": "SNSLXH 5 Pack Stackable Closet Storage Basket, Multifunctional & Foldable Closet Organizer for Bathroom Kitchen Laundry Room Wardrobe Stora...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGJJJC4M"
  },
  {
    "name": "SAMMART 42L (11 gallon) Collapsible Plastic Laundry Basket - Foldable Pop Up Storage Container/Organizer - Space Saving Hamper/Basket (1, W...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/514Z9TAWHDL._AC_UL320_.jpg",
      "alt": "SAMMART 42L (11 gallon) Collapsible Plastic Laundry Basket - Foldable Pop Up Storage Container/Organizer - Space Saving Hamper/Basket (1, W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0882ZPRF7"
  },
  {
    "name": "Sakugi Storage Shelves - 5 Tier Shelf Organizer, Heavy Duty Garage Shelving Unit with Leveling Feet, Stable Metal Shelves Organizer for Pan...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71on9WAB0KL._AC_UL320_.jpg",
      "alt": "Sakugi Storage Shelves - 5 Tier Shelf Organizer, Heavy Duty Garage Shelving Unit with Leveling Feet, Stable Metal Shelves Organizer for Pan...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D5CKB5CT"
  },
  {
    "name": "3-Tier Hanging Laundry Basket Organizer：Foldable Wire Shelf Laundry Room Organizer with 360°Rotating Hooks Small Space Solutions Closet Han...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/819X4zg8fIL._AC_UL320_.jpg",
      "alt": "3-Tier Hanging Laundry Basket Organizer：Foldable Wire Shelf Laundry Room Organizer with 360°Rotating Hooks Small Space Solutions Closet Han...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2NKMMLG"
  },
  {
    "name": "OKZEST Utility Slim Storage Cart, 4 Tier Small Rolling Kitchen Laundry Room Cart with Wood Top, Metal Narrow Bathroom Storage Cabinet Mobil...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/8117aMio9OL._AC_UL320_.jpg",
      "alt": "OKZEST Utility Slim Storage Cart, 4 Tier Small Rolling Kitchen Laundry Room Cart with Wood Top, Metal Narrow Bathroom Storage Cabinet Mobil...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D12P57GC"
  },
  {
    "name": "BAKON Over The Door Hanger Folding Clothes Drying Rack, Folding Hanging Coat Rack for Indoor Laundry Room Compact Small Space Foldable Port...",
    "category": "Laundry",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61LaAdx9nVL._AC_UL320_.jpg",
      "alt": "BAKON Over The Door Hanger Folding Clothes Drying Rack, Folding Hanging Coat Rack for Indoor Laundry Room Compact Small Space Foldable Port...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D7B9GLCH"
  },
  {
    "name": "HomeHacks 2 Pack Large Laundry Baskets, Waterproof, Freestanding Laundry Hampers, Collapsible Clothes Hamper with Reinforced Handles in Lau...",
    "category": "Laundry",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81rYQCVHPlL._AC_UL320_.jpg",
      "alt": "HomeHacks 2 Pack Large Laundry Baskets, Waterproof, Freestanding Laundry Hampers, Collapsible Clothes Hamper with Reinforced Handles in Lau...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09KT67BL1"
  },
  {
    "name": "Sakugi Storage Shelves - 3 Tier Shelf Organizer, Sturdy Metal Garage Shelving with Adjustable Leveling Feet, Space-Saving Shelves Organizer...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71QZPKDurRL._AC_UL320_.jpg",
      "alt": "Sakugi Storage Shelves - 3 Tier Shelf Organizer, Sturdy Metal Garage Shelving with Adjustable Leveling Feet, Space-Saving Shelves Organizer...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DFWMKQHQ"
  },
  {
    "name": "4+1 Pack Laundry Room Organization Containers,Clear Laundry Pods Container,Large Laundry Detergent Powder Storage Containers with Wooden Li...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81gVpwik0CL._AC_UL320_.jpg",
      "alt": "4+1 Pack Laundry Room Organization Containers,Clear Laundry Pods Container,Large Laundry Detergent Powder Storage Containers with Wooden Li...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DYJD3M1Q"
  },
  {
    "name": "SPACEKEEPER Slim Rolling Storage Cart, 3 Tier Bathroom Storage Organizer Laundry Room Utility Cart Mobile Shelving Unit, Multi-Purpose for...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71vaxagxXrL._AC_UL320_.jpg",
      "alt": "SPACEKEEPER Slim Rolling Storage Cart, 3 Tier Bathroom Storage Organizer Laundry Room Utility Cart Mobile Shelving Unit, Multi-Purpose for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07QRH2PZS"
  },
  {
    "name": "ClearSpace Clear Plastic Storage Bins – Pantry Organizers & Storage Containers, Cabinet Organizer - Home Organization Must Haves for Kitche...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71b5YosDyVL._AC_UL320_.jpg",
      "alt": "ClearSpace Clear Plastic Storage Bins – Pantry Organizers & Storage Containers, Cabinet Organizer - Home Organization Must Haves for Kitche...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08BQBNXSQ"
  },
  {
    "name": "Glass Laundry Detergent Dispenser, 128 oz / 3.5L Fabric Softener Dispenser for Laundry Room Organization, Detergent Holder with Plastic Spi...",
    "category": "Laundry",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61m3FqXfwEL._AC_UL320_.jpg",
      "alt": "Glass Laundry Detergent Dispenser, 128 oz / 3.5L Fabric Softener Dispenser for Laundry Room Organization, Detergent Holder with Plastic Spi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJ8Q9Y48"
  },
  {
    "name": "Herture Laundry Basket, 3 Section Laundry Hamper with 4 Tiers Shelf, Pull-Out and Removable Laundry Bags, Large 3 x 15.87 Gallons, for Laun...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71yJGONJOHL._AC_UL320_.jpg",
      "alt": "Herture Laundry Basket, 3 Section Laundry Hamper with 4 Tiers Shelf, Pull-Out and Removable Laundry Bags, Large 3 x 15.87 Gallons, for Laun...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZQ1C62X"
  },
  {
    "name": "POLRAI 4 Pack Magnetic Shelves for Washing Machine Magnetic Shelf for Fridge Powerful Magnetic Shelves and Magnetic Hook for Laundry Room K...",
    "category": "Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for laundry shoppers who want better sorting, faster drying, cleaner storage, or fewer mystery piles.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Laundry shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Laundry Lane lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check dimensions, material care, washer and dryer compatibility, and fabric instructions before use.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81kS3Nx4nuL._AC_UL320_.jpg",
      "alt": "POLRAI 4 Pack Magnetic Shelves for Washing Machine Magnetic Shelf for Fridge Powerful Magnetic Shelves and Magnetic Hook for Laundry Room K...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FPC6NJKS"
  }
];

export function getLaundryLaneCatalog(
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
