import React from "react";
import { Link } from "react-router-dom";

function FZFPage() {
  return (
    <div className="justify-center items-center m-[200px]">
      <div className="text-[200px] flex justify-center text-[#FF0000]">
        404 Page Not Found
      </div>
      <div className="text-[200px] underline flex justify-center text-[#333198]">
        <Link to="/">Go back to homepage</Link>
      </div>
    </div>
  );
}

export default FZFPage;
