import React from "react";
import About from "./About";
import heroImage from "./img/prePrimaryHeroImage.png";
const Preprimary = () => {
  return (
    // <section id="home" className="my-10 lg:h-full lg:max-h-500 bg-white">
    //   <div className=" mx-5 h-full lg:flex pt-32 bg-gradient-to-t from-[#E25744] to-[#ffffff] rounded-bl-3xl rounded-br-3xl">
    //     {/* left side */}
    //     <div className="text-center mx-auto h-full  lg:text-left  px-8 md:p-0">
    //       <h1 className="font-primary font-black text-6xl lg:text-6xl text-[#8C1F1F] mb-4 lg:mt-[120px] leading-tight lg:leading-[80px] mx-2">
    //         Pre Primary School
    //         <br />{" "}
    //       </h1>
    //       <p className="max-w-sm mx-auto  mt-[150px] mb-[50px] text-3xl font-primary text-[#8C1F1F] lg:mx-w-[540px]">
    //         Learn, grow, inspire
    //       </p>
    //     </div>
    //     {/* Right Side */}
    //     <div className="md:flex  justify-center items-center">
    //       <img src={LawyerImage} alt="" />
    //     </div>
    //   </div>
    //   <About />
    // </section>
    <div style={{ marginBottom: "100px" }}>
      <div className="mx-5 mb-20 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      <About />
    </div>
  );
};

export default Preprimary;
