import React from "react";
import data from "../assets/json/k3s-pizza.json";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Filters from "../components/Filters/Filters";

export default function PizzaBuy() {
  return (
    <div className="bg-white">
      <Navbar />
      <Filters />
      <Footer />
    </div>
  );
}
