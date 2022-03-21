import banana from "../assets/icons/categories/banana.webp";
import butter from "../assets/icons/categories/butter.webp";
import chakes from "../assets/icons/categories/cakes.webp";
import drinks from "../assets/icons/categories/drinks.webp";
import fish from "../assets/icons/categories/fish.webp";
import fruits from "../assets/icons/categories/fruits.webp";
import grapes from "../assets/icons/categories/grapes.webp";
import meats from "../assets/icons/categories/meats.webp";
import onions from "../assets/icons/categories/onions.webp";
import potatoes from "../assets/icons/categories/potatoes.webp";
import trees from "../assets/icons/categories/trees.webp";
import vegetables from "../assets/icons/categories/vegetables.webp";

import plane from "../assets/icons/plane.svg";
import refresh from "../assets/icons/refresh-2.svg";
import headphones from "../assets/icons/headphones.svg";
import gift from "../assets/icons/gift.svg";


import { MdKeyboardArrowRight } from "react-icons/md";

const category = [
  {
    id: 1,
    image: fruits,
    name: "Fruits",
    arrow: MdKeyboardArrowRight,
  },
  {
    id: 2,
    image: vegetables,
    name: "Vegatables",
    arrow: MdKeyboardArrowRight,
  },
  {
    id: 3,
    image: drinks,
    name: "Drinks",
    arrow: MdKeyboardArrowRight,
  },
  {
    id: 4,
    image: butter,
    name: "Butter & Egges",
  },
  {
    id: 5,
    image: trees,
    name: "Trees",
  },
  {
    id: 6,
    image: chakes,
    name: "Cakes",
  },
  {
    id: 7,
    image: meats,
    name: "Meats",
  },
  {
    id: 8,
    image: fish,
    name: "Fish",
  },
  {
    id: 9,
    image: onions,
    name: "Onions",
  },
  {
    id: 10,
    image: grapes,
    name: "Grapes",
  },
  {
    id: 11,
    image: banana,
    name: "Banana",
  },
  {
    id: 12,
    image: potatoes,
    name: "Potatoes",
  },
];

const freshFruit = [
  {
    id: 1,
    name: "Apples & Bananas",
  },
  {
    id: 2,
    name: "Berries",
  },
  {
    id: 3,
    name: "Grapes",
  },
  {
    id: 4,
    name: "Mangoes",
  },
  {
    id: 5,
    name: "Melons",
  },
  {
    id: 6,
    name: "Pears",
  },
  {
    id: 7,
    name: "Plums & Apricots",
  },
  {
    id: 8,
    name: "Seasonal",
  },
];

const nutGifts = [
  {
    id: 1,
    name: "Avocados & Peppers",
  },

  {
    id: 2,
    name: "Broccoli & Zucchini",
  },
  {
    id: 3,
    name: "Celery, Fennel & Leeks",
  },
  {
    id: 4,
    name: "Heirloom Tomatoes",
  },
  {
    id: 5,
    name: "Lettuce & Leafy",
  },
  {
    id: 6,
    name: "Mushrooms",
  },
];

const dailyVegetables = [
  {
    id: 1,
    name: "Beans & Brinjals",
  },
  {
    id: 2,
    name: "Chilies, Garlic, Lemon",
  },
  {
    id: 3,
    name: "Gourd & Cucumber",
  },
  {
    id: 4,
    name: "Herbs & Sprouts",
  },
  {
    id: 5,
    name: "Peppers & Lady Fingers",
  },
  {
    id: 6,
    name: "Root Vegetables",
  },
];

const exoticVegetables = [
  {
    id: 1,
    name: "Avacados & Peppers",
  },
  {
    id: 2,
    name: "Broccoli & Zucchini",
  },
  {
    id: 3,
    name: "Celery, Fennel & Leeks",
  },
  {
    id: 4,
    name: "Heirloom Tomatoes",
  },
  {
    id: 5,
    name: "Mushrooms",
  },
];

const drink = [
  {
    id: 1,
    name: "Milks & Creams",
  },
  {
    id: 2,
    name: "Organic Lemon",
  },
  {
    id: 3,
    name: "Organic Almaverde",
  },
  {
    id: 4,
    name: "Orange Cauliflower",
  },
];

const homePages = [
  {
    id: 1,
    text: "Home 1",
  },
  {
    id: 2,
    text: "Home 2",
  },
  {
    id: 3,
    text: "Home 3",
  },
  {
    id: 4,
    text: "Home 4",
  },
  {
    id: 5,
    text: "Home 5",
  },
  {
    id: 6,
    text: "Home 6",
  },
  {
    id: 7,
    text: "Home 7",
  },
  {
    id: 8,
    text: "Home 8",
  },
  {
    id: 9,
    text: "Home 9",
  },
];

