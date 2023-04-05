// import { VillaOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import "../styles/mechanical_profile.css"

const Mechanical_profile = () => {
    const [ShowMore, SetShowMore] = useState(false);
    const text = 'Seenu has expertise in tyre and wheel care. He has always left his customers satisfied with his service and his ratings are testimonial to it. Bajaj mechanics has always provided with quick service, would highly recommend for cleaning services.'
    return (
        <div className='mechanical_profile'>
            <h1>Profile</h1>
            <br />
            <div className='mech_profile_first'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtIHYTHVXSdiCxXKjIzizZCTUEnrq83bLPA&usqp=CAU' width="250px" height="250px" alt="mech profile"/>
                <div>
                    <h2>Seenu Reddy</h2>
                    <h3>Bajaj Mechanics</h3>
                    <h3>Sindhi Colony, Secunderabad, Telangana</h3>
                    <h4>Mechanic ID 80808080</h4>
                </div>
            </div>
            <div style={{ textAlign: "left" }} className="mech_profile_second">
                <h5 style={{ color: 'gray', marginLeft: '100px' }}>Experience-6 years</h5>
                <br />
                <h6>
                    {ShowMore ? text : `${text.substring(0, 200)}`}
                    <button className="btn" onClick={() => SetShowMore(!ShowMore)}> {ShowMore ? "Show less" : "Show more"}</button>

                </h6>
            </div>
            <br/>
            <div style={{ textAlign: "left" }}>


                <p style={{ marginLeft: '300px' }}><b>Address : </b>Lorem ipsum dolor sit  consectetur adipiscing  Vestibulum vestibulum sed purus nec  Morbi laoreet vel tellus </p>
                <p style={{ marginLeft: '300px' }}><b>Phone number : </b>+91 555-6788-543 </p>
                <p style={{ marginLeft: '300px' }}><b>Email ID : </b>Example@gmail.com </p>
            </div>

            <br />
            <div style={{ textAlign: "left", marginLeft: '300px', width: "60%" }}>

                <h2>Services</h2>
                <br />
                <div className="mech_profile_services">
                    <p className='mech_profile_service_item'>Engine Repair </p>
                    <p className='mech_profile_service_item'>Cleaning </p>
                    <p className='mech_profile_service_item'>Fuels and oils </p>
                    <p className='mech_profile_service_item'>Periodic maintenance </p>
                    <p className='mech_profile_service_item'>AC services and repair </p>
                    <p className='mech_profile_service_item'>Cleaning </p>               
                    <p className='mech_profile_service_item'>Batteries health </p>

                </div>


            </div>
            <br />
            <div style={{ textAlign: "left" }}>

                <h2 style={{ marginLeft: '300px' }}>Minimum charge</h2>
                <p style={{ marginLeft: '300px', color: "gray" }}>Starting 350₹ onwards </p>

            </div>
            <br />
            <div  className="mech_profile_reviews">

                <h2>User Reviews</h2>
                <div className='mech_profile_review'>
                    <div style={{display:"flex"}}>
                        <div style={{height:"50px",width:"50px",borderRadius:"50px",backgroundColor:"gray",margin:"30px"}}></div>
                        <div style={{marginTop:"30px"}}>
                        <p>Santosh Kumar</p>
                        <p style={{color:"gray"}}>12\02\2012</p>

                        </div>
                        
                    </div>
                    <p style={{color:"gray",marginTop:"80px"}}>Bajaj mechanics has always provided with quick service, would highly recommend for cleaning services.</p>


                </div>
                <br/><br/><br/><br/><br/><br/><br/>

            </div>

        </div>
    )
}

export default Mechanical_profile