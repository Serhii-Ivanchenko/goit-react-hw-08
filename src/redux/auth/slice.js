import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState.auth,

})

export default authSlice.reducer;
