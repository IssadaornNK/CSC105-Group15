import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductModal = ({ visible, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  const [userId, setuserId] = useState("");
  const [productId, setproductId] = useState("");

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

  function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }


  const handleBuyNow = (event) => {
    const hasCookies = document.cookie.includes("token");
    if (hasCookies) {
      // Proceed with the buy action
      event.preventDefault();
  
      // TODO: Perform login authentication here
      axios
        .post(
          "http://localhost:3000/buy/" + getCookie("token"),
          {
            userId: parseInt(getCookie("token")),
            productId: product.id,
          },
          {
            withCredentials: true,
          }
        )
        .then(({ data }) => {
          console.log(data);
          // Redirect to the desired URL
          window.location.href = "/ProfilePage";
        })
        .catch((error) => {
          console.log(error);
          // Handle any error that occurred during the login process
        });
      
      console.log("UserId: ", userId);
      console.log("ProductId: ", productId);
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
      <div className="md:w-[1000px] w-[400px] flex flex-col">
        <div className="bg-white border-8 border-black">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="">
                <div className="flex justify-start">
                  <div className="flex rounded-3xl">
                    <div className="flex overflow-hidden border-r-8 object-cover border-black items-center justify-center 
                    md:w-[500px] w-[150px] md:h-[500px] h-[150px]">
                      <img
                        src={product.image}
                        alt="fox"
                        style={{ height: "100%" }}
                      />
                    </div>

                    <div className="md:m-8 md:pl-8 flex-1 pl-4 m-4">
                      <h3 className="text-[#333198] text-3xl md:text-6xl font-bold">
                        {product.name}
                      </h3>
                      <div className="text-2xl md:text-4xl font-semibold mt-4">
                        ฿ {product.price * quantity} <br />
                      </div>
                      <div>
                        <p className="text-xl md:text-3xl font-normal mt-4">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex mt-4 text-center items-center">
                        <button
                          className="md:px-4 py-2 bg-gray-300 rounded-lg mr-4"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          className="md:px-4 py-2 bg-gray-300 rounded-lg ml-4"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button className="text-sm md:text-xl bg-[#7E38B7] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
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
