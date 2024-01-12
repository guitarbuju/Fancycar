/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import KnowMore from "./KnowMore";

const Drawer = ({ car }) => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
         
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 min-h-full flex flex-col gap-4 bg-black sm:bg-transparent" >
            {/* Sidebar content here */}
           <KnowMore car={ car }/>
           <Link to='/checkout'>
            <button className="btn btn-outline btn-warning btn-sm ">I want this Car!!!</button>
           </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
