import Images from "../components/details/Images";
import Specs from "../components/details/Specs";
import { useCarStore } from "../../store";
import Drawer from "../components/details/Drawer";
import { motion } from "framer-motion";
import Steve from '../components/details/Steve'

const Detail = () => {
  const car = useCarStore((state) => state.asignedCar);

  return (
   
      <div className="custom-xs:flex custom-xs:justify-center custom-xs:align-middle gap-2 sm:-mt-4  lg:ml-28 ">
      <div>
          
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:mt-5">
          <Specs car={car} />
          <Images car={car} />
          <Steve car={car} />
        </div>
        <motion.label
          htmlFor="my-drawer-4"
          className="btn btn-outline btn-warning btn-sm mt-4 sm:absolute md:relative sm:-mt-8 md:mt-2"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Know More..
        </motion.label>
        <Drawer car={car} />
      
        
      </div>
  
  );
};

export default Detail;
