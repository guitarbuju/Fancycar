import  { useEffect } from "react";
import CarCard from "../components/CarCard";
import carsInventory from "../Inventory";
import { useCarStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion


const Cars = () => {
  const stateCar = useCarStore((state) => state.setAsignedCar);
  const navigate = useNavigate();

  const pickCar = (car) => {
    stateCar(car);
    navigate("/detail");
  };
  

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to ensure it only runs once

  return (
    
      <div className=" flex flex-col items-center custom-xm:grid custom-xm:grid-cols-2 custom-xm:ml-10 lg:grid-cols-3 xl:grid-cols-4 lg:ml-0 gap-4 custom-xm:mt-1 md:mt-5 ">
        {carsInventory.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 1 }}
            className="flex justify-center align-middle"
          >
            
              <CarCard 
                title={car.Title}
                price={car.Price}
                img={car.img1}
                manufacturer={car.Manufacturer}
                model={car.Model}
                pickCar={() => pickCar(car)}
                
              />
         
          </motion.div>
        ))}
      </div>
    
  );
};

export default Cars;
