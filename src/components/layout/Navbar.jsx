import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import RegModal from "./RegModal";

function Navbar() {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false)

  return (
    <nav className="navbar fixed-top shadow-lg bg-neutral text-neutral-content">
      <div className="relative container mx-auto">
        <div className="flex-1 px-2 mx-2 hidden md:hidden lg:block">
          <div className="">
            <div className="flex justify-center items-center">
              <Link to="/" className="btn btn-ghost rounded-btn">
                Home
              </Link>
              <Link to="/" className="btn btn-ghost rounded-btn">
                Menu
              </Link>
              <Link to="/">
                <img
                  src={logo}
                  alt="#"
                  className="inline pr-2"
                  width={150}
                  height={150}
                />
              </Link>
              <Link to="/" className="btn btn-ghost rounded-btn">
                About
              </Link>
              <Link to="/" className="btn btn-ghost rounded-btn">
                Contact Us
              </Link>
              <div className="absolute right-0">
                <FaUser
                  className="text-2xl cursor-pointer"
                  onClick={() => setShowMyModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegModal onClose={handleOnClose} visible={showMyModal} />
    </nav>
  );
}

export default Navbar;