const nicheLayouts = [
  {
    id: 1,
    text: "T-shirt",
    type: true,
  },
  {
    id: 2,
    text: "Cosmetic",
    type: true,
  },
  {
    id: 3,
    text: "Jewelry",
    type: true,
  },
  {
    id: 4,
    text: "Furniture",
    type: true,
  },
  {
    id: 5,
    text: "Organic",
    type: true,
  },
  {
    id: 6,
    text: "Electronics",
    type: false,
  },
  {
    id: 7,
    text: "Baby",
    type: false,
  },
  {
    id: 8,
    text: "Bike",
    type: false,
  },
  {
    id: 9,
    text: "Bag",
    type: false,
  },
];

const nicheLayouts2 = [
  {
    id: 1,
    text: "Home Boxed",
  },
  {
    id: 2,
    text: "Home Fullwidth",
  },
  {
    id: 3,
    text: "Home wide 1600px",
  },
  {
    id: 4,
    text: "RTL ready",
  },
  {
    id: 5,
    text: "Catalog Mode",
  },
  {
    id: 6,
    text: "GDPR Cookie",
  },
];

const shopStyles = [
  {
    id: 1,
    text: "Grid Layout",
  },
  {
    id: 2,
    text: "Mansory Layout",
  },
  {
    id: 3,
    text: "Rigth Siderbar",
  },
  {
    id: 4,
    text: "Left Siderbar",
  },
  {
    id: 5,
    text: "Listing Collection",
  },
  {
    id: 6,
    text: "Infinit scrolling",
  },
  {
    id: 7,
    text: "Load more button",
  },
  {
    id: 8,
    text: "Filters area",
  },
  {
    id: 9,
    text: "Header Transparent",
  },
  {
    id: 10,
    text: "RTL shop page",
  },
];

const productPageStyles = [
  {
    id: 1,
    text: "Product Detail Layout 1",
  },
  {
    id: 2,
    text: "Product Detail Layout 2",
  },
  {
    id: 3,
    text: "Product Detail Layout 3",
  },
  {
    id: 4,
    text: "Product thumb at bottom",
  },
  {
    id: 5,
    text: "Product thumb on right",
  },
  {
    id: 6,
    text: "Lookbook Descriptions",
  },
  {
    id: 7,
    text: "Gallery Descriptions",
  },
  {
    id: 8,
    text: "Product Videos",
  },
  {
    id: 9,
    text: "Product Countdown",
  },
  {
    id: 10,
    text: "Tabs Full Width",
  },
  {
    id: 11,
    text: "Tabs Accordions Full Width",
  },
  {
    id: 12,
    text: "Sticky Description",
  },
];

const productTypes = [
  {
    id: 1,
    text: "Product - Simple",
  },
  {
    id: 2,
    text: "Product - Variable",
  },
  {
    id: 3,
    text: "(Color/Size/etc.)",
  },
  {
    id: 4,
    text: "Product - Digital",
  },
  {
    id: 5,
    text: "Download",
  },
  {
    id: 6,
    text: "Product - Grouped",
  },
  {
    id: 7,
    text: "Product - Pre-orders",
  },
  {
    id: 8,
    text: "Product - External / Affiliate",
  },
  {
    id: 9,
    text: "Product - On Sale",
  },
  {
    id: 10,
    text: "Product - Out of Stock",
  },
  {
    id: 11,
    text: "Variant Images Grouped",
  },
  {
    id: 12,
    text: "Back in stock notification",
  },
  {
    id: 13,
    text: "With 360 degree view",
  },
  {
    id: 14,
    text: "With instagram",
  },
];

const productFeatures = [
  {
    id: 1,
    text: "Swatch with circle",
  },
  {
    id: 2,
    text: "Swatch with radio",
  },
  {
    id: 3,
    text: "Swatch with radio 2",
  },
  {
    id: 4,
    text: "Swatch with radio 3",
  },
  {
    id: 5,
    text: "Swatch with radio 4",
  },
  {
    id: 6,
    text: "Swatch with rectangle",
  },
  {
    id: 7,
    text: "Swatch with rectangle 2",
  },
  {
    id: 8,
    text: "Swatch with simple ",
  },
  {
    id: 9,
    text: "Swatch with simple 2",
  },
  {
    id: 10,
    text: "With Images Swatch",
  },
  {
    id: 11,
    text: "With Gallery Swatch",
  },
  {
    id: 12,
    text: "Sticky add to cart",
  },
];

