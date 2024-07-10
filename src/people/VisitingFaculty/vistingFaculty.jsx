import React from "react";
import heroImage from "./heroImage.png";

const VisitingFaculty = () => {
  return (
    <div>
      <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      <div className="my-20 px-20" style={style.tableContainer}>
        <table style={style.table}>
          <tr>
            <th
              style={{
                width: "20%",
                backgroundColor: "#9A7474",
                borderTopLeftRadius: "20px",
                height: "50px",
              }}
            >
              SR. NO
            </th>
            <th
              style={{
                width: "50%",
                backgroundColor: "#F37575",
                borderTopRightRadius: "20px",
                height: "50px",
              }}
            >
              FACULTIES
            </th>
          </tr>

          <tr>
            <td style={style.tableFirstColumn}>1</td>
            <td style={style.tableSecondColumn}>
              Trainers for personality Development
            </td>
          </tr>
          <tr>
            <td style={style.tableFirstColumn}>2</td>
            <td style={style.tableSecondColumn}>
              Trainers for Vocational Guide
            </td>
          </tr>
          <tr>
            <td style={style.tableFirstColumn}>3</td>
            <td style={style.tableSecondColumn}>Mind Power Workshop</td>
          </tr>
          <tr>
            <td style={style.tableFirstColumn}>4</td>
            <td style={style.tableSecondColumn}>Dance Trainers</td>
          </tr>
          <tr>
            <td
              style={{
                ...style.tableFirstColumn,
                borderBottomLeftRadius: "20px",
              }}
            >
              5
            </td>
            <td
              style={{
                ...style.tableSecondColumn,
                borderBottomRightRadius: "20px",
              }}
            >
              Sport Trainers(Skating, Karate, Gymnastics, Football)
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const style = {
  card: {
    // height: "292px",
    borderRadius: "30px",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexShrink: "1",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  tableContainer: {
    // margin: "150px 50px 100px 50px",
    // borderRadius: "20px",
    // overflow: "scroll",
    // padding: "0px 50px",
  },
  table: {
    width: "100%",
    textAlign: "center",
  },
  tableFirstColumn: {
    backgroundColor: "#EDC2C2",
    height: "50px",
  },
  tableSecondColumn: {
    backgroundColor: "#FFC4C4",
    height: "50px",
  },
  tableThirdColumn: {
    backgroundColor: "#E99292",
    height: "50px",
  },
};

export default VisitingFaculty;
