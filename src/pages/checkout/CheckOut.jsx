import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { Navigate } from "react-router-dom";

const CheckOut = () => {
  const { cart, setCart } = useStateValue();
  const lname = useRef(null)
  const fname = useRef(null);
  const address = useRef(null);

  if (!cart.length) {
    return <Navigate replace to={"/"} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([])
    lname.current.value = "";
    fname.current.value = "";
    address.current.value = "";
  };

  const totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
          <input
          ref={fname}
            className="p-2 outline-none shadow-lg border border-gray-300 rounded w-full"
            required
            type="text"
            placeholder="First Name"
          />
          <input
          ref={lname}
            className="p-2 outline-none shadow-lg border border-gray-300 rounded"
            required
            type="text"
            placeholder="Last Name"
          />
          <input
          ref={address}
            className="p-2 outline-none shadow-lg border border-gray-300 rounded"
            required
            type="text"
            placeholder="Address"
          />
          <p className="">
            Total: <span className="font-medium">${totalPrice.brm()}</span>
          </p>
          <button className="p-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
