import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "./filter";
import contactReducer   from "./contacts";



export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact:contactReducer,
  },

});


