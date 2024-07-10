import React from "react";
import about from "../assets/img/jcollege.png";

const About = () => {
  return (
    <div id="about" className="py-10">
      <div className="grid md:grid-cols-2 gap-10 place-items-center">
        <div>
          <p className="text-xl text-gray leading-7 mx-10 sm:mx-40 ">
            The fore founders of our Institution dreamt of imparting quality
            education to all sections of students including the economically and
            socially backward sections of the society. We are proud to state
            that in the last few years we have succeeded in realizing the dreams
            of our students. Our junior college has well qualified and trained
            teachers to teach our adolescent students and develop them to become
            responsible citizens.
          </p>
        </div>
        <div className="border-y-[20px] border-l-[20px] border-solid bg-[#FFDEDE] border-[#FFDEDE] rounded-l-[90px] ">
          <img src={about} alt="" className="h-20px rounded-l-[90px]" />
        </div>
        <br />
      </div>
      <div>
        <h2 className="flex center text-[#8C1F1F] font-bold text-xl text-center">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            MISSION AND VISION
          </div>
        </h2>
        <p className="text-lg text-gray leading-7 sm:px-32">
          Our Mission is to shape young students with an active creative mind
          who will contribute to a knowledgeable and compassionate society. We
          ensure total development of the student which is not just restricted
          to academic areas but extending to cultural & co-curricular
          activities. We are committed to empower the student for excellence. To
          develop students who are sensitive, resilient, able to navigate life
          with compassion and who will strive to create a harmonious society. In
          our Junior college we work to develop the self confidence of the pupil
          and are committed that two years being with us, the students would be
          ready to face the challenges of higher education. Individual coaching
          and attention is given to students. Remedial classes are conducted for
          the weak students.
        </p>
      </div>
    </div>
  );
};

export default About;
