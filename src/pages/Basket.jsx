import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Basket() {
  const basketArray = useSelector((state) => state.basket.value);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div></div>
      <Footer />
    </div>
  );
}
