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
  console.log(car.Color.title);

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

  const filteredImg = steveColor.filter((img) => img.color === car.Color.title);
  console.log(filteredImg);

  const [rotate, setRotate] = useState(0);
  const onAnimationComplete = () => {
    setRotate(0);
  };
  return (
    <div className="hidden sm:flex -mt-64 -ml-6">
      <AnimatePresence>
        <motion.div
          style={{
            width: "280px",
            position: "absolute",
            marginLeft: "-255px",
            marginTop: "380px",
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
          {/* <img src={car.Color.title === 'yellow' ? steve2:steve} /> */}
          <img src={filteredImg[0].img} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Steve;
