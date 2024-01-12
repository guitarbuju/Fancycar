import { useCarStore } from "../../store";
import { useState } from "react";
import { motion } from 'framer-motion'

const Calculator = () => {
  const car = useCarStore((state) => state.asignedCar);

  const [downPayment, setDownPayment] = useState("");
  const [termLength, setTermLength] = useState(60);

  const handleTermLengthChange = (e) => {
    setTermLength(parseInt(e.target.value));
  };

  // Calculate the monthly payment
  const monthlyInterestRate = 1.9 / 100 / 12; // Annual interest rate divided by 12 months
  const numberOfMonths = termLength; // Term length in months
  const principal = car.Price - downPayment;

  const monthlyPayment = (
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)
  ).toFixed(2);

  const formattedMonthlyPayment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(monthlyPayment);

  const formatedCarPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(car.Price);

  const formatedPrincipal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(principal);

  const formatedDownPayment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(downPayment);

  return (
    <motion.div
     className="hero  bg-transparent "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4 }}
        >
      <div className="hero  bg-transparent mb-20 ">
        <div className="hero-content flex-col-reverse  sm:flex-row-reverse ">
          <form
            className=" rounded-lg shadow-2xl bg-base-200  p-10 sm:w-96 w-80"
            // style={{ width: "400px" }}
          >
            <div className="flex gap-2 mb-4 text-center">
              <h1 className="text-gray-800 text-2xl">{car.Manufacturer}</h1>
              <h1 className="text-gray-800 text-2xl">{car.Model}</h1>
              <h1 className="text-gray-800 text-2xl">{car.Year}</h1>
            </div>
            <div>
              <label htmlFor="Car Price" className="text-gray-800 mr-2 ">
                Car Price
              </label>
              <input
                name="Car Price"
                type="text"
                placeholder="Car Price"
                value={formatedCarPrice}
                readOnly
                className="input input-bordered input-sm w-full max-w-xs text-gray-400 mt-2 mb-2"
              />
            </div>
            <div>
              <label htmlFor="Income Type" className="text-gray-800 mr-2 ">
                Term Lenght
              </label>
              <select
                className="select select-sm w-full max-w-xs text-gray-400 mt-2"
                onChange={handleTermLengthChange}
                
              >
                <option disabled>60 - 48 or 36 months</option> 
                <option value={60}>60 months</option>
                <option value={48}>48 monts</option>
                <option value={36}>36 months</option>
               
              </select>
            </div>
            <div className="flex mt-4">
              {/* Down Payment Input */}
              <div className="flex flex-shrink ">
             
                <input
                  name="Down Payment"
                  type="number"
                  placeholder="Down Payment $"
                  className="input input-bordered input-sm w-2/2 max-w-xs text-gray-400"
                  onChange={(e) => {
                    setDownPayment(e.target.value);
                  }}
                />
              </div>
              {/* Interest Rate Input */}
              <div>
                <input
                  name="Interest Rate"
                  type="number"
                  placeholder="% Interest"
                  className="input input-bordered input-sm w-3/4 max-w-xs text-gray-400 ml-8"
                  defaultValue={1.9}
                />
              </div>
            </div>

            <div className=" rounded-lg shadow-2xl bg-gray-200  p-5  text-gray-800 mt-8">
              <h1 className="text-xl font-bold text-center text-yellow-400 ">
                Summary
              </h1>
              <div className="grid grid-cols-2 grid-rows-4 gap-2">
                <p className="text-left text-sm">Vehicle Price: </p>
                <span className="text-right">{formatedCarPrice}</span>
                <p className="text-left text-sm">Down Payment</p>
                <span className="text-right">{formatedDownPayment}</span>
                <p className="text-left text-sm">Total Finance Amount</p>
                <span className="text-right">{formatedPrincipal}</span>
                <p className="text-left text-sm">Estimated Monthly Payment</p>
                <span className="text-right font-bold">{formattedMonthlyPayment}</span>
              </div>
            </div>
          </form>

          <div className="bg-transparent mt-20 sm:w-2/4">
            <h1 className="text-5xl font-bold">Calculate Financing Online!</h1>
            <p className=" text-left mt-2">
              For your comfort, Fancycar.com has designed a car finance
              calculator enabling you to calculate the payment painlessly. You
              can use our loan calculator to ensure that the financing solution
              you are considering suits your budget. Using the calculator is
              super easy. Just enter the loan amount, the down payment, interest
              rate, and the period and our calculator will estimate the payment
              for you!
            </p>
            
            <h1 className="text-2xl sm:text-4xl font-bold mt-2">  Tailored Financial Solutions!!!</h1>
            
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator;
