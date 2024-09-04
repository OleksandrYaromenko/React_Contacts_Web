import { createSlice } from "@reduxjs/toolkit"
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";


const contactSlice = createSlice({
    name: "contacts",
    initialState: {
            items: [],
            loading: false,
            error: false
          },
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
        state.loading = false;
        state.error = false;
    })
    .addCase(addContacts.fulfilled,(state,action) => {
        state.items.push(action.payload)
    })
    .addCase(deleteContacts.pending,(state)=>{
        state.loading = true;
        state.error = false;
    })
    .addCase(deleteContacts.fulfilled, (state, action)=>{
        state.items = state.items.filter((item)=>
        item.id !== action.payload.id)
        state.loading = false
    })
    .addCase(deleteContacts.rejected,(state) =>{
        state.error = true
        state.loading = false
    })
  }
})
 export const setLoading = (state) => state.contact.loading
export default contactSlice.reducer;



