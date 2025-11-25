import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page2.css";

interface Food {
  name: string;
  price: number;
  type?: "Veg" | "Non-Veg" | "Fast Food";
}

interface Restaurant {
  name: string;
  image: string;
  rating: number;
  time: string;
  foods: Food[];
  type?: "Veg" | "Non-Veg" | "Fast Food";
}

interface Category {
  name: string;
  img: string;
}

// Categories
const categories: Category[] = [
  { name: "Pizza", img: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png" },
  { name: "Burger", img: "https://cdn-icons-png.flaticon.com/128/3075/3075977.png" },
  { name: "Biryani", img: "https://cdn-icons-png.flaticon.com/128/3075/3075970.png" },
  { name: "Cake", img: "https://cdn-icons-png.flaticon.com/128/3075/3075957.png" },
  { name: "Ice Cream", img: "https://cdn-icons-png.flaticon.com/128/1046/1046783.png" },
  { name: "North Indian", img: "https://cdn-icons-png.flaticon.com/128/1046/1046787.png" },
  { name: "South Indian", img: "https://cdn-icons-png.flaticon.com/128/1046/1046790.png" },
];

// Restaurants
const restaurants: Restaurant[] = [
  {
    name: "Tasty Pizza",
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    time: "30-35 min",
    type: "Veg",
    foods: [
      { name: "Margherita", price: 180, type: "Veg" },
      { name: "Farmhouse", price: 250, type: "Veg" },
      { name: "Pepperoni", price: 280, type: "Non-Veg" },
    ],
  },
  {
    name: "Burger Hub",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    time: "20-25 min",
    type: "Fast Food",
    foods: [
      { name: "Veg Burger", price: 90, type: "Veg" },
      { name: "Cheese Burger", price: 120, type: "Veg" },
      { name: "Double Patty Burger", price: 150, type: "Non-Veg" },
    ],
  },
  {
    name: "Biryani House",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    time: "35-40 min",
    type: "Non-Veg",
    foods: [
      { name: "Chicken Biryani", price: 200, type: "Non-Veg" },
      { name: "Veg Biryani", price: 150, type: "Veg" },
      { name: "Mutton Biryani", price: 250, type: "Non-Veg" },
    ],
  },
 
  {
  name: "Spicy Grill",
  image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "25-30 min",
  type: "Non-Veg",
  foods: [
    { name: "Grilled Chicken", price: 220, type: "Non-Veg" },
    { name: "Paneer Tikka", price: 180, type: "Veg" },
    { name: "Chicken Wings", price: 200, type: "Non-Veg" }
  ]
},
{
  name: "Star Café",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  rating: 4.4,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Cold Coffee", price: 90, type: "Veg" },
    { name: "Chocolate Donut", price: 70, type: "Veg" },
    { name: "Sandwich", price: 120, type: "Veg" }
  ]
},
{
  name: "Royal Biryani Center",
  image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: 4.8,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Hyderabadi Biryani", price: 240, type: "Non-Veg" },
    { name: "Egg Biryani", price: 170, type: "Non-Veg" },
    { name: "Veg Dum Biryani", price: 160, type: "Veg" }
  ]
},
{
  name: "Crispy Fried Corner",
  image: "https://images.unsplash.com/photo-1600339240932-226cff938b4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: 4.2,
  time: "20-25 min",
  type: "Fast Food",
  foods: [
    { name: "Fried Chicken", price: 180, type: "Non-Veg" },
    { name: "French Fries", price: 70, type: "Veg" },
    { name: "Chicken Popcorn", price: 150, type: "Non-Veg" }
  ]
},
{
  name: "Italian Pasta House",
  image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "25-30 min",
  type: "Veg",
  foods: [
    { name: "White Sauce Pasta", price: 160, type: "Veg" },
    { name: "Red Sauce Pasta", price: 150, type: "Veg" },
    { name: "Garlic Bread", price: 80, type: "Veg" }
  ]
},
{
  name: "Mumbai Chaat Center",
  image: "https://media.istockphoto.com/id/537817390/photo/vada-pav-or-vada-pav.jpg?s=612x612&w=is&k=20&c=c__PYeO8Xiq1o7Of0xZfZ0zoB8D4UixTm2i6wqke4cc=",
  rating: 4.3,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Pani Puri", price: 50, type: "Veg" },
    { name: "Bhel Puri", price: 60, type: "Veg" },
    { name: "Dahi Puri", price: 70, type: "Veg" }
  ]
},
{
  name: "Chinese Town",
  image: "https://media.istockphoto.com/id/2182989430/photo/chinese-food-in-the-market.jpg?s=612x612&w=is&k=20&c=3aWKAiu3mTE0R5-kPGSA-dbwOFwyNnsIKzv8OT_WBjE=",
  rating: 4.6,
  time: "20-25 min",
  type: "Fast Food",
  foods: [
    { name: "Veg Noodles", price: 120, type: "Veg" },
    { name: "Chicken Manchurian", price: 180, type: "Non-Veg" },
    { name: "Fried Rice", price: 130, type: "Veg" }
  ]
},
{
  name: "Sweet Bliss Bakery",
  image: "https://media.istockphoto.com/id/1063199334/photo/brazilian-coconut-kisses-beijinhos-de-coco-are-traditionally-made-from-a-mixture-of-sweetened.jpg?s=612x612&w=is&k=20&c=4_A9N5_MtkE_O12zQPUwJhQKOV928JJPnBjokUOKms0=",
  rating: 4.7,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Black Forest Cake", price: 300, type: "Veg" },
    { name: "Blueberry Muffin", price: 80, type: "Veg" },
    { name: "Strawberry Pastry", price: 90, type: "Veg" }
  ]
},
{
  name: "Tandoori Flames",
  image: "https://media.istockphoto.com/id/1303442507/photo/spicy-indian-paneer-tikka-masala-on-a-skewer-on-wooden-platter.jpg?s=612x612&w=is&k=20&c=eWQP5805l7nAAOub3q_bWnF6G6PEvOGEdbNwX6ZXjJM=",
  rating: 4.5,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Tandoori", price: 260, type: "Non-Veg" },
    { name: "Butter Naan", price: 30, type: "Veg" },
    { name: "Paneer Butter Masala", price: 180, type: "Veg" }
  ]
},
{
  name: "Daily Fresh Juice Bar",
  image: "https://media.istockphoto.com/id/818584076/photo/various-fruits-and-vegetables-juices.jpg?s=612x612&w=is&k=20&c=1nqaeGdgk6319U2FJO6iQNW_TjIntVqbJpzkE84m2qo=",
  rating: 4.4,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Orange Juice", price: 80, type: "Veg" },
    { name: "Watermelon Juice", price: 70, type: "Veg" },
    { name: "Mixed Fruit Shake", price: 120, type: "Veg" }
  ]
},
{
  name: "Urban Dosa Corner",
  image: "https://media.istockphoto.com/id/2128665436/photo/dry-flatbread-in-shape-of-a-cone-and-various-types-of-sauce-on-the-table-in-the-restaurant.jpg?s=612x612&w=is&k=20&c=Z0OjFoNNyazh4piWu52VTurH91L3TAfn59yv6Jf8OOE=",
  rating: 4.6,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Masala Dosa", price: 90, type: "Veg" },
    { name: "Plain Dosa", price: 70, type: "Veg" },
    { name: "Onion Dosa", price: 100, type: "Veg" }
  ]
},
{
  name: "Punjabi Dhaba",
  image: "https://media.istockphoto.com/id/1224611938/photo/north-indian-thali.jpg?s=612x612&w=is&k=20&c=5EDLh5UX7wnasV8SPiydYyDDOkMXukDyt3QPi26nVQw=",
  rating: 4.5,
  time: "25-30 min",
  type: "Veg",
  foods: [
    { name: "Chole Bhature", price: 120, type: "Veg" },
    { name: "Rajma Chawal", price: 110, type: "Veg" },
    { name: "Aloo Paratha", price: 80, type: "Veg" }
  ]
},
{
  name: "Paradise Biryani",
  image: "https://media.istockphoto.com/id/1499219860/photo/chicken-biryani-with-masala-sauce-spices-eggs-vegetable-and-papad-chicken-biryani-rice-on-a.jpg?s=612x612&w=is&k=20&c=1m5Rja-DC0KdX49viSRVAptyb8M_jvWmQTv7gvvfIR0=",
  rating: 4.7,
  time: "30-40 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Dum Biryani", price: 260, type: "Non-Veg" },
    { name: "Mutton Fry Biryani", price: 300, type: "Non-Veg" },
    { name: "Paneer Biryani", price: 200, type: "Veg" }
  ]
},
{
  name: "The Coffee Spot",
  image: "https://media.istockphoto.com/id/1177900338/photo/cup-of-espresso-with-coffee-beans.jpg?s=612x612&w=is&k=20&c=gs0yAAavW1aCL88moL3JpxB5yh9_6O9DyGDiAzbGljk=",
  rating: 4.3,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Cappuccino", price: 120, type: "Veg" },
    { name: "Hot Chocolate", price: 150, type: "Veg" },
    { name: "Mocha", price: 140, type: "Veg" }
  ]
},
{
  name: "Wok & Roll Chinese",
  image: "https://media.istockphoto.com/id/1150956580/photo/come-join-us-for-a-coffee.jpg?s=612x612&w=is&k=20&c=sjVK81k3zvZjMbV4bt3tgBIovzsUAX-cG_AZVlTVK-4=",
  rating: 4.4,
  time: "20-25 min",
  type: "Fast Food",
  foods: [
    { name: "Veg Hakka Noodles", price: 130, type: "Veg" },
    { name: "Chicken Noodles", price: 160, type: "Non-Veg" },
    { name: "Spring Rolls", price: 100, type: "Veg" }
  ]
},
{
  name: "Fresh Farm Salads",
  image: "https://media.istockphoto.com/id/1129700365/photo/spinach-salad-with-fresh-cucumbers-tomato-onion-pomegranate-sesame-seeds-and-cashew-nuts-on.jpg?s=612x612&w=is&k=20&c=a_7eRSxg8dXLu33LgoBB7gbmRS_mmLWhAz8d2YF2mLc=",
  rating: 4.5,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Caesar Salad", price: 140, type: "Veg" },
    { name: "Green Salad", price: 90, type: "Veg" },
    { name: "Fruit Bowl", price: 120, type: "Veg" }
  ]
},
{
  name: "Bombay Sandwich Co.",
  image: "https://media.istockphoto.com/id/1220390518/photo/vegan-super-sandwich-served-with-sprouts.jpg?s=612x612&w=is&k=20&c=_ywPR5Lm4RI1SCPUC2-jhJ4b4y9lUE8RVY-WGRKBjI8=",
  rating: 4.2,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Veg Sandwich", price: 80, type: "Veg" },
    { name: "Cheese Sandwich", price: 100, type: "Veg" },
    { name: "Grill Sandwich", price: 130, type: "Veg" }
  ]
},
{
  name: "Sushi Express",
  image: "https://media.istockphoto.com/id/1320922361/photo/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup.jpg?s=612x612&w=is&k=20&c=TPa7OnrI2d1iKuLKBQX4h2JvKGDodMIdb5oHqoU5gpk=",
  rating: 4.6,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Salmon Sushi", price: 300, type: "Non-Veg" },
    { name: "Veg Sushi", price: 220, type: "Veg" },
    { name: "Tuna Roll", price: 280, type: "Non-Veg" }
  ]
},
{
  name: "The Waffle House",
  image: "https://media.istockphoto.com/id/185266029/photo/waffles-with-fruit-and-maple-syrup-on-a-marble-counter.jpg?s=612x612&w=is&k=20&c=71bUc7qdMBjQSD29t4ovJ02u6rcrwZLSm2stZekf0ro=",
  rating: 4.4,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Chocolate Waffle", price: 140, type: "Veg" },
    { name: "Nutella Waffle", price: 160, type: "Veg" },
    { name: "Strawberry Waffle", price: 150, type: "Veg" }
  ]
},
{
  name: "BBQ Nation Express",
  image: "https://media.istockphoto.com/id/1403794779/photo/view-on-fried-meat-which-man-cuts-to-slices-on-cutting-board.jpg?s=612x612&w=is&k=20&c=FuFdAVDHSzBlTMgop62qfTh114EqGUOFnqUYyI1U--k=",
  rating: 4.7,
  time: "35-40 min",
  type: "Non-Veg",
  foods: [
    { name: "BBQ Chicken", price: 300, type: "Non-Veg" },
    { name: "BBQ Paneer", price: 220, type: "Veg" },
    { name: "Grilled Fish", price: 350, type: "Non-Veg" }
  ]
},
{
  name: "The Breakfast Club",
  image: "https://media.istockphoto.com/id/1133161903/photo/breakfast-table-with-bread-fruits-and-champagne.jpg?s=612x612&w=is&k=20&c=oJl5ZhIWphttoggFteBJZpXQj7cw0SsSvCi9dql9kTw=",
  rating: 4.3,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Pancakes", price: 130, type: "Veg" },
    { name: "Omelette", price: 100, type: "Veg" },
    { name: "Hash Browns", price: 90, type: "Veg" }
  ]
},
{
  name: "Hot & Spicy Kebabs",
  image: "https://media.istockphoto.com/id/504908078/photo/pork-chops-with-kabobs-on-the-bbq.jpg?s=612x612&w=is&k=20&c=AIoLO9ZRC-8R7e98wrjEZkBZxZ-ahnEPa0_fh0AWKPI=",
  rating: 4.6,
  time: "25-30 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Kebab", price: 180, type: "Non-Veg" },
    { name: "Seekh Kebab", price: 200, type: "Non-Veg" },
    { name: "Paneer Kebab", price: 160, type: "Veg" }
  ]
},
{
  name: "Veggie Paradise",
  image: "https://media.istockphoto.com/id/867412558/photo/fresh-and-healthy-vegetables-and-colorful-fruit.jpg?s=612x612&w=is&k=20&c=eHKSEYOFfe1HiD1lQk2WIiFJhEm7D1f-Jt_kEY_mHCw=",
  rating: 4.5,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Veg Thali", price: 180, type: "Veg" },
    { name: "Paneer Sabzi", price: 150, type: "Veg" },
    { name: "Mix Veg Curry", price: 130, type: "Veg" }
  ]
},
{
  name: "Elite Ice Cream Parlour",
  image: "https://media.istockphoto.com/id/476824782/photo/coffee-latte.jpg?s=1024x1024&w=is&k=20&c=TfLDKGWQEGRo2U0MSIRCV_wJsyk6-0lDOuEqSGghePc=",
  rating: 4.7,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Chocolate Ice Cream", price: 90, type: "Veg" },
    { name: "Vanilla Scoop", price: 70, type: "Veg" },
    { name: "Butterscotch Cup", price: 80, type: "Veg" }
  ]
},
{
  name: "Royal Tandoor",
  image: "https://media.istockphoto.com/id/995903748/photo/smoked-and-spicy-tandoori-chicken-grilling-with-smoke.jpg?s=1024x1024&w=is&k=20&c=xmY9P0ALhWazQaFURiO-FI1MCk5ya80FbA7g6MSCkRY=",
  rating: 4.6,
  time: "25-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Tandoori Chicken", price: 260, type: "Non-Veg" },
    { name: "Garlic Naan", price: 40, type: "Veg" },
    { name: "Chicken Curry", price: 220, type: "Non-Veg" }
  ]
},
{
  name: "Burger Kingz",
  image: "https://media.istockphoto.com/id/1267101695/vector/deluxe-king-size-burger-ads-with-tasty-toppings-like-tomato-ketchup-onion-and-green.jpg?s=612x612&w=is&k=20&c=TL1RTAQITbUHgQfOCN3Usno4DA-lgI4HH86S463eU4U=",
  rating: 4.2,
  time: "15-20 min",
  type: "Fast Food",
  foods: [
    { name: "Crispy Burger", price: 120, type: "Veg" },
    { name: "Chicken Burger", price: 150, type: "Non-Veg" },
    { name: "Cheese Burst Burger", price: 160, type: "Veg" }
  ]
},
{
  name: "Taste of Tamil Nadu",
  image: "https://media.istockphoto.com/id/1280359179/photo/sambar-south-indian-lentil-stew-with-vegetables-and-curry-leaves.jpg?s=612x612&w=is&k=20&c=4CdJEQhaq5s3VxqsVHod4covVJDkbB4edQsi8cXoyMw=",
  rating: 4.5,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Idli Sambar", price: 60, type: "Veg" },
    { name: "Medu Vada", price: 50, type: "Veg" },
    { name: "Curd Rice", price: 70, type: "Veg" }
  ]
},
{
  name: "Thai Villa",
  image: "https://media.istockphoto.com/id/596799642/photo/beef-pad-thai-shot-from-overhead-view.jpg?s=612x612&w=is&k=20&c=2yDobTQcGhen_OpYOxoWPwrF7VvLd8cp719zFnCqqr4=",
  rating: 4.6,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Thai Green Curry", price: 260, type: "Non-Veg" },
    { name: "Pad Thai", price: 230, type: "Veg" },
    { name: "Coconut Soup", price: 150, type: "Veg" }
  ]
},
{
  name: "Shawarma Station",
  image: "https://images.unsplash.com/photo-1583665354191-634609954d54?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: 4.4,
  time: "15-20 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Shawarma", price: 120, type: "Non-Veg" },
    { name: "Schezwan Shawarma", price: 140, type: "Non-Veg" },
    { name: "Veg Shawarma", price: 90, type: "Veg" }
  ]
},
{
  name: "Delhi Paratha House",
  image: "https://media.istockphoto.com/id/980049396/photo/stuffed-paneer-paratha-with-melting-butter-served-with-fresh-cottage-cheese-cubes-and-tomato.jpg?s=612x612&w=is&k=20&c=8AlYlD9zsNc4K0NDbVjv_hVxIpE50AikOn1zQzqKmcE=",
  rating: 4.3,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Gobi Paratha", price: 80, type: "Veg" },
    { name: "Paneer Paratha", price: 100, type: "Veg" },
    { name: "Lassi", price: 60, type: "Veg" }
  ]
},
{
  name: "Juicy Burgers Café",
  image: "https://media.istockphoto.com/id/467416670/photo/huge-grass-fed-bison-hamburger-with-chips-beer.jpg?s=612x612&w=is&k=20&c=YT1tHJL_9oXVegF1qrVRseGgfgJ_HGyX41_ZwU6ro9A=",
  rating: 4.5,
  time: "15-20 min",
  type: "Fast Food",
  foods: [
    { name: "Veg Supreme Burger", price: 140, type: "Veg" },
    { name: "Chicken Loaded Burger", price: 180, type: "Non-Veg" },
    { name: "Coke Float", price: 90, type: "Veg" }
  ]
}


];

