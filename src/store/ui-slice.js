import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, menuIsVisible: false},
  reducers: {
    toggleMenu(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
    // showNotification(state, action) {
    //   state.notification = {
    //     status: action.payload.status,
    //     title: action.payload.title,
    //     message: action.payload.message,
    //   };
    // },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
