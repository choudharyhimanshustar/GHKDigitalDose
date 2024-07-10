import React from "react";
import AwardsAchievementsImage from "./assests/AwardsAchievementsImage.png";
import AwardsDescription from "./assests/AwardsDescription.png";
import Carousel from "./Carousel";
const VisionMission = () => {
  return (
    <div style={{ marginBottom: "6%" }}>
      <img src={AwardsAchievementsImage} class="responsiveImage" />
      <img src={AwardsDescription} class="responsiveImage" />
      <h1 class="custom-heading">SPORTS ACHIEVEMENTS</h1>
      <Carousel />
    </div>
  );
};

export default VisionMission;
