

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FoodItemPage.css";

interface FoodItem {
  name: string;
  image: string;
  rating: number;
  price: number;
  time: string;
}

const FoodItemPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const food: FoodItem = location.state?.food;

  if (!food) {
    return <h2>No item found</h2>;
  }

  return (
    <div className="item-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img className="item-img" src={food.image} alt={food.name} />

      <h1 className="item-title">{food.name}</h1>

      <div className="item-details">
        <span>⭐ {food.rating}</span>
        <span>₹ {food.price}</span>
        <span>{food.time}</span>
      </div>

      <p className="desc">
        Delicious {food.name} made fresh with premium ingredients. A perfect meal
        to satisfy your cravings!
      </p>

      <button className="add-cart-btn">Add to Cart</button>
    </div>
  );
};

export default FoodItemPage;
