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
    name: "Cocorrina Reed Diffuser Set, Clean Linen, 6.7 fl oz",
    category: "Reed Diffusers",
    priceHint: "$$ Mid-range",
    description: "A clean-linen diffuser for bathrooms, entry tables, and shelf styling when you want the room to feel freshly put together.",
    highlights: ["Low-effort scent","Shelf-friendly","Small-room friendly"],
    bestFor: "Simple clean-linen home scent",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/cocorrina-clean-linen-reed-diffuser.jpg",
      alt: "Cocorrina Reed Diffuser Set, Clean Linen, 6.7 fl oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B24QJ217"
  },
  {
    name: "Airkeep Reed Diffuser Set, Clean Linen, 3.38 fl oz",
    category: "Reed Diffusers",
    priceHint: "$ Budget-friendly",
    description: "A compact reed diffuser for small rooms, guest baths, desks, and anywhere a full-size bottle would feel like too much.",
    highlights: ["Low-effort scent","Shelf-friendly","Small-room friendly"],
    bestFor: "Small-space fragrance",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/airkeep-clean-linen-reed-diffuser.jpg",
      alt: "Airkeep Reed Diffuser Set, Clean Linen, 3.38 fl oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CMQRVRFF"
  },
  {
    name: "WEALD TRIBE Flower Reed Diffuser Set, Eucalyptus & Lavender",
    category: "Reed Diffusers",
    priceHint: "$$ Mid-range",
    description: "A floral diffuser with decorative stems, useful when the fragrance piece also needs to look intentional on a tray or vanity.",
    highlights: ["Low-effort scent","Shelf-friendly","Small-room friendly"],
    bestFor: "Decor-forward diffuser styling",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/weald-tribe-eucalyptus-lavender-diffuser.jpg",
      alt: "WEALD TRIBE Flower Reed Diffuser Set, Eucalyptus & Lavender",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BHWC6N41"
  },
  {
    name: "COCODOR Flower Reed Diffuser Set, White Jasmine, 6.7 oz",
    category: "Reed Diffusers",
    priceHint: "$$ Mid-range",
    description: "A soft floral pick for a nightstand, powder room, or shelf where you want the diffuser to double as decor.",
    highlights: ["Low-effort scent","Shelf-friendly","Small-room friendly"],
    bestFor: "Floral shelf moments",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/cocodor-white-jasmine-flower-diffuser.jpg",
      alt: "COCODOR Flower Reed Diffuser Set, White Jasmine, 6.7 oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0848JGM78"
  },
  {
    name: "Capri Blue Volcano Reed Diffuser Set, Cobalt Blue, 8 fl oz",
    category: "Reed Diffusers",
    priceHint: "$$$ Premium",
    description: "A recognizable, giftable diffuser with the cobalt-glass look that instantly reads polished on a counter or bookshelf.",
    highlights: ["Low-effort scent","Shelf-friendly","Small-room friendly"],
    bestFor: "Giftable statement diffuser",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/capri-blue-volcano-reed-diffuser.jpg",
      alt: "Capri Blue Volcano Reed Diffuser Set, Cobalt Blue, 8 fl oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B001E6RNW2"
  },
  {
    name: "Yankee Candle MidSummer's Night Scented Candle, 22 oz Large Jar",
    category: "Candles",
    priceHint: "$$ Mid-range",
    description: "A deeper candle profile for evenings, reading corners, and rooms that can handle a stronger, more cologne-leaning scent.",
    highlights: ["Warm scent layer","Giftable","Easy room ritual"],
    bestFor: "Evening scent layering",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/yankee-midsummers-night-large-jar.jpg",
      alt: "Yankee Candle MidSummer's Night Scented Candle, 22 oz Large Jar",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F3DQSZKT"
  },
  {
    name: "Yankee Candle Lilac Blossoms Scented Candle, 22 oz Large Jar",
    category: "Candles",
    priceHint: "$$ Mid-range",
    description: "A classic floral jar candle for spring shelves, guest rooms, and anyone building a softer scent rotation.",
    highlights: ["Warm scent layer","Giftable","Easy room ritual"],
    bestFor: "Classic floral candle rotation",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/yankee-lilac-blossoms-large-jar.jpg",
      alt: "Yankee Candle Lilac Blossoms Scented Candle, 22 oz Large Jar",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F3F7RMC9"
  },
  {
    name: "Yankee Candle Sage & Citrus Scented Candle, 22 oz Large Jar",
    category: "Candles",
    priceHint: "$$ Mid-range",
    description: "A green-citrus candle that fits kitchens, workspaces, and daytime routines without feeling overly sweet.",
    highlights: ["Warm scent layer","Giftable","Easy room ritual"],
    bestFor: "Fresh daytime candle profile",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/yankee-sage-citrus-large-jar.jpg",
      alt: "Yankee Candle Sage & Citrus Scented Candle, 22 oz Large Jar",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F3DQPLSP"
  },
  {
    name: "Mrs. Meyer's Clean Day Soy Aromatherapy Candle, Honeysuckle, 7.2 oz",
    category: "Candles",
    priceHint: "$ Budget-friendly",
    description: "A simple, sunny candle for kitchens, laundry rooms, and casual counters where you want something easy to rebuy.",
    highlights: ["Warm scent layer","Giftable","Easy room ritual"],
    bestFor: "Everyday kitchen candle",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/mrs-meyers-honeysuckle-soy-candle.jpg",
      alt: "Mrs. Meyer's Clean Day Soy Aromatherapy Candle, Honeysuckle, 7.2 oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B073LFMKLS"
  },
  {
    name: "Chesapeake Bay Candle Medium Jar, Lavender Thyme",
    category: "Candles",
    priceHint: "$ Budget-friendly",
    description: "A budget-friendly jar candle with a clean label look, good for bathrooms, bedside tables, and starter scent shelves.",
    highlights: ["Warm scent layer","Giftable","Easy room ritual"],
    bestFor: "Affordable everyday candle",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/chesapeake-bay-lavender-thyme-candle.jpg",
      alt: "Chesapeake Bay Candle Medium Jar, Lavender Thyme",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07GH691SQ"
  },
  {
    name: "Febreze Air Mist Air Freshener, Southern Lilac, Peach, Watermelon, 3 Pack",
    category: "Room Sprays",
    priceHint: "$ Budget-friendly",
    description: "A playful three-pack for quick room resets, guest-bath backups, and rotating fruit-floral sprays by space.",
    highlights: ["Instant refresh","Small-space friendly","Easy to stash"],
    bestFor: "Fast room refreshes",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/febreze-air-mist-southern-lilac-peach-watermelon.jpg",
      alt: "Febreze Air Mist Air Freshener, Southern Lilac, Peach, Watermelon, 3 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CNJVRFMX"
  },
  {
    name: "Febreze Air Mist Air Freshener Spray, Linen & Sky, 2 Pack",
    category: "Room Sprays",
    priceHint: "$ Budget-friendly",
    description: "A clean, no-drama spray to keep near laundry areas, bathrooms, and the places that need a quick reset before guests arrive.",
    highlights: ["Instant refresh","Small-space friendly","Easy to stash"],
    bestFor: "Clean linen room spray",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/febreze-air-mist-linen-sky.jpg",
      alt: "Febreze Air Mist Air Freshener Spray, Linen & Sky, 2 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01M4RLBJU"
  },
  {
    name: "Febreze Odor-Fighting Fabric Refresher, Romance & Desire, 23.6 oz",
    category: "Linen & Fabric Sprays",
    priceHint: "$ Budget-friendly",
    description: "A fabric refresher for couches, throws, curtains, and guest bedding when you want the soft goods to feel recently refreshed.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Textile scent touch-ups",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/febreze-fabric-romance-desire.jpg",
      alt: "Febreze Odor-Fighting Fabric Refresher, Romance & Desire, 23.6 oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FFCT17PS"
  },
  {
    name: "Tide Antibacterial Fabric Spray, 22 fl oz, 2 Count",
    category: "Linen & Fabric Sprays",
    priceHint: "$ Budget-friendly",
    description: "A practical fabric spray for high-traffic textiles, gym bags, pet blankets, and shared spaces that need a cleaner-smelling finish.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Utility fabric refresh",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/tide-fabric-spray-two-count.jpg",
      alt: "Tide Antibacterial Fabric Spray, 22 fl oz, 2 Count",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08N2BS9VY"
  },
  {
    name: "Poo-Pourri Before-You-Go Pocket Toilet Spray, Spring Variety 3 Pack",
    category: "Room Sprays",
    priceHint: "$ Budget-friendly",
    description: "Tiny bathroom sprays for travel bags, guest baskets, and powder rooms where discreet, grab-and-go sizing matters.",
    highlights: ["Instant refresh","Small-space friendly","Easy to stash"],
    bestFor: "Guest bath and travel kits",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/poo-pourri-spring-variety-pocket-spray.jpg",
      alt: "Poo-Pourri Before-You-Go Pocket Toilet Spray, Spring Variety 3 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0D1HDXMBB"
  },
  {
    name: "Candle Warmer Lamp with Timer, Dimmable, Includes 2 Bulbs",
    category: "Wax Warmers",
    priceHint: "$$ Mid-range",
    description: "A candle-warming lamp for people who like the look of a jar candle but want a flame-free way to enjoy the fragrance.",
    highlights: ["Countertop ritual","Reusable setup","Cozy visual cue"],
    bestFor: "Flame-free candle routine",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/candle-warmer-lamp-timer-dimmable.jpg",
      alt: "Candle Warmer Lamp with Timer, Dimmable, Includes 2 Bulbs",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CTJGJL2T"
  },
  {
    name: "Candle Warmer Lamp with Timer, Dimmer, Adjustable Height",
    category: "Wax Warmers",
    priceHint: "$$ Mid-range",
    description: "An adjustable warmer lamp that works visually on a nightstand, desk, or living-room side table without screaming gadget.",
    highlights: ["Countertop ritual","Reusable setup","Cozy visual cue"],
    bestFor: "Styled warmer lamp setup",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/adjustable-height-candle-warmer-lamp.jpg",
      alt: "Candle Warmer Lamp with Timer, Dimmer, Adjustable Height",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CDRDK6MR"
  },
  {
    name: "Candle Warmer Lamp with Timer, Dimmable, Height Adjustable",
    category: "Wax Warmers",
    priceHint: "$ Budget-friendly",
    description: "A lower-cost warmer option for testing the candle-lamp idea before committing to a pricier decor piece.",
    highlights: ["Countertop ritual","Reusable setup","Cozy visual cue"],
    bestFor: "Entry candle warmer",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/budget-height-adjustable-candle-warmer.jpg",
      alt: "Candle Warmer Lamp with Timer, Dimmable, Height Adjustable",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DZFGTCLR"
  },
  {
    name: "Satya Incense Gift Set, 8 Scents, 15 g Boxes",
    category: "Incense",
    priceHint: "$ Budget-friendly",
    description: "A variety pack for finding your incense lane before buying larger boxes of a single scent.",
    highlights: ["Ritual feel","Compact","Atmospheric"],
    bestFor: "Incense sampler tray",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/satya-incense-gift-set.jpg",
      alt: "Satya Incense Gift Set, 8 Scents, 15 g Boxes",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B01EB1QOGW"
  },
  {
    name: "Satya Sai Baba Nag Champa Agarbatti Incense Sticks, 250 g",
    category: "Incense",
    priceHint: "$ Budget-friendly",
    description: "A classic Nag Champa box for people who already know they like this warm, familiar incense style.",
    highlights: ["Ritual feel","Compact","Atmospheric"],
    bestFor: "Classic incense scent",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/satya-nag-champa-250g.jpg",
      alt: "Satya Sai Baba Nag Champa Agarbatti Incense Sticks, 250 g",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0000ZUGS6"
  },
  {
    name: "HEM Incense Sticks, 12 Box Variety Pack, 240 Sticks",
    category: "Incense",
    priceHint: "$ Budget-friendly",
    description: "A big variety pack for rotating incense by room, season, or whatever shelf vibe you are building that week.",
    highlights: ["Ritual feel","Compact","Atmospheric"],
    bestFor: "Incense scent rotation",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/hem-incense-variety-pack.jpg",
      alt: "HEM Incense Sticks, 12 Box Variety Pack, 240 Sticks",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07TJZP48M"
  },
  {
    name: "Ceremony Wooden Incense Holder with Glass Ash Catcher",
    category: "Incense",
    priceHint: "$ Budget-friendly",
    description: "A covered-style holder that keeps the incense setup looking neater on a shelf, console, or desk.",
    highlights: ["Ritual feel","Compact","Atmospheric"],
    bestFor: "Tidier incense display",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/ceremony-wooden-incense-holder.jpg",
      alt: "Ceremony Wooden Incense Holder with Glass Ash Catcher",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CDLP9SQ3"
  },
  {
    name: "SOL DE JANEIRO Hair & Body Perfume Mist",
    category: "Body Mists",
    priceHint: "$$$ Premium",
    description: "A popular hair-and-body mist for personal scent layering, travel bags, and the post-shower shelf lineup.",
    highlights: ["Personal scent","Bag-friendly","Layering-ready"],
    bestFor: "Personal scent layering",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/sol-de-janeiro-hair-body-mist.jpg",
      alt: "SOL DE JANEIRO Hair & Body Perfume Mist",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09X3HB2BR"
  },
  {
    name: "SOL DE JANEIRO Hair & Body Perfume Mist",
    category: "Body Mists",
    priceHint: "$$$ Premium",
    description: "A second Sol de Janeiro mist option for shoppers comparing scent families before choosing their everyday bottle.",
    highlights: ["Personal scent","Bag-friendly","Layering-ready"],
    bestFor: "Comparing mist profiles",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/sol-de-janeiro-second-hair-body-mist.jpg",
      alt: "SOL DE JANEIRO Hair & Body Perfume Mist",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09W18N3GT"
  },
  {
    name: "PHLUR Vanilla Skin Body Mist, 8 fl oz",
    category: "Body Mists",
    priceHint: "$$$ Premium",
    description: "A vanilla-forward body mist for building a warmer personal scent wardrobe without going straight to a full perfume bottle.",
    highlights: ["Personal scent","Bag-friendly","Layering-ready"],
    bestFor: "Vanilla scent layering",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/phlur-vanilla-skin-body-mist.jpg",
      alt: "PHLUR Vanilla Skin Body Mist, 8 fl oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0D3FK6KCB"
  },
  {
    name: "Victoria's Secret Body Fragrance Mist, Bare Vanilla, 8.4 fl oz",
    category: "Body Mists",
    priceHint: "$$ Mid-range",
    description: "A familiar vanilla mist for daily wear, gym-bag refreshes, and pairing with warmer candles or linen sprays at home.",
    highlights: ["Personal scent","Bag-friendly","Layering-ready"],
    bestFor: "Everyday vanilla mist",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/victorias-secret-bare-vanilla-mist.jpg",
      alt: "Victoria's Secret Body Fragrance Mist, Bare Vanilla, 8.4 fl oz",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07JRG42D9"
  },
  {
    name: "Victoria's Secret Fragrance Mist Collection, 4 Piece Mini Gift Set",
    category: "Gift Sets",
    priceHint: "$$ Mid-range",
    description: "A mini-mist set for gifting, travel, or testing a few fragrance directions before committing to a full-size bottle.",
    highlights: ["Gift-ready","Variety built in","Nice shelf presence"],
    bestFor: "Fragrance sampler gift",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/victorias-secret-mini-mist-gift-set.jpg",
      alt: "Victoria's Secret Fragrance Mist Collection, 4 Piece Mini Gift Set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B097BW8KN7"
  },
  {
    name: "6 Pack Scented Aromatherapy Candle Gift Set, Amber Jar Candles",
    category: "Gift Sets",
    priceHint: "$$ Mid-range",
    description: "A six-candle set for splitting between rooms, building a seasonal rotation, or giving as an easy housewarming gift.",
    highlights: ["Gift-ready","Variety built in","Nice shelf presence"],
    bestFor: "Multi-room candle set",
    whyPicked: "This made the cut because it adds a clear scent or home-ritual layer without drifting into medical or mood claims.",
    trustNote: "Verified from a real Amazon product page with a local product image; scent preferences and use guidance vary by listing.",
    image: {
      src: "/images/layered-air/six-pack-amber-jar-candle-gift-set.jpg",
      alt: "6 Pack Scented Aromatherapy Candle Gift Set, Amber Jar Candles",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08XZ3HWF3"
  }
];

export function getLayeredAirCatalog(affiliateTag: string): ProductCardContent[] {
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
