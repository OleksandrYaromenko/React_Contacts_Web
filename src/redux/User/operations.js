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


  export const logOut = createAsyncThunk("user/logOut" ,async(_,thunkApi) =>{
    try {
      await axios.post("/users/logout");
      axios.defaults.headers.common.Authorization = "";

    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    } 
   
  })


  export const refresUser = createAsyncThunk("user/refresUser", async( _ ,thunkApi) =>{
    const reduxStane = thunkApi.getState();
    console.log(reduxStane);
    
    setAuthHeader(reduxStane.user.token);
    try {
      const res = await axios.get("/users/current");
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition:( _ ,thunkApi) =>{
      const reduxStane = thunkApi.getState();
      return reduxStane.user.token !== null
    }
  }
)