import { NavLink } from "react-router-dom";

import { makeNavLinkClass } from "../MakeNavLinkClass";
export default function UserNav() {
    return (
      <div>
        <NavLink className={makeNavLinkClass} to="/register">
          Register
        </NavLink>
        <NavLink className={makeNavLinkClass} to="/login">
          Log In
        </NavLink>
      </div>
    );
  }