import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="w-14 h-14"></div>
      <img
        src="https://pngimg.com/d/pokeball_PNG27.png"
        alt="pokeball"
        className="w-14 h-14"
      />
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
          alt="moon"
          className="w-14 h-14 mr-4"
        />
      </div>
    </div>
  );
};

export default Navbar;
