import React from "react";

//Hoc's
import HomeLayoutHOC from "./HOC/Home.Hoc";
import DefaultLayoutHOC from "./HOC/Default.Hoc";
import FoodLayoutHOC from "./HOC/Food.Hoc";

//Components
//import Temp from "./Components/temp";
//import Navbar from "./Components/Navbar/index";
import FoodTab from "./Components/FoodTab/index";
import HomeTab from "./Components/HomeTab/index";
import Delivery from "./Components/Delivery/index";
import Dining from "./Components/Dining/index";
import Night from "./Components/Night";


function App() {
  return (
    <>
      <DefaultLayoutHOC path="/" exact component={HomeTab} />
      <FoodLayoutHOC path="/food" exact component={FoodTab} />
      <HomeLayoutHOC path="/delivery" exact component={Delivery} />
      <HomeLayoutHOC path="/night" exact component={Night} />
      <HomeLayoutHOC path="/dining" exact component={Dining} />
    </>
  );
}

export default App;

