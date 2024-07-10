import React from "react";
import "../style/home.css";
import WhyWe from "./WhyWe";
import Events from "./Events";
import WatchVideo from "./WatchVideo";
import MissionValue from "./MissionValue";
import HomeGallery from "./HomeGallery";
import heroImage from "../Images/Rectangle3.png";

function Home() {
  return (
    <div className="home-container" style={{ width: "100vw" }}>
      <div className="school-img">
        <img src={heroImage} alt="School" width="1260px" height="640px"></img>
        <div className="bottom-center" style={{ color: "#EBEDFF" }}>
          Welcome to our campus
        </div>
      </div>
      <div className="about-us">
        <div className="desc">
          <div className="div-about-us" style={{ color: "#1D1753" }}>
            About Us
          </div>
          <section
            className="para-about-us"
            style={{ color: "#150544", textAlign: "justify" }}
          >
            Our Mission is to shape young students to develop an active and
            creative mind who will then contribute to a knowledgeable and
            compassionate society. We ensure total development of a child which
            is not just restricted to academic areas but extends to the cultural
            and co-curricular activities committed to empowering the child for
            excellence and helping the child to have a rounded personality of
            growth in all areas.
          </section>
          <button className="about-more">Learn more</button>
        </div>
        <div className="abt-img">
          <img
            src="../images/chairperson-pic.png"
            className="about-us-img"
            alt="School"
            width="444.987px"
            height="538.235px"
          ></img>
        </div>
      </div>
      <WhyWe />
      <Events />
      <WatchVideo />
      <MissionValue />
      <HomeGallery />
    </div>
  );
}

export default Home;
