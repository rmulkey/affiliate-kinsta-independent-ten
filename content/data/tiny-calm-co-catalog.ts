import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type WaveTwoSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const seeds: WaveTwoSeed[] = [
  {
    name: "Ubbi Steel Diaper Pail, White",
    category: "Diapering",
    priceHint: "$$$ Premium",
    description: "A cleaner-looking diaper pail for parents who want the changing corner to feel more like a room and less like a utility closet.",
    highlights: ["Grab-and-go setup","Parent-friendly","Easy restock cue"],
    bestFor: "A tidy nursery changing station",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/ubbi-steel-diaper-pail.jpg",
      alt: "Ubbi Steel Diaper Pail, White",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00821FLT4"
  },
  {
    name: "Munchkin Arm & Hammer Diaper Pail Snap, Seal & Toss Refill Bags, 20 Pack",
    category: "Diapering",
    priceHint: "$ Budget-friendly",
    description: "The unglamorous refill that keeps the diaper setup moving when the laundry basket, wipes, and pajamas are already doing too much.",
    highlights: ["Grab-and-go setup","Parent-friendly","Easy restock cue"],
    bestFor: "Keeping diaper-pail refills stocked",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/munchkin-diaper-pail-refill-bags.jpg",
      alt: "Munchkin Arm & Hammer Diaper Pail Snap, Seal & Toss Refill Bags, 20 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B009R27JVU"
  },
  {
    name: "Ubbi Disposable Diaper Sacks, 200 Count",
    category: "Diapering",
    priceHint: "$ Budget-friendly",
    description: "Good for diaper bags, car trips, stroller baskets, and those moments when a proper trash can is nowhere close.",
    highlights: ["Grab-and-go setup","Parent-friendly","Easy restock cue"],
    bestFor: "Out-of-home diaper changes",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/ubbi-disposable-diaper-sacks.jpg",
      alt: "Ubbi Disposable Diaper Sacks, 200 Count",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07K2TKK26"
  },
  {
    name: "HUGGIES Natural Care Sensitive Baby Wipes, 12 Flip-Top Packs",
    category: "Diapering",
    priceHint: "$$ Mid-range",
    description: "A bulk wipe pick for changing tables, diaper bags, cars, and every room where someone eventually says, 'Where are the wipes?'",
    highlights: ["Grab-and-go setup","Parent-friendly","Easy restock cue"],
    bestFor: "Stocking multiple wipe stations",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/huggies-natural-care-sensitive-wipes.jpg",
      alt: "HUGGIES Natural Care Sensitive Baby Wipes, 12 Flip-Top Packs",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07SCL613T"
  },
  {
    name: "Desitin Maximum Strength Baby Diaper Rash Cream, 4.8 oz",
    category: "Diapering",
    priceHint: "$ Budget-friendly",
    description: "A familiar diaper-bag staple to keep near the changing pad, backup pouch, or grandparent bag.",
    highlights: ["Grab-and-go setup","Parent-friendly","Easy restock cue"],
    bestFor: "Diaper-change basics",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/desitin-maximum-strength-diaper-cream.jpg",
      alt: "Desitin Maximum Strength Baby Diaper Rash Cream, 4.8 oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00ZQXT4EY"
  },
  {
    name: "Kopi Baby Portable Diaper Changing Pad",
    category: "Travel",
    priceHint: "$$ Mid-range",
    description: "A grab-and-go changing mat for quick errands, restaurant bathrooms, airport days, and the back seat emergency change.",
    highlights: ["Portable","Car/stroller friendly","Setup saver"],
    bestFor: "Compact travel changing",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/kopi-baby-portable-changing-pad.jpg",
      alt: "Kopi Baby Portable Diaper Changing Pad",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07RX5BD32"
  },
  {
    name: "Peekapoo Disposable Baby Changing Pad Liners, 50 Pack",
    category: "Diapering",
    priceHint: "$$ Mid-range",
    description: "Helpful for public bathrooms, hotel rooms, and any changing-pad moment where cleanup needs to be fast.",
    highlights: ["Grab-and-go setup","Parent-friendly","Easy restock cue"],
    bestFor: "Mess-minimizing changes on the move",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/peekapoo-disposable-changing-pad-liners.jpg",
      alt: "Peekapoo Disposable Baby Changing Pad Liners, 50 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07NV7RX7H"
  },
  {
    name: "Mr. Pen Baby Diaper Caddy Organizer",
    category: "Nursery Organization",
    priceHint: "$ Budget-friendly",
    description: "A simple way to keep diapers, wipes, creams, burp cloths, and tiny odds-and-ends in one movable basket.",
    highlights: ["Clear zones","Small-space friendly","Easy to move"],
    bestFor: "Room-to-room baby basics",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/mr-pen-baby-diaper-caddy.jpg",
      alt: "Mr. Pen Baby Diaper Caddy Organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B5WF7S9F"
  },
  {
    name: "Momcozy Portable Bottle Warmer for Travel",
    category: "Feeding",
    priceHint: "$$$ Premium",
    description: "A travel-friendly warmer for families who are often in the car, at activities, or away from a full kitchen setup.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Bottle warming away from home",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/momcozy-portable-bottle-warmer.jpg",
      alt: "Momcozy Portable Bottle Warmer for Travel",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DKHCWJ5G"
  },
  {
    name: "Grownsy 8-in-1 Fast Baby Bottle Warmer",
    category: "Feeding",
    priceHint: "$$ Mid-range",
    description: "A countertop pick for bottle-heavy seasons when one small station can make the kitchen feel less chaotic.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Daily bottle routines",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/grownsy-8-in-1-bottle-warmer.jpg",
      alt: "Grownsy 8-in-1 Fast Baby Bottle Warmer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07YJKWTYW"
  },
  {
    name: "Philips Avent Premium Fast Bottle Warmer, Model SCF358",
    category: "Feeding",
    priceHint: "$$ Mid-range",
    description: "A polished bottle-warmer option for parents who want fewer buttons and a smaller countertop footprint.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "A streamlined feeding station",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/philips-avent-premium-fast-bottle-warmer.jpg",
      alt: "Philips Avent Premium Fast Bottle Warmer, Model SCF358",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0876T9DQZ"
  },
  {
    name: "Dr. Brown's All-in-One Sterilizer and Dryer",
    category: "Feeding",
    priceHint: "$$$ Premium",
    description: "A bigger station piece for families managing bottles, pump parts, and small feeding pieces every day.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Batching bottle cleanup",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/dr-browns-sterilizer-and-dryer.jpg",
      alt: "Dr. Brown's All-in-One Sterilizer and Dryer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B089QWNQXC"
  },
  {
    name: "Dr. Brown's Drying Tower",
    category: "Feeding",
    priceHint: "$ Budget-friendly",
    description: "A vertical drying rack for families trying to keep bottle parts from taking over the whole counter.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Small-counter bottle drying",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/dr-browns-drying-tower.jpg",
      alt: "Dr. Brown's Drying Tower",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CMRV5CPZ"
  },
  {
    name: "OXO Tot Space Saving Drying Rack",
    category: "Feeding",
    priceHint: "$ Budget-friendly",
    description: "A neat little rack for bottles, pump pieces, pacifiers, and the tiny parts that always seem to vanish.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Compact feeding cleanup",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/oxo-tot-space-saving-drying-rack.jpg",
      alt: "OXO Tot Space Saving Drying Rack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B079K783F9"
  },
  {
    name: "Dr. Brown's Natural Flow Anti-Colic Options+ Narrow Baby Bottles, 8 oz, 4 Pack",
    category: "Feeding",
    priceHint: "$ Budget-friendly",
    description: "A common bottle-pack pick when parents need extras for daycare, night feeds, or backup dish cycles.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Bottle rotation basics",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/dr-browns-options-baby-bottles.jpg",
      alt: "Dr. Brown's Natural Flow Anti-Colic Options+ Narrow Baby Bottles, 8 oz, 4 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01845QH7M"
  },
  {
    name: "Ingenuity Baby Base 2-in-1 Booster Feeding and Floor Seat, Slate",
    category: "Feeding",
    priceHint: "$$ Mid-range",
    description: "A compact booster-style seat for kitchens that do not have room for another giant baby gear footprint.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Small-space feeding",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/ingenuity-baby-base-booster-seat.jpg",
      alt: "Ingenuity Baby Base 2-in-1 Booster Feeding and Floor Seat, Slate",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07NDD9SF9"
  },
  {
    name: "Hiccapop OmniBoost Travel Booster Seat with Tray",
    category: "Travel",
    priceHint: "$$ Mid-range",
    description: "A packable booster for backyard dinners, grandparents' houses, camping weekends, and meals away from home.",
    highlights: ["Portable","Car/stroller friendly","Setup saver"],
    bestFor: "Portable toddler meals",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/hiccapop-omniboost-travel-booster.jpg",
      alt: "Hiccapop OmniBoost Travel Booster Seat with Tray",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B078K1W9B3"
  },
  {
    name: "PandaEar Silicone Baby Bibs, Set of 3",
    category: "Feeding",
    priceHint: "$ Budget-friendly",
    description: "A simple mealtime cleanup helper when yogurt, berries, and tiny pasta all decide to become art supplies.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Messy meals",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/pandaear-silicone-baby-bibs.jpg",
      alt: "PandaEar Silicone Baby Bibs, Set of 3",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08GFCX964"
  },
  {
    name: "Muslin Burp Cloths, 12 Pack",
    category: "Feeding",
    priceHint: "$ Budget-friendly",
    description: "The kind of everyday cloth stack that ends up on shoulders, couches, car seats, diaper bags, and somehow the kitchen counter.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "High-rotation cleanup cloths",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/muslin-burp-cloths-12-pack.jpg",
      alt: "Muslin Burp Cloths, 12 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CBCC4HWK"
  },
  {
    name: "Munchkin Miracle 360 Toddler Sippy Cups with Handles, 7 oz, 2 Pack",
    category: "Toddler Helpers",
    priceHint: "$ Budget-friendly",
    description: "A toddler cup pick for snack tables, stroller baskets, and that phase where every drink needs handles.",
    highlights: ["Toddler routine","Simple helper","Everyday use"],
    bestFor: "Everyday toddler drinks",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/munchkin-miracle-360-sippy-cups.jpg",
      alt: "Munchkin Miracle 360 Toddler Sippy Cups with Handles, 7 oz, 2 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00MRZIFD0"
  },
  {
    name: "Eascrozn Toddler Divided Silicone Suction Plates, 3 Pack",
    category: "Feeding",
    priceHint: "$ Budget-friendly",
    description: "A color-coded plate set for tiny portions, divided snacks, and fewer loose dishes in the cabinet.",
    highlights: ["Mealtime helper","Easy cleanup","Parent-tested category"],
    bestFor: "Toddler meals and snacks",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/eascrozn-silicone-suction-plates.jpg",
      alt: "Eascrozn Toddler Divided Silicone Suction Plates, 3 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BWDYTFZM"
  },
  {
    name: "Toddler Utensils with Silicone Handles, 6 Pack",
    category: "Toddler Helpers",
    priceHint: "$ Budget-friendly",
    description: "A small utensil set for the stage where kids want to do it themselves, but the adult forks still feel enormous.",
    highlights: ["Toddler routine","Simple helper","Everyday use"],
    bestFor: "Toddler self-feeding practice",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/toddler-utensils-silicone-handle-set.jpg",
      alt: "Toddler Utensils with Silicone Handles, 6 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CDTDP4N2"
  },
  {
    name: "Frida Baby 4-in-1 Grow-with-Me Baby Bathtub",
    category: "Bath",
    priceHint: "$$ Mid-range",
    description: "A bath setup for parents who want one tub that can carry more than a single tiny phase.",
    highlights: ["Bath-time support","Storage-minded","Adult comfort helper"],
    bestFor: "A longer-use baby bath setup",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/frida-baby-grow-with-me-bathtub.jpg",
      alt: "Frida Baby 4-in-1 Grow-with-Me Baby Bathtub",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B099FM4W4H"
  },
  {
    name: "Angelcare Baby Bath Support, Aqua",
    category: "Bath",
    priceHint: "$ Budget-friendly",
    description: "A lightweight bath-support option for parents who want a simple piece that dries quickly and stores easily.",
    highlights: ["Bath-time support","Storage-minded","Adult comfort helper"],
    bestFor: "Simple infant bath support",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/angelcare-baby-bath-support-aqua.jpg",
      alt: "Angelcare Baby Bath Support, Aqua",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B008VWVS14"
  },
  {
    name: "Munchkin Super Scoop Hanging Bath Toy Storage, Grey",
    category: "Bath",
    priceHint: "$ Budget-friendly",
    description: "A wall-hanging bath toy scoop so the tub floor does not become a tiny floating parking lot.",
    highlights: ["Bath-time support","Storage-minded","Adult comfort helper"],
    bestFor: "Bath toy cleanup",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/munchkin-super-scoop-bath-toy-storage.jpg",
      alt: "Munchkin Super Scoop Hanging Bath Toy Storage, Grey",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07W6LVCJH"
  },
  {
    name: "Munchkin Fishin' Magnetic Baby and Toddler Bath Toy, 4 Piece Set",
    category: "Bath",
    priceHint: "$ Budget-friendly",
    description: "A cute bath toy for turning the tub into a little game without buying a giant pile of plastic creatures.",
    highlights: ["Bath-time support","Storage-minded","Adult comfort helper"],
    bestFor: "Simple bath play",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/munchkin-fishin-bath-toy.jpg",
      alt: "Munchkin Fishin' Magnetic Baby and Toddler Bath Toy, 4 Piece Set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01N52DUNK"
  },
  {
    name: "Yoofoss Hooded Baby Towels, 2 Pack",
    category: "Bath",
    priceHint: "$ Budget-friendly",
    description: "A soft towel rotation for bath nights, pool bags, and the surprise second bath after dinner gets creative.",
    highlights: ["Bath-time support","Storage-minded","Adult comfort helper"],
    bestFor: "Bath-night towel backups",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/yoofoss-hooded-baby-towels.jpg",
      alt: "Yoofoss Hooded Baby Towels, 2 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BTHQCNMK"
  },
  {
    name: "Baby Washcloths, 6 Pack",
    category: "Bath",
    priceHint: "$ Budget-friendly",
    description: "Small cloths that make sense everywhere: bath time, face wipes, sink cleanup, and backup diaper-bag duty.",
    highlights: ["Bath-time support","Storage-minded","Adult comfort helper"],
    bestFor: "Everyday small cleanups",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/baby-washcloths-6-pack.jpg",
      alt: "Baby Washcloths, 6 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B079DJHG97"
  },
  {
    name: "Momcozy Universal Stroller Organizer with Insulated Cup Holder",
    category: "Travel",
    priceHint: "$$ Mid-range",
    description: "A stroller add-on for the real stuff: phone, keys, wipes, snacks, water, and the tiny toy that must not be lost.",
    highlights: ["Portable","Car/stroller friendly","Setup saver"],
    bestFor: "Stroller errand organization",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/momcozy-universal-stroller-organizer.jpg",
      alt: "Momcozy Universal Stroller Organizer with Insulated Cup Holder",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07JMZYJVW"
  },
  {
    name: "Guiseapue Stroller Cup Holder with Phone Holder",
    category: "Travel",
    priceHint: "$ Budget-friendly",
    description: "A small stroller upgrade for coffee walks, playground mornings, and keeping your phone out of the bottom basket abyss.",
    highlights: ["Portable","Car/stroller friendly","Setup saver"],
    bestFor: "Walks and quick outings",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/guiseapue-stroller-cup-holder.jpg",
      alt: "Guiseapue Stroller Cup Holder with Phone Holder",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B094N4HRLX"
  },
  {
    name: "Frida Baby Fold-and-Go Portable Potty Seat",
    category: "Toddler Helpers",
    priceHint: "$ Budget-friendly",
    description: "A foldable potty-seat pick for restaurant stops, daycare bags, road trips, and the 'we just left the house' bathroom moment.",
    highlights: ["Toddler routine","Simple helper","Everyday use"],
    bestFor: "Potty training outside the house",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/frida-baby-fold-and-go-potty-seat.jpg",
      alt: "Frida Baby Fold-and-Go Portable Potty Seat",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CFYVKNQN"
  },
  {
    name: "Ingenuity My Size Potty Pro 2-in-1 Potty Training Toilet",
    category: "Toddler Helpers",
    priceHint: "$$ Mid-range",
    description: "A mini toilet-style option for families who want a dedicated potty spot during the transition stage.",
    highlights: ["Toddler routine","Simple helper","Everyday use"],
    bestFor: "At-home potty routines",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/ingenuity-my-size-potty-pro.jpg",
      alt: "Ingenuity My Size Potty Pro 2-in-1 Potty Training Toilet",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BZ2PFVSN"
  },
  {
    name: "Dreambaby Step Stool for Kids",
    category: "Toddler Helpers",
    priceHint: "$ Budget-friendly",
    description: "A lightweight stool for bathroom sinks, potty routines, and the daily hand-washing marathon.",
    highlights: ["Toddler routine","Simple helper","Everyday use"],
    bestFor: "Bathroom independence moments",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/dreambaby-step-stool-for-kids.jpg",
      alt: "Dreambaby Step Stool for Kids",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B016P2STRW"
  },
  {
    name: "SKYROKU Potty Training Seat with Step Stool",
    category: "Toddler Helpers",
    priceHint: "$$ Mid-range",
    description: "A combined potty-seat-and-step setup for households that prefer using the regular toilet earlier.",
    highlights: ["Toddler routine","Simple helper","Everyday use"],
    bestFor: "Toilet-based potty training",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/skyroku-potty-training-seat-step-stool.jpg",
      alt: "SKYROKU Potty Training Seat with Step Stool",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CQZS53HL"
  },
  {
    name: "Vtopmart Stackable Storage Drawers Set of 5",
    category: "Nursery Organization",
    priceHint: "$$ Mid-range",
    description: "Clear drawers for bottle parts, pacifiers, medicine-cabinet extras, hair bows, tiny socks, or whatever is currently everywhere.",
    highlights: ["Clear zones","Small-space friendly","Easy to move"],
    bestFor: "Visible nursery storage",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/vtopmart-stackable-storage-drawers.jpg",
      alt: "Vtopmart Stackable Storage Drawers Set of 5",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CXLK9PJ9"
  },
  {
    name: "Stuffed Animal Storage Hammock or Net Corner",
    category: "Nursery Organization",
    priceHint: "$ Budget-friendly",
    description: "A fast way to get plush toys off the floor while still keeping the room playful and easy to reset.",
    highlights: ["Clear zones","Small-space friendly","Easy to move"],
    bestFor: "Toy overflow control",
    whyPicked: "This made the cut because it supports a practical parent routine without making safety, health, sleep, or development promises.",
    trustNote: "Verified from a real Amazon product page with a local product image; review age, fit, materials, and safety guidance on the listing before buying.",
    image: {
      src: "/images/tiny-calm-co/stuffed-animal-storage-hammock.jpg",
      alt: "Stuffed Animal Storage Hammock or Net Corner",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BXY61MQT"
  }
];

export function getTinyCalmCoCatalog(affiliateTag: string): ProductCardContent[] {
  return seeds.map(({ amazonUrl, ...product }) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}
