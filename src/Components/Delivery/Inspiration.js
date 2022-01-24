import React from "react";
import Slider from "react-slick";

//Components
import {PrevArrow, NextArrow} from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ItemsCard = (props) => {
  return (
      <>
        <div className="">
          <img
            className = "w-36 h-36 rounded-full"
            src={props.src}
            alt="Items Card"
          />
        </div>
      </>
  );
};



const ItemsCardSlider = () => {

  var x=0
  var y=0

  const itemImage = [
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
  ];

  const itemName = [
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani",
    "Biryani"
  ];

  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <>
      <div className="">
      <Slider {...settings}>
      {itemImage.map((image)=> (
        <div className="">
          <ItemsCard src={image} />
          <h3 className="mt-4 font-semibold text-center">
            {itemName[x++]}
          </h3>
        </div>
      ))}
      </Slider>
      </div>
    </>
  )
};

export default ItemsCardSlider;