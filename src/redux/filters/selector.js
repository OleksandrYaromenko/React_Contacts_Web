import { createSelector } from "@reduxjs/toolkit";
import { selectContact } from "../contacts/selector";

export const selectNameFilter = (state) => state.filter.name;
export const selectFilteredContacts = createSelector(
    [selectContact, selectNameFilter], (contact , filter) =>{
        console.log(contact)
        
        return contact.filter(({name,number}) => (
            name.toLowerCase().includes(filter.toLowerCase()) ||
            number.toString().includes(filter))
        )
            
       
    } 
)
