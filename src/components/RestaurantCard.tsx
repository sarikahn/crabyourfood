import { Restaurant } from "../types";
import { Link } from "react-router-dom";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link to={`/restaurant/${restaurant._id}`}>
      <div className="bg-white shadow rounded-lg overflow-hidden hover:scale-105 transition">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-40 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-sm text-gray-500">{restaurant.cuisine}</p>

          <div className="mt-2 flex justify-between text-sm">
            <span>⭐ {restaurant.rating}</span>
            <span>{restaurant.priceRange}</span>
          </div>

          <p className="text-sm text-gray-600 mt-2">{restaurant.location}</p>
        </div>
      </div>
    </Link>
  );
}
