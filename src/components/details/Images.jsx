/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import Deal from "./Deal";


const Images = ({ car }) => {
  const [mainImg, setMainImg] = useState(car.img1);

  const ChangemainImg = (img) => {
    setMainImg(img);
  };

  const hover = {
    scale: 1.05,
    boxShadow: "17px 8px 20px -4px rgba(235,236,240,0.2)",
  };

  return (
    <div className=" sm:w-1/4 md:w-2/4 lg:w-3/4  sm:ml-14">
    
      <div className="flex justify-center align-middle w-full">
        <div className="w-full  md:w-2/4 lg:h-full flex flex-col gap-2 sm:mt-10 ">
          <motion.img
            className=" md:mb-4  rounded-xl pl-2 w-full "
            src={mainImg}
            key={mainImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 ,boxShadow: "17px 8px 20px -4px rgba(235,236,240,0.4)"}}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
            }}
            // style={{heigth:'100%', width:'100%', objectFit: "cover" }}
          />
          <Deal car={car} />
        </div>
        <div className="flex flex-col gap-2 ml-6 sm:mt-10" style={{objectFit:'cover'}}>
          <motion.button
            className="w-20  "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img2)}
          >
            {" "}
            <img src={car.img2} className="rounded-lg" />
          </motion.button>
          <motion.button
            className="w-20   "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img3)}
          >
            {" "}
            <img src={car.img3} className="rounded-lg"/>
          </motion.button>
          <motion.button
             className="w-20  "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img4)}
          >
            {" "}
            <img src={car.img4} className="rounded-lg"/>
          </motion.button>
          <motion.button
            className="w-20 "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img1)}
          >
            {" "}
            <img src={car.img1} className="rounded-lg " />
          </motion.button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Images;
