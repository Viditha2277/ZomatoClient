import React, {useState} from "react";
import {useParams, Link} from "react-router-dom";
//import {GiScooter, GiKnifeFork} from "react-icons/gi";
//import {IoBeerOutline} from "react-icons/io5";


const MobileTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      src: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
      name:"Order Food Online"
    },
    {
      id: "outing",
      src: "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
      name:"Go Out for a Meal"
    },
    {
      id: "pro",
      src: "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
      name:"Zomato Pro"
    },
    {
        id: "clubs",
        src: "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
        name:"NightLife & Clubs"
      }
  ]);

  const {type} = useParams();

  return (
    <>

    <div className="flex justify-center">
        <img src="https://assets.entrepreneur.com/images/misc/1507195472_Screen%20Shot%202017-10-05%20at%201.23.56%20PM.png"
            className="mb-8 h-full w-full"
        ></img>
    </div>

      <div className="flex items-center justify-center gap-x-3 text-black">
        {allTypes.map((items)=>(
          <Link to={`/${items.id}`}>
            <div>
                <img src={items.src}
                    className="h-56 rounded-xl border-t-2 drop-shadow-lg z-10 w-64"
                ></img>
                <h5 className="text-xl flex justify-center mt-3">{items.name}</h5>

            </div>
          </Link>
        ))
        }
      </div>
    </>
  );
};

const HomeTab = () => {
  return (
    <>
      <div>
        <MobileTab />
      </div>
    </>
  );
};

export default HomeTab;