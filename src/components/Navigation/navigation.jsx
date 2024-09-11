import { NavLink } from "react-router-dom";
import css from "./navigation.module.css"
import UserMenu from "../UserMenu/UserMenu";
import UserNav from "../UserNav/UserNav";
export default function Navigation () {

    return <header>
         <nav>
    <NavLink className={css.link} to="/">
      Home
    </NavLink>
    
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
  </nav>
  <div className={css.user}>
     <UserMenu/>
     <UserNav/>
  </div>
    </header> 

  
}