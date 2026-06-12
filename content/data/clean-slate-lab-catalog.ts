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
    "name": "TUYU Electric Spin Scrubber, Full-Body IPX7 Waterproof Bathroom Scrubber with Power LCD Display, Adjustable Extension Handle, Cordless Show...",
    "category": "Cleaning",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71GhDHqOwNL._AC_UL320_.jpg",
      "alt": "TUYU Electric Spin Scrubber, Full-Body IPX7 Waterproof Bathroom Scrubber with Power LCD Display, Adjustable Extension Handle, Cordless Show...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C1NJDTTX"
  },
  {
    "name": "Angry Mama Microwave Oven Steam Cleaner, Angry Mom Microwave Cleaner, Just Add Vinegar and Water, Cut Cleaning Time by Half (Green)",
    "category": "Cleaning",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51cnApQwKzL._AC_UL320_.jpg",
      "alt": "Angry Mama Microwave Oven Steam Cleaner, Angry Mom Microwave Cleaner, Just Add Vinegar and Water, Cut Cleaning Time by Half (Green)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08SBTP9DQ"
  },
  {
    "name": "Bomves Electric Spin Scrubber, Cordless Cleaning Brush Scrubber for Home, 8 Replaceable Brush Heads-90Mins Work Time, 3 Adjustable Size, 2...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71vWgtgWNWL._AC_UL320_.jpg",
      "alt": "Bomves Electric Spin Scrubber, Cordless Cleaning Brush Scrubber for Home, 8 Replaceable Brush Heads-90Mins Work Time, 3 Adjustable Size, 2...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B7RSV894"
  },
  {
    "name": "The Pink Stuff - Stardrops - The Miracle Scrubber Kit - 4 Cleaning Brush Heads",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71PSnf71WfL._AC_UL320_.jpg",
      "alt": "The Pink Stuff - Stardrops - The Miracle Scrubber Kit - 4 Cleaning Brush Heads",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CP4FGSW8"
  },
  {
    "name": "Holikme Dryer Vent Cleaner Kit Dryer Lint Vacuum Attachment Brush, Lint Remover, Dryer Vent Vacuum Hose Replacement Parts,Duct Cleaning,Blue",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71yT-KSxZrL._AC_UL320_.jpg",
      "alt": "Holikme Dryer Vent Cleaner Kit Dryer Lint Vacuum Attachment Brush, Lint Remover, Dryer Vent Vacuum Hose Replacement Parts,Duct Cleaning,Blue",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08SBQBF2R"
  },
  {
    "name": "15pcs Crevice Cleaning Brush, Hard Bristle Scrub Brushes Tools, Multifunctional Grout Brush for Home, Bathroom, Ktichen, Window and Corners",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71dX2YBvtAL._AC_UL320_.jpg",
      "alt": "15pcs Crevice Cleaning Brush, Hard Bristle Scrub Brushes Tools, Multifunctional Grout Brush for Home, Bathroom, Ktichen, Window and Corners",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FF4515N3"
  },
  {
    "name": "WOLFBOX MegaFlow 50 Compressed Air Duster-110000RPM Super Power Electric Air Duster, 3-Gear Adjustable Mini Blower with Fast Charging, Dust...",
    "category": "Cleaning",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713BEhBxXWL._AC_UL320_.jpg",
      "alt": "WOLFBOX MegaFlow 50 Compressed Air Duster-110000RPM Super Power Electric Air Duster, 3-Gear Adjustable Mini Blower with Fast Charging, Dust...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSW7R4VN"
  },
  {
    "name": "DEKEones Razor Blade Scraper, Double Edged Razorblade Scraping Tool with 10 Pcs Razor Blades, Paint Scraper for Glass, Decals, Tint, Sticke...",
    "category": "Cleaning",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61d4ZNpfmWL._AC_UL320_.jpg",
      "alt": "DEKEones Razor Blade Scraper, Double Edged Razorblade Scraping Tool with 10 Pcs Razor Blades, Paint Scraper for Glass, Decals, Tint, Sticke...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGDJM4R7"
  },
  {
    "name": "SXhyf Crevice Cleaning Brush - Grout Scrub Brush, House Cleaning Supplies, Gap Cleaning Tools, Home Essentials, Gifts for Women Men, Hard B...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61tAm5NlTuL._AC_UL320_.jpg",
      "alt": "SXhyf Crevice Cleaning Brush - Grout Scrub Brush, House Cleaning Supplies, Gap Cleaning Tools, Home Essentials, Gifts for Women Men, Hard B...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CN3185T8"
  },
  {
    "name": "Mr. Clean Magic Eraser Shower & Tub Scrubber, Bathroom Cleaner, All in One Bathroom Cleaner, Lemon Starter Kit, 1 Scrubber & 2 Foaming Magi...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81NzWv7YWsL._AC_UL320_.jpg",
      "alt": "Mr. Clean Magic Eraser Shower & Tub Scrubber, Bathroom Cleaner, All in One Bathroom Cleaner, Lemon Starter Kit, 1 Scrubber & 2 Foaming Magi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FX5KH3FZ"
  },
  {
    "name": "Unoutur Reusable Dry Sweeping Cloths Microfiber Wet Mop Pads Compatible with Swiffer Sweeper Mop Replacement Sweeping Mopping pad Refills f...",
    "category": "Cleaning",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81KADKhfJuL._AC_UL320_.jpg",
      "alt": "Unoutur Reusable Dry Sweeping Cloths Microfiber Wet Mop Pads Compatible with Swiffer Sweeper Mop Replacement Sweeping Mopping pad Refills f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CLV7VNCG"
  },
  {
    "name": "HOMEXCEL Microfiber Cleaning Cloth 210GSM, Pack of 12, Size:11.5\" x 11.5\", Ultra-Soft, High-Density Non-Abrasive Cleaning Towels for Cars,...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/813-YxuWrrL._AC_UL320_.jpg",
      "alt": "HOMEXCEL Microfiber Cleaning Cloth 210GSM, Pack of 12, Size:11.5\" x 11.5\", Ultra-Soft, High-Density Non-Abrasive Cleaning Towels for Cars,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B098D79MQB"
  },
  {
    "name": "PUFTEM Electric Spin Scrubber, Cordless Shower Scrubber with Battery Level Display, 2 Speeds Electric Scrubber for Cleaning with 6 Replacea...",
    "category": "Cleaning",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71cuILNOyLL._AC_UL320_.jpg",
      "alt": "PUFTEM Electric Spin Scrubber, Cordless Shower Scrubber with Battery Level Display, 2 Speeds Electric Scrubber for Cleaning with 6 Replacea...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4YZY511"
  },
  {
    "name": "Rubbermaid Reveal Power Scrubber 18-Piece Kit, Cordless Electric Battery Powered Scrub Brush, Water Resistant, for Home/Kitchen/Bathroom/Gr...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61N4Gq3h6iL._AC_UL320_.jpg",
      "alt": "Rubbermaid Reveal Power Scrubber 18-Piece Kit, Cordless Electric Battery Powered Scrub Brush, Water Resistant, for Home/Kitchen/Bathroom/Gr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08D6T4DKS"
  },
  {
    "name": "Dfacio 11Pcs Crevice Cleaning Brush Set, Hard Bristle Cleaning Supplies for Kitchen, Bathroom, Corner, Grout, Sink",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71atmzdEk-L._AC_UL320_.jpg",
      "alt": "Dfacio 11Pcs Crevice Cleaning Brush Set, Hard Bristle Cleaning Supplies for Kitchen, Bathroom, Corner, Grout, Sink",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D41JFYRR"
  },
  {
    "name": "Genuine Fred DRAGON&#x27;S BREATH Microwave Steam Cleaner, BPA-Free Silicone Dragon Design, Easy to Use, Reduces Cleaning Time, Dishwasher...",
    "category": "Cleaning",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61nMMfAGqLL._AC_UL320_.jpg",
      "alt": "Genuine Fred DRAGON&#x27;S BREATH Microwave Steam Cleaner, BPA-Free Silicone Dragon Design, Easy to Use, Reduces Cleaning Time, Dishwasher...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DB2GTQMZ"
  },
  {
    "name": "PetOde 2 Pieces Dryer Vent Cleaner Kit Compatible with Most Vacuum Cleaner, Dryer Lint Brush and Vacuum Hose Attachment with Universal Conn...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71IY72tUuJL._AC_UL320_.jpg",
      "alt": "PetOde 2 Pieces Dryer Vent Cleaner Kit Compatible with Most Vacuum Cleaner, Dryer Lint Brush and Vacuum Hose Attachment with Universal Conn...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CQY6MPNG"
  },
  {
    "name": "Pan Scraper, 5 Pcs Pot Scraper Plastic, Pot Scraper Non Scratch for Cast Iron, Pot and Pan Cleaning, Sturdy Scraper Kitchen Tool",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Cth0yprDL._AC_UL320_.jpg",
      "alt": "Pan Scraper, 5 Pcs Pot Scraper Plastic, Pot Scraper Non Scratch for Cast Iron, Pot and Pan Cleaning, Sturdy Scraper Kitchen Tool",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BM4PXS46"
  },
  {
    "name": "Clorox ToiletWand Toilet Cleaning Kit, ToiletWand, Caddy and 6 Refills, Pack of 6 (Pack May Vary)",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/717u8XrePOL._AC_UL320_.jpg",
      "alt": "Clorox ToiletWand Toilet Cleaning Kit, ToiletWand, Caddy and 6 Refills, Pack of 6 (Pack May Vary)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0010B5EQS"
  },
  {
    "name": "Holikme 2 Pieces Dryer Vent Cleaner Kit, Dryer Lint Vacuum Attachment and Flexible Dryer Lint Brush, Dryer Vent Vacuum Hose Attachment,Blue",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71N4vQExzlL._AC_UL320_.jpg",
      "alt": "Holikme 2 Pieces Dryer Vent Cleaner Kit, Dryer Lint Vacuum Attachment and Flexible Dryer Lint Brush, Dryer Vent Vacuum Hose Attachment,Blue",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B089Q4QHTF"
  },
  {
    "name": "3 in 1 Cup Lid Gap Cleaning Brush Set, Multifunctional Bottle Cleaning Brush, Silicone Cup Lid Gap Cleaner, Home Kitchen Crevice Cleaning T...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719I8pVWitL._AC_UL320_.jpg",
      "alt": "3 in 1 Cup Lid Gap Cleaning Brush Set, Multifunctional Bottle Cleaning Brush, Silicone Cup Lid Gap Cleaner, Home Kitchen Crevice Cleaning T...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2HB8J9H"
  },
  {
    "name": "Retractable Gap Dust Cleaner Under Appliance Cleaning Tool, Bafezoze Flat Duster for Under Refrigerator Fridge Stove Couch Bed, Skinny Thin...",
    "category": "Cleaning",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71mfNPj3WSL._AC_UL320_.jpg",
      "alt": "Retractable Gap Dust Cleaner Under Appliance Cleaning Tool, Bafezoze Flat Duster for Under Refrigerator Fridge Stove Couch Bed, Skinny Thin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DGKC8D44"
  },
  {
    "name": "FORASTO 2 in 1 Toilet Plunger and Brush Set，Extended Handle Plunger，Toilet Bowl Brush Plunger Set, Bathroom Cleaning Tools ，Toilet Brush Pl...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61vEJByUz+L._AC_UL320_.jpg",
      "alt": "FORASTO 2 in 1 Toilet Plunger and Brush Set，Extended Handle Plunger，Toilet Bowl Brush Plunger Set, Bathroom Cleaning Tools ，Toilet Brush Pl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CGTZPQFS"
  },
  {
    "name": "Phueut Pressurized Handheld Multi-Surface Natural Steam Cleaner with 12 pcs Accessories, Multi-Purpose Steamer for Home Use, Steamer for Cl...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71bLC8DPhfL._AC_UL320_.jpg",
      "alt": "Phueut Pressurized Handheld Multi-Surface Natural Steam Cleaner with 12 pcs Accessories, Multi-Purpose Steamer for Home Use, Steamer for Cl...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B098HZDKXW"
  },
  {
    "name": "Scrub Daddy Damp Duster, Multipurpose Dusters for Cleaning - Wooden & Venetian Blind Cleaner Tool, Ridged Wet Dust Sponge for Skirting Boar...",
    "category": "Cleaning",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Wt5ydLnFL._AC_UL320_.jpg",
      "alt": "Scrub Daddy Damp Duster, Multipurpose Dusters for Cleaning - Wooden & Venetian Blind Cleaner Tool, Ridged Wet Dust Sponge for Skirting Boar...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B2SD9ZXW"
  },
  {
    "name": "Baseboard Buddy | Lightweight Home Cleaning Essential, Perfect for Baseboards, Moldings & Walls, Glide & Wipe Trapping & Locking Dirt & Dus...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ckfw7et7L._AC_UL320_.jpg",
      "alt": "Baseboard Buddy | Lightweight Home Cleaning Essential, Perfect for Baseboards, Moldings & Walls, Glide & Wipe Trapping & Locking Dirt & Dus...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01C6X37Q2"
  },
  {
    "name": "YKYI Electric Spin Scrubber, Cordless Power Scrubber Cleaning Tool with 8 Replaceable Heads and Extension Handle for Bathroom, Tub, Tile, F...",
    "category": "Cleaning",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71soNBvhTsL._AC_UL320_.jpg",
      "alt": "YKYI Electric Spin Scrubber, Cordless Power Scrubber Cleaning Tool with 8 Replaceable Heads and Extension Handle for Bathroom, Tub, Tile, F...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GWQ7249P"
  },
  {
    "name": "Keyboard Cleaning Kit Laptop Cleaner, All-in-1 Computer Screen Cleaning Brush Tool, Multi-Function PC Accessories Electronic Cleaner Kit Sp...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for cleaning shoppers who want less scrubbing, easier reach, cleaner storage, or a chore that finally feels doable.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Cleaning shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Clean Slate Lab lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check surface compatibility, cleaning instructions, power ratings, and chemical warnings before using any product.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AJth10-BL._AC_UL320_.jpg",
      "alt": "Keyboard Cleaning Kit Laptop Cleaner, All-in-1 Computer Screen Cleaning Brush Tool, Multi-Function PC Accessories Electronic Cleaner Kit Sp...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C2VBXRYG"
  }
];

export function getCleanSlateLabCatalog(
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