const pages = [
  {
    id: 1,
    text: "About Us",
  },
  {
    id: 2,
    text: "Contact Us",
  },
  {
    id: 3,
    text: "Designers",
  },
  {
    id: 4,
    text: "FAQ",
  },
  {
    id: 5,
    text: "Terms & Conditions",
  },
  {
    id: 6,
    text: "Returns & Exchanges",
  },
  {
    id: 7,
    text: "Shipping & Delivery",
  },
  {
    id: 8,
    text: "Privacy Policy",
  },
  {
    id: 9,
    text: "Shortcode Page",
  },
];

const header = [
  {
    id: 1,
    text: "Header Design 1",
  },
  {
    id: 2,
    text: "Header Design 2",
  },
  {
    id: 3,
    text: "Header Design 3",
  },
  {
    id: 4,
    text: "Header Design 4",
  },
  {
    id: 5,
    text: "Header Transparent",
  },
  {
    id: 6,
    text: "Vertical Menu",
  },
];

const shop = [
  {
    id: 1,
    text: "Shopping Cart",
  },
  {
    id: 2,
    text: "My Account",
  },
  {
    id: 3,
    text: "Track order",
  },
  {
    id: 4,
    text: "Password Page",
  },
  {
    id: 5,
    text: "404 Not Found",
  },
  {
    id: 6,
    text: "With Product Listing",
  },
  {
    id: 7,
    text: "With Instagram Shop",
  },
  {
    id: 8,
    text: "With Lookbook",
  },
  {
    id: 9,
    text: "With Gallery",
  },
];

const shopCategories = [
  {
    id: 1,
    text: "Fruits",
  },
  {
    id: 2,
    text: "Drinks",
  },
  {
    id: 3,
    text: "Butter & Egges",
  },
  {
    id: 4,
    text: "Trees",
  },
  {
    id: 5,
    text: "Cakes",
  },
  {
    id: 6,
    text: "Meats",
  },
  {
    id: 7,
    text: "Fish",
  },
  {
    id: 8,
    text: "Vegatables",
  },
  {
    id: 9,
    text: "Onions",
  },
  {
    id: 10,
    text: "Grapes",
  },
  {
    id: 11,
    text: "Banana",
  },
  {
    id: 12,
    text: "Potatoes",
  },
];

const services = [
  {
    id: 1,
    image: plane,
    title: "free shipping",
    text: "Free Shipping for all US order"
  },
  {
    id: 2,
    image: headphones,
    title: "support 24/7",
    text: "We support 24h a day"
  },
  {
    id: 3,
    image: refresh,
    title: "100% Money Back",
    text: "You have 30 days to Return"
  },
  {
    id: 4,
    image: gift,
    title: "Payment Secure",
    text: "We ensure secure payment"
  },
]

