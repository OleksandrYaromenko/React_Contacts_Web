import { createSelector, createSlice } from "@reduxjs/toolkit"
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";
import  { selectNameFilter } from "./filter";
import { logOut } from "./User/operations";



const contactSlice = createSlice({
    name: "contacts",
    initialState: {
            items: [],
            loading: false,
            error: false,
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
    .addCase(logOut.fulfilled,(state) =>{
        state.items = [];
        state.error = false;
        state.loading = false;
    })
  }
})
export const selectError = (state) =>state.contact.error

export const selectLoading = (state) => state.contact.loading

export const selectContact = (state) => state.contact.items

export const selectFilteredContacts = createSelector(
    [selectContact, selectNameFilter], (contact , filter) =>{
        console.log(contact)
        
        return contact.filter(({name,number}) => (
            name.toLowerCase().includes(filter.toLowerCase()) ||
            number.toString().includes(filter))
        )
            
       
    } 
)
export default contactSlice.reducer;



