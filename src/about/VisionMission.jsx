import React from 'react'
import visionImage from './assests/VisionMission.png'
import VisionMissionMottoDescription from './assests/VisionMissionMottoDescription.png'
const VisionMission = () => {
  return (
    <div>
        <img src={visionImage} class="responsiveImage"/>
        <img src={VisionMissionMottoDescription} class="responsiveImage"/>
    </div>
  )
}

export default VisionMission