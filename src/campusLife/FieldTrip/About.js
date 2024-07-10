import React, { useEffect, useState } from "react";
import arrow from "./images/Default.png";
import FieldSlide2 from "./images/FieldSlide2.png";
import FieldSlide3 from "./images/FieldSlide3.png";
import FieldSlide1 from "./images/FieldSlide1.png";
import RotatingGallery from "../../util/slider";

const About = () => {
  const imageArr = [FieldSlide1, FieldSlide2, FieldSlide3];
  return (
    <div id="about" className="lg:px-60  ">
      <div className="FieldTripContainer">
        <h1>Nehru Science Centre</h1>
      </div>

      {/* <div className="FieldTripImageContainer">
        <img src={FieldSlide1} />
        <img src={FieldSlide2} />
        <img src={FieldSlide3} />
      </div> */}
      <div>
        <RotatingGallery imageArray={imageArr} speed={2000} />
      </div>
      <br />
      <div>
        <p className="FieldTripPara">
          To help bridging the gap between education and hands on experience,
          field trips are organized by the institution that are related to the
          educational curriculum. Hands on experience produce questions and
          answers that help to shape a child's future.
          <br />
          <div>
            <br />
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Excursion</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl "> Trip to Science Centre</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Participation in Science Exhibition</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Visit to Nature Park</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Visit to Nehru Planetarium</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Visit to Museums</h2>
            </div>
          </div>
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
