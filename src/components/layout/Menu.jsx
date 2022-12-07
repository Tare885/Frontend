import React from "react";
import PizzaCard from "./PizzaCard";
import PizzaSearch from "./PizzaSearch";

function Menu() {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="container mx-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white items-center">
          <h1 className="pb-10 text-3xl text-red-500">MENU</h1>
          <div className="flex item-center pb-5">
            <ul className="flex gap-10">
              <li>ALL</li>
              <li>VEGETARIAN</li>
              <li>VEGAN</li>
            </ul>
            <PizzaSearch className="" />
          </div>
          <div className="border border-sky-500 px-10 py-5 overflow-y-auto h-[60vh]">
            <table className="table-auto ">
              <thead>
                <tr className="text-left text-xs">
                  <th>PIZZA/RATING</th>
                  <th>DETAILS</th>
                  <th>PRICE SMALL/BIG</th>
                  <th>ADD RATING</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </table>
          </div>
          <button
            type="button"
            className="text-white-400 mt-20 md:btn-wide hover:text-white border border-white-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-300 dark:text-white-300 dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-white-900"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
