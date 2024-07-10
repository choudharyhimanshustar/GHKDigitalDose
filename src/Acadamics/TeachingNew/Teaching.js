import React from "react";
import LawyerImage from "./assets/img/Teachingmeth.png";
import PrePrimary from "./PrePrimary";
import Secondarys from "./Secondary";
import Jr from "./Jr";
import heroImage from "./TeachingMethodHeroImage.png";
import Primary from "./Primary";

const Teaching = () => {
  return (
    <div id="home" className="lg:h-full lg:max-h-500 bg-white">
      <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      <PrePrimary />
      <Primary/>
      <Secondarys />
      <Jr />
    </div>
  );
};

export default Teaching;
