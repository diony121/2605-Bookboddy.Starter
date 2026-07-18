import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div  className="container">
      <Navbar/>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout;