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
    "name": "Sorry! Board Game for Kids Ages 6 and Up; Classic Hasbro Board Game; Each Player Gets 4 Pawns; Family Game",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81CA3GV9sXL._AC_UL320_.jpg",
      "alt": "Sorry! Board Game for Kids Ages 6 and Up; Classic Hasbro Board Game; Each Player Gets 4 Pawns; Family Game",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B076HK9H7Z"
  },
  {
    "name": "Hasbro Gaming Trouble Board Game for Kids Ages 5 and Up 2-4 Players",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81-oNwrbbnL._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Trouble Board Game for Kids Ages 5 and Up 2-4 Players",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00D7OAOYI"
  },
  {
    "name": "Official Hasbro Games Jenga Game | Digital Die for 6 More Ways to Play | Original Wood Block Game | Stacking Tower | Ages 6+ | 1+ Players |...",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81xyPFZTrfL._AC_UL320_.jpg",
      "alt": "Official Hasbro Games Jenga Game | Digital Die for 6 More Ways to Play | Original Wood Block Game | Stacking Tower | Ages 6+ | 1+ Players |...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D87PKYYK"
  },
  {
    "name": "Mattel Games UNO Card Game for Kid, Adult & Family Nights & Parties, Travel & Vacations, Color Blind Accessible & Customizable Deck (Amazon...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Portable",
      "Easy to pack",
      "Routine-friendly"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81tVL-E4lkL._AC_UL320_.jpg",
      "alt": "Mattel Games UNO Card Game for Kid, Adult & Family Nights & Parties, Travel & Vacations, Color Blind Accessible & Customizable Deck (Amazon...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07P6MZPK3"
  },
  {
    "name": "Hasbro Gaming Candy Land Kingdom of Sweet Adventures Board Game for Kids, Easter Gifts for Boys and Girls, Ages 3 & Up (Amazon Exclusive)",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71ZnGyItfoL._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Candy Land Kingdom of Sweet Adventures Board Game for Kids, Easter Gifts for Boys and Girls, Ages 3 & Up (Amazon Exclusive)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00000DMF5"
  },
  {
    "name": "Monopoly Game, Family Board Games for 2 to 6 Players & Kids Ages 8 and Up, Includes 8 Tokens (Token Vote Edition)",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/816dE7TY9xL._AC_UL320_.jpg",
      "alt": "Monopoly Game, Family Board Games for 2 to 6 Players & Kids Ages 8 and Up, Includes 8 Tokens (Token Vote Edition)",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B5HLZ8T4"
  },
  {
    "name": "USAOPOLY The Original TAPPLE, The Fast-Paced Family Board Game,Choose a Category & Race Against The Timer to be The Last Player,Learning Wo...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81dTQBmNewL._AC_UL320_.jpg",
      "alt": "USAOPOLY The Original TAPPLE, The Fast-Paced Family Board Game,Choose a Category & Race Against The Timer to be The Last Player,Learning Wo...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09QRXD9H1"
  },
  {
    "name": "Do You Really Know Your Family? A Fun Family Game Filled with Conversation Starters and Challenges - Great for Kids, Teens and Adults",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71HhBMdgrLL._AC_UL320_.jpg",
      "alt": "Do You Really Know Your Family? A Fun Family Game Filled with Conversation Starters and Challenges - Great for Kids, Teens and Adults",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B087CBJ465"
  },
  {
    "name": "Hasbro Gaming Connect 4 Classic Grid, 4 in a Row Game, Strategy Board Games for Kids, 2 Players for Family and Kids, Easter Gifts for Boys...",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81fEiLrmZ8L._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Connect 4 Classic Grid, 4 in a Row Game, Strategy Board Games for Kids, 2 Players for Family and Kids, Easter Gifts for Boys...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00D8STBHY"
  },
  {
    "name": "Hasbro Gaming Yahtzee Game, Fast-Playing Dice Games for Kids, Teens, and Adults, Strategy Games, Family Games for Kids, 2 or More Players,...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81wCUGo+2NL._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Yahtzee Game, Fast-Playing Dice Games for Kids, Teens, and Adults, Strategy Games, Family Games for Kids, 2 or More Players,...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00TLEMRKM"
  },
  {
    "name": "CATAN Board Game (6th Edition) Trade, Build & Settle in the Classic Strategy Game for Family, Kids & Adults, Ages 10+, 3-4 Players, 60-90 M...",
    "category": "Starter Kit",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Starter-friendly",
      "Bundle value",
      "Easy first buy"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71AbDpYEkgL._AC_UL320_.jpg",
      "alt": "CATAN Board Game (6th Edition) Trade, Build & Settle in the Classic Strategy Game for Family, Kids & Adults, Ages 10+, 3-4 Players, 60-90 M...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0DYK1ZH2D"
  },
  {
    "name": "Spin Master Games, Hedbanz 2023 Edition with New Cards, Picture Guessing Board Game, for Family & Kids, 2-6 Players, for Ages 6 & Up",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81SYDKizNoL._AC_UL320_.jpg",
      "alt": "Spin Master Games, Hedbanz 2023 Edition with New Cards, Picture Guessing Board Game, for Family & Kids, 2-6 Players, for Ages 6 & Up",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0BRYH5FJ8"
  },
  {
    "name": "HUES and CUES - Vibrant Color Guessing Board Game for 3-10 Players Ages 8+, Connect Clues and Guess from 480 Color Squares",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81WUD2cZo5L._AC_UL320_.jpg",
      "alt": "HUES and CUES - Vibrant Color Guessing Board Game for 3-10 Players Ages 8+, Connect Clues and Guess from 480 Color Squares",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B084D2XQ9F"
  },
  {
    "name": "Hasbro Twister Party Classic Board Game for 2 or More Players,Indoor and Outdoor Game for Kids 6 and Up,Packaging May Vary",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A clean routine helper for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/714LbaV4HQL._AC_UL320_.jpg",
      "alt": "Hasbro Twister Party Classic Board Game for 2 or More Players,Indoor and Outdoor Game for Kids 6 and Up,Packaging May Vary",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B008J87PVC"
  },
  {
    "name": "Hasbro Gaming Scrabble Board Game, Classic Word Games for Kids Ages 8 and Up, Fun Family Game for 2-4 Players, The Classic Crossword Game",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A solid shortlist item for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51O+I4BU2PL._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Scrabble Board Game, Classic Word Games for Kids Ages 8 and Up, Fun Family Game for 2-4 Players, The Classic Crossword Game",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09D44JH4S"
  },
  {
    "name": "Taco Cat Goat Cheese Pizza Wildly Entertaining Card Game for Family and Group Game Night | Easy to Learn and Play with 10-15 Minute Rounds...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A practical first-click pick for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61L3JcwfsDL._AC_UL320_.jpg",
      "alt": "Taco Cat Goat Cheese Pizza Wildly Entertaining Card Game for Family and Group Game Night | Easy to Learn and Play with 10-15 Minute Rounds...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B077Z1R28P"
  },
  {
    "name": "Hasbro Gaming Guess Who? Board Game, with People and Pets Cards, The Original Guessing Game for Kids, Ages 6 and Up, Easter Gifts for Boys...",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A useful little upgrade for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81mFyh0CKQL._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Guess Who? Board Game, with People and Pets Cards, The Original Guessing Game for Kids, Ages 6 and Up, Easter Gifts for Boys...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08MVWB4SC"
  },
  {
    "name": "Hasbro Gaming Battleship Classic Board Game | Strategy Games for Kids and Adults | Ages 7+ | 2 Players | Fun Kids Games | Family Games",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A strong add-to-cart candidate for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81PXMzof4NL._AC_UL320_.jpg",
      "alt": "Hasbro Gaming Battleship Classic Board Game | Strategy Games for Kids and Adults | Ages 7+ | 2 Players | Fun Kids Games | Family Games",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B09D4QRJ8Y"
  },
  {
    "name": "Nex Playground - The Active Play System for Kids & Families Where Indoor Physical Activity Meets Interactive Family Fun and is Great for Ga...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A clean routine helper for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/61Pg7ofgYHL._AC_UL320_.jpg",
      "alt": "Nex Playground - The Active Play System for Kids & Families Where Indoor Physical Activity Meets Interactive Family Fun and is Great for Ga...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0D2JGYX3F"
  },
  {
    "name": "WHAT DO YOU MEME? Family Edition by Relatable, Now with Refreshed Content - Kids Games 8+, Family Games for Kids and Adults, The TikTok Vir...",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A solid shortlist item for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81UKbciqMdL._AC_UL320_.jpg",
      "alt": "WHAT DO YOU MEME? Family Edition by Relatable, Now with Refreshed Content - Kids Games 8+, Family Games for Kids and Adults, The TikTok Vir...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0812BN1L1"
  },
  {
    "name": "Tic Tac Toe Board Game,Tic Tac Toe Family Game, Classic Board Game, Classical Family Board Game,Children&#x27;s Tic Tac Toe Game, Plastic t...",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A practical first-click pick for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51nN1UbsrUL._AC_UL320_.jpg",
      "alt": "Tic Tac Toe Board Game,Tic Tac Toe Family Game, Classic Board Game, Classical Family Board Game,Children&#x27;s Tic Tac Toe Game, Plastic t...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0B2JZHQ2P"
  },
  {
    "name": "The Game of Life Board Game, Family Games for Kids Ages 8 and Up, Pegs Come in 6 Colors, Family Board Games for 2 to 4 Players",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A useful little upgrade for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81A0K5YsuxL._AC_UL320_.jpg",
      "alt": "The Game of Life Board Game, Family Games for Kids Ages 8 and Up, Pegs Come in 6 Colors, Family Board Games for 2 to 4 Players",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08BHHRSPK"
  },
  {
    "name": "Regal Games Card Games for Kids - Go Fish, Crazy 8&#x27;s, Old Maid, Slap Jack, Garbage Monster, War - Simple & Fun Classic Family Table Ga...",
    "category": "Storage",
    "priceHint": "$$ Mid-range",
    "description": "A strong add-to-cart candidate for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/91yBiXWLpYL._AC_UL320_.jpg",
      "alt": "Regal Games Card Games for Kids - Go Fish, Crazy 8&#x27;s, Old Maid, Slap Jack, Garbage Monster, War - Simple & Fun Classic Family Table Ga...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07JQ5W878"
  },
  {
    "name": "USAOPOLY BLANK SLATE, Where Great Minds Think Alike, Fun Family-Friendly Board Game, Word Association Party Game, Easy to Learn, Fun to Pla...",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A clean routine helper for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/81pHNmMFaAL._AC_UL320_.jpg",
      "alt": "USAOPOLY BLANK SLATE, Where Great Minds Think Alike, Fun Family-Friendly Board Game, Word Association Party Game, Easy to Learn, Fun to Pla...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B07G2VHPRW"
  },
  {
    "name": "Guess The Gibberish Card Game for Families by Relatable, From The Creators of Incohereant, Fun Kids Games for Kids 12+, Game Night With Fri...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A solid shortlist item for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/716w66P24uL._AC_UL320_.jpg",
      "alt": "Guess The Gibberish Card Game for Families by Relatable, From The Creators of Incohereant, Fun Kids Games for Kids 12+, Game Night With Fri...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B08BJCZ1MW"
  },
  {
    "name": "Lucky Egg Official Grab The Mic – Family Karaoke Board Game w/Foam Mic, 8+ Ages, 2-10 Players - Games for Bad Singers w/ 230 Lyrics (115 Ca...",
    "category": "Board Games",
    "priceHint": "$$ Mid-range",
    "description": "A practical first-click pick for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71Wr4UI2SaL._AC_UL320_.jpg",
      "alt": "Lucky Egg Official Grab The Mic – Family Karaoke Board Game w/Foam Mic, 8+ Ages, 2-10 Players - Games for Bad Singers w/ 230 Lyrics (115 Ca...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B0CWVMNNFV"
  },
  {
    "name": "Herd Mentality: Udderly Funny Family Board Game | Easy & Fun for Big Groups of 4-20 Players | Includes 20 Extra Exclusive Questions",
    "category": "Board Games",
    "priceHint": "$$$ Premium",
    "description": "A useful little upgrade for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/51u-cJ3s+VL._AC_UL320_.jpg",
      "alt": "Herd Mentality: Udderly Funny Family Board Game | Easy & Fun for Big Groups of 4-20 Players | Includes 20 Extra Exclusive Questions",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B093HBBMPT"
  },
  {
    "name": "Pressman Rummikub - The Original Rummy Tile Game | Exciting Family Game of Strategy and Luck | Promotes STEM Skills | For Kids, Teens, Adul...",
    "category": "Board Games",
    "priceHint": "$ Budget-friendly",
    "description": "A strong add-to-cart candidate for board games shoppers who want easier group fun, faster setup, better family nights, or games that do not require a rulebook seminar.",
    "highlights": [
      "Real Amazon listing",
      "Product-photo verified",
      "Direct product-page link"
    ],
    "bestFor": "Board Games shoppers who want a cleaner first shortlist",
    "whyPicked": "It made this edit because it fits the Game Night lane: real Amazon availability, clear product imagery, and a use case that is easy to understand before clicking.",
    "trustNote": "Check age range, player count, game length, language needs, and whether the humor or difficulty fits your group.",
    "image": {
      "src": "https://m.media-amazon.com/images/I/71rH-drhKZL._AC_UL320_.jpg",
      "alt": "Pressman Rummikub - The Original Rummy Tile Game | Exciting Family Game of Strategy and Luck | Promotes STEM Skills | For Kids, Teens, Adul...",
      "kind": "product" as const
    },
    "amazonUrl": "https://www.amazon.com/dp/B00000IZJB"
  }
];

export function getGameNightCatalog(
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
