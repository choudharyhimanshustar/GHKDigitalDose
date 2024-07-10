import React from "react";
import about from "./img/BulbulGirlSlide2.png";
import RotatingGallery from "../../util/slider";
import sliderImage1 from "./img/sliderImage1.png";
import sliderImage2 from "./img/sliderImage2.png";
import sliderImage3 from "./img/sliderImage3.jpeg";

const About = () => {
  const imageArr = [sliderImage1, sliderImage3, sliderImage2];
  return (
    <div id="about" className="lg:px-60 pt-40 ">
      <div>
        <RotatingGallery imageArray={imageArr} speed={2000} />
      </div>
      <div>
        <h2 className="flex  justify-center items-center font-bold ">
          The scout guide movement is basically introduced to develop the
          personality of the student. We believe that if we catch the children{" "}
          <br /> early we can train and discipline them to be prepared for the
          future challenges.
        </h2>
      </div>
      <br />
      <div>
        <p className="text-lg text-gray leading-7 sm:px-32 p">
          We at Guru Harkrishan high School have started the chapter of Bulbul,
          Girl Guide, cub and scout in our institution. We want our students to
          be good citizen of the future. This programme enables our students to
          develop their interest, to express themselves creatively and also
          develop a sense of respect for elders, love for their fellow beings
          and a spirit of co-operation.We are confident that our students will
          not only be happy with this programme but will be satisfied with their
          own personality development. This programme will also enable them to
          know more about their surroundings, their environment and the culture
          of their own country.This is a well designed programme which will open
          new horizons for the students and will help them to take up the
          challenges of life which in turn will wins them admiration. Besides
          academic excellence our students will be trained to be good citizens,
          contributing to the society by respecting the law of the land. Our
          students will be strong and thereby strengthen the fabric of the
          society. This is a programme of the students, for the students and by
          the students.
        </p>
      </div>
    </div>
  );
};

export default About;
