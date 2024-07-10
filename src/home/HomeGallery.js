import React from "react";
import "../style/homeGallery.css";

function HomeGallery() {
  return (
    <>
      <div className="Gallery-header">Gallery</div>

      <div className="home-gallery">
        <div class="row-1">
          <div class="column1">
            <img
              src="../images/Gallery1.jpg"
              alt="gallery1"
              style={{
                width: 400,
                height: 331,
                borderRadius: 20,
                objectFit: "cover",
              }}
            ></img>
            <img
              src="../images/Gallery5.JPG"
              alt="gallery2"
              style={{
                width: 400,
                height: 444,
                borderRadius: 20,
                objectFit: "cover",
                marginTop: "20px",
              }}
            ></img>
          </div>
          <div class="column2">
            <div className="row-2">
              <div className="column2-1">
                <img
                  src="../images/Gallery4.jpg"
                  alt="gallery3"
                  style={{ width: 326, height: 400, borderRadius: 20 }}
                ></img>
              </div>
              <div className="column2-2">
                <img
                  src="../images/Gallery3.jpeg"
                  alt="gallery4"
                  style={{ width: 250, height: 400, borderRadius: 20 }}
                ></img>
              </div>
            </div>
            <img
              src="./images/Galley2.jpeg"
              alt="gallery5"
              style={{
                width: 600,
                height: 380,
                borderRadius: 20,
                objectFit: "cover",
              }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeGallery;
