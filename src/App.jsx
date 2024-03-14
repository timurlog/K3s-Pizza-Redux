import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="h-screen bg-white flex flex-col justify-between font-[mont-heavy] text-[#1e1e1e]">
      <Navbar />
      <div className="px-5 md:px-10 text-6xl sm:text-8xl md:text-9xl">
        CHOOSE
      </div>
      <div className="px-5 md:px-10 text-6xl sm:text-8xl md:text-9xl">
        ORDER
      </div>
      <div className="px-5 md:px-10 text-6xl sm:text-8xl md:text-9xl">EAT</div>
      <Link
        to={"/K3s-Pizza-Redux/pizza/"}
        className="px-5 md:px-10 text-[#b54141] transition-colors hover:text-[#e2a8a8] flex justify-center text-6xl sm:text-8xl md:text-9xl"
      >
        SEE PIZZA
      </Link>
      <Footer />
    </div>
  );
}
