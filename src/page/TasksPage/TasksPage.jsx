import { NavLink, Outlet } from "react-router-dom";

export default function TasksPage (){
    return(
        <div>
            <div>
                <NavLink to="add_contacts">Add Contacts</NavLink>
                <NavLink to="search">Search Contacst</NavLink>
            </div>
            <div>
            <Outlet />
            </div>
        </div>
    )
}