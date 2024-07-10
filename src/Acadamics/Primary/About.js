import React from "react";
import about from "../assets/img/primary.png";
import arrow from "../assets/img/Default.png";
import sliderImage1 from "./img/sliderImage1.jpeg";
import sliderImage2 from "./img/sliderImage2.jpeg";
import sliderImage3 from "./img/sliderImage3.jpeg";
import RotatingGallery from "../../util/slider";

const About = () => {
  const imageArr = [sliderImage1, sliderImage2, sliderImage3];
  return (
    <div id="about" className="lg:px-60 pt-5 ">
      <div>
        <RotatingGallery imageArray={imageArr} speed={2000} />
      </div>
      <br />
      <div>
        <p className="text-lg text-gray leading-7 sm:px-32">
          Primary school is the second phase where we promote in a child, a
          positive self-esteem to encourage independence, to develop skills of
          concentration and more importantly inculcate moral values through our
          daily interaction.
          <br />
          <span className="text-primary font-bold">
            Our Primary school caters to
          </span>
          <div>
            <br />
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Child centered and child friendly education.
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl "> Activity oriented and skill based</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Eclectic approach</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">A holistic approach</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Ample of scope for self-learning and learning to learn
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">Library facility to all students</h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Development of cognitive, emotional and intellectual domains
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6  mr-2" />
              <h2 className="text-xl ">
                To strengthen and enrich learning of English language
              </h2>
            </div>
          </div>
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
