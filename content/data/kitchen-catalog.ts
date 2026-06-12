import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type KitchenSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const kitchenSeeds: KitchenSeed[] = [
  {
    name: "Alpha Grillers Meat Thermometer Digital",
    category: "Cook With Precision",
    priceHint: "$ Budget-friendly",
    description:
      "A fast-read thermometer that makes chicken, steak, salmon, and air-fryer dinners feel less like guesswork.",
    highlights: ["Instant read", "Backlit display", "Weeknight-friendly"],
    bestFor: "Checking doneness fast",
    whyPicked:
      "This stays near the top because it solves a real kitchen problem in about two seconds and is easy to trust.",
    trustNote: "Saved from the exact Amazon product page with the real PDP image.",
    image: {
      src: "/images/kitchen/alpha-grillers-meat-thermometer.jpg",
      alt: "Alpha Grillers digital meat thermometer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Alpha-Grillers-Thermometer-Instant-Professional/dp/B00S93EQUK"
  },
  {
    name: "TempPro TP19H Digital Meat Thermometer",
    category: "Cook With Precision",
    priceHint: "$ Mid-range",
    description:
      "A slightly more upgraded instant-read pick with a cleaner grip and a faster, more premium feel in hand.",
    highlights: ["One-second read", "Motion-sensing wake", "Waterproof body"],
    bestFor: "Frequent cooks who want an upgrade",
    whyPicked:
      "It gives the catalog a stronger better-tool option without jumping into expensive pro gear.",
    trustNote: "Real Amazon product image tied to the exact PDP.",
    image: {
      src: "/images/kitchen/temppro-tp19h-thermometer.jpg",
      alt: "TempPro TP19H digital meat thermometer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/TP19H-Digital-Meat-Thermometer-Cooking/dp/B07XXSYLL8"
  },
  {
    name: "Etekcity Food Kitchen Scale",
    category: "Cook With Precision",
    priceHint: "$ Budget-friendly",
    description:
      "The kind of food scale that works for meal prep, baking, protein tracking, and coffee without taking over the counter.",
    highlights: ["Grams and ounces", "Stainless steel top", "Easy meal-prep staple"],
    bestFor: "Meal prep and portioning",
    whyPicked:
      "Food scales only convert when they feel obvious and useful. This is one of the Amazon names people actually keep out.",
    trustNote: "Localized from the exact Amazon PDP for a crisp real product shot.",
    image: {
      src: "/images/kitchen/etekcity-kitchen-scale.jpg",
      alt: "Etekcity digital kitchen scale",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Etekcity-Multifunction-Stainless-Batteries-Included/dp/B0113UZJE2"
  },
  {
    name: "Amazon Basics Digital Kitchen Scale",
    category: "Cook With Precision",
    priceHint: "$ Budget-friendly",
    description:
      "A simple scale pick when you want something clean, inexpensive, and easy to leave in the drawer until you need it.",
    highlights: ["Tare function", "Multiple units", "Simple layout"],
    bestFor: "Low-fuss daily measuring",
    whyPicked:
      "This is the no-drama option in the mix and works well for shoppers who want utility over extra features.",
    trustNote: "Exact Amazon product page with the full-size commerce image.",
    image: {
      src: "/images/kitchen/amazon-basics-kitchen-scale.jpg",
      alt: "Amazon Basics digital kitchen scale",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/AmazonBasics-Stainless-Digital-Batteries-Included/dp/B06X9NQ8GX"
  },
  {
    name: "OXO Good Grips 2 Cup Adjustable Measuring Cup",
    category: "Cook With Precision",
    priceHint: "$ Mid-range",
    description:
      "A cleaner measuring pick for nut butters, yogurt, dressings, and sticky ingredients that usually make a measuring cup annoying.",
    highlights: ["Push-up base", "Easy to read", "Great for sticky ingredients"],
    bestFor: "Meal prep sauces and baking add-ins",
    whyPicked:
      "It solves one of those small repeat kitchen frustrations so well that it feels smarter than buying another basic measuring cup.",
    trustNote: "Localized from the exact Amazon product page for a real crisp PDP image.",
    image: {
      src: "/images/kitchen/oxo-adjustable-measuring-cup.jpg",
      alt: "OXO Good Grips 2 cup adjustable measuring cup",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Good-Grips-Adjustable-Measuring/dp/B00A2KDAIW"
  },
  {
    name: "TempPro TM01 Kitchen Timer",
    category: "Cook With Precision",
    priceHint: "$ Budget-friendly",
    description:
      "A loud, simple timer for baking, air-fryer batches, and meal prep when you want one glance and one click instead of grabbing your phone again.",
    highlights: ["Big display", "Loud alarm", "Magnetic back"],
    bestFor: "Air fryer rounds and oven reminders",
    whyPicked:
      "A real timer still beats using your phone when your hands are messy and you want the cue to stay in the kitchen.",
    trustNote: "Real Amazon product photo tied to the exact timer listing.",
    image: {
      src: "/images/kitchen/temppro-kitchen-timer.jpg",
      alt: "TempPro TM01 digital kitchen timer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/TM01-Digital-Kitchen-Timer-Backs/dp/B07RBNSJNR"
  },
  {
    name: "TrendPlain Glass Olive Oil Sprayer",
    category: "Prep Faster",
    priceHint: "$ Budget-friendly",
    description:
      "A cleaner way to dress salads, coat veggies, and air-fry with better control than just pouring oil straight from the bottle.",
    highlights: ["Spray and pour in one", "Glass body", "Very social-friendly"],
    bestFor: "Air fryer and salad routines",
    whyPicked:
      "Oil sprayers do well because people can picture using them instantly. This one fits the exact air-fryer meal-prep lane.",
    trustNote: "Real product photo and direct Amazon product-page link.",
    image: {
      src: "/images/kitchen/trendplain-oil-sprayer.jpg",
      alt: "TrendPlain glass olive oil sprayer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/TrendPlain-Sprayer-Cooking-Dispenser-Accessories/dp/B0CJF94M8J"
  },
  {
    name: "OXO Good Grips Glass Salad Spinner",
    category: "Prep Faster",
    priceHint: "$ Premium",
    description:
      "A polished salad spinner that doubles as a wash-and-serve setup for lettuce, herbs, berries, and prepped greens.",
    highlights: ["Glass bowl", "Easy pump", "Counter-worthy look"],
    bestFor: "Washed greens and better salad prep",
    whyPicked:
      "This is the elevated pick that makes the page feel more premium without turning gimmicky.",
    trustNote: "Localized from the exact Amazon PDP image.",
    image: {
      src: "/images/kitchen/oxo-glass-salad-spinner.jpg",
      alt: "OXO Good Grips glass salad spinner",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Grips-Glass-Salad-Spinner/dp/B09KG9Q57N"
  },
  {
    name: "Fullstar XL Vegetable Chopper & Mandoline Slicer",
    category: "Prep Faster",
    priceHint: "$ Premium",
    description:
      "The high-utility chop station pick for onions, peppers, cucumbers, and meal-prep bowls when speed matters.",
    highlights: ["Mandoline plus dicer", "Catch tray", "Batch-prep friendly"],
    bestFor: "Fast veggie prep",
    whyPicked:
      "This kind of product wins on Amazon when it looks like it will save ten annoying minutes every single day.",
    trustNote: "Real Amazon product shot pulled from the exact listing.",
    image: {
      src: "/images/kitchen/fullstar-xl-chopper.jpg",
      alt: "Fullstar XL vegetable chopper and mandoline slicer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Fullstar-Chopper-Spiralizer-Vegetable-Container/dp/B07VG4S38C"
  },
  {
    name: "OXO Good Grips Stainless Steel Multi-Purpose Scraper & Chopper",
    category: "Prep Faster",
    priceHint: "$ Budget-friendly",
    description:
      "A bench scraper that helps portion dough, scoop chopped vegetables, and clean the board faster when prep gets messy.",
    highlights: ["Stainless steel blade", "Measurement marks", "Board cleanup helper"],
    bestFor: "Transferring chopped ingredients fast",
    whyPicked:
      "It is one of those quiet kitchen tools that speeds up prep in three different ways without asking for any learning curve.",
    trustNote: "Saved from the exact Amazon product page with the real PDP image.",
    image: {
      src: "/images/kitchen/oxo-scraper-chopper.jpg",
      alt: "OXO Good Grips stainless steel scraper and chopper",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Good-Grips-Multi-purpose-Stainless/dp/B00004OCNJ"
  },
  {
    name: "KitchenAid All Purpose Kitchen Shears",
    category: "Prep Faster",
    priceHint: "$ Budget-friendly",
    description:
      "A kitchen-shears upgrade that handles herbs, chicken packaging, trimming, and random weeknight prep with less friction.",
    highlights: ["Protective sheath", "Dishwasher safe", "Soft-grip handle"],
    bestFor: "Everyday kitchen cutting",
    whyPicked:
      "The best kitchen tools are often the ones that get used three times a day, and shears absolutely belong in that group.",
    trustNote: "Saved from the exact Amazon page using the real PDP image.",
    image: {
      src: "/images/kitchen/kitchenaid-kitchen-shears.jpg",
      alt: "KitchenAid all-purpose kitchen shears",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/KitchenAid-Purpose-Kitchen-Stainless-Dishwasher/dp/B0G7CT3LXS"
  },
  {
    name: "OXO Good Grips Stainless Steel Garlic Press",
    category: "Prep Faster",
    priceHint: "$ Mid-range",
    description:
      "A solid garlic press for people who cook often enough to want less chopping and less cleanup around sticky garlic.",
    highlights: ["Stainless steel", "Comfortable grip", "Fast garlic prep"],
    bestFor: "Quick garlic-heavy cooking",
    whyPicked:
      "Garlic is one of those tiny friction points that adds up. This makes the benefit obvious fast.",
    trustNote: "Real product image and exact Amazon destination.",
    image: {
      src: "/images/kitchen/oxo-garlic-press.jpg",
      alt: "OXO Good Grips stainless steel garlic press",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Good-Grips-Stainless-Press/dp/B09QBDRCRK"
  },
  {
    name: "OXO Good Grips 3-in-1 Avocado Slicer",
    category: "Prep Faster",
    priceHint: "$ Budget-friendly",
    description:
      "One of those small tools that feels unnecessary until you start making toast, bowls, and quick lunches all week.",
    highlights: ["Split, pit, slice", "Safe plastic blade", "Tiny drawer footprint"],
    bestFor: "Quick lunches and snack plates",
    whyPicked:
      "This is a smart social-friendly add because the use case is instantly clear and the price stays easy.",
    trustNote: "Localized from the exact Amazon product-page image.",
    image: {
      src: "/images/kitchen/oxo-avocado-slicer.jpg",
      alt: "OXO Good Grips 3-in-1 avocado slicer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Good-Grips-3-1-Avocado/dp/B0088LR5EW"
  },
  {
    name: "OXO Good Grips Swivel Peeler",
    category: "Prep Faster",
    priceHint: "$ Budget-friendly",
    description:
      "A simple peeler upgrade for potatoes, cucumbers, apples, and carrot prep that feels much smoother than the cheap drawer standby.",
    highlights: ["Sharp stainless blade", "Soft non-slip handle", "Easy everyday reach"],
    bestFor: "Everyday produce prep",
    whyPicked:
      "Peelers only feel exciting when the old one is bad. This one earns its spot because it makes a common task noticeably easier.",
    trustNote: "Exact Amazon product page with the real product photo.",
    image: {
      src: "/images/kitchen/oxo-swivel-peeler.jpg",
      alt: "OXO Good Grips swivel peeler",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Good-Grips-Swivel-Peeler/dp/B00004OCIP"
  },
  {
    name: "Joseph Joseph Nest Chop Cutting Board Set",
    category: "Prep Faster",
    priceHint: "$ Premium",
    description:
      "A compact cutting-board set that nests neatly and gives you a cleaner prep flow for fruit, vegetables, and fast lunches.",
    highlights: ["Three nesting boards", "Knife-friendly surface", "Easy small-space storage"],
    bestFor: "Small kitchens and tidy prep zones",
    whyPicked:
      "This brings in an actually-useful storage-smart prep tool instead of another gimmick, and the nested design photographs really well too.",
    trustNote: "Localized from the exact Amazon PDP image and linked to the direct listing.",
    image: {
      src: "/images/kitchen/joseph-joseph-nest-chop.jpg",
      alt: "Joseph Joseph Nest Chop cutting board set",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Joseph-60147-Chopping-Boards-Multicolour/dp/B01I6UGK4K"
  },
  {
    name: "Air Fryer Paper Liners, 125 Pcs",
    category: "Air Fryer & Cleanup",
    priceHint: "$ Budget-friendly",
    description:
      "Disposable liners for the people who love the air fryer but hate scraping oil and bits out of the basket after every meal.",
    highlights: ["125-count pack", "Non-stick cleanup help", "Easy weeknight add-on"],
    bestFor: "Faster basket cleanup",
    whyPicked:
      "Air fryer accessories keep trending because cleanup is where enthusiasm drops off. This solves that in the cheapest possible way.",
    trustNote: "Real commerce image and direct Amazon product-page link.",
    image: {
      src: "/images/kitchen/air-fryer-paper-liners.jpg",
      alt: "Air fryer paper liners pack",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Air-Fryer-Paper-Liners-Parchment/dp/B0B6PLG6G2"
  },
  {
    name: "Kitchen Gizmo Snap N' Strain",
    category: "Air Fryer & Cleanup",
    priceHint: "$ Budget-friendly",
    description:
      "A clip-on strainer that saves sink space and makes pasta nights easier when you do not want to drag out a full colander.",
    highlights: ["Clip-on design", "Heat resistant", "Small-space friendly"],
    bestFor: "Smaller kitchens and faster draining",
    whyPicked:
      "This is the kind of gadget that does well on social because the use case is visual, quick, and actually practical.",
    trustNote: "Saved from the exact Amazon listing with the real PDP image.",
    image: {
      src: "/images/kitchen/kitchen-gizmo-snap-n-strain.jpg",
      alt: "Kitchen Gizmo Snap N' Strain clip-on strainer",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Kitchen-Gizmo-Snap-Strainer-Silicone/dp/B01MZ14LJV"
  },
  {
    name: "Meat Chopper Hamburger Grinder",
    category: "Air Fryer & Cleanup",
    priceHint: "$ Budget-friendly",
    description:
      "A simple ground-beef and turkey tool that breaks up meat faster and keeps spatula cleanup from getting weird.",
    highlights: ["Heat resistant", "Ground meat helper", "Meal-prep useful"],
    bestFor: "Taco meat, turkey bowls, and batch cooking",
    whyPicked:
      "This is not flashy, but it is exactly the kind of tool that earns repeat use when you cook the same basics every week.",
    trustNote: "Real Amazon product-page image matched to the exact link.",
    image: {
      src: "/images/kitchen/meat-chopper-hamburger-grinder.jpg",
      alt: "Black meat chopper and hamburger grinder",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Meat-Chopper-Hamburger-Resistant-Tenderizers-Black/dp/B08JKXDFQ9"
  },
  {
    name: "Bentgo Prep - 20-Piece 3-Compartment Meal Prep Containers",
    category: "Meal Prep Storage",
    priceHint: "$ Budget-friendly",
    description:
      "A solid starter set for portioning lunches, storing batch-cooked proteins, and making weekday meals feel easier to grab and go.",
    highlights: ["20-piece set", "Three compartments", "Microwave and dishwasher safe"],
    bestFor: "Weekly lunch prep",
    whyPicked:
      "Meal prep containers convert because the use case is obvious. This set is simple, stackable, and easy to imagine using right away.",
    trustNote: "Real Amazon PDP image and direct product-page link only.",
    image: {
      src: "/images/kitchen/bentgo-prep-containers.jpg",
      alt: "Bentgo Prep 20-piece meal prep container set",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Bentgo-Compartment-Containers-Prep-20-Piece/dp/B0CV4HHTBP"
  },
  {
    name: "Rubbermaid Brilliance Food Storage Containers, Set of 5",
    category: "Meal Prep Storage",
    priceHint: "$ Premium",
    description:
      "Clear, sturdy storage containers that feel good for leftovers, chopped produce, and fridge organization without looking flimsy after a week.",
    highlights: ["Leak-resistant lids", "Crystal-clear sides", "Stacks neatly"],
    bestFor: "Leftovers and tidy fridge storage",
    whyPicked:
      "These keep showing up because they make a messy fridge feel more organized fast and look better than bargain storage sets.",
    trustNote: "Saved from the exact Amazon listing with the real full-size product image.",
    image: {
      src: "/images/kitchen/rubbermaid-brilliance-set.jpg",
      alt: "Rubbermaid Brilliance food storage container set",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Rubbermaid-Brilliance-Containers-BPA-Free-Dishwasher/dp/B01JCNEIC6"
  },
  {
    name: "Stasher Silicone Reusable Food Storage Bags, 4-Pack",
    category: "Meal Prep Storage",
    priceHint: "$ Premium",
    description:
      "A reusable bag set for snack prep, chopped ingredients, freezer organization, and a cleaner low-waste meal-prep routine.",
    highlights: ["Reusable silicone", "Freezer and microwave safe", "Good for snacks and prep"],
    bestFor: "Snack prep and lower-waste storage",
    whyPicked:
      "They bring a more design-forward option into the storage category and still feel practical instead of performative.",
    trustNote: "Localized from the exact Amazon PDP image and linked straight to the product page.",
    image: {
      src: "/images/kitchen/stasher-food-storage-bags.jpg",
      alt: "Stasher reusable silicone food storage bags",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Stasher-Reusable-Silicone-Bowl-Clear/dp/B087XBR564"
  },
  {
    name: "OXO Good Grips 3-Piece Stainless-Steel Mixing Bowl Set",
    category: "Meal Prep Storage",
    priceHint: "$ Premium",
    description:
      "A useful bowl set for mixing marinades, washing produce, tossing salads, and keeping prep organized across a whole cooking session.",
    highlights: ["Three bowl sizes", "Non-slip bottoms", "Stainless steel finish"],
    bestFor: "Multi-step prep sessions",
    whyPicked:
      "A good bowl set quietly fixes a lot of kitchen chaos, and this one feels durable enough to justify the space.",
    trustNote: "Real Amazon product photo from the exact listing.",
    image: {
      src: "/images/kitchen/oxo-mixing-bowl-set.jpg",
      alt: "OXO Good Grips stainless steel mixing bowl set",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/OXO-Stainless-Non-Slip-Nesting-3-Piece/dp/B001715PN8"
  },
  {
    name: "GORILLA GRIP Smooth Edge Manual Can Opener",
    category: "Counter Helpers",
    priceHint: "$ Budget-friendly",
    description:
      "A better everyday can opener when you want an easy turn and less annoyance around sharp edges and cheap handles.",
    highlights: ["Smooth edge", "Soft handle", "Easy-turn knob"],
    bestFor: "Daily pantry cooking",
    whyPicked:
      "It is a classic utility tool, but the comfort upgrade is exactly why this one keeps staying relevant.",
    trustNote: "Exact Amazon product page with the real product photo.",
    image: {
      src: "/images/kitchen/gorilla-grip-can-opener.jpg",
      alt: "Gorilla Grip smooth edge manual can opener",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/GORILLA-GRIP-Stainless-Multifunctional-Oversized/dp/B09NXMP557"
  },
  {
    name: "Kitchen Mama Auto Electric Can Opener",
    category: "Counter Helpers",
    priceHint: "$ Premium",
    description:
      "A hands-free can opener that feels especially useful for batch cooking, arthritis-friendly kitchens, or just cutting one more annoying step.",
    highlights: ["One-touch use", "Smooth edge", "Battery powered"],
    bestFor: "Low-effort pantry prep",
    whyPicked:
      "This one converts well because the before-and-after effort is easy to picture even if you are only opening one can.",
    trustNote: "Localized from the exact Amazon PDP for a sharp real product image.",
    image: {
      src: "/images/kitchen/kitchen-mama-electric-can-opener.jpg",
      alt: "Kitchen Mama auto electric can opener",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Kitchen-Mama-Electric-Can-Opener/dp/B07FVQLBL3"
  },
  {
    name: "CIRCLE JOY Gravity Electric Salt and Pepper Grinder Set",
    category: "Counter Helpers",
    priceHint: "$ Premium",
    description:
      "A more polished finishing-tool pick that looks cleaner on the counter and makes seasoning feel a little less basic.",
    highlights: ["Rechargeable base", "Gravity activated", "Adjustable coarseness"],
    bestFor: "Countertop upgrade energy",
    whyPicked:
      "This adds a more giftable, elevated gadget to the mix without drifting into novelty-only territory.",
    trustNote: "Real Amazon PDP image and direct product-page link.",
    image: {
      src: "/images/kitchen/circle-joy-grinder-set.jpg",
      alt: "Circle Joy gravity electric salt and pepper grinder set",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/CIRCLE-JOY-Gravity-Electric-Adjustable/dp/B0F7XH3RS1"
  },
  {
    name: "Zulay Kitchen Milk Frother",
    category: "Counter Helpers",
    priceHint: "$ Budget-friendly",
    description:
      "A tiny countertop-helper pick for matcha, protein shakes, and coffee routines that want one nicer-feeling touch.",
    highlights: ["Handheld frother", "Coffee and matcha", "Very giftable"],
    bestFor: "Coffee and morning-routine upgrades",
    whyPicked:
      "It broadens the site beyond cooking-only shoppers and fits perfectly into the Amazon kitchen-gift lane.",
    trustNote: "Saved from the exact Amazon PDP using the real product image.",
    image: {
      src: "/images/kitchen/zulay-milk-frother.jpg",
      alt: "Zulay Kitchen handheld milk frother",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Zulay-Original-Milk-Frother-Handheld/dp/B082314NFL"
  },
  {
    name: "Ninja Blast Portable Blender",
    category: "Counter Helpers",
    priceHint: "$ Premium",
    description:
      "A portable blender for smoothies, protein shakes, and quick sauces when you want something lighter than a full countertop setup.",
    highlights: ["Portable cup design", "Rechargeable base", "Smoothie-friendly"],
    bestFor: "Protein shakes and quick single-serve blends",
    whyPicked:
      "It gives the catalog one high-interest countertop gadget that still earns its keep in a real daily routine.",
    trustNote: "Saved from the exact Amazon product page with the real PDP image.",
    image: {
      src: "/images/kitchen/ninja-blast-portable-blender.jpg",
      alt: "Ninja Blast portable blender",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Ninja-BC151BK-Portable-Blender-Cordless/dp/B0C2FF4JD1"
  }
];

export function getKitchenCatalog(affiliateTag: string): ProductCardContent[] {
  return kitchenSeeds.map((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}

export function getKitchenMealPrepCatalog(
  affiliateTag: string
): ProductCardContent[] {
  return getKitchenCatalog(affiliateTag).filter((product) =>
    [
      "Cook With Precision",
      "Prep Faster",
      "Air Fryer & Cleanup",
      "Meal Prep Storage"
    ].includes(product.category)
  );
}
