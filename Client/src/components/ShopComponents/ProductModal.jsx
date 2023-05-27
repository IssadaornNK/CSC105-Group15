import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductModal = ({ visible, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;


  


  const handleBuyNow = () => {
    const hasCookies = document.cookie.includes("token");
    if (hasCookies) {
      // Proceed with the buy action
      
    } else {
      // Redirect to the login page
      window.location.href = "/login";
    }
  };



  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[black] bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center"
    >
      <div className="w-[1000px] flex flex-col">
        <div className="bg-white">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="">
                <div className="flex justify-start">
                  <div className="flex rounded-3xl">
                    <div className="flex overflow-hidden border-4 object-cover border-black items-center justify-center w-[500px] h-[500px]">
                      <img
                        src={product.image}
                        alt="fox"
                        style={{ height: "100%" }}
                      />
                    </div>

                    <div className="m-8 pl-8 flex-1">
                      <h3 className="text-[#333198] text-6xl font-bold">
                        {product.name}
                      </h3>
                      <div className="text-4xl font-semibold mt-4">
                        ฿ {product.price * quantity} <br />
                      </div>
                      <div>
                        <p className="text-3xl font-normal mt-4">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex mt-4 text-center items-center">
                        <button
                          className="px-4 py-2 bg-gray-300 rounded-lg mr-4"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          className="px-4 py-2 bg-gray-300 rounded-lg ml-4"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button className="text-xl bg-[#7E38B7] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
                          onClick={handleBuyNow}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
