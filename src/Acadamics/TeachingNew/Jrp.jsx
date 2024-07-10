import React from "react";
import arrow from "./Default.png";

import  crossIcon  from "./crossIcon.png";
function Jrp({ visible, onClose }) {
  const handelOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handelOnClose}
      style={{ margin: "50px" }}
      className="mx-80 fixed inset-0 bg-opacity-30 flex justify-center items-center sm:mx-20"
    >
      <div
        // style={{ height: "100%" }}
        className="bg-[#D9D9D9] rounded-[90px] pb-5"
      >
        {" "}
        {/* <button className="font-bold" onClick={onClose}>
          X
        </button> */}
        <div style={{display: "flex",
    justifyContent: "flex-end",
    margin: "30px 50px 0px 50px"}}>
          <img src={crossIcon} alt="croosIcon" onClick={onClose}/>
        </div>
        <h2 className="flex justify-center font-bold mt-20 text-[#5E1010] text-xl">
        Jr. College Teaching Method
        </h2>
        <p className="text-lg text-gray leading-7 px-34 sm:px-32">
          <div>
            <br />
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              Individual Attention and coaching is our motto
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              We the teachers at GHK Jr. College believe that teaching can't be interesting without the student's participation & interaction.
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              We give individual learning opportunities to Students
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              Encourage students to participate in Inter-College activities.
              </h2>
            </div>

            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              We conduct special workshops on Mind power, Personality development of the students by hiring professionals.
              </h2>
            </div>
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              We have practical sessions along with theory sessions.
              </h2>
            </div>
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              We give I.T and Mathematics as optional subjects at this level.
              </h2>
            </div>
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              Teaching of core subjects is done in class room as well as home assignments are regularly given.
              </h2>
            </div>
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              Time to time testing is done.
              </h2>
            </div>
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              Remedial activity with written work is undertaken with the supervision of the teachers.
              </h2>
            </div>
            <div className="flex items-center">
              <img src={arrow} className="h-6 w-6 mr-2" />
              <h2 className="text-xl ">
              Discussion, debates and open forums and personality development training is imparted by experts.
              </h2>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Jrp;
