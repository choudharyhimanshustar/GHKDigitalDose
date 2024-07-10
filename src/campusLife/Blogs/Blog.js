import React from "react";
import heroImage from "./img/blogimage.png";
import About from "./About";
const Blog = () => {
  return (
    <section
      id=""
      className="lg:h-full lg:max-h-500 bg-white"
    >
      
      {/* <div className="container mx-auto h-full lg:flex pt-32 bg-gradient-to-t from-[#E25744] to-[#ffffff] rounded-bl-3xl rounded-br-3xl"> */}
        {/* left side */}
        {/* <div className="text-center mx-auto h-full  lg:text-left  px-8 md:p-0">
          <h1 className="font-primary font-black text-6xl lg:text-6xl text-[#8C1F1F] mb-4 lg:mt-[120px] leading-tight lg:leading-[80px] mx-2">
          SCHOOL/<br />College Blogs{" "}
            
          </h1>
        </div> */}
        {/* Right Side */}
        {/* <div className="md:flex  justify-center items-center">
          <img src={LawyerImage} alt="" />
        </div>
      </div> */}
      <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      <About />
    </section>
    
  );
};

export default Blog;
