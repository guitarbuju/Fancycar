
import carInventory from "../Inventory";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col mt-20">
   
      <motion.div
        className="hero  bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4 }}
      >
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={carInventory[16].img1}
            className="w-60 rounded-lg shadow-2xl lg:w-2/4"
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-400">
              Welcome to Fancycar.com
            </h1>
            <h3 className="text-2xl font-bold text-gray-400">
              Where Automotive Dreams Come True!
            </h3>
            <p className="py-6 text-gray-400">
              At Fancycar.com, we specialize in curating the finest collection
              of vintage and luxury cars from legendary manufacturers like
              Lamborghini, Ferrari, Maserati, Porsche, Bugatti, Aston Martin,
              Mclaren and more. If you are a discerning enthusiast looking to
              own a piece of automotive history, you&apos;ve come to the right
              place.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hero  bg-transparent text-gray-400 mt-20 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2, duration: 6 }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={carInventory[11].img1}
            className="w-60 lg:w-2/4 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Timeless Classics Await You!</h1>
            <p className="py-6">
              {" "}
              Our showroom is a treasure trove of timeless classics, each with
              its own unique story to tell. Whether you&apos;re drawn to the raw
              power of a roaring V12 engine or the elegance of a handcrafted
              interior, our selection caters to your every desire.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hero  bg-transparent mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 5, duration: 8 }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={carInventory[4].img4}
            className="max-w-sm rounded-lg shadow-2xl w-60 lg:w-2/4 "
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-400 ">
              Power and Precision
            </h1>
            <p className="py-6 text-gray-400 ">
              Step into the driver&apos;s seat, and you will experience a
              symphony of power and precision. Our vintage cars are meticulously
              maintained to deliver peak performance, and their engines are a
              testament to engineering excellence. Feel the rush as you
              accelerate from 0 to 60 mph in mere seconds, or navigate winding
              roads with unrivaled agility.
            </p>
          </div>
        </div>
      </motion.div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: "url(https://wallpapercave.com/wp/wp1960202.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">A Legacy of Excellence</h1>
            <p className="mb-5">
              These legendary marques represent more than just cars; they embody
              a legacy of craftsmanship, innovation, and performance. As a proud
              owner of one of our vintage treasures, you become part of an
              exclusive club of connoisseurs who appreciate the finer things in
              life.
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="hero  bg-transparent mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4 }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={carInventory[7].img1}
            className="w-60 lg:w-2/4  rounded-lg shadow-2xl opacity-60"
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-400">
              Tailored Financial Solutions!!!
            </h1>
            <h3 className="text-2xl font-bold text-gray-400">
            It&apos;s an Investment in your lifestyle.
            </h3>
            <p className="py-6 text-gray-400">
              We understand that owning a piece of automotive history is a
              significant decision. That&apos;s why we offer flexible financing
              solutions tailored to your specific needs. Our finance experts
              will work with you to craft a plan that aligns with your financial
              goals.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="hero  bg-transparent text-gray-400 mt-20 mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src={carInventory[1].img1}
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Experience the Legend</h1>
            <p className="py-6">
              {" "}
              The best way to truly understand these iconic vehicles is by
              experiencing them firsthand. We invite you to schedule a private
              viewing or take your chosen masterpiece for a test drive. Our team
              is dedicated to ensuring your automotive dreams come true..
            </p>
            <Link to="/cars">
              <button className="btn btn-warning btn-outline">I&apos;m Interested</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
