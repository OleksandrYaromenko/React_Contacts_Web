import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "./filter";
import contactReducer   from "./contacts";
import userReducer from "./User/slice"



export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact:contactReducer,
    user: userReducer,
  },

});


