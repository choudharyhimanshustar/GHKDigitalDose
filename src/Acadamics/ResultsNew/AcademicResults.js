import React, { useState, useEffect } from "react";
import "./AcademicResults.css";
import PDFLink from "./images/PDFLink.png";
import schoolImage1 from "./images/schoolImage1.png";
import schoolImage from "./images/schoolImage.png";
import collegeImage from "./images/collegeImage.png";
import collegeImage1 from "./images/collegeImage1.png";
import acdmic_result from "./images/acdmic_result.png";
import Image10th from "./images/10thImage.png";
import allImage1 from "./images/allImage1.png";
import Image11th from "./images/11thImage.png";
import Image12th from "./images/12thImage.png";
import searchicon from "./images/searchicon.png";
import addNewImage from "./images/addNewImage.png";


function AcademicResults() {
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
  const [nextSno, setNextSno] = useState(1);
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
  
  const [tableData, setTableData] = useState([]);



  useEffect(() => {
    const savedTableData = JSON.parse(localStorage.getItem("tableData")) || [];
    setTableData(savedTableData);
    setTableData([...tableDataSchool])

    // Calculate the next serial number based on the maximum serial number present in the table
    if (savedTableData.length > 0) {
      const maxSno = Math.max(...savedTableData.map(row => row.sno));
      setNextSno(maxSno + 1);
    }
  }, []);

 
  const calculateNextSno = () => {
    const maxSno = Math.max(...tableData.map(row => row.sno));
    return maxSno + 1;
  };

  
  const sscData = tableData.filter(data =>
    (data.examination.includes("SSC") || data.examination.includes("X") || data.examination.includes("10")) && !data.examination.includes("XII")
    );
  const hscData = tableData.filter(data =>
    data.examination.includes("HSC") ||
    data.examination.includes("XII") ||
    data.examination.includes("SYJC") ||
    data.examination.includes("H. S. C")||
    data.examination.includes("12") 
  );
  const XIdata = tableData.filter(
    data => data.examination.includes("XI") || data.examination.includes("11")
  );
  

  const formatDateString = dateString => {
    if (dateString.includes("-")) {
      // If the date string already contains '-', return as is
      return dateString;
    } else {
      // If the date string contains 'Month - Year' format, split and format
      const [month, year] = dateString.split(" - ");
      if (month && year) {
        return `${month.charAt(0).toUpperCase()}${month.slice(1)} - ${year}`;
      } else {
        return dateString;
      }
    }
  };

  const handleChange = event => {
    setSearchInput(event.target.value);
    console.log("Search input:", event.target.value);

  };

  const handleImageClick = () => {
    const schoolImagePath = schoolImage;
    const collegeImagePath = schoolImage1;
    setSchoolSelected(!schoolSelected);
    setImageSource(schoolSelected ? collegeImagePath : schoolImagePath);
    if (collegeSelected) {
      setCollegeSelected(false);
      setImageSource1(collegeImage);
    }
    if (!schoolSelected) {
      const filteredData = tableData.filter(data =>
        (data.examination.toLowerCase().includes("ssc") || // Filter for SSC
        data.examination.toLowerCase().includes("10") || // Filter for 10th
        data.examination.toLowerCase().includes("x"))  // Filter for X
      );
      setTableData(filteredData);
    } else {
      // If collegeSelected, show all data
      setTableData(tableData);
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

    if (!collegeSelected) {
      const filteredData = tableData.filter(data =>
        data.examination.toLowerCase().includes("xii") || // Filter for XII
        data.examination.toLowerCase().includes("xi") || // Filter for XI
        data.examination.toLowerCase().includes("hsc") || // Filter for HSC
        data.examination.toLowerCase().includes("12") || // Filter for 12th
        data.examination.toLowerCase().includes("11") || // Filter for 11th
        data.examination.toLowerCase().includes("syjc") ||// Filter for SYJC
        data.examination.toLowerCase().includes("h. s. c") // Filter for HSC

      );
      setTableData(filteredData);
    } else {
      // If schoolSelected, show all data
      setTableData(tableData);
    }
  }; 

  const handleAllClick = imageName => {
    setImageClicked(prevState => ({
        allImage: imageName === "allImage",
        ElthImage: imageName === "ElthImage",
        TwthImage: imageName === "TwthImage",
      }));
  };

  // Define state variables to hold input values from the popup
  const [newData, setNewData] = useState({
    sno: tableData.length + 1,
    examination: "",
    link: "",
    date: "",
  });

  // Update the input fields in the popup modal to capture user input
  const handleInputChange = e => {
    const { name, value ,files} = e.target;
    setNewData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "link" && files.length > 0) {
      const file = files[0];
  
      // Create a new FormData object
      const formData = new FormData();
  
      // Append the file to the FormData object
      formData.append("file", file);
  
      // Send a POST request to the server to save the file
      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the file path in the public/images folder
          setNewData((prevData) => ({
            ...prevData,
            link: data.filePath,
          }));
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          // Optionally handle error
        });
      }
  };

  // Implement a function to handle saving changes and adding new data to the table
  const handleSaveChanges = () => {
    // Extract values from newData state
    const { examination, link, date } = newData;

    // Validate input (you may add your validation logic here)

    // Create a new row object
    const newRow = { sno:tableData.length + 1, examination, link, date };

    // Update the table data state with the new row
    const updatedTableData = [...tableData, newRow];

    localStorage.setItem('tableData', JSON.stringify([...tableData, newRow]));
    setTableData(updatedTableData);


    // Clear input fields after adding data
    setNewData({
      sno: calculateNextSno(),
      examination: "",
      link: "",
      date: "",
    });

    // Close the modal (if needed)
    // Example: $('#exampleModal').modal('hide');
  };

  useEffect(() => {
    const savedTableData = JSON.parse(localStorage.getItem('tableData')) || [];
    setTableData(savedTableData);
  }, []);

  // Define handleSearchIconClick function
  const handleSearchIconClick = () => {
    console.log("Search icon clicked");
  
    // Filter the table data based on search criteria
    const filteredData = tableData.filter(data => {
      const examination = data.examination.toLowerCase();
      const searchInputLower = searchInput.toLowerCase();
      
      // Define search criteria variations
      const variations = {
        "12": ["hsc", "12", "h.s.c", "syjc", "xii"],
        "11": ["11","xi"],
        "10": ["10", "ssc",'x'],
        "hsc": ["hsc", "12", "h.s.c", "syjc", "xii"],
        "h.s.c": ["hsc", "12", "h.s.c", "syjc", "xii"],
        "ssc":["10", "ssc",'x'],
        "syjc": ["hsc", "12", "h.s.c", "syjc", "xii","11"],
        "xii": ["hsc", "12", "h.s.c", "syjc", "xii"],
        "xi": ["11","xi"],
        'x': ["10", "ssc",'x'],
      };
  
      // Check if the examination property includes any of the variations for the current search input
      return variations[searchInputLower] && variations[searchInputLower].some(variation => examination.includes(variation));
    });
  
    // Update table data with filtered data
    setTableData(filteredData);
  };
  
  

