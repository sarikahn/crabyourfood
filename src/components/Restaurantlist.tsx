import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RestaurantPage.css";

interface Food {
  name: string;
  price: number;
  type?: "Veg" | "Non-Veg" | "Fast Food" | "Cafe";
}

interface Restaurant {
  name: string;
  image: string;
  rating: number;
  time: string;
  foods: Food[];
  type?: string;
}

const RestaurantPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { restaurant: Restaurant };

  if (!state?.restaurant) {
    return <p>Restaurant not found</p>;
  }

  const { restaurant } = state;

  return (
    <div className="restaurant-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="restaurant-header">
        <img className="restaurant-banner" src={restaurant.image} alt={restaurant.name} />
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <p>⭐ {restaurant.rating} | ⏱ {restaurant.time} | {restaurant.type}</p>
        </div>
      </div>

      <h2 className="menu-title">Menu</h2>
      <div className="menu-list">
        {restaurant.foods.map((food) => (
          <div key={food.name} className="food-card">
            <h3>{food.name}</h3>
            <p>Type: {food.type}</p>
            <p>Price: ₹{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;

