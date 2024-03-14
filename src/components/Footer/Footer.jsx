import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-10 md:h-14 flex px-5 md:px-10 justify-center items-center">
      <div>
        <p
          className={`font-[mont-extralight] text-[#1e1e1e] text-base md:text-lg`}
        >
          Copyright © {currentYear} by Timur Logie
        </p>
      </div>
    </div>
  );
}
