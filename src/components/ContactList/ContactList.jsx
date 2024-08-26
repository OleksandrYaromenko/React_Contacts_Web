import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelite }) {
  return (
    <ul className={css.conteinerUl}>
      {contacts.map((items) => (
        <li className={css.conteinerLi} key={items.id}>
          <Contact item={items} onDelite={onDelite} />
        </li>
      ))}
    </ul>
  );
}
