import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "./filter";
import contactReducer   from "./contacts";
import userReducer from "./User/slice"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 



 
const persistedReducer = persistReducer({
  key: 'user',
  storage,
  whitelist:["token"]  
}
 , userReducer)
 

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact:contactReducer,
    user: persistedReducer,
  },
});
export const persistor = persistStore(store)


