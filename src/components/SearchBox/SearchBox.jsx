
import { selectError,} from "../../redux/contacts";
import { selectNameFilter, setFilter } from "../../redux/filter";
import css from "./SearchBox.module.css";
import { useDispatch , useSelector} from "react-redux";
import ContactList from "../ContactList/ContactList";
export default function SearchBox() {
  const error = useSelector(selectError);
  const dispatch = useDispatch()
  const filter = useSelector(selectNameFilter)
  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };
  return (
    <div className={css.searchDiv}>
      <div> 
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter name or phone"
      />
      </div>
      <div>
        {error && <p>Ooops.....please reload the page!!!!</p>}
        <ContactList/>
      </div>
     
    </div>
    
  );
}
