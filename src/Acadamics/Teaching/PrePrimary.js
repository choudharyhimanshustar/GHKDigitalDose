import React, { useState } from "react";
import about from "./assets/img/about12.png";
import Primary from "./Primary";
import PrePrimaryPopup from "./PrePrimaryPopup";
import Primarypopup from "./Primarypopup";

const PrePrimary = () => {
  const [showAboutPopup, setshowAboutpopup] = useState(false);
  const handelOnClose = () => setshowAboutpopup(false);
  const [showPrimaryPopup, setShowPrimaryPopup] = useState(false);
  const handelOnClosePrimary = () => setShowPrimaryPopup(false);
  function handelOnClick(){
    console.log('true')
    setShowPrimaryPopup(true);
  }

  return (
    <div>

        <div id="about" className=" aboutmargin">
          <div className="flex flex-col-reverse md:grid-cols-2 gap-10 place-items-center teachinmainsec">
            <div className="textdivteaching">
              <p className="text-xl text-gray leading-7 mx-[20px] sm:mx-40 ptextteaching">
                <h1 className="font-bold text-[#8C1F1F]">Pre Primary</h1>
                Children (age 3 to 5 years) are generally motivated to learn about
                everything where they have a strong desire to find out and share
                information...
                <button
                  onClick={() => setShowPrimaryPopup(true)}
                  className="text-[#722828] bg-transparent"
                >
                  Read More
                </button>
              </p>
            </div>
            <div className=" ">
              <img src={about} alt="" className="h-20px aboutteachingimg" />
            </div>
            <br />
          </div>
          <Primarypopup onClose={handelOnClosePrimary} visible={showPrimaryPopup} />
        </div>
  
    </div>
      
  );
};

export default PrePrimary;
