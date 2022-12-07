import React from "react";
import SideDrawer from "./SideDrawer";
import EmailIcon from "@mui/icons-material/Email";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { useSelector } from "react-redux";

function Footer() {
  const bottomNav = useSelector((state) => state.slice.showBottomNav);
  const showLeftDrawer = useSelector((state) => state.slice.leftSideDrawer);
  const showRightDrawer = useSelector((state) => state.slice.rightSideDrawer);
  return (
    <div className="bg-gray-700 h-9 text-white flex items-center justify-between px-1">
      {showLeftDrawer && <SideDrawer />}
      {bottomNav && (
        <nav>
          <ul className="flex">
            <li className="mr-3 flex items-center">
              <EmailIcon />
              <a href="#">Mails</a>
            </li>
            <li className="mr-3 flex items-center">
              <AccessAlarmIcon />
              <a href="#">Alarms</a>
            </li>
            <li className="mr-3 flex items-center">
              <MovieCreationIcon />
              <a href="#">Movies</a>
            </li>
          </ul>
        </nav>
      )}
      {showRightDrawer && <SideDrawer />}
    </div>
  );
}

export default Footer;
