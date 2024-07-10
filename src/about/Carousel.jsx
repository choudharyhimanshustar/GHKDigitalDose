import React, { useState } from 'react'
import { images,achievements } from './CarouselData'
import next from './assests/next.png'
import prev from './assests/prev.png'
const Carousel = () => {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <div class='carousel'>
                <div class='carouselInner'>
                    <div class='left'
                        onClick={() => {
                            index > 0 && setIndex(index - 1);
                        }}>
                        <img src={prev} style={{ width: '4.5%', height: 'auto' }} />
                    </div>
                    <div class='center'>
                        <img src={images[index].img} style={{ width: '95%', height: '90%', borderRadius: '14%' }} />
                        <p style={{ width: "50%", marginBottom: "1%" }}>
                            {images[index].description}
                        </p>
                    </div>
                    <div class='right' onClick={() => {
                        index < images.length - 1 && setIndex(index + 1);
                    }}>
                        <img src={next} style={{ width: '4.5%', height: 'auto' }} />
                    </div>
                </div>


            </div>
            <h1 class='custom-heading'>EXTRA CURRICULAR ACHIEVEMENTS</h1>
            <div class='carousel'>
                <div class='carouselInner'>
                    <div class='left'
                        onClick={() => {
                            index > 0 && setIndex(index - 1);
                        }}>
                        <img src={prev} style={{ width: '4.5%', height: 'auto' }} />
                    </div>
                    <div class='center'>
                        <img src={achievements[index].img} style={{ width: '95%', height: '90%', borderRadius: '14%' }} />
                        <p style={{ width: "50%", marginBottom: "1%" }}>
                            {achievements[index].description}
                        </p>
                    </div>
                    <div class='right' onClick={() => {
                        index < achievements.length - 1 && setIndex(index + 1);
                    }}>
                        <img src={next} style={{ width: '4.5%', height: 'auto' }} />
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Carousel