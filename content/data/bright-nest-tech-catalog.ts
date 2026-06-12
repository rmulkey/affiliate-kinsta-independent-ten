import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type WaveOneSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "Check it on Amazon";

const seeds: WaveOneSeed[] = [
  {
    name: "Blink Outdoor 4 Wireless Smart Security Camera, Sync Module Core Included, 3 Camera System",
    category: "Security Cameras",
    priceHint: "$$ Mid-range",
    description: "A clean starter pack for covering a few outdoor angles without wiring every spot.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Check Blink subscription/local storage preferences before choosing.",
    image: {
      src: "/images/bright-nest-tech/blink-outdoor-4-3-camera-system.jpg",
      alt: "Blink Outdoor 4 Wireless Smart Security Camera, Sync Module Core Included, 3 Camera System",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0DHLQT3CG"
  },
  {
    name: "TP-Link Tapo C100 1080P Indoor Security Camera",
    category: "Security Cameras",
    priceHint: "$ Budget-friendly",
    description: "A simple indoor camera pick for checking pets, entry rooms, or a nursery corner.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Home. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/tapo-c100-indoor-camera.jpg",
      alt: "TP-Link Tapo C100 1080P Indoor Security Camera",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0866S3D82"
  },
  {
    name: "Ring Indoor Cam, 1080p HD Video, White",
    category: "Security Cameras",
    priceHint: "$ Budget-friendly",
    description: "Good for Ring households that want a small indoor camera with familiar app controls.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Review Ring Protect options if recording history matters.",
    image: {
      src: "/images/bright-nest-tech/ring-indoor-cam-white.jpg",
      alt: "Ring Indoor Cam, 1080p HD Video, White",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B6GLQJMV"
  },
  {
    name: "Ring Outdoor Cam Stick Up Cam, Weather-Resistant, White",
    category: "Security Cameras",
    priceHint: "$$ Mid-range",
    description: "A flexible Ring camera for porches, side yards, garages, and other everyday watch spots.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Confirm mounting and power preferences before buying.",
    image: {
      src: "/images/bright-nest-tech/ring-outdoor-cam-stick-up.jpg",
      alt: "Ring Outdoor Cam Stick Up Cam, Weather-Resistant, White",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0C5QRZ47P"
  },
  {
    name: "Blink Outdoor 4 Add-On Wireless Smart Security Camera",
    category: "Security Cameras",
    priceHint: "$ Budget-friendly",
    description: "A practical add-on when you already have the Blink system and want one more view.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Requires a compatible Blink module or existing Blink setup.",
    image: {
      src: "/images/bright-nest-tech/blink-outdoor-4-add-on-camera.jpg",
      alt: "Blink Outdoor 4 Add-On Wireless Smart Security Camera",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0B1N7LJD3"
  },
  {
    name: "Ring Battery Doorbell, Venetian Bronze",
    category: "Video Doorbells",
    priceHint: "$$ Mid-range",
    description: "A renter-friendlier doorbell route when hardwiring is not the first choice.",
    highlights: ["Front-door view","App notifications","Check power requirements"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Battery upkeep and recording features depend on setup and plan.",
    image: {
      src: "/images/bright-nest-tech/ring-battery-doorbell-bronze.jpg",
      alt: "Ring Battery Doorbell, Venetian Bronze",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BZWRLRLK"
  },
  {
    name: "Ring Battery Doorbell, Satin Nickel",
    category: "Video Doorbells",
    priceHint: "$$ Mid-range",
    description: "The same simple Ring doorbell idea in a lighter finish for modern entryways.",
    highlights: ["Front-door view","App notifications","Check power requirements"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Check door frame fit and subscription preferences.",
    image: {
      src: "/images/bright-nest-tech/ring-battery-doorbell-satin.jpg",
      alt: "Ring Battery Doorbell, Satin Nickel",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BZWRSRWV"
  },
  {
    name: "Ring Floodlight Cam Wired Plus, White",
    category: "Security Cameras",
    priceHint: "$$$ Premium",
    description: "A stronger pick for driveways or backyard zones where lighting and video belong together.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Requires wired installation.",
    image: {
      src: "/images/bright-nest-tech/ring-floodlight-cam-wired-plus.jpg",
      alt: "Ring Floodlight Cam Wired Plus, White",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08F6GPQQ7"
  },
  {
    name: "Blink Mini 2K+ Plug-In Indoor Security Camera, 2 Cameras, Black",
    category: "Security Cameras",
    priceHint: "$ Budget-friendly",
    description: "A compact two-pack for indoor rooms where plug-in power is easy.",
    highlights: ["Clearer home visibility","Setup details vary","Subscription details may vary"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa. Confirm whether you want cloud or local storage accessories.",
    image: {
      src: "/images/bright-nest-tech/blink-mini-2k-plus-2-camera.jpg",
      alt: "Blink Mini 2K+ Plug-In Indoor Security Camera, 2 Cameras, Black",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F3B4PPGM"
  },
  {
    name: "Amazon Smart Plug, Works with Alexa",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "The easiest first automation for an Alexa home: lamps, fans, and simple schedules.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Alexa-focused. Not the best fit if your home is built around Google or Apple.",
    image: {
      src: "/images/bright-nest-tech/amazon-smart-plug.jpg",
      alt: "Amazon Smart Plug, Works with Alexa",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B089DR29T6"
  },
  {
    name: "GHome Smart Plug, Wi-Fi Smart Outlet Timer",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "A budget-friendly smart outlet for simple timer routines around the house.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Home. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/ghome-smart-plug.jpg",
      alt: "GHome Smart Plug, Wi-Fi Smart Outlet Timer",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0D7ZWGXGP"
  },
  {
    name: "Kasa Smart Plug Ultra Mini 15A EP10P2, 2 Count",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "A tidy two-pack for turning lamps and small appliances into app-controlled routines.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Home. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/kasa-ultra-mini-ep10p2.jpg",
      alt: "Kasa Smart Plug Ultra Mini 15A EP10P2, 2 Count",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B091FXQQMQ"
  },
  {
    name: "Amazon Basics Smart Plug, Works with Alexa Only, 4-Pack",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "A useful multi-room pack when the plan is basic Alexa scheduling, not a complex hub setup.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Alexa-only according to the product title. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/amazon-basics-smart-plug-4-pack.jpg",
      alt: "Amazon Basics Smart Plug, Works with Alexa Only, 4-Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CL9D9HM4"
  },
  {
    name: "Govee Smart Plug, Wi-Fi Outlet, 4 Pack",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "A smart plug set that pairs nicely with Govee lighting if you want one app family.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Assistant. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/govee-smart-plug-4-pack.jpg",
      alt: "Govee Smart Plug, Wi-Fi Outlet, 4 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08731J1L4"
  },
  {
    name: "Kasa Smart Plug Mini 15A EP10P4, 4-Pack",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "A dependable-feeling four-pack for lamps, fans, holiday lights, and recurring routines.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Home. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/kasa-smart-plug-mini-ep10p4.jpg",
      alt: "Kasa Smart Plug Mini 15A EP10P4, 4-Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B091FXLMS8"
  },
  {
    name: "Kasa Smart Plug HS103P4, 4-Pack",
    category: "Plugs",
    priceHint: "$ Budget-friendly",
    description: "A classic Kasa pick for shoppers who want a familiar smart plug line.",
    highlights: ["Simple automation","Alexa-friendly options","Good starter upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa, Echo, Google Home, and IFTTT according to the product title.",
    image: {
      src: "/images/bright-nest-tech/kasa-smart-plug-hs103p4.jpg",
      alt: "Kasa Smart Plug HS103P4, 4-Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07RCNB2L3"
  },
  {
    name: "Govee Smart Light Bulbs, Color Changing, A19, 4 Pack",
    category: "Smart Lighting",
    priceHint: "$ Budget-friendly",
    description: "A fun upgrade for color scenes, evening routines, and rooms that need more personality.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Assistant according to the product title.",
    image: {
      src: "/images/bright-nest-tech/govee-smart-light-bulbs-4-pack.jpg",
      alt: "Govee Smart Light Bulbs, Color Changing, A19, 4 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09B7NQT2K"
  },
  {
    name: "Amazon Basics Smart A19 LED Light Bulb, Color Changing",
    category: "Smart Lighting",
    priceHint: "$ Budget-friendly",
    description: "A low-friction single bulb for trying smart lighting before committing to a full system.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Alexa-only according to the product title. Uses 2.4 GHz Wi-Fi.",
    image: {
      src: "/images/bright-nest-tech/amazon-basics-smart-a19-bulb.jpg",
      alt: "Amazon Basics Smart A19 LED Light Bulb, Color Changing",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0CG5VDC8P"
  },
  {
    name: "Linkind Smart Light Bulbs, Color Changing, A19 E26, 4 Pack",
    category: "Smart Lighting",
    priceHint: "$ Budget-friendly",
    description: "A value-focused bulb pack for bedrooms, kids' rooms, or a quick apartment lighting refresh.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa and Google Home according to the product title.",
    image: {
      src: "/images/bright-nest-tech/linkind-smart-light-bulbs-4-pack.jpg",
      alt: "Linkind Smart Light Bulbs, Color Changing, A19 E26, 4 Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0BC8N7QXN"
  },
  {
    name: "Philips Hue Essential Smart LED A19 Bulb, White and Color Ambiance, 4-Pack",
    category: "Smart Lighting",
    priceHint: "$$ Mid-range",
    description: "A polished lighting pick for shoppers who want a more established smart lighting ecosystem.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Works with Alexa, Google, and Apple Home according to the product title.",
    image: {
      src: "/images/bright-nest-tech/philips-hue-essential-a19-4-pack.jpg",
      alt: "Philips Hue Essential Smart LED A19 Bulb, White and Color Ambiance, 4-Pack",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0FMGP1P6W"
  },
  {
    name: "Govee RGBIC LED Strip Lights, 16.4 ft",
    category: "Smart Lighting",
    priceHint: "$ Budget-friendly",
    description: "A quick mood-lighting layer for desks, bedrooms, media shelves, and behind-TV glow.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Bluetooth app control according to the product title; confirm voice support if needed.",
    image: {
      src: "/images/bright-nest-tech/govee-rgbic-led-strip-16ft.jpg",
      alt: "Govee RGBIC LED Strip Lights, 16.4 ft",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0991Q94KP"
  },
  {
    name: "Govee RGBIC Floor Lamp Basic, Matter-Compatible",
    category: "Smart Lighting",
    priceHint: "$$ Mid-range",
    description: "A clean statement lamp for renters who want big ambience without installing anything.",
    highlights: ["Warm atmosphere","Outdoor-ready","Easy patio upgrade"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Product title lists SmartThings, Alexa, and Matter compatibility.",
    image: {
      src: "/images/bright-nest-tech/govee-rgbic-floor-lamp.jpg",
      alt: "Govee RGBIC Floor Lamp Basic, Matter-Compatible",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B099WTN2TR"
  },
  {
    name: "TEEHO TE001 Keyless Entry Door Lock with Keypad, Satin Nickel",
    category: "Locks",
    priceHint: "$ Budget-friendly",
    description: "A straightforward keypad deadbolt for shoppers who want code entry without a full app-first setup.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Check door thickness, handedness, and whether you need Wi-Fi/app features.",
    image: {
      src: "/images/bright-nest-tech/teeho-te001-keypad-lock-satin.jpg",
      alt: "TEEHO TE001 Keyless Entry Door Lock with Keypad, Satin Nickel",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B09P54CLDQ"
  },
  {
    name: "Philips Wi-Fi Door Lock, Fingerprint Passcode Smart Deadbolt",
    category: "Locks",
    priceHint: "$$ Mid-range",
    description: "A more feature-rich lock option for homes that want keypad, app, and fingerprint access.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Product title lists Alexa and Google Assistant compatibility.",
    image: {
      src: "/images/bright-nest-tech/philips-wifi-door-lock.jpg",
      alt: "Philips Wi-Fi Door Lock, Fingerprint Passcode Smart Deadbolt",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0F5QKCD3S"
  },
  {
    name: "eufy Security Smart Lock C220, Fingerprint Keyless Entry Door Lock",
    category: "Locks",
    priceHint: "$$ Mid-range",
    description: "A balanced smart-lock pick for people who like eufy's app ecosystem and fingerprint entry.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Built-in Wi-Fi according to the product title. Verify door fit before buying.",
    image: {
      src: "/images/bright-nest-tech/eufy-smart-lock-c220.jpg",
      alt: "eufy Security Smart Lock C220, Fingerprint Keyless Entry Door Lock",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B0C7C69FPS"
  },
  {
    name: "Schlage Encode Smart WiFi Deadbolt, Matte Black",
    category: "Locks",
    priceHint: "$$$ Premium",
    description: "A premium-feeling deadbolt for entryways where the hardware should look intentional.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Product title lists Alexa, Hey Google, and Airbnb use cases.",
    image: {
      src: "/images/bright-nest-tech/schlage-encode-wifi-deadbolt.jpg",
      alt: "Schlage Encode Smart WiFi Deadbolt, Matte Black",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B07HXMLCBT"
  },
  {
    name: "Ring Alarm 14-Piece Kit, Wireless Smart Home Security System",
    category: "Sensors and Systems",
    priceHint: "$$$ Premium",
    description: "A broader Ring starter kit for households that want sensors and app alerts in one ecosystem.",
    highlights: ["Real product page","Useful category fit","Easy to compare"],
    bestFor: "Practical smart-home upgrades",
    whyPicked: "This made the cut because it solves a clear smart-home job without needing a full remodel. We still keep the note practical: verify compatibility, app requirements, and subscriptions before buying.",
    trustNote: "Alexa compatible according to the product title. Professional monitoring is optional and plan-dependent.",
    image: {
      src: "/images/bright-nest-tech/ring-alarm-14-piece-kit.jpg",
      alt: "Ring Alarm 14-Piece Kit, Wireless Smart Home Security System",
      kind: "product"
    },
    amazonUrl: "https://www.amazon.com/dp/B08YMBQJ49"
  }
];

export function getBrightNestTechCatalog(affiliateTag: string): ProductCardContent[] {
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
