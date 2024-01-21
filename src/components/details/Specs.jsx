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
      <div className="w-72 ml-5 gap-2 sm:grid sm:grid-cols-2 sm:h-24 rounded-x  opacity-60 text-gray-500 bg-white rounded-lg  ">
        <div className="flex flex-col items-center align-center w-full h-10 text-left sm:text-md ">
          <h1 className="text-md">TITLE</h1>
          <p className="font-extrabold opacity-100 text-sm" style={style}>
            {car.Title}
          </p>
        </div>
        <div className="flex flex-col items-center text-left w-full h-10">
          <h1 className="text-md">MANUFACTURER</h1>
          <p className="text-sm">{car.Manufacturer}</p>
        </div>
        <div className="flex flex-col items-center text-left w-full h-10">
          <h1 className="text-md">COLOR</h1>
          <p style={style} className="text-sm">{car.Color.title}</p>
        </div>
        <div className="flex flex-col items-center  text-full h-10">
          <h1 className="text-md">YEAR</h1>
          <p className="text-md">{car.Year}</p>
        </div>
      </div>
      <Steve car={car} />
    </>
  );
};

export default Specs;
