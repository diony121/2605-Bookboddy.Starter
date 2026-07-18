import { NavLink } from "react-router";
import { useAuth } from "../Context/AuthContext";

const  Navbar = () => {
  const {user, logout} = useAuth()
  return (
    <nav>
      <h1>Books Buddy</h1>
      <div className="nav-links">
        <NavLink to="/">Books</NavLink>
        {user?.id ? (
          <>
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/" onClick={logout}>
              Log Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
        </div>
    </nav>
  )
}

export default Navbar;