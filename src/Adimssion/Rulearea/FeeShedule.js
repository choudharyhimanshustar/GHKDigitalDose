import React from "react";
import "./Rule.css";
export default function FeeShedule() {
  const item1 = `Parents are requested to strictly follow the payment schedule of fees failing which appropriate \naction may be taken.`;
  const item2 = "Delay of fees beyond a fixed date will be fined.";
  const item3 =
    "Admission fees to be paid only by new entrants and students promoted from Sr. Kg. to Std. I and \nStd IV to Std V";
  const item4 = `In case of withdrawal of admission, 3 months notice is to be given otherwise 3 months fees are to \nbe paid.`;
  const item5 = `Fee cards and fee receipts should be preserved by the parents`;
  const items = [item1, item2, item3, item4, item5];

  const i1 =
    "Fees can be paid in school (cash , Cheque) or in the bank by online mode(Gpay).";
  const i2 =
    "All fees of the Pre-Primary section to be paid in the school office during the office hours.";
  const i3 = "A Fees once paid will not be refunded.";
  const array = [i1, i2, i3];

  return (
    <div>
      <div className="rulecomponents2">
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
        </div>
      </div>
    </div>
  );
}
