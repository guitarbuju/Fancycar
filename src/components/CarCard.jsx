/* eslint-disable react/prop-types */

import { motion } from 'framer-motion'

const CarCard = ({ title, price, img, pickCar, manufacturer, model }) => {
  const hover = {
    scale: 1.05,
    boxShadow: "17px 8px 20px -4px rgba(235,236,240,0.2)",
    color:'white',
    textShadow:'1px 1px 1px gray'
  };

  return (
    <div className="card  bg-transparent  w-96 h-96 border" style={{boxShadow:' 3px 3px 3px 2px black'}}>
      <figure>
        <img src={img} alt={title} className="" />
      </figure>
      <div className="absolute mt-60">
        <h2 className="card-title text-gray-400">{title}</h2>
        <div className="flex gap-2">
        <p>{manufacturer} </p>
        <p>{model} </p>
         <p>{price} EU</p>
        </div>
        <div className="card-actions justify-end">
          <motion.button className="btn btn-warning btn-outline btn-xs mt-2 opacy-60" onClick={pickCar}
          whileHover={hover}
          >
            I`m Interested
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
