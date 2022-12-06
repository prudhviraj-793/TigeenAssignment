import React from "react";
import SideDrawer from "./SideDrawer";

function Footer() {
  return (
    <div className="bg-gray-700 h-9 text-white flex items-center justify-between px-1">
      <SideDrawer />
      <nav>
        <ul className="flex">
          <li className="mr-3">
            <a href="#">Mails</a>
          </li>
          <li className="mr-3">
            <a href="#">Alarms</a>
          </li>
          <li className="mr-3">
            <a href="#">Movies</a>
          </li>
        </ul>
      </nav>
      <SideDrawer />
    </div>
  );
}

export default Footer;
