import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-green-500 flex px-72 justify-between">
      <NavLink to="/">
        <h1 className="text-2xl text-white">Pk78 Shop</h1>
      </NavLink>
      <div className="gap-6 flex">
        <div className="gap-2 flex">
          <NavLink to="/">
            <span className="text-3xl text-white">
              <FaHome />
            </span>
          </NavLink>
        </div>
        <div className="gap-2 flex">
          <NavLink to="/cart">
            <span className="text-3xl text-white">
              <FaCartPlus />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
