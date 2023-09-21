import Calculator from "../components/Calculator";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useBuyerStore } from "../../store.js";
import { motion } from 'framer-motion'

const Checkout = () => {


  const stateBuyer = useBuyerStore((state) => state.setAsignedBuyer);
 

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
    
    navigate("/hey");
  };

  return (
    <div className="text-left -mt-10">
      <Calculator />
      <h1 className="text-5xl font-bold text-center"> Send Us Your Request!</h1>
      <p className="py-6">
        {" "}
        Owning a car has never been easier with our financing solutions.
        Fancycar.com Auto’s finance services enables everyone with any budget to
        own a car. For your comfort, we have partnered with major banks to
        provide financing services to support you. You can get the right rate
        based on your budget with the banks we are partnering with, or you can
        finance with your own bank. Plus, you have the option to pay with cash
        if that’s your preferred payment method. To gain more information about
        used car finance solutions, our experts will get in touch with you and
        provide more details.
      </p>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card grid grid-cols-4 gap-4 bg-base-200"
        >
          <label htmlFor="First Name" className="text-gray-800 mr-2">
            First Name
          </label>
          <input
            name="First Name"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("firstName")}
            onChange={(e) => {
              stateBuyer(e.target.value);
            }}
          />

          <label htmlFor="Last Name" className="text-gray-800 mr-2">
            Last Name
          </label>
          <input
            name="Last Name"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("lastName")}
          />

          <label htmlFor="Street Address" className="text-gray-800 mr-2">
            Street Address
          </label>
          <input
            name="Street Address"
            type="text"
            placeholder="Street Address"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("streetAddress")}
          />

          <label htmlFor="Zip Code" className="text-gray-800 mr-2">
            Zip Code
          </label>
          <input
            name="Zip Code"
            type="text"
            placeholder="Zip Code"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("zipCode")}
          />

          <label htmlFor="email" className="text-gray-800 mr-2">
            email
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("email")}
          />

          <label htmlFor="Phone" className="text-gray-800 mr-2">
            Phone
          </label>
          <input
            name="Phone"
            type="text"
            placeholder="Phone"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("phone")}
          />

          <label htmlFor="Date of Birth" className="text-gray-800 mr-2">
            Date of Birth
          </label>
          <input
            name="Date of Birth"
            type="date"
            placeholder="Date of Birth"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("dateOfBirth")}
          />

          <label
            htmlFor="Driver`s License Number"
            className="text-gray-800 mr-2"
          >
            Driver`s License Number
          </label>
          <input
            name="Driver`s License Number"
            type="text"
            placeholder="Driver`s License Number"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("driversLicenseNumber")}
          />

          <label htmlFor="Gross Income" className="text-gray-800 mr-2">
            Gross Income
          </label>
          <input
            name="Gross Income"
            type="number"
            placeholder="Gross Income"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("grossIncome")}
          />

          <label htmlFor="Income Type" className="text-gray-800 mr-2">
            Income Type
          </label>
          <select
            name="Income Type"
            type="number"
            placeholder=" Income Type"
            className="select select-sm w-full max-w-xs text-gray-800 border-gray-300"
            {...register("IncomeType")}
          >
            <option disabled>Where is my money coming from?</option>
            <option>Self Employee</option>
            <option>Pasive Income</option>
            <option>Dependent Income</option>
            <option>SSI - Buyer</option>
          </select>

          <label
            htmlFor="Monthly Rent / Mortgage"
            className="text-gray-800 mr-2"
          >
            Monthly Rent / Mortgage
          </label>
          <input
            name="Monthly Rent / Mortgage"
            type="number"
            placeholder="Monthly Rent / Mortgage"
            className="input input-bordered input-sm w-full max-w-xs text-gray-400"
            {...register("monthlyRent/Mortgage")}
          />

          <button type="submit" className="btn btn-warning w-full btn-sm ml-40">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
