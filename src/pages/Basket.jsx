import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rmPizza } from "../features/basket/basketSlice";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Basket() {
  const basketArray = useSelector((state) => state.basket.value);

  const dispatch = useDispatch();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="px-5 md:px-10 font-[mont-heavy] text-[#1E1E1E] text-6xl py-10">
        Basket
      </div>
      <div className="px-5 md:px-10 flex flex-col gap-5 pb-10 text-[#1E1E1E]">
        {basketArray.map((item, index) => (
          <div
            key={index}
            className={`${
              item.quantity == 0 ? "hidden" : "block"
            } bg-[#F3F3F3] rounded-lg w-full h-24 p-3`}
          >
            <div className="h-full w-full flex justify-between">
              <div className="flex flex-col justify-between">
                <div className="font-[mont-heavy] text-xl">{item.name}</div>
                <div className="font-[mont-extralight] text-lg">
                  x{item.quantity}
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => {
                    dispatch(rmPizza(item.id));
                  }}
                  className="btn bg-transparent border-none shadow-none hover:bg-transparent text-3xl p-0 h-6 w-6 items-start justify-end text-[#b54141]"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <div className="font-[mont-extralight] text-lg">
                  {item.priceString}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
