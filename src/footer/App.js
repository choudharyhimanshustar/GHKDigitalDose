import React from "react";
import "./App.css"; // Import your CSS file
import Transport from "./Transport.png";
import route1 from "./route1.gif";
import route2 from "./route2.gif";

const App = () => {
  return (
    <div className="App">
      <div className="page-container">
        {/*<header className="header">Header</header>*/}
        <div className="content">
          {/*<div id="Transport" className="lg:px-60 pt-40 ">*/}
          <div className=" rounded-lg flex  justify-center items-center">
            <img src={Transport} alt="" className="p-4" />
          </div>
          <div>
            <p className="text-section">
              WE HAVE TRANSPORT (PRIVATE BUS) FACILITY FOR THE STUDENTS TO
              COMMUTE <br />
              TO AND FROM THE SCHOOL.
            </p>
          </div>
          <h1 className="heading">ROUTES</h1>
          <div className="centered-divs">
            <div className="centered-div1">
              <p className="route1" style={{ marginTop: "30px" }}>
                ANDHERI (EAST) TO SCHOOL
              </p>
              <div>
                <img
                  src={route1}
                  alt="gif 1"
                  style={{ marginTop: "30px" }}
                  className="route"
                />
              </div>
            </div>
            <div className="centered-div2">
              <p className="route2" style={{ marginTop: "30px" }}>
                BANDRA TO SCHOOL
              </p>
              <div>
                <img
                  src={route2}
                  alt="gif 2"
                  style={{ marginTop: "30px" }}
                  className="route"
                />
              </div>
            </div>
          </div>
        </div>
        {/*<footer className="footer">Footer</footer>*/}
      </div>
    </div>
  );
};

export default App;
