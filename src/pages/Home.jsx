import { Link } from "react-router-dom";
import countach from "../assets/portraitCars/‎Untitled 2.‎001.png";
// import bugatti from "../assets/portraitCars/‎Untitled 2.‎002.png";
// import nissan from "../assets/portraitCars/‎Untitled 2.‎003.png";
// import charger from "../assets/portraitCars/‎Untitled 2.‎004.png";
// import transam from "../assets/portraitCars/‎Untitled 2.‎005.png";
// import porsche from "../assets/portraitCars/‎Untitled 2.‎006.png";
import { motion } from "framer-motion";

const Home = () => {
  //

  // const portraitCars = [countach, bugatti, nissan, charger, transam, porsche];

  // const randomNumber = Math.floor(Math.random() * (5 - 0 + 1) + 0);
  // console.log(portraitCars[randomNumber]);

  return (
    <div className="flex gap-4 ">
      <motion.img
        // 
        src={countach}
        style={{ width: "800px", marginTop: "-50px", opacity: 0.9 }}
        initial={{ opacity: 0, scale: 0.1 ,x:1000}}
        animate={{ opacity: 1, scale: 1, x:0 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 1,delay:1 }}
      />
      <div>
        <h1 className="text-5xl font-bold">Experience the Legend</h1>
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
