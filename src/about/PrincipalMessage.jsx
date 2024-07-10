import React from "react";
import Image from "./assests/IMAGE(P).png";
import PrincipalImage from "./assests/Principal.png";
const PrincipalMessage = () => {
  return (
    <div >
      {/* <div class="background flex justify-between	rounded-3xl place-items-center ">
        <h1 class="principal">PRINCIPAL'S MESSAGE</h1>
        <img src={image} class="mainImage" />
      </div> */}
      <div style={{ width: "90vw", marginLeft: "5vw", marginRight: "5vw" }} >
        <img src={Image} alt="heroImage" />
      </div>
      <div class=" flex  gap-20 justify-between PRINCIPALMESSAGE">
        <div style={{ marginTop: "100px", marginLeft: "2.5rem" }}>
          <div>
            <img src={PrincipalImage} class="PrincipalImage" />
          </div>
          <div style={{ width: "50%" }} class="PrincipalPara">
            <h1
              style={{ fontWeight: "bold", color: "#8C1F1F", fontSize: "2rem",width:"150%" }}
            >
              MANJIT KAUR ANAND
            </h1>
            <h2 style={{ fontWeight: "bold", color: "#8C1F1F" }}>PRINCIPAL</h2>
            <p>
              We live today in a world that is so very different from the one we
              grew up in, the one were educated in. The world today is changing at
              such an accelerated rate and We as educators need to pause and
              reflect on this entire system of Education. We at Guru Harkrishan
              High School & Junior College of Commerce work at implementing a well
              balanced curriculum to ensure that the children who walk into the
              portals of our school will not just love their school years but
              truly be prepared to face life's challenges.TO MOTIVATE THE WEAK, TO
              ADDRESS THE AVERAGE AND CHALLENGE THE GIFTED" is the teaching vision
              of our school. We pride ourselves to help them grow and develop into
              sensitive and responsible citizens of the next generation.At Guru
              Harkrishan High School &Junior College of Commerce, we focus on
              complete development of our students by involving them in both
              scholastic & co-scholastic activities as suggested by the Board.
              Children learn a lot of values when they are involved in Sports &
              Games. Some of these life skills &values cannot be taught in the
              classroom or at home.
            </p>
            <br />
            <br />
            <br />
            <p>
              Guru Harkrishan High School provides enough opportunities for the
              children to participate in Sports & games.I am sure this will help
              our children to realize, understand &explore their talents. In order
              to do this, the parents and the school authorities must work
              together to inculcate certain values in the students. "Sound body
              has a Sound Mind."Let us allow our children to develop physically&
              mentally. A committed and supportive management, dedicated teachers,
              caring and co-operative parents blend harmoniously to create a
              child-centric school. Teamwork is the hall mark of Guru Harkrishan
              High School. I am very sure through collaborative effort we can
              achieve more to benefit our students who are the future leaders of
              tomorrow.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PrincipalMessage;