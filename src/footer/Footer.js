import React from "react";
import "./Footer.css";
import logo from "./Images/logo.svg";
import schoolForm from "./assest/school_form.pdf";
import collegeForm from "./assest/college_form.pdf";
import { NavLink } from "react-router-dom";
import messageIcon from "./Images/eva_email-fill.png"
import callIcon from "./Images/fluent_call-12-filled.png"

export default function Footer() {
  return (
    <div>
      <div className="Footeruperline"></div>
      <div className="Footermain">
        <div className="First">
          <div>
            <img src={logo} />
          </div>
          <div className="FirstContent">
            Our school is an Institution designed to provide learning spaces and
            learning environments for the students under the guidance of the
            teachers.
          </div>
          <div className="Socialmediaicons">
            <div className="Backgroundring">
              <div className="facebook"></div>
            </div>
            <div className="Backgroundring">
              <a href="https://www.linkedin.com/company/113/" />
              <div className="linkedin"></div>
            </div>
            <div className="Backgroundring">
              <div className="instagram"></div>
            </div>
            <div className="Backgroundring">
              <div className="youtube"></div>
            </div>
            <div className="Backgroundring">
              <div className="x"></div>
            </div>
          </div>
        </div>
          <div className="Fifth">
            <div className="Mainheading">QUICK LINKS</div>
            <div className="Heading">
            <a href="/about" className="nav-link">
              ABOUT US
              </a>
              </div>
            <div className="Heading">
            <a href="/admission/document" className="nav-link">
              ADMISSIONS
              </a>
            </div>
            <div className="Heading">
            <a href="/teaching" className="nav-link">
              ACADEMICS
              </a>
              </div>
          </div>

          <div className="Sixth">
            <div className="Mainheading">ADMISSIONS (DOWNLOADS)</div>
            <div className="sixthdown">
              <div className="Heading">
                HIGH SCHOOL ADMISSIONS
              </div>
              <a href={schoolForm} download="school_form.pdf">
                <div className="download"></div>
              </a>
            </div>
            <div className="sixthdown">
              <div className="Heading">
                JR. COLLEGE ADMISSIONS
              </div>
              <a href={collegeForm} download="college_form.pdf">
                <div className="download download2"></div>
              </a>
            </div>
          </div>

          <div className="Seventh">
            <div className="Seventh1">
              <div className="Mainheading">CONTACT US</div>
              <div className="Heading"style={{width:"250px"}}>
                58, Gazdhar Park, North Avenue, she Santacruz (W), Mumbai.
                Raharashtra 400054
              </div>
              <div style={{display:"flex"}}>
                <div style={{display:"flex", flexShrink:"0",marginRight:"8px",alignItems:"center"}}>
                  <img  src={callIcon} alt="callIcon"/>
                </div>
                <div>
                  <div style={{width:"150px"}}>+91 – 22 – 26047978 </div>
                  <div>+91 – 22 – 26047469</div>
                  <div> +91 8296049604</div>
                </div>
              </div>
              <div  style={{display:"flex"}}>
                <div style={{display:"flex",flexShrink:"0", marginRight:"8px",alignItems:"center"}}>
                  <img src={messageIcon} alt="messageIcon"/>
                </div>
                <div>guruhkschool@gmail.com</div>
              </div>
            </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#CED0F2",
          padding: "0px 20px 20px 20px",
          fontWeight: "700",
          width: "100vw",
        }}
        className="footerLast"
      >
        <div>Copyright @ 2023 GHK High school and Jr college</div>
        <div>
          <a href="https://digitaldose.in/" target="blank">
            Developed and Managed by DigitalDose
          </a>
        </div>
      </div>
    </div>
  );
}
