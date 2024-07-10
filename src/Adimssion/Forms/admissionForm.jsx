import img from "./heroImage.png";
import React, { useState } from "react";
import "./Form.css";

// const AdmissionForm = () => {
//   return (
//     <div>
//       <div style={style.heroImage}>
//         <img src={heroImage} alt="heroImage" />
//       </div>
//       <div style={style.formCotainer}>
//         <div style={style.formHeaders}>
//           <div>HIGH SCHOOL ADMISSION FORM</div>
//           <div>JR. COLLEGE ADMISSION FORM</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const style = {
//   heroImage: {
//     width: "95vw",
//     objectFit: "contain",
//     display: "flex",
//     justifyContent: "center",
//   },
//   formCotainer: {
//     width: "95vw",
//     margin: "50px 50px",
//   },
//   formHeaders: {
//     width: "95vw",
//     margin: "",
//     display: "flex",
//     justifyContent: "center",
//   },
// };

// export default AdmissionForm;

export default function AdmissionForm() {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Fathername, setFathername] = useState("");
  const [Mothername, setMothername] = useState("");
  const [Guardian, setGuardian] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Office, setOffice] = useState("");
  const [Resident, setResident] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Birth, setBirth] = useState("");
  const [Mtongue, setMtongue] = useState("");
  const [Caste, setCaste] = useState("");
  const [Place, setPlace] = useState("");
  const [Attend, setAttend] = useState("");
  const [Pass, setPass] = useState("");
  const [Cas, setCas] = useState("");
  const [Yes, setYes] = useState(false);
  const [No, setNo] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [Name1, setName1] = useState("");
  const [Surname1, setSurname1] = useState("");
  const [Fathername1, setFathername1] = useState("");
  const [Mothername1, setMothername1] = useState("");
  const [Foccupation, setFoccupation] = useState("");
  const [Moccupation, setMoccupation] = useState("");
  const [Fqualification, setFqualification] = useState("");
  const [Mqualification, setMqualification] = useState("");
  const [School, setSchool] = useState("");
  const [Admission, setAdmission] = useState("");
  const [Male, setMale] = useState(false);
  const [Female, setFemale] = useState(false);
  const [Other, setOther] = useState(false);
  //  const [selectedGender, setSelectedGender] = useState([]);
  const [Office1, setOffice1] = useState("");
  const [Resident1, setResident1] = useState("");
  const [Telephone1, setTelephone1] = useState("");
  const [Mobile1, setMobile1] = useState("");
  const [Birth1, setBirth1] = useState("");
  const [Members, setMembers] = useState("");
  const [Caste1, setCaste1] = useState("");
  const [Place1, setPlace1] = useState("");
  const [Income, setIncome] = useState("");
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleCheckbox = (value) => {
    if (selectedOptions2.includes(value)) {
      setSelectedOptions2(
        selectedOptions2.filter((option) => option !== value)
      );
    } else {
      setSelectedOptions2([...selectedOptions2, value]);
    }
  };

  // const handleCheckboxChange1 = (e) => {
  //   const{value,checked}=e.target;
  //   if (checked) {
  //     setSelectedGender([...selectedGender, value]);
  //   }
  //    else {
  //     setSelectedGender(selectedGender.filter((option) => option !== value));
  //   }
  // };

  const clearForm = () => {
    setName("");
    setSurname("");
    setFathername("");
    setMothername("");
    setGuardian("");
    setOccupation("");
    setOffice("");
    setResident("");
    setTelephone("");
    setMobile("");
    setBirth("");
    setMtongue("");
    setCaste("");
    setPlace("");
    setAttend("");
    setPass("");
    setCas("");

    setName1("");
    setSurname1("");
    setFathername1("");
    setMothername1("");
    setFoccupation("");
    setMoccupation("");
    setFqualification("");
    setMqualification("");
    setSchool("");
    setAdmission("");
    setOffice1("");
    setResident1("");
    setTelephone1("");
    setMobile1("");
    setBirth1("");
    setMembers("");
    setCaste1("");
    setPlace1("");
    setIncome("");
  };
  const handleYes = () => {
    setYes(!Yes);
    if (!Yes) {
      setNo(false);
    }
  };

  const handleNo = (e) => {
    setNo(!No);
    if (!No) {
      setYes(false);
    }
  };

  const handleMale = () => {
    setMale(!Yes);
    if (!Yes) {
      setFemale(false);
      setOther(false);
    }
  };

  const handleFemale = (e) => {
    setFemale(!Yes);
    if (!Yes) {
      setMale(false);
      setOther(false);
    }
  };

  const handleOther = () => {
    setOther(!Yes);
    if (!Yes) {
      setMale(false);
      setFemale(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    clearForm();
  };

  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const toggleForm1 = () => {
    setShowForm1(true);
    setShowForm2(false);
  };
  const toggleForm2 = () => {
    setShowForm1(false);
    setShowForm2(true);
  };
  const handleSubmitForm1 = (e) => {
    e.preventDefault();
    clearForm();
  };

  const handleSubmitForm2 = (e) => {
    e.preventDefault();
    clearForm();
  };
  return (
    <div className="App">
      {/* <Header /> */}

      <div className="logo">
        <img src={img} alt=""></img>
      </div>

      <div className="Form">
        <div className="Row">
          <button
            className="highschl-button FormPageButton"
            style={{ backgroundColor: showForm1 ? "#d3671946" : "transparent" }}
            onClick={toggleForm1}
          >
            HIGH SCHOOL ADMISSION FORM
          </button>
          <button
            className="jrclg-button FormPageButton"
            style={{ backgroundColor: showForm2 ? "#f080808a" : "transparent" }}
            onClick={toggleForm2}
          >
            JR COLLEGE ADMISSION FORM
          </button>
        </div>
        {showForm1 ? (
          <form onSubmit={handleSubmitForm1} className="schl-form">
            <fieldset className="admissionFormContainer">
              <div className="firstRow">
                <div className="firstElement">
                  {" "}
                  <label className="formLabel ">NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="formBox"
                    value={Name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="sur-name">
                  {" "}
                  <label className="formLabel surLabel">SUR NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="surFormBox"
                    value={Surname}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">FATHER'S NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Fathername}
                    onChange={(e) => {
                      setFathername(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">MOTHER'S NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Mothername}
                    onChange={(e) => {
                      setMothername(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">NAME OF THE PARENT/GUARDIAN<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Guardian}
                    onChange={(e) => {
                      setGuardian(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">OCCUPATION OF THE PARENT/GUARDIAN<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Occupation}
                    onChange={(e) => {
                      setOccupation(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">OFFICE ADDRESS<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="third-box"
                    value={Office}
                    onChange={(e) => {
                      setOffice(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">RESIDENTIAL ADDRESS<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="third-box"
                    value={Resident}
                    onChange={(e) => {
                      setResident(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">TELEPHONE<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Telephone}
                    onChange={(e) => {
                      setTelephone(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">MOBILE<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">DATE OF BIRTH<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="date"
                    className="second-box"
                    value={Birth}
                    onChange={(e) => {
                      setBirth(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">MOTHER TONGUE<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Mtongue}
                    onChange={(e) => {
                      setMtongue(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">CASTE AND RELIGION<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Caste}
                    onChange={(e) => {
                      setCaste(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">PLACE OF BIRTH<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Place}
                    onChange={(e) => {
                      setPlace(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">LAST SCHOOL/COLLEGE ATTENDED<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Attend}
                    onChange={(e) => {
                      setAttend(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">STANDARD PASSED<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">WHETHER YOU BELONG TO (SC/ST/OBC/GEN)<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="fourth-box"
                    value={Cas}
                    onChange={(e) => {
                      setCas(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="healthyRow">
                <div className="check-box">
                  <label className="formLabel groupLabel">WHETHER THE PUPIL IS COMPLETELY HEALTHY ?<sup style={{ color: "red" }}>*</sup> </label>
                  
                </div>
                <div className="check-box">
                <input
                    type="checkbox"
                    className="checkboxinput"
                    checked={Yes}
                    onChange={handleYes}
                  />{" "}
                  <span className="checkboxText" style={{marginRight:"20px"}}>Yes</span>
                  <input
                    type="checkbox"
                    className="checkboxinput"
                    checked={No}
                    onChange={handleNo}
                  />
                  <span className="checkboxText">No</span>
                </div>
              </div>

              <div className="Row">
                <label className="formLabel groupLabel">WHETHER THE FOLLOWING DOCUMENTS ARE ATTACHED?
                <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="lastCheckBox">
                <label className="lastLabel groupLabel">
                  <input
                    type="checkbox"
                    className="checkboxinput"
                    value="option1"
                    checked={selectedOptions.includes("option1")}
                    onChange={() => handleCheckboxChange("option1")}
                  />
                  STATEMENT OF MARKS
                </label>
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option2"
                    checked={selectedOptions.includes("option2")}
                    onChange={() => handleCheckboxChange("option2")}
                  />
                  LEAVING CERTIFICATE
                </label>
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option3"
                    checked={selectedOptions.includes("option3")}
                    onChange={() => handleCheckboxChange("option3")}
                  />
                  PASSING CERTIFICATE (IF APPLICABLE)
                </label>
              
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option4"
                    checked={selectedOptions.includes("option4")}
                    onChange={() => handleCheckboxChange("option4")}
                  />
                  ELIGIBLE CERTIFICATE
                </label>
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option5"
                    checked={selectedOptions.includes("option5")}
                    onChange={() => handleCheckboxChange("option5")}
                  />
                  MIGRATION CERTIFICATE (IF APPLICABLE)
                </label>
              </div>
            </fieldset>
          </form>
        ) : (
          <form onSubmit={handleSubmitForm2} className="clg-form">
            <fieldset className="admissionFormContainer">
              <div className="firstRow">
                <div className="firstElement">
                  {" "}
                  <label className="formLabel ">NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="formBox"
                    value={Name1}
                    onChange={(e) => {
                      setName1(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="sur-name">
                  {" "}
                  <label className="formLabel surLabel">SUR NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="surFormBox"
                    value={Surname1}
                    onChange={(e) => {
                      setSurname1(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">FATHER'S NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Fathername1}
                    onChange={(e) => {
                      setFathername1(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">MOTHER'S NAME<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Mothername1}
                    onChange={(e) => {
                      setMothername1(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">FATHER'S OCCUPATION<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Foccupation}
                    onChange={(e) => {
                      setFoccupation(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">MOTHER'S OCCUPATION<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Moccupation}
                    onChange={(e) => {
                      setMoccupation(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">ACADEMIC QUALIFICATION OF FATHER<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Fqualification}
                    onChange={(e) => {
                      setFqualification(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">ACADEMIC QUALIFICATION OF MOTHER<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Mqualification}
                    onChange={(e) => {
                      setMqualification(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">NAME OF PREVIOUS SCHOOL ATTENDED<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={School}
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">ADMISSION SOUGHT IN CLASS<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Admission}
                    onChange={(e) => {
                      setAdmission(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="genderRow">
                <label className="formLabel ">GENDER<sup style={{ color: "red" }}>*</sup> </label>
                <div style={{ paddingTop: "16px", paddingLeft: "20px",display:"flex",gap:"20px" }}>

                <div
                  className="check-box"
                >
                  <input
                    type="checkbox"
                    className="checkboxinput"
                    checked={Male}
                    onChange={handleMale}
                  />{" "}
                  <span className="checkboxText">MALE</span>
                </div>
                <div className="check-box">
                  <input
                    type="checkbox"
                    className="checkboxinput"
                    checked={Female}
                    onChange={handleFemale}
                  />
                  <span className="checkboxText">FEMALE</span>
                </div>
                <div className="check-box">
                  <input
                    type="checkbox"
                    className="checkboxinput"
                    checked={Other}
                    onChange={handleOther}
                  />
                  <span className="checkboxText">Other</span>
                </div>
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">OFFICE ADDRESS<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="third-box"
                    value={Office1}
                    onChange={(e) => {
                      setOffice1(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">RESIDENTIAL ADDRESS<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="third-box"
                    value={Resident1}
                    onChange={(e) => {
                      setResident1(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">TELEPHONE<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Telephone1}
                    onChange={(e) => {
                      setTelephone1(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">MOBILE<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Mobile1}
                    onChange={(e) => {
                      setMobile1(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">DATE OF BIRTH<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="date"
                    className="date-input"
                    value={Birth1}
                    onChange={(e) => {
                      setBirth1(e.target.value);
                    }}
                    placeholder=" "
                  />
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">NO OF MEMBERS DEPENDENT<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="member-box"
                    value={Members}
                    onChange={(e) => {
                      setMembers(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">CASTE AND SUB CASTE<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Caste1}
                    onChange={(e) => {
                      setCaste1(e.target.value);
                    }}
                  />{" "}
                </div>
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">PLACE OF BIRTH<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="second-box"
                    value={Place1}
                    onChange={(e) => {
                      setPlace1(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <div className="schl-name">
                  {" "}
                  <label className="formLabel groupLabel">ANNUAL INCOME (APPROX.)<sup style={{ color: "red" }}>*</sup> </label>
                  <input
                    type="text"
                    className="fourth-box"
                    value={Income}
                    onChange={(e) => {
                      setIncome(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>

              <div className="Row">
                <label className="formLabel groupLabel">WHETHER THE FOLLOWING DOCUMENTS ARE ATTACHED?
                <span style={{ color: "red" }}>*</span>
                </label>
              </div>

              <div className="lastCheckBox">
                <label className="lastLabel groupLabel">
                  <input
                    type="checkbox"
                    className="checkboxinput"
                    value="option1"
                    checked={selectedOptions2.includes("option1")}
                    onChange={() => handleCheckbox("option1")}
                  />
                  STATEMENT OF MARKS
                </label>
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option2"
                    checked={selectedOptions2.includes("option2")}
                    onChange={() => handleCheckbox("option2")}
                  />
                  LEAVING CERTIFICATE
                </label>
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option3"
                    checked={selectedOptions2.includes("option3")}
                    onChange={() => handleCheckbox("option3")}
                  />
                  PASSING CERTIFICATE (IF APPLICABLE)
                </label>
              
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option4"
                    checked={selectedOptions2.includes("option4")}
                    onChange={() => handleCheckbox("option4")}
                  />
                  ELIGIBLE CERTIFICATE
                </label>
                <label className="lastLabel groupLabel">
                  <input
                    className="checkboxinput"
                    type="checkbox"
                    value="option5"
                    checked={selectedOptions2.includes("option5")}
                    onChange={() => handleCheckbox("option5")}
                  />
                  MIGRATION CERTIFICATE (IF APPLICABLE)
                </label>
              </div>
            </fieldset>
          </form>
        )}
        <button
          className="FormPageButton"
          onClick={handleSubmit}
          type="submit"
          style={{
            width: "143px",
            height: "40px",
            backgroundColor: "red",
            color: "white",
            marginBottom: "50px",
          }}
        >
          save
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
