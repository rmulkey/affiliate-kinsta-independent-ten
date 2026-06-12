import {
  appendAmazonAffiliateTag,
  buildAmazonSearchUrl
} from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type RawProduct = {
  name: string;
  category:
    | "Orthopedic Beds"
    | "Cat Trees & Condos"
    | "Walking Harnesses"
    | "Toys & Enrichment"
    | "Feeding & Hydration"
    | "Cleaning & Grooming"
    | "Litter & Potty";
  priceHint: string;
  imageSrc: string;
  amazonUrl?: string;
};

function normalizeProductImageUrl(imageSrc: string) {
  if (!imageSrc.includes("image.chewy.com")) {
    return imageSrc;
  }

  // Chewy's `_AC_SL248_V1_` assets are tiny thumbnails that look blurry when
  // stretched into hero cards and larger product layouts. The base `.jpg`
  // resolves to a much larger source image that Next can optimize down.
  return imageSrc.replace(/\._AC_SL\d+_V1_\.jpg$/, ".jpg");
}

const bedCopy = {
  description:
    "A comfy bed pick for anyone looking at support, easy cleanup, and a cozy place for pets to crash.",
  highlights: [
    "Great for pets that need a little extra support",
    "Easy to compare by comfort and cleanup",
    "A solid everyday category for most homes"
  ],
  bestFor: "Senior dogs and comfort-first homes",
  whyPicked:
    "A better bed can make a real difference fast, especially if your dog needs more support or just loves a soft place to rest.",
  trustNote: "Real product photo · Cozy everyday pick · Direct Amazon link"
};

const treeCopy = {
  description:
    "A cat tree pick for climbing, scratching, hanging out, and giving indoor cats their own space.",
  highlights: [
    "Helps with scratching and boredom",
    "Works well in smaller homes too",
    "Adds a fun spot for climbing and lounging"
  ],
  bestFor: "Indoor cats and apartment-friendly setups",
  whyPicked:
    "A good cat tree does a lot at once. It gives cats something fun to do and saves your furniture a bit of trouble.",
  trustNote: "Real product photo · Fun indoor pick · Direct Amazon link"
};

const harnessCopy = {
  description:
    "A harness pick for easier walks, a better fit, and a little more day-to-day control.",
  highlights: [
    "Helpful for dogs that pull or wiggle a lot",
    "Easy to compare by fit and comfort",
    "One of the most useful everyday dog buys"
  ],
  bestFor: "Daily walks, puppies, and stronger pullers",
  whyPicked:
    "When walks feel harder than they should, a better harness is usually one of the easiest upgrades to make.",
  trustNote: "Real product photo · Fit-first pick · Direct Amazon link"
};

const enrichmentCopy = {
  description:
    "A boredom-busting pick for play, treat time, and giving pets something useful to do.",
  highlights: [
    "Good for daily play and mental stimulation",
    "Easy to add into routines at home",
    "A practical upgrade for dogs that need more to do"
  ],
  bestFor: "Playtime, boredom, and treat-based enrichment",
  whyPicked:
    "Simple enrichment products tend to get used again and again, especially when pets need a healthier outlet for energy.",
  trustNote: "Real product photo · Enrichment pick · Direct Amazon product page"
};

const feedingCopy = {
  description:
    "A feeding and water pick for smoother daily routines, better pacing, and easier pet care.",
  highlights: [
    "Helpful for everyday feeding or hydration routines",
    "Useful for busy homes and multi-pet setups",
    "Easy to compare by capacity and cleanup"
  ],
  bestFor: "Feeding routines, hydration, and busy homes",
  whyPicked:
    "Food and water products earn their place when they make daily care calmer, cleaner, and easier to repeat.",
  trustNote: "Real product photo · Daily routine pick · Direct Amazon product page"
};

const cleaningCopy = {
  description:
    "A cleanup and grooming pick for pet hair, shedding, and the little messes that come with real pets.",
  highlights: [
    "Useful for homes with shedding pets",
    "Good for regular cleanup or grooming routines",
    "A practical pick that solves a clear problem"
  ],
  bestFor: "Pet hair, shedding, and cleaner routines",
  whyPicked:
    "Pet cleanup tools convert well because the problem is obvious: fur, mess, and maintenance show up every week.",
  trustNote: "Real product photo · Cleanup pick · Direct Amazon product page"
};

