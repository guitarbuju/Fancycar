import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
// import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Navbar2/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
