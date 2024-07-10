import React from "react";
import heroImage from "./heroImage.png";

const HelpingStaff = () => {
  return (
    <div>
      <div className="mx-5 flex-shrink overflow-hidden  rounded-b-3xl sm:rounded-none md:rounded-br-3xl">
        <img src={heroImage} style={{ width: "100%" }} alt="heroImage" />
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          color: "#D2C4C4",
          fontSize: "30px",
          margin: "150px 0 300px 0px",
        }}
      >
        CONTENT FOR THIS SECTION IS COMING SOON.
      </div> */}
      <div className="mx-20 py-20" style={style.tableContainer}>
        <table style={style.table}>
          <tr>
            <th
              style={{
                width: "20%",
                backgroundColor: "#E89797",
                borderTopLeftRadius: "20px",
                height: "50px",
                color:"white",
                fontFamily:"Poppins",
              }}
            >
              SR. NO
            </th>
            <th
              style={{
                width: "50%",
                backgroundColor: "#FAAEA4",
                borderTopRightRadius: "20px",
                height: "50px",
                color:"#A41A1A",
                fontFamily:"Poppins",
              }}
            >
              FACULTY NAME
            </th>
          </tr>

          <tr>
            <td style={style.tableSecondColumn}>1</td>
            <td style={style.tableThirdColumn}>
            Babu Bhoravkar
            </td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>2</td>
            <td style={style.tableThirdColumn}>
            Vanita Ramabhau
            </td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>3</td>
            <td style={style.tableThirdColumn}>Manda Krisshna Gore</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>4</td>
            <td style={style.tableThirdColumn}>Ramakant Waghela</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>5</td>
            <td style={style.tableThirdColumn}>Suraksha Kkarlekar</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>6</td>
            <td style={style.tableThirdColumn}>Geeta More</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>7</td>
            <td style={style.tableThirdColumn}>Sunil More</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>8</td>
            <td style={style.tableThirdColumn}>Sunanda Patil</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>9</td>
            <td style={style.tableThirdColumn}>Mrs Preeti</td>
          </tr>
          <tr>
            <td style={style.tableSecondColumn}>10</td>
            <td style={style.tableThirdColumn}>Bijay Kumar Paswan</td>
          </tr>
          <tr>
            <td
              style={{
                ...style.tableSecondColumn,
                borderBottomLeftRadius: "20px",
              }}
            >
              11
            </td>
            <td
              style={{
                ...style.tableThirdColumn,
                borderBottomRightRadius: "20px",
              }}
            >
              E Chitra
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
    // // height: "28vw",
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
    backgroundColor: "#FFDDDD",
    height: "50px",
    color:"#D44A4A",
    fontFamily:"Poppins",
  },
  tableThirdColumn: {
    backgroundColor: "#FFDEDE",
    height: "50px",
    color:"#D44A4A",
    fontFamily:"Poppins",
  },
};

export default HelpingStaff;
