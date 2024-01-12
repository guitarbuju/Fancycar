/* eslint-disable react/prop-types */

import Steve from "./Steve";

const Specs = ({ car }) => {
  console.log(car);
  const carColor = car.Color.hex;

  const style = {
    color: carColor,
    fontWeight: 800,
    textShadow: "1px 1px 1px darkgray",
  };

  return (
    <>
      <div className="w-full rounded-x sm:h-52 sm:w-56 opacity-60 text-gray-500 bg-white rounded-lg sm:-mt-8 ">
        <h1>TITLE</h1>
        <p className={`font-extrabold opacity-100 text-xs`} style={style}>
          {car.Title}
        </p>
        <h1>MANUFACTURER</h1>
        <p>{car.Manufacturer}</p>
        <h1>COLOR</h1>
        <p style={style}>{car.Color.title}</p>
        <h1>YEAR</h1>
        <p>{car.Year}</p>
      </div>
      <Steve car={ car }/>
    </>
  );
};

export default Specs;
