/* eslint-disable react/prop-types */

import Steve from "./Steve";

const Specs = ({ car }) => {
  console.log(car);
  const carColor = car.Color.hex;

  const style = {
    color: carColor,
    textShadow: "1px 1px 1px darkgray",
  };

  return (
    <>
       <div className="sm:w-2/4 sm:mt-10 sm:h-28 w-full  gap-1 grid grid-cols-2 h-24 rounded-x  opacity-60 text-gray-500 bg-white rounded-lg  ">
        <div className="flex flex-col items-center align-center w-full h-8 text-left sm:text-md p-2">
          <h1 className="text-xs sm:text-sm">TITLE</h1>
          <p className="font-extrabold opacity-100 text-xs sm:text-sm" style={style}>
            {car.Title}
          </p>
        </div>
        <div className="flex flex-col items-center align-center w-full h-8 text-left sm:text-md p-2">
          <h1 className="text-sm">MANUFACTURER</h1>
          <p className="text-xs">{car.Manufacturer}</p>
        </div>
        <div className="flex flex-col items-center align-center w-full h-8 text-left sm:text-md p-2">
          <h1 className="text-sm">COLOR</h1>
          <p style={style} className="text-xs">{car.Color.title}</p>
        </div>
        <div className="flex flex-col items-center align-center w-full h-8 text-left sm:text-md p-2">
          <h1 className="text-sm">YEAR</h1>
          <p className="text-xs">{car.Year}</p>
        </div>
      </div>
      <Steve car={car} />
    </>                          

   

  )
};

export default Specs;
