import React from "react";
// import LawyerImage from "./images/scout.png";
import FieldTrips from "./images/FieldTrip.png";
import About from "./About";
// import "./fieldTrip.css";
import "./fieldTripNew.css";

const Fieldtrip = () => {
  return (
    <section id="home" className="lg:h-full lg:max-h-500 bg-white">
      <div className="container mx-auto h-full lg:flex pt-32  rounded-bl-3xl rounded-br-3xl">
        {/* bg-gradient-to-t from-[#E25744] to-[#ffffff] */}
        {/* left side */}
        <div className="text-center mx-auto h-full  lg:text-left  px-8 md:p-0">
          <img src={FieldTrips} class="" />
        </div>
        {/* Right Side */}
      </div>
      <About />
    </section>
  );
};

export default Fieldtrip;
