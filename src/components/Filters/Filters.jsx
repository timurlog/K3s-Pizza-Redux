import React from "react";

export default function Filters() {
  return (
    <div className="px-5 md:px-10">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn mb-1 bg-[#B54141] hover:bg-[#E2A8A8] text-[#1E1E1E] font-[mont-heavy] border-none text-xl"
        >
          Filters
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-[#B54141] text-[#1E1E1E] font-sans rounded-box w-52"
        >
          <li>
            <div>
              <i class="fa-solid fa-arrow-down-short-wide"></i>
              Ascending price
            </div>
          </li>
          <li>
            <div>
              <i class="fa-solid fa-arrow-down-wide-short"></i>
              Decreasing price
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
