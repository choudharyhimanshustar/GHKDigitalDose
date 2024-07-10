import React from "react";
import "../style/whyWe.css";
import { useEffect, useState } from "react";
import item1Img from "../Images/Frame17.svg";
import studentPic from "../Images/studentpic.png";
import teacherImg from "../Images/OBJECTS.png";
import winnerImg from "../Images/winner.png";
import alumniImg from "../Images/alumni.png";

function WhyWe() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const images = document.getElementsByClassName("image");

    const interval = setInterval(() => {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }

      setIndex((prevIndex) => (prevIndex + 1) % images.length);

      images[(index + 1) % images.length].style.display = "block";
    }, 1000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, [index]);
  return (
    <>
      <div className="whyGHK-header">
        Why Choose <span className="span-GHK">GURU HARKRISHAN</span>
      </div>
      <div className="chooseGHK">
        <div className="image-slideshow">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`image fade ${i === index ? "visible" : ""} image-fit`}
            >
              <div className="image-container">
                <img
                  src={`../images/Rectangle${i + 1}.png`}
                  className="image-fit"
                  alt={`img ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="cart-item">
          <div className="cart-item-1">
            <div className="item-1">
              <img
                src={item1Img}
                alt="teacher-img"
                style={{ height: "101px", width: "90px" }}
              ></img>
              <div className="teacher-div">
                Inspiring minds, shaping futures: Our dedicated teachers lead
                with passion and expertise.
                <div
                  className="LearnMore"
                  style={{
                    textAlign: "right",
                    color: "#FF6060",
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    fontWeight: "300",
                    lineHeight: 3,
                    letterSpacing: 0.16,
                    boxSizing: "border-box",
                  }}
                >
                  Learn more
                  <div
                    className="Line1"
                    style={{
                      width: 4,
                      height: 0,
                      background: "#FF6060",
                      border: "0.50px #FF6060 solid",
                      display: "inline-block",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="item-2">
              <img
                src={studentPic}
                alt="teacher-img"
                style={{ height: "72px", width: "90px", position: "relative" }}
              ></img>
              <div className="student-header">Students</div>
              <div className="student-div">
                Empowering minds, shaping futures: Our students excel in
                learning and leadership
                <div
                  className="LearnMore"
                  style={{
                    textAlign: "right",
                    color: "#60A9FF",
                    fontSize: "8px",
                    fontFamily: "Poppins",
                    fontWeight: "300",
                    lineHeight: 3,
                    letterSpacing: 0.16,
                    boxSizing: "border-box",
                  }}
                >
                  Learn more
                  <div
                    className="Line1"
                    style={{
                      width: 4,
                      height: 0,
                      background: "#60A9FF",
                      border: "0.50px #60A9FF solid",
                      display: "inline-block",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item-2">
            <div className="item-3">
              <img
                src={teacherImg}
                alt="teacher-img"
                style={{ height: "72px", width: "90px" }}
              ></img>
              <div className="sport-header">Sports</div>
              <div className="sport-div">
                Elevate your game, embrace the challenge, and conquer the field
                together. Unleash your potential in every play. Excellence in
                every game, unity in every play. Go team!
                <div
                  className="LearnMore"
                  style={{
                    textAlign: "right",
                    color: "#FF6060",
                    fontSize: 8,
                    fontFamily: "Poppins",
                    fontWeight: "300",
                    lineHeight: 3,
                    letterSpacing: 0.16,
                    boxSizing: "border-box",
                  }}
                >
                  Learn more
                  <div
                    className="Line1"
                    style={{
                      width: 4,
                      height: 0,
                      background: "#FF6060",
                      border: "0.50px #FF6060 solid",
                      display: "inline-block",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="item-row">
              <div className="item-4">
                <div>
                  <div className="achieve-header">Acheivements</div>
                  <div className="achieve-div">
                    Our dedicated teachers lead with passion and expertise. We
                    train students for state level Examinations
                  </div>
                </div>
                <div className="item-4-row">
                  <img
                    src={winnerImg}
                    alt="teacher-img"
                    style={{ height: "101px", width: "250px" }}
                  ></img>
                  <div
                    className="LearnMore"
                    style={{
                      textWrap: "nowrap",
                      textAlign: "right",
                      color: "#FF6060",
                      fontSize: 8,
                      fontFamily: "Poppins",
                      fontWeight: "300",
                      lineHeight: 3,
                      letterSpacing: 0.16,
                      boxSizing: "border-box",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Learn more
                    <div
                      className="Line1"
                      style={{
                        width: 4,
                        height: 0,
                        background: "#FF6060",
                        border: "0.50px #FF6060 solid",
                        display: "inline-block",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="item-5">
                <div>
                  <div className="alumni-header">Alumni+</div>
                  <div className="alumni-div">
                    Thriving alumni, lifelong connections, success stories
                    galore. Join our legacy, shape the future!
                  </div>
                </div>
                <div className="item-5-row">
                  <img
                    src={alumniImg}
                    alt="teacher-img"
                    style={{ height: "101px", width: "250px" }}
                  ></img>
                  <div
                    className="LearnMore"
                    style={{
                      textWrap: "nowrap",
                      textAlign: "right",
                      color: "#6C69FE",
                      fontSize: 8,
                      fontFamily: "Poppins",
                      fontWeight: "300",
                      lineHeight: 3,
                      letterSpacing: 0.16,
                      boxSizing: "border-box",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Learn more
                    <div
                      className="Line1"
                      style={{
                        width: 4,
                        height: 0,
                        background: "#6C69FE",
                        border: "0.50px #6C69FE solid",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyWe;
