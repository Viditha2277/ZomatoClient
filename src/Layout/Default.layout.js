import React from "react";

//import Navbar from "../Components/Navbar/index";
//import FoodTab from "../Components/FoodTab/index";

const DefaultLayout = (props) => {
    return (
        <>
        <div className="container mx-auto">
          {props.children}
        </div>
        </>
    )
};

export default DefaultLayout;