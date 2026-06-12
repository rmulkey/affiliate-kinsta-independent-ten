import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type HomeFitnessSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "View on Amazon";

const homeFitnessSeeds: HomeFitnessSeed[] = [
  {
    name: "UREVO Smart Walking Pad",
    category: "Desk Cardio",
    priceHint: "$ Mid-range",
    description:
      "The compact cardio pick for people who want more steps during work hours without dedicating a whole room to a treadmill.",
    highlights: ["Under-desk walking pad", "Quiet operation", "Small-space friendly"],
    bestFor: "Daily steps while you work",
    whyPicked:
      "Walking pads are still one of the clearest home-fitness trends, and this one fits the exact apartment-and-home-office use case people keep shopping for.",
    trustNote: "Saved from the exact Amazon product page using the real PDP image.",
    image: {
      src: "/images/home-fitness/urevo-smart-walking-pad.jpg",
      alt: "UREVO Smart Walking Pad treadmill",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B097BKS6Z9"
  },
  {
    name: "Sunny Health & Fitness Mini Stepper No. 012-S",
    category: "Desk Cardio",
    priceHint: "$ Budget-friendly",
    description:
      "A classic compact stepper that makes sense if you want a simple cardio tool that can slide into a corner when you are done.",
    highlights: ["Mini step machine", "Resistance bands included", "Compact footprint"],
    bestFor: "Quick low-impact cardio at home",
    whyPicked:
      "Steppers keep winning because they feel less intimidating than bigger machines and work well for short movement breaks.",
    trustNote: "Real Amazon product page and real full-size commerce image.",
    image: {
      src: "/images/home-fitness/sunny-mini-stepper.jpg",
      alt: "Sunny Health and Fitness Mini Stepper machine",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0016BQFSS"
  },
  {
    name: "ZELUS Weighted Vest",
    category: "Desk Cardio",
    priceHint: "$ Mid-range",
    description:
      "An easy upgrade for walks, stair sessions, and bodyweight work when you want more challenge without buying bulkier equipment.",
    highlights: ["Weighted vest", "Reflective stripe", "Great for walks and circuits"],
    bestFor: "Weighted walks and faster conditioning",
    whyPicked:
      "Weighted vests have serious Amazon traction right now because they make ordinary walks and simple circuits feel more useful.",
    trustNote: "Localized from the exact Amazon PDP for a clean, direct product shot.",
    image: {
      src: "/images/home-fitness/zelus-weighted-vest.jpg",
      alt: "ZELUS weighted vest",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07518RBH2"
  },
  {
    name: "Speed Jump Rope with Ball Bearings",
    category: "Desk Cardio",
    priceHint: "$ Budget-friendly",
    description:
      "A simple cardio add-on for people who want faster, sweatier training without making room for another machine.",
    highlights: ["Ball-bearing cable rope", "Adjustable length", "Compact conditioning tool"],
    bestFor: "Quick cardio bursts and conditioning",
    whyPicked:
      "Jump rope is still one of the most space-efficient conditioning buys you can make, and it rounds out the cardio side of the catalog well.",
    trustNote: "Localized from the exact Amazon PDP with a direct product-page link.",
    image: {
      src: "/images/home-fitness/speed-jump-rope.jpg",
      alt: "Adjustable speed jump rope with foam handles",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09DF9NWC7"
  },
  {
    name: "POWERBLOCK EXP Adjustable Dumbbells",
    category: "Strength Setup",
    priceHint: "$ Premium",
    description:
      "A stronger long-game dumbbell pick if you want real resistance progression without collecting a full rack.",
    highlights: ["Adjustable dumbbells", "Expandable system", "Space-saving strength setup"],
    bestFor: "Serious strength in a tighter footprint",
    whyPicked:
      "Adjustable dumbbells are still one of the smartest home-gym buys, and this set keeps the setup compact while covering a lot of real training ground.",
    trustNote: "Exact Amazon product-page link with the real PDP image.",
    image: {
      src: "/images/home-fitness/powerblock-exp-dumbbells.jpg",
      alt: "POWERBLOCK EXP adjustable dumbbells",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07BDRWPXD"
  },
  {
    name: "FLYBIRD WB5 Adjustable Weight Bench",
    category: "Strength Setup",
    priceHint: "$ Mid-range",
    description:
      "The bench pick for anyone trying to make dumbbells and bodyweight work feel more like a real training setup at home.",
    highlights: ["Foldable bench", "Incline and decline positions", "Home-gym staple"],
    bestFor: "Making a small strength corner feel complete",
    whyPicked:
      "A bench changes how much you can do with the gear you already own, and this one fits the compact-home-gym mindset well.",
    trustNote: "Real image captured from the exact Amazon listing.",
    image: {
      src: "/images/home-fitness/flybird-wb5-bench.jpg",
      alt: "FLYBIRD WB5 adjustable weight bench",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07DNYSJ8W"
  },
  {
    name: "Amazon Basics Adjustable Dumbbell Hand Weight Set",
    category: "Strength Setup",
    priceHint: "$ Budget-friendly",
    description:
      "A more affordable adjustable-weight option for beginners who want a straightforward starter setup without a big price jump.",
    highlights: ["Storage case included", "Budget starter option", "Adjustable hand weights"],
    bestFor: "First home strength setup",
    whyPicked:
      "Not everyone needs the premium dumbbell route on day one, and this gives the site a more realistic beginner entry point.",
    trustNote: "Direct Amazon PDP and a full-size product image from the live listing.",
    image: {
      src: "/images/home-fitness/amazon-basics-adjustable-dumbbells.jpg",
      alt: "Amazon Basics adjustable dumbbell hand weight set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B071WSFSGC"
  },
  {
    name: "Amazon Basics Neoprene Dumbbell Hand Weights with Stand",
    category: "Strength Setup",
    priceHint: "$ Mid-range",
    description:
      "A tidy lighter-weight set for beginner circuits, walking add-ons, and anyone building out a softer home strength corner.",
    highlights: ["Three neoprene dumbbell pairs", "Compact stand included", "Great for lighter full-body work"],
    bestFor: "Beginner circuits and lighter lifting days",
    whyPicked:
      "This gives the strength section a more approachable option for people who are not ready for adjustable heavyweights.",
    trustNote: "Exact Amazon product-page link with a real localized image.",
    image: {
      src: "/images/home-fitness/amazon-basics-neoprene-dumbbell-set.jpg",
      alt: "Amazon Basics neoprene dumbbell hand weights with stand",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01LR5SM74"
  },
  {
    name: "Fit Simplify Pull Up Assist Resistance Bands",
    category: "Strength Setup",
    priceHint: "$ Mid-range",
    description:
      "A stronger-resistance band set for assisted pull-ups, mobility, and heavier bodyweight or strength support work.",
    highlights: ["Pull-up assist bands", "Heavier resistance range", "Mobility and strength support"],
    bestFor: "Pull-up help and heavier band resistance",
    whyPicked:
      "This gives the catalog a more advanced band option for people who want something beyond warmups and glute activation.",
    trustNote: "Exact Amazon product page with a real saved product image.",
    image: {
      src: "/images/home-fitness/fit-simplify-pull-up-assist-bands.jpg",
      alt: "Fit Simplify pull up assist resistance bands",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07CZVWKW6"
  },
  {
    name: "PowerBlock Adjustable Kettlebell 18-35 lb",
    category: "Strength Setup",
    priceHint: "$ Premium",
    description:
      "A smart kettlebell option for people who want swings, carries, and full-body strength work without storing multiple bells.",
    highlights: ["Adjustable kettlebell", "18 to 35 pound range", "Space-saving strength tool"],
    bestFor: "Compact kettlebell training at home",
    whyPicked:
      "Kettlebells remain one of the strongest one-tool workout options, and an adjustable version fits the small-space promise of the brand perfectly.",
    trustNote: "Real Amazon product page and full-size PDP image.",
    image: {
      src: "/images/home-fitness/powerblock-adjustable-kettlebell.jpg",
      alt: "PowerBlock adjustable kettlebell",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CQ15JBBN"
  },
  {
    name: "Fit Simplify Resistance Loop Exercise Bands",
    category: "Small-Space Staples",
    priceHint: "$ Budget-friendly",
    description:
      "The easiest low-cost home-fitness add if you want glute work, warmups, travel workouts, or extra resistance without taking up space.",
    highlights: ["Set of 5 loop bands", "Travel-friendly", "Beginner to intermediate friendly"],
    bestFor: "Portable workouts and glute training",
    whyPicked:
      "Resistance bands keep selling because they are cheap, useful, easy to store, and honestly hard to outgrow completely.",
    trustNote: "Real Amazon product page with a localized commerce image.",
    image: {
      src: "/images/home-fitness/fit-simplify-resistance-bands.jpg",
      alt: "Fit Simplify resistance loop exercise bands",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01AVDVHTI"
  },
  {
    name: "Fit Simplify Resistance Tube Bands 12 Piece Set",
    category: "Small-Space Staples",
    priceHint: "$ Budget-friendly",
    description:
      "A fuller band kit for people who want more than loop bands and need handles, anchors, and more exercise variety at home.",
    highlights: ["12-piece tube band set", "Handles and anchors included", "Full-body training range"],
    bestFor: "Portable full-body resistance workouts",
    whyPicked:
      "Loop bands are great, but this style opens up more upper-body and door-anchor work, which makes the home setup more versatile.",
    trustNote: "Real Amazon PDP image and a direct product-page link.",
    image: {
      src: "/images/home-fitness/fit-simplify-resistance-tube-bands.jpg",
      alt: "Fit Simplify resistance tube bands set with handles",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01KS6DZ34"
  },
  {
    name: "Gaiam Essentials Thick Yoga Mat",
    category: "Small-Space Staples",
    priceHint: "$ Budget-friendly",
    description:
      "A thicker mat that works well for stretching, mat workouts, light Pilates, and anyone who wants more floor comfort at home.",
    highlights: ["Thicker cushioning", "Carrier strap included", "Great for floor work"],
    bestFor: "Floor workouts, mobility, and stretching",
    whyPicked:
      "A good mat is one of the lowest-friction ways to make home workouts feel more inviting, and this one already has strong Amazon momentum.",
    trustNote: "Exact Amazon product-page link and the real PDP image.",
    image: {
      src: "/images/home-fitness/gaiam-thick-yoga-mat.jpg",
      alt: "Gaiam Essentials thick yoga mat",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07H9PZ6MH"
  },
  {
    name: "Amazon Basics 1/2 Inch Extra Thick Exercise Yoga Mat",
    category: "Small-Space Staples",
    priceHint: "$ Budget-friendly",
    description:
      "A softer, extra-thick mat option for people who want more cushion for mobility, stretching, and lighter floor sessions.",
    highlights: ["Extra-thick foam mat", "Carrying strap included", "Beginner-friendly comfort"],
    bestFor: "More cushion for floor work",
    whyPicked:
      "Some shoppers want even more padding than a standard fitness mat, and this is a clear Amazon-friendly answer to that need.",
    trustNote: "Saved from the exact Amazon listing using the primary PDP image.",
    image: {
      src: "/images/home-fitness/amazon-basics-extra-thick-yoga-mat.jpg",
      alt: "Amazon Basics extra thick exercise yoga mat",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01LP0U5X0"
  },
  {
    name: "Gaiam Premium Dry-Grip Exercise Mat",
    category: "Small-Space Staples",
    priceHint: "$ Mid-range",
    description:
      "A more premium mat pick for yoga, floor workouts, and sweaty sessions where grip matters more than extra softness.",
    highlights: ["Dry-grip surface", "5mm thickness", "Non-slip feel for hotter sessions"],
    bestFor: "Yoga and floor sessions with more grip",
    whyPicked:
      "This gives the lineup a grip-first mat option instead of only cushioned mats, which helps different workout styles shop more clearly.",
    trustNote: "Localized from the exact Amazon product page with the real PDP image.",
    image: {
      src: "/images/home-fitness/gaiam-dry-grip-yoga-mat.jpg",
      alt: "Gaiam premium dry-grip exercise mat",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00EANPGRA"
  },
  {
    name: "Gaiam Yoga Block",
    category: "Small-Space Staples",
    priceHint: "$ Budget-friendly",
    description:
      "A small support tool that helps stretching, yoga, and mobility work feel more comfortable and more scalable.",
    highlights: ["Supportive EVA foam", "Non-slip surface", "Useful for balance and mobility"],
    bestFor: "Mobility work and yoga support",
    whyPicked:
      "A yoga block is tiny, cheap, and surprisingly useful, which makes it a strong fit for a small-space catalog.",
    trustNote: "Saved from the exact Amazon PDP image and linked to the direct product page.",
    image: {
      src: "/images/home-fitness/gaiam-yoga-block.jpg",
      alt: "Gaiam yoga block",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B075W63K67"
  },
  {
    name: "Vinsguir Ab Roller Wheel",
    category: "Recovery & Core",
    priceHint: "$ Budget-friendly",
    description:
      "A compact core tool that makes sense if you want something small, inexpensive, and actually challenging enough to matter.",
    highlights: ["Ab roller wheel", "Knee pad included", "Core-focused tool"],
    bestFor: "Core work without bulky equipment",
    whyPicked:
      "Ab rollers are old-school for a reason. They stay relevant because they deliver hard work from a tiny footprint.",
    trustNote: "Real product image from the exact Amazon PDP.",
    image: {
      src: "/images/home-fitness/vinsguir-ab-roller.jpg",
      alt: "Vinsguir ab roller wheel",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07RKW5H68"
  },
  {
    name: "Perfect Fitness Ab Carver Pro Roller Wheel",
    category: "Recovery & Core",
    priceHint: "$ Mid-range",
    description:
      "A more premium ab wheel pick for people who want core work that feels tougher and more guided than a basic roller.",
    highlights: ["Built-in spring resistance", "Wider wheel design", "Home core training staple"],
    bestFor: "Harder core sessions at home",
    whyPicked:
      "This is one of the more recognizable step-up ab tools on Amazon and gives the catalog a stronger premium core option.",
    trustNote: "Real Amazon product page and saved PDP image.",
    image: {
      src: "/images/home-fitness/perfect-fitness-ab-carver-pro.jpg",
      alt: "Perfect Fitness Ab Carver Pro roller wheel",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00B1N0R6C"
  },
  {
    name: "Amazon Basics High-Density Foam Roller",
    category: "Recovery & Core",
    priceHint: "$ Budget-friendly",
    description:
      "A simple recovery staple for people who want to move better, warm up faster, or take a little of the post-workout stiffness down.",
    highlights: ["High-density foam roller", "Recovery basic", "Easy add-on for mobility work"],
    bestFor: "Warmups, cooldowns, and mobility days",
    whyPicked:
      "Foam rollers are still one of the easiest useful recovery buys, especially when the goal is keeping the routine consistent.",
    trustNote: "Saved from the exact Amazon listing using the real product image.",
    image: {
      src: "/images/home-fitness/amazon-basics-foam-roller.jpg",
      alt: "Amazon Basics high-density foam roller",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00XM2MXK8"
  },
  {
    name: "TOLOCO Massage Gun",
    category: "Recovery & Core",
    priceHint: "$ Budget-friendly",
    description:
      "The budget recovery-tool pick if you want easier muscle relief after lifting, walking, or tighter all-day desk posture.",
    highlights: ["Percussion massager", "Multiple massage heads", "Popular Amazon recovery tool"],
    bestFor: "Post-workout recovery and sore spots",
    whyPicked:
      "Massage guns are still one of the most Amazon-native recovery categories, and this is the kind of affordable pick people actually try.",
    trustNote: "Real Amazon PDP image paired with a direct product-page link.",
    image: {
      src: "/images/home-fitness/toloco-massage-gun.jpg",
      alt: "TOLOCO massage gun",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B083L8RNJR"
  },
  {
    name: "Tiger Tail Roadster 11 Massage Stick",
    category: "Recovery & Core",
    priceHint: "$ Mid-range",
    description:
      "A handheld recovery tool that makes sense if you want something more targeted and travel-friendly than a foam roller.",
    highlights: ["Portable massage stick", "Travel-friendly recovery", "Made in USA"],
    bestFor: "Targeted post-workout muscle relief",
    whyPicked:
      "Recovery is not only foam rollers and massage guns, and this gives the catalog a more precise recovery option that is easy to keep nearby.",
    trustNote: "Real Amazon product page with a saved commerce image.",
    image: {
      src: "/images/home-fitness/tiger-tail-roadster-massage-stick.jpg",
      alt: "Tiger Tail Roadster 11 massage stick",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07G7D667M"
  }
];

export function getHomeFitnessCatalog(affiliateTag: string): ProductCardContent[] {
  return homeFitnessSeeds.map((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}
