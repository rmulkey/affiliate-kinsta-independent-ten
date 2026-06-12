import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type SummerWearSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "Check price on Amazon";

const summerWearSeeds: SummerWearSeed[] = [
  {
    name: "ANRABESS Women 2 Piece Outfits Tank Top & Palazzo Pants Summer Lounge Matching Set",
    category: "Matching Sets",
    priceHint: "$ Mid-range",
    description:
      "This is the kind of set that makes airport days, brunch, and beach-town dinners feel easy.",
    highlights: ["Wide-leg pants", "Pullover tank", "Easy travel piece"],
    bestFor: "Travel days and easy polished outfits",
    whyPicked:
      "Matching sets are still one of the clearest warm-weather winners on Amazon because they look styled without asking much from you.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/anrabess-set.jpg",
      alt: "ANRABESS two-piece summer outfit with a tank top and wide-leg pants",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/ANRABESS-Outfits-Palazzo-Vacation-Clothing/dp/B0DM1PHWJZ"
  },
  {
    name: "Ekouaer Summer Textured 2-Piece Lounge Set",
    category: "Matching Sets",
    priceHint: "$ Mid-range",
    description:
      "Soft, textured, and easy enough to wear for flights, coffee runs, or a casual beach-town lunch.",
    highlights: ["Textured knit feel", "Matching top and short", "Easy off-duty look"],
    bestFor: "Travel days and low-effort vacation outfits",
    whyPicked:
      "Texture and coordinated sets are still doing a lot of work in summer shopping because they look finished with almost no styling.",
    trustNote:
      "Localized from Ekouaer’s official product page for a sharper and more stable image.",
    image: {
      src: "/images/summer-wear/ekouaer-textured-lounge-set.jpg",
      alt: "Ekouaer textured two-piece lounge set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0G3F196S6"
  },
  {
    name: "Ekouaer Cozy 2-Piece Lounge Set",
    category: "Matching Sets",
    priceHint: "$ Mid-range",
    description:
      "A little softer and cozier than the usual summer set, but still clean enough to wear out of the house.",
    highlights: ["Soft lounge fabric", "Relaxed fit", "Easy repeat piece"],
    bestFor: "Cooler mornings, flights, and casual weekends",
    whyPicked:
      "People still want summer pieces that feel relaxed, and this is the kind of set that bridges home, errands, and travel.",
    trustNote:
      "Localized from Ekouaer’s official product page to keep the image crisp.",
    image: {
      src: "/images/summer-wear/ekouaer-cozy-lounge-set.jpg",
      alt: "Ekouaer cozy two-piece lounge set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08CT5ZHY3"
  },
  {
    name: "GRACE KARIN Summer Square-Neck Midi Sundress with Pockets",
    category: "Summer Dresses",
    priceHint: "$ Mid-range",
    description:
      "A simple sundress with shape, pockets, and enough polish to go from daytime errands to dinner.",
    highlights: ["Square neckline", "Midi length", "Pockets"],
    bestFor: "One-and-done summer dressing",
    whyPicked:
      "Amazon search demand is clearly there for this shape right now, especially easy A-line dresses that still feel put together.",
    trustNote:
      "Real product image localized from a public product listing for a stable, sharper render.",
    image: {
      src: "/images/summer-wear/grace-karin-sundress.jpg",
      alt: "Grace Karin square-neck midi sundress in dark blue",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CSSP885X"
  },
  {
    name: "MEROKEETY Sleeveless Smocked Midi Dress",
    category: "Summer Dresses",
    priceHint: "$ Mid-range",
    description:
      "Soft, airy, and easy to throw on when you want the dress to do most of the work.",
    highlights: ["Smocked bodice", "Sleeveless cut", "Flowy midi shape"],
    bestFor: "Beach weekends and casual dinner plans",
    whyPicked:
      "Smocked midi dresses keep showing up in current Amazon summer results because they read feminine, easy, and low-effort.",
    trustNote:
      "Real product image localized from a public catalog page using the same Amazon ASIN.",
    image: {
      src: "/images/summer-wear/merokeety-midi.jpg",
      alt: "MEROKEETY sleeveless smocked midi dress",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DTJZP1V2"
  },
  {
    name: "Amazon Essentials Women's Fit & Flare Jersey Midi Dress",
    category: "Summer Dresses",
    priceHint: "$ Mid-range",
    description:
      "A simple jersey dress that feels easy enough for daytime and polished enough for dinner with one shoe change.",
    highlights: ["Fit-and-flare shape", "Jersey fabric", "Easy day-to-night option"],
    bestFor: "A comfortable dress that still looks pulled together",
    whyPicked:
      "This is the practical side of summer shopping: one dress, soft fabric, decent shape, and real repeat value.",
    trustNote:
      "Image localized from a public page that preserved the original Amazon CDN photo.",
    image: {
      src: "/images/summer-wear/amazon-fit-flare-midi.jpg",
      alt: "Amazon Essentials fit and flare jersey midi dress",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Amazon-Essentials-Womens-Available-Previously/dp/B0CHVQNDBS"
  },
  {
    name: "Amazon Essentials Women's Two Strap Heeled Sandal",
    category: "Sandals & Clogs",
    priceHint: "$ Budget-friendly",
    description:
      "A clean, simple heel that works with dresses, pants, and basically every low-stress summer outfit.",
    highlights: ["Two-strap upper", "Block heel", "Easy neutral styling"],
    bestFor: "Day-to-night outfits without overthinking shoes",
    whyPicked:
      "This one keeps popping up because it looks more expensive than it is and stays easy to wear.",
    trustNote: "Verified Amazon PDP with a full-size saved product image.",
    image: {
      src: "/images/summer-wear/amazon-heeled-sandal.jpg",
      alt: "Amazon Essentials two-strap heeled sandal in black faux leather",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08LPV1DTQ"
  },
  {
    name: "Steve Madden Women's BIGMONA Sandal",
    category: "Sandals & Clogs",
    priceHint: "$ Premium",
    description:
      "Chunkier than a basic slide, but still clean enough to work with dresses, shorts, and wide-leg pants.",
    highlights: ["Platform sole", "Wide straps", "Statement casual shoe"],
    bestFor: "Upgrading everyday summer looks fast",
    whyPicked:
      "Platform sandals are still landing hard on Amazon, and this is one of the cleaner versions that feels current without being loud.",
    trustNote:
      "Real product photo localized from a public retailer page tied to the same Amazon product.",
    image: {
      src: "/images/summer-wear/steve-madden-bigmona.webp",
      alt: "Steve Madden BIGMONA platform sandal in natural raffia",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Steve-Madden-Womens-BIGMONA-Natural/dp/B0CGT2TYLQ"
  },
  {
    name: "Crocs Classic Clog",
    category: "Sandals & Clogs",
    priceHint: "$ Mid-range",
    description:
      "Not subtle, but still one of the easiest summer shoes for pool days, errands, and quick trips.",
    highlights: ["Lightweight foam", "Ventilation ports", "Water-friendly"],
    bestFor: "Casual summer days and grab-and-go comfort",
    whyPicked:
      "It keeps showing up on Amazon best-seller pages for a reason. People still want simple comfort shoes that can handle heat and water.",
    trustNote:
      "Localized from Crocs’ official product page to avoid tiny marketplace thumbnails.",
    image: {
      src: "/images/summer-wear/crocs-classic-clog-amazon.jpg",
      alt: "Crocs Classic Clog in blue bolt",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0014C5S7S"
  },
  {
    name: "Crocs Brooklyn Low Wedge",
    category: "Sandals & Clogs",
    priceHint: "$ Mid-range",
    description:
      "A more polished Crocs pick that still leans easy and comfortable instead of trying too hard.",
    highlights: ["Low wedge", "Clean straps", "All-day comfort lean"],
    bestFor: "Dressier summer outfits without giving up comfort",
    whyPicked:
      "Wedge sandals are back in a cleaner way this summer, and this one hits the comfort-first crowd nicely.",
    trustNote:
      "Localized from Crocs’ official product page for a sharper source image.",
    image: {
      src: "/images/summer-wear/crocs-brooklyn-low-wedge.jpg",
      alt: "Crocs Brooklyn Low Wedge sandal",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07YQRHTG4"
  },
  {
    name: "Crocs Getaway Strappy Sandal",
    category: "Sandals & Clogs",
    priceHint: "$ Mid-range",
    description:
      "Slimmer and cleaner than a clog, but still built for hot days when comfort matters most.",
    highlights: ["Strappy upper", "Lightweight base", "Low-fuss styling"],
    bestFor: "Walking-heavy days and casual vacation outfits",
    whyPicked:
      "The summer market keeps rewarding shoes that feel easy on the foot and easy to style. This one does both.",
    trustNote:
      "Localized from Crocs’ official product page so the image stays crisp.",
    image: {
      src: "/images/summer-wear/crocs-getaway-strappy-amazon.jpg",
      alt: "Crocs Getaway Strappy sandal in truffle",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0C53SM7RZ"
  },
  {
    name: "Amazon Essentials Women's Classic-Fit Short-Sleeve V-Neck T-Shirt",
    category: "Easy Basics",
    priceHint: "$ Budget-friendly",
    description:
      "A clean warm-weather basic that makes the rest of the closet work harder.",
    highlights: ["Classic fit", "Soft modal blend", "Layer-friendly"],
    bestFor: "Hot days when you just need a dependable base layer",
    whyPicked:
      "Every summer edit needs one easy tee, and this one hits the sweet spot on price, softness, and simple shape.",
    trustNote:
      "Amazon CDN image localized from a public review page referencing the current listing.",
    image: {
      src: "/images/summer-wear/amazon-vneck-tee.jpg",
      alt: "Amazon Essentials classic-fit short-sleeve v-neck t-shirt",
      kind: "product"
    },
    amazonUrl:
      "https://www.amazon.com/Amazon-Essentials-Classic-Fit-Short-Sleeve-Multipacks/dp/B0D8TGLHMB"
  },
  {
    name: "Amazon Essentials Linen Blend Drawstring Relaxed Fit Wide Leg Pant",
    category: "Easy Basics",
    priceHint: "$ Budget-friendly",
    description:
      "Exactly the kind of breathable wide-leg pant people want once the weather gets sticky.",
    highlights: ["Linen blend", "Drawstring waist", "Wide-leg fit"],
    bestFor: "Heat-wave outfits and low-effort vacation packing",
    whyPicked:
      "Current Amazon summer search results are packed with linen-blend pants, and this is the easy, wearable version of that trend.",
    trustNote: "Real product image localized from a public Amazon deal listing.",
    image: {
      src: "/images/summer-wear/amazon-linen-pant.jpg",
      alt: "Amazon Essentials linen blend wide-leg drawstring pant in black",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08JVMV64R"
  },
  {
    name: "Ekouaer Swim Cover Up Beachwear",
    category: "Swim & Cover-Ups",
    priceHint: "$ Budget-friendly",
    description:
      "A light beach layer that does the simple summer thing right without feeling overdesigned.",
    highlights: ["Easy beach layer", "Lightweight fabric", "Throw-on shape"],
    bestFor: "Pool days and quick resort changes",
    whyPicked:
      "Cover-ups that feel breezy and uncomplicated keep winning because they make swimwear easier to wear beyond the towel moment.",
    trustNote:
      "Localized from Ekouaer’s official product page for a high-quality image source.",
    image: {
      src: "/images/summer-wear/ekouaer-swim-coverup.jpg",
      alt: "Ekouaer swim cover up beachwear",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08F76JN6D"
  },
  {
    name: "Ekouaer Sleeveless V-Neck Swimsuit Cover Up",
    category: "Swim & Cover-Ups",
    priceHint: "$ Budget-friendly",
    description:
      "A cleaner, tank-style cover-up for anyone who wants beachwear that still feels wearable on the walk back.",
    highlights: ["Sleeveless cut", "V-neck shape", "Easy pull-on fit"],
    bestFor: "Beach days and low-fuss vacation layering",
    whyPicked:
      "A lot of summer shoppers want cover-ups that can double as an actual outfit for a few hours. This one leans that way.",
    trustNote:
      "Localized from Ekouaer’s official product page to keep the image sharp.",
    image: {
      src: "/images/summer-wear/ekouaer-sleeveless-coverup.jpg",
      alt: "Ekouaer sleeveless v-neck swimsuit cover up",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BQ38BZ1K"
  },
  {
    name: "SOJOS SJ1224 Classic Retro Oval Polarized Sunglasses",
    category: "Accessories",
    priceHint: "$ Budget-friendly",
    description:
      "An easy oval shape that makes casual summer outfits feel a little more finished right away.",
    highlights: ["Retro oval frame", "Polarized lens", "Lightweight daily pair"],
    bestFor: "Vacation outfits and everyday summer styling",
    whyPicked:
      "Sleek oval sunglasses are still one of the easiest ways to make simple summer clothes feel more current.",
    trustNote:
      "Localized from SOJOS’ official product page for a cleaner source image.",
    image: {
      src: "/images/summer-wear/sojos-sj1224.jpg",
      alt: "SOJOS SJ1224 retro oval polarized sunglasses",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FXM8BNXB"
  },
  {
    name: "SOJOS SJ3103 Acetate Elegant Cateye Sunglasses",
    category: "Accessories",
    priceHint: "$ Mid-range",
    description:
      "A softer cateye option that gives dresses and linen looks a bit more shape without going loud.",
    highlights: ["Acetate frame", "Elegant cateye shape", "Statement-but-clean look"],
    bestFor: "More styled summer outfits",
    whyPicked:
      "Cateye frames never really disappear, but right now the cleaner acetate versions feel especially good with simple summer dressing.",
    trustNote:
      "Localized from SOJOS’ official product page to keep the image crisp.",
    image: {
      src: "/images/summer-wear/sojos-sj3103.jpg",
      alt: "SOJOS SJ3103 elegant cateye sunglasses",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FH6JJ3HH"
  },
  {
    name: "SOJOS SJ3126 Retro Trendy Oval Polarized Sunglasses",
    category: "Accessories",
    priceHint: "$ Mid-range",
    description:
      "A slightly dressier oval frame that still works with tees, tanks, and simple resort looks.",
    highlights: ["Polarized lenses", "Oval shape", "Acetate frame"],
    bestFor: "Clean outfits that need one stronger accessory",
    whyPicked:
      "Oval frames are still a major summer styling shortcut, and this version feels polished without going too precious.",
    trustNote:
      "Localized from SOJOS’ official product page for a stable image source.",
    image: {
      src: "/images/summer-wear/sojos-sj3126.jpg",
      alt: "SOJOS SJ3126 retro oval polarized sunglasses",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DYTXL6NF"
  },
  {
    name: "SOJOS SJ3127 Oval Polarized Sunglasses",
    category: "Accessories",
    priceHint: "$ Mid-range",
    description:
      "A smooth oval frame that lands somewhere between understated and fashion-forward.",
    highlights: ["Oval frame", "Polarized lens", "Unisex styling"],
    bestFor: "Minimal summer looks that need a cool finish",
    whyPicked:
      "This shape keeps showing up in the kind of clean summer styling people save and repost.",
    trustNote:
      "Localized from SOJOS’ official product page to keep the source quality high.",
    image: {
      src: "/images/summer-wear/sojos-sj3127.jpg",
      alt: "SOJOS SJ3127 oval polarized sunglasses",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09RZS3B83"
  },
  {
    name: "SOJOS Stellar SJ2512 Recycled Retro Oval Polarized Sunglasses",
    category: "Accessories",
    priceHint: "$ Mid-range",
    description:
      "A retro oval pair that feels a little moodier and slightly more fashion-led than the classic basics.",
    highlights: ["Retro oval frame", "Polarized lens", "Recycled material story"],
    bestFor: "A more editorial summer accessory move",
    whyPicked:
      "The cleaner the outfit, the more one pair of sunglasses can carry. This one does that well.",
    trustNote:
      "Localized from SOJOS’ official product page so the image stays crisp.",
    image: {
      src: "/images/summer-wear/sojos-stellar-sj2512.jpg",
      alt: "SOJOS Stellar SJ2512 retro oval polarized sunglasses",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F93YCXBP"
  },
  {
    name: "PRETTYGARDEN Women's Summer 2 Piece Matching Lounge Set",
    category: "Matching Sets",
    priceHint: "$ Mid-range",
    description:
      "A travel-friendly set with the easy airport outfit energy people keep saving for summer trips.",
    highlights: ["Short sleeve crop top", "Wide-leg pants", "Soft travel look"],
    bestFor: "Airport outfits and weekend packing",
    whyPicked:
      "The matching-set trend keeps working because it makes a full outfit feel intentional in about ten seconds.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/prettygarden-airport-set.jpg",
      alt: "PRETTYGARDEN summer matching lounge set with crop top and wide-leg pants",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0G38967WJ"
  },
  {
    name: "BTFBM Women's Summer Floral Maxi Dress",
    category: "Summer Dresses",
    priceHint: "$ Mid-range",
    description:
      "A breezy floral maxi for vacation dinners, warm weekends, and days when you want the dress to carry the outfit.",
    highlights: ["Floral print", "Spaghetti straps", "Long beachy shape"],
    bestFor: "Vacation dinners and sunny weekend plans",
    whyPicked:
      "Floral maxis are still one of the easiest summer buys because they feel dressed up without getting fussy.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/btfbm-floral-maxi-dress.jpg",
      alt: "BTFBM floral spaghetti-strap summer maxi dress",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DP72RWNK"
  },
  {
    name: "LILLUSORY Strapless Smocked Maxi Dress with Pockets",
    category: "Summer Dresses",
    priceHint: "$ Mid-range",
    description:
      "A clean tube maxi with a smocked top and pockets, built for the easy summer dress lane.",
    highlights: ["Strapless neckline", "Smocked bodice", "Pockets"],
    bestFor: "Beach towns, brunch, and one-step outfits",
    whyPicked:
      "Strapless maxis are one of the sharper 2026 summer dress signals, especially when the shape stays simple.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/lillusory-strapless-maxi.jpg",
      alt: "LILLUSORY strapless smocked maxi dress with pockets",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GJRDLLKB"
  },
  {
    name: "PRETTYGARDEN Sleeveless Wide-Leg Summer Jumpsuit",
    category: "Easy Basics",
    priceHint: "$ Mid-range",
    description:
      "A one-piece outfit for people who want the simplicity of a dress with a little more movement.",
    highlights: ["Sleeveless cut", "Wide-leg pant", "Pockets"],
    bestFor: "Easy dinners and carry-on-friendly outfits",
    whyPicked:
      "Jumpsuits are a smart summer add because they solve the outfit quickly and still feel more styled than basics.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/prettygarden-summer-jumpsuit.jpg",
      alt: "PRETTYGARDEN sleeveless wide-leg summer jumpsuit",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CSNYL899"
  },
  {
    name: "ECOWISH Twist-Front Summer Maxi Dress",
    category: "Summer Dresses",
    priceHint: "$ Budget-friendly",
    description:
      "A softer maxi with a twist-front shape that works for casual weddings, dinner plans, and warm-weather photos.",
    highlights: ["Twist front", "Flutter sleeve", "Pockets"],
    bestFor: "Budget-friendly summer events",
    whyPicked:
      "It adds another event-friendly dress option without losing the easy, under-$50 Amazon energy of the edit.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/ecowish-twist-front-maxi.jpg",
      alt: "ECOWISH twist-front flutter-sleeve summer maxi dress",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0G1MHL7QQ"
  },
  {
    name: "Soothfeel UPF 50+ Lightweight Sun Hoodie Jacket",
    category: "Easy Basics",
    priceHint: "$ Mid-range",
    description:
      "A practical sun layer for beach walks, hikes, theme parks, and days when sunscreen alone feels like a lot.",
    highlights: ["UPF 50+ fabric", "Lightweight hood", "Zippered pockets"],
    bestFor: "Outdoor summer days with real sun exposure",
    whyPicked:
      "A polished summer edit still needs a practical layer, and UPF pieces are getting more everyday-friendly.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/soothfeel-upf-hoodie.jpg",
      alt: "Soothfeel lightweight UPF sun hoodie jacket for women",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B096588DBF"
  },
  {
    name: "BAGSMART Lightweight Puffy Travel Tote",
    category: "Accessories",
    priceHint: "$ Mid-range",
    description:
      "A soft, roomy tote that works for flights, beach days, gym runs, and the overflow that always happens on vacation.",
    highlights: ["Lightweight puffy build", "Multiple compartments", "Travel-friendly size"],
    bestFor: "Carry-on overflow and day trips",
    whyPicked:
      "Bags are a big part of summer outfit utility, and this one adds function without making the edit feel too technical.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/bagsmart-puffy-tote.jpg",
      alt: "BAGSMART lightweight puffy travel tote bag",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CS2X23RY"
  },
  {
    name: "Ecua-Andino Original Panama Hat",
    category: "Accessories",
    priceHint: "$ Premium",
    description:
      "A clean straw hat that makes linen, swim layers, and simple dresses feel more finished right away.",
    highlights: ["Handwoven straw", "Classic fedora shape", "Vacation-ready finish"],
    bestFor: "Resort looks and bright summer days",
    whyPicked:
      "The right hat does a lot of styling work, especially when the rest of the outfit is intentionally simple.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/ecua-andino-panama-hat.jpg",
      alt: "Ecua-Andino classic handwoven Panama hat",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07F47N286"
  },
  {
    name: "Project Cloud Cork Footbed Flat Sandals",
    category: "Sandals & Clogs",
    priceHint: "$ Mid-range",
    description:
      "A cork-footbed sandal with a cleaner vacation look than a basic flip-flop.",
    highlights: ["Leather upper", "Cork footbed", "Memory-foam feel"],
    bestFor: "Walking-heavy warm-weather outfits",
    whyPicked:
      "Flat sandals are still a summer default, but this pair adds a more polished footbed look to the lineup.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/project-cloud-cork-sandals.jpg",
      alt: "Project Cloud cork footbed flat sandals for women",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CNYCKBPN"
  },
  {
    name: "Bsubseach Floral Kaftan Beach Cover Up",
    category: "Swim & Cover-Ups",
    priceHint: "$ Budget-friendly",
    description:
      "A floaty kaftan-style layer for pool days when you want coverage that still feels relaxed and pretty.",
    highlights: ["Kaftan shape", "Floral print", "Roomy beach fit"],
    bestFor: "Pool days and resort lounging",
    whyPicked:
      "The swim section needed one breezier, more covered option for shoppers who want an easy throw-on layer.",
    trustNote: "Verified Amazon product page with a saved full-size product image.",
    image: {
      src: "/images/summer-wear/bsubseach-kaftan-coverup.jpg",
      alt: "Bsubseach floral kaftan beach cover up dress",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CTF697Q7"
  }
];

export function getSummerWearCatalog(affiliateTag: string): ProductCardContent[] {
  return summerWearSeeds.map((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}
