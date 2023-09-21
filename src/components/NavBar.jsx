import { Link } from 'react-router-dom'
import header from '../assets/‎header.png'

const NavBar = () => {
  return (
    <div className="flex ml-24 ">
    <header >
        <img src={header} className="w-4/4 -mt-16" alt="Header" />
     
      </header>
      <div className="navbar bg-transparent text-gray-200 -mt-20  ">
        <div className="navbar-start">
          <div className="dropdown">
          
         <p style={{fontFamily:'Helvetica',fontSize:'10px'}}>MENU</p>
            <label tabIndex={0} className="btn btn-ghost btn-circle -mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 text-gray-800 w-52 "
              style={{fontFamily:'Helvetica'}}
            >
              <li>
                <Link to='/'>HOMEPAGE</Link>
              </li>
              <li>
                <Link to='/about'>ABOUT</Link>
              </li>
              <li>
              <Link to='/cars'>CARS AVAILABLE</Link>
              </li>
              <li>
              <Link to='/contact'>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
