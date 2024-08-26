import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "balance",
  initialState: {
    value: 0,
  },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdram(state, action) {
      state.value -= action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});
export default slice.reducer;
export const { deposit, withdram, reset } = slice.actions;
// export const deposit = (value) => {
//   return {
//     type: "balance/deposit",
//     payload: value,
//   };
// };
// export const withdram = (value) => {
//   return {
//     type: "balance/withdram",
//     payload: value,
//   };
// };

// export const reset = () => {
//   return {
//     type: "balance/reset",
//   };
// };
// export const balanceReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         value: state.value + action.payload,
//       };
//     case "balance/withdram":
//       return {
//         value: state.value - action.payload,
//       };
//     case "balance/reset":
//       return {
//         value: 0,
//       };
//     default:
//       return state;
//   }
// };
