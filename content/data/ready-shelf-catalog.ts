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
    "name": "Ready America 72 Hour Deluxe Emergency Kit, 4-Person 3-Day Backpack, First Aid Kit, Survival Blanket, Power Station, Emergency Food, Portab...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81TDLG1okjL._AC_UL320_.jpg",
      "alt": "Ready America 72 Hour Deluxe Emergency Kit, 4-Person 3-Day Backpack, First Aid Kit, Survival Blanket, Power Station, Emergency Food, Portab...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00149VP14"
  },
  {
    "name": "Ready America 70280 72 Hour Emergency Kit, 2-Person, 3-Day Backpack, Includes First Aid Kit, Survival Blanket, Portable Preparedness Go-Bag...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71agZ5gOUNL._AC_UL320_.jpg",
      "alt": "Ready America 70280 72 Hour Emergency Kit, 2-Person, 3-Day Backpack, Includes First Aid Kit, Survival Blanket, Portable Preparedness Go-Bag...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B000FJQQVI"
  },
  {
    "name": "Ready America 72 Hour Deluxe Emergency Kit, 2-Person 3-Day Backpack, First Aid Kit, Survival Blanket, Power Station, Emergency Food, Portab...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81pJqthpXgL._AC_UL320_.jpg",
      "alt": "Ready America 72 Hour Deluxe Emergency Kit, 2-Person 3-Day Backpack, First Aid Kit, Survival Blanket, Power Station, Emergency Food, Portab...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00A387958"
  },
  {
    "name": "Survival Kit, 262Pcs Survival Gear and Supplies with First Aid Kit Pouch and Crossbody Bag, Emergency Kit with Tent, Camping Axe Hammer, Su...",
    "category": "Storage",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81t6wxt8GXL._AC_UL320_.jpg",
      "alt": "Survival Kit, 262Pcs Survival Gear and Supplies with First Aid Kit Pouch and Crossbody Bag, Emergency Kit with Tent, Camping Axe Hammer, Su...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D4765KKT"
  },
  {
    "name": "Survival Kit, 250Pcs Survival Gear First Aid Kit with Molle System Compatible Bag and Emergency Tent, Emergency Kit for Earthquake, Outdoor...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81uW763CAPL._AC_UL320_.jpg",
      "alt": "Survival Kit, 250Pcs Survival Gear First Aid Kit with Molle System Compatible Bag and Emergency Tent, Emergency Kit for Earthquake, Outdoor...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09Y2QVYH7"
  },
  {
    "name": "FosPower NOAA Emergency Weather Radio A1 7400mWh Portable Power Bank, AM/FM, USB/Solar/Hand Crank Charging, Battery Operated, SOS Alarm & F...",
    "category": "Emergency Prep",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71B9hiytZnL._AC_UL320_.jpg",
      "alt": "FosPower NOAA Emergency Weather Radio A1 7400mWh Portable Power Bank, AM/FM, USB/Solar/Hand Crank Charging, Battery Operated, SOS Alarm & F...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07FKYHTWP"
  },
  {
    "name": "LifeStraw Personal Water Filter for Hiking, Camping, Travel, and Emergency Preparedness",
    "category": "Emergency Prep",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/610MT9qiRyL._AC_UL320_.jpg",
      "alt": "LifeStraw Personal Water Filter for Hiking, Camping, Travel, and Emergency Preparedness",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B006QF3TW4"
  },
  {
    "name": "TacPreps 72 Hour Survival Kit, 45L Bug Out Bag with Emergency Food, Water Filter, First Aid Kit, Shelter and Survival Tools",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81wlzcSbZgL._AC_UL320_.jpg",
      "alt": "TacPreps 72 Hour Survival Kit, 45L Bug Out Bag with Emergency Food, Water Filter, First Aid Kit, Shelter and Survival Tools",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CV9GRZ28"
  },
  {
    "name": "Emergency Blanket 4-Pack Space Mylar Blankets Survival Gear and Supplies Reusable Thermal Camping Hunting Essentials First Aid Car Backpack...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71eCGdR7nfL._AC_UL320_.jpg",
      "alt": "Emergency Blanket 4-Pack Space Mylar Blankets Survival Gear and Supplies Reusable Thermal Camping Hunting Essentials First Aid Car Backpack...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B098KJMMGC"
  },
  {
    "name": "Ready America 70180 72 Hour Emergency Kit, 1-Person, 3-Day Backpack, Includes First Aid Kit, Survival Blanket, Emergency Food Portable Disa...",
    "category": "Comfort",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ob1a7HpoL._AC_UL320_.jpg",
      "alt": "Ready America 70180 72 Hour Emergency Kit, 1-Person, 3-Day Backpack, Includes First Aid Kit, Survival Blanket, Emergency Food Portable Disa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00475B96S"
  },
  {
    "name": "SurviveX Large First Aid Kit for Car, Travel & Home - Emergency Kit for Hiking, Camping, Backpacking and Outdoors - Includes Zip Stitch Wou...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81BS0vr0HnL._AC_UL320_.jpg",
      "alt": "SurviveX Large First Aid Kit for Car, Travel & Home - Emergency Kit for Hiking, Camping, Backpacking and Outdoors - Includes Zip Stitch Wou...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DF3LXT66"
  },
  {
    "name": "72 Hour Survival Kit with Food, Solar Power Bank, Water Purifier, First Aid & Tools - All Emergency Survival Gear and Supplies in This Bug...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51bkfnSMyIL._AC_UL320_.jpg",
      "alt": "72 Hour Survival Kit with Food, Solar Power Bank, Water Purifier, First Aid & Tools - All Emergency Survival Gear and Supplies in This Bug...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FKNPK1HQ"
  },
  {
    "name": "Everlit Survival Car Emergency Kit, Roadside Safety Tool Kit with Gloves,Digital Auto Air Compressor Tire Inflator, First Aid Kit, 12 Feet...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71p9FLhJlEL._AC_UL320_.jpg",
      "alt": "Everlit Survival Car Emergency Kit, Roadside Safety Tool Kit with Gloves,Digital Auto Air Compressor Tire Inflator, First Aid Kit, 12 Feet...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07XKGWNP8"
  },
  {
    "name": "Ready America Backpack",
    "category": "Emergency Prep",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81UxgQfvCsL._AC_UL320_.jpg",
      "alt": "Ready America Backpack",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00149O23M"
  },
  {
    "name": "238Pcs Emergency Survival Kit and First Aid Kit, Professional Survival Gear Tool with Tactical Molle Pouch and Emergency Tent for Earthquak...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81QBUrO2e7L._AC_UL320_.jpg",
      "alt": "238Pcs Emergency Survival Kit and First Aid Kit, Professional Survival Gear Tool with Tactical Molle Pouch and Emergency Tent for Earthquak...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08GR4GQ5P"
  },
  {
    "name": "Mini First Aid Kit - 150 Piece Small Waterproof Hard Shell Medical Kit for Home, Car, Travel, Camping, Truck, Hiking, Sports, Office, Vehic...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71g347mQv2L._AC_UL320_.jpg",
      "alt": "Mini First Aid Kit - 150 Piece Small Waterproof Hard Shell Medical Kit for Home, Car, Travel, Camping, Truck, Hiking, Sports, Office, Vehic...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DB794BKQ"
  },
  {
    "name": "EVERLIT Complete 72 Hours Earthquake Bug Out Bag Emergency Survival Kit for Family. Be Prepared for Hurricanes, Floods, Tsunami, Other Disa...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81i-nPa+ZRL._AC_UL320_.jpg",
      "alt": "EVERLIT Complete 72 Hours Earthquake Bug Out Bag Emergency Survival Kit for Family. Be Prepared for Hurricanes, Floods, Tsunami, Other Disa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07BFRV7K5"
  },
  {
    "name": "Survival Kit, Survival Gear and Equipment 258 PCS with Water Filter, Emergency Tent, LED Lantern, First Aid Kit Supplies, 25L Backpack for...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/818TlfA4EqL._AC_UL320_.jpg",
      "alt": "Survival Kit, Survival Gear and Equipment 258 PCS with Water Filter, Emergency Tent, LED Lantern, First Aid Kit Supplies, 25L Backpack for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0FTYJYWWQ"
  },
  {
    "name": "Ready Hour 120 Serving Entree Bucket-Freeze Dried Emergency Food Supply-Survival Meals with Long Shelf Life-Prepper Essentials for Disaster...",
    "category": "Emergency Prep",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Lrs1cD2WL._AC_UL320_.jpg",
      "alt": "Ready Hour 120 Serving Entree Bucket-Freeze Dried Emergency Food Supply-Survival Meals with Long Shelf Life-Prepper Essentials for Disaster...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09RCFN8JG"
  },
  {
    "name": "Datrex Emergency Water Packet 4.227 oz - 3 Day/72 Hour Supply (18 Packs) , White",
    "category": "Emergency Prep",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71DjEglpHyL._AC_UL320_.jpg",
      "alt": "Datrex Emergency Water Packet 4.227 oz - 3 Day/72 Hour Supply (18 Packs) , White",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0134DAXJ2"
  },
  {
    "name": "ReadyWise Emergency Food Supply - 120 Servings Favorites Sample Bucket, Survival Food Kit, Freeze Dried Prepper Food & Dehydrated Meals for...",
    "category": "Starter Kit",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Ty29hxQeL._AC_UL320_.jpg",
      "alt": "ReadyWise Emergency Food Supply - 120 Servings Favorites Sample Bucket, Survival Food Kit, Freeze Dried Prepper Food & Dehydrated Meals for...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B004JT7F8I"
  },
  {
    "name": "Blue Seventy-Two - Pro Series - Red Deluxe 72 Hour Emergency Backpack Survival Kit for 1 Person | Survival Kits for Emergencies (Includes W...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81oW43+wUqL._AC_UL320_.jpg",
      "alt": "Blue Seventy-Two - Pro Series - Red Deluxe 72 Hour Emergency Backpack Survival Kit for 1 Person | Survival Kits for Emergencies (Includes W...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CZ1W1GX4"
  },
  {
    "name": "Eoxsmile Emergency Radio with NOAA Weather Alert, 5000mAh Solar Hand Crank Portable AM/FM Shortwave Radio, Rechargeable Battery Powered, US...",
    "category": "Emergency Prep",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71FkdWjXQSL._AC_UL320_.jpg",
      "alt": "Eoxsmile Emergency Radio with NOAA Weather Alert, 5000mAh Solar Hand Crank Portable AM/FM Shortwave Radio, Rechargeable Battery Powered, US...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07TSH7ZN5"
  },
  {
    "name": "Essentials Complete Deluxe Survival Kit 2 & 4 Person | Bug-Out-Bag | Emergency Go Bag Kit for Wildfires, Hurricanes, and Other Natural Disa...",
    "category": "Storage",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Fh1Rj42FL._AC_UL320_.jpg",
      "alt": "Essentials Complete Deluxe Survival Kit 2 & 4 Person | Bug-Out-Bag | Emergency Go Bag Kit for Wildfires, Hurricanes, and Other Natural Disa...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07GNRB36Q"
  },
  {
    "name": "Survival Kit, Gifts for Men Women Teen Boys, 252 pcs Survival Gear and Equipment Mini First Aid Kit for Car Home, Emergency Kit with Molle...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81LY6P7WPAL._AC_UL320_.jpg",
      "alt": "Survival Kit, Gifts for Men Women Teen Boys, 252 pcs Survival Gear and Equipment Mini First Aid Kit for Car Home, Emergency Kit with Molle...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DBYNFBNB"
  },
  {
    "name": "First My Family All-in-One 4 Person, 72 Hour Emergency Survival Kit for Fires, Earthquakes, Hurricanes, Floods, Tsunami and Other Disasters...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81raRfnfOiL._AC_UL320_.jpg",
      "alt": "First My Family All-in-One 4 Person, 72 Hour Emergency Survival Kit for Fires, Earthquakes, Hurricanes, Floods, Tsunami and Other Disasters...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B006HTJKY0"
  },
  {
    "name": "Ready America 72 Hour Deluxe Emergency Kit, 1-Person 3-Day Backpack, First Aid Kit, Survival Blanket, Power Station, Emergency Food, Portab...",
    "category": "Comfort",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71gp6xJP0XL._AC_UL320_.jpg",
      "alt": "Ready America 72 Hour Deluxe Emergency Kit, 1-Person 3-Day Backpack, First Aid Kit, Survival Blanket, Power Station, Emergency Food, Portab...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00FXLG28U"
  },
  {
    "name": "ReadyWise Emergency Food Supply - 72 Hour Survival Kit, 30 Servings of Protein Meals, Freeze Dried Food for Backpacking, Camping Essentials...",
    "category": "Starter Kit",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for emergency prep shoppers who want better backup lighting, cleaner emergency storage, easier first aid, or a less chaotic outage plan.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Emergency Prep shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Ready Shelf lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Preparedness products are not guarantees. Follow official guidance, replace expired items, and learn how to use safety gear.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ZU04GylpL._AC_UL320_.jpg",
      "alt": "ReadyWise Emergency Food Supply - 72 Hour Survival Kit, 30 Servings of Protein Meals, Freeze Dried Food for Backpacking, Camping Essentials...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00HOGS6JA"
  }
];

export function getReadyShelfCatalog(
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
