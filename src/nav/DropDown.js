import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import './Navbar.css'

export default function AdmissionDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="dropdown-button">Admissions</div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/admission/document" className="nav-link">
            Admission Document
          </NavLink>
          <NavLink to="/admission/rule" className="nav-link">
            Rule and Regulations
          </NavLink>
          <NavLink to="/councelling" className="nav-link">
            Admission Councelling
          </NavLink>
          <NavLink to="/admissionform" className="nav-link">
            Admission Form
          </NavLink>
          <NavLink to="/admission/transport" className="nav-link">
            Transport Facility
          </NavLink>
          <NavLink to="/SchoolTiming" className="nav-link">
            School and College Timings
          </NavLink>
        </div>
      )}
    </div>
  );
}

export function AboutDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="dropdown-button">About</div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/DirectorMessage" className="nav-link">
            Director Message
          </NavLink>
          <NavLink to="/PrincipalMessage" className="nav-link">
            Principal Message
          </NavLink>
          <NavLink to="/vision" className="nav-link">
            Vision, Mission, Motto
          </NavLink>
          <NavLink to="/Achievement" className="nav-link">
            Awards And Achievement
          </NavLink>
          <NavLink to="/committe" className="nav-link">
            Management Committe
          </NavLink>
        </div>
      )}
    </div>
  );
}

export function AcademicsDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="dropdown-button">Academics</div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/teaching" className="nav-link">
            Teaching Methods
          </NavLink>
          <NavLink to="/AcademicResults" className="nav-link">
            Results
          </NavLink>
          <NavLink to="/preprimary" className="nav-link">
            Pre-Primary
          </NavLink>
          <NavLink to="/primary" className="nav-link">
            Primary
          </NavLink>
          <NavLink to="/secondary" className="nav-link">
            Secondary School
          </NavLink>
          <NavLink to="/jrcollege" className="nav-link">
            Jr. College
          </NavLink>
        </div>
      )}
    </div>
  );
}

export function PeopleDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="dropdown-button">People</div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/studentCouncile" className="nav-link">
            Student's Council
          </NavLink>
          <NavLink to="/teachingstaff" className="nav-link">
            Teaching Staff
          </NavLink>
          <NavLink to="/nonteachingstaff" className="nav-link">
            Non-Teaching Staff
          </NavLink>
          <NavLink to="/visitingFaculty" className="nav-link">
            Visiting Faculty
          </NavLink>
          <NavLink to="/helpingstaff" className="nav-link">
            Helping Staff
          </NavLink>
        </div>
      )}
    </div>
  );
}

export function GalleryDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="dropdown-button">Gallery</div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/GalleryMain" className="nav-link">
            Events
          </NavLink>
        </div>
      )}
    </div>
  );
}

export function CampusDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="dropdown-button">Campus Life</div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/scoutBulbulClub" className="nav-link">
            Bulbul, Girl Guide, Cub and Scout
          </NavLink>
          <NavLink to="/fieldtrip" className="nav-link">
            Field Trips
          </NavLink>
          <NavLink to="/infrastructure" className="nav-link">
            Our Infrastructure
          </NavLink>
          <NavLink to="/news" className="nav-link">
            News
          </NavLink>
          <NavLink
            to="/lifeghk
          "
            className="nav-link"
          >
            Life @ GHK
          </NavLink>
          <NavLink to="/Blogs" className="nav-link">
            School, College Blogs
          </NavLink>
        </div>
      )}
    </div>
  );
}
