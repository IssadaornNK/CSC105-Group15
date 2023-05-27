import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductModal = ({ visible, onClose, product }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  }; 

  if (!visible) return null;

//   const [ProductList, setProductList] = useState([]);

//   const getProduct = () => {
//     axios
//       .get("http://localhost:3000/Product/item?item_name=")
//       .then((response) => {
//         setProductList(response.data);
//       });
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[black] bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center"
    >
      <div className="w-[1000px] flex flex-col">
        <div className="bg-white">
          {/* ------------------------------------------------- */}
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="">
                {/* {ProductList.map((product) => ( */}
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
                          ฿ {product.price} <br />
                        </div>
                        <div>
                          <p className="text-3xl font-normal mt-4">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
