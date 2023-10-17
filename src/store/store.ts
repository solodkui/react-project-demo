// * Base
import { configureStore } from '@reduxjs/toolkit';
import updateStorage from './storage';

// * Store
const store = configureStore({
  reducer: {
    // user: userSlice,
  },
});

updateStorage<{ theme: string }>(store.getState(), 'theme', 'dark');

// store.subscribe(() => {
//   saveState({ jwt: store.getState().user.jwt }, JWT_KEY);
// });

// * Exports
// Types
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

// Default
export default store;
