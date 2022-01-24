import React from "react";
import {BsFilter} from "react-icons/bs";
import {CgArrowsExchangeAltV} from "react-icons/cg";
import {BiChevronDown, BiChevronRight} from "react-icons/bi";

import CollectCarousal from "./CollectCarousal";
import DeliveryCarousal from "../Delivery/DeliveryCarousal";

const Dining = () => {
  return (
    <>

    <h1 className="text-3xl font-bold mt-6 ml-52">Collections</h1>
    
    <div className="flex justify-between mt-3 mx-52">
    <p className="text-lg font-light">Explore curated lists of top restaurants, cafes, pubs, and bars in Chicago, based on trends</p>
    <p className="font-light text-red-500 text-md flex items-center">All Collections in Chicago <BiChevronRight /></p>
    </div>

    <CollectCarousal />
      
      <div className="mx-52 mt-10 flex flex-wrap justify-start gap-3 mt-4">
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg"><BsFilter />&nbsp;Filters</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg"><CgArrowsExchangeAltV />Distance</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Online Bookings</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Ratings: 4.0K+</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Outdoor Seating</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Cuisines&nbsp;<BiChevronDown /></span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Pro Offers&nbsp;<BiChevronDown /></span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">More Filters&nbsp;<BiChevronDown /></span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Serves Alcohol</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Open Now</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Cafes</span>
      </div>

      <h1 className="text-3xl font-bold mt-10 ml-52">Dine-out Restaurants in Hyderabad</h1>

      <DeliveryCarousal />
      <DeliveryCarousal />
      <DeliveryCarousal />

    </>
  )
};

export default Dining;