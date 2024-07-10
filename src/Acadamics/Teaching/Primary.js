import React, { useState } from "react";
import about from "./assets/img/2.png";
import Primarypopup from "./Primarypopup";

const Primary = (props) => {
  const [showPrimaryPopup, setShowPrimaryPopup] = useState(false);
  const handelOnClosePrimary = () => setShowPrimaryPopup(false);
  return (
    <div id="about" className="py-1 aboutmargin">
      <div className="grid md:grid-cols-2 gap-10 place-items-center teachinmainsec">
        <div className="  ">
          <img src={about} alt="" className="h-20px primaryteachingimg " />
        </div>
        <div className="textprimarydivteaching">
          <p className="text-xl text-gray leading-7 mx-[20px] sm:mx-40 ptextteaching">
            <h1 className="font-bold text-[#8C1F1F]">Primary</h1>
            Child centered and child friendly. Oral work-Priority is given for
            loud reading, Storytelling, News reading, Quiz competition etc.
            <br />
            {/* <a href="" className="text-[#722828]" onClick={props.handleOnClick}>
              Read More
            </a> */}
            <button
                  onClick={() => setShowPrimaryPopup(true)}
                  className="text-[#722828] bg-transparent"
                >
                  Read More
                </button>
          </p>
        </div>

        <br />
      </div>
      <Primarypopup onClose={handelOnClosePrimary} visible={showPrimaryPopup} /> 
    </div>
  );
};

export default Primary;
