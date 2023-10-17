// import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { laodState } from './storage';
// import axios from 'axios';

// export const JWT_KEY = 'jwt';

// export interface IJwt {
//   jwt: string | null;
// }

// export interface IUserState {
//   jwt: string | null;
// }

// const initialState: IUserState = {
//   jwt: laodState<IJwt>(JWT_KEY)?.jwt ?? null,
// };

// export const login = createAsyncThunk('user/login', async (params: { email: string; password: string }) => {
//   const { data } = await axios.post<{ jwt: string }>('/api/login', params);

//   return data;
// });

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addJwt: (state, action: PayloadAction<typeof initialState.jwt>) => {
//       state.jwt = action.payload;
//     },
//     removeJwt: (state) => {
//       state.jwt = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state, action: PayloadAction<{ jwt: string }>) => {
//       state.jwt = action.payload.jwt;
//     });
//   },
// });

// export default userSlice.reducer;
// export const { addJwt, removeJwt } = userSlice.actions;
