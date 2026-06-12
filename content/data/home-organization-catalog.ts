import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type HomeOrganizationSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const homeOrganizationSeeds: HomeOrganizationSeed[] = [
  {
    name: "Vtopmart 25 PCS Clear Plastic Drawer Organizers Set",
    category: "Drawer Organization",
    priceHint: "$ Budget-friendly",
    description:
      "A low-effort way to make bathroom drawers, kitchen catch-alls, and office junk spots look instantly more sorted.",
    highlights: ["25-piece set", "Four tray sizes", "Clear stack-friendly plastic"],
    bestFor: "Messy everyday drawers",
    whyPicked:
      "This is one of the clearest small-space wins on Amazon because it fixes clutter fast without needing a whole system.",
    trustNote:
      "Real product photo saved locally from the live product listing and paired with the exact Amazon product page.",
    image: {
      src: "/images/home-organization/vtopmart-drawer-organizers.jpg",
      alt: "Vtopmart 25 piece clear plastic drawer organizers set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08KXKVT4K"
  },
  {
    name: "Pipishell Bamboo Expandable Drawer Organizer",
    category: "Drawer Organization",
    priceHint: "$ Mid-range",
    description:
      "A cleaner-looking drawer upgrade when you want something warmer than plastic but still practical for utensils or dresser storage.",
    highlights: ["Expandable bamboo design", "Natural finish", "Kitchen and dresser friendly"],
    bestFor: "Prettier high-traffic drawers",
    whyPicked:
      "It lands in the sweet spot between useful and polished, which is exactly what people want for visible everyday storage.",
    trustNote:
      "Uses the real product image from the live product listing and points to the exact Amazon product page.",
    image: {
      src: "/images/home-organization/pipishell-bamboo-organizer.jpg",
      alt: "Pipishell bamboo expandable drawer organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07SRV3SN8"
  },
  {
    name: "SpaceAid Bamboo Adjustable Drawer Dividers",
    category: "Drawer Organization",
    priceHint: "$ Mid-range",
    description:
      "The fast fix for wide dresser drawers, baby clothes, workout gear, and all the stuff that turns into piles.",
    highlights: ["Spring-loaded dividers", "Includes labels", "Works in dresser and closet drawers"],
    bestFor: "Closet and dresser reset days",
    whyPicked:
      "Drawer dividers are one of the easiest organization upgrades to keep using, and this set hits the right mix of utility and finish.",
    trustNote:
      "Real product image saved locally with a direct Amazon product-page destination.",
    image: {
      src: "/images/home-organization/spaceaid-drawer-dividers.jpg",
      alt: "SpaceAid bamboo adjustable drawer dividers",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B094624Q8Z"
  },
  {
    name: "Bamboo Drawer Organizer Set",
    category: "Drawer Organization",
    priceHint: "$ Mid-range",
    description:
      "A modular bamboo insert set that gives junk-drawer energy a much calmer shape without looking flimsy.",
    highlights: ["Expandable tray mix", "Warm bamboo finish", "Good for kitchen or bathroom use"],
    bestFor: "People who want drawers to look cleaner, not just fuller",
    whyPicked:
      "It gives the drawer category another option that feels more styled than utility-bin obvious.",
    trustNote:
      "Localized from a live product listing image and linked to the matching Amazon PDP.",
    image: {
      src: "/images/home-organization/bamboo-drawer-organizer-set.png",
      alt: "Bamboo drawer organizer set with multiple tray compartments",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B088WCT93C"
  },
  {
    name: "DELAMU 2-Tier Under Sink Organizers and Storage",
    category: "Under-Sink & Cabinet",
    priceHint: "$ Mid-range",
    description:
      "A real under-sink upgrade for bathrooms or kitchens where vertical space is there but never gets used well.",
    highlights: ["Two sliding tiers", "Multi-purpose layout", "Works under sinks or counters"],
    bestFor: "Crowded plumbing-friendly cabinets",
    whyPicked:
      "Under-sink storage is always high pain, high payoff. This one feels sturdy, useful, and actually designed for awkward spaces.",
    trustNote:
      "Image comes from the live product page and the CTA goes to the matching Amazon product page.",
    image: {
      src: "/images/home-organization/delamu-under-sink.png",
      alt: "DELAMU two tier under sink organizer set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BNQ56MH5"
  },
  {
    name: "Simple Houseware Pull Out Cabinet Sliding Basket Organizer",
    category: "Under-Sink & Cabinet",
    priceHint: "$ Budget-friendly",
    description:
      "A simple slide-out basket setup for lower cabinets that makes backups, sprays, and pantry extras easier to reach.",
    highlights: ["Two-tier basket layout", "Pull-out design", "Small cabinet friendly"],
    bestFor: "Hard-to-reach lower cabinets",
    whyPicked:
      "This is one of those quiet products that makes a cabinet feel much less annoying every single day.",
    trustNote:
      "Real product photo and an exact Amazon product-page link.",
    image: {
      src: "/images/home-organization/simplehouseware-cabinet-basket.jpg",
      alt: "Simple Houseware pull out cabinet sliding basket organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01LY7YIGX"
  },
  {
    name: "Vtopmart Stackable Storage Drawers Set of 4",
    category: "Under-Sink & Cabinet",
    priceHint: "$ Mid-range",
    description:
      "Stackable clear drawers that work well for beauty products, bathroom backups, snacks, or little categories that need their own zone.",
    highlights: ["Set of four drawers", "Clear front", "Easy stackable footprint"],
    bestFor: "Making deep shelves usable",
    whyPicked:
      "People keep buying this style because it turns wasted shelf depth into something you can actually sort and access.",
    trustNote:
      "Localized from the live product page and tied to the exact Amazon PDP.",
    image: {
      src: "/images/home-organization/vtopmart-stackable-drawers.jpg",
      alt: "Vtopmart stackable storage drawers set of four",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DB5MH7YQ"
  },
  {
    name: "Over the Cabinet Door Organizer",
    category: "Under-Sink & Cabinet",
    priceHint: "$ Budget-friendly",
    description:
      "A fast way to add one more useful storage zone inside a cabinet door without taking up shelf depth.",
    highlights: ["Hooks over a cabinet door", "Slim profile", "Good for wraps, boards, or cleaning extras"],
    bestFor: "Kitchen cabinets that need hidden extra storage",
    whyPicked:
      "This is the kind of low-cost add-on that makes a cramped kitchen work harder right away.",
    trustNote:
      "Real product image saved locally and matched to the exact Amazon product page.",
    image: {
      src: "/images/home-organization/over-cabinet-door-organizer.png",
      alt: "Over the cabinet door organizer hanging inside a kitchen cabinet",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B081K9BSTB"
  },
  {
    name: "Vtopmart Food Storage Organizer Bins 6 Pack",
    category: "Pantry & Kitchen",
    priceHint: "$ Budget-friendly",
    description:
      "A pantry bin set built for pouches, packets, bars, snacks, and all the small stuff that usually gets scattered.",
    highlights: ["Six clear bins", "Four-compartment layout", "Easy pantry grouping"],
    bestFor: "Snack packets and pantry overflow",
    whyPicked:
      "This kind of bin does the most for busy kitchens because it gives small loose items a real home without overcomplicating things.",
    trustNote:
      "Uses a real product image and a direct Amazon product-page link for the exact pantry-bin pick.",
    image: {
      src: "/images/home-organization/vtopmart-pantry-bins.jpg",
      alt: "Vtopmart pantry organizer bins set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B9BDQTV9"
  },
  {
    name: "YouCopia StoraLid Food Storage Container Lid Organizer",
    category: "Pantry & Kitchen",
    priceHint: "$ Mid-range",
    description:
      "A satisfying fix for the food-container-lid pile that always falls apart the minute you need one size.",
    highlights: ["Adjustable dividers", "Vertical lid storage", "Container-lid specific design"],
    bestFor: "Kitchen drawers and cabinets with chaotic lid stacks",
    whyPicked:
      "It solves a very specific kitchen annoyance better than generic bins usually do.",
    trustNote:
      "Real product image localized from a live listing and linked to the exact Amazon PDP.",
    image: {
      src: "/images/home-organization/youcopia-storalid.png",
      alt: "YouCopia StoraLid food storage container lid organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07FNRXFTD"
  },
  {
    name: "YouCopia Crazy Susan Kitchen Cabinet Turntable",
    category: "Pantry & Kitchen",
    priceHint: "$ Mid-range",
    description:
      "A sharper lazy-Susan-style pick that helps taller bottles, oils, and sauces stop hiding in the back corners.",
    highlights: ["Spinning turntable", "Bins with handles", "Cabinet and pantry friendly"],
    bestFor: "Deep pantry shelves and awkward cabinet corners",
    whyPicked:
      "Corner clutter is high-friction and this makes those hidden items much easier to see and reach.",
    trustNote:
      "Uses a real product image and a direct Amazon product-page link.",
    image: {
      src: "/images/home-organization/youcopia-crazy-susan.png",
      alt: "YouCopia Crazy Susan kitchen cabinet turntable",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09FW8GNTJ"
  },
  {
    name: "mDesign Stackable Plastic Food Storage Organizer Bin with Open Front",
    category: "Pantry & Kitchen",
    priceHint: "$ Mid-range",
    description:
      "A deeper pantry bin for cans, packets, boxed snacks, or backup goods when you want open-front access instead of rummaging.",
    highlights: ["Open-front design", "Stackable footprint", "Great for pantry shelves"],
    bestFor: "Pantry shelves that lose visibility fast",
    whyPicked:
      "The open front makes it much easier to keep using instead of treating the bin like a black hole.",
    trustNote:
      "Real product image saved locally and paired with the matching Amazon product page.",
    image: {
      src: "/images/home-organization/mdesign-open-front-bin.png",
      alt: "mDesign stackable pantry storage bin with open front",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01C95YLI0"
  },
  {
    name: "YouCopia FreezeUp Freezer and Fridge Bin",
    category: "Pantry & Kitchen",
    priceHint: "$ Mid-range",
    description:
      "A handled fridge-and-freezer bin that keeps frozen bags, produce, or meal-prep overflow from turning into a pile.",
    highlights: ["Freezer-safe bin", "Built-in handles", "Stack-friendly shape"],
    bestFor: "Fridge and freezer shelves that get messy fast",
    whyPicked:
      "Fridge organization has real momentum right now, and this is a practical product rather than a gimmicky one.",
    trustNote:
      "Localized from a real product listing image and linked to the exact Amazon PDP.",
    image: {
      src: "/images/home-organization/youcopia-freezeup-bin.png",
      alt: "YouCopia FreezeUp freezer and fridge bin",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B098FXJ5NS"
  },
  {
    name: "YouCopia RollOut Fridge Drawer",
    category: "Pantry & Kitchen",
    priceHint: "$ Mid-range",
    description:
      "A pull-out fridge drawer that gives you one cleaner layer for snacks, deli items, or produce instead of a loose shelf pile.",
    highlights: ["Pull-out fridge bin", "Clear body", "Good for produce and snack zones"],
    bestFor: "People trying to make the fridge easier to scan",
    whyPicked:
      "It brings the same pull-out convenience people love under sinks into the fridge, which is a smart crossover.",
    trustNote:
      "Real product image saved locally and paired with the exact Amazon product page.",
    image: {
      src: "/images/home-organization/youcopia-rollout-fridge-drawer.png",
      alt: "YouCopia RollOut fridge drawer organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B096KYQ4V6"
  },
  {
    name: "Command Cord Bundlers",
    category: "Cable Management",
    priceHint: "$ Budget-friendly",
    description:
      "A tiny fix for cords that keep falling, tangling, or hanging around the edge of a nightstand or desk.",
    highlights: ["Damage-free adhesive", "Simple cord hold", "Good for small cable zones"],
    bestFor: "Nightstands, desks, and entry charging spots",
    whyPicked:
      "Cable clutter is usually more visual than big. This fixes it fast without tools, and that matters.",
    trustNote:
      "Real product image paired with the matching Amazon product page.",
    image: {
      src: "/images/home-organization/command-cord-bundlers.jpg",
      alt: "Command cord bundlers package",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0000CCQKV"
  },
  {
    name: "N NOROCME 192 PCS Cable Management Kit",
    category: "Cable Management",
    priceHint: "$ Mid-range",
    description:
      "The all-in kit for desks, TVs, gaming corners, and under-desk cable messes when one or two clips are not enough.",
    highlights: ["192-piece kit", "Sleeves, clips, and ties", "Good for home office setups"],
    bestFor: "Full desk and media-corner cleanup",
    whyPicked:
      "It covers the whole cable problem in one buy, which is why it keeps showing up in organization roundups.",
    trustNote:
      "Uses the real product image and points to the exact Amazon product page.",
    image: {
      src: "/images/home-organization/nnorocme-cable-kit.jpg",
      alt: "N NOROCME cable management kit",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B687J37D"
  },
  {
    name: "Simple Houseware Desk Monitor Stand Riser with Organizer Tray",
    category: "Desk Organization",
    priceHint: "$ Budget-friendly",
    description:
      "A clean desk upgrade that lifts the screen, creates a storage shelf, and makes a work surface feel more intentional.",
    highlights: ["Raised monitor shelf", "Adjustable organizer tray", "Desk-friendly footprint"],
    bestFor: "Small home office setups",
    whyPicked:
      "It’s one of the easiest desk products to justify because it solves posture, storage, and surface clutter in one move.",
    trustNote:
      "Real product photo with a direct exact-match Amazon destination.",
    image: {
      src: "/images/home-organization/simplehouseware-monitor-stand.jpg",
      alt: "Simple Houseware desk monitor stand riser with organizer tray",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08YWWGQ6H"
  },
  {
    name: "Brother P-Touch PTD210 Label Maker",
    category: "Desk Organization",
    priceHint: "$ Mid-range",
    description:
      "A simple label maker for pantry bins, file boxes, kids gear, or storage zones that need a little more staying power.",
    highlights: ["Portable label maker", "Easy keyboard entry", "Useful for pantry and office zones"],
    bestFor: "People who keep organizing but want systems to stick",
    whyPicked:
      "A lot of organization resets fall apart because nothing stays labeled. This keeps categories clearer longer.",
    trustNote:
      "Real product image saved locally and linked to the exact Amazon product page.",
    image: {
      src: "/images/home-organization/brother-label-maker.png",
      alt: "Brother P-Touch PTD210 label maker",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09QXZ7ZRD"
  },
  {
    name: "Amazon Basics 4-Shelf Adjustable Heavy Duty Storage Rack",
    category: "Small-Space Storage",
    priceHint: "$ Premium",
    description:
      "A practical shelving piece for laundry rooms, kitchens, garages, or apartment corners that need more vertical storage.",
    highlights: ["Four adjustable shelves", "Heavy-duty wire frame", "Kitchen or garage ready"],
    bestFor: "Adding storage where there was none",
    whyPicked:
      "Not glamorous, but really high value. A good rack buys back square footage in places that fill up fast.",
    trustNote:
      "Real product image and a direct Amazon product-page link.",
    image: {
      src: "/images/home-organization/amazon-basics-rack.jpg",
      alt: "Amazon Basics four shelf storage rack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01LYBQXRH"
  },
  {
    name: "Yecaye Under Bed Storage with Wheels 2Pack",
    category: "Small-Space Storage",
    priceHint: "$ Mid-range",
    description:
      "A useful under-bed option for off-season clothes, extra bedding, and overflow that should stay hidden but easy to reach.",
    highlights: ["Rolling design", "Two-pack set", "Soft-sided covered storage"],
    bestFor: "Apartment bedrooms and overflow linens",
    whyPicked:
      "Under-bed storage only works when it’s easy to pull out. The wheels make this much more realistic for everyday use.",
    trustNote:
      "Uses a real product image and links straight to the matching Amazon product page.",
    image: {
      src: "/images/home-organization/yecaye-underbed.jpg",
      alt: "Yecaye under bed storage containers with wheels",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CCCR2Z9V"
  },
  {
    name: "Stackable Wire Baskets",
    category: "Small-Space Storage",
    priceHint: "$ Mid-range",
    description:
      "An open wire-basket set that works for produce, pantry overflow, cleaning cloths, or utility closets where closed bins feel too bulky.",
    highlights: ["Stackable wire design", "Open visibility", "Good for pantries and utility shelves"],
    bestFor: "Vertical storage that still stays easy to scan",
    whyPicked:
      "It keeps the contents visible, which is a big reason people actually keep using it instead of forgetting what’s inside.",
    trustNote:
      "Real product image localized from a live listing and matched to the exact Amazon PDP.",
    image: {
      src: "/images/home-organization/stackable-wire-baskets.png",
      alt: "Stackable wire baskets for pantry and utility storage",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08JTZNSJ7"
  },
  {
    name: "StorageWorks Hanging Closet Organizer",
    category: "Small-Space Storage",
    priceHint: "$ Mid-range",
    description:
      "A hanging closet shelf that gives sweaters, tees, baby gear, or accessories a cleaner vertical home without adding another dresser.",
    highlights: ["Six hanging shelves", "Closet-rod friendly", "Soft structured fabric build"],
    bestFor: "Closets that need more folded-item zones",
    whyPicked:
      "This is one of the easiest ways to pull more usefulness out of a basic closet without tools or a full system.",
    trustNote:
      "Real product image saved locally and linked to the matching Amazon product page.",
    image: {
      src: "/images/home-organization/storageworks-hanging-closet-organizer.png",
      alt: "StorageWorks hanging closet organizer with multiple shelves",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0762JMTXT"
  }
];

export function getHomeOrganizationCatalog(affiliateTag: string) {
  return homeOrganizationSeeds.map<ProductCardContent>((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}

export function getHomeOrganizationDrawerCatalog(affiliateTag: string) {
  return getHomeOrganizationCatalog(affiliateTag).filter((product) =>
    ["Drawer Organization", "Under-Sink & Cabinet"].includes(product.category)
  );
}
