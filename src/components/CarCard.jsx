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
      className=" card bg-transparent overflow-contain sm:w-96 sm:h-96 border "
      style={{ boxShadow: " 3px 3px 3px 2px black" }}
    >
      <figure className=" sm:overflow-visible">
        <img src={img} alt={title} className="sm:w-full" />
      </figure>
      <div className="mt-5 relative  w-1/2  sm:w-full flex-col ml-16">
        <h2 className="text-center text-gray-400 text-xs sm:text-lg">{title}</h2>
        <div className="text-xs sm:text-md sm:flex sm:justify-center ">
          <p>{manufacturer}</p>
          <p>{model}</p>
          <p>{price} EU</p>
        </div>
      </div>
      <div className="">
        <motion.button
          className="btn btn-warning btn-outline btn-xs mt-2 opacy-60"
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
