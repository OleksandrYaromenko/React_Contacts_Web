import { createSlice } from "@reduxjs/toolkit"
import ContactJson from "../components/ContactJson.json"


const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacts: {
		items: [...ContactJson]
	}},
    reducers:{
        addContact:(state,action) =>{
            state.contacts.items.push(action.payload)
            console.log(state);
        },
        deleteContact:(state,action) =>{
            state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload)
        }
    }
})

export default contactSlice.reducer;
export const { addContact,deleteContact} = contactSlice.actions


