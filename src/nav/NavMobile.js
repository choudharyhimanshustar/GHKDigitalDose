import React, { useState } from "react";
import menuImg from "./Images/menu.png";
import BarsIcon from "./Images/navbar.jpeg";
import CloseIcon from "./Images/crossIcon.png";
import "./NavMobile.css"
import downArrow from "./Images/navMobileDropDownArrow.png"
import { navigation } from "./data";

import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";


const NavMobile = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [openDropDown, setOpenDropDown] = useState("");
  const [deg,setDeg]=useState("0deg")
  // const specificDrowpdown = (name) => {
  //   name ? setOpenDropDown(!openDropDown) : null;
  // };

  return (
    <nav className={`${!isMenuOpen?"":""}lg:hidden relative z-20 `}>
      {/* menue icon */}
      {/* <button onClick={() => setIsOpen(!isOpen)}> */}
      {/* {isMenuOpen ? ( */}
        <img
          src={menuImg}
          alt="menuImg"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      {/*  ) : null} */}
      {/* </button> */}
      <div
        className={`${
          !isMenuOpen ? "right-0 " : "-right-full"
        }  fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        {/* close button*/}
        <div style={{ display: "flex", justifyContent: "flex-end" ,marginTop:"20px"}}>
          {!isMenuOpen ? (
            <img
              src={CloseIcon}
              alt="crossIcon"
              onClick={() => setMenuOpen(!isMenuOpen)}
            />
          ) : null}
        </div>
        <div className="navMobileContanier">
          {navigation.map((item, index) => {
            return (
              <ul>
              <li key={index}>
                <div
                  onClick={() => {
                    if (openDropDown === item.name) {
                      setOpenDropDown("");
                      setDeg("180deg")
                    } else {
                      setOpenDropDown(item.name);
                       setDeg("0deg")
                    }
                  }}
                >
                  <div style={{display:"flex",justifyContent:"center", alignItems:"baseline",gap:"5px",color:"#FFDEDE",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px"}}>

                  {item.name}
                  <div>

                  <img style={{transform:`rotate(${openDropDown === item.name?"180deg":"0deg"})`}} src={downArrow} alt="downArrow"/>
                  </div>
                  </div>
                </div>
                <ul className={`${openDropDown === item.name ?"dropDownContanier":""}`}>
                {openDropDown === item.name ? (
                  [...Object.keys(item.dropDownPage)].map((page,id)=>{
                   return (
                    // <div style={{display:"flex",justifyContent:"center",}} >

                      <li key={id} className="dropDownpage">

                      <NavLink to={item.dropDownPage[page]} onClick={()=>{setMenuOpen(!isMenuOpen);setOpenDropDown("")}}>{page}</NavLink>
                      </li>
                    // </div>
                   )
                  }
                  )
                  ) : null}
                  </ul>
              </li>
              </ul>
            );
          })}
        </div>
      </div>
    </nav>
  );
};


export default NavMobile;
