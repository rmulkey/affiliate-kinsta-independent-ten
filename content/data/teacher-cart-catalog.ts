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
    "name": "EXPO Dry Erase Markers, Low Odor Ink, Assorted Colors, Chisel Tip, 12 Count",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81aCfepq3+L._AC_UL320_.jpg",
      "alt": "EXPO Dry Erase Markers, Low Odor Ink, Assorted Colors, Chisel Tip, 12 Count",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0004F7GUI"
  },
  {
    "name": "Paper Mate Flair Felt Tip Pens, Medium Point (0.7mm), 12 Count - For Arts & Crafts, Note-Taking, Journaling, School Supplies for Teachers &...",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81X1SjEnOyL._AC_UL320_.jpg",
      "alt": "Paper Mate Flair Felt Tip Pens, Medium Point (0.7mm), 12 Count - For Arts & Crafts, Note-Taking, Journaling, School Supplies for Teachers &...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000J09CO6"
  },
  {
    "name": "Post-it Super Sticky Notes, 15 Sticky Note Pads, 3 x 3 in, School Supplies, Office Products, Notes for Vertical Surfaces, Monitors, Walls a...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ZPLH+SAhL._AC_UL320_.jpg",
      "alt": "Post-it Super Sticky Notes, 15 Sticky Note Pads, 3 x 3 in, School Supplies, Office Products, Notes for Vertical Surfaces, Monitors, Walls a...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07YNHMVRT"
  },
  {
    "name": "Fancy Land Teacher Stamps for Grading Motivational Teacher Self-Inking Stamp Set Encouraging Signature Stamp for Classroom Supplies 8 Packs...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71OG3hk35GL._AC_UL320_.jpg",
      "alt": "Fancy Land Teacher Stamps for Grading Motivational Teacher Self-Inking Stamp Set Encouraging Signature Stamp for Classroom Supplies 8 Packs...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C2PT7QJR"
  },
  {
    "name": "Clorox Disinfecting Wipes for Allergy Season, Bleach-Free, Multi-Surface Cleaner, Antibacterial, Fresh Scent & Crisp Lemon, 75 Count Each,...",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ViEehuSvL._AC_UL320_.jpg",
      "alt": "Clorox Disinfecting Wipes for Allergy Season, Bleach-Free, Multi-Surface Cleaner, Antibacterial, Fresh Scent & Crisp Lemon, 75 Count Each,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00HSC9F2C"
  },
  {
    "name": "BIC Wite-Out EZ Correct Correction Tape, School Supplies for Students and Teachers, Applies Dry, No Dry Time, Tear Resistant, 4-Count Pack...",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81xJsr1M0IL._AC_UL320_.jpg",
      "alt": "BIC Wite-Out EZ Correct Correction Tape, School Supplies for Students and Teachers, Applies Dry, No Dry Time, Tear Resistant, 4-Count Pack...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0007L1W0E"
  },
  {
    "name": "5PCS Pointer Stick For Classroom – Multipurpose Teacher Pointer Stick, Extendable Classroom Pointer And Finger Pointer Stick, Engaging Colo...",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Gu0PQ+9rL._AC_UL320_.jpg",
      "alt": "5PCS Pointer Stick For Classroom – Multipurpose Teacher Pointer Stick, Extendable Classroom Pointer And Finger Pointer Stick, Engaging Colo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DFVH5688"
  },
  {
    "name": "4 Pack Magnetic Staple Remover Tools, Professional Stapler Removers Staple Puller Remover for Classroom, Multicolored Stapler Remover Tool...",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61KqZquHAeL._AC_UL320_.jpg",
      "alt": "4 Pack Magnetic Staple Remover Tools, Professional Stapler Removers Staple Puller Remover for Classroom, Multicolored Stapler Remover Tool...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CPSP97NF"
  },
  {
    "name": "Teacher To Do List Notepad, 8.3x5.8 Inch Teacher Notepad, Spiral Checklist Notebook for Class Schedules, Daily Planner, School Tasks and Go...",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Di9MVz6QL._AC_UL320_.jpg",
      "alt": "Teacher To Do List Notepad, 8.3x5.8 Inch Teacher Notepad, Spiral Checklist Notebook for Class Schedules, Daily Planner, School Tasks and Go...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DXZQYJWZ"
  },
  {
    "name": "Post-it 100% Recycled Paper Super Sticky Notes, 3 in. x 3 in., 5 Pads, 70 Sheets per Pad, Wanderlust Pastels, School Supplies and Office Pr...",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71PTwv6584L._AC_UL320_.jpg",
      "alt": "Post-it 100% Recycled Paper Super Sticky Notes, 3 in. x 3 in., 5 Pads, 70 Sheets per Pad, Wanderlust Pastels, School Supplies and Office Pr...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BPJW13CM"
  },
  {
    "name": "Mr. Sketch Scented Markers, Chisel Tip, Assorted Colors, 22 Count - Fun for Kids, Coloring, Spark Creativity, Arts & Crafts",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81nw2TCbYJL._AC_UL320_.jpg",
      "alt": "Mr. Sketch Scented Markers, Chisel Tip, Assorted Colors, 22 Count - Fun for Kids, Coloring, Spark Creativity, Arts & Crafts",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07GSZM4YM"
  },
  {
    "name": "Elmer&#x27;s Disappearing Purple School Glue Sticks, Washable, 7 Grams, 30 Count - Posters, Back to School, Bulk Pack for Classrooms, #1 Te...",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/610GhfDymuL._AC_UL320_.jpg",
      "alt": "Elmer&#x27;s Disappearing Purple School Glue Sticks, Washable, 7 Grams, 30 Count - Posters, Back to School, Bulk Pack for Classrooms, #1 Te...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000VXO4L2"
  },
  {
    "name": "5pcs Small Note Pads 5x8 Notebook College Ruled Legal Pads Color Notepads 5 Pack Study Back Writing Pads 5 x 8 Perforated Narrow Ruled Pads...",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/715fftu8QrL._AC_UL320_.jpg",
      "alt": "5pcs Small Note Pads 5x8 Notebook College Ruled Legal Pads Color Notepads 5 Pack Study Back Writing Pads 5 x 8 Perforated Narrow Ruled Pads...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4YX9DW3"
  },
  {
    "name": "800pcsTeacher Classroom Motivational Stickers for Kids Students",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/812v-JZBTpL._AC_UL320_.jpg",
      "alt": "800pcsTeacher Classroom Motivational Stickers for Kids Students",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BWT9LM1F"
  },
  {
    "name": "SKYDUE 360 Rotating Plastic Desk Pen Organizer with 5 Slots, Dual-Purpose Art Supply Pencil Cup for Office, School, Home",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61yhHuVQp4L._AC_UL320_.jpg",
      "alt": "SKYDUE 360 Rotating Plastic Desk Pen Organizer with 5 Slots, Dual-Purpose Art Supply Pencil Cup for Office, School, Home",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C9ZHWC9K"
  },
  {
    "name": "X-ACTO Pencil Sharpener, School Pro Electric Sharpener, Black, With Six Size Dial, XL Shavings Bin - Heavy Duty, Classroom Supplies",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AYCot5mgL._AC_UL320_.jpg",
      "alt": "X-ACTO Pencil Sharpener, School Pro Electric Sharpener, Black, With Six Size Dial, XL Shavings Bin - Heavy Duty, Classroom Supplies",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B086P836K4"
  },
  {
    "name": "Xqumoi Teaching is A Work of Heart Sticky Notes Set Blackboard Self-Stick Note Pads Teacher Appreciation Gift Writing Memo Pads School Offi...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81QWC5O0llL._AC_UL320_.jpg",
      "alt": "Xqumoi Teaching is A Work of Heart Sticky Notes Set Blackboard Self-Stick Note Pads Teacher Appreciation Gift Writing Memo Pads School Offi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BSLJM3PW"
  },
  {
    "name": "Classroom Timers for Teachers Kids Large Magnetic Digital Timer Teacher Supplies 2 Pack-Blue Green",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61XQzTl8kuL._AC_UL320_.jpg",
      "alt": "Classroom Timers for Teachers Kids Large Magnetic Digital Timer Teacher Supplies 2 Pack-Blue Green",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07RPT4LFN"
  },
  {
    "name": "Sharpie Permanent Markers, Fine Tip, Black, 12 Count - Quick Drying, Fade Resistant, For Wood, Plastic, Paper, Metal, And More",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81wGuZOL1fL._AC_UL320_.jpg",
      "alt": "Sharpie Permanent Markers, Fine Tip, Black, 12 Count - Quick Drying, Fade Resistant, For Wood, Plastic, Paper, Metal, And More",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00006IFHD"
  },
  {
    "name": "Amazon Basics Wood-Cased #2 Pencils for Writing, Drawing and Sketching, Pre-sharpened, HB Soft Lead with Erasers, Teacher Supplies, 150 Cou...",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81qxJ-PgGLL._AC_UL320_.jpg",
      "alt": "Amazon Basics Wood-Cased #2 Pencils for Writing, Drawing and Sketching, Pre-sharpened, HB Soft Lead with Erasers, Teacher Supplies, 150 Cou...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B071JM699P"
  },
  {
    "name": "Sharpie S-Gel Gel Pens, Medium Point (0.7mm), Assorted Fashion Barrels, Black Ink, 12 Count - Office, Teacher, School Supplies",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81D7u-Z-k2L._AC_UL320_.jpg",
      "alt": "Sharpie S-Gel Gel Pens, Medium Point (0.7mm), Assorted Fashion Barrels, Black Ink, 12 Count - Office, Teacher, School Supplies",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FJTJG44G"
  },
  {
    "name": "Paper Mate Handwriting Triangular Mechanical Pencil Set with Lead & Eraser Refills, 1.3mm, 8 Count - Back to School, Teacher Supplies, Home...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81eW0HT+9+L._AC_UL320_.jpg",
      "alt": "Paper Mate Handwriting Triangular Mechanical Pencil Set with Lead & Eraser Refills, 1.3mm, 8 Count - Back to School, Teacher Supplies, Home...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B077Q4B6YN"
  },
  {
    "name": "Sharpie Pocket Highlighters, Mild Pastel Colors, Assorted, Chisel Tip, 12 Count - School, Home, and Office Use, Teacher Supplies",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71+d+4qgVZL._AC_UL320_.jpg",
      "alt": "Sharpie Pocket Highlighters, Mild Pastel Colors, Assorted, Chisel Tip, 12 Count - School, Home, and Office Use, Teacher Supplies",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09Y2KJ2KX"
  },
  {
    "name": "Post-it Super Sticky Easel Pad, 25 x 30 Inches, 30 Sheets Per Pad, 2 Pads, Large, White, Premium Self Stick Flip Chart Paper, Anchor Chart,...",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/5145Q5Tv-ML._AC_UL320_.jpg",
      "alt": "Post-it Super Sticky Easel Pad, 25 x 30 Inches, 30 Sheets Per Pad, 2 Pads, Large, White, Premium Self Stick Flip Chart Paper, Anchor Chart,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00006IA9F"
  },
  {
    "name": "Sharpie Clear View Stick Highlighters, See-Through Chisel Tip, Assorted Fluorescent Colors, 8 Count - School, Home, and Office Use, Teacher...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/812SV-LMAeL._AC_UL320_.jpg",
      "alt": "Sharpie Clear View Stick Highlighters, See-Through Chisel Tip, Assorted Fluorescent Colors, 8 Count - School, Home, and Office Use, Teacher...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B019QROV9S"
  },
  {
    "name": "Crayola Construction Paper Bulk Pack (480 Sheets) – 10 Assorted Colors, 9x12, Teacher School Supplies & Classroom Must Haves, Card Making C...",
    "category": "Classroom",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61TbDzO158L._AC_UL320_.jpg",
      "alt": "Crayola Construction Paper Bulk Pack (480 Sheets) – 10 Assorted Colors, 9x12, Teacher School Supplies & Classroom Must Haves, Card Making C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00MJ8JSFE"
  },
  {
    "name": "Ticonderoga X13910 Striped Wood-Cased Pencils, 2 HB Soft, Pre-Sharpened, 10 Count, Assorted Colors",
    "category": "Classroom",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81rCd3+VY7L._AC_UL320_.jpg",
      "alt": "Ticonderoga X13910 Striped Wood-Cased Pencils, 2 HB Soft, Pre-Sharpened, 10 Count, Assorted Colors",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01DZY1V64"
  },
  {
    "name": "Sharpie S-Gel Gel Pens, Black Barrel, Medium Point (0.7mm), Black Gel Ink, 12 Count - Home, Office, School, Journaling, Writing, Note-Takin...",
    "category": "Classroom",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for classroom shoppers who want cleaner classroom systems, easier cart setup, faster transitions, or fewer things disappearing by lunch.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Classroom shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Teacher Cart lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check school rules, age suitability, classroom quantities, and material safety before buying for students.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81Z0eKG8vaL._AC_UL320_.jpg",
      "alt": "Sharpie S-Gel Gel Pens, Black Barrel, Medium Point (0.7mm), Black Gel Ink, 12 Count - Home, Office, School, Journaling, Writing, Note-Takin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B082PN4X5J"
  }
];

export function getTeacherCartCatalog(
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
