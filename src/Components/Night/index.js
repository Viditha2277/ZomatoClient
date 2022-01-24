import React from "react";
import {BsFilter} from "react-icons/bs";
import {CgArrowsExchangeAltV} from "react-icons/cg";
import {BiChevronDown, BiChevronRight} from "react-icons/bi";

import CollectCarousal from "../Dining/CollectCarousal";
import DeliveryCarousal from "../Delivery/DeliveryCarousal";

const Night = () => {
  return (
    <>

    <div className="bg-gray-50 py-5">
        
    <h1 className="text-3xl font-bold ml-52">Collections</h1>
    
    <div className="flex justify-between mt-3 mx-52">
    <p className="text-lg font-light">Explore curated lists of top restaurants, cafes, pubs, and bars in Chicago, based on trends</p>
    <p className="font-light text-red-500 text-md flex items-center">All Collections in Chicago <BiChevronRight /></p>
    </div>

    <CollectCarousal />
    </div>
      
      <div className="mx-52 mt-10 flex flex-wrap justify-start gap-3">
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg"><BsFilter />&nbsp;Filters</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg"><CgArrowsExchangeAltV />Distance</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Pubd and Bars</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Ratings: 4.0K+</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Pro Offers&nbsp;<BiChevronDown /></span>
      </div>

      <h1 className="text-3xl font-bold mt-10 ml-52">Night Restaurants in Chicago</h1>

      <DeliveryCarousal />
      <DeliveryCarousal />
      <DeliveryCarousal />

    </>
  )
};

export default Night;