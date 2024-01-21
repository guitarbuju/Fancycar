import { NavLink } from "react-router-dom";
import header from "../assets/‎header.png";

const Navbar2 = () => {
  return (
    <div className="flex flex-col  gap-2  md:flex md:justify-center  md:-mt-20 xl:-mt-24">
      <img src={header} className=" block sm:hidden w-full sm:w-3/4 mb-4"  alt="Header" />
      <img src={header} className="w-full sm:w-3/4  hidden sm:block" alt="Header" />

      <div
        className=" bg-transparent text-gray-400 h-5  -mt-10 mb-14 md:-mt-20"
        style={{ fontFamily: "Raleway" }}
      >
        <div className="z-50">
          <ul className="menu menu-horizontal px-1 sm:text-lg w-full flex justify-center align-middle ">
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
      </div>
    </div>
  );
};

export default Navbar2;
