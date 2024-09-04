import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { setError, setLoading } from "./redux/contacts";
import { RotatingLines } from "react-loader-spinner";

export default function App() {
  const loading = useSelector(setLoading);
  const error = useSelector(setError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {loading && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="black"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <p>Ooops.....please reload the page!!!!</p>}
      <ContactList />
    </div>
  );
}
