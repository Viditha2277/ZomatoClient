import React from "react";
import {FaPizzaSlice} from "react-icons/fa";
import {TiLocation} from "react-icons/ti"
import {BiChevronDown, BiSearch} from "react-icons/bi";
 
const MobileNav = () => {
  return (
    <>
        <div className="items-center justify-between flex w-full m-5 ">
        <div className="flex justify-start items-center">
        <div className="w-40">
        <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
        />
        </div>

        <div className="bg-white shadow-lg z-10 py-2 px-3 ml-5 w-full border border-gray-200">
          <span className="flex items-center justify-between text-gray-400 h-8">
            <TiLocation />
            &nbsp;
            Chicago
            <span className="w-14"></span>
            <BiChevronDown />
            |
            &nbsp;
            <BiSearch />
            &nbsp;
            Search for Restaurants, cuisine or a dish
            <span className="w-20"></span>
          </span>
        </div>

        </div>
        <div className="flex items-center gap-3 border border-gray-200 rounded-full">
            
            <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                <FaPizzaSlice /> 
            </span>
            <button className="py-2 px-3 text-black rounded-full">Log In</button>
            

        </div>
        </div>
    </>
  )
};


const LargeNav = () => {
  return (
    <>
        <div className="items-center justify-between flex w-full m-5 mx-52 ">
        <div className="flex justify-start items-center">
        <div className="w-40">
        <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
        />
        </div>

        <div className="bg-white shadow-lg z-10 py-2 px-3 ml-5 w-full border border-gray-200">
          <span className="flex items-center justify-between text-gray-400 h-8">
            <TiLocation />
            &nbsp;
            Chicago
            <span className="w-14"></span>
            <BiChevronDown />
            |
            &nbsp;
            <BiSearch />
            &nbsp;
            Search for Restaurants, cuisine or a dish
            <span className="w-20"></span>
          </span>
        </div>

        </div>
        <div className="flex items-center gap-3 border border-gray-200 rounded-full">
            
            <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                <FaPizzaSlice /> 
            </span>
            <button className="py-2 px-3 text-black rounded-full">Log In</button>
            

        </div>
        </div>
    </>
  )
};

const Navbar = () => {
  return (
    <>
      <nav className="">
      <div className="md:hidden">{/*Mobile Screen*/}
          <MobileNav />
        </div>
        <div className="hidden md:flex lg:hidden">{/*Tablet Screen*/}
        <MobileNav />
        </div>
        <div className="hidden lg:flex">{/*Large Screen*/}
        <LargeNav />
        </div>
      </nav>
    </>
  )
};

export default Navbar;