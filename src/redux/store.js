import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanseStore";
import localeReducer from "./localeSlice";

export const store = configureStore({
  reducer: {
    balanse: balanceReducer,
    locale: localeReducer,
  },
});

// const rootReducer = (state = insentState, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };
//     case "balance/deposit":
//       return {
//         ...state,
//         balanse: {
//           value: state.balanse.value + action.payload,
//         },
//       };
//     case "balance/withdram":
//       return {
//         ...state,
//         balanse: {
//           value: state.balanse.value - action.payload,
//         },
//       };
//     case "balance/reset":
//       return insentState;
//     default:
//       return state;
//   }
// };
