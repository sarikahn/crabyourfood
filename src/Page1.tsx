import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page1.css";

const Page1: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/page2"); // Redirect to Page2 after 2.5 seconds
    }, 2500);

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="page1">
      <h1>Welcome to Crab Your Food</h1>
    </div>
  );
};

export default Page1;

