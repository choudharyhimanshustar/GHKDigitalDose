import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import searchicon from "./Images/Icon.png";
import { NavLink } from "react-router-dom";
import logo from "./Images/logo.svg";
import AdmissionDropDownMenu, {
  PeopleDropDownMenu,
  AcademicsDropDownMenu,
  GalleryDropDownMenu,
  CampusDropDownMenu,
} from "./DropDown";
import { AboutDropDownMenu } from "./DropDown";
import menuImg from "./Images/menu.png";
import NavMobile from "./NavMobile";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // const [selectedNavItem, setSelectedNavItem] = useState(null);

  // const handleNavItemClick = (navItem) => {
  //     setSelectedNavItem(navItem);
  // };
  const goToContactPage = () => {
    navigate("/contactUs");
  };

  return (
    <div className="Header">
      <div className="Header1">
        <div>
          <img src={logo} />
        </div>
        <div className="Header1txt">
          GURU HARKRISHAN HIGH SCHOOL <br /> & <br />
          JUNIOR COLLEGE OF COMMERCE
        </div>
        <div className="menuImg">
          {/* <img src={menuImg} alt="menuImg" /> */}
          <NavMobile />
        </div>
        <div className="Header1contactdiv" onClick={goToContactPage}>
          Contact Us
        </div>
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
          <PeopleDropDownMenu className="navlink" />
          <NavLink to="/people" className="navlink"></NavLink>
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <AcademicsDropDownMenu className="navlink" />
          <NavLink to="/acadamics" className="navlink"></NavLink>
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <GalleryDropDownMenu className="navlink" />
          <NavLink to="/gallery" className="navlink"></NavLink>
          <div className="Arrow"></div>
        </div>
        <div className="Header2Nav">
          <CampusDropDownMenu className="navlink" />
          <NavLink to="/campuslife" className="navlink"></NavLink>{" "}
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
