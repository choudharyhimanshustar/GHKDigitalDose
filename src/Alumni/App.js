import React from "react";
import alumni from "./alumni.png";
import "./App.css";

function Alumni() {
  return (
    <div className="App">
      <div className="page">
        {/*<header className="header">Header</header>*/}
        <div className="content">
          <div className=" rounded-lg flex  justify-center items-center">
            <img
              src={alumni}
              alt=""
              className="p-4"
              style={{ width: "95vw" }}
            />
          </div>
          <div>
            <p className="text" style={{ width: "95vw" }}>
              Guru Harkrishan High School held its first inaugural Alumni Meet
              on 30th April 2011 in the
              <br /> School Campus. G H K-ites, ex-teachers, retired teachers,
              members of the management
              <br /> joined the meet of the alumni.
            </p>

            <p className="alumni-text-section" style={{ width: "90vw" }}>
              A large number of students turned up for this meet with great
              enthusiasm. It was a moment of ecstacy both for the teachers and
              the students. Retired teachers and ex-students were felicitated.
              <br />
              Dr. (Mrs.) Lakhbir Kaur Verma was the special invitee for the
              programme, and had anchored the programme who was then a lecturer
              at G.N. Khalsa College, Matunga and is currently the Director of
              Guru Harkrishan High School & <br />
              Jr. College. A lavish dinner was arranged by the members of
              management for the students and teachers. <br />
              The function ended on a happy note with more alumni to meet their
              alma matter.
            </p>
          </div>
        </div>
        {/*<footer className="footer">Footer</footer>*/}
      </div>
    </div>
  );
}

export default Alumni;
