import { NavLink } from "react-router-dom";
import header from "../assets/new-header.png";

const Navbar2 = () => {
  return (
    <div className="flex flex-col items-center align-center  gap-2 sm:flex-row sm:justify-center sm:align-middle ">
      <img src={header} className=" block w-full sm:w-2/4"  alt="Header" />
      {/* <img src={header} className="w-full sm:w-3/4  hidden sm:block" alt="Header" /> */}

      
       
          <ul className=" bg-transparent text-gray-400 menu menu-horizontal px-1 sm:text-lg w-full flex justify-center align-middle "
           style={{ fontFamily: "Raleway" }}>
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>
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
  );
};

export default Navbar2;
