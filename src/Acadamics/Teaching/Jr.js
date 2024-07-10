import React, { useState } from "react";
import about from "./assets/img/4.png";
import Jrp from "./Jrp";

const Jr = () => {
  const [showJr, setshowjr] = useState(false);
  const handelOnClose = () => setshowjr(false);
  return (
    <div id="about" className=" aboutmargin">
      <div className="grid md:grid-cols-2 gap-10 place-items-center teachinmainsec">
        <div className="  ">
          <img src={about} alt="" className="h-20px primaryteachingimg" />
        </div>
        <div className="textprimarydivteaching">
          <p className="text-xl text-gray leading-7 mx-[20px] sm:mx-40 ptextteaching">
            <h1 className="font-bold text-[#8C1F1F]">Jr College</h1>
            We the teachers at GHK Jr. College believe that teaching can’t be
            interesting without the student's participation & interaction...
            <br />
            <button
              onClick={() => setshowjr(true)}
              className="text-[#722828] bg-transparent"
            >
              Read More
            </button>
          </p>
        </div>

        <br />
      </div>
      <Jrp onClose={handelOnClose} visible={showJr} />
    </div>
  );
};

export default Jr;
