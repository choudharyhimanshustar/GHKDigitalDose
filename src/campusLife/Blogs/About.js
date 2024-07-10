import React from "react";
import user from "./img/user.png";
import calender from "./img/calender.png";
import { team } from "./data";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section id="team" className="py-8 bg-[]">
      <div className="container mx-auto text-center">
        {/* about us grid*/}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-[30px]">
          {team.map((item, index) => {
            const { image, name, description,link,date, more,herf } = item;
            return (
              <div className=" text-center lg:text-left mb-12 rounded-3xl bg-[#FFE0E0] py-[10px]" key={index}>
                <img className="mx-auto mt-5 h-auto w-2/3 lg:mx-0 mb-6" src={image} alt="" />
                <h4 className="text-2xl mb-2 text-[#CD5C5C] font-bold">{name}</h4>
                
                <p className="max-w-[332px] text-[#F08080] lg:max-w-[350px] mx-auto lg:mx-0">
                  {description}
                </p>
                <div className="flex justify-end">
                <div className="flex bg-[#F6AFAF] text-[#AE4747] rounded-3xl mx-1">
                <img src={user} alt="Madhukar Tonpe" />
                <button className="bg-[#F6AFAF] text-[#AE4747] rounded-3xl mx-1">{link}</button>

                </div>
                <div className="flex bg-[#F6AFAF] text-[#AE4747] rounded-3xl mx-1"> 

                <img src={calender} alt="calender" />
                <button className="text-nowrap">{date}</button>
                </div>
                <NavLink to={herf}>

                <button className="bg-[#F6AFAF] text-[#AE4747] rounded-3xl sm:mx-20 mt-[3px]">{more}</button>
                </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;