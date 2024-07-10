import React from "react";

export default function Withdrawl() {
  const item1 = `Every bonafide student of our junior college must wear the college Identity card in the college \ncampus.`;
  const item2 =
    "Students must not be seen in the corridor when classes are in session.";
  const item3 =
    "Students must use the Library facility and maintain silence in the reading Hall.";
  const item4 = `Students can issue one book at a time against the library card for one week. The books have to \nbe returned after the week. Books can be re-issued once again. If not returned on time a penalty \nof Re. 1/- will be charged per day.`;
  const item5 = `Any loss of book is liable for penalty and the full cost of the book has to be paid.`;
  const item6 =
    "Students must not indulge in any form of ragging. Any student found ragging or involved in any \nsuch activity will be punished as per the provisions of Law.";
  const item7 =
    "Students should not cause any damage to the college property, failing which he / she will be \nfined.";
  const item8 =
    "Students should not invite outsiders or friends from other colleges to the premises.";
  const item9 =
    "Students with poor attendance or poor academic performance may not be permitted to \ncontinue in the college. Regular attendance is the only criteria for continuation in the college.";
  const item10 =
    "Use of filthy language is strictly prohibited in the college premises.";

  const items = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
  ];
  return (
    <div className="rulecomponents6">
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
