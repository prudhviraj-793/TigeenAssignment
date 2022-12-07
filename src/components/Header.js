import React from "react";
import SideDrawer from "./SideDrawer";
import logo from "../logo.png";
import { useSelector } from "react-redux";

function Header() {
  const position = useSelector((state) => state.slice.position);
  const color = useSelector((state) => state.slice.color);
  const nav = useSelector((state) => state.slice.showNav);
  const showLeftDrawer = useSelector((state) => state.slice.leftSideDrawer);
  const showRightDrawer = useSelector((state) => state.slice.rightSideDrawer);
  const bg = `bg-${color}-600`;
  const pos = `justify-${position}`;
  return (
    <div className={`container p-1 sm:w-full ${bg}  text-white`}>
      <div className="flex justify-between items-center">
        {showLeftDrawer && <SideDrawer />}
        {position !== "disable" && (
          <div className={`flex w-3/4 ${pos}`}>
            <img className="w-1/4" src={logo} alt="logo" />
          </div>
        )}
        {showRightDrawer && <SideDrawer />}
      </div>
      {nav && (
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
      )}
    </div>
  );
}

export default Header;
