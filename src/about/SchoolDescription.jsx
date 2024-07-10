import React from "react";
import schoolImage from "./assests/schoolImage.png";
import image from "./assests/image.JPG";
import IMAGE from "./assests/IMAGE.png";

const SchoolDescription = () => {
  return (
    <div>
      <div style={{ width: "90vw", marginLeft:"5vw",marginRight:"5vw"}}>
        <img src={IMAGE} alt="heroImage" />
      </div>
      <div class="flex  gap-20 justify-between schoolDescription">
        {/* <div class="background flex justify-between	rounded-3xl place-items-center ">
        <div style={{ position: "relative", height: "100px", left: "25%" }}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "36px",
              color: "#8C1F1F",
              position: "absolute",
              top: "100%",
              transform: "translate(-50%, -50%)",
            }}
          >
            ABOUT SCHOOL/COLLEGE HISTORY
          </h1>
        </div> */}

        {/* <img src={image} class='mainImage'/> */}
        {/* </div> */}
        <div class='schoolDiv'>
          <img src={schoolImage} class="schoolImage" />

          <div class="schoolPara">
            <h1 class="font-headerFont text-3xl text-[#8C1F1F]">SCHOOL</h1>
            <p className="w-[70vw]">
              Our school is an institution designed to provide learning spaces
              and learning environments for the students under the guidance of
              the teachers.
            </p>
            <br />
            <br />
            <br />
            <h1 class="font-headerFont text-3xl text-[#8C1F1F]">SCHOOL LIFE</h1>
            <p className="w-[70vw]">
              “School life is the best life” and life is all about learning for
              something new & being innovative. Our school gives education,
              joyful life and creates healthy learning space for child about
              each different aspects of learning. Schooling is the most
              important part of a child’s life and it should be really free from
              the care and worries. Schools build the character of students.
              This is the formative period for students. Each and every student
              should try to make his/her life worthy and make best use of the
              time spent in school because it never comes again once the school
              sessions get completed.
            </p>
            <br />
            <br />
            <br />
            <h1 class="font-headerFont text-3xl text-[#8C1F1F]">
              JUNIOR COLLEGE OF COMMERCE
            </h1>
            <p className="w-[70vw]">
              Our junior college has well qualified and trained teachers to
              teach our adolescent students. Discipline is the key towards
              progress and our students consistently have given us good results
              at the State Board examinations because of their sense of
              discipline and dedication which is inculcated by our teachers.
              Individual coaching to the weak students is given as a part of the
              curriculum and all care is taken to help the needy students. We
              believe that the learning process must give happiness to the
              students. We also give them life skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDescription;