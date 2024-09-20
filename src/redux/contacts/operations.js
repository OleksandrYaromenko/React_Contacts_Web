import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL } from "../auth/operations";
export  const fetchContacts = createAsyncThunk("contacts/fetchContacts", async( _, thunkApi) => {
    try {
        const res = await BaseURL.get("/contacts")
    return res.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
        
    }
  
})

export const addContacts = createAsyncThunk("contacts/addContacts", 
    async (newContacts,thunkApi) => {
        try {
            const res = await BaseURL.post("/contacts",newContacts)
            return res.data
         } catch (error) {
            return thunkApi.rejectWithValue(error.message)

        }
    } )


    export const deleteContacts = createAsyncThunk("contacts/deleteContacts" , 
        async (contactsID,thunkApi) => {
            try {
                const res = await BaseURL.delete(`contacts/${contactsID}`)
                return res.data
            } catch (error) {
                return thunkApi.rejectWithValue(error.message)
            }
        })