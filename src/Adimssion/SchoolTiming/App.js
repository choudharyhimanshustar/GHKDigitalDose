import React from "react";
import "./App.css"; // Import your CSS file for styling
import timing from "./timing.png";
import PREPRIMARY from "./PREPRIMARY.gif";
import PREPRIMARYJS from "./PREPRIMARYJS.gif";
import PRIMARYANDSECONDARY from "./PRIMARYANDSECONDARY.gif";
import OFFICETIMINGS from "./OFFICETIMINGS.gif";
import OFFICETIMINGS1 from "./OFFICETIMINGS.gif";
import JUNIORCOLLEGE from "./JUNIORCOLLEGE.gif";
import JUNIORCOLLEGEP from "./JUNIORCOLLEGEP.gif";

function SchoolTiming() {
  return (
    <div className="schoolTimingApp">
      <div className="schoolContainer">
        {/*<header className="header">Header</header>*/}
        <div className="main-content">
          <div className=" rounded-lg flex  justify-center items-center">
            <img src={timing} alt="" className="p-4" />
          </div>
          <div className="content-container">
            <div className="content-item ">
              <div className="img">
                <h3 className="timing-name">
                  PRE PRIMARY
                  <br />
                  (NURSERY)
                </h3>
                <div style={{ position: "relative" }}>
                  <img
                    class="Ellipse12 "
                    src={PREPRIMARY}
                    alt="Timeline of a child in nursery"
                    height="265px"
                  />
                </div>
                <p className="college-time">09:00 A.M.-12:00 P.M.</p>
                {/* <div className="overlay-image1"></div> */}
              </div>

            </div>
            <div className="content-item">
              <div className="preprimaryimg">
                <h3 className="timing-name">
                  PRE-PRIMARY (JR.KG/
                  <br />
                  SR.KG)
                </h3>
                <div style={{ position: "relative" }}>
                  <img
                    class="Ellipse12"
                    src={PREPRIMARYJS}
                    alt="Pre-Primary junior & senior"
                    height="265px"
                  />
                </div>
                <p className="college-time">08:30 A.M.-01:00 P.M.</p>
                {/* <div className="overlay-image2"></div> */}
              </div>
            </div>
            <div className="content-item">
              <div className="primsecondimg">
                <h3 className="timing-name">
                  PRIMARY/SECONDARY
                  <br />
                  <br />
                </h3>
                <div style={{ position: "relative" }}>
                  <img
                    class="Ellipse12"
                    src={PRIMARYANDSECONDARY}
                    alt="primary and secondary"
                    height="265px"
                  />
                </div>
                <p className="college-time">07:30 A.M.-01:45 P.M.</p>
                {/* <div className="overlay-image3"></div> */}
              </div>
            </div>
          </div>
          <div className="double-content">
            <h3 className="heading">OFFICE TIMINGS</h3>

            <div className="box">
              <div className="img1" style={style.middleClocks}>
                <img
                  src={OFFICETIMINGS}
                  alt="office timing from monday to friday"
                  height="265px"
                  className="imgmy"
                />
                <p className="p1">09:00 A.M.-05:00 P.M.</p>
                <p className="p2">(MONDAY - FRIDAY)</p>
              </div>
              <div className="img2" style={style.middleClocks}>
                <img
                  src={OFFICETIMINGS1}
                  alt="office timing for saturday"
                  height="265px"
                  className="imgmy"
                />
                <p className="p1">09:00 A.M.-04:00 P.M.</p>
                <p className="p2">SATURDAY</p>
              </div>
              <div className="overlay-image4"></div>
            </div>
            <p className="sentence">
              Special Consultation ONLY by appointment on working days.
            </p>
          </div>
        </div>
        <div className="centered-divs">
          <div className="centered-div1">
            <div className="juniorclgimg">
              <h3 className="collegetype">
                JUNIOR COLLEGE <br />
                <br />
              </h3>
              <div style={{ position: "relative" }}>
                <img
                  class="Ellipse13"
                  src={JUNIORCOLLEGE}
                  alt="Junior college timing"
                  
                />
              </div>
              <p className="collegetime">08:00 A.M.-01:40 P.M.</p>
              {/* <div className="overlay-image5"></div> */}
            </div>
          </div>
          <div className="centered-div2">
            <div className="jrclgpracticalimg">
              <h3 className="collegetype">
                JUNIOR COLLEGE - <br />
                (IT)PRACTICALS
              </h3>
              {/* <img
              src={JUNIORCOLLEGEP}
              alt="junior college practical timings"
              height="350px"
            /> */}
              <div style={{ position: "relative" }}>
                <img class="Ellipse13" src={JUNIORCOLLEGEP} alt="clock" />
              </div>
              <p className="collegetime">02:00 P.M.-03:00 P.M.</p>
              {/* <div className="overlay-image6"></div> */}
            </div>
          </div>
        </div>
      </div>

      {/*<footer className="footer">Footer</footer>*/}
    </div>
  );
}

const style = {
  middleClocks: {
    transform: "scale(0.65)",
  },
};

export default SchoolTiming;
