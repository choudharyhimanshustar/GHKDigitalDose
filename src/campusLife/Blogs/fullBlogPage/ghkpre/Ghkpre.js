import React from "react";
import LawyerImage from "../Img/preHeroImg.png";
import About from "./About";
const Ghkpre = () => {
  return (
    <section
      id=""
      className="lg:h-full lg:max-h-500 bg-white"
    >
      
      {/* <div className="container mx-auto h-full lg:flex pt-32 bg-gradient-to-t from-[#E25744] to-[#ffffff] rounded-bl-3xl rounded-br-3xl"> */}
        {/* left side */}
        {/* <div className="text-center mx-auto h-full  lg:text-left  px-8 md:p-0">
          <h1 className="font-primary font-black text-4xl lg: text-[#8C1F1F] mb-4 lg:mt-[120px] leading-tight lg:leading-[80px] mx-2">
          Guru Harkrishan <br />High School - Pre-PrimarySection

            
          </h1>
          <p className="max-w-sm mx-auto  mt-[150px] mb-[50px] text-1xl font-primary text-[#8C1F1F] lg:mx-w-[540px]">
          By Sarita Colvalkar, 17th Sept 2016
          </p>
        </div> */}
        {/* Right Side */}
        {/* <div className="md:flex  justify-center items-center">
          <img src={LawyerImage} alt="" />
        </div>
      </div> */}
      <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={LawyerImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      <About />
    </section>
    
  );
};

export default Ghkpre;
