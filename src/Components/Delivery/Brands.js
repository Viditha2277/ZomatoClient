import React from "react";

const BrandCard = (props) => {
  return (
      <>
        <div className="">
          <img
            className = "w-36 h-36 rounded-full"
            src={props.src}
            alt="Cast Card"
          />
        </div>
      </>
  );
};


const BrandCardSlider = () => {

    var x=0
    var y=0

  const BrandImage = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/7a445a4d8b6431931d880d2c6e06078e_1638686557.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/2434be297f9c3926b4afddefd63b180e_1605118100.png",
    "https://b.zmtcdn.com/data/brand_creatives/logos/e58364e86ce96c4b9c798bc25c8a7c42_1629953010.png"
    ];

  const BrandName = [
    "Shah Ghouse Hotel",
    "Pista House",
    "KFC",
    "Paradise Biryani",
    "Swiss Castle",
    "Behrouz Biryani"
];

  const Time = [
    "51 min",
    "51 min",
    "46 min",
    "43 min",
    "42 min",
    "54 min"
];

  return (
    <>
      
     <div className="flex items-center justify-center gap-x-10 mx-52 my-10">
     {BrandImage.map((image)=> (
        <div className="">
          <BrandCard src={image} />
          <h3 className="font-semibold text-center">
            {BrandName[x++]}
          </h3>
          <p className="font-light text-center">
            {Time[y++]}
          </p>
        </div>
      ))}
     </div>
      
    </>
  )
};

export default BrandCardSlider;