import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { current } from "@reduxjs/toolkit";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalAmmount(total.toFixed(2)); // Round to two decimal places
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex md:mx-60 h-64 my-28 gap-5">
          <div className="w-1/2 h-64 py-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="w-1/2 h-64 mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
              <p className="text-gray-600">Summary</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                Total Items:{" "}
                <span className="text-green-600 font-bold">{cart?.length}</span>
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 font-semibold">
                Total Amount:{" "}
                <span className="text-green-600 font-bold">
                  ${totalAmmount}
                </span>
              </p>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center max-h-screen p-6 bg-white shadow-md rounded-lg">
          {/* No Items Message */}
          <div className="mb-4 text-gray-800 text-lg font-semibold">
            No items in cart
          </div>

          {/* Shop Now Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Shop now
          </button>
        </div>
      )}
    </div>
  );
}
