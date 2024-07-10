import RotatingGallery from "../../util/slider";
import "./CouncilPtaMenber.css";
import React, { useState } from "react";
import sliderImage1 from "./images/sliderImage1.jpeg";
import sliderImage2 from "./images/sliderImage2.jpeg";
import sliderImage3 from "./images/sliderImage3.jpeg";
import sliderImage4 from "./images/sliderImage4.jpeg";
import crossImage from "./images/cross.png";
import heroImage from "./images/PeopleFirstPageHeroImage.png";

function CouncilPtaMenber() {
  const [isHouseHovered, setIsHouseHovered] = useState(false);
  const [isPerfectsHovered, setIsPerfectsHovered] = useState(false);
  const [isTeacherHovered, setIsTeacherHovered] = useState(false);
  const [isElectedHovered, setIsElectedHovered] = useState(false);

  const handleHouseMouseOver = () => {
    setIsHouseHovered(true);
  };

  const handleHouseMouseOut = () => {
    setIsHouseHovered(false);
  };

  const handlePerfectsMouseOver = () => {
    setIsPerfectsHovered(true);
  };

  const handlePerfectsMouseOut = () => {
    setIsPerfectsHovered(false);
  };

  const handleTeacherMouseOver = () => {
    setIsTeacherHovered(true);
  };

  const handleTeacherMouseOut = () => {
    setIsTeacherHovered(false);
  };

  const handleElectedMouseOver = () => {
    setIsElectedHovered(true);
  };

  const handleElectedMouseOut = () => {
    setIsElectedHovered(false);
  };

  function myFunctions() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  function myFunctions1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }

  function myFunctions2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }

  function myFunctions3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
  }
  const imageArr = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];

  return (
    <>
      {/* <div className="Council-pta-container md">
        <div className="council-image">
          <img
            src="../images/people_image.png"
            alt="people_image"
            className="council_image"
            width="1180px"
            height="520px"
          ></img>
          <div className="council-image-text">
            Students Council & PTA Members
          </div>
        </div>
      </div> */}
      <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      <div className="student-council-text md">
        <div className="StudentsCouncil">
          STUDENTS COUNCIL
          <br />
        </div>
        {/* <div className="councilImage">
          <img src="../images/student-council.png" alt="student-council"></img>
        </div> */}
        <div className="sm:px-[10rem]">
          <RotatingGallery imageArray={imageArr} speed={2000} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            className="councilText"
            style={{
              maxWidth: "1100px",
              width: "100%",
              height: "auto",
              textAlign: "justify",
              color: "black",
              fontSize: "18px",
              fontFamily: "Poppins",
              fontWeight: "500",
              lineHeight: "1.30",
              letterSpacing: "0.40px",
              wordWrap: "break-word",
              margin: "auto",
            }}
          >
            It is a students’ body established to put into practice the aims and
            objectives of the house system. The council is made up of a Head
            boy, a Head girl, school captains, school vice-captains as well as
            house prefects, monitors of the classes, and other representatives
            of the various activities and organizations. The meetings of the
            council are conducted on a parliamentary basis and the Council
            fulfills its purpose by assisting the principal and the teaching and
            non-teaching staff in carrying out the various affairs in the
            school. The council members help in maintaining the discipline of
            the school and take care of their student fellows in a compassionate
            manner.
            <br />
            To felicitate the newly elected student council, the swearing-in
            ceremony was organized by Guru Harkrishan High School & Junior
            College of Commerce on 18th July 2022 in the school hall.The event
            began with a march past by the newly elected prefects along with the
            House Captains. All the teacher convenors pinned the badges and put
            sashes on the elected / selected students.The student council
            members contribute to the school discipline and students’ welfare.
            They help in organising the school activities.
          </div>
        </div>
      </div>
      <div className="popup-container md">
        <div className="popup1">
          <div
            className={`house-system ${isHouseHovered ? "hovered" : ""}`}
            onMouseOver={handleHouseMouseOver}
            onMouseOut={handleHouseMouseOut}
            onClick={myFunctions}
          >
            <div
              className="HouseSystem"
              style={{ marginTop: isHouseHovered ? "10px" : "20px" }}
            >
              house system
              <div
                className="KnowMore"
                style={{
                  color: "#CD5C5C",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: 1.3,
                  letterSpacing: 0.44,
                  wordWrap: "break-word",
                  marginTop: 10,
                  marginLeft: 325,
                  textTransform: "none",
                  marginTop: isHouseHovered ? "35px" : "55px",
                }}
              >
                Know more
                {/* <img
                  src="../images/Arrow 1.png"
                  alt="arrow"
                  style={{ marginLeft: 7 }}
                /> */}
              </div>
            </div>
            <div className="popuptext" id="myPopup">
              <img src={crossImage} alt="cross-image" id="cross-image" />
              <h3 className="HouseSystemHeader">House &nbsp; System</h3>
              <div className="para-stdt">
                In order to inculcate a healthy spirit of competition and to get
                the best out of each individual student, our school students are
                divided into four houses to encourage them to participate in
                various activities and to get more and more scores for their
                respective houses. Even the teachers belong to the various
                houses and we have one teacher who heads the house and a team of
                teachers who belong to each house. Thus the house system induces
                a spirit of belongingness to the institution and the students
                work hard for the scores of their houses.
              </div>
              <table className="table std-table rounded">
                <thead>
                  <tr>
                    <td
                      className="bg-opacity-75"
                      style={{
                        color: "#fce3e3",
                        background: "#9A7474",
                        fontSize: "16px",
                        padding: 16,
                      }}
                    >
                      HOUSES
                    </td>
                    <th
                      className="bg-danger bg-opacity-75"
                      scope="col-2"
                      style={{
                        color: "#a32a2a",
                        fontSize: "18px",
                        padding: 16,
                      }}
                    >
                      RED
                    </th>
                    <th
                      className="bg-primary bg-opacity-75"
                      scope="col-2"
                      style={{
                        color: "#18176e",
                        fontSize: "18px",
                        padding: 16,
                      }}
                    >
                      BLUE
                    </th>
                    <th
                      className="bg-success bg-opacity-75"
                      scope="col-2"
                      style={{
                        color: "#0b5206",
                        fontSize: "18px",
                        padding: 16,
                      }}
                    >
                      GREEN
                    </th>
                    <th
                      className="bg-warning bg-opacity-75"
                      scope="col-2"
                      style={{
                        color: "#524e06",
                        fontSize: "18px",
                        padding: 16,
                      }}
                    >
                      YELLOW
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border-danger border-opacity-10"
                      style={{ background: "#FFE4E4", padding: 25 }}
                      scope="row"
                    >
                      CAPTAIN
                    </td>
                    <td
                      className="bg-danger-subtle border-danger border-opacity-10"
                      style={{ padding: 26 }}
                    >
                      MST.NILESH MANDAL
                    </td>
                    <td
                      className="bg-primary-subtle border-primary border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MST. AYAAN GHORI
                    </td>
                    <td
                      className="bg-success-subtle border-success border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MST. ROHIT YADAV
                    </td>
                    <td
                      className="bg-warning-subtle border-warning border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MISS. KUSUM CHOUDHARI
                    </td>
                  </tr>

                  <tr>
                    <td
                      className="border-danger border-opacity-10"
                      style={{ background: "#FFE4E4", padding: 25 }}
                      scope="row"
                    >
                      VICE CAPTAIN
                    </td>
                    <td
                      className="bg-danger-subtle border-danger border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MISS. ANSHIKA GUNDU
                    </td>
                    <td
                      className="bg-primary-subtle border-primary border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MISS. KARISHMA GUPTA
                    </td>
                    <td
                      className="bg-success-subtle border-success border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MISS. MUSKAN TIWARI
                    </td>
                    <td
                      className="bg-warning-subtle border-warning border-opacity-10"
                      style={{ padding: 20 }}
                    >
                      MST. KARAN CHOUDHARI
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{ background: "#FFE4E4", padding: 20 }}
                      scope="row"
                    >
                      TEACHER CONVENOR
                    </td>
                    <td className="bg-danger-subtle" style={{ padding: 20 }}>
                      MRS. GOURI SAWANT
                    </td>
                    <td className="bg-primary-subtle" style={{ padding: 20 }}>
                      MR. ROBINSON DGAMA
                    </td>
                    <td className="bg-success-subtle" style={{ padding: 20 }}>
                      MISS. NILU MEHTA
                    </td>
                    <td className="bg-warning-subtle" style={{ padding: 20 }}>
                      MRS. SHWETA SINGH
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="perfects"
            onMouseOver={handlePerfectsMouseOver}
            onMouseOut={handlePerfectsMouseOut}
            onClick={myFunctions1}
          >
            <div
              className="perfectSystem"
              style={{ marginTop: isPerfectsHovered ? "10px" : "20px" }}
            >
              PREFECTS
              <div
                className="KnowMore"
                style={{
                  color: "#CD5C5C",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: 1.3,
                  letterSpacing: 0.44,
                  wordWrap: "break-word",
                  marginTop: 49,
                  marginLeft: 325,
                  textTransform: "none",
                  marginTop: isPerfectsHovered ? "40px" : "55px",
                }}
              >
                Know more
                {/* <img
                  src="../images/Arrow 1.png"
                  alt="arrow"
                  style={{ marginLeft: 7 }}
                /> */}
              </div>
            </div>
            <div className="popupTextParent">
              <div className="popuptext" id="myPopup1">
                <img src={crossImage} alt="cross-image" id="cross-image" />
                <h3 className="HouseSystemHeader">Perfects</h3>
                <div className="table-container">
                  <table
                    className="table prefects-table rounded"
                    style={{
                      maxHeight: 200,
                      height: "100%",
                      overflowY: "auto",
                      borderRadius: 30,
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="bg-danger bg-opacity-75"
                          style={{
                            color: "#722626",
                            fontSize: "24px",
                            padding: 16,
                            fontWeight: "bolder",
                          }}
                        >
                          SR NO.
                        </th>
                        <th
                          scope="col"
                          className="bg-danger bg-opacity-50"
                          style={{
                            color: "#722626",
                            fontSize: "24px",
                            padding: 16,
                            fontWeight: "bolder",
                          }}
                        >
                          PREFECTS NAME
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          1
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.KAVYA MHATRE
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          2
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.MAHI SANSI
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          3
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MST.DAKSH DESHMUKH
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          4
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.SONI RA
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          5
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.RIDDHI GORAT
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          6
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.ISHWARI BHOIR
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          7
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.NAVYA PATIL
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          8
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.RASHI YADAV
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          9
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS. ARPITA SARKAR
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          10
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.NOORI FATIMA KHAN
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          11
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MST. SHIVAM YADAV
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          12
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.MINAKSHI GUPTA
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          13
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MST.DANISH MOHMUDDIN
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          14
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.KANCHAN PANDIT
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          15
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MST.VEDANT WADEKAR
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          16
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.ARCHANA SAHU
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          17
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MST.ASIF KHAN
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="bg-danger bg-opacity-25"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          18
                        </th>
                        <td
                          className="bg-danger bg-opacity-10"
                          style={{
                            color: "#722626",
                            fontSize: "20px",
                            padding: 16,
                          }}
                        >
                          MS.SIMRAN CHOUDHARY
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup2">
          <div
            className="teacher-represent"
            onMouseOver={handleTeacherMouseOver}
            onMouseOut={handleTeacherMouseOut}
            onClick={myFunctions2}
          >
            <div
              className="teacherSystem"
              style={{ marginTop: isTeacherHovered ? "-10px" : "0px" }}
            >
              Teacher Representative
              <div
                className="KnowMore"
                style={{
                  color: "#FFDED6",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: 1.3,
                  letterSpacing: 0.44,
                  wordWrap: "break-word",
                  marginLeft: 325,
                  textTransform: "none",
                  marginTop: isTeacherHovered ? "30px" : "45px",
                }}
              >
                Know more
                {/* <img
                  src="../images/Arrow 2.png"
                  alt="arrow"
                  style={{ marginLeft: 7 }}
                /> */}
              </div>
            </div>
            <div className="popuptext" id="myPopup2">
              <img src={crossImage} alt="cross-image" id="cross-image" />
              <h3 className="HouseSystemHeader">Teacher Representative</h3>

              <div className="table-container">
                <table
                  className="table teacher-table border-danger border-opacity-10 rounded"
                  style={{
                    maxHeight: 200,
                    height: "100%",
                    overflowY: "auto",
                    borderRadius: 30,
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{
                          background: "#9A7474",
                          color: "#722626",
                          fontSize: "26px",
                          padding: 16,
                          fontWeight: "900",
                        }}
                      >
                        SR NO.
                      </th>
                      <th
                        scope="col"
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#F88888",
                          color: "#722626",
                          fontSize: "26px",
                          padding: 16,
                          fontWeight: "bolder",
                        }}
                      >
                        SECTION
                      </th>
                      <th
                        scope="col"
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#F88888",
                          color: "#722626",
                          fontSize: "26px",
                          padding: 16,
                          fontWeight: "bolder",
                        }}
                      >
                        TEACHER NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFE4E4",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        1
                      </th>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Pre-Primary
                      </td>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Mrs. Sangeeta Sharma
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFE4E4",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        2
                      </th>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Primary
                      </td>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Mrs. Kiran Singh
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFE4E4",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        3
                      </th>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Secondary
                      </td>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Mrs. Gauri Sawant
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFE4E4",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        4
                      </th>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Secondary
                      </td>
                      <td
                        className=" border-danger border-opacity-10"
                        style={{
                          background: "#FFDEDE",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        Mr. Anthony Dias
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="elected-represent"
            onMouseOver={handleElectedMouseOver}
            onMouseOut={handleElectedMouseOut}
            onClick={myFunctions3}
          >
            <div
              className="electedSystem"
              style={{ marginTop: isElectedHovered ? "-10px" : "0px" }}
            >
              P.T.A NEWLY ELECTED REPRESENTATIVE MEMBERS - 2023-2024
              <div
                className="KnowMore"
                style={{
                  color: "#CD5C5C",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: 1.3,
                  letterSpacing: 0.44,
                  wordWrap: "break-word",
                  marginTop: 4,
                  marginLeft: 323,
                  textTransform: "none",
                  marginTop: isElectedHovered ? "0px" : "18px",
                }}
              >
                Know more
                {/* <img
                  src="../images/Arrow 1.png"
                  alt="arrow"
                  style={{ marginLeft: 7 }}
                /> */}
              </div>
            </div>
            <div className="popuptext" id="myPopup3">
              <img src={crossImage} alt="cross-image" id="cross-image" />
              <h3 className="HouseSystemHeader">
                P.T.A NEWLY ELECTED REPRESENTATIVE MEMBERS - 2023-2024
              </h3>
              <div className="table-container">
                <table
                  class="table elected-table rounded"
                  style={{
                    maxHeight: 200,
                    height: "100%",
                    overflowY: "auto",
                    borderRadius: 30,
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{
                          background: "#D45A5A",
                          color: "#722626",
                          fontSize: "24px",
                          padding: 16,
                          fontWeight: "bolder",
                        }}
                      >
                        SR NO.
                      </th>
                      <th
                        scope="col"
                        style={{
                          background: "#D45A5A",
                          color: "#722626",
                          fontSize: "24px",
                          padding: 16,
                          fontWeight: "bolder",
                        }}
                      >
                        STD/DIV
                      </th>
                      <th
                        scope="col"
                        style={{
                          background: "#D45A5A",
                          color: "#722626",
                          fontSize: "24px",
                          padding: 16,
                          fontWeight: "bolder",
                        }}
                      >
                        PARENT'S NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#FE9E9E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        1
                      </th>
                      <td
                        style={{
                          background: "#FE9E9E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 10
                      </td>
                      <td
                        style={{
                          background: "#FE9E9E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SUMITHA POOJARY
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#FE9E9E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        2
                      </th>
                      <td
                        style={{
                          background: "#FE9E9E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 10
                      </td>
                      <td
                        style={{
                          background: "#FE9E9E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        VIJAYA SHEDGE
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        3
                      </th>
                      <td
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 9A
                      </td>
                      <td
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        GANESH MAURYA
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        4
                      </th>
                      <td
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 9A
                      </td>
                      <td
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JYOTI DUMNE
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        5
                      </th>
                      <td
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 9A
                      </td>
                      <td
                        style={{
                          background: "#F6A99E",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        BHAVNA JAISWAR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#ECA99A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        6
                      </th>
                      <td
                        style={{
                          background: "#ECA99A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 9B
                      </td>
                      <td
                        style={{
                          background: "#ECA99A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        RANI JHA
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#ECA99A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        7
                      </th>
                      <td
                        style={{
                          background: "#ECA99A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 8A
                      </td>
                      <td
                        style={{
                          background: "#ECA99A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        PINKY WADEKAR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EAA49B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        8
                      </th>
                      <td
                        style={{
                          background: "#EAA49B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 8B
                      </td>
                      <td
                        style={{
                          background: "#EAA49B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        ASHOK DHUMAL
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EB9F96",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        9
                      </th>
                      <td
                        style={{
                          background: "#EB9F96",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 7A
                      </td>
                      <td
                        style={{
                          background: "#EB9F96",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        RAZIYA MOHMUDDIN
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EDA28A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        10
                      </th>
                      <td
                        style={{
                          background: "#EDA28A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 7A
                      </td>
                      <td
                        style={{
                          background: "#EDA28A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JYOTI KANNAPURAM
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EDA28A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        11
                      </th>
                      <td
                        style={{
                          background: "#EDA28A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 7B
                      </td>
                      <td
                        style={{
                          background: "#EDA28A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        HARIYA BALYAR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E8987F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        12
                      </th>
                      <td
                        style={{
                          background: "#E8987F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 7B
                      </td>
                      <td
                        style={{
                          background: "#E8987F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SAVITA SINGH
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E8987F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        13
                      </th>
                      <td
                        style={{
                          background: "#E8987F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 6A
                      </td>
                      <td
                        style={{
                          background: "#E8987F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SRAVANTI BAKI
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        14
                      </th>
                      <td
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 6B
                      </td>
                      <td
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SHOBHA JAISWAL
                      </td>
                    </tr>

                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E69379",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        15
                      </th>
                      <td
                        style={{
                          background: "#E69379",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 6A
                      </td>
                      <td
                        style={{
                          background: "#E69379",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        MADHURI MANKAR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        16
                      </th>
                      <td
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 5A
                      </td>
                      <td
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        RANI JHA
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        17
                      </th>
                      <td
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 5B
                      </td>
                      <td
                        style={{
                          background: "#E88C7F",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        MALVIKA DAS
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E38377",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        18
                      </th>
                      <td
                        style={{
                          background: "#E38377",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 4A
                      </td>
                      <td
                        style={{
                          background: "#E38377",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        HARSHALA KHEDEKAR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EC9480",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        19
                      </th>
                      <td
                        style={{
                          background: "#EC9480",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 4B
                      </td>
                      <td
                        style={{
                          background: "#EC9480",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        MANJU VISHWAKARMA
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E89090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        20
                      </th>
                      <td
                        style={{
                          background: "#E89090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 4B
                      </td>
                      <td
                        style={{
                          background: "#E89090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        LAVANYA SONIVENI
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#E89090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        21
                      </th>
                      <td
                        style={{
                          background: "#E89090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 3A
                      </td>
                      <td
                        style={{
                          background: "#E89090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SHOBHA MHATRE
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#D78484",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        22
                      </th>
                      <td
                        style={{
                          background: "#D78484",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 3A
                      </td>
                      <td
                        style={{
                          background: "#D78484",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        VAISHALI DETHE
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#D78484",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        23
                      </th>
                      <td
                        style={{
                          background: "#D78484",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 3B
                      </td>
                      <td
                        style={{
                          background: "#D78484",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JAGRUTI BHOIR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EB9292",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        24
                      </th>
                      <td
                        style={{
                          background: "#EB9292",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 2A
                      </td>
                      <td
                        style={{
                          background: "#EB9292",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JAGRUTI KANOJIYA
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EB9C9C",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        25
                      </th>
                      <td
                        style={{
                          background: "#EB9C9C",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 2B
                      </td>
                      <td
                        style={{
                          background: "#EB9C9C",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        POONAM CHHEDA{" "}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F89A9A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        26
                      </th>
                      <td
                        style={{
                          background: "#F89A9A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        STD 1B
                      </td>
                      <td
                        style={{
                          background: "#F89A9A",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SUNITA PATIL
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EA9090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        27
                      </th>
                      <td
                        style={{
                          background: "#EA9090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SR. KG
                      </td>
                      <td
                        style={{
                          background: "#EA9090",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        VARSHA SOLANKI
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#ED9D9D",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        28
                      </th>
                      <td
                        style={{
                          background: "#ED9D9D",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SR. KG
                      </td>
                      <td
                        style={{
                          background: "#ED9D9D",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        FARIDA SHAIKH
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#ED9D9D",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        29
                      </th>
                      <td
                        style={{
                          background: "#ED9D9D",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JR. KG
                      </td>
                      <td
                        style={{
                          background: "#ED9D9D",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        AARTI VAISHY
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        30
                      </th>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JR. KG
                      </td>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        PINKY NISHAD
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        31
                      </th>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JR. KG
                      </td>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        KOMAL SHAH
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        32
                      </th>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        JR. KG
                      </td>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        RIYA PRAJAPATI
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        33
                      </th>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        NURSERY
                      </td>
                      <td
                        style={{
                          background: "#F48B8B",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        SWATI BORKAR
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        style={{
                          background: "#EE9696",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        34
                      </th>
                      <td
                        style={{
                          background: "#EE9696",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        NURSERY
                      </td>
                      <td
                        style={{
                          background: "#EE9696",
                          color: "#722626",
                          fontSize: "20px",
                          padding: 16,
                        }}
                      >
                        PREETI SHARMA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CouncilPtaMenber;
