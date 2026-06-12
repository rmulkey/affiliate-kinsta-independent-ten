import { buildAmazonSearchUrl } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type SleepFilterSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  query: string;
};

const ctaLabel = "Find on Amazon";

const sleepFilterSeeds: SleepFilterSeed[] = [
  {
    name: "Levoit Core Mini-P Air Purifier",
    category: "Small Bedrooms",
    priceHint: "$ Budget-friendly",
    description:
      "A compact purifier to compare first for nightstands, dorm rooms, small bedrooms, and spaces where a full-size unit would feel bulky.",
    highlights: ["Compact body", "Bedroom-friendly format", "Simple first-purifier search"],
    bestFor: "Dorms, guest rooms, and bedrooms under 200 sq ft",
    whyPicked:
      "The Core Mini-P is a recognizable small-room model with a product shape that fits the bedside and shelf-placement use case cleanly.",
    trustNote:
      "Official Levoit product image. Verify current filter type, room guidance, price, and availability on Amazon before buying.",
    image: {
      src: "/images/sleep-filter-lab/levoit-core-mini-p.webp",
      alt: "Levoit Core Mini-P Air Purifier product image",
      kind: "product"
    },
    query: "Levoit Core Mini-P Air Purifier"
  },
  {
    name: "Levoit Core 300-P Air Purifier",
    category: "Primary Bedrooms",
    priceHint: "$$ Mid-range",
    description:
      "A fuller-size bedroom purifier search for shoppers who want more airflow headroom than a mini unit without moving into oversized living-room models.",
    highlights: ["Popular bedroom size", "Round 360-degree format", "Filter ecosystem to compare"],
    bestFor: "Primary bedrooms and shared sleeping spaces",
    whyPicked:
      "This is the practical step-up from tiny bedside units: still bedroom-friendly, but more realistic for many primary rooms.",
    trustNote:
      "Official Levoit product image. Confirm CADR, room-size method, filter compatibility, and current Amazon listing details.",
    image: {
      src: "/images/sleep-filter-lab/levoit-core-300-p.webp",
      alt: "Levoit Core 300-P Air Purifier product image",
      kind: "product"
    },
    query: "Levoit Core 300-P Air Purifier"
  },
  {
    name: "Blueair Blue Pure 511 Air Purifier",
    category: "Small Bedrooms",
    priceHint: "$ Budget-friendly",
    description:
      "A compact Blueair model to compare for small bedrooms, tight apartments, and shoppers who want a softer-looking purifier near the bed.",
    highlights: ["Small-room model", "Minimal one-button style", "Washable pre-filter family"],
    bestFor: "Small bedrooms, dorms, and design-sensitive spaces",
    whyPicked:
      "The Blue Pure 511 gives the shortlist a product-forward small-room option with a distinct fabric pre-filter look.",
    trustNote:
      "Official Blueair product image. Check current Amazon options, filter bundle details, and return window before buying.",
    image: {
      src: "/images/sleep-filter-lab/blueair-blue-pure-511.webp",
      alt: "Blueair Blue Pure 511 Air Purifier product image",
      kind: "product"
    },
    query: "Blueair Blue Pure 511 Air Purifier"
  },
  {
    name: "Coway Airmega Mighty AP-1512HH Air Purifier",
    category: "Primary Bedrooms",
    priceHint: "$$$ Premium",
    description:
      "A square-format purifier to compare when a bedroom needs stronger airflow and the shopper wants a more established model family.",
    highlights: ["Larger-room candidate", "Flat-front design", "Filter maintenance ecosystem"],
    bestFor: "Larger bedrooms and multipurpose sleeping spaces",
    whyPicked:
      "The Airmega Mighty is the kind of established purifier shoppers often compare when they are ready to move past tiny units.",
    trustNote:
      "Official Coway product image. Verify live Amazon details, room-fit guidance, and filter availability before buying.",
    image: {
      src: "/images/sleep-filter-lab/coway-airmega-mighty-ap-1512hh.webp",
      alt: "Coway Airmega Mighty AP-1512HH Air Purifier product image",
      kind: "product"
    },
    query: "Coway Airmega Mighty AP-1512HH Air Purifier"
  },
  {
    name: "Coway Airmega 150 Air Purifier",
    category: "Allergy Season",
    priceHint: "$$ Mid-range",
    description:
      "A clean compact Coway model to compare for bedrooms where pollen, dust, and simple filter access matter more than app features.",
    highlights: ["Compact Coway format", "Visible air-quality cue", "Pull-out filter access"],
    bestFor: "Seasonal dust and pollen bedroom routines",
    whyPicked:
      "The Airmega 150 gives allergy-season shoppers a more compact Coway option with straightforward maintenance cues.",
    trustNote:
      "Official Coway product image. Air purifiers do not treat allergies; verify specs and use alongside cleaning and medical guidance as needed.",
    image: {
      src: "/images/sleep-filter-lab/coway-airmega-150.webp",
      alt: "Coway Airmega 150 Air Purifier product image",
      kind: "product"
    },
    query: "Coway Airmega 150 Air Purifier"
  },
  {
    name: "Winix C535 Air Purifier",
    category: "Pet Homes",
    priceHint: "$$ Mid-range",
    description:
      "A taller purifier to compare for pet bedrooms where pre-filter access, odor layers, and replacement-filter planning are part of the decision.",
    highlights: ["Tall room purifier", "Pet-home comparison candidate", "Filter upkeep to verify"],
    bestFor: "Bedrooms shared with dogs or cats",
    whyPicked:
      "Pet households need more than a nice-looking unit; the Winix card keeps shoppers focused on filtration stages and long-term upkeep.",
    trustNote:
      "Official Winix product image. No purifier eliminates pet allergens by itself; check filter access and replacement availability.",
    image: {
      src: "/images/sleep-filter-lab/winix-c535.webp",
      alt: "Winix C535 Air Purifier product image",
      kind: "product"
    },
    query: "Winix C535 Air Purifier"
  },
  {
    name: "Medify MA-14 Air Purifier",
    category: "Nursery",
    priceHint: "$$ Mid-range",
    description:
      "A compact Medify model to compare for nurseries, kids rooms, and small bedrooms where simple controls and quiet operation matter.",
    highlights: ["Small-room purifier", "Nursery-friendly size", "Filter subscription to compare"],
    bestFor: "Nurseries and kids bedrooms",
    whyPicked:
      "The MA-14 fits the nursery shortlist because it is compact, visually simple, and easy to compare against other small-room purifiers.",
    trustNote:
      "Official Medify product image. Follow placement, cord, and safety guidance from the manufacturer and Amazon listing.",
    image: {
      src: "/images/sleep-filter-lab/medify-ma-14-white.webp",
      alt: "Medify MA-14 white Air Purifier product image",
      kind: "product"
    },
    query: "Medify MA-14 Air Purifier"
  },
  {
    name: "Medify MA-14 Black Air Purifier",
    category: "Odor And Smoke",
    priceHint: "$$ Mid-range",
    description:
      "A darker finish option to compare for bedrooms where shoppers want carbon-layer odor support without a bright white appliance look.",
    highlights: ["Black finish", "Compact body", "Carbon-layer comparison"],
    bestFor: "Odor-sensitive small bedrooms and office corners",
    whyPicked:
      "This gives the odor-and-smoke section a real product photo with a different finish, not another generic white cylinder.",
    trustNote:
      "Official Medify product image. For wildfire smoke, follow official local guidance; a purifier is only one layer of a plan.",
    image: {
      src: "/images/sleep-filter-lab/medify-ma-14-black.webp",
      alt: "Medify MA-14 black Air Purifier product image",
      kind: "product"
    },
    query: "Medify MA-14 black air purifier"
  },
  {
    name: "Airthings Wave Mini Air Quality Monitor",
    category: "Smart Monitoring",
    priceHint: "$$ Mid-range",
    description:
      "A small monitor to compare when shoppers want a separate signal for VOCs, humidity, temperature, or mold-risk conditions before changing their purifier setup.",
    highlights: ["Monitor-first purchase", "Small sensor puck", "Good companion product"],
    bestFor: "Data-minded shoppers and smart-home bedrooms",
    whyPicked:
      "A monitor helps the page avoid guessing: shoppers can compare purifier searches with a separate air-quality signal if that fits their routine.",
    trustNote:
      "Official Airthings product image. Consumer sensors are directional tools, not lab instruments.",
    image: {
      src: "/images/sleep-filter-lab/airthings-wave-mini.webp",
      alt: "Airthings Wave Mini Air Quality Monitor product image",
      kind: "product"
    },
    query: "Airthings Wave Mini Air Quality Monitor"
  },
  {
    name: "Levoit Core 300 Replacement Filter 2-Pack",
    category: "Filter Upkeep",
    priceHint: "$ Budget-friendly",
    description:
      "A replacement-filter search for shoppers who own or are considering a Core 300-series purifier and want to budget upkeep before buying.",
    highlights: ["Model matching required", "Repeat-purchase check", "Useful ownership-cost signal"],
    bestFor: "Core 300-P and Core 300S-P filter planning",
    whyPicked:
      "Replacement filters are where long-term purifier ownership gets real. This keeps filter cost visible before the purifier lands in the cart.",
    trustNote:
      "Official Levoit product image. Match the exact purifier model before ordering replacement filters.",
    image: {
      src: "/images/sleep-filter-lab/levoit-core-300-filter-2-pack.webp",
      alt: "Levoit Core 300 Replacement Filter 2-Pack product image",
      kind: "product"
    },
    query: "Levoit Core 300 Replacement Filter 2-Pack"
  },
  {
    name: "Blueair Blue Pure 511 Particle + Carbon Filter",
    category: "Filter Upkeep",
    priceHint: "$ Budget-friendly",
    description:
      "A Blue Pure 511 filter search for shoppers who want to understand recurring filter replacement before choosing the purifier.",
    highlights: ["Compatible filter check", "Carbon layer comparison", "Ownership-cost reminder"],
    bestFor: "Blue Pure 511 maintenance planning",
    whyPicked:
      "The filter card makes the page more useful because the best purifier choice depends partly on how painless the filter routine will be.",
    trustNote:
      "Official Blueair product image. Confirm compatibility with the exact model name inside the purifier.",
    image: {
      src: "/images/sleep-filter-lab/blueair-blue-pure-511-filter.webp",
      alt: "Blueair Blue Pure 511 Particle + Carbon Filter product image",
      kind: "product"
    },
    query: "Blueair Blue Pure 511 Particle Carbon Filter"
  },
  {
    name: "Winix Filter H 116130 Replacement Filter",
    category: "Filter Upkeep",
    priceHint: "$$ Mid-range",
    description:
      "A Winix replacement-filter search to compare if you are evaluating compatible Winix purifiers and want the annual upkeep picture.",
    highlights: ["Filter set", "Model compatibility check", "Long-term upkeep focus"],
    bestFor: "Winix 5500-2 and AM80 filter planning",
    whyPicked:
      "This is a useful comparison point for shoppers who might buy a Winix purifier and need to understand the replacement-filter ecosystem.",
    trustNote:
      "Official Winix product image. Confirm model compatibility and current seller details before buying.",
    image: {
      src: "/images/sleep-filter-lab/winix-filter-h.webp",
      alt: "Winix Filter H 116130 Replacement Filter product image",
      kind: "product"
    },
    query: "Winix Filter H 116130 Replacement Filter"
  }
];

export function getSleepFilterLabCatalog(affiliateTag: string) {
  return sleepFilterSeeds.map<ProductCardContent>((product) => ({
    ...product,
    affiliateUrl: buildAmazonSearchUrl(product.query, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-search"
    }
  }));
}
