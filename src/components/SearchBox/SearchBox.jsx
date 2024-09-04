import { useId } from "react";
import { selectNameFilter, setFilter } from "../../redux/filter";
import css from "./SearchBox.module.css";
import { useDispatch , useSelector} from "react-redux";
export default function SearchBox() {
  const id = useId()
  const dispatch = useDispatch()
  const filter = useSelector(selectNameFilter)
  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };
  return (
    <div className={css.searchDiv}>
      <p className={css.searchP}>Search by name</p>
      <input
        className={css.input}
        type="text"
        id={id}
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}
