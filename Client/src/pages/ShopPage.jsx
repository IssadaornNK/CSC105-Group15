import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import S_Product from "../components/ShopComponents/S_Product"

function ShopPage() {
  return (
    <div className="bg-[#fff]">
      <Navbar />
      <div className="mt-[80px] text-9xl font-bold flex flex-col justify-center text-center text-black">
        <h1 className="mt-[20px]">Product</h1>
        <div className="flex justify-center px-8">
          <hr className="mt-5 h-3 bg-black border-none w-full" />
        </div>
      </div>
      <S_Product />
      <Footer />
    </div>
  );
}

export default ShopPage;
