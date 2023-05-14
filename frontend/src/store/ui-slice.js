import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, menuIsOpen: false },
  reducers: {
    // toggleMenu(state) {
    //   state.menuIsOpen = !state.menuIsOpen;
    // },
    setMenu(state, action) {
      state.menuIsOpen = action.payload.menuIsOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
