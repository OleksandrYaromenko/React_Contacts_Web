import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global/";
export  const fetchContacts = createAsyncThunk("contacts/fetchContacts", async( _, thunkApi) => {
    try {
        const res = await axios.get("/contacts")
    return res.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
        
    }
  
})

export const addContacts = createAsyncThunk("contacts/addContacts", 
    async (newContacts,thunkApi) => {
        try {
            const res = await axios.post("/contacts",newContacts)
            return res.data
         } catch (error) {
            return thunkApi.rejectWithValue(error.message)

        }
    } )


    export const deleteContacts = createAsyncThunk("contacts/deleteContacts" , 
        async (contactsID,thunkApi) => {
            try {
                const res = await axios.delete(`contacts/${contactsID}`)
                return res.data
            } catch (error) {
                return thunkApi.rejectWithValue(error.message)
            }
        })