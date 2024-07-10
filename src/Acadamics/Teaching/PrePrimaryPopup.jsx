import React, { useEffect } from "react";
import crossIcon from "./crossIcon.png";
// import "./App.css"

function PrePrimaryPopup({ visible, onClose }) {
  const handelOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handelOnClose}
      className=" fixed inset-0 bg-opacity-30 flex justify-center items-center aboutpopup"
    >
      <div className="bg-[#D9D9D9] rounded-[90px] pb-5 aboutpopupmain">
        <div style={{display: "flex",
    justifyContent: "flex-end",
    margin: "30px 50px 0px 50px"}}>
          <img src={crossIcon} alt="croosIcon" onClick={onClose}/>
        </div>
        <h2 className="flex justify-center font-bold mt-20 text-[#5E1010] aboutcontentheading text-xl">
          Pre Primary Teaching Method
        </h2>
        <br />
        <br />
        <p className="text-lg text-gray leading-7 px-34 sm:px-32 aboutcontent h-[50vh] overflow-y-scroll">
          Children (age 3 to 5 years) are generally motivated to learn about everything. They have a strong desire to find out and share information. Childhood is the time when he/she is engrossed in play that can happen in different forms such as playing with toys, or playing outdoor games,  learning by doing: field trips to get hands on learning environment.
Children can improve their motor skills; enhance their power of imagination and creativity by indulging in play. Pre-Primary teaching with the play way is flexible and is based on a child’s interest and aptitude. It is spontaneous and this encourages complete freedom of expression and gives freedom to the child to explore .
Children step out of their homes and familiar surroundings to be and learn among a different set of people, who include kids and teachers. Children pass through the first stage (Pre-school education) by taking part in various activities such as games, music, art, communicating with peers and teachers, learning and inculcating skills.
Various aspects of a child's development such as physical, psychological, emotional, intellectual and development of motor skills are enhanced because of these activities. Doing things practically helps in easy learning. Learning should be related to life and not to books alone. Ample opportunities are given to children to express themselves are given and the method suits the needs and interests of a child.

          <br /><br />
          <span className="text-[#5E1010] text-xl">

Our MOTTO  is: Our students Should radiate Happiness. Their longing to be in school is our yardstick of contentment
          </span>
          {/* <div>
            <br />
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Child centered and child friendly environment
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Oral skills -Priority is given for loud reading, Storytelling,
                News reading, Quiz competition etc.
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Activity based learning to facilitate learning without burden .
                Creative learning and not rote learning is encouraged.
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Practical's/Experiments -opportunity for learning by doing is
                given to students.
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
                Dramatization - Enacting moral based drama, patriotic songs,
                picture compositions, compering programmes, Enacting in short
                skits, playlets and monologues is encouraged.
              </h2>
            </div>
          </div> */}
        </p>
      </div>
    </div>
  );
}

export default PrePrimaryPopup;
