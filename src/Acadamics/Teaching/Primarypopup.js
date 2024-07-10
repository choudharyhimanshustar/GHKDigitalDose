import React from 'react'
import arrow from "../assets/img/Default.png";
import crossIcon from "./crossIcon.png"

export default function Primarypopup({ visible, onClose }) {
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
              Primary Teaching Method
            </h2>
            <p className="text-lg text-gray leading-7 px-34 sm:px-32 aboutcontent h-[50vh] overflow-y-scroll">
              {/* Children (age 3 to 5 years) are generally motivated to learn about
              everything. They have a strong desire to find out and share
              information. Childhood is the time when he/she is engrossed in play
              that can happen in different forms such as playing with toys, or
              playing outdoor games,  learning by doing: field trips to get hands on
              learning environment.
              Children can improve their motor skills; enhance
              their power of imagination and creativity by indulging in play.
              Pre-Primary teaching with the play way is flexible and is based on a
              child’s interest and aptitude. It is spontaneous and this encourages
              complete freedom of expression and gives freedom to the child to
              explore . */}
              <br />
              <div>
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
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Project Method-Learning through daily experiences and applying knowledge and developing skills.Also making projects on different subjects is encouraged.
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Competitions are organized to give opportunities to students to develop speaking and conversational skills.
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  We believe in teaching which is by doing.
                  </h2>
                </div>
              </div>
            </p>
          </div>
        </div>
      );
}
