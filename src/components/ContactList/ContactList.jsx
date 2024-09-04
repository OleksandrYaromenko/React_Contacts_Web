import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts";

export default function ContactList() {
  
  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.conteinerUl}>
      {filteredContacts.map((items) => (
        <li className={css.conteinerLi} key={items.id}>
          <Contact item={items} />
        </li>
      ))}
    </ul>
  );
}
