/* eslint-disable react/prop-types */
import { useState } from "react";
import mcYellow from "../../assets/steve/‎steveYELLOW.png";
import mcBlue from "../../assets/steve/‎steveBLUE.png";
import mcRed from "../../assets/steve/steveRED.png";
import mcWhite from "../../assets/steve/‎steveWHITE.png";
import mcSilver from "../../assets/steve/‎steveSILVER.png";
import mcBlack from "../../assets/steve/‎steveBLACK.png";

import { AnimatePresence, motion } from "framer-motion";

const Steve = ({ car }) => {
 

  const steveColor = [
    {
      color: "yellow",
      img: mcYellow,
    },
    {
      color: "blue",
      img: mcBlue,
    },
    {
      color: "red",
      img: mcRed,
    },
    {
      color: "white",
      img: mcWhite,
    },
    {
      color: "silver",
      img: mcSilver,
    },
    {
      color: "black",
      img: mcBlack,
    },
  ];

  const colorTitle= car?.Color?.title || 'unknown'
  const filteredImg = steveColor.filter((img) => img.color === colorTitle);
  console.log(filteredImg);

  const [rotate, setRotate] = useState(0);
  const onAnimationComplete = () => {
    setRotate(0);
  };
  return (
   
      <AnimatePresence>
        <motion.div
        className="hidden lg:block"
          style={{
            width: "240px",
            position: "absolute",
            marginLeft: "0px",
            marginTop: "200px",
          }}
          initial={{ y: -2000, opacity: 0, rotate: 360 }}
          animate={{ y: 0, opacity: 1, width: 280, rotate: rotate }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 70,
            duration: 6,
            delay: 1,
          }}
          onAnimationComplete={onAnimationComplete}
        >
          
          {filteredImg.length > 0 ? (
          <img src={filteredImg[0].img} alt={`${colorTitle} car`} />
        ) : (
          <p>No image available</p>
        )}
        </motion.div>
      </AnimatePresence>
     
   
  );
};

export default Steve;
