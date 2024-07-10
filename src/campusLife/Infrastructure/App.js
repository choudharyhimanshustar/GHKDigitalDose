import React from "react";
import "./AppI.css";
import Illustration from "./Illustration.png";
import building from "./building.png";
import auditorium from "./hall.png";
import art from "./art.png";
import hall  from "./auditorium.png";
import cafe from "./cafe.png";
import computer from "./computer.png";
import schoollab from "./schoollab.png";
import library from "./library.png";
import music from "./music.png";
import smartclass from "./smartclass.png";
import play from "./play.png";

function App() {
  return (
    <div>
      <div className="container">
        <div className="content-wrapper">
          <div className="rounded-lg flex justify-center items-center">
            <img src={Illustration} alt="" className="p-4" />
          </div>

          <div className="infrastructureContent">
            <div className="section1">
              <div className="sub-section1">
                <div>
                  <img
                    src={building}
                    alt="college building"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">SCHOOL BUILDING</h3>
              </div>
              <div className="sub-section1">
                <div>
                  <img
                    src={hall}
                    alt="college hall"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">SCHOOL HALL</h3>
              </div>
              <div className="sub-section1">
                <div>
                  <img
                    src={library}
                    alt="LIBRARY"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">LIBRARY</h3>
              </div>
              <div className="sub-section1">
                <div>
                  <img
                    src={computer}
                    alt="computer laboratory"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">COMPUTER LABORATORY</h3>
              </div>
              <div className="sub-section1">
                <div>
                  <img
                    src={music}
                    alt="music classes"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">MUSIC</h3>
              </div>
              <div className="sub-section1">
                <div>
                  <img
                    src={auditorium}
                    alt="college auditorium"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">AUDITORIUM</h3>
              </div>
            </div>
            <div className="section2">
              <div className="sub-section2">
                <div>
                  <img
                    src={play}
                    alt="school playground"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">SCHOOL PLAYGROUND</h3>
              </div>
              <div className="sub-section2">
                <div>
                  <img
                    src={smartclass}
                    alt="smartclass"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">AUDIO VISUAL SMARTCLASS</h3>
              </div>
              <div className="sub-section2">
                <div>
                  <img
                    src={schoollab}
                    alt="science laboratory"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">SCIENCE LABORATORY</h3>
              </div>
              <div className="sub-section2">
                <div>
                  <img
                    src={art}
                    alt="art classes"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">ART/DRAWING CLASSES</h3>
              </div>
              <div className="sub-section2">
                <div>
                  <img
                    src={cafe}
                    alt="cafeteria"
                    className="infrastructurDivImage"
                  />
                </div>
                <h3 className="name">CAFETERIA</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;