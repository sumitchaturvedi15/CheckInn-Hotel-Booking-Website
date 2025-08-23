import React from "react";
import { assets } from "../assets/assets";

const NewsLetter = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center space-y-2 py-12 px-4">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Never Miss a Deal!
        </h1>
        <p className="md:text-lg text-gray-500/70 pb-8">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
          <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
            type="text"
            placeholder="Enter your email id"
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
            <img
              src={assets.arrowIcon}
              alt="arrow-icon"
              className="w-3.5 invert group-hover:translate-x-1 transition-all"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
