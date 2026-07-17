import { NavLink } from "react-router";
const  Navbar = () => {
  return (
    <nav>
      <NavLink to="#">Books</NavLink>
      <NavLink to="#">Log In</NavLink>
    </nav>
  )
}

export default Navbar;