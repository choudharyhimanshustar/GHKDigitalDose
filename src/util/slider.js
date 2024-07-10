import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RotatingGallery({ imageArray, speed }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: speed,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {imageArray.map((image, index) => (
          <div key={index} className="">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={style.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
const style = {
  sliderImage: {
    // boxShadow: "10px 10px 54px -23px #F08080",
    boxShadow: "",
    // borderRight: "4px solid #F08080",
    borderRight: "",
    // borderBottom: "4px solid #F08080",
    borderBottom: "",
    borderRadius: "20px",
    padding: "0px 30px",
  },
};
