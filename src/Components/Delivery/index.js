import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

import {BsFilter} from "react-icons/bs";
import {CgArrowsExchangeAltV} from "react-icons/cg";
import {BiChevronDown} from "react-icons/bi";


import DeliveryCarousal from "./DeliveryCarousal";
import BrandCardSlider from "./Brands";
import ItemsCardSlider from "./Inspiration";

const Delivery = () => {

  /* const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]); */

  return (
    <>

      <div className="px-52 py-8 mt-5 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Inspiration for your First Order</h1>
      <ItemsCardSlider />
      </div>

      <h1 className="text-3xl font-bold mt-6 ml-52">Top Brands for you</h1>
      <BrandCardSlider />
      
      <div className="ml-52 flex justify-start gap-3 mt-4">
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg"><BsFilter />&nbsp;Filters</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg"><CgArrowsExchangeAltV />Delivery Time</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Pure Veg</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Ratings: 4.0K+</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Great Offers</span>
        <span className="flex items-center p-3 border border-gary-400 text-gray-600 rounded-lg">Cuisines&nbsp;<BiChevronDown /></span>
      </div>

      <h1 className="text-3xl font-bold mt-6 ml-52">Order food online</h1>

      <DeliveryCarousal />
      <DeliveryCarousal />
      <DeliveryCarousal />
    </>
  )
};

export default Delivery;