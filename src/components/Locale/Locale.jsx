import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/localeSlice";

export default function SeachLangt() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);
  const handelchangeLang = (event) => {
    dispatch(changeLang(event.target.value));
  };
  return (
    <div>
      <select value={lang} onChange={handelchangeLang}>
        <option value="uk">Uk</option>
        <option value="pl">Pl</option>
        <option value="eng">Eng</option>
      </select>
      <p>Lokale leng {lang}</p>
    </div>
  );
}
