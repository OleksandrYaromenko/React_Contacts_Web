import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState:{
    filters: {
      name: "",
    }
  },
  reducers:{
    setFilter(state,action){
      state.filters.name = action.payload;
    }
  }
})
export default slice.reducer
export const{ setFilter} = slice.actions
export const selectNameFilter = (state) => state.filter.filters.name;