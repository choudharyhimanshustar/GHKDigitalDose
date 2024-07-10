import React from "react";
import "../style/missionValue.css";
import valueImg from "../Images/visionMaskGroup.png";
import scrollDotActiveImg from "../Images/scrollDotInActive.png";
import scrollDotImg from "../Images/scrollDotActive.png";

function MissionValue() {
  return (
    <>
      <div className="mission-value-header">
        <span className="span-GHK">Mission </span> and{" "}
        <span className="span-GHK"> Values</span>
      </div>
      <div className="mission-values">
        <div className="missionValue">

       
        <div className="mission">
          <div className="mission-img">
            <img
              src="../images/Group23.png"
              alt="mission-img"
              width="178px"
              height="180.36px"
            ></img>
          </div>
          <div className="Rectangle57">
            <div className="mission-para">
              <div className="Mission-header">Mission</div>
              <div className="msn-para">
                Empowering high school and college students to excel
                academically and personally. Fostering a dynamic learning
                environment, promoting growth, and preparing students for future
                success through innovation, collaboration, and personalized
                education.
              </div>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="value-img">
            <img
              src={valueImg}
              alt="mission-img"
              width="178px"
              height="180.36px"
            ></img>
          </div>
          <div className="Rectangle58">
            <div className="values-para">
              <div
                className="Values-header"
                style={{
                  textAlign: "center",
                  color: "#8C1F1F",
                  fontSize: 36,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  letterSpacing: 0.72,
                  wordWrap: "break-word",
                }}
              >
                Values
              </div>
              <div className="val-para">
                Security, Integrity & Commitment: We foster a culture of
                creativity and continuous learning, uphold unwavering ethical
                standards, and celebrate diversity. Our commitment is to empower
                students for success in a dynamic world, equipping them with
                knowledge, skills, and a sense of global responsibility.
                <br />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        <div style={{marginBottom:"50px",display:"flex",justifyContent:"center"}}>
          <img src={scrollDotImg} alt="scrollDot"/>
          <img src={scrollDotActiveImg} alt="scrollDot"/>
        </div>
    </>
  );
}

export default MissionValue;
