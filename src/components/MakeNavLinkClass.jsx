import clsx from "clsx";
import css from "../pages/TasksPage/TasksPage.module.css"

export const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };