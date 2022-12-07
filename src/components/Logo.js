import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../store/slice";

function Logo() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.slice.color);
  const accent = `accent-${color}-600`;
  function changeHandler(e) {
    dispatch(sliceActions.setPosition(e.target.value));
  }
  return (
    <div>
      <div className="mb-1">
        <p>I want a Company Logo</p>
        <div className={`flex items-center h-6 ${accent}`}>
          <div className="mr-2 flex items-center ">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="logo"
              value="start"
            />
            <label htmlFor="">Left</label>
          </div>
          <div className="mr-2 flex items-center">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="logo"
              value="end"
            />
            <label htmlFor="">Right</label>
          </div>
          <div className="mr-2 flex items-center">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="logo"
              value="center"
            />
            <label htmlFor="">Center</label>
          </div>
          <div className="mr-2 flex items-center">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="logo"
              value="disable"
            />
            <label htmlFor="">Disable</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
