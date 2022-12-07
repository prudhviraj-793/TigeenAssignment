import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import AdjustIcon from "@mui/icons-material/Adjust";
import Logo from "./Logo";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../store/slice";

function Body() {
  const color = useSelector((state) => state.slice.color);
  const accent = `accent-${color}-600`;
  const dispatch = useDispatch();
  function headerCheckboxHandler(e) {
    dispatch(sliceActions.showHeader(e.target.checked));
  }
  function footerCheckboxHandler(e) {
    dispatch(sliceActions.showFooter(e.target.checked));
  }
  function leftDrawerCheckboxHandler(e) {
    dispatch(sliceActions.leftSideDrawer(e.target.checked));
  }
  function rightDrawerCheckboxHandler(e) {
    dispatch(sliceActions.rightSideDrawer(e.target.checked));
  }
  function navCheckboxHandler(e) {
    dispatch(sliceActions.showNav(e.target.checked));
  }
  function navBottomCheckboxHandler(e) {
    dispatch(sliceActions.showBottomNav(e.target.checked));
  }
  return (
    <div className="border-2 mt-1 mb-9 rounded shadow-lg shadow-gray-300 text-xs p-2 w-3/4 mx-auto border-gray-300">
      <div className="flex justify-around items-center mb-2 py-2 border-gray-300 border-b-2">
        <EditIcon />
        <div className="w-1/3 h-0.5 bg-gray-300"></div>
        <SettingsIcon />
        <div className="w-1/3 h-0.5 bg-gray-300"></div>
        <AdjustIcon />
      </div>
      <Logo />
      <Color />
      <div className={accent}>
        <div className="flex items-center mb-1">
          <input
            onChange={headerCheckboxHandler}
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a header</label>
        </div>
        <div className="flex items-center mb-1">
          <input
            onChange={footerCheckboxHandler}
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a footer</label>
        </div>
        <div className="flex items-center mb-1">
          <input
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a Drawer overlay mode</label>
        </div>
        <div className="flex items-center mb-1">
          <input
            onChange={leftDrawerCheckboxHandler}
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a left-side drawer</label>
        </div>
        <div className="flex items-center mb-1">
          <input
            onChange={rightDrawerCheckboxHandler}
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a right-side drawer</label>
        </div>
        <div className="flex items-center mb-1">
          <input
            onChange={navCheckboxHandler}
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a navigation tabs</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            onChange={navBottomCheckboxHandler}
            className="mr-2"
            type="checkbox"
            name="checks"
          />
          <label htmlFor="">i want a bottom menu</label>
        </div>
      </div>
      <div className="flex items-center border-t-2 border-gray-300 mb-1">
        <button className={`bg-${color}-600 text-white px-3 py-1 my-1 rounded`}>
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default Body;
