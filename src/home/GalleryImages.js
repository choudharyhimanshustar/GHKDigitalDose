import React from 'react'

function GalleryImages() {
  return (
    <div className='grid-wrapper'>
      <div className='v-stretch'>
        <img src='../images/Gallery1.jpg' alt='gallery1'></img>
      </div>
      <div className='hs'>
        <img src='../images/Galley2.jpeg' alt='gallery2'></img>
      </div>
      <div className='gallery-images'>
        <img src='../images/Gallery3.jpeg' alt='gallery3'></img>
      </div>
      <div className='gallery-images'>
        <img src='../images/Gallery4.jpg' alt='gallery4'></img>
      </div>
      <div className='gallery-images'>
        <img src='../images/Gallery5.jpg' alt='gallery5'></img>
      </div>
    </div>
  )
}

export default GalleryImages
