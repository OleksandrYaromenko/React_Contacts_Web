import { BsFillTelephoneFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";
export default function Contact({ item: { name, number, id }}) {
  const dispatch = useDispatch()
   const onDeliteContact =(id) =>{
    dispatch(deleteContacts(id))
    .then(() => {
      toast.promise('Contact was delite', {
        style: {
          border: '1px solid rgb(0, 106, 255)',
          padding: '16px',
          color: 'rgb(0, 106, 255)',
        },
        iconTheme: {
          primary: 'rgb(0, 226, 45)',
          secondary: '#FFFAEE',
        },
      });
    })
   }
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
      <Button
      onClick={() => onDeliteContact(id)}
      color="#646cff"
      variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      {/* <button onClick={() => onDeliteContact(id)}>Delite</button> */}
    </div>
  );
}
