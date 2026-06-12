import { appendAmazonAffiliateTag } from "@/lib/amazon";
import { type ProductCardContent } from "@/lib/types";

type GeneratedSeed = Omit<
  ProductCardContent,
  "affiliateUrl" | "ctaLabel" | "commerce"
> & {
  amazonUrl: string;
};

const ctaLabel = "See it on Amazon";

const seeds: GeneratedSeed[] = [
  {
    "name": "Jgstkcity Desk Clamp Power Strip USB C,40W Total Fast Charging Station,4 PD 20W USB C Ports,Desk Edge Mount Surge Protector,5 Outlets,Fit 1...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51LfO2+Kn9L._AC_UL320_.jpg",
      "alt": "Jgstkcity Desk Clamp Power Strip USB C,40W Total Fast Charging Station,4 PD 20W USB C Ports,Desk Edge Mount Surge Protector,5 Outlets,Fit 1...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BXP2ZTWB"
  },
  {
    "name": "N NOROCME 192 PCS Cable Management Kit 4 Wire Organizer Sleeve,11 Cable Holder,35Cord Clips 10+2 Roll Cable Organizer Straps and 100 Fasten...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81F7bTfj+4L._AC_UL320_.jpg",
      "alt": "N NOROCME 192 PCS Cable Management Kit 4 Wire Organizer Sleeve,11 Cable Holder,35Cord Clips 10+2 Roll Cable Organizer Straps and 100 Fasten...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B687J37D"
  },
  {
    "name": "Gel Keyboard and Mouse Wrist Rest Set, Ergonomic Computer Keyboard Wrist Pain Relief Wrist Support Pad for Office School Home Laptop（White）",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Of4eV384L._AC_UL320_.jpg",
      "alt": "Gel Keyboard and Mouse Wrist Rest Set, Ergonomic Computer Keyboard Wrist Pain Relief Wrist Support Pad for Office School Home Laptop（White）",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GTRLDQ9G"
  },
  {
    "name": "BladeHawks Extra Large RGB Gaming Mouse Pad-14 Light Modes, Extended Soft LED Mouse Pad, Anti-Slip Rubber Base, Computer Keyboard Mousepad...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51UsbIj9HAL._AC_UL320_.jpg",
      "alt": "BladeHawks Extra Large RGB Gaming Mouse Pad-14 Light Modes, Extended Soft LED Mouse Pad, Anti-Slip Rubber Base, Computer Keyboard Mousepad...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07L4BGL3D"
  },
  {
    "name": "Upgraded Large Desk Cup Holder Clamp, OOKUU Anti-Spill Table Cup Holder, Metal Office & PC Gaming Desk Accessories, Compatible with Univers...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61JPPHfGaVL._AC_UL320_.jpg",
      "alt": "Upgraded Large Desk Cup Holder Clamp, OOKUU Anti-Spill Table Cup Holder, Metal Office & PC Gaming Desk Accessories, Compatible with Univers...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BYZG2YBY"
  },
  {
    "name": "WOLFBOX MegaFlow 50 Compressed Air Duster-110000RPM Super Power Electric Air Duster, 3-Gear Adjustable Mini Blower with Fast Charging, Dust...",
    "category": "Gaming Desk",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713BEhBxXWL._AC_UL320_.jpg",
      "alt": "WOLFBOX MegaFlow 50 Compressed Air Duster-110000RPM Super Power Electric Air Duster, 3-Gear Adjustable Mini Blower with Fast Charging, Dust...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DSW7R4VN"
  },
  {
    "name": "Anker Nano Power Strip, Desk Clamp with 1500J Surge Protector, 5ft Extension Cord, 70W Max Gaming Desk Accessories, 6 AC, 2 USB A, 2 USB C,...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71cQC41LIfL._AC_UL320_.jpg",
      "alt": "Anker Nano Power Strip, Desk Clamp with 1500J Surge Protector, 5ft Extension Cord, 70W Max Gaming Desk Accessories, 6 AC, 2 USB A, 2 USB C,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FFGZH2S2"
  },
  {
    "name": "HUANUO FlowLift™ Dual Monitor Stand, Fully Adjustable Gaming Monitor Desk Mount for 13–32″ Computer Screens, Full Motion VESA 75x75/100x100...",
    "category": "Gaming Desk",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7182jSFV25L._AC_UL320_.jpg",
      "alt": "HUANUO FlowLift™ Dual Monitor Stand, Fully Adjustable Gaming Monitor Desk Mount for 13–32″ Computer Screens, Full Motion VESA 75x75/100x100...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07T5SY43L"
  },
  {
    "name": "LISEN Cell Phone Stand Phone Holder for Desk Office Decor, Office Desk Accessories Women PC Gaming Essentials iPhone Stand Gadgets Men Gift...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61KD4hoirXL._AC_UL320_.jpg",
      "alt": "LISEN Cell Phone Stand Phone Holder for Desk Office Decor, Office Desk Accessories Women PC Gaming Essentials iPhone Stand Gadgets Men Gift...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07Z82895W"
  },
  {
    "name": "Digital Alarm Clock, Large LED Digital Clock for Bedrooms with 10 Color Changing Night Light, Adjustable Brightness, USB Charging Port, Bed...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71kpwUbmSNL._AC_UL320_.jpg",
      "alt": "Digital Alarm Clock, Large LED Digital Clock for Bedrooms with 10 Color Changing Night Light, Adjustable Brightness, USB Charging Port, Bed...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CCP3X135"
  },
  {
    "name": "TranquilRelax Foot Rest for Under Desk at Work, Gaming Accessories Foot Stool with 3 Adjustable Heights & Washable Cover, Comfortable Offic...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Jy1G+mYuL._AC_UL320_.jpg",
      "alt": "TranquilRelax Foot Rest for Under Desk at Work, Gaming Accessories Foot Stool with 3 Adjustable Heights & Washable Cover, Comfortable Offic...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DK4HP264"
  },
  {
    "name": "Govee Smart LED Light Bars, Work with Alexa and Google Assistant, RGBICWW WiFi TV Backlights with Scene and Music Modes for Gaming, PC, Liv...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71gYPiuGlJL._AC_UL320_.jpg",
      "alt": "Govee Smart LED Light Bars, Work with Alexa and Google Assistant, RGBICWW WiFi TV Backlights with Scene and Music Modes for Gaming, PC, Liv...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B096WZXKZP"
  },
  {
    "name": "KDD 7 in 1 Clamp-on Desk Pegboard - No Drill Desk Side Storage with Phone Stand/Pen Holder/Storage Box/Headset & Controller Holder/Hooks, D...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719oiaHs4GL._AC_UL320_.jpg",
      "alt": "KDD 7 in 1 Clamp-on Desk Pegboard - No Drill Desk Side Storage with Phone Stand/Pen Holder/Storage Box/Headset & Controller Holder/Hooks, D...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DKX9FMCT"
  },
  {
    "name": "VIVO Clamp-on 13 inch Above or Below Desk 2-Tier Shelving Unit for Table Accessories, Gaming Devices, and More, Storage Tray, Desktop Organ...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71pQfY87qEL._AC_UL320_.jpg",
      "alt": "VIVO Clamp-on 13 inch Above or Below Desk 2-Tier Shelving Unit for Table Accessories, Gaming Devices, and More, Storage Tray, Desktop Organ...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DG359YX5"
  },
  {
    "name": "RGB Mousepad Led Mouse Pad, Large Mouse Pad,Led and Big Mouse mat",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61nSvG2CHQL._AC_UL320_.jpg",
      "alt": "RGB Mousepad Led Mouse Pad, Large Mouse Pad,Led and Big Mouse mat",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08QFB5KVS"
  },
  {
    "name": "Exquisite Gaming: Call of Duty: Monkeybomb - Original Mobile Phone & Gaming Controller Holder, Device Stand, Cable Guys, Licensed Figure",
    "category": "Gaming Desk",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51LU5w+h2gL._AC_UL320_.jpg",
      "alt": "Exquisite Gaming: Call of Duty: Monkeybomb - Original Mobile Phone & Gaming Controller Holder, Device Stand, Cable Guys, Licensed Figure",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08KJJFFY8"
  },
  {
    "name": "Cable Management, 25&#x27;&#x27; Cable Management Under Desk No Drill, Metal Cord Organizer with Clamp for Standing Desk, Cable Organizer f...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/719HqEdBSvL._AC_UL320_.jpg",
      "alt": "Cable Management, 25&#x27;&#x27; Cable Management Under Desk No Drill, Metal Cord Organizer with Clamp for Standing Desk, Cable Organizer f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F217D84G"
  },
  {
    "name": "MATICOD LED Lights for TV Led Backlight, 9.84ft RGB Led Strip Lights USB TV Lights Behind 32-43in, APP Remote Control Music Sync TV Led Lig...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71T14VfXezL._AC_UL320_.jpg",
      "alt": "MATICOD LED Lights for TV Led Backlight, 9.84ft RGB Led Strip Lights USB TV Lights Behind 32-43in, APP Remote Control Music Sync TV Led Lig...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09T92F9Z8"
  },
  {
    "name": "Monzlteck Under Desk Holder for PS5/PS5 Slim/Pro,Stealth Mount Compaitble with PlayStation 5 Disc & Digital Edition Console,Space Saving,DP-05",
    "category": "Gaming Desk",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61B2SiHUuKL._AC_UL320_.jpg",
      "alt": "Monzlteck Under Desk Holder for PS5/PS5 Slim/Pro,Stealth Mount Compaitble with PlayStation 5 Disc & Digital Edition Console,Space Saving,DP-05",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B3N8B4CP"
  },
  {
    "name": "Ledagic Led Light Bar with Music Sync, Color Changing TV Backlight App & Remote Control, IC+RGB & W Smart RGB Light Bar, USB Powered Led Li...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51iuieCuxSL._AC_UL320_.jpg",
      "alt": "Ledagic Led Light Bar with Music Sync, Color Changing TV Backlight App & Remote Control, IC+RGB & W Smart RGB Light Bar, USB Powered Led Li...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DXDTF512"
  },
  {
    "name": "Govee RGBIC Gaming Light Bars H6047 with Smart Controller, Wi-Fi Smart LED Gaming Lights with Music Modes and 60+ Scene Modes Built, Works...",
    "category": "Lighting",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61PZawwCWwL._AC_UL320_.jpg",
      "alt": "Govee RGBIC Gaming Light Bars H6047 with Smart Controller, Wi-Fi Smart LED Gaming Lights with Music Modes and 60+ Scene Modes Built, Works...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B6CQ2LQ2"
  },
  {
    "name": "Under Desk Cable Management Tray White, Cinati Wire Organizers No Drill, Cable Tray with Clamp for Wire Management, Cord Organization Box f...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81vGseJ4e6L._AC_UL320_.jpg",
      "alt": "Under Desk Cable Management Tray White, Cinati Wire Organizers No Drill, Cable Tray with Clamp for Wire Management, Cord Organization Box f...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BPLRX32S"
  },
  {
    "name": "cozoo RGB Headphone Stand with Charger 3 USB Ports and 2 AC Outlets,2 USB-A 1 Type C,Desk Gaming Headset Holder with 9 Light Modes,PC Gamin...",
    "category": "Lighting",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FZgj8CRfL._AC_UL320_.jpg",
      "alt": "cozoo RGB Headphone Stand with Charger 3 USB Ports and 2 AC Outlets,2 USB-A 1 Type C,Desk Gaming Headset Holder with 9 Light Modes,PC Gamin...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B071ZG9GXH"
  },
  {
    "name": "6 Ft Surge Protector Power Strip - 8 Widely Outlets with 4 USB Ports, 3 Side Outlet Extender with 6 Feet Extension Cord, Flat Plug, Wall Mo...",
    "category": "Decor",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61ktZoGBpVL._AC_UL320_.jpg",
      "alt": "6 Ft Surge Protector Power Strip - 8 Widely Outlets with 4 USB Ports, 3 Side Outlet Extender with 6 Feet Extension Cord, Flat Plug, Wall Mo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09PDLBFKY"
  },
  {
    "name": "Anker Prime Charging Station, 250W 6-Port GaN USB C Charger, 2.26\" LCD Smart Display Control, Compatible with iPhone, Galaxy, MacBook, Dell...",
    "category": "Gaming Desk",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71RntM707hL._AC_UL320_.jpg",
      "alt": "Anker Prime Charging Station, 250W 6-Port GaN USB C Charger, 2.26\" LCD Smart Display Control, Compatible with iPhone, Galaxy, MacBook, Dell...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CYLL8Y89"
  },
  {
    "name": "UPERGO Headset Stand with Gaming Controller Holder, Walnut Wood Headphone Stand with Storage Base, Gaming Equipment Accessories for Desk",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71LNwIOcJcL._AC_UL320_.jpg",
      "alt": "UPERGO Headset Stand with Gaming Controller Holder, Walnut Wood Headphone Stand with Storage Base, Gaming Equipment Accessories for Desk",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FPBJ85NV"
  },
  {
    "name": "KTRIO Large Gaming Mouse Pad Desk Mat, Superior Micro-Weave Cloth for Precise Mouse Control, Non-Slip Rubber Base, Stitched Edges, Water-Re...",
    "category": "Gaming Desk",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51xiJUpyKcL._AC_UL320_.jpg",
      "alt": "KTRIO Large Gaming Mouse Pad Desk Mat, Superior Micro-Weave Cloth for Precise Mouse Control, Non-Slip Rubber Base, Stitched Edges, Water-Re...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0788LMLZL"
  },
  {
    "name": "Govee RGBIC LED Strip Lights, Smart LED Lights for Bedroom, Bluetooth LED Lights APP Control, DIY Multiple Colors on One Line, Color Changi...",
    "category": "Lighting",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for gaming desk shoppers who want cleaner cables, better ergonomics, more useful lighting, or a setup that feels less thrown together.",
    "highlights": [
      "Better atmosphere",
      "Visual upgrade",
      "Simple setup"
    ],
    "bestFor": "Gaming Desk shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Desk Combo lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check desk thickness, monitor weight, mount compatibility, and USB power needs before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71tjdZg28vL._AC_UL320_.jpg",
      "alt": "Govee RGBIC LED Strip Lights, Smart LED Lights for Bedroom, Bluetooth LED Lights APP Control, DIY Multiple Colors on One Line, Color Changi...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0991Q94KP"
  }
];

export function getDeskComboCatalog(
  affiliateTag: string
): ProductCardContent[] {
  return seeds.map((product) => ({
    ...product,
    affiliateUrl: appendAmazonAffiliateTag(product.amazonUrl, affiliateTag),
    ctaLabel,
    commerce: {
      merchant: "amazon",
      linkKind: "amazon-product-page"
    }
  }));
}
