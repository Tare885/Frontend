import React from "react";
import slika1 from "../../images/slika1.png";
import slika2 from "../../images/slika2.png";
import slika3 from "../../images/slika3.png";

function Mission() {
  return (
    <div className="w-full gb-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={slika2} alt="#" />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-[#e92b0c] md:text-4xl sm:text-3xl text-2xl py-2">
            OUR MISSION
          </h1>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nesciunt, explicabo vitae quibusdam neque eos, harum quisquam id
            amet officia ex molestias omnis nobis laboriosam doloremque, commodi
            officiis minima tempora? Rerum consequatur id, inventore explicabo
            fugiat optio quia quam, est doloribus sapiente hic vel nemo
            voluptatum, ad placeat eaque beatae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
