import {
  heroImage,
  librarian,
  menialStaff,
  officeStaff,
  supervisor,
} from "./img";
import LibrarianPopUp from "./PopUpComponents/librarian";
import MenialStaffPopUp from "./PopUpComponents/menialStaff";
import OfficeStaffPopUp from "./PopUpComponents/officeStaff";
import SupervisorPopUp from "./PopUpComponents/supervisor";
import { useState } from "react";
import "./nonTech.css"

function NonTeachingStaff() {
  const [displayLibrarianPopUp, setDisplayLibrarianPopUp] = useState(false);
  const [displayOfficeStaffPopUp, setDisplayOfficeStaffPopUp] = useState(false);
  const [displaySupervisorPopUp, setDisplaySupervisorPopUp] = useState(false);
  const [displayMenialStaffPopUp, setDisplayMenialStaffPopUp] = useState(false);

  return (
    <div style={{marginBottom:"150px"}}>
      <div style={{ position: "relative", width: "95vw",}} className="ml-0 sm:ml-[40px]">
        {/* PopUp components */}
        {displayLibrarianPopUp ? (
          <LibrarianPopUp status={setDisplayLibrarianPopUp} />
        ) : null}
        {displayOfficeStaffPopUp ? (
          <OfficeStaffPopUp status={setDisplayOfficeStaffPopUp} />
        ) : null}
        {displaySupervisorPopUp ? (
          <SupervisorPopUp status={setDisplaySupervisorPopUp} />
        ) : null}
        {displayMenialStaffPopUp ? (
          <MenialStaffPopUp status={setDisplayMenialStaffPopUp} />
        ) : null}
        {/* main page */}
        <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
          <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
        </div>
        <div className="grid sm:grid-cols-2 mx-5 my-5 sm:px-10 sm:mx-[100px] sm:my-10  gap-5 nonTech" >
          {/* <div
            style={style.card}
            onClick={() => setDisplayLibrarianPopUp(true)}
          >
            <img src={librarian} style={style.peopleDivImg} alt="librarian" />
          </div> */}
          <div
            style={style.card}
            onClick={() => setDisplayOfficeStaffPopUp(true)}
          >
            <img
              src={officeStaff}
              style={style.peopleDivImg}
              alt="officeStaff"
            />
          </div>
          <div
            style={style.card}
            onClick={() => setDisplaySupervisorPopUp(true)}
          >
            <img src={supervisor} style={style.peopleDivImg} alt="supervisor" />
          </div>
          {/* <div
            style={style.card}
            onClick={() => setDisplayMenialStaffPopUp(true)}
          >
            <img
              src={menialStaff}
              style={style.peopleDivImg}
              alt="menialStaff"
            />
          </div> */}
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

export default NonTeachingStaff;
