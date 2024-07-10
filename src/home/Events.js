import React, { useState, useEffect, useCallback } from "react";
import "../style/events.css";

function Events() {
  const [slideIndex, setSlideIndex] = useState(1);

  // Next/previous controls
  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const showSlides = useCallback((n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      n = 1;
    } else if (n < 1) {
      n = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
    setSlideIndex(n); // Set slide index after the animation
  }, []);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex, showSlides]);

  var ScrollInterval;

  setInterval(ScrollDiv, 400);

  function ScrollDiv() {
    var ecran = document.getElementById("ecran");

    if (ecran.scrollTop < ecran.scrollHeight - ecran.offsetHeight) {
      ecran.scrollTop = ecran.scrollTop + 1;
    } else {
      ecran.scrollTop = 0;
    }
  }
  function pauseDiv() {
    clearInterval(ScrollInterval);
  }

  function resumeDiv() {
    ScrollInterval = setInterval(ScrollDiv, 400);
  }

  return (
    <>
      <div className="layer-4">
        <div className="Events">
          <div className="Line3"></div>
          <div className="Event-header">Events</div>

          <div className="Frame30">
            <div className="mySlides fade1">
              <img
                src="/images/Sport-day-2.png"
                alt="sport-2"
                className="slide-carousel"
              />
              <div className="text">Yoga Day</div>
            </div>
            <div className="mySlides fade1">
              <img
                src="../images/Sport-day-1.png"
                alt="sport-1"
                className="slide-carousel"
              />
              <div className="text">Sports Day</div>
            </div>


            <div className="mySlides fade1">
              <img
                src="/images/Sport-day-3.png"
                alt="sport-3"
                className="slide-carousel"
              />
              <div className="text">Sravan Utsav</div>
            </div>

            <div className="mySlides fade1">
              <img
                src="/images/sport-day-4.png"
                alt="sport-4"
                className="slide-carousel"
              />
              <div className="text">Guru har krishnan sahib ji day</div>
            </div>

            <div className="mySlides fade1">
              <img
                src="/images/sport-day-5.png"
                alt="sport-5"
                className="slide-carousel"
              />
              <div className="text">Farewell</div>
            </div>

            <div className="mySlides fade1">
              <img
                src="/images/sport-day-6.png"
                alt="sport-6"
                className="slide-carousel"
              />
              <div className="text">Independence Day</div>
            </div>

            <div className="mySlides fade1">
              <img
                src="/images/sport-day-7.png"
                alt="sport-7"
                className="slide-carousel"
              />
              <div className="text">Guru Purnima</div>
            </div>

            <button className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="announcement-career">
          <div
            className="announcement"
            id="ecran"
            onMouseOver={pauseDiv}
            onMouseOut={resumeDiv}
          >
            <div className="rectangle35">
              <div
                className="Announcement-header"
                style={{
                  left: "17%",
                  top: "2%",
                  position: "absolute",
                  textAlign: "center",
                  color: "#CD5C5C",
                  fontSize: "3vw",
                  fontFamily: "Reem Kufi Fun",
                  fontWeight: "600",
                  letterSpacing: 0.72,
                  wordWrap: "break-word",
                  marginBottom: "10px",
                }}
              >
                Announcement
              </div>
              <div className="text-arrow">
                <div className="frame46">
                  <div className="arrow-image">
                    <img
                      src="../images/Default.png"
                      alt="arrow"
                      className="arw"
                    ></img>
                  </div>
                  <div className="text-ann">
                    Training for stage acting, classical dance, Kathak,
                    Bharatanatyam starting on regular basis from June 2023.
                    <span className="New" style={{ marginLeft: "38%" }}>
                      New
                    </span>
                  </div>
                </div>
                <div className="Line2"></div>

                <div className="frame46">
                  <div className="arrow-image">
                    <img
                      src="../images/Default.png"
                      alt="arrow"
                      className="arw"
                    ></img>
                  </div>
                  <div className="text-ann">
                    Admission Open for the year 2024-2025.
                    <span className="New" style={{ marginLeft: "0%" }}>
                      New
                    </span>
                  </div>
                </div>
                <div className="Line2"></div>

                <div className="frame46">
                  <div className="arrow-image">
                    <img
                      src="../images/Default.png"
                      alt="arrow"
                      className="arw"
                    ></img>
                  </div>

                  <div className="text-ann">
                    Sports academy where coaching is given for specific
                    interests.
                    <span className="New" style={{ marginLeft: "48%" }}>
                      New
                    </span>
                  </div>
                </div>
                <div className="Line2"></div>

                <div className="frame46">
                  <div className="arrow-image">
                    <img
                      src="../images/Default.png"
                      alt="arrow"
                      className="arw"
                    ></img>
                  </div>
                  <div className="text-ann">
                    Training for instrumental and vocal starting on regular
                    basis from June 2023.
                    <span className="New" style={{ marginLeft: "23%" }}>
                      New
                    </span>
                  </div>
                </div>
                <div
                  className="Line2"
                  style={{ width: 444, height: 0, border: "1px #F9D4D4 solid" }}
                ></div>

                <div className="frame46">
                  <div className="arrow-image">
                    <img
                      src="../images/Default.png"
                      alt="arrow"
                      className="arw"
                    ></img>
                  </div>
                  <div className="text-ann">
                    Summer Camp for students commencing from 18th April to 30th
                    April.
                    <span className="New" style={{ marginLeft: "40%" }}>
                      New
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="career">
            <div className="rectangle36">
              <div
                className="Career-header"
                style={{
                  left: "35%",
                  top: "2%",
                  position: "absolute",
                  textAlign: "center",
                  color: "#1D1753",
                  fontSize: "3vw",
                  fontFamily: "Reem Kufi Fun",
                  fontWeight: "600",
                  letterSpacing: 0.72,
                  wordWrap: "break-word",
                  marginBottom: "10px",
                }}
              >
                Career
              </div>
              <div className="text-arrow">
                <div className="frame46">
                  <div className="arrow-image">
                    <img
                      src="../images/Default-blue.png"
                      alt="arrow"
                      className="arw"
                    ></img>
                  </div>
                  <div className="text-ann-container">
                    <div className="text-ann">
                      We are hiring Teaching , administrative & house keeping
                      staff.
                      <div className="New" style={{ marginLeft: "82%" }}>
                        New
                      </div>
                    </div>
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

export default Events;
