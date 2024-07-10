import React from "react";
import sliderImage3 from "./img/prePrimary1.png";
import sliderImage1 from "./img/sliderImage1.png";
import sliderImage2 from "./img/sliderImage2.png";
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
          The Pre–Primary section mostly focuses on providing fun-filled
          education and learning environment to the children. Moreover, it’s a
          place where children can interact socially with other children and
          develop the quality of working in a group. Apart from concentrating on
          the learning ability of the child, it also emphasizes on their all
          round development. It looks into the intuitive, psychological and
          ethical factors. The atmosphere inside and outside the campus makes a
          perfect environment for kids to open up their thoughts and help them
          to grow. The best Pre–Primary has features like massive classes,
          dancing space, music space, activity space and many more. The teachers
          of this section go through training programmes after regular durations
          to keep themselves updated with the latest methods of teaching.
          Moreover, the institution arranges magic shows, puppet shows, social
          festivals to make Pre-school days an interesting part of life. This is
          the period of greater development, when the mind develops rapidly.
        </p>
      </div>
    </div>
  );
};

export default About;
