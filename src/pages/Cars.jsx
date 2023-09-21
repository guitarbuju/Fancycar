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
    <div className="container">

    
      <div className="flex gap-2 flex-wrap ml-10">
        {carsInventory.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 1 }}
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
    </div>
  );
};

export default Cars;
