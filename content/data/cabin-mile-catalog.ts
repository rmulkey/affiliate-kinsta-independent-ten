import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type WaveTwoSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "Check it on Amazon";

const seeds: WaveTwoSeed[] = [
  {
    name: "LISEN Retractable Car Charger, Gifts for Fathers Day for Men Dad Husband",
    category: "Charging",
    priceHint: "$$$ Premium",
    description: "Keeps phones, tablets, and road-trip gear powered without cable chaos.",
    highlights: ["Cabin power","Cable control","Road-trip ready"],
    bestFor: "Commutes, road trips, and rideshare days",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/lisen-retractable-car-charger-gifts-for-fathers-day-for-men-dad-husban.jpg",
      alt: "LISEN Retractable Car Charger, Gifts for Fathers Day for Men Dad Husband",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0D4215HCX"
  },
  {
    name: "SUPERONE 6 in 1 Retractable Car Charger with Dual Type C Cables",
    category: "Charging",
    priceHint: "$$ Mid-range",
    description: "Keeps phones, tablets, and road-trip gear powered without cable chaos.",
    highlights: ["Cabin power","Cable control","Road-trip ready"],
    bestFor: "Commutes, road trips, and rideshare days",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/superone-6-in-1-retractable-car-charger-with-dual-type-c-cables.jpg",
      alt: "SUPERONE 6 in 1 Retractable Car Charger with Dual Type C Cables",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F6YLKNQ8"
  },
  {
    name: "BERTHALESS Retractable Car Charger, 4 in 1 Fast Charging Car Charger with USB-C & USB-A",
    category: "Charging",
    priceHint: "$$ Mid-range",
    description: "Keeps phones, tablets, and road-trip gear powered without cable chaos.",
    highlights: ["Cabin power","Cable control","Road-trip ready"],
    bestFor: "Commutes, road trips, and rideshare days",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/berthaless-retractable-car-charger-4-in-1-fast-charging-car-charger-wi.jpg",
      alt: "BERTHALESS Retractable Car Charger, 4 in 1 Fast Charging Car Charger with USB-C & USB-A",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DFLVGQX5"
  },
  {
    name: "SUPERONE 90W Retractable Car Charger with Dual Type C Cables, Car Adapter USB C Fast Charger",
    category: "Charging",
    priceHint: "$ Budget-friendly",
    description: "Keeps phones, tablets, and road-trip gear powered without cable chaos.",
    highlights: ["Cabin power","Cable control","Road-trip ready"],
    bestFor: "Commutes, road trips, and rideshare days",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/superone-90w-retractable-car-charger-with-dual-type-c-cables-car-adapt.jpg",
      alt: "SUPERONE 90W Retractable Car Charger with Dual Type C Cables, Car Adapter USB C Fast Charger",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0G34FYGFK"
  },
  {
    name: "[Apple MFi Certified] Retractable Car Charger USB C",
    category: "Charging",
    priceHint: "$$ Mid-range",
    description: "Keeps phones, tablets, and road-trip gear powered without cable chaos.",
    highlights: ["Cabin power","Cable control","Road-trip ready"],
    bestFor: "Commutes, road trips, and rideshare days",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/apple-mfi-certified-retractable-car-charger-usb-c.jpg",
      alt: "[Apple MFi Certified] Retractable Car Charger USB C",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F6YNR8F3"
  },
  {
    name: "[2026 Ultra-Compact] JOYROOM Retractable Car Charger 84W Car Charger USB C",
    category: "Charging",
    priceHint: "$$ Mid-range",
    description: "Keeps phones, tablets, and road-trip gear powered without cable chaos.",
    highlights: ["Cabin power","Cable control","Road-trip ready"],
    bestFor: "Commutes, road trips, and rideshare days",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/2026-ultra-compact-joyroom-retractable-car-charger-84w-car-charger-usb.jpg",
      alt: "[2026 Ultra-Compact] JOYROOM Retractable Car Charger 84W Car Charger USB C",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DP7CG8HG"
  },
  {
    name: "ESR for MagSafe Car Mount Charger,15W Magnetic Wireless Car Charger, for MagSafe Car Charging",
    category: "Mounts",
    priceHint: "$ Budget-friendly",
    description: "Puts navigation where it is easier to glance at without creating a dashboard mess.",
    highlights: ["Hands-free setup","Check fit","Dashboard clarity"],
    bestFor: "Navigation, calls, and cleaner commutes",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/esr-for-magsafe-car-mount-charger-15w-magnetic-wireless-car-charger-fo.jpg",
      alt: "ESR for MagSafe Car Mount Charger,15W Magnetic Wireless Car Charger, for MagSafe Car Charging",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08HNBHSQV"
  },
  {
    name: "Lamicall for MagSafe Car Mount - [20 Super Magnets] Magnetic Phone Holders for Your Car",
    category: "Mounts",
    priceHint: "$$ Mid-range",
    description: "Puts navigation where it is easier to glance at without creating a dashboard mess.",
    highlights: ["Hands-free setup","Check fit","Dashboard clarity"],
    bestFor: "Navigation, calls, and cleaner commutes",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/lamicall-for-magsafe-car-mount-20-super-magnets-magnetic-phone-holders.jpg",
      alt: "Lamicall for MagSafe Car Mount - [20 Super Magnets] Magnetic Phone Holders for Your Car",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BQRJ6Y5P"
  },
  {
    name: "ANDERY Car Phone Holder for Magsafe [78+LBS Strongest Suction & 2400gf Strongest Magnetic] 360°",
    category: "Mounts",
    priceHint: "$$ Mid-range",
    description: "Puts navigation where it is easier to glance at without creating a dashboard mess.",
    highlights: ["Hands-free setup","Check fit","Dashboard clarity"],
    bestFor: "Navigation, calls, and cleaner commutes",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/andery-car-phone-holder-for-magsafe-78-lbs-strongest-suction-2400gf-st.jpg",
      alt: "ANDERY Car Phone Holder for Magsafe [78+LBS Strongest Suction & 2400gf Strongest Magnetic] 360°",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DN1S1YLV"
  },
  {
    name: "Coolpow for MagSafe Car Mount【Windshield+Vent+Dash】 Magnetic Phone Holder",
    category: "Mounts",
    priceHint: "$$$ Premium",
    description: "Puts navigation where it is easier to glance at without creating a dashboard mess.",
    highlights: ["Hands-free setup","Check fit","Dashboard clarity"],
    bestFor: "Navigation, calls, and cleaner commutes",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/coolpow-for-magsafe-car-mount-windshield-vent-dash-magnetic-phone-hold.jpg",
      alt: "Coolpow for MagSafe Car Mount【Windshield+Vent+Dash】 Magnetic Phone Holder",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BXDJLS35"
  },
  {
    name: "Estbuc 2-in-1 15W Magsafe Car Mount Charger, Magnetic Wireless Car Charger",
    category: "Mounts",
    priceHint: "$$ Mid-range",
    description: "Puts navigation where it is easier to glance at without creating a dashboard mess.",
    highlights: ["Hands-free setup","Check fit","Dashboard clarity"],
    bestFor: "Navigation, calls, and cleaner commutes",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/estbuc-2-in-1-15w-magsafe-car-mount-charger-magnetic-wireless-car-char.jpg",
      alt: "Estbuc 2-in-1 15W Magsafe Car Mount Charger, Magnetic Wireless Car Charger",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GF7YW731"
  },
  {
    name: "LISEN for 15W MagSafe Car Mount Charger,Magnetic Wireless Car Charger",
    category: "Mounts",
    priceHint: "$$ Mid-range",
    description: "Puts navigation where it is easier to glance at without creating a dashboard mess.",
    highlights: ["Hands-free setup","Check fit","Dashboard clarity"],
    bestFor: "Navigation, calls, and cleaner commutes",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/lisen-for-15w-magsafe-car-mount-charger-magnetic-wireless-car-charger.jpg",
      alt: "LISEN for 15W MagSafe Car Mount Charger,Magnetic Wireless Car Charger",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CQPHLQYH"
  },
  {
    name: "Givifive Car Seat Gap Filler Set of 2, Soft Foam Multifunctional Seat Side Gap Filler",
    category: "Organization",
    priceHint: "$ Budget-friendly",
    description: "Turns the car from rolling junk drawer into something you can reset quickly.",
    highlights: ["Clutter control","Easy reset","Storage zones"],
    bestFor: "Trunks, consoles, and family cars",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/givifive-car-seat-gap-filler-set-of-2-soft-foam-multifunctional-seat-s.jpg",
      alt: "Givifive Car Seat Gap Filler Set of 2, Soft Foam Multifunctional Seat Side Gap Filler",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CBJTXH64"
  },
  {
    name: "2 Packs Car Seat Gap Filler Organizer, Dual Slot Car Seat Gap Organizer, Gap Filler for Car",
    category: "Organization",
    priceHint: "$$ Mid-range",
    description: "Turns the car from rolling junk drawer into something you can reset quickly.",
    highlights: ["Clutter control","Easy reset","Storage zones"],
    bestFor: "Trunks, consoles, and family cars",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/2-packs-car-seat-gap-filler-organizer-dual-slot-car-seat-gap-organizer.jpg",
      alt: "2 Packs Car Seat Gap Filler Organizer, Dual Slot Car Seat Gap Organizer, Gap Filler for Car",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F9F7XT5M"
  },
  {
    name: "Car Seat Gap Filler 2 Pack, Soft Foam Multifunctional Seat Side Gap Filler with Organizer",
    category: "Organization",
    priceHint: "$$ Mid-range",
    description: "Turns the car from rolling junk drawer into something you can reset quickly.",
    highlights: ["Clutter control","Easy reset","Storage zones"],
    bestFor: "Trunks, consoles, and family cars",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/car-seat-gap-filler-2-pack-soft-foam-multifunctional-seat-side-gap-fil.jpg",
      alt: "Car Seat Gap Filler 2 Pack, Soft Foam Multifunctional Seat Side Gap Filler with Organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GHH9128J"
  },
  {
    name: "Givifive Car Seat Gap Filler Set of 2, 3IN1 Seat Side Gap Filler Plug",
    category: "Organization",
    priceHint: "$ Budget-friendly",
    description: "Turns the car from rolling junk drawer into something you can reset quickly.",
    highlights: ["Clutter control","Easy reset","Storage zones"],
    bestFor: "Trunks, consoles, and family cars",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/givifive-car-seat-gap-filler-set-of-2-3in1-seat-side-gap-filler-plug.jpg",
      alt: "Givifive Car Seat Gap Filler Set of 2, 3IN1 Seat Side Gap Filler Plug",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FHZYGRK7"
  },
  {
    name: "Car Seat Organizer Backseat and Passenger Seat Organizer",
    category: "Organization",
    priceHint: "$$ Mid-range",
    description: "Turns the car from rolling junk drawer into something you can reset quickly.",
    highlights: ["Clutter control","Easy reset","Storage zones"],
    bestFor: "Trunks, consoles, and family cars",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/car-seat-organizer-backseat-and-passenger-seat-organizer.jpg",
      alt: "Car Seat Organizer Backseat and Passenger Seat Organizer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FVDMD6QR"
  },
  {
    name: "2 Pack Car Universal Fit Seat Gap Filler Organizer, Premium Leather Front Car Gap Filler",
    category: "Organization",
    priceHint: "$$ Mid-range",
    description: "Turns the car from rolling junk drawer into something you can reset quickly.",
    highlights: ["Clutter control","Easy reset","Storage zones"],
    bestFor: "Trunks, consoles, and family cars",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/2-pack-car-universal-fit-seat-gap-filler-organizer-premium-leather-fro.jpg",
      alt: "2 Pack Car Universal Fit Seat Gap Filler Organizer, Premium Leather Front Car Gap Filler",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GG8JB4XC"
  },
  {
    name: "17pcs Car Cleaning Kit, Pink Car Interior Detailing Kit with High Power Handheld Vacuum",
    category: "Cleaning",
    priceHint: "$$$ Premium",
    description: "Makes quick cleanups more likely because the tool can live in or near the car.",
    highlights: ["Quick cleanup","Small footprint","Interior-friendly"],
    bestFor: "Crumbs, dust, vents, and weekend resets",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/17pcs-car-cleaning-kit-pink-car-interior-detailing-kit-with-high-power.jpg",
      alt: "17pcs Car Cleaning Kit, Pink Car Interior Detailing Kit with High Power Handheld Vacuum",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09WJ1C2JL"
  },
  {
    name: "25PCS Car Cleaning Kit, Car Detailing Kit Interior with High Power Handheld Vacuum Cleaner",
    category: "Cleaning",
    priceHint: "$$ Mid-range",
    description: "Makes quick cleanups more likely because the tool can live in or near the car.",
    highlights: ["Quick cleanup","Small footprint","Interior-friendly"],
    bestFor: "Crumbs, dust, vents, and weekend resets",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/25pcs-car-cleaning-kit-car-detailing-kit-interior-with-high-power-hand.jpg",
      alt: "25PCS Car Cleaning Kit, Car Detailing Kit Interior with High Power Handheld Vacuum Cleaner",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FN32M43Z"
  },
  {
    name: "ThinkLearn Car Cleaning Kit, Car Vacuum Detailing Kit Interior with High Power Handheld Vacuum",
    category: "Cleaning",
    priceHint: "$$ Mid-range",
    description: "Makes quick cleanups more likely because the tool can live in or near the car.",
    highlights: ["Quick cleanup","Small footprint","Interior-friendly"],
    bestFor: "Crumbs, dust, vents, and weekend resets",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/thinklearn-car-cleaning-kit-car-vacuum-detailing-kit-interior-with-hig.jpg",
      alt: "ThinkLearn Car Cleaning Kit, Car Vacuum Detailing Kit Interior with High Power Handheld Vacuum",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0C6GBDZ7P"
  },
  {
    name: "10PCS Car Detailing Cleaning Kit Interior Cleaner, Car Detailing Brushes, Car Duster",
    category: "Cleaning",
    priceHint: "$ Budget-friendly",
    description: "Makes quick cleanups more likely because the tool can live in or near the car.",
    highlights: ["Quick cleanup","Small footprint","Interior-friendly"],
    bestFor: "Crumbs, dust, vents, and weekend resets",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/10pcs-car-detailing-cleaning-kit-interior-cleaner-car-detailing-brushe.jpg",
      alt: "10PCS Car Detailing Cleaning Kit Interior Cleaner, Car Detailing Brushes, Car Duster",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DZ25Z63W"
  },
  {
    name: "18PCS Car Cleaning Kit, Car Interior Detailing Kit with Blue High Power Handheld Vacuum",
    category: "Cleaning",
    priceHint: "$$ Mid-range",
    description: "Makes quick cleanups more likely because the tool can live in or near the car.",
    highlights: ["Quick cleanup","Small footprint","Interior-friendly"],
    bestFor: "Crumbs, dust, vents, and weekend resets",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/18pcs-car-cleaning-kit-car-interior-detailing-kit-with-blue-high-power.jpg",
      alt: "18PCS Car Cleaning Kit, Car Interior Detailing Kit with Blue High Power Handheld Vacuum",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F5W9LLS5"
  },
  {
    name: "20PCS Pink Car Cleaning Kit, Car Interior Detailing Kit with Red High Power Handheld Vacuum",
    category: "Cleaning",
    priceHint: "$$ Mid-range",
    description: "Makes quick cleanups more likely because the tool can live in or near the car.",
    highlights: ["Quick cleanup","Small footprint","Interior-friendly"],
    bestFor: "Crumbs, dust, vents, and weekend resets",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/20pcs-pink-car-cleaning-kit-car-interior-detailing-kit-with-red-high-p.jpg",
      alt: "20PCS Pink Car Cleaning Kit, Car Interior Detailing Kit with Red High Power Handheld Vacuum",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0GTZ8QTY4"
  },
  {
    name: "Jump Starter with Air Compressor, VCANENERGY Roadside Emergency Car Kit",
    category: "Roadside",
    priceHint: "$ Budget-friendly",
    description: "Adds practical backup gear for common car hassles without making safety guarantees.",
    highlights: ["Preparedness item","Check specs","Trunk-friendly"],
    bestFor: "Preparedness-minded drivers",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/jump-starter-with-air-compressor-vcanenergy-roadside-emergency-car-kit.jpg",
      alt: "Jump Starter with Air Compressor, VCANENERGY Roadside Emergency Car Kit",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F23JM8FM"
  },
  {
    name: "TREKURE 16-in-1 8000A Car Battery Jump Starter with Air Compressor 160PSI",
    category: "Roadside",
    priceHint: "$$ Mid-range",
    description: "Adds practical backup gear for common car hassles without making safety guarantees.",
    highlights: ["Preparedness item","Check specs","Trunk-friendly"],
    bestFor: "Preparedness-minded drivers",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/trekure-16-in-1-8000a-car-battery-jump-starter-with-air-compressor-160.jpg",
      alt: "TREKURE 16-in-1 8000A Car Battery Jump Starter with Air Compressor 160PSI",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DTHJ4QQN"
  },
  {
    name: "Acmount D18 Jump Starter with Air Compressor, 6000A Car Battery Jumper Starter Portable(All Gas/",
    category: "Roadside",
    priceHint: "$$ Mid-range",
    description: "Adds practical backup gear for common car hassles without making safety guarantees.",
    highlights: ["Preparedness item","Check specs","Trunk-friendly"],
    bestFor: "Preparedness-minded drivers",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/acmount-d18-jump-starter-with-air-compressor-6000a-car-battery-jumper-.jpg",
      alt: "Acmount D18 Jump Starter with Air Compressor, 6000A Car Battery Jumper Starter Portable(All Gas/",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FMY62LL5"
  },
  {
    name: "5000A Jump Starter with Air Compressor, Portable Car Battery Jump Starter",
    category: "Roadside",
    priceHint: "$$$ Premium",
    description: "Adds practical backup gear for common car hassles without making safety guarantees.",
    highlights: ["Preparedness item","Check specs","Trunk-friendly"],
    bestFor: "Preparedness-minded drivers",
    whyPicked: "This made the cut because it solves a clear car-cabin friction point. Check fitment, dimensions, and vehicle compatibility before buying.",
    trustNote: "Verified from a real Amazon product page with a local product image; check vehicle fitment and product specs before buying.",
    image: {
      src: "/images/cabin-mile/5000a-jump-starter-with-air-compressor-portable-car-battery-jump-start.jpg",
      alt: "5000A Jump Starter with Air Compressor, Portable Car Battery Jump Starter",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0G7YQGM2L"
  }
];

export function getCabinMileCatalog(affiliateTag: string): ProductCardContent[] {
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
