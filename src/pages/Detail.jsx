import Images from "../components/details/Images";
import Specs from "../components/details/Specs";
import { useCarStore } from "../../store";
import Drawer from "../components/details/Drawer";
import { motion } from "framer-motion";

const Detail = () => {
  const car = useCarStore((state) => state.asignedCar);

  return (
    <div >
      <div className="sm:flex sm:justify-start sm:align-middle gap-2 sm:ml-36 mr-40">
      <div>
          <motion.label
          htmlFor="my-drawer-4"
          className="btn btn-outline btn-warning btn-sm relative sm:absolute mb-2 sm:mt-80  sm:w-40"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Know More..
        </motion.label>
        </div>
        <div className="sm:flex sm:gap-2 ">
          <Specs car={car} />
          <Images car={car} />
        </div>
       
        <Drawer car={car} />
      
        
      </div>
    </div>
  );
};

export default Detail;
