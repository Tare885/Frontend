import React from "react";
import { MdClose } from "react-icons/md";
import slika from "../../images/about.png";

function PizzaDetailModal({ onClosePizzaDetail, visiblePizzaDetail }) {
  if (!visiblePizzaDetail) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10">
      <div className="border border-gray-500 rounded-lg p-10 w-full bg-zinc-900/80 backdrop-blur-sm">
      <MdClose
        onClick={onClosePizzaDetail}
        className="absolute top-0 right-0 m-10 text-2xl sm:text-4xl md:text-4xl lg:text-6xl cursor-pointer text-orange-500"
      />
        <h1 className="text-center text-3xl mb-5 underline text-red-500">PIZZA DETAILS</h1>
        <div className="sm:block md:flex items-center justify-between pl-5 pr-5 mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-red-500">NAME</h2>
            <p className="mb-5">Funghi Pizza</p>
            <h2 className="text-red-500">INGREDIENTS</h2>
            <p className="mb-5">Mozzarella, mushrooms, olives, dough, spinach</p>
            <h2 className="text-red-500">AVAILABLE SIZE</h2>
            <p className="mb-5">Small, Big</p>
            <h2 className="text-red-500">PRICE</h2>
            <p className="mb-5">8,00/12,00 BAM</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={slika}
              alt="#"
              style={{ width: 300, height: 150 }}
              className="w-full h-full object-cover"
            />
            <p>RATING</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetailModal;
