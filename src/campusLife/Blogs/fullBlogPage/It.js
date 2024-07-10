import React from "react";
import LawyerImage from "../../Images/OBJECTS.png";
import About from "./About";
const It = () => {
  return (
    <section id="home" className="lg:h-full lg:max-h-500 bg-white">
      <div className=" mx-auto h-full lg:flex pt-32 bg-gradient-to-t from-[#E25744] to-[#ffffff] rounded-bl-3xl rounded-br-3xl">
        {/* left side */}
        <div className="text-center mx-auto h-full  lg:text-left  px-8 md:p-0">
          <h1 className="font-primary font-black text-5xl lg: text-[#8C1F1F] mb-4 lg:mt-[120px] leading-tight lg:leading-[80px] mx-2">
            Information Technology
            <br />{" "}
          </h1>
          <p className="max-w-sm mx-auto  mt-[150px] mb-[50px] text-1xl font-primary text-[#8C1F1F] lg:mx-w-[540px]">
            By Madhukar Tonpe, 17th Sept 2017
          </p>
        </div>
        {/* Right Side */}
        <div className="md:flex  justify-center items-center">
          <img src={LawyerImage} alt="" />
        </div>
      </div>
      <About />
    </section>
  );
};

export default It;
