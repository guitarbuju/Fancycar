import { NavLink } from "react-router-dom";
import header from "../assets/‎header.png";

const Navbar2 = () => {
  return (
    <div className="flex ml-24 gap-2 xl:mt-8 ">
    
       <img src={header} className="-ml-24 block sm:hidden w-full mb-4" alt="Header" />
    
        <img src={header} className="w-3/4 -mt-12 -ml-24 hidden sm:block" alt="Header" />


    

      <div
        className=" bg-transparent text-gray-400 h-5 mt-4 "
        style={{ fontFamily: "Raleway" }}
      >
        <div className="flex justify-center align-middle md:flex-col ">
          <ul className="menu menu-horizontal px-1 sm:text-xs sm:w-72 md:w-72">
            <li>
              {" "}
              <NavLink to="/" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
