import React from "react";
import MapContainer from "./components/MapContainer";
import Contactinfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import "./App.css";
import mapGif from "./components/mapforcontact.gif";

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        {/*<Header />*/}
        <div className="contact-us-content-container">
          <h2>Contact Us</h2>
          <div className="contact-us-contact-container">
            <div className="left">
              <ContactForm />
              {/* Content of the left div */}
            </div>
            <div className="right">
              <div className="top">
                <img
                  src={mapGif}
                  alt="mapImg"
                  style={{
                    marginLeft: "50px",
                    marginTop: "30px",
                    borderRadius: "50px",
                    opacity: "0.4",
                    maxWidth: "80%",
                  }}
                />
                {/* Content of the top right div */}
              </div>
              <div className="bottom">
                <Contactinfo />
                {/* Content of the bottom right div */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
};
export default App;
