import { useCarStore } from "../../store";
import Spinner from "../components/Spinner";


const Hey = () => {
  const car = useCarStore((state) => state.asignedCar);
  console.log(car.Title);
  console.log("wtf");
  return (
    <div>
    
 <Spinner/> 
    </div>
    
  );
};

export default Hey;
