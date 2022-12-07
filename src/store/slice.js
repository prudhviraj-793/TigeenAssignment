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
    showHeader(state) {
      state.showHeader = !state.showHeader;
    },
    showFooter(state) {
      state.showFooter = !state.showFooter;
    },
    leftSideDrawer(state) {
      state.leftSideDrawer = !state.leftSideDrawer;
    },
    rightSideDrawer(state) {
      state.rightSideDrawer = !state.rightSideDrawer;
    },
    showNav(state) {
      state.showNav = !state.showBottomNav;
    },
    showBottomNav(state) {
      state.showBottomNav = !state.showBottomNav;
    },
  },
});

export const sliceActions = slice.actions

export default slice.reducer
