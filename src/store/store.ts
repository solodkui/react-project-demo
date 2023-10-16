// * Base
import { configureStore } from '@reduxjs/toolkit';
import updateStorage from './storage';

// * Store
const store = configureStore({
  reducer: {},
});

updateStorage<{ theme: string }>(store.getState(), 'theme', 'dark');

// * Exports
// Types
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

// Default
export default store;