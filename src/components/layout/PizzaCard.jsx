import React, { useState } from "react";
import slika from "../../images/about.png";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import PizzaDetailModal from "./PizzaDetailModal";

function PizzaCard() {
  const [showMyDetailModal, setShowMyDetailModal] = useState(false);

  const handleOnCloseDetail = () => setShowMyDetailModal(false);

  return (
    <tbody>
      <tr className="">
        <td className="pr-10 pb-5">
          <p className="text-center">Rating</p>
          <img
            src={slika}
            alt="#"
            style={{ width: 150, height: 80 }}
            className="w-full h-full object-cover"
          />
        </td>
        <td className="">
          <div className="flex gap-1">
            <p>Funghi</p>
            <AiOutlineExclamationCircle
              className="cursor-pointer"
              onClick={() => {
                setShowMyDetailModal(true);
              }}
            />
          </div>
          <p className="text-xs">Dummy ingredients list...</p>
        </td>
        <td className="p-5">8,00/12,00</td>
        <td className="p-5">Rating</td>
        <td className="p-5">
          <div className="flex gap-2 justify-center items-center">
            <AiOutlinePlus className="border bg-white text-black cursor-pointer rounded p-1 text-2xl" />
            <p>0</p>
            <AiOutlineMinus className="border bg-white text-black cursor-pointer rounded p-1 text-2xl" />
          </div>
        </td>
        <PizzaDetailModal
          onClosePizzaDetail={handleOnCloseDetail}
          visiblePizzaDetail={showMyDetailModal}
        />
      </tr>
    </tbody>
  );
}

export default PizzaCard;
