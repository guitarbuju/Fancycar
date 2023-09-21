/* eslint-disable react/prop-types */

const Deal = ({ car }) => {

const discount = Number(car.Price*0.05)
const formatedDiscount = discount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
const net = Number(car.Price-discount)
const formatedNet = net.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const monthly = Number(net/(5*12)).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="flex flex-row gap-2 justify-center align-middle ml-20 -mt-2">
      <div className="w-40 h-20 border-2 opacity-60 text-gray-500 bg-white rounded-lg ">
        <h1 className="text-xs font-bold ">DISCOUNT</h1>
        <h1>{formatedDiscount}</h1>
        <h1 className="text-xs font-bold">PAY ONLY</h1>
        <h1>{formatedNet}</h1>
      </div>
      <div className="w-40 h-20 border-2 opacity-60 text-gray-500 bg-white rounded-lg">
        <h1>PAYMENTS</h1>
        <div>
            <h1>ONLY</h1>
            <h1>{monthly} / month</h1>
        </div>
      </div>
    </div>
  );
};

export default Deal;
