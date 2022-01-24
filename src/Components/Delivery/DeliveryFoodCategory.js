import React from "react";

const DeliveryFoodCategory = (props) => {
  return (
    <>
      <div className="bg-white hover:border border-gray-200 hover:shadow-xl p-3 rounded-xl">
        <div className="w-80 h-64">
          <img
            src={props.src}
            alt="Restaurant"
            className="w-full h-full  rounded-t-xl"
          />
        </div>
        <div>
          <div className="flex justify-between">
            <h3 className="py-2 text-base font-semibold px-4">Lucky Restaurant</h3>
            <span className="px-1 mt-1 text-white bg-red-500 font-medium h-7 rounded-xl font-light">4.9 *</span>
          </div>

          <div className="flex justify-between">
            <h3 className="py-1 text-base font-semibold font-light px-4">North India</h3>
            <h3 className="py-1 text-base font-semibold font-light px-4">$200 for one</h3>
          </div>

        </div>
      </div>
    </>
  );
};

export default DeliveryFoodCategory;