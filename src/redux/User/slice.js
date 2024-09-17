import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refresUser, register } from "./operations";

const userSlice = createSlice({
    name: "user",
    initialState: {
      user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
    },
    extraReducers: builder => {
      builder
        .addCase(register.pending, (state) => {
          state.isRefreshing = false;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(register.rejected, (state, action) => {
          state.isRefreshing = false;
          state.isLoggedIn = false;
          console.error(action.payload); 
        })
        .addCase(logIn.rejected,(state) =>{
          state.isRefreshing = false;
        })
        .addCase(logIn.fulfilled,(state, action) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(logOut.pending,(state) =>{
          state.isRefreshing = false;
        })
        .addCase(logOut.fulfilled,(state) => {
          state.user = {
            name: null,
          email:null,
          }
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
        })
        .addCase(refresUser.pending, (state) =>{
          state.isRefreshing = true;
        })
        .addCase(refresUser.fulfilled,(state,action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
    },
  });
  
  export default userSlice.reducer;
