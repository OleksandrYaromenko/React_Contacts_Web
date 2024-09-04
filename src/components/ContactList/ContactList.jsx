import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filter";
export default function ContactList() {
  const contacts = useSelector((state) => state.contact.items)
  
  const filter = useSelector(selectNameFilter)

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
