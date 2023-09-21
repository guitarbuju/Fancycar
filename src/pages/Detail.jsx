import Images from "../components/details/Images";
import Specs from "../components/details/Specs";
import { useCarStore } from '../../store'
import Drawer from "../components/details/Drawer";
import { motion } from "framer-motion";


const Detail = () => {
  const car = useCarStore(((state)=> state.asignedCar))
  
  return (
    <div>
    

 
      <div className="flex justify-center align-middle gap-2  mr-40">
    
        <Specs car={car} />
        <Images car={car} />
        <Drawer car={car}/>
        <motion.label
            htmlFor="my-drawer-4"
            className='btn btn-outline btn-warning btn-sm absolute mr-96 mt-64 -ml-16'

            initial={{ opacity: 0, scale: 0.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 1, delay:2 }}
          >
            Know More..
          </motion.label>
        
      </div>
    </div>
  );
};

export default Detail;
