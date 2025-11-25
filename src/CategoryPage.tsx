import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoryPage.css";

interface Food {
  name: string;
  image: string;
  rating: number;
  price: number;
  time: string;
}

// Food data
const foodData: Record<string, Food[]> = {
  Pizza: [
    { name: "Margherita", image: "https://media.istockphoto.com/id/2232243758/photo/classic-margherita-pizza-with-fresh-mozzarella-and-basil-isolated-on-wooden-cutting-board-top.jpg?s=1024x1024&w=is&k=20&c=4EHMx6tRYmqL25i2-OrqVijJ53FFd3x54GOpwcR6YFU=", rating: 4.5, price: 180, time: "20 min" },
    { name: "Pepperoni", image: "https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=", rating: 4.7, price: 280, time: "25 min" },
  ],
  Burger: [
    { name: "Veggie Burger", image: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=1024x1024&w=is&k=20&c=XXp34bPwWkHPUXbZQRJpR1w2YUSpYZUB_yNdeDlVXlQ=", rating: 4.2, price: 120, time: "15 min" },
    { name: "Double Patty Burger", image: "https://media.istockphoto.com/id/617759204/photo/steakhouse-double-bacon-cheeseburger.jpg?s=1024x1024&w=is&k=20&c=BR2lI245pIsP8tC0DhsjwsWTxg0UXtp7AzUAZWpNAdU=", rating: 4.5, price: 150, time: "20 min" },
  ],
  Biryani: [
  { name: "Veggie Burger", image: "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=is&k=20&c=8LRMd7I9m-e3vGSqhbt6KN-LC6YodhfyRmaHmc9PxM0=", rating: 4.2, price: 120, time: "15 min" },
  { name: "Double Patty Burger", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.5, price: 150, time: "20 min" },
  ],
  Cake: [
  { name: "Choco lava", image: "https://media.istockphoto.com/id/951061068/photo/chocolate-fondant-cake-lava-cakes.jpg?s=612x612&w=is&k=20&c=9RM9m-HbsiUqm2X9UOjaH-57CHxV-1egztR3IVc9r64=", rating: 4.2, price: 120, time: "15 min" },
  { name: "Pastries",image: "https://media.istockphoto.com/id/904337728/photo/sweet-homemade-dark-chocolate-layer-cake.jpg?s=612x612&w=is&k=20&c=hjPAfniqqKsbe42ndvHu1lhiRPxYbSL22VkmSW7BuMY=", rating: 4.5, price: 150, time: "20 min" },
  ],
  Icecream: [
    {name: "DBC", image:"https://media.istockphoto.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=is&k=20&c=iVMdgmBBEkdqP4XLk_j7tCfmTv-tzm1sG_tlyLQqkgs=", rating: 4.2, price: 120, time: "15 min" },
    {name: "Vanilla",image:"https://media.istockphoto.com/id/1405931043/photo/scoop-the-vanilla-ice-cream-with-an-ice-cream-scoop.jpg?s=612x612&w=is&k=20&c=QFh7WosSHm_3C1tsLdKEqF3lh6O3VDrj81Qmby6wAOM=",rating: 5.6, price: 100, time: "15min"},
  ],
  NorthIndian: [
    {name: "Parota", image:"https://media.istockphoto.com/id/1205482203/photo/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala.jpg?s=1024x1024&w=is&k=20&c=aIZ-161FF4sfxTsOFtlR_VoQOakqLYQySrR09r2zBQY=", rating: 4.9,price: 130, time: "15min"},
    {name: "Naan", image:"https://media.istockphoto.com/id/186862747/photo/garlic-naan-indian-flatbread-pieces.jpg?s=1024x1024&w=is&k=20&c=V4TMNKiGFqsYjVI4FsL_pUzyrFuXCw25tZJmMIo5hxA=", rating: 4.2, price: 180, time: "15min"},
  ],
  SouthIndian: [
    {name:"South Meal", image:"https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.jpg?s=612x612&w=is&k=20&c=a_BJh0iIFNCe3afUaw8F5eOiOiUcF_y16FIZhoyJeVQ=", rating: 4.3,price:140, time:"15min"},
    {name: "Rice Sambar", image:"https://media.istockphoto.com/id/2151804754/photo/sambar-rice-or-sambar-sadam.jpg?s=1024x1024&w=is&k=20&c=kqZcOckqqd7Xz6TbHKpDSHSt5NxGRqCoWf_LAixnTu4=", rating: 5, price:120, time:"15min"},
  ],
}

const CategoryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [cart, setCart] = useState<Food[]>([]);
  const navigate = useNavigate();

  const foods = foodData[name || "Pizza"] || [];

  const addToCart = (food: Food) => {
    setCart(prev => [...prev, food]);
    alert(`${food.name} added to cart!`);
  };

  const buyNow = (food: Food) => {
    navigate("/checkout", { state: { cart: [food] } });
  };

  return (
    <div className="category-container">
      <h1 style={{ color: "#E53935" }}>{name || "Pizza"} Items</h1>

      <div className="food-grid">
        {foods.map((food, index) => (
          <div key={index} className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <h3>{food.name}</h3>
            <div className="details">
              <span>⭐ {food.rating}</span>
              <span>₹ {food.price}</span>
              <span>{food.time}</span>
            </div>
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
          <button onClick={() => navigate("/checkout", { state: { cart } })} className="buy-btn">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

