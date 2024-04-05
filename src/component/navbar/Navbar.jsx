import React from "react";
import Links from "./Links";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row justify-between">
        <div className="text-base">Logo</div>
      </div>
      <div className="flex flex-row gap-11">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
