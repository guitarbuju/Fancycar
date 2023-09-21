import { useState, useEffect } from "react";
import Approved from "./Approved";

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showSpinner ? (
        <div className="flex justify-center items-center mt-4 mb-4 h-96 ml-50">
          <div className="card w-96 shadow-xl bg-transparent">
            <div className="flex flex-col gap-1 justify-center align-middle mt-4">
              <h1 className="text-3xl mt-2 font-bold">
                Fancycar.com
              </h1>
              <span>Analizing your request...</span>
            </div>

            <div className="card-body">
              <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg bg-yellow-400"></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Approved />
      )}
    </>
  );
};

export default Spinner;
