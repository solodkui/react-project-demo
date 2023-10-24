// * Base
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IHeaderState = {
  isWhite: boolean;
};

const initialState: IHeaderState = {
  isWhite: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeHeaderWhiteMode: (state, action: PayloadAction<boolean>) => {
      state.isWhite = action.payload;
      return state;
    },
  },
});

// * Exports
export default headerSlice.reducer;

export const { changeHeaderWhiteMode } = headerSlice.actions;
