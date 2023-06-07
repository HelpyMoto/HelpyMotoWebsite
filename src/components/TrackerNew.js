import React from 'react'
import '../styles/TrackerNew.css'
import Image1 from '../assets/tracker1-removebg-preview.png'
import Image2 from '../assets/tracker2-removebg-preview.png'
import Image3 from '../assets/tracker3-removebg-preview.png'
import Image4 from '../assets/tracker4.png'

import { IoIosArrowRoundForward } from "react-icons/io";
function TrackerNew() {
  return (
    <div className="tracker">
        <div className='trackerTitle'>
            <h1 id="titleHead1">How </h1>
            <h1 id="titleHead2">Helpy Moto</h1>
            <h1 id="titleHead3">Works?</h1>
        </div>
        <div className='trackerContainer'>
            <div className='trackerItem1' id='item1'>
                <div className='itemImage'>
                <img src={Image1} alt='one'></img>
                </div>
                <h2>Select A Perfect Car Service</h2>
                <h4>From our Broad Portfolio of services</h4>
            </div>
            <div className='iconArrow'>
            <IoIosArrowRoundForward size={80}/>
            </div>
            <div className='trackerItem2' id='item2'>
                <div className='itemImage'>
                <img src={Image2} alt='one'></img>
                </div>
                <h2>Schedule Free Pickup</h2>
                <h4>We offer free Pickup and Drop</h4>
            </div>
            <div className='iconArrow'>
            <IoIosArrowRoundForward size={80}/>
            </div>
            <div className='trackerItem3' id='item2'>
                <div className='itemImage'>
                <img src={Image3} alt='one'></img>
                </div>
                <h2>Track Your Car Service</h2>
                <h4>Track Real Time Status Of Your Service</h4>
            </div>
            <div className='iconArrow'>
            <IoIosArrowRoundForward size={80}/>
            </div>
            <div className='trackerItem4' id='item2'>
                <div className='itemImage'>
                <img src={Image4} alt='one'></img>
                </div>
                <h2>Schedule Free Drop Service</h2>
                <h4>Get Free Drop Service After complete Repairing</h4>
            </div>
        </div>
       
        </div>
    
  )
}


export default TrackerNew