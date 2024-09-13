import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
    "user/register",
    async (newUser, thunkApi) => {
      try {
        const res = await axios.post("/users/signup", newUser);
        setAuthHeader(res.data.token)
        return res.data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
      }
    }
  );

  export const logIn = createAsyncThunk("user/logIn",async(logUser,thunkApi) => {
    try {
      const res = await axios.post("/users/login", logUser);
      setAuthHeader(res.data.token)
      console.log(res.data.token);
      
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  })
