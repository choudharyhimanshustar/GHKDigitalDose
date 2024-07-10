import React,{useState} from 'react'
import LifeGHKimage from './images/LifeGHK.png';
import './campus.css'
import { images } from './LifeGHKDatabase'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
</style>
const LifeGHK = () => {
  const [idx,setIdx]=useState(0);
  return (
    <div>
      <img src={LifeGHKimage} class='mainImage' />
      <div class='navLifeGHK'>
        <h2 onClick={()=>setIdx(0)}>
          DIWALI CAMP /SUMMER CAMP ACTIVITIES
        </h2>
        <h2 onClick={()=>setIdx(1)}>
          GIRL GUIDES /SCOUTS
        </h2>
        <h2 onClick={()=>setIdx(2)}>
          WORKSHOPS AND SEMINAR
        </h2>
        <h2 onClick={()=>setIdx(3)}>
          INTER-SCHOOL COMPETITIONS
        </h2>
        <h2 onClick={()=>setIdx(4)}>
          COMPETITIVE EXAMS
        </h2>
      </div>
      <img src={images[idx].img} class='LifeGHKDescription `${idx}`'/>

    </div>
  )
}

export default LifeGHK