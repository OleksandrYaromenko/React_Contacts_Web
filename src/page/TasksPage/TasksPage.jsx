import { NavLink, Outlet } from "react-router-dom";
import css from "./TasksPage.module.css"
import { makeNavLinkClass } from "../../components/MakeNavLinkClass";

export default function TasksPage (){
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