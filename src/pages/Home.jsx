import { Link } from "react-router-dom";
import countach from "../assets/portraitCars/‎Untitled 2.‎001.png";

import { motion } from "framer-motion";

const Home = () => {
  

  return (
    <div className="sm:flex gap-4  ">
      <motion.img
        className="w-40 h-40 sm:w-3/4 sm:h-3/4 -mt-10"
        src={countach}
        // style={{ width: "800px", marginTop: "-50px", opacity: 0.9 }}
        initial={{ opacity: 0, scale: 0.1 ,x:1000}}
        animate={{ opacity: 1, scale: 1, x:0 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 1,delay:1 }}
      />
      <div>
        <h1 className="text-2xl font-bold sm:text-5xl">Experience the Legend</h1>
        <p className="py-6">
          {" "}
          Whether you&apos;re an avid collector or a first-time buyer,
          we&apos;re here to assist you on your journey to automotive
          excellence. Reach out to us today, and let&apos;s make your dream car
          a reality.
        </p>
        <Link to="/cars">
          <button className="btn btn-warning btn-outline">
            Get your dream car today
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
