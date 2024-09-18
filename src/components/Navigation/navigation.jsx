import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";
import UserMenu from "../UserMenu/UserMenu";
import UserNav from "../UserNav/UserNav";
import { makeNavLinkClass } from "../MakeNavLinkClass";
import { useSelector } from "react-redux";
import { selectIsLoggendIn } from "../../redux/auth/selector";
export default function Navigation() {
  const isLoggendIn = useSelector(selectIsLoggendIn);
  return (
    <header>
      <nav>
        <NavLink className={makeNavLinkClass} to="/">
          Home
        </NavLink>
        {isLoggendIn && (
          <NavLink className={makeNavLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
      <div className={css.user}>{isLoggendIn ? <UserMenu /> : <UserNav />}</div>
    </header>
  );
}
