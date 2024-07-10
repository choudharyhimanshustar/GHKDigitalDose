import React from "react";
import { popUpBG, crossIcon } from "../../img";
import "../../../popup.css";

const headsPopUp = ({ status }) => {
  return (
    <div style={style.parent}>
      <div style={style.popUpContainer} className="popUpContainer">
        <div style={style.popUpBackground} className="popUp">
          <div style={style.crossicon} onClick={() => status(false)}>
            <img src={crossIcon} alt="cross-icon" />
          </div>
          <div style={style.popUpHeader}>HEADS</div>
          <div className="tableContainer" style={style.tableContainer}>
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
                    width: "30%",
                    backgroundColor: "#F88888",
                    height: "50px",
                  }}
                >
                  TEACHER'S NAME
                </th>
                <th
                  style={{
                    width: "50%",
                    backgroundColor: "#F37575",
                    borderTopRightRadius: "20px",
                    height: "50px",
                  }}
                >
                  QUALIFICATION
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    ...style.tableFirstColumn,
                    borderBottomLeftRadius: "20px",
                  }}
                >
                  1
                </td>
                <td style={style.tableSecondColumn}>Hemant Daulatram</td>
                <td
                  style={{
                    ...style.tableThirdColumn,
                    borderBottomRightRadius: "20px",
                  }}
                >
                  M.com Dip In Financial Management
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  parent: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "10",
    top: "10px",
  },
  popUpContainer: {
    marginLeft: "-40px",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popUpBackground: {
    // backgroundImage: `url(${popUpBG})`,
    backgroundRepeat: "no-repeat",
    width: "90vw",
    backgroundSize: "cover",
    height: "80vh",
    borderRadius: "80px",
  },
  crossicon: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "30px 40px 0 40px ",
  },
  popUpHeader: {
    display: "flex",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "900",
    color: " #8C1F1F",
  },
  tableContainer: {
    margin: "20px 50px",
    borderRadius: "20px",
    overflow: "scroll",
    height: "28vw",
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

export default headsPopUp;
