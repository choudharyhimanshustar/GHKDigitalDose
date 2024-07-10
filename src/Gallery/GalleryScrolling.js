import { useEffect, useState } from 'react'
import React from 'react'
import './GalleryMain.css'
import SideScrollingimg from './SideScrollingimg'

export default function GalleryScrolling(props) {

    const activeimg = ['YOGA DAY','SPORTS DAY', 'SHRAVAN MAHOTSAV', 'MATHEMATICS EVENT' ,'INDEPENDENCE DAY','GURU PURNIMA', 'MULTILINGUAL PROGRAM', 'GURUHAR KRISHANJIDAY', 'GRADUATION DAY','FAREWELL']
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagedivname, setImagedivname] = useState(null);

    const [currentImage, setCurrentImage] = useState(1); // Assuming the initial image index is 1

    // State to store the number received
    const [numberOfDivs, setNumberOfDivs] = useState(7);


    // Function to handle button click and update the current image
    const handleButtonClickRight = () => {
        // Logic to determine the next image index (for example, incrementing by 1)
        const nextImage = currentImage + 1;
        setCurrentImage(nextImage);
        console.log(currentImage)
    };

    const handleButtonClickLeft = () => {
        // Logic to determine the next image index (for example, incrementing by 1)
        const nextImage = currentImage - 1;
        setCurrentImage(nextImage);
    };
    const handleClick = (imageName, imgnumber, totalnumberofimages) => {
        // Logic to determine the image URL based on imageName
        const CIN = imgnumber === 1 ? 1 : currentImage;
        // const CIN = 1;
        // if(imgnumber === 1){
        //     CIN = imgnumber;
        //     currentImage = imgnumber;
        // }else{
        //     CIN = currentImage;
        // }

        let imageUrl;
        if (imageName === 'yogaimgs') {
            imageUrl = `/Image/1image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
            // console.log(numberOfDivs);
        } else if (imageName === 'sportsimgs') {
            imageUrl = `/Image/2image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        } else if (imageName === 'shravanimgs') {
            imageUrl = `/Image/3image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'mathamaticsimgs') {
            imageUrl = `/Image/4image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'independenceimgs') {
            imageUrl = `/Image/5image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'gurupurnimaimgs') {
            imageUrl = `/Image/6image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'guruharkrishanimgs') {
            imageUrl = `/Image/7image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'multilingualimgs') {
            imageUrl = `/Image/8image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'graduationimgs') {
            imageUrl = `/Image/9image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }else if (imageName === 'farewellimgs') {
            imageUrl = `/Image/10image${CIN}.png`;
            setNumberOfDivs(totalnumberofimages)
        }
        setSelectedImage(imageUrl);
        console.log(imageUrl)
        setImagedivname(imageName);
        console.log(imageName)
    };


    useEffect(() => {
        handleClick(imagedivname,currentImage,numberOfDivs);
    }, [currentImage]);

    const handleImageError = () => {   // use if there is no more images onError is used if image not load
        if (currentImage >= 1) {
            setCurrentImage(currentImage - 1)
        }
        else {
            setCurrentImage(currentImage + 1);
        }
    };

    useEffect(() => {
        handleClick(props.name, 1 , props.totalnumberofimages);
    }, []);

    return (
        <div>
            <div className='ScrollingParent'>
                <div className='DifferentImg'>
                    <div className='containcutshowname'>
                    <div className='showname'>
                        {activeimg[props.activeimagediv - 1]}
                    </div>
                    <div className='cutScreen'>
                        <div className='cutIcon' onClick={props.handleShow}></div>
                    </div>
                    </div>
                    <div className='mainimgdiv'>
                        <div className='buttondiv'>
                            <div onClick={handleButtonClickLeft} className='buttonleft'></div>
                        </div>
                        <div className='imgbackground'>
                            <img src={selectedImage} alt='' className='GallerySecondSectionimages' onError={handleImageError}></img>
                        </div>
                        <div className='buttondiv'>
                            <div onClick={handleButtonClickRight} className='buttonright'></div>
                        </div>
                    </div>
                    <div className='numberofimgs'>
                        {/* Render the dynamically generated divs */}
                        {Array.from({ length: numberOfDivs }, (_, index) => (
                            <div key={index} className='eachimgcircle'
                                style={{ backgroundColor: index === currentImage-1 ? 'indianRed' : 'rgba(255, 249, 249, 1)'}}
                            ></div>
                        ))}
                </div>
            </div>
            <SideScrollingimg handleClick={handleClick} activeDivnumber = {props.activeimagediv}/>
        </div>
        </div >
    )
}

