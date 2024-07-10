import React from "react";
import popUpBG from "./images/popUpBG.png";
import crossIcon from "./images/crossIcon.png";

const headsPopUp = ({ status, image }) => {
  return (
    <div style={style.parent}>
      <div style={style.popUpContainer}>
        <div style={style.popUpBackground} className="NewsPopUp">
          <div style={style.crossicon} onClick={() => status(false)}>
            <img src={crossIcon} alt="cross-icon" />
          </div>
          <div>
            <img src={image} class="newsImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  parent: {
    position: "fixed",
    width: "80%",
    // height: "10%",
    zIndex: "10",
    marginLeft: "10%",
    marginRight: "10%",
  },
  popUpContainer: {
    position: "absolute",
    width: "100%",
    // height: "10%",
    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popUpBackground: {
    // backgroundImage: `url(${popUpBG})`,
    backgroundRepeat: "no-repeat",
    width: "80vw",
    backgroundSize: "cover",
    height: "80vh",
    borderRadius: "80px",
  },
  crossicon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "30px 40px 0 40px ",
  },
  popUpHeader: {
    display: "flex",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "900",
    color: " #5E1010",
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
