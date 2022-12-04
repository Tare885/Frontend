import React from "react";
import hero from "../../images/hero.png"
import Carousel from "../Carousel";

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img src={hero} alt="#" className="w-full h-full object-cover" />
      <div className="container m-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white items-center">
          <h1 className="text-3xl text-center md:text-5xl sm:text-3xl">WELCOME TO PIZZERIA!</h1>
          <h2 className="text-xl text-center sm:flex">You can check out our best rated pizzas below...</h2>
          <Carousel />
            <button className="btn btn-warning md:btn-wide">GO TO MENU</button>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
