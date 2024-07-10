import React from "react";
import "../style/watchVideo.css";

function WatchVideo() {
  return (
    <>
      <div className="watchVdo-header">
        Watch our<span className="span-GHK"> Videos</span>
      </div>
      <div className="info-video">
        <div className="Journey">
          Journey through time by watching our captivating videos, exploring the
          milestones that define us. From academic excellence to a vibrant
          community, our legacy is woven into every aspect. Join us in
          celebrating more than half a century of growth, achievement, and a
          commitment to shaping futures of our young minds. Explore the past,
          embrace the present, and envision the limitless possibilities that lie
          ahead. Welcome to a school where history meets the future!!
        </div>
        <div className="youT">
          <iframe
            width="500"
            height="360"
            src="https://www.youtube.com/embed/fHRxRsE-B4s?autoplay=1&mute=1"
            title="GURU HARKRISHAN HIGH SCHOOL &amp;JUNIOR COLLEGE OF COMMERCE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default WatchVideo;