const allProducts = [
  {
      id: 1,
      price: 15.00,
      name: "Plum Tomato",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_360x.jpg?v=1565592563",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_360x.jpg?v=1565592563",
      sale: false,
      topRated:true,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 2,
      price: 5.00,
      name: "Pinkerton Avocado",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_360x.jpg?v=1565594363",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_360x.jpg?v=1565594363",
      sale: false,
      topRated:true,
      bestSelling: true,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 3,
      price: 15.00,
      name: "Red Pithaya",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_360x.jpg?v=1565594423",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_360x.jpg?v=1565594423",
      sale: true,
      topRated:true,
      bestSelling: true,
      onSale: false,
      salePercent:-25,
      saleCount:20.00,
      save: false,
  },
  {
      id: 4,
      price: 18.00,
      name: "Bananas",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_360x.jpg?v=1565594302",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_360x.jpg?v=1565594302",
      sale: false,
      topRated:false,
      bestSelling: true,
      onSale: true,
      salePercent:0,
      saleCount:0,
      save: false,
  },

  {
      id: 5,
      price: 10.00,
      name: "Fresh Strawberries",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-4_360x.jpg?v=1565591604",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-2_360x.jpg?v=1565591604",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-50,
      saleCount:20.00,
      save: false,
  },
  {
      id: 6,
      price: 10.00,
      name: "Violet Cauliflower",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_360x.jpg?v=1565592922",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_360x.jpg?v=1565592922",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-34,
      saleCount:15.00,
      save: false,
  },
  {
      id: 7,
      price: 12.00,
      name: "Black Eggplants",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_360x.jpg?v=1565594063",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_360x.jpg?v=1565594063",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 8,
      price: 20.00,
      name: "Organic Lemon",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_360x.jpg?v=1565592743",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_360x.jpg?v=1565592743",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-20,
      saleCount:25.00,
      save: false,
  },
  {
      id: 9,
      price: 10.00,
      name: "Peanut Butter",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/978a7499-ce93-4da0-a805-fb449a34e3be_360x.jpg?v=1565594242",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2cc67697-7856-4b5c-8f04-fe5cd3112e2b_360x.jpg?v=1565594242",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-17,
      saleCount:12.00,
      save: false,
  },
  {
      id: 10,
      price: 12.00,
      name: "Butter Pista",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_360x.jpg?v=1565594181",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_360x.jpg?v=1565594181",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: true,
      salePercent:-34,
      saleCount:10.00,
      save: false,
  },
  {
      id: 11,
      price: 8.00,
      name: "Basil Pesto",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a_360x.jpg?v=1565594123",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420_360x.jpg?v=1565594123",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: true,
      salePercent:-20,
      saleCount:10.00,
      save: false,
  },
  {
      id: 12,
      price: 10.00,
      name: "Orange Cauliflower",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower_360x.jpg?v=1565592622",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower-2_360x.jpg?v=1565592622",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 13,
      price: 12.00,
      name: "Sorbet Ice Cream",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19_360x.jpg?v=1565592383",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49_360x.jpg?v=1565592383",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-20,
      saleCount:15.00,
      save: false,
  },
  {
      id: 14,
      price: 18.00,
      name: "Organic Almaverde",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/dark-green-organic-courgettes-almaverde-bio_360x.jpg?v=1565592683",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/dark-green-organic-courgettes-almaverde-bio-2_360x.jpg?v=1565592683",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 15,
      price: 10.00,
      name: "Fresh Bergamot",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-bergamot-3_360x.jpg?v=1565592504",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-bergamot_360x.jpg?v=1565592504",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 16,
      price: 18.00,
      name: "Annurca Apples",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/annurca-apples-igp-3_360x.jpg?v=1565591484",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/annurca-apples-igp_360x.jpg?v=1565591484",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 17,
      price: 10.00,
      name: "Red Onion",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-organic-onion-almaverde-bio_360x.jpg?v=1565592863",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-organic-onion-almaverde-bio-3_360x.jpg?v=1565592863",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 18  ,
      price: 15.00,
      name: "Red Cabbage",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-red-cabbage-almaverde-bio_360x.jpg?v=1565592803",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-red-cabbage-almaverde-bio-3_360x.jpg?v=1565592803",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 19,
      price: 10.00,
      name: "Chili Pepper",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chili-pepper-jalapeno-green-fresh-1_360x.jpg?v=1565592443",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chili-pepper-jalapeno-green-fresh_360x.jpg?v=1565592443",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 20,
      price: 16.00,
      name: "Navel Orange",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-navel-orange-almaverde-bio_360x.jpg?v=1565591662",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-navel-orange-almaverde-bio-3_360x.jpg?v=1565591662",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-20,
      saleCount:20.00,
      save: false,
  },
  {
      id: 21,
      price: 20.00,
      name: "Ratto Milk",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/estratto-di-limone-insal-arte_360x.jpg?v=1565592322",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/estratto-di-limone-insal-arte-1_360x.jpg?v=1565592322",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 22,
      price: 15.00,
      name: "White Grape",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/seedless-white-grape-2_360x.jpg?v=1565591842",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/seedless-white-grape_360x.jpg?v=1565591842",
      sale: false,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:0,
      saleCount:0,
      save: false,
  },
  {
      id: 23,
      price: 12.00,
      name: "Purea Lime",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime_360x.jpg?v=1565592262",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime-1_360x.jpg?v=1565592262",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-34,
      saleCount:18.00,
      save: false,
  },
  {
      id: 24,
      price: 20.00,
      name: "Pineapple Slices",
      img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/b431fc16-4874-4b0d-8cfa-34b8e7977ed1_360x.jpg?v=1565592202",
      img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/e94f6f87-244e-4443-8604-9cdbc7c24fd3_360x.jpg?v=1565592202",
      sale: true,
      topRated:false,
      bestSelling: false,
      onSale: false,
      salePercent:-20,
      saleCount:25.00,
      save: false,
  },
]

export {
  freshFruit,
  nutGifts,
  dailyVegetables,
  exoticVegetables,
  drink,
  category,
  homePages,
  nicheLayouts,
  nicheLayouts2,
  shopStyles,
  productPageStyles,
  productTypes,
  productFeatures,
  pages,
  header,
  shop,
  shopCategories,
  services,
  allProducts,
};
