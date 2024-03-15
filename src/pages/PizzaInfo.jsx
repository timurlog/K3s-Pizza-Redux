import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { dataContext } from "../main";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPizza } from "../features/basket/basketSlice";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function PizzaInfo() {
  const basketArray = useSelector((state) => state.basket.value);

  const dispatch = useDispatch();

  const { data } = useContext(dataContext);

  const { pizzaId } = useParams();
  const [pizza, setPizza] = useState([data[pizzaId]]);

  return (
    <div className="bg-white h-screen flex flex-col justify-between">
      <Navbar />
      <div className="h-full pt-10 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Link to={"/K3s-Pizza-Redux/pizza/"}>
            <button className="btn bg-[#B54141] hover:bg-[#E2A8A8] text-[#1E1E1E] font-[mont-heavy] border-none text-xl">
              <i className="fa-solid fa-left-long"></i>
              Go back
            </button>
          </Link>
        </div>
        <div className="hidden md:block"></div>
        <div className="flex justify-center items-center md:items-start">
          {pizza.map((item, index) => (
            <img
              className="max-h-56 lg:max-h-80 xl:max-h-96"
              key={index}
              src={item.img}
              alt=""
            />
          ))}
        </div>
        <div className="flex gap-5 flex-col md:pl-10 md:max-w-[400px]">
          <div>
            {pizza.map((item, index) => (
              <div
                className="text-[#1E1E1E] font-[mont-heavy] text-2xl lg:text-3xl xl:text-4xl"
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div>
            {pizza.map((item, index) => (
              <div
                className="text-[#1E1E1E] font-[mont-heavy] text-5xl lg:text-6xl xl:text-7xl"
                key={index}
              >
                {item.priceString}
              </div>
            ))}
          </div>
          <div>
            {pizza.map((item, index) => (
              <div
                className="font-[mont-extralight] text-lg xl:text-xl"
                key={index}
              >
                {item.ingredient}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-5">
          <button
            onClick={() => {
              dispatch(addPizza(pizzaId));
            }}
            className="btn bg-[#7BB541] hover:bg-[#CEE3B8] text-[#1E1E1E] font-[mont-heavy] border-none text-xl"
          >
            <i className="fa-solid fa-cart-plus"></i>
            Add to basket
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
