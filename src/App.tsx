import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import CategoryPage from "./CategoryPage";
import RestaurantPage from "./components/RestaurantPage";
import CheckoutPage from "./CheckoutPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Splash page */}
        <Route path="/" element={<Page1 />} />

        {/* Main page */}
        <Route path="/page2" element={<Page2 />} />

        {/* Category page */}
        <Route path="/category/:name" element={<CategoryPage />} />

        {/* Restaurant details */}
        <Route path="/restaurant/:name" element={<RestaurantPage />} />

        {/* Checkout */}
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;


