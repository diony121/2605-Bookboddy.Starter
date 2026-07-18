import { NavLink } from "react-router";
const  Navbar = () => {
  return (
    <nav>
      <h1>Books Boddy</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  )
}

export default Navbar;