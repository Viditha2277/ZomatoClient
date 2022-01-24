import React from "react";

import Collections from "./Collections";


const CollectCarousal = () => {
  return (
    <>
      <div className="mx-52 mt-5">

      <div className="flex flex-wrap justify-around gap-1 mt-5">
        <Collections src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw3aQ-cjW3utQ5BN9VlDUtCoH-mjFiA0lOA&usqp=CAU" />
        <Collections src="https://urbanmatter.com/chicago/wp-content/uploads/2018/02/26865540_185005638916726_8274727307218780160_n-1.jpg"/>
        <Collections src="https://images.pexels.com/photos/1798130/pexels-photo-1798130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <Collections src="https://images.pexels.com/photos/1798130/pexels-photo-1798130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      </div>

      </div>
    </>
  )
};

export default CollectCarousal;