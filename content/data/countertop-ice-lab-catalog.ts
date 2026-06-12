import { buildAmazonSearchUrl } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type CountertopIceSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  query: string;
};

const ctaLabel = "Find on Amazon";

const countertopIceSeeds: CountertopIceSeed[] = [
  {
    name: "GE Profile Opal 2.0 Ultra Nugget Ice Maker",
    category: "Nugget Ice",
    priceHint: "Premium",
    description:
      "A premium nugget-ice machine to compare when chewable ice texture, side-tank convenience, and a more appliance-like countertop setup matter.",
    highlights: ["Nugget ice focus", "Side-tank style to compare", "Premium kitchen-counter footprint"],
    bestFor: "Chewable ice fans and high-use kitchens",
    whyPicked:
      "It anchors the premium end of the shortlist and gives shoppers a clear comparison point for the popular nugget-ice category.",
    trustNote:
      "Official GE Appliances product image. Verify current bundle, cleaning supplies, filter details, warranty, price, and availability on Amazon before buying.",
    image: {
      src: "/images/countertop-ice-lab/ge-opal-ultra.webp",
      alt: "GE Profile Opal 2.0 Ultra Nugget Ice Maker product image",
      kind: "product"
    },
    query: "GE Profile Opal 2.0 Ultra Nugget Ice Maker"
  },
  {
    name: "Newair 44 lb Countertop Nugget Ice Maker",
    category: "Nugget Ice",
    priceHint: "Premium",
    description:
      "A higher-output nugget-ice option for shoppers who want soft ice for drinks, hosting, offices, or frequent refills without a built-in machine.",
    highlights: ["44 lb daily-output class", "Nugget ice texture", "Self-cleaning style to verify"],
    bestFor: "Home bars, offices, and frequent nugget-ice use",
    whyPicked:
      "It gives the page a serious nugget-ice comparison that is still countertop-oriented rather than undercounter-only.",
    trustNote:
      "Official Newair product image. Confirm current specs, cleaning cycle details, drain routine, and seller terms on Amazon.",
    image: {
      src: "/images/countertop-ice-lab/newair-nugget-44.webp",
      alt: "Newair 44 lb Countertop Nugget Ice Maker product image",
      kind: "product"
    },
    query: "Newair 44 lb Countertop Nugget Ice Maker"
  },
  {
    name: "Newair 26 lb Countertop Nugget Ice Maker",
    category: "Small Kitchens",
    priceHint: "Mid-range",
    description:
      "A smaller nugget-ice search for apartments, compact kitchens, and shoppers who want chewable ice without a large footprint.",
    highlights: ["Compact nugget option", "Easy-fill format to compare", "Good apartment shortlist item"],
    bestFor: "Apartments and smaller counters",
    whyPicked:
      "It balances the premium nugget picks with a more compact machine that still targets the ice texture people actively search for.",
    trustNote:
      "Official Newair product image. Check dimensions, water-fill method, cleaning instructions, and noise expectations before buying.",
    image: {
      src: "/images/countertop-ice-lab/newair-nugget-26.webp",
      alt: "Newair 26 lb Countertop Nugget Ice Maker product image",
      kind: "product"
    },
    query: "Newair 26 lb Countertop Nugget Ice Maker"
  },
  {
    name: "Luma 44 lb Countertop Nugget Ice Maker",
    category: "Home Bar",
    priceHint: "Premium",
    description:
      "A black-stainless nugget-ice machine to compare for home bars, media rooms, and counters where the appliance look matters.",
    highlights: ["Black stainless style", "Nugget ice focus", "Home-bar friendly format"],
    bestFor: "Home bars and design-sensitive counters",
    whyPicked:
      "It keeps aesthetics in the decision, which matters when the appliance lives in a visible bar or entertaining zone.",
    trustNote:
      "Official Newair/Luma product image. Confirm live Amazon listing details, cleaning routine, and return policy.",
    image: {
      src: "/images/countertop-ice-lab/newair-luma-nugget-44.webp",
      alt: "Luma 44 lb Countertop Nugget Ice Maker product image",
      kind: "product"
    },
    query: "Luma 44 lb Countertop Nugget Ice Maker"
  },
  {
    name: "Newair 45 lb Countertop Clear Ice Maker",
    category: "Clear Ice",
    priceHint: "Premium",
    description:
      "A clear-ice machine to compare when cocktail presentation, slower melt, and cube clarity matter more than the fastest bullet-ice batch.",
    highlights: ["Clear ice category", "Custom thickness style to verify", "Cocktail-friendly comparison"],
    bestFor: "Cocktails, spirits, and hosting",
    whyPicked:
      "Clear ice is a distinct buyer intent, not just a nicer-looking version of bullet ice, so it deserves its own comparison lane.",
    trustNote:
      "Official Newair product image. Verify current ice shape, cycle time, cleaning cycle, and water requirements on Amazon.",
    image: {
      src: "/images/countertop-ice-lab/newair-clear-45.webp",
      alt: "Newair 45 lb Countertop Clear Ice Maker product image",
      kind: "product"
    },
    query: "Newair 45 lb Countertop Clear Ice Maker"
  },
  {
    name: "Newair Countertop Whiskey Ice Ball Maker",
    category: "Clear Ice",
    priceHint: "Premium",
    description:
      "A specialty clear-ice sphere maker to compare for whiskey drinkers and cocktail setups that care more about shape than daily ice volume.",
    highlights: ["Ice sphere format", "Cocktail-specific use case", "Specialty machine to compare carefully"],
    bestFor: "Whiskey, cocktails, and giftable bar setups",
    whyPicked:
      "It broadens the site beyond generic countertop cubes and targets a high-intent barware search behavior.",
    trustNote:
      "Official Newair product image. Confirm sphere count, cycle process, cleaning, and whether the specialty format fits your routine.",
    image: {
      src: "/images/countertop-ice-lab/newair-whiskey-sphere.webp",
      alt: "Newair Countertop Whiskey Ice Ball Maker product image",
      kind: "product"
    },
    query: "Newair Countertop Whiskey Ice Ball Maker"
  },
  {
    name: "Luma Countertop Clear Ice Maker 28 lb",
    category: "Clear Ice",
    priceHint: "Mid-range",
    description:
      "A compact clear-ice search for shoppers who want better-looking cubes for drinks without committing to a larger clear-ice appliance.",
    highlights: ["Clear ice entry point", "Compact stainless look", "Cocktail and dinner-party fit"],
    bestFor: "Smaller home bars and occasional hosts",
    whyPicked:
      "It creates a more approachable clear-ice option for shoppers who are comparing size and effort as much as cube quality.",
    trustNote:
      "Official Luma/Newair product image. Verify model name, ice output, size, and current Amazon seller details.",
    image: {
      src: "/images/countertop-ice-lab/luma-clear-28.webp",
      alt: "Luma Countertop Clear Ice Maker 28 lb product image",
      kind: "product"
    },
    query: "Luma Countertop Clear Ice Maker 28 lb"
  },
  {
    name: "Newair Countertop Clear Ice Maker 40 lb",
    category: "Clear Ice",
    priceHint: "Mid-range",
    description:
      "A clear-ice model to compare for shoppers who want restaurant-style cubes but still need a machine that can sit on a counter.",
    highlights: ["40 lb clear-ice class", "Countertop format", "Restaurant-style cube comparison"],
    bestFor: "Cocktail nights and premium drink stations",
    whyPicked:
      "It sits between compact clear-ice machines and large high-capacity units, which makes it useful for most comparison shoppers.",
    trustNote:
      "Official Newair product image. Confirm cube type, dimensions, cleaning steps, and current listing details before buying.",
    image: {
      src: "/images/countertop-ice-lab/newair-clear-40.webp",
      alt: "Newair Countertop Clear Ice Maker 40 lb product image",
      kind: "product"
    },
    query: "Newair Countertop Clear Ice Maker 40 lb"
  },
  {
    name: "Newair 28 lb Countertop Bullet Ice Maker",
    category: "Bullet Ice",
    priceHint: "Budget-friendly",
    description:
      "A classic bullet-ice option for shoppers who care about quick batches, simple controls, and a familiar countertop format.",
    highlights: ["Bullet ice format", "Small appliance footprint", "Simple first ice-maker search"],
    bestFor: "First-time ice-maker buyers",
    whyPicked:
      "Bullet ice remains the practical entry point for many households because the machines are usually simpler and easier to compare.",
    trustNote:
      "Official Newair product image. Verify current batch speed, basket capacity, noise, and cleaning instructions on Amazon.",
    image: {
      src: "/images/countertop-ice-lab/newair-bullet-28.webp",
      alt: "Newair 28 lb Countertop Bullet Ice Maker product image",
      kind: "product"
    },
    query: "Newair 28 lb Countertop Bullet Ice Maker"
  },
  {
    name: "Newair 26 lb Countertop Bullet Ice Maker",
    category: "Small Kitchens",
    priceHint: "Budget-friendly",
    description:
      "A compact bullet-ice machine to compare for dorms, rentals, RVs, small kitchens, and backup ice during parties.",
    highlights: ["Compact bullet ice", "Budget-friendly class", "Portable use case"],
    bestFor: "Dorms, rentals, RVs, and small counters",
    whyPicked:
      "It keeps the shortlist grounded in the practical, lower-commitment machines most shoppers compare first.",
    trustNote:
      "Official Newair product image. Confirm size, drain location, water reservoir, and current seller details.",
    image: {
      src: "/images/countertop-ice-lab/newair-bullet-26.webp",
      alt: "Newair 26 lb Countertop Bullet Ice Maker product image",
      kind: "product"
    },
    query: "Newair 26 lb Countertop Bullet Ice Maker"
  },
  {
    name: "Newair 33 lb Countertop Bullet Ice Maker",
    category: "Hosting",
    priceHint: "Mid-range",
    description:
      "A higher-capacity bullet-ice machine to compare when a 26 lb class model feels too small for gatherings, coolers, or office use.",
    highlights: ["33 lb output class", "Bullet ice speed", "Hosting and office comparison"],
    bestFor: "Parties, offices, and frequent cooler fills",
    whyPicked:
      "It answers the common upgrade question: whether to step up from compact bullet ice before jumping into nugget or clear ice.",
    trustNote:
      "Official Newair product image. Verify output claims, reservoir size, basket capacity, and cleaning steps on Amazon.",
    image: {
      src: "/images/countertop-ice-lab/newair-bullet-33.webp",
      alt: "Newair 33 lb Countertop Bullet Ice Maker product image",
      kind: "product"
    },
    query: "Newair 33 lb Countertop Bullet Ice Maker"
  },
  {
    name: "Newair 50 lb Countertop Bullet Ice Maker",
    category: "Hosting",
    priceHint: "Premium",
    description:
      "A high-output bullet-ice option to compare when the priority is volume for parties, outdoor meals, coolers, and busy drink stations.",
    highlights: ["50 lb output class", "High-volume bullet ice", "Hosting-first machine"],
    bestFor: "Large gatherings and frequent entertaining",
    whyPicked:
      "It gives high-volume shoppers a practical comparison before they move to undercounter machines or built-in appliances.",
    trustNote:
      "Official Newair product image. Confirm exact color, counter footprint, drain setup, and current Amazon availability.",
    image: {
      src: "/images/countertop-ice-lab/newair-bullet-50-white.webp",
      alt: "Newair 50 lb Countertop Bullet Ice Maker product image",
      kind: "product"
    },
    query: "Newair 50 lb Countertop Bullet Ice Maker"
  }
];

export function getCountertopIceLabCatalog(affiliateTag: string) {
  return countertopIceSeeds.map<ProductCardContent>((product) => ({
    ...product,
    affiliateUrl: buildAmazonSearchUrl(product.query, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-search"
    }
  }));
}
