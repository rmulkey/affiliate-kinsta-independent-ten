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
    name: "RETTACY Dotted Journal Notebook, 256 Pages, A5 Medium Size (5.7'' × 8.3''), Leather Hardcover",
    category: "Journals",
    priceHint: "$$ Mid-range",
    description: "A fresh notebook makes starting the ritual feel easier before the first page even happens.",
    highlights: ["Fresh-page energy","A5-friendly","Daily ritual ready"],
    bestFor: "Bullet journaling, daily pages, and habit tracking",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/rettacy-dotted-journal-notebook-256-pages-a5-medium-size-leather-hardcov.jpg",
      alt: "RETTACY Dotted Journal Notebook, 256 Pages, A5 Medium Size (5.7'' × 8.3''), Leather Hardcover",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0D5HFPCF1"
  },
  {
    name: "RETTACY Dotted Journal Notebook, 2-Pack, 160 Numbered Pages per Pack",
    category: "Journals",
    priceHint: "$$ Mid-range",
    description: "A fresh notebook makes starting the ritual feel easier before the first page even happens.",
    highlights: ["Fresh-page energy","A5-friendly","Daily ritual ready"],
    bestFor: "Bullet journaling, daily pages, and habit tracking",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/rettacy-dotted-journal-notebook-2-pack-160-numbered-pages-per-pack-a5-me.jpg",
      alt: "RETTACY Dotted Journal Notebook, 2-Pack, 160 Numbered Pages per Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B083J6XQCL"
  },
  {
    name: "LEUCHTTURM1917 - 120G Special Edition - Medium A5 Dotted Hardcover Notebook (Rising Sun)",
    category: "Journals",
    priceHint: "$$ Mid-range",
    description: "A fresh notebook makes starting the ritual feel easier before the first page even happens.",
    highlights: ["Fresh-page energy","A5-friendly","Daily ritual ready"],
    bestFor: "Bullet journaling, daily pages, and habit tracking",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/leuchtturm1917-120g-special-edition-medium-a5-dotted-hardcover-notebook-.jpg",
      alt: "LEUCHTTURM1917 - 120G Special Edition - Medium A5 Dotted Hardcover Notebook (Rising Sun)",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BKMY6G53"
  },
  {
    name: "LEUCHTTURM1917 - Notebook Softcover Medium A5-123 Numbered Pages",
    category: "Journals",
    priceHint: "$$ Mid-range",
    description: "A fresh notebook makes starting the ritual feel easier before the first page even happens.",
    highlights: ["Fresh-page energy","A5-friendly","Daily ritual ready"],
    bestFor: "Bullet journaling, daily pages, and habit tracking",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/leuchtturm1917-notebook-softcover-medium-a5-123-numbered-pages-for-writi.jpg",
      alt: "LEUCHTTURM1917 - Notebook Softcover Medium A5-123 Numbered Pages",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B003EVHV6S"
  },
  {
    name: "LEUCHTTURM1917 - Notebook Hardcover Medium A5-251 Numbered Pages",
    category: "Journals",
    priceHint: "$$ Mid-range",
    description: "A fresh notebook makes starting the ritual feel easier before the first page even happens.",
    highlights: ["Fresh-page energy","A5-friendly","Daily ritual ready"],
    bestFor: "Bullet journaling, daily pages, and habit tracking",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/leuchtturm1917-notebook-hardcover-medium-a5-251-numbered-pages-for-writi.jpg",
      alt: "LEUCHTTURM1917 - Notebook Hardcover Medium A5-251 Numbered Pages",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B002CVAU1Y"
  },
  {
    name: "Amazon Basics Retractable Gel Pens, Fine Point 0.7mm, Smooth Writing, Assorted Colors, 12-Pack",
    category: "Pens",
    priceHint: "$ Budget-friendly",
    description: "Adds color and momentum without making the desk feel like a school-supply explosion.",
    highlights: ["Smooth writing","Color without chaos","Desk-friendly"],
    bestFor: "Lists, headers, journal spreads, and notes",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/amazon-basics-retractable-gel-pens-fine-point-0-7mm-smooth-writing-assor.jpg",
      alt: "Amazon Basics Retractable Gel Pens, Fine Point 0.7mm, Smooth Writing, Assorted Colors, 12-Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BZVFXQYV"
  },
  {
    name: "Mr. Pen- Retractable Gel Pens, 11 Pack, Dark Vintage Color Ink, Fine Point 0.7 mm, Fast Dry",
    category: "Pens",
    priceHint: "$ Budget-friendly",
    description: "Adds color and momentum without making the desk feel like a school-supply explosion.",
    highlights: ["Smooth writing","Color without chaos","Desk-friendly"],
    bestFor: "Lists, headers, journal spreads, and notes",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/mr-pen-retractable-gel-pens-11-pack-dark-vintage-color-ink-fine-point-0-.jpg",
      alt: "Mr. Pen- Retractable Gel Pens, 11 Pack, Dark Vintage Color Ink, Fine Point 0.7 mm, Fast Dry",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CXDJMCYK"
  },
  {
    name: "Colored Gel Ink Pens 0.5mm 8 Colors Retractable Quick Dry Colorful Ink Pen Fine Point Smooth Wri",
    category: "Pens",
    priceHint: "$ Budget-friendly",
    description: "Adds color and momentum without making the desk feel like a school-supply explosion.",
    highlights: ["Smooth writing","Color without chaos","Desk-friendly"],
    bestFor: "Lists, headers, journal spreads, and notes",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/colored-gel-ink-pens-0-5mm-8-colors-retractable-quick-dry-colorful-ink-p.jpg",
      alt: "Colored Gel Ink Pens 0.5mm 8 Colors Retractable Quick Dry Colorful Ink Pen Fine Point Smooth Wri",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FSRXNV21"
  },
  {
    name: "Zebra Sarasa Clip 0.5 Retractable Gel Ink Pen, Rubber Grip, 0.5 mm, Vintage Colors",
    category: "Pens",
    priceHint: "$ Budget-friendly",
    description: "Adds color and momentum without making the desk feel like a school-supply explosion.",
    highlights: ["Smooth writing","Color without chaos","Desk-friendly"],
    bestFor: "Lists, headers, journal spreads, and notes",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/zebra-sarasa-clip-0-5-retractable-gel-ink-pen-rubber-grip-0-5-mm-vintage.jpg",
      alt: "Zebra Sarasa Clip 0.5 Retractable Gel Ink Pen, Rubber Grip, 0.5 mm, Vintage Colors",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07T9HCRZR"
  },
  {
    name: "Colored Gel Ink Pens 0.7mm 8 Colors Retractable Quick Dry Colorful Ink Pen Medium Point Smooth W",
    category: "Pens",
    priceHint: "$ Budget-friendly",
    description: "Adds color and momentum without making the desk feel like a school-supply explosion.",
    highlights: ["Smooth writing","Color without chaos","Desk-friendly"],
    bestFor: "Lists, headers, journal spreads, and notes",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/colored-gel-ink-pens-0-7mm-8-colors-retractable-quick-dry-colorful-ink-p.jpg",
      alt: "Colored Gel Ink Pens 0.7mm 8 Colors Retractable Quick Dry Colorful Ink Pen Medium Point Smooth W",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GJYHL7FN"
  },
  {
    name: "Wordsworth and Black Fountain Pen Set - Black - Includes 2 Pens, 18 ML Ink Bottle",
    category: "Fountain Pens",
    priceHint: "$$ Mid-range",
    description: "Turns ordinary writing into something slower, smoother, and a little more satisfying.",
    highlights: ["Slower writing feel","Beginner-friendly","Giftable"],
    bestFor: "People who want writing to feel less disposable",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/wordsworth-and-black-fountain-pen-set-black-includes-2-pens-18-ml-ink-bo.jpg",
      alt: "Wordsworth and Black Fountain Pen Set - Black - Includes 2 Pens, 18 ML Ink Bottle",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B00IOOOBU4"
  },
  {
    name: "Pilot Kakuno Fountain Pen, Clear Barrel, Medium Nib, 0.5mm, Pilot Kakuno Fountain Pen Extra Fine",
    category: "Fountain Pens",
    priceHint: "$$ Mid-range",
    description: "Turns ordinary writing into something slower, smoother, and a little more satisfying.",
    highlights: ["Slower writing feel","Beginner-friendly","Giftable"],
    bestFor: "People who want writing to feel less disposable",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/pilot-kakuno-fountain-pen-clear-barrel-medium-nib-0-5mm-pilot-kakuno-fou.jpg",
      alt: "Pilot Kakuno Fountain Pen, Clear Barrel, Medium Nib, 0.5mm, Pilot Kakuno Fountain Pen Extra Fine",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07KBVCTR3"
  },
  {
    name: "PILOT Kakuno Fountain Pen, Pink Barrel, Fine Nib",
    category: "Fountain Pens",
    priceHint: "$$ Mid-range",
    description: "Turns ordinary writing into something slower, smoother, and a little more satisfying.",
    highlights: ["Slower writing feel","Beginner-friendly","Giftable"],
    bestFor: "People who want writing to feel less disposable",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/pilot-kakuno-fountain-pen-pink-barrel-fine-nib-4-74-7-out-of-5-stars-600.jpg",
      alt: "PILOT Kakuno Fountain Pen, Pink Barrel, Fine Nib",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DT4ZN58L"
  },
  {
    name: "Pilot Kakuno Fountain Pen Madoromi Color Series, Gold (Smiley Face) Medium Nib, Perfect",
    category: "Fountain Pens",
    priceHint: "$$ Mid-range",
    description: "Turns ordinary writing into something slower, smoother, and a little more satisfying.",
    highlights: ["Slower writing feel","Beginner-friendly","Giftable"],
    bestFor: "People who want writing to feel less disposable",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/pilot-kakuno-fountain-pen-madoromi-color-series-gold-medium-nib-perfect-.jpg",
      alt: "Pilot Kakuno Fountain Pen Madoromi Color Series, Gold (Smiley Face) Medium Nib, Perfect",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DP68C6Y1"
  },
  {
    name: "Pilot Kakuno Fountain Pen Madoromi Color Series, Gold (Smiley Face) Fine Nib, Perfect",
    category: "Fountain Pens",
    priceHint: "$$ Mid-range",
    description: "Turns ordinary writing into something slower, smoother, and a little more satisfying.",
    highlights: ["Slower writing feel","Beginner-friendly","Giftable"],
    bestFor: "People who want writing to feel less disposable",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/pilot-kakuno-fountain-pen-madoromi-color-series-gold-fine-nib-perfect-fo.jpg",
      alt: "Pilot Kakuno Fountain Pen Madoromi Color Series, Gold (Smiley Face) Fine Nib, Perfect",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DP67LBLX"
  },
  {
    name: "90 Pack Airmail Stationery Paper Set, Vintage Letter Writing Paper and Envelopes Set",
    category: "Letters",
    priceHint: "$ Budget-friendly",
    description: "Makes sending a note feel charming instead of like hunting for random paper in a drawer.",
    highlights: ["Mail-ready","Personal touch","Small-gift friendly"],
    bestFor: "Pen-pal mail, thank-you notes, and small gifts",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/90-pack-airmail-stationery-paper-set-vintage-letter-writing-paper-and-en.jpg",
      alt: "90 Pack Airmail Stationery Paper Set, Vintage Letter Writing Paper and Envelopes Set",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GHPDTRJZ"
  },
  {
    name: "Beautiful Stationery Set with Envelopes - Premium-Quality",
    category: "Letters",
    priceHint: "$ Budget-friendly",
    description: "Makes sending a note feel charming instead of like hunting for random paper in a drawer.",
    highlights: ["Mail-ready","Personal touch","Small-gift friendly"],
    bestFor: "Pen-pal mail, thank-you notes, and small gifts",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/beautiful-stationery-set-with-envelopes-premium-quality-no-bleed-lined-l.jpg",
      alt: "Beautiful Stationery Set with Envelopes - Premium-Quality",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FR9VF38V"
  },
  {
    name: "Mr. Pen- Stationery Writing Paper Set with Envelopes, 8.18\" x 5.5\"",
    category: "Letters",
    priceHint: "$ Budget-friendly",
    description: "Makes sending a note feel charming instead of like hunting for random paper in a drawer.",
    highlights: ["Mail-ready","Personal touch","Small-gift friendly"],
    bestFor: "Pen-pal mail, thank-you notes, and small gifts",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/mr-pen-stationery-writing-paper-set-with-envelopes-8-18-x-5-5-30-letter-.jpg",
      alt: "Mr. Pen- Stationery Writing Paper Set with Envelopes, 8.18\" x 5.5\"",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CT94BJSV"
  },
  {
    name: "Blue Dragonfly Stationery Set (Boxed Stationery) by Peter Pauper Press",
    category: "Letters",
    priceHint: "$ Budget-friendly",
    description: "Makes sending a note feel charming instead of like hunting for random paper in a drawer.",
    highlights: ["Mail-ready","Personal touch","Small-gift friendly"],
    bestFor: "Pen-pal mail, thank-you notes, and small gifts",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/blue-dragonfly-stationery-set-by-peter-pauper-press-4-84-8-out-of-5-star.jpg",
      alt: "Blue Dragonfly Stationery Set (Boxed Stationery) by Peter Pauper Press",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/1441315314"
  },
  {
    name: "Mr. Pen- Stationery Writing Paper Set with Envelopes, 5.2\" x 7.3\"",
    category: "Letters",
    priceHint: "$ Budget-friendly",
    description: "Makes sending a note feel charming instead of like hunting for random paper in a drawer.",
    highlights: ["Mail-ready","Personal touch","Small-gift friendly"],
    bestFor: "Pen-pal mail, thank-you notes, and small gifts",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/mr-pen-stationery-writing-paper-set-with-envelopes-5-2-x-7-3-60-letter-s.jpg",
      alt: "Mr. Pen- Stationery Writing Paper Set with Envelopes, 5.2\" x 7.3\"",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DZGTPY2N"
  },
  {
    name: "Vintage Botanical Scrapbooking Supplies Kit, Aesthetic Flower Scrapbook Kit",
    category: "Scrapbooking",
    priceHint: "$ Budget-friendly",
    description: "Adds texture, layering, and personality for memory keeping without needing a giant craft closet.",
    highlights: ["Layered pages","Creative texture","Weekend hobby friendly"],
    bestFor: "Creative pages, photos, and weekend hobby time",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/vintage-botanical-scrapbooking-supplies-kit-aesthetic-flower-scrapbook-k.jpg",
      alt: "Vintage Botanical Scrapbooking Supplies Kit, Aesthetic Flower Scrapbook Kit",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DD7MF17D"
  },
  {
    name: "565 Pcs Vintage Scrapbook Paper Kit, Scrapbook Paper Supplies with Flowers Stickers",
    category: "Scrapbooking",
    priceHint: "$ Budget-friendly",
    description: "Adds texture, layering, and personality for memory keeping without needing a giant craft closet.",
    highlights: ["Layered pages","Creative texture","Weekend hobby friendly"],
    bestFor: "Creative pages, photos, and weekend hobby time",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/565-pcs-vintage-scrapbook-paper-kit-scrapbook-paper-supplies-with-flower.jpg",
      alt: "565 Pcs Vintage Scrapbook Paper Kit, Scrapbook Paper Supplies with Flowers Stickers",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F293W9VK"
  },
  {
    name: "100 Pcs Vintage Film Theme Scrapbook Paper Washi Stickers Kit for Journaling Supplies",
    category: "Scrapbooking",
    priceHint: "$ Budget-friendly",
    description: "Adds texture, layering, and personality for memory keeping without needing a giant craft closet.",
    highlights: ["Layered pages","Creative texture","Weekend hobby friendly"],
    bestFor: "Creative pages, photos, and weekend hobby time",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/100-pcs-vintage-film-theme-scrapbook-paper-washi-stickers-kit-for-journa.jpg",
      alt: "100 Pcs Vintage Film Theme Scrapbook Paper Washi Stickers Kit for Journaling Supplies",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0G1LQZSY6"
  },
  {
    name: "Knaid Vintage Scrapbook Supplies Pack (200 Pieces)",
    category: "Scrapbooking",
    priceHint: "$ Budget-friendly",
    description: "Adds texture, layering, and personality for memory keeping without needing a giant craft closet.",
    highlights: ["Layered pages","Creative texture","Weekend hobby friendly"],
    bestFor: "Creative pages, photos, and weekend hobby time",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/knaid-vintage-scrapbook-supplies-pack-for-witchy-junk-journal-bullet-jou.jpg",
      alt: "Knaid Vintage Scrapbook Supplies Pack (200 Pieces)",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09C8HLMY5"
  },
  {
    name: "Fayware 300+ Travel Stickers for Scrapbooking & 20 A5 Papers - Pre-Cut Washi Stickers",
    category: "Scrapbooking",
    priceHint: "$ Budget-friendly",
    description: "Adds texture, layering, and personality for memory keeping without needing a giant craft closet.",
    highlights: ["Layered pages","Creative texture","Weekend hobby friendly"],
    bestFor: "Creative pages, photos, and weekend hobby time",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/fayware-300-travel-stickers-for-scrapbooking-20-a5-papers-pre-cut-washi-.jpg",
      alt: "Fayware 300+ Travel Stickers for Scrapbooking & 20 A5 Papers - Pre-Cut Washi Stickers",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0D9MNGSSX"
  },
  {
    name: "Metal Mesh Desk Organizer with 6 Compartments, Anti-Slip Pen Holder Storage Tray",
    category: "Desk Tools",
    priceHint: "$$ Mid-range",
    description: "Keeps the writing tools visible enough to use and tidy enough to leave out.",
    highlights: ["Tidy supplies","Visible tools","Small-desk friendly"],
    bestFor: "Small desks and creative corners",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/metal-mesh-desk-organizer-with-6-compartments-anti-slip-pen-holder-stora.jpg",
      alt: "Metal Mesh Desk Organizer with 6 Compartments, Anti-Slip Pen Holder Storage Tray",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07VZNMNH9"
  },
  {
    name: "Plastic Desk Organizer - Pen Cup, 3.9\" x 3.4\" x 3.4\", Black",
    category: "Desk Tools",
    priceHint: "$$ Mid-range",
    description: "Keeps the writing tools visible enough to use and tidy enough to leave out.",
    highlights: ["Tidy supplies","Visible tools","Small-desk friendly"],
    bestFor: "Small desks and creative corners",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/plastic-desk-organizer-pen-cup-3-9-x-3-4-x-3-4-black-4-64-6-out-of-5-sta.jpg",
      alt: "Plastic Desk Organizer - Pen Cup, 3.9\" x 3.4\" x 3.4\", Black",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07RWK43MD"
  },
  {
    name: "Desk Organizer with Pen Holder, Multifunctional Desktop Stationery Storage Box",
    category: "Desk Tools",
    priceHint: "$$ Mid-range",
    description: "Keeps the writing tools visible enough to use and tidy enough to leave out.",
    highlights: ["Tidy supplies","Visible tools","Small-desk friendly"],
    bestFor: "Small desks and creative corners",
    whyPicked: "This made the cut because it supports a real analog habit: writing more, keeping better notes, making prettier pages, or keeping the desk ready to use.",
    trustNote: "Verified from a real Amazon product page with a local product image saved for this catalog.",
    image: {
      src: "/images/paper-ritual/desk-organizer-with-pen-holder-multifunctional-desktop-stationery-storag.jpg",
      alt: "Desk Organizer with Pen Holder, Multifunctional Desktop Stationery Storage Box",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0H24WD4LY"
  }
];

export function getPaperRitualCatalog(affiliateTag: string): ProductCardContent[] {
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
