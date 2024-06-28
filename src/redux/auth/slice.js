import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = false;
      }),
});

export default authSlice.reducer;
