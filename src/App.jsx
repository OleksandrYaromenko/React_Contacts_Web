// import { useState } from "react";
import ConstactJson from "./components/ContactJson.json";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import Balanse from "./components/Balanse/balanse";

const getInitiaContacts = () => {
  const saveContacts = window.localStorage.getItem("handelContacts");
  if (saveContacts !== null) {
    return JSON.parse(saveContacts);
  }
  return ConstactJson;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitiaContacts);
  const [fiter, setFilter] = useState("");

  const addContacts = (newContacts) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("handelContacts", JSON.stringify(contacts));
  }, [contacts]);

  const onDelite = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleFilter = contacts.filter((items) =>
    items.name.toLowerCase().includes(fiter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Balanse />
      <ContactForm onContacts={addContacts} />
      <SearchBox value={fiter} onFilter={setFilter} />
      <ContactList contacts={visibleFilter} onDelite={onDelite} />
    </div>
  );
}
