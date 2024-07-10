import React from 'react'
import arrow from "../assets/img/Default.png";
import crossIcon from "./crossIcon.png"

export default function SecondaryPopup({ visible, onClose }) {
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
            Secondary Teaching Method
            </h2>
            <p className="text-lg text-gray leading-7 px-34 sm:px-32 aboutcontent h-[50vh] overflow-y-scroll">
              <br />
              <div>
                <br />
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Our method of teaching encourages a lot of creativity especially because it is student centered learning.
                  </h2>
                </div>
    
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Students learn continuously through class participation, recitation and exchange of thoughts.
                  </h2>
                </div>
    
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Regular Group discussions elocutions and debates are organized to develop Speaking Skills.
                  </h2>
                </div>
    
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Students' learning is measured through formal and informal forms of assessment including group projects and class participation
                  </h2>
                </div>
    
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Teachers and students play an equally active role in the learning processRegular Group discussions elocutions and debates are organized to develop Speaking Skills.
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Students receive hands on experience in the laboratory while performing experiments. </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Science Exhibitions, educational field trips are organized for student to explore and learn.
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Environment Awareness projects are regularly undertaken.
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Exposure to various art forms are given and students are encouraged to participate in cultural events.
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={arrow} className="h-6 w-6 mr-2" />
                  <h2 className="text-xl ">
                  Computer and digital learning is encouraged.
                  </h2>
                </div>
              </div>
            </p>
          </div>
        </div>
      );
}
