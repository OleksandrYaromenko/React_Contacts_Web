import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
    "user/register",
    async (newUser, thunkApi) => {
      try {
        const res = await axios.post("/users/signup", newUser);
        return res.data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
      }
    }
  );