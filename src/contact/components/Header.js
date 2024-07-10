import React, { useState } from "react";
import "./Header.css";
import searchicon from "../image";
import { NavLink } from "react-router-dom";

import AdmissionDropDownMenu from "./DropDown";
import { AboutDropDownMenu } from "./DropDown";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // const [selectedNavItem, setSelectedNavItem] = useState(null);

  // const handleNavItemClick = (navItem) => {
  //     setSelectedNavItem(navItem);
  // };

  return (
    <div className="Header">
      <div className="Header1">
        <div className="logoimage"></div>
        <div className="Header1txt">
          GURU HARKRISHAN HIGH SCHOOL <br /> & <br />
          JUNIOR COLLEGE OF COMMERCE
        </div>
        <div className="Header1searchbar">
          <input
            style={{ outLine: "none" }}
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput}
            className="Header1search"
          />
          <div className="Searchicon">
            <img src={searchicon} alt="serchicon"></img>
          </div>
        </div>
        <div className="Header1contactdiv">Contact Us</div>
      </div>

      <div className="Header2">
        <div className="Header2Nav">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </div>
        <div className="Header2Nav">
          <AboutDropDownMenu className="navlink" />
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <AdmissionDropDownMenu className="navlink" />
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <NavLink to="/acadamics" className="navlink">
            {" "}
            Acadamics
          </NavLink>
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <NavLink to="/people" className="navlink">
            {" "}
            People
          </NavLink>
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <NavLink to="/gallery" className="navlink">
            {" "}
            Gallery
          </NavLink>
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <NavLink to="/campuslife" className="navlink">
            {" "}
            Campus life
          </NavLink>{" "}
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <NavLink to="/alumni" className="navlink">
            {" "}
            Alumni
          </NavLink>
        </div>
      </div>
    </div>
  );
}
