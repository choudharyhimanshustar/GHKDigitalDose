import React, { useState } from "react";
import NewsBanner from "./images/NewsBanner.png";
import News1_ShortImg from "./images/News1_ShortImg.png";
import News2ShortImg from "./images/News2ShortImg.png";
import News3ShortImg from "./images/News3ShortImg.png";
import News4ShortImg from "./images/News4ShortImg.png";
import News5ShortImg from "./images/News5ShortImg.png";
import News6ShortImg from "./images/News6ShortImg.png";
import News7ShortImg from "./images/News7ShortImg.png";
import HeadsPopUp from "./HeadsPopUp";
import News1 from "./images/News1.png";
import News2 from "./images/News2.png";
import News3 from "./images/News3.png";
import News4 from "./images/News4.png";
import News5 from "./images/News5.png";
import News6 from "./images/News6.png";
import News7 from "./images/News7.png";
import "./news.css";
const News = () => {
  const [displayHeadsPopUp, setDisplayHeadsPopUp] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    {
      imgName: News1,
    },
    {
      imgName: News2,
    },
    {
      imgName: News3,
    },
    {
      imgName: News4,
    },
    {
      imgName: News5,
    },
    {
      imgName: News6,
    },
    {
      imgName: News7,
    },
  ];
  const handleClick = (idx) => {
    // Set displayHeadsPopUp to true and index to 1
    setDisplayHeadsPopUp(true);
    setIndex(idx);
  };
  return (
    <div>
      {displayHeadsPopUp ? (
        <HeadsPopUp
          status={setDisplayHeadsPopUp}
          image={images[index].imgName}
        />
      ) : null}
      <img src={NewsBanner} class="mainImage" />
      <div class="container">
        <div class="innerContainer">
          <div class="imgContainer">
            <img src={News1_ShortImg} />
            <h1>Celebrating, Unity, Harmony, Wellness</h1>
            <button className="newsButton" onClick={() => handleClick(0)}>
              Read Full Article
            </button>
          </div>
          <div class="imgContainer">
            <img src={News2ShortImg} />
            <h1>Celebrating Guru Harkrishan Day</h1>
            <button className="newsButton" onClick={() => handleClick(1)}>
              Read Full Article
            </button>
          </div>
        </div>
        <div class="innerContainer">
          <div class="imgContainer">
            <img src={News3ShortImg} />
            <h1>Inauguration Ceremony for New Students</h1>
            <button className="newsButton" onClick={() => handleClick(2)}>
              Read Full Article
            </button>
          </div>
          <div class="imgContainer">
            <img src={News4ShortImg} />
            <h1>Intra-house Group recitation Competition</h1>
            <button className="newsButton" onClick={() => handleClick(3)}>
              Read Full Article
            </button>
          </div>
        </div>
        <div class="innerContainer">
          <div class="imgContainer">
            <img src={News5ShortImg} />
            <h1>Celebrating Shravanotsav</h1>
            <button className="newsButton" onClick={() => handleClick(4)}>
              Read Full Article
            </button>
          </div>
          <div class="imgContainer">
            <img src={News6ShortImg} />
            <h1>Kids Showcasing Patriotic Themes with Drawing</h1>
            <button className="newsButton" onClick={() => handleClick(5)}>
              Read Full Article
            </button>
          </div>
        </div>
        <div class="innerContainer">
          <div class="imgContainer">
            <img src={News7ShortImg} />
            <h1>Investiture Ceremony</h1>
            <button className="newsButton" onClick={() => handleClick(6)}>
              Read Full Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
