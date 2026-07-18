import { NavLink } from "react-router";
import { useAuth } from "../Context/AuthContext";

const  Navbar = () => {
  const {user, logout} = useAuth()
  return (
    <nav>
      <h1>Books Boddy</h1>

      <NavLink to="/">Books</NavLink>
        {user?.id ? (
          <div>
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/" onClick={logout}>Log Out</NavLink>
          </div>
          ) : (
      <NavLink to="/login">Log In</NavLink>
          )};
    </nav>
  )
}

export default Navbar;