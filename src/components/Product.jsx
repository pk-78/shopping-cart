import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";

export default function Product({ post }) {
  // const [selected, setSelected] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed from Cart");
  };

  console.log(post);
  return (
    <div className="max-w-xs bg-white border rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between">
      <div>
        <div className="mb-2">
          <p className="font-semibold text-gray-800 truncate">{post.title}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600 leading-snug line-clamp-2">
            {post.description}
          </p>
        </div>
        <div className="mb-4 flex justify-center">
          <img
            className="rounded-lg w-48 h-60 "
            src={post.image}
            alt="Product"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <p className="text-green-600 font-bold">${post.price}</p>

        {cart && cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-400"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-400"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
