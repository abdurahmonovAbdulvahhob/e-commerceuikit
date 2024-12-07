import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container border-t pt-4 mt-8  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <Link to="/">
            <img src={logo} alt="Candleaf logo" className="w-full h-full" />
          </Link>
          <p className="mt-4 text-gray-400">
            Your natural candle made for your home and for your wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-green-400">Discovery</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <button  className="hover:text-green-300">
                  New season
                </button>
              </li>
              <li>
                <button  className="hover:text-green-300">
                  Most searched
                </button>
              </li>
              <li>
                <button  className="hover:text-green-300">
                  Most selled
                </button>
              </li>
            </ul>
          </div>
          <div className="xl:ml-20">
            <h3 className="font-semibold text-green-400">About</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <button className="hover:text-green-300">
                  Help
                </button>
              </li>
              <li>
                <button className="hover:text-green-300">
                  Shipping
                </button>
              </li>
              <li>
                <button className="hover:text-green-300">
                  Affiliate
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Info Links */}
        <div className="xl:ml-20">
          <h3 className="font-semibold text-green-400">Info</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <button  className="hover:text-green-300">
                Contact us
              </button>
            </li>
            <li>
              <button  className="hover:text-green-300">
                Privacy Policies
              </button>
            </li>
            <li>
              <button  className="hover:text-green-300">
                Terms & Conditions
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-sm text-center flex flex-col md:flex-row justify-between items-center">
        <p>©Candleaf All Rights Reserved.</p>
        <p>
          Designed with <span className="text-red-500">❤️</span> by uxby
        </p>
      </div>
    </footer>
  );
};

export default Footer;
