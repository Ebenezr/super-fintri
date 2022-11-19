import React from "react";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { RiMastercardFill } from "react-icons/ri";

const Cards = () => {
  return (
    <div className=" h-56  bottom-0 mx-6 translate-y-1/3 flex gap-3 items-center pb-8 justify-between">
      <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-200 to-purple-300 w-1/3 aspect-[4/2] rounded-[1rem] flex flex-col p-6">
        <div className="flex justify-between flex-1">
          <p className="font-bold text-gray-700">Your Working Balance</p>
          <p className="text-gray-600 underline">Saving Account</p>
        </div>
        <div className="flex justify-between items-end">
          <h2 className="text-4xl font-bold text-gray-700">PKR 9,250,000</h2>
          <p className="text-gray-700 flex items-center gap-1">
            PKR
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-200 to-rose-200 w-1/3 aspect-[4/2] rounded-[1rem] flex flex-col p-6">
        <div className="flex justify-between flex-1">
          <p className="font-bold text-gray-700">Your Saving Status</p>
          <div className="bg-gray-400 w-6 h-6 rounded-full grid place-items-center">
            <p className="font-bold text-white text-md">?</p>
          </div>
        </div>
        <div className="flex">
          <div className="h-full">
            <GiCardboardBoxClosed className="h-full text-red-700 text-5xl mr-4" />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold text-2xl text-red-700">4.28%</p>
            <p className="font-semibold">Your spending Increased</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-teal-200 to-lime-200 w-1/3 aspect-[4/2] rounded-[1rem] flex flex-col p-6">
        <div className="flex justify-between flex-1">
          <RiMastercardFill className="text-3xl text-gray-500" />
        </div>
        <div className="flex justify-between flex-col">
          <p className="text-gray-500 text-[9px] tracking-wide">CARD NUMBER</p>
          <p className="font-bold text-gray-700">3829 4820 4629 5025</p>
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex justify-between flex-col">
            <p className="text-gray-500 text-[9px] tracking-wide">
              CARD HOLDER NAME
            </p>
            <p className="font-bold text-gray-700">Anita Rose</p>
          </div>
          <div className="flex justify-between flex-col ">
            <p className="text-gray-500 text-[9px] tracking-wide">
              VALID THROUGH
            </p>
            <p className="font-bold text-gray-700">09/17</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
