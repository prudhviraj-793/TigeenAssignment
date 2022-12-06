import React from "react";
import SideDrawer from "./SideDrawer";
import logo from "../logo.png";

function Header() {
  return (
    <div className="container p-1 sm:w-full bg-blue-600 text-white">
      <div className="flex justify-between items-center">
        <SideDrawer />
        <div className="flex w-3/4 justify-center">
          <img className="w-1/4" src={logo} alt="logo" />
        </div>
        <SideDrawer />
      </div>
      <nav className="text-xs">
        <ul className="flex">
          <li className="mr-4 pb-1 border-white border-b-2">
            <a href="#">TAB ONE</a>
          </li>
          <li className="mr-4">
            <a href="">TAB TWO</a>
          </li>
          <li className="mr-4">
            <a href="">TAB THREE</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
