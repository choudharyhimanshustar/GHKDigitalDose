import React from "react";
import schoolImage from "./assests/schoolImage.png";
import Image from "./assests/IMAGE(D).png";
import Director from "./assests/Director.png";
const SchoolDescription = () => {
  return (
    <>
      <div style={{ width: "90vw", marginLeft:"5vw",marginRight:"5vw"}}>
        <img src={Image} alt="heroImage" />
      </div>
      <div class="flex  gap-20 justify-between DirectorMessage">
        {/* <div class='background flex justify-between	rounded-3xl place-items-center '>
                <span class='font-headerFont text-5xl text-[#8C1F1F] ml-20'>
                    DIRECTOR'S MESSAGE
                </span>
                <img src={image} />
            </div> */}
        {/* <div>
        <img src={image} alt="principleMessageImg" />
      </div> */}
        <div style={{ marginTop: "100px", marginLeft: "2.5rem" }}>
          <div class='DirectorimageDiv'>
            <img src={Director} class="DirectorImage" />
          </div>
          <div class='DirectorPara'>
            <h1
              style={{ fontWeight: "bold", color: "#8C1F1F", fontSize: "2rem" }}
            >
              DR. LAKHBIR KAUR VERMA
            </h1>
            <h2 style={{ fontWeight: "bold", color: "#8C1F1F" }}>DIRECTOR</h2>
            <p>
              Ever since I have been entrusted with the responsibility of
              stewarding the Guru Harkrishan High School & Jr. College of
              Commerce, I have taken it up as a divine dictate and committed
              myself to fulfill my obligations to Guru Harkrishan Education
              Society and the trust with which I have been empowered to fulfill
              my duties and always remind myself of the magnitude of
              responsibility that an educational institution has to shoulder.
              The purpose of an educational institution is not only to teach
              academic subjects but to ensure the holistic development of the
              pupils and prepare them to shoulder responsibilities as a house
              holder, as a helpful neighbour, a co-operative colleague, a
              patriotic citizen and as a magnanimous, tolerant member of the
              entire human race. It is the responsibility of the institution to
              make its pupils sensitive and appreciative of the environment and
              the wonderful creation of God in the form of murmuring rivers &
              rivulets, echoing vales and dales, and the roaring waves of the
              mighty sea and the vast canopy of the sky over our heads.
            </p>
            <br />
            <br />
            <br />
            <p>
              This unfeeling, unemotional, unaesthetic and indifferent attitude
              of the modern human society was lamented for by D.H. Lawrence when
              he exclaimed "For God's sake let us be men and not monkeys,
              minding machines". Today as never before the educational
              institutions are facing more challenges from diverse distracting
              factors which are influencing the impressionable minds of the
              students and diverting them towards dissipating and devastating
              pastime and pleasure pecked activities. In this present scenario,
              we at Guru Harkrishan High School & Jr. College of Commerce strive
              to bridge most of the gaps between the teacher and the taught with
              affection, patience and persuasion. We believe that even the
              hardcore deviants and defaulters can be won over by affectionate
              and human touch. This is the most formidable challenge which needs
              to be tackled most tactfully. It becomes the responsibility and
              the duty of the educationist to ensure that our Students are
              weaned away from all types of harmful influences. I must admit
              that I have been singularly fortunate to get the best support and
              co-operation from the managing committee always which has served
              as a morale booster to discharge my duties. I take this
              opportunity to acknowledge and appreciate the co-operation of my
              management, my teachers, the non- teaching and supporting staff
              and express my gratitude to all the parents who all are the
              pillars of this institution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolDescription;