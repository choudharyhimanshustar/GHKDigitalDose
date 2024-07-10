import React from "react";

export default function Attendence() {
  const item1 = `Regular attendance is compulsory. Exemption will be considered only for genuine medical \nreasons. No leave will be granted for celebrations, visits to native places or any other reason \nduring the academic year.`;
  const item2 =
    "A student who is late or has been absent on the previous day without leave having been \nsanctioned must obtain the permission of the Class Teacher/Supervisor before attending class \nand submit a leave note stating reason for absence.";
  const item3 =
    "Leave of absence except in the case of unforeseen illness or emergency requires prior sanction \nof the school authorities. For absence due to illness:";
  const items = [item1, item2, item3];

  const i1 = "For 1 day leave – parents may fill in the school calendar";
  const i2 =
    "For 2 days or more – an application in writing along with a medical certificate from a registered medical \npractitioner must be submitted.";
  const array = [i1, i2];

  const it1 = `A student returning to school after suffering from an infectious or contagious disease should \nsubmit a doctor’s fitness certificate.`;
  const it2 =
    "Leave of absence during a test/examination is not permitted except for a genuine medical \nreason. A sick child will not be permitted to answer a test. A medical certificate has to be \nsubmitted to avail leave of absence.";
  const it3 =
    "However absence at test/examinations on account of participation in sports/co-curricular \nactivities and representing the school or participating at the District, State and National levels will \nbe considered.";
  const ite = [it1, it2, it3];

  return (
    <div className="rulecomponents4">
      <div className="rulecomponents1text">
        <ul style={{ listStyle: "none" }}>
          {/* Using map() to generate list items */}
          {items.map((item, index) => (
            <li key={index} className="component1list">
              <div className="componentbullet"></div>
              <div className="componentlistdata">{item}</div>
            </li>
          ))}
        </ul>
        <div className="insidetextcmp1">
          <ul style={{ listStyle: "none" }}>
            {/* Using map() to generate list items */}
            {array.map((item, index) => (
              <li key={index} className="liststextinsidecmp1">
                <div className="bulletuper"></div>
                <div className="listdatainsidecmp1">{item}</div>
              </li>
            ))}
          </ul>
        </div>
        <ul style={{ listStyle: "none" }}>
          {/* Using map() to generate list items */}
          {ite.map((item, index) => (
            <li key={index} className="component1list">
              <div className="componentbullet"></div>
              <div className="componentlistdata">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
