import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css'
export default function AdmissionDropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="dropdown-button">
        Admissions
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <NavLink to="/admission/document" className="nav-link">
            Admission Document
          </NavLink>
          <NavLink to="/admission/rule" className="nav-link">
            Rule and Regulations
          </NavLink>
          <NavLink to="/admission/councelling" className="nav-link">
            Admission Councelling
          </NavLink>
          <NavLink to="/admission/form" className="nav-link">
            Admission Form
          </NavLink>
          <NavLink to="/admission/calender" className="nav-link">
            Admission Calender
          </NavLink>
          <NavLink to="/admission/transport" className="nav-link">
            Transeport Fasility
          </NavLink>
          <NavLink to="/admission/timing" className="nav-link">
            School and College Timings
          </NavLink>
        </div>
      )}
    </div>
  
  )
}


export  function AboutDropDownMenu() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <div className="dropdown-button">
          About
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/admission/document" className="nav-link">
              About
            </NavLink>
            <NavLink to="/admission/rule" className="nav-link">
              Rule and Regulations
            </NavLink>
            <NavLink to="/admission/councelling" className="nav-link">
              Admission Councelling
            </NavLink>
            <NavLink to="/admission/form" className="nav-link">
              Admission Form
            </NavLink>
            <NavLink to="/admission/calender" className="nav-link">
              Admission Calender
            </NavLink>
            <NavLink to="/admission/transport" className="nav-link">
              Transeport Fasility
            </NavLink>
            <NavLink to="/admission/timing" className="nav-link">
              School and College Timings
            </NavLink>
          </div>
        )}
      </div>
    
    )
}
  