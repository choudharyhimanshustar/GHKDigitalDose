import React, { useState } from 'react'
import './GalleryMain.css'
import Gallerysecondframe268 from './Gallerysecondframe268'
import GalleryScrolling from './GalleryScrolling'

export default function GalleryMain() {
   
    const [show,setShow] = useState(true);
    const [name,setName] = useState('yogaimgs');
    const [totalnumberofimages,setTotalnumberofimages] = useState(8)
    const [activeimagediv,setActiveimagediv] = useState(1);
    const handleShow = (myname,nofimgs,activeimagediv)=>{
        setShow(!show);
        setName(myname);
        setTotalnumberofimages(nofimgs);
        setActiveimagediv(activeimagediv)
        console.log(activeimagediv)
    }

    return (
        <div style={{margin:"auto"}}>
            <div className='GalleryMainImg'>

            </div>
            <div style={{marginBottom:"100px"}}>
            {show?<Gallerysecondframe268 handleShow={handleShow} />
            :<GalleryScrolling handleShow={handleShow} name={name} 
            totalnumberofimages={totalnumberofimages} activeimagediv={activeimagediv}/>}
            </div>
        </div>
    )
}
