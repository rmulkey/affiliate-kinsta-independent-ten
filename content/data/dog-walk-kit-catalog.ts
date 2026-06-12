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
    "name": "SOICTA Portable Dog Small Animals Water Bottle for Walking 19 OZ or 12 OZ Pet Water Bottles for Puppy Medium Large Dogs Little Animals Wate...",
    "category": "Dog Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/710hwxeGPaL._AC_UL320_.jpg",
      "alt": "SOICTA Portable Dog Small Animals Water Bottle for Walking 19 OZ or 12 OZ Pet Water Bottles for Puppy Medium Large Dogs Little Animals Wate...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B098KBJNMH"
  },
  {
    "name": "2PCS Dog Poop Bag Holder, Waste Holder for Dispenser Carrier, Hand Free Metal",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61q3Nuw6ExL._AC_UL320_.jpg",
      "alt": "2PCS Dog Poop Bag Holder, Waste Holder for Dispenser Carrier, Hand Free Metal",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B091L9XS88"
  },
  {
    "name": "Earth Rated Poop Bags for Dogs, Guaranteed Leak Proof and Extra Thick Waste Bag Refill Rolls, Lavender Scented, 270 Bags",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71l4DqotI3L._AC_UL320_.jpg",
      "alt": "Earth Rated Poop Bags for Dogs, Guaranteed Leak Proof and Extra Thick Waste Bag Refill Rolls, Lavender Scented, 270 Bags",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00BSYR7K8"
  },
  {
    "name": "Aonkey Collapsible Dog Bowls with Bottle Carrier, 2 Pack Travel Dog Water Bowl Upgraded Carabiner, One-piece Molded Rim No Fall Off or Crac...",
    "category": "Dog Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61jSluAyC5L._AC_UL320_.jpg",
      "alt": "Aonkey Collapsible Dog Bowls with Bottle Carrier, 2 Pack Travel Dog Water Bowl Upgraded Carabiner, One-piece Molded Rim No Fall Off or Crac...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CMXF176P"
  },
  {
    "name": "iYoShop Hands Free Dog Leash with Zipper Pouch, Dual Padded Handles and Durable Bungee for Walking, Jogging and Running Your Dog (Large, 25...",
    "category": "Dog Walking",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81J3PqjxomL._AC_UL320_.jpg",
      "alt": "iYoShop Hands Free Dog Leash with Zipper Pouch, Dual Padded Handles and Durable Bungee for Walking, Jogging and Running Your Dog (Large, 25...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07R56CBWX"
  },
  {
    "name": "ETACCU Hands Free Dog Leash with Phone Pouch, Water Bottle Holder - Adjustable Waist Belt 19-38 Inch Belt Leash for Running, Reflective Sho...",
    "category": "Dog Walking",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71t8CgN1GXL._AC_UL320_.jpg",
      "alt": "ETACCU Hands Free Dog Leash with Phone Pouch, Water Bottle Holder - Adjustable Waist Belt 19-38 Inch Belt Leash for Running, Reflective Sho...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BBF2MJ5H"
  },
  {
    "name": "Dog Bowl Pet Collapsible Bowls, 2 Pack for Cats Dogs, Portable Pet Feeding Watering Dish for Walking Parking Traveling with 2 Carabiners (S...",
    "category": "Dog Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/518kVNOT7gL._AC_UL320_.jpg",
      "alt": "Dog Bowl Pet Collapsible Bowls, 2 Pack for Cats Dogs, Portable Pet Feeding Watering Dish for Walking Parking Traveling with 2 Carabiners (S...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07VT1468W"
  },
  {
    "name": "Cibaabo Dog Water Bottle with Food Container, Travel Puppy Water Bowl, Portable Pet Dispenser, Dog Gift Stuff Accessories Items, Puppy Esse...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71qM6+6m7aL._AC_UL320_.jpg",
      "alt": "Cibaabo Dog Water Bottle with Food Container, Travel Puppy Water Bowl, Portable Pet Dispenser, Dog Gift Stuff Accessories Items, Puppy Esse...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09F5ZYV7M"
  },
  {
    "name": "Gobeigo Dog Poop Bag Holder for Leash, Large Opening for Easy Pull Out, Doggy Poo Bag Dispenser with Used Waste Bag Carrier Suitable for An...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Ol06-SKCL._AC_UL320_.jpg",
      "alt": "Gobeigo Dog Poop Bag Holder for Leash, Large Opening for Easy Pull Out, Doggy Poo Bag Dispenser with Used Waste Bag Carrier Suitable for An...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D1BXQKS5"
  },
  {
    "name": "Dog Poop Bag Holder for Walking with Waste Bag Dispenser, Reusable Smell Proof, Pet Poop Pouch with Magnetic Closure,Portable Dog Accessori...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AbOFeB4XL._AC_UL320_.jpg",
      "alt": "Dog Poop Bag Holder for Walking with Waste Bag Dispenser, Reusable Smell Proof, Pet Poop Pouch with Magnetic Closure,Portable Dog Accessori...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CH89DC46"
  },
  {
    "name": "Dog Collar Light, 4 Modes Dog Lights for Night Walking, Rechargeable LED Pet Collar Light for Nighttime Clip on, IP68 Waterproof Pet Walkin...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71HxnWVgyhL._AC_UL320_.jpg",
      "alt": "Dog Collar Light, 4 Modes Dog Lights for Night Walking, Rechargeable LED Pet Collar Light for Nighttime Clip on, IP68 Waterproof Pet Walkin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C64RJDTH"
  },
  {
    "name": "Earth Rated Dog Poop Bag Holder, Durable and Guaranteed Leakproof, Unscented, Dispenser with Starter Roll",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LU1a0g37L._AC_UL320_.jpg",
      "alt": "Earth Rated Dog Poop Bag Holder, Durable and Guaranteed Leakproof, Unscented, Dispenser with Starter Roll",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08VN2W5NC"
  },
  {
    "name": "Fida Retractable Dog Leash, 16 ft Dog Walking Leash for Small Dogs up to 26 lbs, 360° Tangle Free, Black",
    "category": "Dog Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61hCdJf89wL._AC_UL320_.jpg",
      "alt": "Fida Retractable Dog Leash, 16 ft Dog Walking Leash for Small Dogs up to 26 lbs, 360° Tangle Free, Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07M98NH5L"
  },
  {
    "name": "VETRESKA Dog Poop Bag Dispenser with Cherry Blossom Scented Poop Bags, Leak Proof and Extra Thick Pet Waste Bags, 1 Poop Bag Holder and 105...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71QMDhsM7lL._AC_UL320_.jpg",
      "alt": "VETRESKA Dog Poop Bag Dispenser with Cherry Blossom Scented Poop Bags, Leak Proof and Extra Thick Pet Waste Bags, 1 Poop Bag Holder and 105...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BVMHM3MW"
  },
  {
    "name": "Best Pet Supplies Dog Poop Bags for Waste Refuse Cleanup, Doggy Roll Replacements for Outdoor Puppy Walking and Travel, Leak Proof and Tear...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71oglFyNY0L._AC_UL320_.jpg",
      "alt": "Best Pet Supplies Dog Poop Bags for Waste Refuse Cleanup, Doggy Roll Replacements for Outdoor Puppy Walking and Travel, Leak Proof and Tear...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07DHVDPY7"
  },
  {
    "name": "heouvo Dog Treat Pouch with Training Clicker, Upgrade Stronger Magnetic Closure to Avoid Spilling, 1.67 Cup Silicone Treat Bag Fanny Pack w...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61d4X2LfDhL._AC_UL320_.jpg",
      "alt": "heouvo Dog Treat Pouch with Training Clicker, Upgrade Stronger Magnetic Closure to Avoid Spilling, 1.67 Cup Silicone Treat Bag Fanny Pack w...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQQF67P1"
  },
  {
    "name": "Wet Ones for Pets Antibacterial Dog Paw Cleaner with Built-in Scrubber Brush, Tropical Splash Scent - Foaming Cleanser for Dog Paws - Paw W...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61awUfcY2DL._AC_UL320_.jpg",
      "alt": "Wet Ones for Pets Antibacterial Dog Paw Cleaner with Built-in Scrubber Brush, Tropical Splash Scent - Foaming Cleanser for Dog Paws - Paw W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CT623C62"
  },
  {
    "name": "Clip on Flashlight, Running Lights for Runners Dog Light for Dog Walking at Night Rechargeable Safety Portable EDC Flashlight Gift for Runn...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61WW-WRunhL._AC_UL320_.jpg",
      "alt": "Clip on Flashlight, Running Lights for Runners Dog Light for Dog Walking at Night Rechargeable Safety Portable EDC Flashlight Gift for Runn...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BJPX358D"
  },
  {
    "name": "Ylzzrs Reflective Sash Gear for Walking at Night,LED Reflective Belt Safety Lights,Lights for Night Dog Walking,High Visibility Type-C Rech...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71bgtRxdFDL._AC_UL320_.jpg",
      "alt": "Ylzzrs Reflective Sash Gear for Walking at Night,LED Reflective Belt Safety Lights,Lights for Night Dog Walking,High Visibility Type-C Rech...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DC3YY5N4"
  },
  {
    "name": "Dexas MudBuster Medium Dog Paw Cleaner, Blue, Fits 1.5\"-2.5\" Wide Paws, Gentle Silicone Bristles for Quick, Easy Cleaning",
    "category": "Dog Walking",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713JmR3jeIL._AC_UL320_.jpg",
      "alt": "Dexas MudBuster Medium Dog Paw Cleaner, Blue, Fits 1.5\"-2.5\" Wide Paws, Gentle Silicone Bristles for Quick, Easy Cleaning",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01N64DCPR"
  },
  {
    "name": "Amazon Basics Dog Poop Leak Proof Bags with Dispenser and Leash Clip, Unscented, 13\" x 9\" Large Size, 300 Count",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71RhBxKwOWL._AC_UL320_.jpg",
      "alt": "Amazon Basics Dog Poop Leak Proof Bags with Dispenser and Leash Clip, Unscented, 13\" x 9\" Large Size, 300 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00NABTC8M"
  },
  {
    "name": "rabbitgoo Dog Harness No Pull with 2 Leash Clips, Adjustable Soft Padded, Reflective Oxford No Choke Pet Vest with Easy Control Handle for...",
    "category": "Tools",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71eROBTwkVL._AC_UL320_.jpg",
      "alt": "rabbitgoo Dog Harness No Pull with 2 Leash Clips, Adjustable Soft Padded, Reflective Oxford No Choke Pet Vest with Easy Control Handle for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01M8JT6FT"
  },
  {
    "name": "Gobeigo 2-Pack Silicone Used Poop Bag Holder - Hands-Free Leash Attachment, Never Hold a Stinky Bag Again! Secure Carrier for Dog Walking,...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AzJFT1GWL._AC_UL320_.jpg",
      "alt": "Gobeigo 2-Pack Silicone Used Poop Bag Holder - Hands-Free Leash Attachment, Never Hold a Stinky Bag Again! Secure Carrier for Dog Walking,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FL7NG9B3"
  },
  {
    "name": "Dog Training Clicker with Sring Wrist and Keyring - Pet Dog Training Clickers for Puppy, Cat, Potty, Bird, Horse, Pet, Trainer Training Too...",
    "category": "Dog Walking",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71iSurE7U5L._AC_UL320_.jpg",
      "alt": "Dog Training Clicker with Sring Wrist and Keyring - Pet Dog Training Clickers for Puppy, Cat, Potty, Bird, Horse, Pet, Trainer Training Too...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07F6FTTM7"
  },
  {
    "name": "Tuff Pupper Heavy Duty Hands Free Dog Leash | One Large Dog Up to 125 lbs | Comfortable Shock Absorbing Bungee | Reflective Padded Handles...",
    "category": "Dog Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Sva2Ad3yL._AC_UL320_.jpg",
      "alt": "Tuff Pupper Heavy Duty Hands Free Dog Leash | One Large Dog Up to 125 lbs | Comfortable Shock Absorbing Bungee | Reflective Padded Handles...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09Z7FRN8L"
  },
  {
    "name": "PawSono Lick-Safe Dog Paw & Nose Balm with Coconut Oil | All-Natural Moisturizer & Soother for Dry, Cracked Pads & Snout | Heat & Cold Pave...",
    "category": "Dog Walking",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61W+yeJIddL._AC_UL320_.jpg",
      "alt": "PawSono Lick-Safe Dog Paw & Nose Balm with Coconut Oil | All-Natural Moisturizer & Soother for Dry, Cracked Pads & Snout | Heat & Cold Pave...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FQC2RMBL"
  },
  {
    "name": "Heavy Duty Dog Leash - 2 Handles by Padded Traffic Handle for Extra Control, 6foot Long - Perfect for Medium to Large Dogs (6 ft, Black)",
    "category": "Dog Walking",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71vaJmfTjuL._AC_UL320_.jpg",
      "alt": "Heavy Duty Dog Leash - 2 Handles by Padded Traffic Handle for Extra Control, 6foot Long - Perfect for Medium to Large Dogs (6 ft, Black)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08DCCGNZN"
  },
  {
    "name": "PetSafe Gentle Leader No-Pull Dog Headcollar - The Ultimate Solution to Pulling - Redirects Your Dog&#x27;s Pulling for Easier Walks - Help...",
    "category": "Dog Walking",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for dog walking shoppers who want cleaner walks, safer visibility, easier treat access, or less bag-and-leash juggling.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Dog Walking shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Dog Walk Kit lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Match harnesses, collars, and leashes to your dog's size, temperament, training needs, and local leash rules.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71bgnMwoOwL._AC_UL320_.jpg",
      "alt": "PetSafe Gentle Leader No-Pull Dog Headcollar - The Ultimate Solution to Pulling - Redirects Your Dog&#x27;s Pulling for Easier Walks - Help...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00074L4RW"
  }
];

export function getDogWalkKitCatalog(
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
