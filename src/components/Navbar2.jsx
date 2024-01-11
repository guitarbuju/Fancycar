import { NavLink } from "react-router-dom";
import header from "../assets/‎header.png";

const Navbar2 = () => {
  return (
    <div className="flex ml-24 gap-2">
    
       <img src={header} className=" -ml-20 block sm:hidden w-full mb-4" alt="Header" />
      <header>
        <img src={header} className=" -ml-20 hidden sm:block" alt="Header" />
       
      </header>

    

      <div
        className="sm:navbar bg-transparent text-gray-400 h-5 mt-4 "
        style={{ fontFamily: "Raleway" }}
      >
        <div className="flex">
          <ul className="menu menu-horizontal px-1 sm:text-lg">
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
