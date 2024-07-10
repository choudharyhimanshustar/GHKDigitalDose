import React from "react";
import "./Councelling.css";
export default function Councelling() {
  const item1 = `Every child is given enough opportunities to explore \n his / her talent.`;
  const item2 =
    "Specialized inclusive support for children with \n special needs / learning disability is taken into \n consideration.";
  const item3 =
    "The school endeavours towards holistic \n development and ensures the all round \n development of the child";
  const items = [item1, item2, item3];

  const i1 = `Now a day’s most of the students are exposed to knowledge explosion in their study methods and \nextracurricular activities. They are involved in all types of activities such as sports,dance,singing, \nmusic, public speaking etc.`;
  const i2 = `Every student wears a different type of traditional dress. Traditions, customs and colourful festivals \nof the country are observed. We have Traditional Day, when students from all sections of the school \nare traditionally dressed up to exhibit our rich culture.`;
  const i3 = `Our school celebrates Annual day and Annual Sports Day for our students. Students take part in \nvarious activities and show their talents`;
  const i4 = `Training in Personality Development of the students is given by the school.`;
  const i5 = `Environmental Club, Social Service Group, etc., are the part of school which makes school life \nmeaningful. Girl Guides, Boy Scouts, Bulbuls and Cubs are the extended activities of the school.`;
  const i6 = `There are tournaments, cultural shows, competitions, outings, Field trips, Educational trips etc., \nwhich makes the school life lively, interesting and enjoyable.`;
  const i7 = `The key functions of school are School Annual Sports day, Parents’ Day, Teacher’s Day, Children’s \nDay, and Annual Day etc. These are celebrated in a grand manner providing lot of opportunities for \nthe development of students’inborn talents and abilities. A huge platform is provided by the school.`;
  const array = [i1, i2, i3, i4, i5, i6, i7];
  return (
    <div style={{ margin: "0 0 50px 0 " }}>
      <div className="councellingmainimg"></div>
      <div className="guidlines">
        <div className="guidlinesfirst">
          <div className="guidlinestext" style={{ whiteSpace: "pre-line" }}>
            <pre>
              {`Guidance and  Counselling  services are  provided  by
trained   counsellors  to   all  the   students.  The
development  of the  child in   all areas of physical,
psychological,  emotional,   social,   academic   and
behavioral changes   are looked into  and  cared  for.
Close monitoring  and  timely guidance  throughout the
year is provided to all students with the co-operation
of the teachers and the parents`}
            </pre>
          </div>
          <div className="guidlinestext2" style={{ whiteSpace: "pre-line" }}>
            <h2 className="guidlinestext2Header">Area in which we excell:</h2>
            <div className="guidlist">
              <ul style={{ listStyle: "none" }}>
                {/* Using map() to generate list items */}
                {items.map((item, index) => (
                  <li key={index} className="liststext">
                    <div className="bullet"></div>
                    <div className="listdata">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="guidlinesimg"></div>
      </div>
      <div className="group10">
        <div className="group10mainheading">
          <h1>EXTRA-CURRICULAR ACTIVITIES OF THE SCHOOL LIFE</h1>
        </div>
        <div className="rectangle42">
          <div className="group14">
            <div className="frame55">
              <div className="subframe55">
                <ul style={{ listStyle: "none" }}>
                  {/* Using map() to generate list items */}
                  {array.map((item, index) => (
                    <li key={index} className="liststextframe55">
                      <div className="bullet"></div>
                      <pre className="listdataframe55">{item}</pre>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
