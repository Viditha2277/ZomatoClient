import React from "react";

const Collections = (props) => {
  return (
    <>
      <div className=" rounded-xl">
        <div className="w-64 h-80">
          <img
            src={props.src}
            alt="Restaurant"
            className="w-full h-full  rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Collections;