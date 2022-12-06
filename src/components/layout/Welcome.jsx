import React from "react";
import hero2 from "../../images/hero2.png"
import Carousel from "../Carousel";

function Welcome() {
  return (
    <div className="w-full h-[90vh]">
      <img src={hero2} alt="#" className="w-full h-full object-cover" />
      <div className="container m-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white items-center">
          <h1 className="text-3xl text-center md:text-5xl sm:text-3xl">WELCOME TO PIZZERIA!</h1>
          <h2 className="text-xl text-center sm:flex">You can check out our best rated pizzas below...</h2>
          <Carousel />
          <button type="button" class="text-white-400 hover:text-white border border-white-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-300 dark:text-white-300 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-white-900">
            GO TO MENU
            </button>

        </div>
      </div>
    </div>
  );
}

export default Welcome;
