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
    <div className=" w-2/4 -mt-28 -ml-5">
    
      <div className="flex ">
        <div className="w-3/4 flex flex-col gap-2 mt-20">
          <motion.img
            className=" mb-4 rounded-lg w-3/4 h-3/4 ml-10"
            src={mainImg}
            key={mainImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 ,boxShadow: "17px 8px 20px -4px rgba(235,236,240,0.4)"}}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
            }}
            style={{heigth:'100%', width:'100%', objectFit: "cover" }}
          />
          <Deal car={car} />
        </div>
        <div className="flex flex-col gap-2 ml-14 mt-20" style={{objectFit:'cover'}}>
          <motion.button
            className="w-36  "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img2)}
          >
            {" "}
            <img src={car.img2} className="rounded-lg" />
          </motion.button>
          <motion.button
            className="w-36  "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img3)}
          >
            {" "}
            <img src={car.img3} className="rounded-lg"/>
          </motion.button>
          <motion.button
            className="w-36 "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img4)}
          >
            {" "}
            <img src={car.img4} className="rounded-lg"/>
          </motion.button>
          <motion.button
            className="w-36 "
            whileHover={hover}
            onClick={() => ChangemainImg(car.img1)}
          >
            {" "}
            <img src={car.img1} className="rounded-lg" />
          </motion.button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Images;
