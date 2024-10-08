 /* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const CarCard = ({ title, price, img, pickCar, manufacturer, model }) => {
  const hover = {
    scale: 1.05,
    boxShadow: "17px 8px 20px -4px rgba(235,236,240,0.2)",
    color: "white",
    textShadow: "1px 1px 1px gray",
  };

  return (
    <div
      className="card bg-transparent overflow-contain w-72 h-72 border xl:w-72"
      style={{ boxShadow: " 3px 3px 3px 2px black" }}
    >
     <h2 className="text-center text-gray-400 text-xs md:text-md ">{title}</h2>
      <figure className=" sm:overflow-visible">
        <img src={img} alt={title} className="sm:w-full object-cover" />
      </figure>
      <div className="relative  w-full  sm:w-full flex-col ">
       
        <div className="text-sm gap-2 text-md flex justify-center h-10">
          <p>{manufacturer}</p>
          <p>{model}</p>
          <p>{price} EU</p>
        </div>
      </div>
      <div className="">
        <motion.button
          className="btn btn-warning btn-outline btn-xs  opacy-60"
          onClick={pickCar}
          whileHover={hover}
        >
          I`m Interested
        </motion.button>
      </div>
    </div>
  );
};

export default CarCard;
