import React from "react";
import about from "../assets/img/about1.png";
import arrow from "../assets/img/Default.png";
import RotatingGallery from "../../util/slider";
import sliderImage1 from "./img/sliderImage1.jpeg";
import sliderImage2 from "./img/sliderImage2.jpeg";
import sliderImage3 from "./img/sliderImage3.jpeg";

const About = () => {
  const imageArr = [sliderImage1, sliderImage2, sliderImage3];
  return (
    <div id="about" className="lg:px-60 pt-5 ">
      <div>
        <RotatingGallery imageArray={imageArr} speed={2000} />
      </div>
      <br />
      <div>
        <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 px-10"></div>
        <p className="text-lg text-gray leading-7 px-34 sm:px-32">
          In the long journey of 44 years, Guru Harkrishan High School has been
          bringing out the best and all round development of students in the
          field of education. Secondary section of the school provides:
          <br />
          <span className="text-primary font-bold">
            Our Primary school caters to
          </span>
          <div>
            <br />
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Academic Excellence</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Life skill programmes</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Project method teaching learning process
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Computer education</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Participation in inter school competitions
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Library facility to all students</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Extra-curricular activities like dance, music, sports
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6  mr-2" />
              <h2 className="text-xl ">
                Participation in Olympiad Exam, Hindi Rashtrabhasha exams,
                Elementary & Intermediate Drawing exam.
              </h2>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
