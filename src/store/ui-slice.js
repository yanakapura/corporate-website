import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, menuIsVisible: false},
  reducers: {
    toggleMenu(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
    setMenu(state, action) {
      console.log(action.payload.menuIsVisible);
      state.menuIsVisible = action.payload.menuIsVisible
    }

  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
