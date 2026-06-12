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
    "name": "PrideSports PTS Wood Golf Tees | 135 Count, 3-1/4 Inch | #1 Wood Tee on Tour | Best for Drivers & Woods",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71hbOv1gNfL._AC_UL320_.jpg",
      "alt": "PrideSports PTS Wood Golf Tees | 135 Count, 3-1/4 Inch | #1 Wood Tee on Tour | Best for Drivers & Woods",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0055NRJLA"
  },
  {
    "name": "REVASRI Golf Rangefinder with Slope and Pin Lock Vibration, External Slope Switch for Golf Tournament Legal, Rangefinders with Rechargeable...",
    "category": "Golf",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61DLDBMKevL._AC_UL320_.jpg",
      "alt": "REVASRI Golf Rangefinder with Slope and Pin Lock Vibration, External Slope Switch for Golf Tournament Legal, Rangefinders with Rechargeable...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09GLP62SS"
  },
  {
    "name": "Alloy Magnetic Golf Cart Phone Holder for MagSafe iPhone - Heavy Duty Phone Mount Compatible with EZGO, Club Car & Yamaha - Practical Golf...",
    "category": "Golf",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/614-JiQcuLL._AC_UL320_.jpg",
      "alt": "Alloy Magnetic Golf Cart Phone Holder for MagSafe iPhone - Heavy Duty Phone Mount Compatible with EZGO, Club Car & Yamaha - Practical Golf...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GXFB9JVC"
  },
  {
    "name": "Callaway Golf 300 Pro Laser Rangefinder",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71chTGM1PVL._AC_UL320_.jpg",
      "alt": "Callaway Golf 300 Pro Laser Rangefinder",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B01KP195PY"
  },
  {
    "name": "THIODOON 2 Pack Golf Club Brushes and Groove Cleaner 2 ft Retractable Zipline Carabiner Golf Brush Head with Retractable Spike Comfortable...",
    "category": "Tools",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uOc6kkALL._AC_UL320_.jpg",
      "alt": "THIODOON 2 Pack Golf Club Brushes and Groove Cleaner 2 ft Retractable Zipline Carabiner Golf Brush Head with Retractable Spike Comfortable...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09957FQNJ"
  },
  {
    "name": "Jiskan Pro Golf Club Brush Cleaner with Retainer Clip and Squeeze Water Bottle 7.5 Inches Holds 4 Ounces of Water, Essentials Golf Accessor...",
    "category": "Tools",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71TkJhN1SCL._AC_UL320_.jpg",
      "alt": "Jiskan Pro Golf Club Brush Cleaner with Retainer Clip and Squeeze Water Bottle 7.5 Inches Holds 4 Ounces of Water, Essentials Golf Accessor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZM7WGXV"
  },
  {
    "name": "Loosusu Funny Golf Socks for Men Hilarious Golf Gift for Dad One Size Fits Most Great for Father's Day or Stocking Stuffers",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91qJiFSP1oL._AC_UL320_.jpg",
      "alt": "Loosusu Funny Golf Socks for Men Hilarious Golf Gift for Dad One Size Fits Most Great for Father's Day or Stocking Stuffers",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0GYSBF4VC"
  },
  {
    "name": "A2C Alloy Magnetic Golf Cart Phone Holder for MagSafe iPhone, Unique Fathers Day Golf Gifts for Men Dad Him Husband Ladies Her Golfers, Gol...",
    "category": "Golf",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91K1whkxqmL._AC_UL320_.jpg",
      "alt": "A2C Alloy Magnetic Golf Cart Phone Holder for MagSafe iPhone, Unique Fathers Day Golf Gifts for Men Dad Him Husband Ladies Her Golfers, Gol...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2X9PWLR"
  },
  {
    "name": "karamagic 11 Pcs Golf Accessories Kit, Include Golf Ball Bag with Hook Tees Towel Cleaner Brush Ball Marker Divot Tool Sco...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71c7e2dQVnL._AC_UL320_.jpg",
      "alt": "karamagic 11 Pcs Golf Accessories Kit, Include Golf Ball Bag with Hook Tees Towel Cleaner Brush Ball Marker Divot Tool Sco...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DYZ14192"
  },
  {
    "name": "Handy Picks Microfiber Golf Towel (16\" X 16\") with Carabiner Clip, Waffle Pattern Golf Towel Hook and Loop Fastener - The Convenient Golf C...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81YEux+kGaL._AC_UL320_.jpg",
      "alt": "Handy Picks Microfiber Golf Towel (16\" X 16\") with Carabiner Clip, Waffle Pattern Golf Towel Hook and Loop Fastener - The Convenient Golf C...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09B5CTHGB"
  },
  {
    "name": "Nike Men&#x27;s 3 Pack Web Belt",
    "category": "Golf",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/713dKnXTXiL._AC_UL320_.jpg",
      "alt": "Nike Men&#x27;s 3 Pack Web Belt",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B004NRNOG8"
  },
  {
    "name": "Golf Club Range Chart Card, Easy Carry with Credit Card Size,Sturdy Golf Yardage Card for Seasoned Golfers, Average, or Beginners",
    "category": "Golf",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71rfuLo7ztL._AC_UL320_.jpg",
      "alt": "Golf Club Range Chart Card, Easy Carry with Credit Card Size,Sturdy Golf Yardage Card for Seasoned Golfers, Average, or Beginners",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CJKTW92Q"
  },
  {
    "name": "SKLZ Golf Grip Trainer, Club Attachment for Correct Hand Positioning and Muscle Memory, Fits Standard Grips from Driver to Wedge, Right-Han...",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61-gvX+sL9L._AC_UL320_.jpg",
      "alt": "SKLZ Golf Grip Trainer, Club Attachment for Correct Hand Positioning and Muscle Memory, Fits Standard Grips from Driver to Wedge, Right-Han...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B015N2NX3A"
  },
  {
    "name": "Callaway Golf Supersoft Golf Balls (2025)",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61qm+2koyBL._AC_UL320_.jpg",
      "alt": "Callaway Golf Supersoft Golf Balls (2025)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DHT5XZR1"
  },
  {
    "name": "SlopeMaster ProGreen Reader - Golf Ball Marker with High Precision Green Reading Aid Golf Accessories for Men Women",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61kxAEHfpDL._AC_UL320_.jpg",
      "alt": "SlopeMaster ProGreen Reader - Golf Ball Marker with High Precision Green Reading Aid Golf Accessories for Men Women",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BZPGD42Y"
  },
  {
    "name": "Bulex Golf Club Groove Sharpener, Re-Grooving Tool and Cleaner for Wedges & Irons - Generate Optimal Backspin - Suitable for U & V-Grooves",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71sdIYNjJeL._AC_UL320_.jpg",
      "alt": "Bulex Golf Club Groove Sharpener, Re-Grooving Tool and Cleaner for Wedges & Irons - Generate Optimal Backspin - Suitable for U & V-Grooves",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08B1NML8T"
  },
  {
    "name": "Driver Darts by P*ss Missile, Premium Bamboo Wood Golf Tees - Iconic Tee Packging and Style, Cool Golf Gifts",
    "category": "Golf",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71yDqQcYD4L._AC_UL320_.jpg",
      "alt": "Driver Darts by P*ss Missile, Premium Bamboo Wood Golf Tees - Iconic Tee Packging and Style, Cool Golf Gifts",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DJDVHHHT"
  },
  {
    "name": "DC HOUSE Metal Case 48V 100Ah Pro Lithium Golf Cart Battery, 200A BMS Lifepo4 Battery with 48V 18A Charger, Bluetooth Mobile APP & LCD Moni...",
    "category": "Golf",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7141MhZAULL._AC_UL320_.jpg",
      "alt": "DC HOUSE Metal Case 48V 100Ah Pro Lithium Golf Cart Battery, 200A BMS Lifepo4 Battery with 48V 18A Charger, Bluetooth Mobile APP & LCD Moni...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0F6LLNTS8"
  },
  {
    "name": "REDTIGER Golf Rangefinder with Slope Switch, 1200 Yards Range Finder Golfing, 7X Magnification, Flag Pole Locking Vibration, Rechargeable R...",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/7126q+VJwTL._AC_UL320_.jpg",
      "alt": "REDTIGER Golf Rangefinder with Slope Switch, 1200 Yards Range Finder Golfing, 7X Magnification, Flag Pole Locking Vibration, Rechargeable R...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BVFP6KXC"
  },
  {
    "name": "TaylorMade Golf Distance+ Golf Balls",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81vThuvUBxL._AC_UL320_.jpg",
      "alt": "TaylorMade Golf Distance+ Golf Balls",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08QSL9XQW"
  },
  {
    "name": "Golf Essentials Kit | Must-Have Accessories – Water Brush, Towel, Club Brush, Ball Marker, Divot Repair Tool, Ball & Tee Holder, Golf Gifts...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81ynsqLsMxL._AC_UL320_.jpg",
      "alt": "Golf Essentials Kit | Must-Have Accessories – Water Brush, Towel, Club Brush, Ball Marker, Divot Repair Tool, Ball & Tee Holder, Golf Gifts...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07YS4CXFJ"
  },
  {
    "name": "Titleist Travel Gear Professional Zippered Golf Pouch Black",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71uIUFhwTSL._AC_UL320_.jpg",
      "alt": "Titleist Travel Gear Professional Zippered Golf Pouch Black",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0846L83HL"
  },
  {
    "name": "Vice Pro Plus Golf Balls",
    "category": "Court Gear",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61IsuPWJsUL._AC_UL320_.jpg",
      "alt": "Vice Pro Plus Golf Balls",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BLZNN217"
  },
  {
    "name": "Golf Net with Practice Mat,Golf Hitting Aid Nets 10x7FT for Backyard Driving Chipping Training Swing with Target Mat Balls for Outdoor Indo...",
    "category": "Court Gear",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71rkMjR2CQL._AC_UL320_.jpg",
      "alt": "Golf Net with Practice Mat,Golf Hitting Aid Nets 10x7FT for Backyard Driving Chipping Training Swing with Target Mat Balls for Outdoor Indo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DFYFM5G8"
  },
  {
    "name": "Blue Tees Golf Player+ AI-Powered GPS Speaker - Touchscreen Display, 10+ Hour Battery, 40,000+ Courses, Visual & Audible Distances, Hazard...",
    "category": "Golf",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/6102hSBGTbL._AC_UL320_.jpg",
      "alt": "Blue Tees Golf Player+ AI-Powered GPS Speaker - Touchscreen Display, 10+ Hour Battery, 40,000+ Courses, Visual & Audible Distances, Hazard...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CF9THQDK"
  },
  {
    "name": "Professional Plastic Golf Tees 50/60/100 Pack (3-1/4\" or 2-3/4\"), Enhanced Durability & Stability, Engineered to Minimize Friction and Side...",
    "category": "Golf",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71fOtd2o+VL._AC_UL320_.jpg",
      "alt": "Professional Plastic Golf Tees 50/60/100 Pack (3-1/4\" or 2-3/4\"), Enhanced Durability & Stability, Engineered to Minimize Friction and Side...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0C4KDXKWL"
  },
  {
    "name": "YOREPEK 2 Layer Golf Trunk Organizer, Golf Gifts for Men with Separate Ventilated Compartment for 2 Pair Shoes, Waterproof Car Trunk Locker...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Cuts clutter",
      "Easy to place",
      "Setup-friendly"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/716Bgsnvi8L._AC_UL320_.jpg",
      "alt": "YOREPEK 2 Layer Golf Trunk Organizer, Golf Gifts for Men with Separate Ventilated Compartment for 2 Pair Shoes, Waterproof Car Trunk Locker...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09PZZ1QRM"
  },
  {
    "name": "Callaway Golf Supersoft Golf Balls",
    "category": "Court Gear",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for golf shoppers who want cleaner bag organization, easier practice, better grip, or a useful course-day gift.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Golf shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Golf Locker lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check sizing, hand orientation, training-aid fit, and local course rules before buying.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71hYbAifNoL._AC_UL320_.jpg",
      "alt": "Callaway Golf Supersoft Golf Balls",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BMGYT38K"
  }
];

export function getGolfLockerCatalog(
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
