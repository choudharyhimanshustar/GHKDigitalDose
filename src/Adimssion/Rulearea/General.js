import React from "react";
import "./Rule.css";
export default function General() {
  const item1 = `Students are expected to observe decorum and show courtesy, consideration and respect for \nothers and do nothing that will bring the Institution’s name into disrepute.`;
  const item2 =
    "Rules of conduct apply to all students from the time they leave home for school/college and till \nthey have returned home.";
  const item3 =
    "Mischief or Indiscipline of any kind, overt display of affection, theft and borrowing without \npermission of the owner and improper handling of the property of others, and damaging the \nproperty of the Institution is punishable.";
  const item4 = `Regularity and punctuality to the school/college is the hallmark of discipline.`;
  const item5 = `Manners and decent language usage is inculcated in the students from an early age`;
  const items = [item1, item2, item3, item4, item5];
  return (
    <div className="rulecomponents1">
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
      </div>
    </div>
  );
}
