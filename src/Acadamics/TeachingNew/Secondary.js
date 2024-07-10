import React, { useState } from "react";
import about from "./assets/img/3.png";
import SecondaryPopup from "./SecondaryPopup";
// import Secondary from "./Primary";

const Secondarys = () => {
  const [showPrimaryPopup, setShowPrimaryPopup] = useState(false);
  const handelOnClosePrimary = () => setShowPrimaryPopup(false);
  function handelOnClick(){
    console.log('true')
    setShowPrimaryPopup(true);
  }
  return (
    <div id="about" className="py-10 aboutmargin">
      <div className="grid md:grid-cols-2 gap-10 place-items-center teachinmainsec">
        <div className="textdivteaching">
          <p className="text-xl text-gray leading-7 mx-40 ptextteaching">
            <h1 className="font-bold text-[#8C1F1F]">Secondary</h1>
            Our method of teaching encourages a lot of creativity especially
            because it is student centered...
            <button
                  onClick={() => setShowPrimaryPopup(true)}
                  className="text-[#722828] bg-transparent"
                >
                  Read More
                </button>
          </p>
        </div>
        <div className="  ">
          <img src={about} alt="" className="h-20px aboutteachingimg" />
        </div>
        <br />
      </div>
      {showPrimaryPopup ? <SecondaryPopup onClose={handelOnClosePrimary} visible={showPrimaryPopup} /> : null}
    </div>
  );
};

export default Secondarys;
