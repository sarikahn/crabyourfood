import React from "react";
import { useLocation } from "react-router-dom";
import "./CheckoutPage.css";

interface Food {
  name: string;
  price: number;
}

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const cart: Food[] = (location.state as { cart?: Food[] })?.cart || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item, i) => (
          <div key={i}>{item.name} - ₹{item.price}</div>
        ))}
        <p>Total: ₹{total}</p>
      </div>

      <div className="payment-details">
        <h2>Payment Details</h2>
        <input type="text" placeholder="Name on Card" />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiry MM/YY" />
        <input type="text" placeholder="CVV" />
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default CheckoutPage;




