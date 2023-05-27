import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "./ProductModal";

function S_Product() {
  const [ProductList, setProductList] = useState([]);
  const [product, setProduct] = useState(null)

  const getProduct = () => {
    axios.get("http://localhost:3000/Product").then((response) => {
      setProductList(response.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className="pl-24 flex flex-col justify-start">
      <h4 className="mt-8 px-5 text-8xl font-medium text-black border-l-[20px] border-[#333198] py-4">
        Personal Products
      </h4>
      <div className="flex flex-row">
        <div className="px-4 flex flex-col">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-14 py-14">
            {ProductList.filter(p => p.type === 'Personal').map((product) => (
              <div
                key={product.name}
                className="flex hover:scale-105 duration-500 justify-center"
                onClick={() => {
                  setShowMyModal(true)
                  setProduct(product)
                }}
              >
                <div className="border-4 border-black flex rounded-3xl">
                  <div className="flex overflow-hidden border-4 object-cover border-black my-6 ml-6 rounded-3xl items-center justify-center w-[200px] h-[200px]">
                    <img
                      src={product.image}
                      alt="fox"
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div className="m-8">
                    <h3 className="text-[#333198] text-4xl font-bold">
                      {product.name}
                    </h3>
                    <div className="text-2xl font-semibold">
                      {product.price} <br />
                      <span className="text-2xl font-normal text-[#FF0000]">
                        {product.price}
                      </span>
                    </div>
                    <div className="text-2xl font-normal">{product.kind}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------- */}
      <h4 className="mt-8 px-5 text-8xl font-medium text-black border-l-[20px] border-[#333198] py-4">
        Animal's Products
      </h4>
      <div className="flex flex-row">
        <div className="px-4 flex flex-col">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-14 py-14">
            {ProductList.filter(p => p.type === 'Animal').map((product) => (
              <div
                key={product.name}
                className="flex hover:scale-105 duration-500 justify-center"
                onClick={() => {
                  setShowMyModal(true)
                  setProduct(product)
                }}
              >
                <div className="border-4 border-black flex rounded-3xl">
                  <div className="flex overflow-hidden border-4 object-cover border-black my-6 ml-6 rounded-3xl items-center justify-center w-[200px] h-[200px]">
                    <img
                      src={product.image}
                      alt="fox"
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div className="m-8">
                    <h3 className="text-[#333198] text-4xl font-bold">
                      {product.name}
                    </h3>
                    <div className="text-2xl font-semibold">
                      {product.price} <br />
                      <span className="text-2xl font-normal text-[#FF0000]">
                        {product.price}
                      </span>
                    </div>
                    <div className="text-2xl font-normal">{product.kind}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <h4 className="mt-8 px-5 text-8xl font-medium text-black border-l-[20px] border-[#333198] py-4">
        Fertilizer
      </h4>
      <div className="flex flex-row">
        <div className="px-4 flex flex-col">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-14 py-14">
            {ProductList.filter(p => p.type === 'Fertilizer').map((product) => (
              <div
                key={product.name}
                className="flex hover:scale-105 duration-500 justify-center"
                onClick={() => {
                  setShowMyModal(true)
                  setProduct(product)
                }}
              >
                <div className="border-4 border-black flex rounded-3xl">
                  <div className="flex overflow-hidden border-4 object-cover border-black my-6 ml-6 rounded-3xl items-center justify-center w-[200px] h-[200px]">
                    <img
                      src={product.image}
                      alt="fox"
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div className="m-8">
                    <h3 className="text-[#333198] text-4xl font-bold">
                      {product.name}
                    </h3>
                    <div className="text-2xl font-semibold">
                      {product.price} <br />
                      <span className="text-2xl font-normal text-[#FF0000]">
                        {product.price}
                      </span>
                    </div>
                    <div className="text-2xl font-normal">{product.kind}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      { product && <ProductModal product={product} onClose={handleOnClose} visible={showMyModal} />}
    </div>
  );
}

export default S_Product;
