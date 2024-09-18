import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState:{
      name: "",
  },
  reducers:{
    setFilter(state,action){
      state.name = action.payload;
    }
  }
})
export default slice.reducer
export const{ setFilter} = slice.actions
export const selectNameFilter = (state) => state.filter.name;