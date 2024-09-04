import { createSlice } from "@reduxjs/toolkit"
import { addContacts, fetchContacts } from "./contactsOps";


const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            loading: false,
            error: false
          }},
  extraReducers:(builder) => {
    builder
    .addCase(fetchContacts.pending, (state)=>{
        state.loading = true;
        state.error = false;
    })
    .addCase(fetchContacts.fulfilled,(state, action) => {
        state.items = action.payload;
        state.loading = false;
    })
    .addCase(fetchContacts.rejected,(state) => {
        state.loading = false;
        state.error = true;
    })
    .addCase(addContacts.pending,(state)=>{
        state.loading = true;
        state.error = false;
    })
    .addCase(addContacts.fulfilled,(state,action) => {
        state.items.push(action.payload)
    })
  }
})
export default contactSlice.reducer;



