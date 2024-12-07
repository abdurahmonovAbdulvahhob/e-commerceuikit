import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static";
import logo from "../../assets/logo.svg";
import cart from "../../assets/Cart.svg";
import profile from "../../assets/Vector.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header id="header" className="bg-white border sticky top-0 z-50">
      <nav className="container flex justify-between gap-4 p-4 bg-white text-slate-900">
        <NavLink to="/" className="text-xl">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="text-base font-[500] flex items-center gap-2 max-md:gap-1 max-md:text-sm whitespace-nowrap">
          {LINKS.map((link) => (
            <NavLink key={link.id} to={link.path} className="px-5 max-md:px-2">
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="hover:cursor-pointer">
            <img src={profile} alt="Profile" className="w-full h-full" />
          </div>
          <NavLink to="/cart">
            <div className="">
              <img src={cart} alt="Cart" className="w-full h-full" />
            </div>
          </NavLink>
          <NavLink to="/wishlist" className="relative">
            <FaRegHeart className="w-full h-full" />
            <span className="absolute right-0 -mr-1 top-0 rounded-full bg-[#56B280] px-1 py-0 text-xs text-white"></span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
