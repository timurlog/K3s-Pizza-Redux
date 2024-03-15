import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { dataContext } from "../main";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function PizzaInfo() {
  const { data } = useContext(dataContext);

  const { pizzaId } = useParams();
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    setPizza(
      data.filter((item) =>
        item.name.toLowerCase().includes(pizzaId.toLowerCase())
      )
    );
  }, [pizzaId, data]);

  return (
    <div className="bg-white h-screen flex flex-col justify-between">
      <Navbar />
      <Footer />
    </div>
  );
}
