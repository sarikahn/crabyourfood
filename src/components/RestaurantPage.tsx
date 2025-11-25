import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./RestaurantPage.css";

interface Food {
  name: string;
  price: number;
  type?: "Veg" | "Non-Veg" | "Fast Food" | "Cafe";
  image?: string;
}

interface Restaurant {
  name: string;
  image: string;
  rating: number;
  time: string;
  type?: "Veg" | "Non-Veg" | "Fast Food" | "Cafe";
  foods: Food[];
}

// Dummy data
const restaurants: Restaurant[] = [
  {
    name: "Tasty Pizza",
    image: "https://images.unsplash.com/photo-1604908177521-b022d6a14c8f?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    time: "30-35 min",
    type: "Veg",
    foods: [
      { name: "Margherita", price: 180, type: "Veg", image: "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=is&k=20&c=p5BwDtz_2oehTwP5DqW8j_Je1mp8fvWOkVDnuE8LJxI=" },
      { name: "Farmhouse", price: 250, type: "Veg", image: "https://media.istockphoto.com/id/2192670715/photo/italian-culinary-still-life-a-farmhouse-pizza-with-potatoes-chorizo-olives-and-cheese-seen.jpg?s=612x612&w=is&k=20&c=U2D1z8c_ahuhh3JYFmpZGID6W3kUXGuwohvFqBBtlIU=" },
      { name: "Pepperoni", price: 280, type: "Non-Veg", image: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=34cybUQKjUr2-gsYOdzxlnez3VRBusIhozf5eKp11HI=" },
      { name: "Vegetable Pizza", price: 280, type: "Non-Veg", image: "https://media.istockphoto.com/id/1364747474/photo/the-perfect-toppings.jpg?s=612x612&w=is&k=20&c=Di5sC0HRAlGdW_jW6AIC_mnZIS0KZcRYETfFD2A8vX4=" },
      { name: "Cheese Pizza", price: 280, type: "Non-Veg", image: "https://media.istockphoto.com/id/905492462/photo/pizza-margarita-with-mozzarella-cheese-basil-and-tomato-template-for-your-design-and-menu-of.jpg?s=612x612&w=is&k=20&c=LqKL0zrHMU1EV85yVkHjcIcQftgc9mdAFSH3TfcfjNY=" },
      { name: "Chicken Pizza", price: 280, type: "Non-Veg", image: "https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.jpg?s=1024x1024&w=is&k=20&c=kxTVFHnosD2cyvOcba9wQtyE7_jDSEONu9LRjE62MhQ=" },
    ],
  },
 {
  name: "Spicy Grill",
  image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "25-30 min",
  type: "Non-Veg",
  foods: [
    { name: "Grilled Chicken", price: 220, type: "Non-Veg",image:"https://images.unsplash.com/photo-1592011432621-f7f576f44484?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Paneer Tikka", price: 180, type: "Veg",image:"https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chicken Wings", price: 200, type: "Non-Veg",image:"https://images.unsplash.com/photo-1637273484026-11d51fb64024?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
},
{
  name: "Star Café",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  rating: 4.4,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Cold Coffee", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/155370125/photo/iced-coffee.jpg?s=612x612&w=is&k=20&c=KWH7TfuqT2sv_nlaThmFu6Cysyr3JH4lgLhGIYV8jE0=" },
    { name: "Chocolate Donut", price: 70, type: "Veg",image:"https://media.istockphoto.com/id/1211186709/photo/chocolate-doughnut-with-sprinkles.jpg?s=1024x1024&w=is&k=20&c=l03K7-l85VuLBhMe1ZH5UCufKgEIpcxdKeXSvku-kjk="},
    { name: "Sandwich", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/1328164559/photo/veg-grilled-sandwich.jpg?s=612x612&w=is&k=20&c=5zPWQrpz9xqn_zj20rmoikwlPFPikSLysqxHhbXbuew=" }
  ]
},
{
  name: "Royal Biryani Center",
  image: "https://images.unsplash.com/photo-1603898037225-1badc31e1b9f?auto=format&fit=crop&w=400&q=80",
  rating: 4.8,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Hyderabadi Biryani", price: 240, type: "Non-Veg",image: "https://media.istockphoto.com/id/1333127675/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=612x612&w=is&k=20&c=48ysMYDFDVDjp4ZYH7DxmGqhDgYmdILCfLwKC3Fm638=" },
    { name: "Egg Biryani", price: 170, type: "Non-Veg",image:"https://media.istockphoto.com/id/534334870/photo/egg-biryani-or-anda-biryani-using-basmati-rice-and-spices.jpg?s=612x612&w=is&k=20&c=I7pFdR1AUZZy_nvOXDErKCUvUD_xOXYocwq0_09mrFo=" },
    { name: "Veg Dum Biryani", price: 160, type: "Veg",image:"https://media.istockphoto.com/id/1292442851/photo/traditional-hyderabadi-vegetable-veg-dum-biryani-with-mixed-veggies-served-with-mixed-raita.jpg?s=612x612&w=is&k=20&c=NMXV8m0JVeoc8gsRjazJf8c6Zt8II0tv1FMsYUGSSgk=" }
  ]
},
{
  name: "Crispy Fried Corner",
  image: "https://images.unsplash.com/photo-1606756790138-02a2e66c5a3a?auto=format&fit=crop&w=400&q=80",
  rating: 4.2,
  time: "20-25 min",
  type: "Fast Food",
  foods: [
    { name: "Fried Chicken", price: 180, type: "Non-Veg",image:"https://media.istockphoto.com/id/1318583333/photo/closeup-mans-hand-and-womans-hand-clinking-crispy-fried-chicken-drumsticks-against-wooden-wall.jpg?s=612x612&w=is&k=20&c=_9MPHHktWFYcbYM54BuSyqJhTUhiNnbLsU9-bIf77YU=" },
    { name: "French Fries", price: 70, type: "Veg", image:"https://media.istockphoto.com/id/1443993866/photo/french-fries-with-ketchup-and-cocktail-sauce.jpg?s=612x612&w=is&k=20&c=h3lZopxjcddSUKRlBbIr1IToosXM_LvKec6lnAnn1vQ=" },
    { name: "Chicken Popcorn", price: 150, type: "Non-Veg", image:"https://media.istockphoto.com/id/500018722/photo/rustic-popcorn-chicken.jpg?s=612x612&w=is&k=20&c=GuNow6K8v-qzS0VeKv7BFx9pkzZMG2H44oLqIunSpM4="}
  ]
},
{
  name: "Italian Pasta House",
  image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "25-30 min",
  type: "Veg",
  foods: [
    { name: "White Sauce Pasta", price: 160, type: "Veg",image:"https://media.istockphoto.com/id/1440427895/photo/top-view-of-pasta-in-white-sauce-in-a-bowl.jpg?s=612x612&w=is&k=20&c=e-p_RB5CB_5kLoo1V3JRapbjMpIsQVdRxVkymvIhiWY=" },
    { name: "Red Sauce Pasta", price: 150, type: "Veg",image:"https://media.istockphoto.com/id/1053864102/photo/pasta-with-meat-tomato-sauce-and-vegetables.jpg?s=612x612&w=is&k=20&c=uzkB-qLjrlp_TgLOVG4zFJagZi2x5cR-z2Phm27XHhY=" },
    { name: "Garlic Bread", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/1419614652/photo/food-close-up-pasta.jpg?s=612x612&w=is&k=20&c=GB31PXC1k7m643zocXH70TH8EMX6YUv5sWnAlywvHIk=" }
  ]
},
{
  name: "Mumbai Chaat Center",
  image: "https://images.unsplash.com/photo-1631515243340-6c1e89634e72?auto=format&fit=crop&w=400&q=80",
  rating: 4.3,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Pani Puri", price: 50, type: "Veg",image:"https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=is&k=20&c=jn5EFrtwoVbTSzNB4YxVQz9ntVQGZ84i3kwxenvCzNY=" },
    { name: "Bhel Puri", price: 60, type: "Veg",image:"https://media.istockphoto.com/id/1157698777/photo/bhel-puri.jpg?s=612x612&w=is&k=20&c=rDYWySYSJrT8vPSNvBXETDhTqq70EulkdL0mL6yGhU0=" },
    { name: "Dahi Puri", price: 70, type: "Veg",image:"https://media.istockphoto.com/id/1310044132/photo/super-soft-dahi-bhalla-or-dahi-vada-served-in-a-plate.jpg?s=612x612&w=is&k=20&c=LN4oUJYfJ_cUupFXtnMsig6OzBtrmqxDqyukG-coDQk=" }
  ]
},
{
  name: "Chinese Town",
  image: "https://images.unsplash.com/photo-1598514982668-65f4e7ec3f22?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "20-25 min",
  type: "Fast Food",
  foods: [
    { name: "Veg Noodles", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/1086580210/photo/schezwan-veg-noodles-is-a-spicy-and-tasty-stir-fried-flat-hakka-noodles-with-sauce-and.jpg?s=612x612&w=is&k=20&c=4pTdHSrsLULkk2g0vUr0QX0qbNu5kFt1lMn279h72_Y=" },
    { name: "Chicken Manchurian", price: 180, type: "Non-Veg",image:"https://media.istockphoto.com/id/1333972712/photo/cabbage-manchurian.jpg?s=612x612&w=is&k=20&c=E8x1X9eJvlKaykUUabs5sLf7j5WS44eJDK5iiX6tARk=" },
    { name: "Fried Rice", price: 130, type: "Veg",image:"https://media.istockphoto.com/id/1390969031/photo/close-up-asian-chicken-fried-rice-popular-take-out-food.jpg?s=612x612&w=is&k=20&c=dO3lLSfsKOQA4gxzdT5smCGsYidp_6zfiKcp3VH1sKQ=" }
  ]
},
{
  name: "Sweet Bliss Bakery",
  image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=400&q=80",
  rating: 4.7,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Black Forest Cake", price: 300, type: "Veg" ,image:"https://media.istockphoto.com/id/492428226/photo/black-forest-chocolate-cake-on-wooden-table.jpg?s=612x612&w=is&k=20&c=TgFFJIM79h89f0x-1p6spBh_9LFN9A7lWmW88JSPojg="},
    { name: "Blueberry Muffin", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/1390085527/photo/homemade-blueberry-muffins-with-ingredients.jpg?s=612x612&w=is&k=20&c=PrAkZ7mLdBg6MuICzzcUuVf8RnOeFqcA0MsvIJ6kszs=" },
    { name: "Strawberry Pastry", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/958942848/photo/home-made-delicious-strawberry-tart.jpg?s=1024x1024&w=is&k=20&c=p0zmy9xVZlNMQi8xNbf8YQR0QgrTV2ZW6bauHYKSLaU="}
  ]
},
{
  name: "Tandoori Flames",
  image: "https://images.unsplash.com/photo-1621996346565-aced64589683?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Tandoori", price: 260, type: "Non-Veg",image:"https://media.istockphoto.com/id/1363311536/photo/tandoori-chicken.jpg?s=612x612&w=is&k=20&c=jvR7rCxCOkYDgeJFLr5EgwjGhBM0daCNuLqRlMnDYpw=" },
    { name: "Butter Naan", price: 30, type: "Veg",image:"https://media.istockphoto.com/id/1140752821/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=is&k=20&c=nrFmOweSMS1x5vHSFBojEK3TsxwtVhIPZ28eyVnxA1k=" },
    { name: "Paneer Butter Masala", price: 180, type: "Veg",image:"https://media.istockphoto.com/id/885881832/photo/butter-paneer-masala-traditional-indian-paneer-curry.jpg?s=612x612&w=is&k=20&c=VI3lE_eMdSEdakz9TjELYc5xAxs_O3Tat8MnctLzlXA=" }
  ]
},
{
  name: "Daily Fresh Juice Bar",
  image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=400&q=80",
  rating: 4.4,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Orange Juice", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/915657126/photo/orange-juice-glass-jar-shot-on-rustic-wooden-table.jpg?s=612x612&w=is&k=20&c=H-tAq0NaDg5t0f5I37F60v0O7fDwk1CZK-gcJiWRz8c=" },
    { name: "Watermelon Juice", price: 70, type: "Veg",image:"https://media.istockphoto.com/id/485524950/photo/glass-of-fresh-watermelon-juice-on-wood.jpg?s=612x612&w=is&k=20&c=XVXMJytVX0hg8OzXz6-YFTAMHf6esHkBW-LwCb9Uu_o=" },
    { name: "Mixed Fruit Shake", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/648804276/photo/selection-of-colorful-detox-berry-drinks-on-wood-background.jpg?s=612x612&w=is&k=20&c=dMIMEk2mOFGndjSrLJDvnNMgivtp1ClwoFId69JuFrA=" }
  ]
},

{
  name: "Urban Dosa Corner",
  image: "https://images.unsplash.com/photo-1603896899337-6df1e5f26c0c?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Masala Dosa", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=is&k=20&c=bVpS8wBoEP116cuSpH4t8Xl4Ui4We38hE6QRgdTNKyQ=" },
    { name: "Plain Dosa", price: 70, type: "Veg",image:"https://media.istockphoto.com/id/1364757902/photo/crispy-crepes-made-of-barnyard-millets-and-lentils-commonly-known-as-barnyard-millet-ghee.jpg?s=612x612&w=is&k=20&c=CEJshxsQQQP9ydO3Mhq86DTDTc8lm8NKqAGd6t_WvlU=" },
    { name: "Chesse Dosa", price: 100, type: "Veg",image:"https://media.istockphoto.com/id/2047992355/photo/indore-sarafa-bazaar-indias-midnight-food-capital-of-madhya-pradesh-a-treat-for-foodies.jpg?s=612x612&w=is&k=20&c=jvUqEN-UkY1t31VSOthkxWuE2TzssThMTv4xGMfTVZY=" }
  ]
},
{
  name: "Punjabi Dhaba",
  image: "https://images.unsplash.com/photo-1608032077018-725c254ecc38?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "25-30 min",
  type: "Veg",
  foods: [
    { name: "Chole Bhature", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/537255054/photo/chole-bhature.jpg?s=612x612&w=is&k=20&c=D6bP9KGYSKbG74qzciBtBjD2NUT8HxZ0CplqYBRImEQ=" },
    { name: "Rajma Chawal", price: 110, type: "Veg",image:"https://media.istockphoto.com/id/1309964339/photo/rajma-chawal-an-indian-food.jpg?s=612x612&w=is&k=20&c=S7t1RLho03pLRF-k2IUp348PVJ-w96L6Ez7xuHi25x8=" },
    { name: "Aloo Paratha", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/1418692758/photo/north-indian-famous-food-aloo-paratha-with-mango-pickle-and-butter.jpg?s=612x612&w=is&k=20&c=3_NkokCATuh6zq8uY9_Ld_m8oG9yudifI7ZgGNDeyRc="}
  ]
},
{
  name: "Paradise Biryani",
  image: "https://images.unsplash.com/photo-1576402187878-974f70c89029?auto=format&fit=crop&w=400&q=80",
  rating: 4.7,
  time: "30-40 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Dum Biryani", price: 260, type: "Non-Veg",image:"https://media.istockphoto.com/id/1254720533/photo/chicken-biryani-with-yogurt-dip-popular-indian-pakistani-non-vegetarian-food.jpg?s=612x612&w=is&k=20&c=4Bhpo5wWRgUlPinde8k_5JeD4hetDK-UcGfp4EUUuj0="},
    { name: "Mutton Fry Biryani", price: 300, type: "Non-Veg",image:"https://media.istockphoto.com/id/1164561431/photo/indian-style-lamb-biryani.jpg?s=612x612&w=is&k=20&c=mlXeYGppnCoAl72QmtesodgBGuuaTXZCexMOPz65X3k=" },
    { name: "Paneer Biryani", price: 200, type: "Veg",image:"https://media.istockphoto.com/id/1292443683/photo/hyderabadi-veg-paneer-dum-biryani-with-mixed-veggies-like-paneer-potato-carrots-peas-cooked.jpg?s=612x612&w=is&k=20&c=nyWXazaPxybOKzg-4CkacCL4XJjAjvniPw1FFNCO0Lo=" }
  ]
},
{
  name: "The Coffee Spot",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  rating: 4.3,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Cappuccino", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=is&k=20&c=NYgYD4QnhFRH4lRyI7dGs_CBumw9dDuEVZh4_JzpoOQ=" },
    { name: "Hot Chocolate", price: 150, type: "Veg",image:"https://media.istockphoto.com/id/872027048/photo/two-homemade-hot-chocolate-mugs-on-rustic-wooden-table.jpg?s=612x612&w=is&k=20&c=jZK_xErzc0dzVHAIOgccEX0A2FmNLKOD1LhXP93CrqA=" },
    { name: "Mocha", price: 140, type: "Veg",image:"https://media.istockphoto.com/id/1964222407/photo/iced-caramel-macchiato-with-whipped-cream.jpg?s=612x612&w=is&k=20&c=oob_NKlr_k-UqzqUL5sw1Ca7_2UWTMSaZ4FefJMBC3s=" }
  ]
},
{
  name: "Wok & Roll Chinese",
  image: "https://images.unsplash.com/photo-1627384113979-a3ce1df52a64?auto=format&fit=crop&w=400&q=80",
  rating: 4.4,
  time: "20-25 min",
  type: "Fast Food",
  foods: [
    { name: "Veg Hakka Noodles", price: 130, type: "Veg",image:"https://media.istockphoto.com/id/1086575488/photo/schezwan-veg-noodles-is-a-spicy-and-tasty-stir-fried-flat-hakka-noodles-with-sauce-and.jpg?s=612x612&w=is&k=20&c=KFYju6z5Y6_dyRdJIC9gN_rciJlprERWGI6HytsNHg0=" },
    { name: "Chicken Noodles", price: 160, type: "Non-Veg",image:"https://media.istockphoto.com/id/1399988886/photo/chicken-noodle-soup.jpg?s=612x612&w=is&k=20&c=FOwiwGmPjpotrMZ9wbVPQ4k2AAhhfOXinMoRtQCfxb8=" },
    { name: "Spring Rolls", price: 100, type: "Veg",image:"https://media.istockphoto.com/id/665764726/photo/indian-popular-snack-food-called-vegetable-spring-rolls-or-veg-roll-or-veg-franky-made-using.jpg?s=612x612&w=is&k=20&c=qWFDQ_csfHkOi972ogM1g6JZCAtjwIdWTuoo55ilJVA=" }
  ]
},
{
  name: "Fresh Farm Salads",
  image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Caesar Salad", price: 140, type: "Veg",image:"https://media.istockphoto.com/id/1211166166/photo/caesar-salad-with-grilled-chicken-and-croutons-of-bread.jpg?s=612x612&w=is&k=20&c=Px2vSGuK4RzS6pq5a-EtRLYi5srK-MH-hu49Y8XUfH8="},
    { name: "Green Salad", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/528360281/photo/garden-salad-overhead-view.jpg?s=612x612&w=is&k=20&c=FnBceLSLwGEnm6-dI9WlFvL5EA7ZhSHaVtvtK6sPyRM=" },
    { name: "Fruit Bowl", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/533350016/photo/fruit-salad.jpg?s=612x612&w=is&k=20&c=Jhmbt5XlyALjQVVJe4EyztMZkJ9_QfJqnu7ayXCktlQ=" }
  ]
},
{
  name: "Bombay Sandwich Co.",
  image: "https://images.unsplash.com/photo-1601050690597-7a5509f18b80?auto=format&fit=crop&w=400&q=80",
  rating: 4.2,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Veg Sandwich", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/1244496118/photo/club-sandwich-on-a-rustic-table-witch-chicken-bacon-and-veg.jpg?s=612x612&w=is&k=20&c=NvebGRgZmi3iercoOU2rCb2UKnF6ZakZ_HozyWkeQ2c=" },
    { name: "Cheese Sandwich", price: 100, type: "Veg",image:"https://media.istockphoto.com/id/2162552399/photo/veg-grilled-sandwich-served-with-ketchup-isolated-over-a-rustic-wooden-background-selective.jpg?s=612x612&w=is&k=20&c=tDz13nYvfCsazKY4MX8wH48CVX4HBLMBDTt0y34Ev7I=" },
    { name: "Grill Sandwich", price: 130, type: "Veg",image:"https://media.istockphoto.com/id/916270200/photo/philly-cheese-steak-sandwich.jpg?s=612x612&w=is&k=20&c=SzW12IgZTWFClBUPNQtT9t_XcaV9JNwVdaEWUeEA8n4="}
  ]
},
{
  name: "Sushi Express",
  image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Salmon Sushi", price: 300, type: "Non-Veg",image:"https://media.istockphoto.com/id/1248602978/photo/sushi-roll-philadelphia-with-salmon-avocado-cream-cheese-sushi-menu-japanese-food-black.jpg?s=1024x1024&w=is&k=20&c=Wh5uSTKXRrtSUvFiV0FEQR6MTRr0RSGrf3-P93TxILM=" },
    { name: "Veg Sushi", price: 220, type: "Veg",image:"https://media.istockphoto.com/id/1460697798/photo/uramaki-sushi-with-rice-and-seaweed-stuffed-with-vegetables-and-vegetarian-ingredients.jpg?s=1024x1024&w=is&k=20&c=PTPzHT4TaiMd7g93GH0i05oSTrSu12Q80eRHJe-qS54=" },
    { name: "Tuna Roll", price: 280, type: "Non-Veg",image:"https://media.istockphoto.com/id/157610246/photo/tuna-roll.jpg?s=1024x1024&w=is&k=20&c=WB17wqlLJvv2AUmz6Roo6prFWW5z1h_NAF6Na1XHzGw=" }
  ]
},
{
  name: "The Waffle House",
  image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=400&q=80",
  rating: 4.4,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Chocolate Waffle", price: 140, type: "Veg",image:"https://media.istockphoto.com/id/1065436452/photo/close-up-of-chocolate-ice-cream-with-waffle-and-fresh-strawberry-on-wood-table-background.jpg?s=1024x1024&w=is&k=20&c=CC53y9yeV-1juceAWB3VZBahGWTB6SNGaPt6TYx_c0k=" },
    { name: "Nutella Waffle", price: 160, type: "Veg",image:"https://media.istockphoto.com/id/1195055177/photo/pancakes-with-banana-strawberry-and-chocolate-for-shrove-tuesday.jpg?s=612x612&w=is&k=20&c=_vyl8fUCbByMSNJvjUUtD9rLtKlVIs-Hmi4buFse8JE=" },
    { name: "Strawberry Waffle", price: 150, type: "Veg",image:"https://media.istockphoto.com/id/1096836096/photo/belgium-waffles-with-berries-and-ice-cream.jpg?s=1024x1024&w=is&k=20&c=TuvW2Rs81Lj-iFh9ptS0OSgW6_jgWOUBZnKZxAKEYR0=" }
  ]
},
{
  name: "BBQ Nation Express",
  image: "https://images.unsplash.com/photo-1553163147-622ab57e3c9a?auto=format&fit=crop&w=400&q=80",
  rating: 4.7,
  time: "35-40 min",
  type: "Non-Veg",
  foods: [
    { name: "BBQ Chicken", price: 300, type: "Non-Veg",image:"https://media.istockphoto.com/id/481754150/photo/chicken-on-a-hot-flaming-barbecue.jpg?s=612x612&w=is&k=20&c=89ELgSn3hk3LVlH9-4YzJn1YArnaXbHSGhGCj-4CW60="},
    { name: "BBQ Paneer", price: 220, type: "Veg",image:"https://media.istockphoto.com/id/942174982/photo/grilled-paneer-tikka-cheese-kebab.jpg?s=612x612&w=is&k=20&c=6PlCa1binyDZ76A2nKFMLEHu5xy8uNEMxVvTHU--n88="},
    { name: "Grilled Fish", price: 350, type: "Non-Veg",image:"https://media.istockphoto.com/id/855749956/photo/roasted-sea-bream-fish-with-lemon-slices.jpg?s=612x612&w=is&k=20&c=CAPKZ-wrr4kEZ_LyDSEuVZQU9tMbOSrqE0LzlOvSdi0="}
  ]
},
{
  name: "The Breakfast Club",
  image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80",
  rating: 4.3,
  time: "15-20 min",
  type: "Veg",
  foods: [
    { name: "Pancakes", price: 130, type: "Veg",image:"https://media.istockphoto.com/id/161170090/photo/pancakes-with-berries-and-maple-syrup.jpg?s=612x612&w=is&k=20&c=7-POUMt6SQhzAbr4m2IVEFxZpxFo5pvzLi8swlAcDNY="},
    { name: "Omelette", price: 100, type: "Veg",image:"https://media.istockphoto.com/id/485040276/photo/herb-omelette-with-chives-and-oregano.jpg?s=612x612&w=is&k=20&c=AQhVj4dvujG9VWoWDY8ancetIo0oXR0eg1H1uw2icPg=" },
    { name: "Hash Browns", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/1313535028/photo/potato-pancakes.jpg?s=612x612&w=is&k=20&c=IWdbDUlE0z0bsdkMIrr-5WpaEWtVj7tTO3RfkHwNN_4=" }
  ]
},
{
  name: "Hot & Spicy Kebabs",
  image: "https://images.unsplash.com/photo-1606756790138-02a2e66c5a3a?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "25-30 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Kebab", price: 180, type: "Non-Veg",image:"https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.jpg?s=612x612&w=is&k=20&c=_oSqTwL7cbM1fR1u8ccAGuazEwIVlu5eAtly2KfKpRs=" },
    { name: "Seekh Kebab", price: 200, type: "Non-Veg",image:"https://media.istockphoto.com/id/501027041/photo/behrai-kabab-1.jpg?s=612x612&w=is&k=20&c=m0H26rgY-IP-KTgYuzp5p_2WXX4tjjx6LtMy3Yq9UNs=" },
    { name: "Paneer Kebab", price: 160, type: "Veg",image:"https://media.istockphoto.com/id/1186759773/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=1024x1024&w=is&k=20&c=g1JrV0qs3jOzVCNd1_hECHAwXn7DzC7DdaG1_h7rYrg=" }
  ]
},
{
  name: "Veggie Paradise",
  image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Veg Thali", price: 180, type: "Veg",image:"https://media.istockphoto.com/id/1158615234/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=is&k=20&c=icc8AE2_s-xTnaHnPwOf3PusPSzI8oxDvnClCmvMHOQ="},
    { name: "Paneer Sabzi", price: 150, type: "Veg",image:"https://media.istockphoto.com/id/1214327143/photo/mix-veg-sabzi-or-sabji.jpg?s=612x612&w=is&k=20&c=YF3kD3EVArYoYKSeNEdY1NJlPdYXh7DcCD86UMxLgGw=" },
    { name: "Mix Veg Curry", price: 130, type: "Veg",image:"https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=is&k=20&c=pq1F_9GCZ4rXRSrMJwrSKqu2xWMKtJvID_UH7P_DFvI="}
  ]
},
{
  name: "Elite Ice Cream Parlour",
  image: "https://images.unsplash.com/photo-1565361535908-6e7b9a9a8fa2?auto=format&fit=crop&w=400&q=80",
  rating: 4.7,
  time: "10-15 min",
  type: "Veg",
  foods: [
    { name: "Chocolate Ice Cream", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/1491655936/photo/chocolate-ice-cream-scoop.jpg?s=1024x1024&w=is&k=20&c=8S_RuxcoEJhfTQT2T_7sBuPOT7-S2-BdPooHWDAo1OU=" },
    { name: "Vanilla Scoop", price: 70, type: "Veg",image:"https://media.istockphoto.com/id/1127289878/photo/vanilla-ice-cream-with-a-scoop-in-container-as-background-macro-scooped-out-ice-cream-top-view.jpg?s=612x612&w=is&k=20&c=sm0Aebs3ZyANqheg7ZJ8UwcJo_c94D7Wq38fXZdHLX8="},
    { name: "Butterscotch Cup", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/1351168812/photo/chocolate-cupcake-with-cream-cheese-frosting-and-caramel.jpg?s=612x612&w=is&k=20&c=bBh-hfn_rID1RiRPNozNfiaWhLsZqrGc0goPf6NAunk=" }
  ]
},
{
  name: "Royal Tandoor",
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "25-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Tandoori Chicken", price: 260, type: "Non-Veg",image:"https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.jpg?s=612x612&w=is&k=20&c=DiR2hhcm6aKRMKp2nHTBwZzIDz3r0UJ4fF7i8RhbQpw=" },
    { name: "Garlic Naan", price: 40, type: "Veg",image:"https://media.istockphoto.com/id/1143530040/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=is&k=20&c=B9BEqBF3DupSTQMbfs1iwYyiQgFD1NkIPkaWUmEf0ZU=" },
    { name: "Chicken Curry", price: 220, type: "Non-Veg",image:"https://media.istockphoto.com/id/1501040363/photo/chicken-curry-in-bowl-with-indian-spices.jpg?s=612x612&w=is&k=20&c=ytCKxSIDtBJSI5wGsIxsFEpn2QfmJWWUboEfYtDaH2k=" }
  ]
},
{
  name: "Burger Kingz",
  image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80",
  rating: 4.2,
  time: "15-20 min",
  type: "Fast Food",
  foods: [
    { name: "Crispy Burger", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/2172791490/photo/crispy-fish-burger-with-lettuce-tomato-onion-and-cheese-isolated-on-wooden-board-with-french.jpg?s=612x612&w=is&k=20&c=395WKEH0aBgl0Di_Ay830V09-8Ql5YRaHLA6qjy3cLo=" },
    { name: "Chicken Burger", price: 150, type: "Non-Veg",image:"https://media.istockphoto.com/id/521207406/photo/southern-country-fried-chicken-sandwich.jpg?s=612x612&w=is&k=20&c=I9mKugzOcnwyoc5TLQlLs-Cc2ddociLT45l8GClPonk=" },
    { name: "Cheese Burst Burger", price: 160, type: "Veg",image:"https://media.istockphoto.com/id/924969418/photo/gourmet-hamburger-and-fries.jpg?s=612x612&w=is&k=20&c=WbvrLVc6MLh8tQZ1JhjBE7RLBFJJGWmwEAz33KhWdpk=" }
  ]
},
{
  name: "Taste of Tamil Nadu",
  image: "https://images.unsplash.com/photo-1603896899337-6df1e5f26c0c?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Idli Sambar", price: 60, type: "Veg",image:"https://media.istockphoto.com/id/1424489174/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=is&k=20&c=GTNcTS4Eyozrnf2gjQ47s_I9_bPZVAERSfxXMoEMIW0=" },
    { name: "Medu Vada", price: 50, type: "Veg",image:"https://media.istockphoto.com/id/843222734/photo/indian-tasty-street-food-dahi-vada.jpg?s=612x612&w=is&k=20&c=jiP98yPTNWgT_cMvve_vSsvcnnlidSXpVp7gTi5nW18=" },
    { name: "Curd Rice", price: 70, type: "Veg",image:"https://media.istockphoto.com/id/1168154867/photo/indian-curd-rice-with-carrots-pomegranate-and-with-additional-tempering-of-spices-close-up-in.jpg?s=612x612&w=is&k=20&c=39g8lowkCBHEKjbOHOvcK3A8rhpxC8PcpLLtj1049CY=" }
  ]
},
{
  name: "Thai Villa",
  image: "https://images.unsplash.com/photo-1621996346565-aced64589683?auto=format&fit=crop&w=400&q=80",
  rating: 4.6,
  time: "30-35 min",
  type: "Non-Veg",
  foods: [
    { name: "Thai Green Curry", price: 260, type: "Non-Veg",image:"https://media.istockphoto.com/id/1267610826/photo/famous-internationally-renowned-thai-green-coconut-curry-gaeng-keow-wan-gai-with-chicken-in-a.jpg?s=612x612&w=is&k=20&c=ATJCsvnEWD-7TrS6Ds6ul68Mryeq6AxlwMiQo4FcwTc=" },
    { name: "Pad Thai", price: 230, type: "Veg",image:"https://media.istockphoto.com/id/1367738509/photo/pad-thai-vegetarian-plant-based-asian-recipe-from-thailand.jpg?s=612x612&w=is&k=20&c=CzjPfSgOTjsZHVmUmnaOX_Vh0W8phFsJzfrucUFgd-I=" },
    { name: "Coconut Soup", price: 150, type: "Veg",image:"https://media.istockphoto.com/id/517728841/photo/pumpkin-soup.jpg?s=612x612&w=is&k=20&c=d0o-0TmuKqNAJSk0Jz_0Y270r06rNoQk_bBs-Ot42L4=" }
  ]
},
{
  name: "Shawarma Station",
  image: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=400&q=80",
  rating: 4.4,
  time: "15-20 min",
  type: "Non-Veg",
  foods: [
    { name: "Chicken Shawarma", price: 120, type: "Non-Veg",image:"https://media.istockphoto.com/id/959937952/photo/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background.jpg?s=612x612&w=is&k=20&c=oPA6BPEi4D4Dtv4kC9MA6Y2rAcF0AKMpFVbNvBg-Emk=" },
    { name: "Schezwan Shawarma", price: 140, type: "Non-Veg",image:"https://media.istockphoto.com/id/888361746/photo/chicken-wrap.jpg?s=612x612&w=is&k=20&c=8cEwtwOmOGdj7VsW9wk5trLW3rUCnDgO3qtZtgTUyIg="},
    { name: "Veg Shawarma", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/665807568/photo/indian-popular-street-food-called-veg-franky-made-using-vegetables-wrapped-inside-paratha.jpg?s=612x612&w=is&k=20&c=Pox29gd7AwgOy02Q2vqJFWhenTxmwzT6QVkuYtaXw58=" }
  ]
},
{
  name: "Delhi Paratha House",
  image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
  rating: 4.3,
  time: "20-25 min",
  type: "Veg",
  foods: [
    { name: "Gobi Paratha", price: 80, type: "Veg",image:"https://media.istockphoto.com/id/626072000/photo/gobi-paratha-or-cauliflower-parotha.jpg?s=1024x1024&w=is&k=20&c=SnppzhFB3XoEb16lvNqAbX1I-ul4sgLdbejyt90Cwxk=" },
    { name: "Paneer Paratha", price: 100, type: "Veg",image:"https://media.istockphoto.com/id/980049396/photo/stuffed-paneer-paratha-with-melting-butter-served-with-fresh-cottage-cheese-cubes-and-tomato.jpg?s=1024x1024&w=is&k=20&c=gUbjOY4-yDAiv7wyb6cIMQSLYkGFJcuDLT5-Hw8Nte8=" },
    { name: "Lassi", price: 60, type: "Veg",image:"https://media.istockphoto.com/id/1008799838/photo/image-of-a-glass-of-lassi-made-from-milk-curd.jpg?s=612x612&w=is&k=20&c=Ps_D5vPNiLeLNLu3Nbx_qJ6rKjlWpohIsLUCqJwjrRM=" }
  ]
},
{
  name: "Juicy Burgers Café",
  image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  rating: 4.5,
  time: "15-20 min",
  type: "Fast Food",
  foods: [
    { name: "Veg Supreme Burger", price: 140, type: "Veg",image:"https://media.istockphoto.com/id/1498243668/photo/tasty-cheeseburger-with-lettuce-cheddar-cheese-tomato-and-pickles-burger-bun-with-sesame.jpg?s=612x612&w=is&k=20&c=NU_4ZSWs6LxGQNOlfrOftKVlahmbvAHlC1rpoXJxgjM=" },
    { name: "Chicken Loaded Burger", price: 180, type: "Non-Veg",image:"https://media.istockphoto.com/id/1299977164/photo/greek-stuffed-turkey-hamburger.jpg?s=612x612&w=is&k=20&c=tyCxYESo5gsIRhrf8v8bR9b-2Ed0luqO9RSFurX7xFE=" },
    { name: "Coke Float", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/497345159/photo/root-beer-float.jpg?s=612x612&w=is&k=20&c=8eL3Hf-F6VMwffQH9ziALWnJMJWf4LJKHJbIvez5yHM=" }
  ]
},
 {
    name: "Burger Hub",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    time: "20-25 min",
    type: "Fast Food",
    foods: [
      { name: "Veg Burger", price: 90, type: "Veg",image:"https://media.istockphoto.com/id/1166146062/photo/vegetarian-burger-with-chickpea-cutlet-and-vegetables-veg-concept-copy-space.jpg?s=612x612&w=is&k=20&c=0j-0YpoXXRYgUumK54e7fNFV28mU7XshbkZkZMZ61S0="},
      { name: "Cheese Burger", price: 120, type: "Veg",image:"https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=is&k=20&c=NzJKMHynL5sgUkx-s7nybqeJR5P85srys4pgtb84e1s=" },
      { name: "Double Patty Burger", price: 150, type: "Non-Veg",image:"https://media.istockphoto.com/id/157586054/photo/classic-burger-with-special-sauce.jpg?s=612x612&w=is&k=20&c=VzOf2oN_0uzo5jiuX23AGAdGU4-EN48gWdSlS2NGPvU=" },
    ],
  },
   {
    name: "Biryani House",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    time: "35-40 min",
    type: "Non-Veg",
    foods: [
      { name: "Chicken Biryani", price: 200, type: "Non-Veg",image:"https://media.istockphoto.com/id/1058029096/photo/chicken-biryani.jpg?s=612x612&w=is&k=20&c=nCKTkI5scQ-kJiVTTa0omL0jOZH_N_1ZBhbQttk-fgE=" },
      { name: "Veg Biryani", price: 150, type: "Veg",image:"https://media.istockphoto.com/id/1292442851/photo/traditional-hyderabadi-vegetable-veg-dum-biryani-with-mixed-veggies-served-with-mixed-raita.jpg?s=612x612&w=is&k=20&c=NMXV8m0JVeoc8gsRjazJf8c6Zt8II0tv1FMsYUGSSgk="},
      { name: "Mutton Biryani", price: 250, type: "Non-Veg",image:"https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=is&k=20&c=8LRMd7I9m-e3vGSqhbt6KN-LC6YodhfyRmaHmc9PxM0=" },
    ],
  },
];

const RestaurantPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ name: string }>();
  const restaurant = restaurants.find(r => r.name === decodeURIComponent(params.name || ""));
  const [cart, setCart] = useState<Food[]>([]);

  if (!restaurant) return <p>Restaurant not found</p>;

  const addToCart = (food: Food) => setCart(prev => [...prev, food]);

  const buyNow = (food: Food) => navigate("/checkout", { state: { cart: [food] } });

  return (
    <div className="restaurant-page">
      <h1 style={{ color: "#E53935" }}>{restaurant.name}</h1>
      <div className="menu-list">
        {restaurant.foods.map(food => (
          <div key={food.name} className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <h3>{food.name}</h3>
            <p>Type: {food.type}</p>
            <p>Price: ₹{food.price}</p>
            <button className="add-btn" onClick={() => addToCart(food)}>Add to Cart</button>
            <button className="buy-btn" onClick={() => buyNow(food)}>Buy Now</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart">
          <h2>Cart ({cart.length})</h2>
          {cart.map((item, i) => (
            <div key={i}>{item.name} - ₹{item.price}</div>
          ))}
          <button onClick={() => navigate("/checkout", { state: { cart } })} className="buy-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;




