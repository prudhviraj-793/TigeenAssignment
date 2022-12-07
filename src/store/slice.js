import { createSlice } from "@reduxjs/toolkit";

const initialSliceState = {
  position: "start",
  color: "blue",
  showHeader: true,
  showFooter: true,
  leftSideDrawer: true,
  rightSideDrawer: true,
  showNav: true,
  showBottomNav: true,
};
const slice = createSlice({
  name: "slice",
  initialState: initialSliceState,
  reducers: {
    setPosition(state, action) {
      state.position = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
    showHeader(state, action) {
      state.showHeader = action.payload;
    },
    showFooter(state, action) {
      state.showFooter = action.payload;
    },
    leftSideDrawer(state, action) {
      state.leftSideDrawer = action.payload;
    },
    rightSideDrawer(state, action) {
      state.rightSideDrawer = action.payload;
    },
    showNav(state, action) {
      state.showNav = action.payload;
    },
    showBottomNav(state, action) {
      state.showBottomNav = action.payload;
    },
  },
});

export const sliceActions = slice.actions;

export default slice.reducer;
