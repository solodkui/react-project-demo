// * Base
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum ENotificationType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

type INotificationState = {
  type: ENotificationType;
  text: string;
};

const initialState: INotificationState = {
  type: ENotificationType.INFO,
  text: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<INotificationState>) => {
      state = action.payload;
      return state;
    },
    hideNotification: (state) => {
      state.text = '';
      return state;
    },
  },
});

// * Exports
export default notificationSlice.reducer;

export const { showNotification, hideNotification } = notificationSlice.actions;
