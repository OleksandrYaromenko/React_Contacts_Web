import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "./filter";
import contactReducer   from "./contacts";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const profilesConfig = {
  key: "contact",
  storage,
  whitelist: ["contacts"],
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact:  persistReducer(profilesConfig, contactReducer) 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);


