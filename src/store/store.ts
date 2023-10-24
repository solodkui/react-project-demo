// * Base
import { configureStore } from '@reduxjs/toolkit';

// * Slices
import notificationSlice from './notification.slice';
import headerSlice from './header.slice';

const store = configureStore({
  reducer: {
    notification: notificationSlice,
    header: headerSlice,
  },
});

// * Exports
// Types
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

// Default
export default store;
