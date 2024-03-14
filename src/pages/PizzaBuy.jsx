import React from "react";
import { useContext } from "react";
import { dataContext } from "../main";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Filters from "../components/Filters/Filters";
import PizzaCard from "../components/PizzaCard/PizzaCard";

export default function PizzaBuy() {
  const { data } = useContext(dataContext);

  return (
    <div className="bg-white">
      <Navbar />
      <div className="px-5 md:px-10 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12">
        <Filters />
        <div className="hidden xl:block"></div>
        <div className="hidden lg:block"></div>
        <div className="font-[mont-heavy] sm:text-right text-6xl text-[#1E1E1E]">
          MENU
        </div>
        {data.pizza.map((item, index) => (
          <PizzaCard
            key={index}
            name={item.name}
            ingredient={item.ingredient}
            priceString={item.priceString}
            img={item.img}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
