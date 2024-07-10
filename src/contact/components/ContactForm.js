import React, { useEffect, useRef, useState } from "react";
import "./ContactForm.css";
import { sendEmail } from "react-mailer";
import capitalLetterIcon from "./capitalLetter.png";
import attachFolderIcon from "./attachFolder.png";
import attachLinkIcon from "./attachLink.png";
import attachPhoto from "./attachPhoto.png";
import boldLetterIcon from "./bold.png";
import deleteIcon from "./delete.png";

const ContactForm = () => {
  const message = useRef();
  const [textAreaMessage, setTextAreaMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    photo: "",
    additionFile: "",
  });
  const [photo, setPhoto] = useState();
  function savePhoto(e) {
    console.log(e.target.files[0]);
    console.log("url link: ",URL.createObjectURL(e.target.files[0]));
    setPhoto(URL.createObjectURL(e.target.files[0]));
    setFormData({ ...formData, photo: photo });
  }
  const clearData = () => {
    setPhoto(null);
    message.current.value = "";
    file ? setFile(null) : setPhoto(null);
  };
  const [file, setFile] = useState();
  // const [showFile, setShowFile] = useState("none");
  // useEffect(() => {
  //   file ? setShowFile("block") : setShowFile("none");
  // }, [file]);
  const displayFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFormData({ ...formData, additionFile: file });

    console.log("file detail", URL.createObjectURL(e.target.files[0]));
  };
  // const boldTheText = () => {
  //   const textMessage = message.current.value;
  //   setTextAreaMessage(`<p style={{fontWeight:"bold"}}>${textMessage}</p>`);
  //   // message.current.innerHTML = `<b>${textMessage}</b>`;
  //   message.current.innerHTML = `<p style={{fontWeight:"bold"}}>${textMessage}</p>`;
  //   // console.log("textAreaMessage: ", textAreaMessage);
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTextAreaMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail({
        from:"chiranjivrao37@email.com" ,
        to:formData.email ,
        subject: formData.subject,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`,
      });
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="contact-form-container">
      {/*<h2>Contact Us</h2>*/}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className="constactUsLabel label-text font-primary text-[#8C1F1F] my-3">
            Name
          </label>
          <div
            style={{
              display: "flex",
              border: "solid 1px black",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="inputText placeholder-text"
              required
              style={{ border: "none", paddingBottom: "15px" }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M26.2083 13.8744C26.2083 11.7453 25.345 9.81822 23.9513 8.42456C22.5561 7.02935 20.629 6.16602 18.5 6.16602C16.371 6.16602 14.4439 7.02935 13.0487 8.42456C11.655 9.81822 10.7917 11.7453 10.7917 13.8744C10.7917 16.0034 11.655 17.9305 13.0487 19.3241C14.4439 20.7194 16.371 21.5827 18.5 21.5827C20.629 21.5827 22.5561 20.7194 23.9513 19.3241C24.668 18.6092 25.2363 17.7597 25.6236 16.8245C26.011 15.8892 26.2097 14.8866 26.2083 13.8744ZM9.25 29.291C9.25 30.8327 12.7188 32.3744 18.5 32.3744C23.9236 32.3744 27.75 30.8327 27.75 29.291C27.75 26.2077 24.1209 23.1244 18.5 23.1244C12.7188 23.1244 9.25 26.2077 9.25 29.291Z"
                fill="#F28686"
              />
            </svg>
          </div>
        </div>
        <div className="form-group">
          <label className="constactUsLabel label-text font-primary text-[#8C1F1F] my-3">
            E-mail id
          </label>
          <div
            style={{
              display: "flex",
              border: "solid 1px black",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail id"
              value={formData.email}
              onChange={handleChange}
              className="inputText placeholder-text"
              style={{ border: "none", paddingBottom: "15px" }}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                d="M7.93212 8.19922H35.0946C37.6571 8.19922 38.9486 9.40872 38.9486 11.8687V29.1297C38.9486 31.5692 37.6571 32.7992 35.0946 32.7992H7.93212C5.36962 32.7992 4.07812 31.5692 4.07812 29.1297V11.8687C4.07812 9.40872 5.36962 8.19922 7.93212 8.19922ZM21.5031 25.8292L35.3201 14.4927C35.8121 14.0827 36.2016 13.1397 35.5866 12.2992C34.9921 11.4587 33.9056 11.4382 33.1881 11.9507L21.5031 19.8637L9.83863 11.9507C9.12113 11.4382 8.03463 11.4587 7.44013 12.2992C6.82513 13.1397 7.21462 14.0827 7.70662 14.4927L21.5031 25.8292Z"
                fill="#F28686"
              />
            </svg>
          </div>
          {/*<FontAwesomeIcon icon={faEnvelope} className="input-icon" />*/}
        </div>
        <div className="form-group">
          <label className="constactUsLabel label-text font-primary text-[#8C1F1F] my-3">
            Phone Number
          </label>
          <div
            style={{
              display: "flex",
              border: "solid 1px black",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
          >
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+91 xxxx xxx xxx"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="inputText placeholder-text"
              style={{ border: "none", paddingBottom: "1px" }}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M28.9741 27.1775L28.2868 23.9159C27.1511 23.6363 25.9862 23.4928 24.8166 23.4885C23.6412 23.5083 22.4728 23.6738 21.3382 23.9813L20.589 27.2589C20.1697 29.0952 18.6936 30.512 16.861 30.8361L14.0598 31.3319C12.9321 31.5364 11.7691 31.2939 10.8172 30.6557C9.86526 30.0175 9.19916 29.0338 8.96 27.913C8.09345 23.9659 9.59384 19.5251 13.6552 17.8966C17.2295 16.4682 21.0368 15.7116 24.8857 15.6649C28.7233 15.6066 32.5363 16.2863 36.1174 17.667C40.1419 19.2284 41.537 23.64 40.598 27.5943C40.0398 29.9532 37.7667 31.5022 35.413 31.1271L32.6372 30.6849C30.8107 30.3925 29.3589 29.007 28.9741 27.1775Z"
                fill="#F28686"
              />
            </svg>
          </div>
          {/*<FontAwesomeIcon icon={faPhone} className="input-icon" />*/}
        </div>
        <div className="form-group">
          <label className="constactUsLabel label-text font-primary text-[#8C1F1F] my-3">
            Subject
          </label>
          <div
            style={{
              display: "flex",
              border: "solid 1px black",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Reason"
              value={formData.subject}
              onChange={handleChange}
              className="inputText placeholder-text"
              style={{ border: "none", paddingBottom: "15px" }}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6.66536 25.3327C6.28759 25.3327 5.97114 25.2047 5.71603 24.9487C5.46092 24.6927 5.33292 24.3762 5.33203 23.9994C5.33203 23.6216 5.46003 23.3051 5.71603 23.05C5.97203 22.7949 6.28848 22.6669 6.66536 22.666H17.332C17.7098 22.666 18.0267 22.794 18.2827 23.05C18.5387 23.306 18.6663 23.6225 18.6654 23.9994C18.6654 24.3771 18.5374 24.694 18.2814 24.95C18.0254 25.206 17.7089 25.3336 17.332 25.3327H6.66536ZM6.66536 19.9994C6.28759 19.9994 5.97114 19.8714 5.71603 19.6154C5.46092 19.3594 5.33292 19.0429 5.33203 18.666C5.33203 18.2882 5.46003 17.9718 5.71603 17.7167C5.97203 17.4616 6.28848 17.3336 6.66536 17.3327H25.332C25.7098 17.3327 26.0267 17.4607 26.2827 17.7167C26.5387 17.9727 26.6663 18.2891 26.6654 18.666C26.6654 19.0438 26.5374 19.3607 26.2814 19.6167C26.0254 19.8727 25.7089 20.0002 25.332 19.9994H6.66536ZM6.66536 14.666C6.28759 14.666 5.97114 14.538 5.71603 14.282C5.46092 14.026 5.33292 13.7096 5.33203 13.3327C5.33203 12.9549 5.46003 12.6385 5.71603 12.3833C5.97203 12.1282 6.28848 12.0002 6.66536 11.9993H25.332C25.7098 11.9993 26.0267 12.1273 26.2827 12.3833C26.5387 12.6393 26.6663 12.9558 26.6654 13.3327C26.6654 13.7105 26.5374 14.0274 26.2814 14.2834C26.0254 14.5394 25.7089 14.6669 25.332 14.666H6.66536ZM6.66536 9.33268C6.28759 9.33268 5.97114 9.20468 5.71603 8.94868C5.46092 8.69268 5.33292 8.37624 5.33203 7.99935C5.33203 7.62157 5.46003 7.30513 5.71603 7.05002C5.97203 6.7949 6.28848 6.6669 6.66536 6.66602H25.332C25.7098 6.66602 26.0267 6.79402 26.2827 7.05002C26.5387 7.30602 26.6663 7.62246 26.6654 7.99935C26.6654 8.37713 26.5374 8.69402 26.2814 8.95002C26.0254 9.20602 25.7089 9.33357 25.332 9.33268H6.66536Z"
                fill="#F28686"
              />
            </svg>
          </div>
          {/*<FontAwesomeIcon icon={faList} className="input-icon" />*/}
        </div>
        <div className="form-group">
          <label className="constactUsLabel label-text font-primary text-[#8C1F1F] my-3">
            Message
          </label>
          <div
            style={{
              display: "flex",
              border: "solid 1px black",
              padding: "5px 10px",
              borderRadius: "20px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  justifyContent: "flex-start",
                }}
              >
                {/* add functionality in future*/}
                {/* <img
                  className="iconInTextArea"
                  src={capitalLetterIcon}
                  alt="capital letter icon"
                /> */}
                <label>
                  <input
                    type="file"
                    name="myFile"
                    style={{ display: "none" }}
                    onChange={displayFile}
                  />
                  <img
                    className="iconInTextArea"
                    src={attachFolderIcon}
                    alt="folder icon"
                  />
                </label>
                {/* add functionality in future*/}
                {/* <label>
                  <img
                    className="iconInTextArea"
                    src={attachLinkIcon}
                    alt="link icon"
                  />
                </label> */}
                <label>
                  <input
                    type="file"
                    name="myImage"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={savePhoto}
                  />
                  <img
                    className="iconInTextArea"
                    src={attachPhoto}
                    alt="gallery icon"
                  />
                </label>
                {/* add functionality in future*/}
                {/* <div>
                  <img
                    className="iconInTextArea"
                    src={boldLetterIcon}
                    alt="bold icon"
                    onClick={boldTheText}
                  />
                </div> */}
              </div>
              <div>
                <img
                  className="iconInTextArea"
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={clearData}
                />
              </div>
            </div>
            {/* {file && (
              <div>
                <p>Uploaded File:</p>
                <p>Name: {file.name}</p>
                <p>Type: {file.type}</p>
                <p>Size: {file.size} bytes</p>
                Display the file content or image here
              </div>
            )} */}
            <div>{photo ? <img src={photo} alt="galleryPhoto" /> : null}</div>
            <textarea
              ref={message}
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              className="placeholder-text"
              required
              style={{ border: "none" }}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
