import React, { useState } from "react";
import "./AcademicResults.css";
import schoolImage1 from "./images/schoolImage1.png";
import schoolImage from "./images/schoolImage.png";
import collegeImage from "./images/collegeImage.png";
import PDFLink from "./images/PDFLink.png";
import collegeImage1 from "./images/collegeImage1.png";
import acdmic_result from "./images/acdmic_result.png";
import Image10th from "./images/10thImage.png";
import allImage1 from "./images/allImage1.png";
import Image11th from "./images/11thImage.png";
import Image12th from "./images/12thImage.png";
import searchicon from "./images/searchicon.png";
import addNewImage from "./images/addNewImage.png";

// import fs from 'fs';
import preval from 'babel-plugin-preval/macro';

function AcademicResults() {
  function moveFileToPublic(filePath, fileName) {
    // preval`
    // const source = fs.createReadStream('${filePath}');
    // const destination = fs.createWriteStream('<public folder>/${fileName}');
    // source.pipe(destination);`
    const output1 = preval`
        const fs = require('fs');
        module.exports = fs.readFileSync('${filePath}', 'utf8');
        `
        preval`
        const fs = require('fs');
        fs.writeFileSync('./books.txt', '${output1}', 'utf8');
      `
      console.log("filePath: ",filePath);
      console.log("read file: ",output1);
  }
  const [searchInput, setSearchInput] = useState("");
  const [imageSource, setImageSource] = useState(schoolImage1);
  const [imageSource1, setImageSource1] = useState(collegeImage);
  const [imageClicked, setImageClicked] = useState({
    allImage: false,
    ElthImage: false,
    TwthImage: false,
    tenthImage: false,
  });
  const [schoolSelected, setSchoolSelected] = useState(false);
  const [collegeSelected, setCollegeSelected] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [file,setFile] = useState();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const tableDataSchool = [
    /* School table data */
    {
      sno: 1,
      examination: "SSC Result",
      link: PDFLink,
      date: "March - 2023",
      backgroundColor: "#FFFCFC",
    },
    {
      sno: 2,
      examination: "SSC Students Result",
      link: PDFLink,
      date: "2021-2022",
      backgroundColor: "#FFF3F3",
    },
    {
      sno: 3,
      examination: "SSC Examination",
      link: PDFLink,
      date: "2019-2020",
      backgroundColor: "#FFFCFC",
    },
  ];

  const tableDataElth = [
    /* ElthImage table data */
  ];

  const tableDataTwth = [
    {
      sno: 4,
      examination: "H. S. C Examination",
      link: PDFLink,
      date: "February - 2023",
      backgroundColor: "#FFF3F3",
    },
    {
      sno: 5,
      examination: "XII Standard Students List",
      link: PDFLink,
      date: "2020-2021",
      backgroundColor: "#FFF3F3",
    },
    {
      sno: 6,
      examination: "SYJC Board Examination Marklist",
      link: PDFLink,
      date: "2021-2022",
      backgroundColor: "#FFFCFC",
    },
  ];

  const handleImageClick = () => {
    const schoolImagePath = schoolImage;
    const collegeImagePath = schoolImage1;
    setSchoolSelected(!schoolSelected);
    setImageSource(schoolSelected ? collegeImagePath : schoolImagePath);
    if (collegeSelected) {
      setCollegeSelected(false);
      setImageSource1(collegeImage);
    }
  };

  const handleImageClick1 = () => {
    const schoolImagePath1 = collegeImage;
    const collegeImagePath1 = collegeImage1;
    setCollegeSelected(!collegeSelected);
    setImageSource1(collegeSelected ? schoolImagePath1 : collegeImagePath1);
    if (schoolSelected) {
      setSchoolSelected(false);
      setImageSource(schoolImage1);
    }
  };

  const handleAllClick = (imageName) => {
    setImageClicked((prevState) => ({
      ...prevState,
      [imageName]: !prevState[imageName],
    }));
  };

  const test = (e)=>{
    setFile(e.target.value)
    // setFile(e.target.files[0]); 
    const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
    console.log(e.target.files[0]);
    console.log("test url",URL.createObjectURL(blob));
    console.log("check value: ",e.target.result);
    console.log("check element: ",e.target.value);
  }

  const handleSaveChanges = (e) => {
    alert("I am an alert box!");
    const sno = document.getElementById("inputtexts1").value;
    const examination = document.getElementById("inputtexts").value;
    const link = document.getElementById("formFile").value; // Assuming inputtexts2 is the ID of the date input field
    const date = document.getElementById("inputtexts2").value;

    const newRow = { sno, examination, link, date };

    // Update the table data state with the new row
    setTableData([...tableData, newRow]);
    moveFileToPublic(file,"test file")
  };

  return (
    <div className="AcademicResultsSclClg">
      <div className="academicResultImage">
        <div className="TextAcademicResult">Results</div>
        <img
          src={acdmic_result}
          alt="AcademicResults"
          className="AcademicRstImage"
        />
      </div>
      <div className="CollegeSchool">
        <img
          src={imageSource}
          alt="schoolImage"
          className="resultSchoolImage"
          onClick={handleImageClick}
        />
        <img
          src={imageSource1}
          alt="collegeImage"
          className="collegeImage"
          onClick={handleImageClick1}
        />
      </div>
      {schoolSelected ? (
        /* Render school table here */
        <div className="DivisionsSTD">
          <img
            src={Image10th}
            alt="10thImage"
            className={`tenthImage ${
              imageClicked.tenthImage ? "borderApplied" : ""
            }`}
            onClick={() => handleAllClick("tenthImage")}
          />
        </div>
      ) : collegeSelected ? (
        /* Render college table here */
        <div className="DivisionsSTD">
          <img
            src={allImage1}
            alt="allImage"
            className={`allImage ${
              imageClicked.allImage ? "borderApplied" : ""
            }`}
            onClick={() => handleAllClick("allImage")}
          />
          <img
            src={Image11th}
            alt="11thImage"
            className={`ElthImage ${
              imageClicked.ElthImage ? "borderApplied1" : ""
            }`}
            onClick={() => handleAllClick("ElthImage")}
          />
          <img
            src={Image12th}
            alt="12thImage"
            className={`TwthImage ${
              imageClicked.TwthImage ? "borderApplied2" : ""
            }`}
            onClick={() => handleAllClick("TwthImage")}
          />
        </div>
      ) : null}

      <div className="SearchAddNew">
        <div className="Header1searchbar">
          <input
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput}
            className="Header1search"
          />
          <div className="Searchicon">
            <img src={searchicon} alt="searchicon"></img>
          </div>
        </div>
        <div className="AddNewData">
          <img
            src={addNewImage}
            alt="addNewImg"
            className="AddNewBtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add New Data
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Input fields for new data */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputtexts1"
                      className="col-sm-2 col-form-label"
                    >
                      Sr no.
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputtexts1"
                        name="sno"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputtexts"
                      className="col-sm-2 col-form-label"
                    >
                      Examination
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputtexts"
                        name="examination"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Attach PDF
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="link"
                      onChange={(e)=>test(e)}
                    />
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputtexts2"
                      className="col-sm-2 col-form-label"
                    >
                      Date
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="date"
                        className="form-control"
                        id="inputtexts2"
                        name="date"
                      />
                    </div>
                  </div>
                  {/* End of input fields */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveChanges}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tableResult">
        <div className="roundedTableWrapper">
          {schoolSelected ? (
            <table
              className="table ResultTable roundedTable"
              style={{ textAlign: "center" }}
            >
              {/* Render school table data */}
              <thead>
                <tr>
                  <th scope="col">S NO.</th>
                  <th scope="col">EXAMINATION</th>
                  <th scope="col">LINK</th>
                  <th scope="col">DATE</th>
                </tr>
              </thead>
              <tbody>
                {tableDataSchool.map((rowData, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "oddRow" : "evenRow"}
                  >
                    <td scope="row">{rowData.sno}</td>
                    <td>{rowData.examination}</td>
                    <td>
                      <a
                        href={`./images/filename_${index}.pdf`}
                        download={`filename_${index}.pdf`}
                      >
                        <img
                          src={rowData.link}
                          alt="PDFLink"
                          className="PDFLink"
                        />
                      </a>
                    </td>
                    <td>{rowData.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : collegeSelected && imageClicked.ElthImage ? (
            <table
              className="table ResultTable roundedTable"
              style={{ textAlign: "center" }}
            >
              {/* Render ElthImage table data */}
              <thead>
                <tr>
                  <th scope="col">S NO.</th>
                  <th scope="col">EXAMINATION</th>
                  <th scope="col">LINK</th>
                  <th scope="col">DATE</th>
                </tr>
              </thead>
              <tbody>
                {tableDataElth.map((rowData, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "oddRow" : "evenRow"}
                  >
                    <td scope="row">{rowData.sno}</td>
                    <td>{rowData.examination}</td>
                    <td>
                      <a
                        href={`./images/filename_${index}.pdf`}
                        download={`filename_${index}.pdf`}
                      >
                        <img
                          src={rowData.link}
                          alt="PDFLink"
                          className="PDFLink"
                        />
                      </a>
                    </td>
                    <td>{rowData.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : collegeSelected && imageClicked.TwthImage ? (
            <table
              className="table ResultTable roundedTable"
              style={{ textAlign: "center" }}
            >
              {/* Render TwthImage table data */}
              <thead>
                <tr>
                  <th scope="col">S NO.</th>
                  <th scope="col">EXAMINATION</th>
                  <th scope="col">LINK</th>
                  <th scope="col">DATE</th>
                </tr>
              </thead>
              <tbody>
                {tableDataTwth.map((rowData, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "oddRow" : "evenRow"}
                  >
                    <td scope="row">{rowData.sno}</td>
                    <td>{rowData.examination}</td>
                    <td>
                      <a
                        href={`./images/filename_${index}.pdf`}
                        download={`filename_${index}.pdf`}
                      >
                        <img
                          src={rowData.link}
                          alt="PDFLink"
                          className="PDFLink"
                        />
                      </a>
                    </td>
                    <td>{rowData.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table
              className="table ResultTable roundedTable"
              style={{ textAlign: "center" }}
            >
              {/* Render all data by default */}
              <thead>
                <tr>
                  <th scope="col">S NO.</th>
                  <th scope="col">EXAMINATION</th>
                  <th scope="col">LINK</th>
                  <th scope="col">DATE</th>
                </tr>
              </thead>
              <tbody>
                {[...tableDataSchool, ...tableDataElth, ...tableDataTwth].map(
                  (rowData, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "oddRow" : "evenRow"}
                    >
                      <td scope="row">{rowData.sno}</td>
                      <td>{rowData.examination}</td>
                      <td>
                        <a
                          href={`./images/filename_${index}.pdf`}
                          download={`filename_${index}.pdf`}
                        >
                          <img
                            src={rowData.link}
                            alt="PDFLink"
                            className="PDFLink"
                          />
                        </a>
                      </td>
                      <td>{rowData.date}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default AcademicResults;
