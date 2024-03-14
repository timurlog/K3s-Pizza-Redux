import React from "react";
import { Link } from "react-router-dom";

export default function PizzaCard(props) {
  return (
    <Link to={`/K3s-Pizza-Redux/pizza/${props.name}/`}>
      <div className="w-full h-96 border-[#E2A8A8] transition-colors hover:border-[#B54141] border-2 rounded-xl overflow-hidden cursor-pointer">
        <div className="h-1/2 flex justify-center items-start overflow-hidden">
          <img className="w-full" src={props.img} alt="" />
        </div>
        <div className="h-1/2 p-5 flex flex-col gap-3">
          <div className="font-[mont-heavy] text-[#1E1E1E] text-xl tracking-wide">
            {props.name}
          </div>
          <div className="font-[mont-extralight] text-[#1E1E1E]">
            {props.priceString}
          </div>
          <div className="font-[mont-extralight] text-[#1E1E1E]">
            {props.ingredient}
          </div>
        </div>
      </div>
    </Link>
  );
}
