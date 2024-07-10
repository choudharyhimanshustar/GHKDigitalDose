import React from "react";

function CouncilPopup1({ visible, onClose }) {
  const handelOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handelOnClose}
      className="mx-80 fixed inset-0 bg-opacity-30 flex justify-center items-center"
    >
      <div style={{ backgroundColor: "#D9D9D9" }} className="bg-[#D9D9D9]">
        {" "}
        <button
          style={{ fontWeight: "font-bold" }}
          className="font-bold"
          onClick={onClose}
        >
          X
        </button>
        <h2
          className="flex justify-center font-bold mt-20 text-[#5E1010]"
          style={{
            textAlign: "center",
            color: "#5E1010",
            fontSize: 48,
            fontFamily: "Reem Kufi Fun",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: 0.96,
            wordWrap: "break-word",
          }}
        >
          house system
        </h2>
        <br />
        <br />
        <p
          className="text-lg text-gray leading-7 px-34 sm:px-32"
          style={{
            width: 1099,
            textAlign: "justify",
            color: "#180202",
            fontSize: 24,
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: 1.3,
            letterSpacing: 0.48,
            wordWrap: "break-word",
          }}
        >
          In order to inculcate a healthy spirit of competition and to get the
          best out of each individual student, our school students are divided
          into four houses to encourage them to participate in various
          activities and to get more and more scores for their respective
          houses. Even the teachers belong to the various houses and we have one
          teacher who heads the house and a team of teachers who belong to each
          house. Thus the house system induces a spirit of belongingness to the
          institution and the students work hard for the scores of their houses.
          <br />
        </p>
      </div>
    </div>
  );
}

export default CouncilPopup1;
