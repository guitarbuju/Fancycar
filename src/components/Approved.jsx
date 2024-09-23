/* eslint-disable react/prop-types */
import { useBuyerStore, useCarStore } from "../../store.js";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Approved = () => {

  const car = useCarStore(((state)=> state.asignedCar))
  const brand = car.Manufacturer.toUpperCase();
  const model = car.Model.toUpperCase();
  const buyer = useBuyerStore((state) => state.asignedBuyer);

  return (
    <motion.div
     className="hero  bg-transparent  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 6 }}
        >
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col ">
          <img src={car.img1} className="w-3/4 sm:w-2/4 rounded-lg shadow-2xl" />
          <div className="text-sm lg:text-lg">
            <h1 className="text-5xl font-bold mb-8">You&apos;ve Made it!!!!!</h1>
            <p className="py-2 text-left">
              Dear {buyer}, We are thrilled to congratulate you on the approval of
              your car loan! It&apos;s a momentous step towards acquiring the
              vehicle of your dreams, and we couldn&apos;t be happier for you.
            </p>
            <p className="py-2 text-left">
              At Fancycar.com, we understand that the journey to owning your
              dream car can be both exciting and challenging. We&apos;re here to
              make it as smooth as possible. Your trust in us means the world,
              and we&apos;re committed to providing you with top-notch service
              every step of the way.
            </p>
            <p className="  py-2 text-left">
              We want to express our sincere gratitude for choosing us as your
              preferred dealership and finance partner. We are confident that
              the {brand} {model} you&apos;ve chosen will bring you countless
              moments of joy and unforgettable experiences.
            </p>
            <p className=" py-2 text-left">
              Should you have any questions or need further assistance, our
              dedicated team is always here to help. Feel free to reach out to
              us at info@fancycar.com.
            </p>
            <p className=" py-2 text-left">
              Once again, congratulations on this significant achievement! We
              look forward to seeing you drive off in style in your new {brand}{" "}
              {model}.
            </p>

            <p>Thank you for choosing </p>
            <p className="text-3xl mt-2 font-bold">Fancycar.com</p>

            <Link className="btn btn-warning btn-outline  mt-8" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Approved;
