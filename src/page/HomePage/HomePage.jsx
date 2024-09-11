import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Hei Welcome...</h1>
      <h3>
        This is a site for your contacts. If you are a new user, you need to
        register to work. The link to the registry is <NavLink to="">here.</NavLink>  If you want to log
        in, the link to log in is <NavLink to="">here.</NavLink>
      </h3>
    </div>
  );
}
