import React, { useEffect } from "react";
//import { useParams } from "react-router-dom";
//import { useDispatch } from "react-router-dom";


import Navbar from "../Components/Navbar/index";
import FoodTab from "../Components/FoodTab/index";

//import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout = (props) => {

 /* const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getRestaurant()); 
  }, []); */

    return (
        <>
        <div className="container mx-auto">
          <Navbar />
          <FoodTab />
          {props.children}
        </div>
        </>
    )
};

export default HomeLayout;