// Bind handleInputChange to input fields in the popup modal
// Example: <input type="text" className="form-control" id="inputtexts1" name="sno" value={newData.sno} onChange={handleInputChange} />

// Bind handleSaveChanges to the "Add New" button in the popup modal
// Example: <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Add New</button>

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
          <div className="Searchicon" >
            <img src={searchicon} alt="searchicon" onClick={handleSearchIconClick}></img>
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
                  <div className="addNewHeader">
                    <h1 className="modal-title fs-5 m-2" id="exampleModalLabel">
                      Add New Data
                    </h1>
                  </div>
                  <div className="addNewBtn m-1">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="modal-body">
                  {/* Input fields for new data */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputtexts1"
                      className="col-sm-3 col-form-label"
                    >
                      Sr no.
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputtexts1"
                        name="sno"
                        value={newData.sno}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputtexts"
                      className="col-sm-3 col-form-label"
                    >
                      Examination
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputtexts"
                        name="examination"
                        value={newData.examination}
                        onChange={handleInputChange}
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
                      value={newData.link}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputtexts2"
                      className="col-sm-3 col-form-label"
                    >
                      Date
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputtexts2"
                        name="date"
                        value={newData.date}
                        onChange={handleInputChange}
                        pattern="\d{4}-\d{4}|[A-Za-z]+ - \d{4}"
                        title="Please enter the date in the format YYYY-YYYY or Month - YYYY"

                      />
                    </div>
                  </div>
                  {/* End of input fields */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn"
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
                {sscData.map((rowData, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "oddRow" : "evenRow"}
                  >
                    <td scope="row">{index + 1}</td>
                    <td>{rowData.examination}</td>
                    <td>
                      <a
                        href={`./images/filename_${index}.pdf`}
                        download={`filename_${index}.pdf`}
                      >
                        <img
                          src={PDFLink}
                          alt="PDFLink"
                          className="PDFLink"
                        />
                      </a>
                    </td>
                    <td>{formatDateString(rowData.date)}</td>
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
                {XIdata.map((rowData, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "oddRow" : "evenRow"}
                  >
                    <td scope="row">{index + 1}</td>
                    <td>{rowData.examination}</td>
                    <td>
                      <a
                        href={`./images/filename_${index}.pdf`}
                        download={`filename_${index}.pdf`}
                      >
                        <img
                          src={PDFLink}
                          alt="PDFLink"
                          className="PDFLink"
                        />
                      </a>
                    </td>
                    <td>{formatDateString(rowData.date)}</td>
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
                {hscData.map((rowData, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "oddRow" : "evenRow"}
                  >
                    <td scope="row">{index + 1}</td>
                    <td>{rowData.examination}</td>
                    <td>
                      <a
                        href={`./images/filename_${index}.pdf`}
                        download={`filename_${index}.pdf`}
                      >
                        <img
                           src={PDFLink}
                          alt="PDFLink"
                          className="PDFLink"
                        />
                      </a>
                    </td>
                    <td>{formatDateString(rowData.date)}</td>
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
            
            {/* Newly added table data */}
            {tableData.map((rowData, index) => (
              <tr
                key={`new_${index}`} // Use a unique key for newly added rows
                className={index % 2 === 0 ? "oddRow" : "evenRow"}
              >
                <td scope="row">{index + 1}</td>
                <td>{rowData.examination}</td>
                <td>
                  <a
                    href={`./images/filename_${index}.pdf`}
                    download={`filename_${index}.pdf`}
                    
                  >
                  <img src={PDFLink} alt="PDFLink" className="PDFLink" />
                  </a>
                </td>
                <td>{formatDateString(rowData.date)}</td>
                
              </tr>
            ))}
          </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default AcademicResults;