const pottyCopy = {
  description:
    "A potty and litter pick for odor control, daily cleanup, and keeping the home easier to manage.",
  highlights: [
    "Helpful for everyday potty or litter routines",
    "Good for odor control and cleaner habits",
    "A repeat-use category people actively search for"
  ],
  bestFor: "Litter boxes, walks, and everyday cleanup",
  whyPicked:
    "These are not flashy buys, but they are the kind of basics pet homes depend on constantly.",
  trustNote: "Real product photo · Practical home pick · Direct Amazon product page"
};

const copyByCategory: Record<RawProduct["category"], typeof bedCopy> = {
  "Orthopedic Beds": bedCopy,
  "Cat Trees & Condos": treeCopy,
  "Walking Harnesses": harnessCopy,
  "Toys & Enrichment": enrichmentCopy,
  "Feeding & Hydration": feedingCopy,
  "Cleaning & Grooming": cleaningCopy,
  "Litter & Potty": pottyCopy
};

const rawProducts: RawProduct[] = [
  {
    name: "ChomChom Roller Pet Hair Remover and Reusable Lint Roller",
    category: "Cleaning & Grooming",
    priceHint: "$$ Mid-range",
    imageSrc: "/images/pet-products/chomchom-roller.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BAGTNAQ"
  },
  {
    name: "KONG Classic Durable Natural Rubber Dog Toy, Large",
    category: "Toys & Enrichment",
    priceHint: "$ Budget-friendly",
    imageSrc: "/images/pet-products/kong-classic.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0002AR0I8"
  },
  {
    name: "Outward Hound Fun Feeder Slo Bowl Slow Feeder Dog Bowl",
    category: "Feeding & Hydration",
    priceHint: "$ Budget-friendly",
    imageSrc: "/images/pet-products/outward-hound-fun-feeder.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00FPKNRF0"
  },
  {
    name: "Chuckit! Ultra Ball Medium Dog Toy, 2 Pack",
    category: "Toys & Enrichment",
    priceHint: "$ Budget-friendly",
    imageSrc: "/images/pet-products/chuckit-ultra-ball.jpg",
    amazonUrl: "https://www.amazon.com/dp/B000F4AVPA"
  },
  {
    name: "Earth Rated Dog Poop Bags Refill Rolls, Lavender Scented, 270 Count",
    category: "Litter & Potty",
    priceHint: "$ Budget-friendly",
    imageSrc: "/images/pet-products/earth-rated-poop-bags.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BSYR7K8"
  },
  {
    name: "Hertzko Self-Cleaning Slicker Brush for Dogs and Cats",
    category: "Cleaning & Grooming",
    priceHint: "$ Budget-friendly",
    imageSrc: "/images/pet-products/hertzko-slicker-brush.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00ZGPI3OY"
  },
  {
    name: "Dr. Elsey's Ultra Unscented Clumping Cat Litter, 40 lb Bag",
    category: "Litter & Potty",
    priceHint: "$$ Mid-range",
    imageSrc: "/images/pet-products/dr-elseys-ultra-litter.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0009X29WK"
  },
  {
    name: "PETLIBRO Granary 5G WiFi Automatic Cat Feeder, 5L",
    category: "Feeding & Hydration",
    priceHint: "$$$ Premium",
    imageSrc: "/images/pet-products/petlibro-granary-feeder.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09S8WMJY9"
  },
  {
    name: "Veken Stainless Steel Automatic Pet Water Fountain, 95 oz",
    category: "Feeding & Hydration",
    priceHint: "$$ Mid-range",
    imageSrc: "/images/pet-products/veken-stainless-fountain.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CK1MXC7J"
  },
  {
    name: "KONG Wobbler Treat Dispensing Dog Toy, Large",
    category: "Toys & Enrichment",
    priceHint: "$$ Mid-range",
    imageSrc: "/images/pet-products/kong-wobbler.jpg",
    amazonUrl: "https://www.amazon.com/dp/B003ALMW0M"
  },
  {
    name: "Frisco Quilted Orthopedic Pillow Lounger Cat & Dog Bed with Removable Cover, Gray, Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068d2fa2-cafc-7202-8000-53eb322303e7.jpg"
  },
  {
    name: "Arlee Home & Pet by Arlee Orthopedic Chew Resistant Eco-Friendly Memory Foam Bolster Dog & Cat Bed, Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/canine-creations-by-arlee-orthopedic-chew-resistant-eco-friendly-memory-foam-bolster-dog-cat-bed-large/img-289876.jpg"
  },
  {
    name: "JOEJOY Orthopedic Waterproof Dog Bed with Removable Cover, Beige, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/0686e46a-f1b9-74fe-8000-e562a551c2d7.jpg"
  },
  {
    name: "FurHaven Velvet Waves Perfect Comfort Orthopedic Sofa Cat & Dog Bed with Removable Cover, Granite Gray, Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/furhaven-velvet-waves-perfect-comfort-orthopedic-sofa-cat-dog-bed-with-removable-cover-granite-gray-large/img-487883.jpg"
  },
  {
    name: "Bedsure ComfyFleece Orthopedic Waterproof Dog Sofa Bed with Corduroy Removable Cover, Grey, Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069f0b22-a831-72b4-8000-04a829717937.jpg"
  },
  {
    name: "Invenho Orthopedic Egg Crate Foam Dog Bed Mat with Removable Washable Cover, X-Large: 41 x 27 x 3.5-in, Brown",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069b0755-c5ae-7359-8000-d82626a09cd8.jpg"
  },
  {
    name: "Noah & Paw Machine Washable Orthopedic Classic Dog Bed, Dark Green, Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068a8cd5-f764-78f7-8000-862bda07fcce.jpg"
  },
  {
    name: "Best Pet Supplies Cute Orthopedic Bolster Dog & Cat Mat Bed, Gray, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/best-pet-supplies-cute-orthopedic-bolster-dog-cat-mat-bed-gray-x-large/img-364465.jpg"
  },
  {
    name: "FurHaven NAP Ultra Plush Orthopedic Deluxe Cat & Dog Bed with Removable Cover, Gray, Jumbo",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06924b7e-560c-72ce-8000-55e0acf01b49.jpg"
  },
  {
    name: "KOPEKS Orthopedic Pillow Dog Bed with Removable Cover, Brown, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069b291b-08e4-7894-8000-36fd579fbab5.jpg"
  },
  {
    name: "FunnyFuzzy Scratch-Resistant Orthopedic Pillow Dog Cushion Bed, Grey, XX-Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069bc0c1-04e4-7810-8000-19072ae07627.jpg"
  },
  {
    name: "Bedsure Orthopedic Waterproof Dog & Cat Bed, Dark Grey, Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/0688a34c-dfae-7022-8000-41ab7fd5f90b.jpg"
  },
  {
    name: "EHEYCIGA Memory Foam Orthopedic Furniture Style Sofa Dog Bed with Removable Cover, 36 x 27-in",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069f5000-1588-7053-8000-6e53501d12a9.jpg"
  },
  {
    name: "FEANDREA Orthopedic Dog Sofa Bed with Waterproof Liner, Light Gray, Medium: 30 x 20 x 7-in",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06967f10-c1a2-790f-8000-710ad1d94a73.jpg"
  },
  {
    name: "FurHaven Velvet Waves Perfect Comfort Cooling Gel Bolster Cat & Dog Bed with Removable Cover, Celadon Green, Jumbo",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/0691e23f-1fb6-74d7-8000-09e5ecf104af.jpg"
  },
  {
    name: "Bedsure ComfyFleece Orthopedic Bolster Dog Bed with Removable Cover, Cream, Medium",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068ed115-0f29-7bb0-8000-ec80f3987d0b.jpg"
  },
  {
    name: "Invenho Waterproof Orthopedic Couch Dog Bed with Washable Removable Cover, Brown, 48 x 35 x 6.5-in",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06998b7d-3c04-76e5-8000-b44e365e6a16.jpg"
  },
  {
    name: "Noah & Paw Machine Washable Orthopedic Sofa Dog Bed, Navy Blue, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068a8cba-8fd6-7e80-8000-04d696f86d14.jpg"
  },
  {
    name: "Frisco Plush Orthopedic Pillowtop Dog Bed w/Removable Cover, Gray, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068c3f77-1ade-741a-8000-be8ad4833a9e.jpg"
  },
  {
    name: "FurHaven Deluxe Oxford Orthopedic Indoor/Outdoor Dog & Cat Bed with Removable Cover, Large, Deep Lagoon",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/furhaven-deluxe-oxford-orthopedic-indooroutdoor-dog-cat-bed-with-removable-cover-large-deep-lagoon/img-178843.jpg"
  },
  {
    name: "LFC PETS Water-resistant Orthopedic Bolster Dog & Cat Sofa Bed with Removable Cover, Grey, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069738b1-6675-7b23-8000-a1f1a897b306.jpg"
  },
  {
    name: "Arlee Home & Pet Orthopedic Pillow Topper Dog Bed, Charcoal, X-Large",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/canine-creations-orthopedic-pillow-topper-dog-bed-charcoal-x-large/img-524149.jpg"
  },
  {
    name: "JOEJOY High Sided Fish Scale Orthopedic Bolster Dog Sofa Bed with Removable Cover, Grey, X-Large Plus: 48 x 35 x 11-in",
    category: "Orthopedic Beds",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/069b98dc-3c9e-74e3-8000-e7e3f943c0a6.jpg"
  },
  {
    name: "Frisco Orthopedic Pillow Cat & Dog Bed with Removable Cover, Gray, Large",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068eff0a-062a-73c8-8000-d8b89f937ef0.jpg"
  },
  {
    name: "EHEYCIGA Waterproof Memory Foam Orthopedic Furniture Style Sofa Dog Bed with Removable Cover, 44 x 32-in, Grey",
    category: "Orthopedic Beds",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06972834-3e06-7221-8000-1565897e4320.jpg"
  },
  {
    name: "TSCOMON 55-in Plush Cat Tree with Hammock, Toy & Sisal Scratching Post, Green",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06862b30-f6ad-7fc7-8000-4c3d9eb6baae.jpg"
  },
  {
    name: "FEANDREA Plush Cat Tree & Condo, 61-in, Beige",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/0690514a-52f9-71b5-8000-e6fc00ac3c6b.jpg"
  },
  {
    name: "Yaheetech 63-in Multi-Level Sisal Cat Tree, Dark Gray",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/yaheetech-multi-level-sisal-cat-tree-62-2in-dark-gray/img-546885.jpg"
  },
  {
    name: "Yaheetech 63.5-in Plush Cat Tree & Condo, Beige",
    category: "Cat Trees & Condos",
    priceHint: "$ Budget-friendly",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/yaheetech-63-5in-plush-cat-tree-condo-beige/img-460778.jpg"
  },
  {
    name: "FUKUMARU 118-in Jute Rope Floor-to-Ceiling Cat Tree & Condo with Hammock, Brown",
    category: "Cat Trees & Condos",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06889f9a-30cb-7622-8000-54b68b928d8f.jpg"
  },
  {
    name: "Yaheetech 48.5-in Oasis-Themed Cat Tree, Green/Yellow",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/yaheetech-48-5in-oasis-themed-cat-tree-greenyellow/img-307516.jpg"
  },
  {
    name: "Frisco 48-in Faux Fur Cat Tree & Condo, Gray",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068138ef-6351-70d9-8000-05494e305375.jpg"
  },
  {
    name: "PAWZ Road 45.7-in Large Hammock Polyester Cat Tree & Condo, Medium, Gray",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06822159-60b1-7a86-8000-9bac8a7b01ff.jpg"
  },
  {
    name: "NonoPets 2-in-1 Double Layer 17.5-in Polyester Cat Scratcher Lounge Bed & Condo with Play Balls, Beige",
    category: "Cat Trees & Condos",
    priceHint: "$ Budget-friendly",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06a16db5-18be-7845-8000-ae68cadb7709.jpg"
  },
  {
    name: "Frisco 40-in Faux Fur Cat Tree & Condo, Cream",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/frisco-40in-faux-fur-cat-tree-condo-cream/img-296136.jpg"
  },
  {
    name: "Globlazer 69-in Sturdy Indoor Cat Tree Tower, Dark Gray",
    category: "Cat Trees & Condos",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/0695f701-95b1-716c-8000-640790e77365.jpg"
  },
  {
    name: "TSCOMON Multi-Level 55-in Plush Cat Tree & Condo with Scratching Post, Light Gray",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/068a3971-d335-7cbf-8000-8683bd1773f9.jpg"
  },
  {
    name: "FEANDREA 65-in Multi-Level Cat Tree, Almond Yellow",
    category: "Cat Trees & Condos",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/0690514a-cf23-7b59-8000-837208873e13.jpg"
  },
  {
    name: "Yaheetech Multi-Level Cat Tree, 64.5-in, Dark Gray",
    category: "Cat Trees & Condos",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/yaheetech-multi-level-cat-tree-64-5in-dark-gray/img-573388.jpg"
  },
  {
    name: "Yaheetech 35.5-in Cat Tree with Space Capsule & Two Scratching Post for Kittens, Indigo/Beige",
    category: "Cat Trees & Condos",
    priceHint: "$ Budget-friendly",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/yaheetech-35-5in-cat-tree-with-space-capsule-small-indigobeige/img-533521.jpg"
  },
  {
    name: "Gooby Escape Free Easy Fit Dog Harness, Turquoise, Small: 16 to 19.25-in chest",
    category: "Walking Harnesses",
    priceHint: "$ Budget-friendly",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/gooby-escape-free-easy-fit-dog-harness-turquoise-small-16-to-19-25in-chest/img-288236.jpg"
  },
  {
    name: "Best Pet Supplies Voyager Dual Attachment Outdoor Dog Harness & Leash Bundle, Turquoise, Medium",
    category: "Walking Harnesses",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/best-pet-supplies-voyager-dual-attachment-outdoor-dog-harness-leash-bundle-turquoise-medium/img-741087.jpg"
  },
  {
    name: "Frisco Step In Back Clip Dog Harness, Blue, Large: 26 to 38-in chest",
    category: "Walking Harnesses",
    priceHint: "$ Budget-friendly",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/frisco-step-in-back-clip-dog-harness-blue-large-26-to-38in-chest/img-166133.jpg"
  },
  {
    name: "Ruffwear Flagline Front-Clip Dog Harness, Basalt Gray, Medium: 27 to 32-in chest",
    category: "Walking Harnesses",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/ruffwear-flagline-front-clip-dog-harness-basalt-gray-medium-27-to-32in-chest/img-298067.jpg"
  },
  {
    name: "OneTigris AIRE Nylon Mesh No Pull Dog Harness, Black, Large: 27 to 36-in chest",
    category: "Walking Harnesses",
    priceHint: "$$$ Premium",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/onetigris-aire-nylon-mesh-no-pull-dog-harness-black-large-27-to-36in-chest/img-510194.jpg"
  },
  {
    name: "Best Pet Supplies Voyager Fully Adjustable Step-in Mesh Dog Harness, Royal Blue, Medium",
    category: "Walking Harnesses",
    priceHint: "$ Budget-friendly",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/best-pet-supplies-voyager-fully-adjustable-step-in-mesh-dog-harness-royal-blue-medium/img-456968.jpg"
  },
  {
    name: "BARKBAY Air Reflective No-Pull Dog Harness with ID Tag Pocket, Sapphire Blue & Blue, Small: 19.5 to 26-in chest",
    category: "Walking Harnesses",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06981c35-3d75-7636-8000-fa9413952289.jpg"
  },
  {
    name: "PetSafe Easy Walk Comfort Reflective No Pull Dog Harness, Pink, Medium: 24 to 34-in chest",
    category: "Walking Harnesses",
    priceHint: "$$ Mid-range",
    imageSrc:
      "https://image.chewy.com/catalog/general/images/moe/06774162-d18a-7e2c-8000-11b6871289f1.jpg"
  }
];

export function buildPetProductsCatalog(
  affiliateTag: string
): ProductCardContent[] {
  return rawProducts.map((product) => {
    const copy = copyByCategory[product.category];

    return {
      name: product.name,
      category: product.category,
      priceHint: product.priceHint,
      description: copy.description,
      highlights: copy.highlights,
      bestFor: copy.bestFor,
      whyPicked: copy.whyPicked,
      trustNote: copy.trustNote,
      affiliateUrl: product.amazonUrl
        ? appendAmazonAffiliateTag(product.amazonUrl, affiliateTag)
        : buildAmazonSearchUrl(product.name, affiliateTag),
      ctaLabel: "Check price on Amazon",
      image: {
        src: normalizeProductImageUrl(product.imageSrc),
        alt: product.name,
        kind: "product"
      },
      commerce: {
        merchant: "amazon",
        linkKind: product.amazonUrl ? "amazon-product-page" : "amazon-search"
      }
    };
  });
}
