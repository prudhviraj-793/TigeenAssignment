import React from "react";
import SideDrawer from "./SideDrawer";

function Footer() {
  return (
    <div>
      <SideDrawer />
      <nav>
        <ul>
          <li>
            <a href="#">Mails</a>
          </li>
          <li>
            <a href="#">Alarms</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
        </ul>
      </nav>
      <SideDrawer />
    </div>
  );
}

export default Footer;
