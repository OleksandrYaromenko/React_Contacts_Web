import { NavLink, Outlet } from "react-router-dom";
import css from "./TasksPage.module.css"
import { makeNavLinkClass } from "../../components/MakeNavLinkClass";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function TasksPage (){
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return(
        
        <div className={css.conteiner}>
         
        <div>
            <h3>Here, you can choose to either create a new contact or search for existing ones.</h3>
        </div>
            <div>
                <NavLink to="add_contacts" className={makeNavLinkClass}>Add Contacts</NavLink>
                <NavLink to="search" className={makeNavLinkClass}>Search Contacts</NavLink>
            </div>
            <div>
            <Outlet />
            </div>
        </div>
    )
}