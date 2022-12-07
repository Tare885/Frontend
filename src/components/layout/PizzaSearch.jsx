import React from "react";
import { FaSearch } from "react-icons/fa";

function PizzaSearch() {
  return (
    <div className="relative flex item-center">
      <input
        className="rounded-xl pl-3 outline-none p-3"
        type="Search"
        placeholder="Search pizzas..."
      />
      <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-5" />
    </div>
  );
}

export default PizzaSearch;
