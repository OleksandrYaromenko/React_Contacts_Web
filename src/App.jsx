
import { useDispatch } from "react-redux";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";



export default function App() {
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(fetchContacts())
 },[dispatch])

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      
      <ContactForm  />
       <SearchBox /> 
      <ContactList  />
    </div>
  );
}
