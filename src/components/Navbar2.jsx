import { NavLink } from "react-router-dom";
import header from "../assets/‎header.png";

const Navbar2 = () => {
  return (
    <div className="flex ml-24 ">
      <header>
        <img src={header} className="w-4/4 -mt-16" alt="Header" />
      </header>

      <div
        className="navbar bg-transparent text-gray-400 h-5 mt-4 w-"
        style={{ fontFamily: "Raleway" }}
      >
        <div className="flex">
          <ul className="menu menu-horizontal px-1">
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
