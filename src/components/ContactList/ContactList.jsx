import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/contacts";

export default function ContactList() {
  
  const filteredContacts = useSelector(selectFilteredContacts)
  console.log(filteredContacts.leng);
  
  return filteredContacts.length === 0 ? (<div> 
    <h2>Sorry, no contacts found. Please create new contacts...</h2>
  </div>) : (
    <ul className={css.conteinerUl}>
      {filteredContacts.map((items) => (
        <li className={css.conteinerLi} key={items.id}>
          <Contact item={items} />
        </li>
      ))}
    </ul>)
  
}
