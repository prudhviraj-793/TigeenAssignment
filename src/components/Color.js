import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceActions } from "../store/slice";

function Color() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.slice.color);
  const accent = `accent-${color}-600`;
  function changeHandler(e) {
    dispatch(sliceActions.setColor(e.target.value));
  }
  return (
    <div>
      <div className="mb-1">
        <p>Present Color</p>
        <div className={`flex items-center ${accent}`}>
          <div className="mr-2 flex items-center ">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="color"
              value="blue"
            />
            <label htmlFor="">Blue</label>
          </div>
          <div className="mr-2 flex items-center ">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="color"
              value="red"
            />
            <label htmlFor="">Red</label>
          </div>
        </div>
      </div>
      <p className="mb-3 text-xs">
        Present Apply only:Header Background, Button, Radio Button & Switch
      </p>
    </div>
  );
}

export default Color;
