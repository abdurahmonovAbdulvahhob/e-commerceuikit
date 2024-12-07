import React from "react";

const Hero = () => {
  return (
    <div className="max-xl:bg-center bg-hero-pattern h-screen bg-no-repeat bg-cover flex justify-center items-center ">
      <div className="container flex justify-center items-center">
        <div className="w-[70%] bg-[#F7F8FACC] backdrop-blur-xl rounded border text-center px-10 py-8 font-poppins flex flex-col items-center">
          <div className="w-[80%]">
            <p className="text-[40px]">🌱</p>
            <p className="text-[40px]">The nature candle</p>
            <p>
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
          </div>
          <button className="px-12 py-2 my-10 bg-[#56B280] text-white rounded-s">
            Discovery our collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
