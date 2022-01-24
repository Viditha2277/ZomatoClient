import React from "react";
import { Route } from "react-router-dom";

//Layouts
import FoodLayout from "../Layout/Food.layout";

const FoodLayoutHOC = ({ component: Component , ...rest }) => {
  return (
    <>
    <Route
    {...rest}
    component = {(props) => (
      <FoodLayout>
       <Component {...props} />
      </FoodLayout>
    )}
     />
    </>
  );
};

export default FoodLayoutHOC;