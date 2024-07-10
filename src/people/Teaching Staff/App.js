import {
  heroImage,
  computerStaff,
  jrCollege,
  prePrimaryStaff,
  primary,
  secondaryStaff,
  specialTeachers,
  heads,
} from "./img";
import HeadsPopUp from "./components/popUpComponents/headsPopUp";
import SecondaryStaffPopUp from "./components/popUpComponents/secondaryStaffPopUp";
import PrimaryStaffPopUp from "./components/popUpComponents/primaryStaff";
import PreprimaryStaffPopUp from "./components/popUpComponents/prePrimaryStaff";
import JrCollegePopUp from "./components/popUpComponents/jrCollege";
import ComputerStaffPopUp from "./components/popUpComponents/computerStaff";
import SpecialTeacherPopUp from "./components/popUpComponents/specialTeacher";
import { useState } from "react";
import "./index.css"

function TeachingStaff() {
  const [displayHeadsPopUp, setDisplayHeadsPopUp] = useState(false);
  const [displaySecondaryStaffPopUp, setDisplaySecondaryStaffPopUp] =
    useState(false);
  const [displayPrimaryStaffPopUp, setDisplayPrimaryStaffPopUp] =
    useState(false);
  const [displayPrePrimaryStaffPopUp, setDisplayPrePrimaryStaffPopUp] =
    useState(false);
  const [displayJrCollegePopUp, setDisplayJrCollegePopUp] = useState(false);
  const [displayComputerStaffPopUp, setDisplayComputerStaffPopUp] =
    useState(false);
  const [displaySpecialTeacherPopUp, setDisplaySpecialTeacherPopUp] =
    useState(false);

  return (
    <div>
      <div style={{ position: "relative", width: "100vw", marginLeft: "40px" }} className="mx-0 sm:ml-[40px] ">
        {/* PopUp components */}
        {displayHeadsPopUp ? (
          <HeadsPopUp status={setDisplayHeadsPopUp} />
        ) : null}
        {displaySecondaryStaffPopUp ? (
          <SecondaryStaffPopUp status={setDisplaySecondaryStaffPopUp} />
        ) : null}
        {displayPrimaryStaffPopUp ? (
          <PrimaryStaffPopUp status={setDisplayPrimaryStaffPopUp} />
        ) : null}
        {displayPrePrimaryStaffPopUp ? (
          <PreprimaryStaffPopUp status={setDisplayPrePrimaryStaffPopUp} />
        ) : null}
        {displayJrCollegePopUp ? (
          <JrCollegePopUp status={setDisplayJrCollegePopUp} />
        ) : null}
        {displayComputerStaffPopUp ? (
          <ComputerStaffPopUp status={setDisplayComputerStaffPopUp} />
        ) : null}
        {displaySpecialTeacherPopUp ? (
          <SpecialTeacherPopUp status={setDisplaySpecialTeacherPopUp} />
        ) : null}
        {/* main page */}
        <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl mobileView">
          <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
        </div>
        <div className="grid sm:grid-cols-2 mx-5 my-5 px-10 sm:mx-10 sm:my-10  gap-5 mobileView ">
          <div
            style={style.card}
            onClick={() => setDisplaySecondaryStaffPopUp(true)}
          >
            <img
              src={secondaryStaff}
              style={style.peopleDivImg}
              alt="secondaryStaff"
            />
          </div>
          <div
            style={style.card}
            onClick={() => setDisplayPrimaryStaffPopUp(true)}
          >
            <img src={primary} style={style.peopleDivImg} alt="primary" />
          </div>
          <div
            style={style.card}
            onClick={() => setDisplayPrePrimaryStaffPopUp(true)}
          >
            <img
              src={prePrimaryStaff}
              style={style.peopleDivImg}
              alt="prePrimaryStaff"
            />
          </div>
          <div
            style={style.card}
            onClick={() => setDisplayJrCollegePopUp(true)}
          >
            <img src={jrCollege} style={style.peopleDivImg} alt="jrCollege" />
          </div>
          <div
            style={style.card}
            onClick={() => setDisplayComputerStaffPopUp(true)}
          >
            <img
              src={computerStaff}
              style={style.peopleDivImg}
              alt="computerStaff"
            />
          </div>
          <div
            style={style.card}
            onClick={() => setDisplaySpecialTeacherPopUp(true)}
          >
            <img
              src={specialTeachers}
              style={style.peopleDivImg}
              alt="specialTeachers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  card: {
    // height: "292px",
    borderRadius: "30px",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexShrink: "1",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  peopleDivImg: {
    width: "100%",
  },
};

export default TeachingStaff;
