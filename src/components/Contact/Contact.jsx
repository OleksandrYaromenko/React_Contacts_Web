import { BsFillTelephoneFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
export default function Contact({ item: { name, number, id }}) {
  // const dispatch = useDispatch()
  //  const onDeliteContact =(id) =>{
  //   dispatch(deleteContact(id))
  //  }
  return (
    <div className={css.conteinerContact}>
      <div>
        <p>
          <RiAdminFill size="15" />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill size="12" />
          {number}
        </p>
      </div>

      {/* <button onClick={() => onDeliteContact(id)}>Delite</button> */}
    </div>
  );
}
