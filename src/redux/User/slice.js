import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

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
          state.isRefreshing = true; // Показуємо, що реєстрація виконується
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
          console.error(action.payload); // Виводимо повідомлення про помилку
        });
    },
  });
  
  export default userSlice.reducer;
