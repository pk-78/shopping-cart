import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed Successfully");
  };

  return (
    <div className="flex items-center border mb-2 h-64 border-gray-200 rounded-lg p-4 shadow-md">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={item.image}
          alt="Product"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Text and Details Section */}
      <div className="w-2/3 pl-4">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

        {/* Price and Button Section */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-bold text-lg">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-colors"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
