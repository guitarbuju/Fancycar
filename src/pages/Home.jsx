import { Link } from "react-router-dom";
import countach from "../assets/portraitCars/‎Untitled 2.‎001.png";

import { motion } from "framer-motion";

const Home = () => {
  

  return (
    <div className="sm:flex gap-4 mt-10 ">
      <motion.img
        className="w-3/4 "
        src={countach}
        // style={{ width: "800px", marginTop: "-50px", opacity: 0.9 }}
        initial={{ opacity: 0, scale: 0.1 ,x:1000}}
        animate={{ opacity: 1, scale: 1, x:0 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 1,delay:1 }}
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold md:text-4xl">Experience the Legend</h1>
        <p className="py-2 md:text-xs">
          {" "}
          Whether you&apos;re an avid collector or a first-time buyer,
          we&apos;re here to assist you on your journey to automotive
          excellence. Reach out to us today, and let&apos;s make your dream car
          a reality.
        </p>
        <Link to="/cars">
          <button className="btn btn-warning btn-outline mt-5">
            Get your dream car today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
