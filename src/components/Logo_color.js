import React from "react";

function Logo_color() {
  function changeHandler(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <div className="mb-1">
        <p>I want a Company Logo</p>
        <div className="flex items-center h-6">
          <div className="mr-2 flex items-center ">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="logo"
              value="left"
            />
            <label htmlFor="">Left</label>
          </div>
          <div className="mr-2 flex items-center">
            <input
              className="mr-2"
              onChange={changeHandler}
              type="radio"
              name="logo"
              value="right"
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
      <div className="mb-1">
        <p>Present Color</p>
        <div className="flex items-center">
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

export default Logo_color;
