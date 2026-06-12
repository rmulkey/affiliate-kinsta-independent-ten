import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type WaveOneSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const seeds: WaveOneSeed[] = [
  {
    name: "Brightech Ambience Pro Solar Powered Outdoor String Lights, 27 ft",
    category: "Lighting",
    priceHint: "$ Budget-friendly",
    description: "A quick bistro-light upgrade for balconies, fences, pergolas, and tiny patios that need a softer evening glow.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Warm patio lighting without hardwiring",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/brightech-string-lights.jpg",
      alt: "Brightech Ambience Pro Solar Powered Outdoor String Lights, 27 ft",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B075NS8YXG"
  },
  {
    name: "Grenebo Gardening Tools 9-Piece Heavy Duty Garden Hand Tools with Organizer Handbag",
    category: "Garden Comfort",
    priceHint: "$ Budget-friendly",
    description: "A tidy starter kit for container gardeners, balcony planters, and anyone who wants the basics in one grab-and-go bag.",
    highlights: ["Useful outside","Weekend-friendly","Easy to store"],
    bestFor: "First patio garden toolkit",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/grenebo-garden-tools.jpg",
      alt: "Grenebo Gardening Tools 9-Piece Heavy Duty Garden Hand Tools with Organizer Handbag",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09F9C3KFS"
  },
  {
    name: "Keboe 50 ft Heavy Duty Stainless Steel Garden Hose with 10-Function Nozzle",
    category: "Garden Comfort",
    priceHint: "$ Budget-friendly",
    description: "A compact outdoor hose pick for watering planters, rinsing rugs, and keeping small patios from turning into a chore zone.",
    highlights: ["Useful outside","Weekend-friendly","Easy to store"],
    bestFor: "Low-fuss watering and cleanup",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/keboe-stainless-garden-hose.jpg",
      alt: "Keboe 50 ft Heavy Duty Stainless Steel Garden Hose with 10-Function Nozzle",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BWH7788Y"
  },
  {
    name: "Abba Patio 9FT Lyon Outdoor Patio Umbrella with Push Button Tilt and Crank",
    category: "Shade",
    priceHint: "$$ Mid-range",
    description: "A classic market umbrella for making a dining table, deck corner, or poolside chair feel more finished and usable.",
    highlights: ["Cooler afternoons","Flexible placement","Summer-ready"],
    bestFor: "Simple table shade",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/abba-patio-umbrella-lyon.jpg",
      alt: "Abba Patio 9FT Lyon Outdoor Patio Umbrella with Push Button Tilt and Crank",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CSFJFZPB"
  },
  {
    name: "Keter Pacific Cool Bar Outdoor Patio Furniture and Hot Tub Side Table",
    category: "Hosting",
    priceHint: "$$ Mid-range",
    description: "A side table that quietly doubles as a drink cooler, which is exactly the kind of trick small outdoor spaces need.",
    highlights: ["Guest-friendly","Easy serving","Patio polish"],
    bestFor: "Patio drinks and compact hosting",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/keter-pacific-cool-bar.jpg",
      alt: "Keter Pacific Cool Bar Outdoor Patio Furniture and Hot Tub Side Table",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B007O1CAZQ"
  },
  {
    name: "GENIMO Outdoor Rug for Patio, 9 x 12 Waterproof Reversible Plastic Camping Rug",
    category: "Outdoor Rugs",
    priceHint: "$$ Mid-range",
    description: "A big visual reset for patios and RV setups when the floor needs texture, pattern, and an easier-to-clean surface.",
    highlights: ["Defines the zone","Renter-friendly","Outdoor texture"],
    bestFor: "Large patio zones",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/genimo-outdoor-rug.jpg",
      alt: "GENIMO Outdoor Rug for Patio, 9 x 12 Waterproof Reversible Plastic Camping Rug",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09PVHFYQS"
  },
  {
    name: "Flamaker Patio Furniture Set 3 Pieces All-Weather Rattan Outdoor Chairs and Table",
    category: "Furniture",
    priceHint: "$$ Mid-range",
    description: "A compact conversation set that gives a balcony or porch an instant coffee-corner feeling without needing a huge footprint.",
    highlights: ["Small-space friendly","Instant seating area","Host-ready"],
    bestFor: "Small-space seating",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/flamaker-rattan-set.jpg",
      alt: "Flamaker Patio Furniture Set 3 Pieces All-Weather Rattan Outdoor Chairs and Table",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CH36DTRL"
  },
  {
    name: "Best Choice Products Set of 2 Adjustable Steel Mesh Zero Gravity Lounge Chair Recliners",
    category: "Furniture",
    priceHint: "$$ Mid-range",
    description: "Easy reclining chairs for lazy afternoons, poolside hangs, and extra guest seating that can fold away when the party is done.",
    highlights: ["Small-space friendly","Instant seating area","Host-ready"],
    bestFor: "Flexible lounge seating",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/best-choice-zero-gravity-chairs.jpg",
      alt: "Best Choice Products Set of 2 Adjustable Steel Mesh Zero Gravity Lounge Chair Recliners",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B086JFWSXN"
  },
  {
    name: "Best Choice Products 80-Quart Outdoor Steel Rolling Cooler Cart",
    category: "Hosting",
    priceHint: "$$$ Premium",
    description: "A party-ready cooler cart for backyard dinners, game days, and keeping drinks outside instead of sending everyone into the kitchen.",
    highlights: ["Guest-friendly","Easy serving","Patio polish"],
    bestFor: "Outdoor entertaining",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/best-choice-cooler-cart.jpg",
      alt: "Best Choice Products 80-Quart Outdoor Steel Rolling Cooler Cart",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0045E7A64"
  },
  {
    name: "Shintenchi 2 PCS Outdoor Chaise Lounges Chair with Wheels",
    category: "Furniture",
    priceHint: "$$$ Premium",
    description: "A two-chaise setup for poolside reading, backyard sun time, or turning an empty deck into a real relaxation spot.",
    highlights: ["Small-space friendly","Instant seating area","Host-ready"],
    bestFor: "Poolside lounging",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/shintenchi-chaise-lounge-set.jpg",
      alt: "Shintenchi 2 PCS Outdoor Chaise Lounges Chair with Wheels",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CXD5NY2S"
  },
  {
    name: "GREENVINES Outdoor Rocking Chairs, Set of 2 HDPE Oversized Porch Rockers",
    category: "Furniture",
    priceHint: "$$$ Premium",
    description: "Porch rockers with a clean, sturdy look for slow mornings, iced coffee, and front-yard people-watching.",
    highlights: ["Small-space friendly","Instant seating area","Host-ready"],
    bestFor: "Front porch comfort",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/greenvines-rocking-chairs.jpg",
      alt: "GREENVINES Outdoor Rocking Chairs, Set of 2 HDPE Oversized Porch Rockers",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B2RGS7NP"
  },
  {
    name: "PHI VILLA Sectional Outdoor Couch with Cushions and Acacia Wood Coffee Table",
    category: "Furniture",
    priceHint: "$$$ Premium",
    description: "A fuller outdoor living-room setup for decks and covered patios where you want people to actually sit and stay awhile.",
    highlights: ["Small-space friendly","Instant seating area","Host-ready"],
    bestFor: "Outdoor living room feel",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/phi-villa-sectional.jpg",
      alt: "PHI VILLA Sectional Outdoor Couch with Cushions and Acacia Wood Coffee Table",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GC66L6X7"
  },
  {
    name: "Devoko Dining 7 PCS Patio Conversation Set with Acacia Wood Table Top",
    category: "Hosting",
    priceHint: "$$$ Premium",
    description: "A complete outdoor dining set for families or hosts who want dinner outside to feel like a real room, not an afterthought.",
    highlights: ["Guest-friendly","Easy serving","Patio polish"],
    bestFor: "Backyard dining",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/devoko-dining-set.jpg",
      alt: "Devoko Dining 7 PCS Patio Conversation Set with Acacia Wood Table Top",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09YMK6PVM"
  },
  {
    name: "Burpee Wildflower 25,000 Bulk Seeds, 18 Varieties of Non-GMO Flower Seeds",
    category: "Planters",
    priceHint: "$ Budget-friendly",
    description: "A low-cost way to bring color to planters, borders, and pollinator-friendly corners without overthinking the whole garden plan.",
    highlights: ["Adds greenery","Porch-friendly","Low-effort color"],
    bestFor: "Easy flower color",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/burpee-wildflower-seeds.jpg",
      alt: "Burpee Wildflower 25,000 Bulk Seeds, 18 Varieties of Non-GMO Flower Seeds",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B077X9Q9WR"
  },
  {
    name: "Miracle-Gro Water Soluble All Purpose Plant Food, 3 lbs.",
    category: "Planters",
    priceHint: "$ Budget-friendly",
    description: "A practical patio-garden staple for keeping container plants, flowers, and small outdoor greenery on a regular feeding routine.",
    highlights: ["Adds greenery","Porch-friendly","Low-effort color"],
    bestFor: "Container plant care",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/miracle-gro-plant-food.jpg",
      alt: "Miracle-Gro Water Soluble All Purpose Plant Food, 3 lbs.",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B000BZ8HNG"
  },
  {
    name: "FEED GARDEN Glass Hummingbird Feeder, 16 oz Outdoor Hanging Bird Feeder",
    category: "Garden Decor",
    priceHint: "$ Budget-friendly",
    description: "A small charm upgrade for patios and gardens where you want movement, color, and a little wildlife moment outside the window.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Bird-friendly patios",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/feed-garden-hummingbird-feeder.jpg",
      alt: "FEED GARDEN Glass Hummingbird Feeder, 16 oz Outdoor Hanging Bird Feeder",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CQX8B5K9"
  },
  {
    name: "WdtPro Solar Lanterns Outdoor Waterproof Hanging Solar Lights, 2 Pack",
    category: "Lighting",
    priceHint: "$ Budget-friendly",
    description: "A soft-glow decor pick for hanging near steps, planters, fences, or porch hooks when string lights feel like too much.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Decorative solar glow",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/wdtpro-solar-lanterns.jpg",
      alt: "WdtPro Solar Lanterns Outdoor Waterproof Hanging Solar Lights, 2 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CT1ZCGLV"
  },
  {
    name: "Corona Tools ClassicCUT Forged Bypass Hand Pruner",
    category: "Garden Comfort",
    priceHint: "$ Budget-friendly",
    description: "A focused pruning tool for keeping potted herbs, patio shrubs, and small garden corners from getting wild in the bad way.",
    highlights: ["Useful outside","Weekend-friendly","Easy to store"],
    bestFor: "Plant trimming",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/corona-hand-pruner.jpg",
      alt: "Corona Tools ClassicCUT Forged Bypass Hand Pruner",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B000FGZS2E"
  },
  {
    name: "VIVOHOME Bird Bath for Outside, 28 Inch Weather-Resistant Polyresin Pedestal",
    category: "Garden Decor",
    priceHint: "$ Budget-friendly",
    description: "A decorative garden anchor that adds height and an old-school backyard feel without needing a built-in landscape plan.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Garden focal point",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/vivohome-bird-bath.jpg",
      alt: "VIVOHOME Bird Bath for Outside, 28 Inch Weather-Resistant Polyresin Pedestal",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07597XGSN"
  },
  {
    name: "LIFFY Mosaic Outdoor Side Table, 14 Inch Round Flower Patio Table",
    category: "Furniture",
    priceHint: "$ Budget-friendly",
    description: "A small accent table for coffee, books, candles, or snacks when a full patio table would crowd the space.",
    highlights: ["Small-space friendly","Instant seating area","Host-ready"],
    bestFor: "Tiny patio surfaces",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/liffy-mosaic-side-table.jpg",
      alt: "LIFFY Mosaic Outdoor Side Table, 14 Inch Round Flower Patio Table",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GF1PRX8L"
  },
  {
    name: "downluxe Outdoor Chair Cushions, Waterproof Patio Chair Cushion Set",
    category: "Garden Comfort",
    priceHint: "$$ Mid-range",
    description: "A comfort refresh for older patio chairs when the frame is fine but the seating needs a softer, cleaner look.",
    highlights: ["Useful outside","Weekend-friendly","Easy to store"],
    bestFor: "Chair refresh",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/downluxe-outdoor-chair-cushions.jpg",
      alt: "downluxe Outdoor Chair Cushions, Waterproof Patio Chair Cushion Set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08NJ9X3FJ"
  },
  {
    name: "Best Choice Products Raised Oval Garden Bed",
    category: "Planters",
    priceHint: "$$ Mid-range",
    description: "A contained raised-bed option for herbs, vegetables, or flowers when you want gardening energy without digging up the yard.",
    highlights: ["Adds greenery","Porch-friendly","Low-effort color"],
    bestFor: "Contained backyard planting",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/best-choice-raised-garden-bed.jpg",
      alt: "Best Choice Products Raised Oval Garden Bed",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CVCC8VYL"
  },
  {
    name: "Abba Patio Outdoor Market Umbrella with Crank and Tilt",
    category: "Shade",
    priceHint: "$$ Mid-range",
    description: "A second shade option for shoppers who want the same practical umbrella idea in a different Amazon listing or color path.",
    highlights: ["Cooler afternoons","Flexible placement","Summer-ready"],
    bestFor: "Flexible shade styling",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/abba-patio-umbrella-market.jpg",
      alt: "Abba Patio Outdoor Market Umbrella with Crank and Tilt",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CSFK4W44"
  },
  {
    name: "Unique Loom Outdoor Collection Area Rug",
    category: "Outdoor Rugs",
    priceHint: "$$ Mid-range",
    description: "A softer patterned rug pick for smaller patios, balconies, and seating corners that need one visual layer to feel intentional.",
    highlights: ["Defines the zone","Renter-friendly","Outdoor texture"],
    bestFor: "Small outdoor room styling",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/unique-loom-outdoor-rug.jpg",
      alt: "Unique Loom Outdoor Collection Area Rug",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08K9769NY"
  },
  {
    name: "Keter Pacific Cool Bar Outdoor Patio Side Table",
    category: "Hosting",
    priceHint: "$$ Mid-range",
    description: "A pop-up cooler table for shoppers who want a hosting piece that looks like furniture instead of a camping cooler.",
    highlights: ["Guest-friendly","Easy serving","Patio polish"],
    bestFor: "Hidden cooler storage",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/keter-cool-bar-side-table.jpg",
      alt: "Keter Pacific Cool Bar Outdoor Patio Side Table",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B082BR6BVT"
  },
  {
    name: "Best Choice Products Dual-Wheel Home Utility Yard Wheelbarrow",
    category: "Storage",
    priceHint: "$$ Mid-range",
    description: "A practical garden helper for moving soil, mulch, plants, and patio cleanup loads without turning every project into a workout.",
    highlights: ["Hides clutter","Weather-minded utility","Cleaner patio reset"],
    bestFor: "Backyard project days",
    whyPicked: "This made the cut because it improves a visible outdoor routine quickly: more comfort, cleaner hosting, better shade, or a patio that simply feels more finished.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/outpost-patio/best-choice-yard-wheelbarrow.jpg",
      alt: "Best Choice Products Dual-Wheel Home Utility Yard Wheelbarrow",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01H683DIO"
  }
];

export function getOutpostPatioCatalog(affiliateTag: string): ProductCardContent[] {
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
