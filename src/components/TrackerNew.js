import {React,useState} from 'react'
import '../styles/TrackerNew.css'
import Image1 from '../assets/tracker1-removebg-preview.png'
import Image2 from '../assets/tracker2-removebg-preview.png'
import Image3 from '../assets/tracker3-removebg-preview.png'
import Image4 from '../assets/tracker4.png'
import Arrow from '../assets/arrow.png'


import { IoIosArrowRoundForward } from "react-icons/io";

function TrackerNew() {
   

  return (
    
    
    <div className="tracker mt-5 flex w-full justify-center">
         <div className='trackerTitle'>
            <h1 id="titleHead1">How </h1>
            <h1 id="titleHead2">Helpy Moto</h1>
            <h1 id="titleHead3">Works?</h1>
        </div>
            <div className='trackerCards'>
            <div className='item1'>
            <div className="card" id="item1" style={{width:'14rem', borderWidth:'0', marginTop: '1rem', marginLeft:'5rem'}}>
            <div className='cardIndex'>
                1
            </div>
  <img src={Image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Select A Perfect Car Service</h5>
    <p className="card-text">From our Broad Portfolio of services.</p>
   
  </div>
</div>
    </div>
       
{/* <img src={Arrow} className='arrow1'></img> */}
<div className='item2' style={{marginLeft:'5rem'}}>
<div className="card"  style={{width:'18rem', borderWidth:'0', marginTop: '6rem'}}>
            <div className='cardIndex'>
                2
            </div>
  <img src={Image2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Schedule Free Pickup</h5>
    <p className="card-text">We offer free Pickup and Drop Service</p>
    
  </div>
</div>
</div>

{/* <img src={Arrow} className='arrow2'></img> */}
<div className='item3' style={{marginLeft:'3rem'}}>
<div className="card" style={{width:'18rem', borderWidth:'0', marginTop: '2rem'}}>
            <div className='cardIndex'>
                3
            </div>
  <img src={Image3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Track Your Car Service</h5>
    <p className="card-text">Track Real Time Status Of Your Service</p>
  </div>
</div>
</div>

{/* <img src={Arrow} className='arrow3'></img> */}
<div className='item4'style={{marginLeft:'4rem'}}>
<div className="card" style={{width:'15rem', borderWidth:'0', marginTop: '6rem'}}>
            <div className='cardIndex'>
                4
            </div>
  <img src={Image4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Schedule Free Pickup</h5>
    <p className="card-text">Get Free Drop Service After complete Repairing</p>
    
  </div>
</div>
</div>

</div>
        
</div>

        
  )
  
}


export default TrackerNew;