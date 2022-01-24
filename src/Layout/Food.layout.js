import React from "react";

import Navbar from "../Components/Navbar/index";
//import FoodTab from "../Components/FoodTab/index";

const FoodLayout = (props) => {
    return (
        <>
        <div className="container mx-auto">
            <Navbar />
          {props.children}
        </div>
        </>
    )
};

export default FoodLayout;