const locations = ["New York", "Mumbai", "Bangalore", "Hyderabad", "Delhi", "Chennai", "Kolkata", "Pune"];

const Page2: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState("New York"); // Default location
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");

  const filteredRestaurants = restaurants.filter((res) => {
    const matchesSearch =
      res.name.toLowerCase().includes(search.toLowerCase()) ||
      res.foods.some((food) => food.name.toLowerCase().includes(search.toLowerCase()));

    const matchesFilter =
      filter === ""
        ? true
        : filter === "Rating4"
        ? res.rating >= 4
        : res.type === filter;

    return matchesSearch && matchesFilter;
  });

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <div className="page2" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Location Bar */}
      <div
        className="location-bar"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          backgroundColor: "#fff",
          padding: "8px 12px",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          width: "fit-content",
          cursor: "pointer",
        }}
        onClick={() => setShowLocationModal(true)}
      >
        <span style={{ fontSize: "20px", marginRight: "8px" }}>📍</span>
        <span style={{ fontWeight: "bold" }}>{location}</span>
        <span style={{ marginLeft: "6px", color: "#E53935" }}>▼</span>
      </div>

      {/* Location Modal */}
      {showLocationModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={() => setShowLocationModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              width: "300px",
              maxHeight: "400px",
              overflowY: "auto",
              padding: "20px",
            }}
          >
            <h3>Select Location</h3>
            <input
              type="text"
              placeholder="Search city..."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginBottom: "12px",
                outline: "none",
              }}
            />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {filteredLocations.map((loc) => (
                <li
                  key={loc}
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setLocation(loc);
                    setShowLocationModal(false);
                    setLocationSearch("");
                  }}
                >
                  {loc}
                </li>
              ))}
              {filteredLocations.length === 0 && <li>No cities found</li>}
            </ul>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search restaurants or dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          outline: "none",
          fontSize: "16px",
        }}
      />

      {/* Category Strip */}
      <div className="category-strip" style={{ display: "flex", overflowX: "auto", marginBottom: "20px" }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-item"
            onClick={() => navigate(`/category/${cat.name}`)}
            style={{
              flex: "0 0 auto",
              textAlign: "center",
              marginRight: "12px",
              cursor: "pointer",
            }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "6px",
                border: "2px solid #E53935",
              }}
            />
            <p style={{ fontSize: "14px", fontWeight: "500" }}>{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="filters" style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("")}>All</button>
        <button onClick={() => setFilter("Rating4")}>Rating 4+</button>
        <button onClick={() => setFilter("Veg")}>Veg</button>
        <button onClick={() => setFilter("Non-Veg")}>Non-Veg</button>
        <button onClick={() => setFilter("Fast Food")}>Fast Food</button>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <p className="no-restaurant">No restaurants found</p>
        ) : (
          filteredRestaurants.map((res) => (
            <div
              key={res.name}
              className="restaurant-card"
              onClick={() => navigate(`/restaurant/${res.name}`)}
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                overflow: "hidden",
                cursor: "pointer",
                marginBottom: "16px",
              }}
            >
              <img src={res.image} alt={res.name} style={{ width: "120px", objectFit: "cover" }} />
              <div style={{ padding: "12px" }}>
                <h3>{res.name}</h3>
                <div style={{ display: "flex", gap: "12px", fontSize: "14px", marginBottom: "6px" }}>
                  <span>⭐ {res.rating}</span>
                  <span>⏱ {res.time}</span>
                  <span>{res.type}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "13px" }}>
                  {res.foods.map((food) => (
                    <div
                      key={food.name}
                      style={{ backgroundColor: "#f5f5f5", padding: "2px 6px", borderRadius: "6px" }}
                    >
                      {food.name} - ₹{food.price}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page2;



















