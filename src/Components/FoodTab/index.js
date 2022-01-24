import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {GiScooter, GiKnifeFork} from "react-icons/gi";
import {IoBeerOutline} from "react-icons/io5";

const MobileTab = () => {

  let iconStyles = { color: "red", size: "40px"};

  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <GiScooter style={iconStyles}/>,
      name:"Delivery",
      isActive: false
    },
    {
      id: "night",
      icon: <IoBeerOutline style={iconStyles}/>,
      name:"Night Life",
      isActive: false
    },
    {
      id: "dining",
      icon: <GiKnifeFork style={iconStyles}/>,
      name:"Dining Out",
      isActive: false
    }
  ]);

  const {type} = useParams();

  return (
    <>
      <div className="bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-500 border">
        {allTypes.map((items)=>(
          <Link to={`/${items.id}`}>
            <div
              className={
                type===items.id
                ? "flex flex-col items-center text-xl relative text-red-400 border-t-2 border-red-500"
                : "flex flex-col items-center text-xl"
              }
            >
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>
        ))
        }
      </div>
    </>
  );
};



const LargeTab = () => {

  let iconStyles = { color: "red", size: "40x"};

  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <GiScooter style={iconStyles}/>,
      name:"Delivery",
      isActive: false
    },
    {
      id: "night",
      icon: <IoBeerOutline style={iconStyles}/>,
      name:"Night Life",
      isActive: false
    },
    {
      id: "dining",
      icon: <GiKnifeFork style={iconStyles}/>,
      name:"Dining Out",
      isActive: false
    }
  ]);

  const {type} = useParams();

  return (
    <>
      <div className="py-3 z-10 flex items-center justify-start gap-x-20 ml-52 text-gray-500 ">
        {allTypes.map((items)=>(
          <Link to={`/${items.id}`}>
            <div
              className={
                type===items.id
                ? "flex flex-col items-center text-xl text-red-400"
                : "flex flex-col items-center text-xl"
              }
            >
                <div
                  className={
                    type===items.id && "w-full h-2 border-b-2 border-red-400"
                  }
                />
                <div className="flex items-center">
                    {items.icon}
                    <h5 className=" ml-2 text-md">{items.name}</h5>
                </div>
            </div>
          </Link>
        ))
        }
      </div>
    </>
  );
};



const FoodTab = () => {
  return (
    <>
        <div className="md:hidden">{/*Mobile Screen*/}
          <MobileTab />
        </div>
        <div className="hidden md:flex lg:hidden">{/*Tablet Screen*/}
          <LargeTab />
        </div>
        <div className="hidden lg:flex">{/*Large Screen*/}
          <LargeTab />
        </div>
    </>
  );
};

export default FoodTab;