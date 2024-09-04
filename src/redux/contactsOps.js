import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66d419ba5b34bcb9ab3da668.mockapi.io"
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