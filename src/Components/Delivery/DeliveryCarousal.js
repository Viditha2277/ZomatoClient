import React from "react";

import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
  return (
    <>
      <div className="mx-52 mt-5">

      <div className="flex flex-wrap justify-around gap-3 mt-5">
        <DeliveryFoodCategory src="https://b.zmtcdn.com/data/pictures/chains/6/94336/b11958906834b77171383978608a20ef_o2_featured_v2.jpg" />
        <DeliveryFoodCategory src="https://b.zmtcdn.com/data/pictures/chains/9/91999/1ab44247d8a98712e07dd1dc3ef7cc97_o2_featured_v2.jpg"/>
        <DeliveryFoodCategory src="https://b.zmtcdn.com/data/pictures/chains/9/19852299/dad25168a8280e4f392201149347d168_o2_featured_v2.jpg"/>
      </div>

      </div>
    </>
  )
};

export default DeliveryCarousal;