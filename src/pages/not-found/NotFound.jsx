import React from "react";
import { useNavigate } from "react-router-dom";
import pagenotfound from "../../assets/pagenotfound.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          {/* <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1> */}
          <div className="w-[85%]">
            <img src={pagenotfound} alt="" className="w-full" />
          </div>

          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Page not found{" "}
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex text-white bg-[#56B280] hover:bg-[#1e40af] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#1e3a8a] my-4"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
