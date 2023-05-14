import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import projectsSlice from './projects-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, projects: projectsSlice.reducer },
});

export default store;
