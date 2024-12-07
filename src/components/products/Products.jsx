import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

const Products = ({ data }) => {
  const { setWishlist, wishlist, setCount, setCart, cart} = useStateValue();
  

  const handleLike = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setWishlist((prev) => [...prev, product]);
      setCount((prev) => prev + 1);
    } else {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      setCount((prev) => prev - 1);
    }
  };

  const handleAddToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...product, amount: 1 }]);
    }else{
      setCart((prev) => prev.filter((item) => item.id !== product.id))
    }
  };

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="shadow flex flex-col gap transition-transform duration-300 hover:scale-105"
    >
      <div className="w-full h-[180px] relative bg-slate-100">
        <img
          className="w-full h-full object-contain"
          src={product.thumbnail}
          alt=""
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-xl text-gray-500 hover:text-[#56B280]"
        >
          {wishlist?.some((item) => item.id === product.id) ? (
            <FaHeart className="text-slate-900" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute top-10 right-3 text-xl text-gray-600 hover:text-gray-900"
        >
          {cart?.some((item) => item.id === product.id) ? (
            <IoCartSharp />
          ) : (
            <IoCartOutline />
          )}
        </button>
      </div>
      <div className="px-5 flex flex-col justify-evenly min-h-[75px]">
        <h3 className="text-start tracking-tighter overflow-hidden whitespace-nowrap hover:text-slate-500 hover:cursor-pointer">
          {product.title}
        </h3>
        <p className="text-[#56B280] text-right leading-5 hover:text-slate-500 hover:cursor-pointer font-semibold">
          {product.price}$
        </p>
      </div>
    </div>
  ));
  return (
    <div className="container text-center my-24 font-poppins">
      <h2 className="text-[40px] font-[500]">Products</h2>
      <p className="text-[#5E6E89] text-lg ">
       Likes list
      </p>
      <div className="grid container gap-7 grid-cols-4 mt-[60px] max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1">
        {productItems}
      </div>
    </div>
  );
};

export default Products;
