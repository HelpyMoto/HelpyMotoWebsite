import React from 'react';
import "../styles/service_tracking.css";
// import 'rsuite/dist/styles/rsuite-default.css';

// import {Steps} from 'antd';

// const description = 'This is a description.';

const Service_tracking_details = () => {
    return (
        <div>
            <div className='tracking_part_id'>
                <b>Request ID : </b>
                <br /><br />
                <input style={{ width: "60%", height: "40px" }} placeholder="                         AAA-BBBB-CCC-DDDD" />
                <br /> <br />
                <button style={{ width: "60%", height: "40px", color: "white", backgroundColor: "#5D5FEF" }}>Submit</button>
                <br />   <br />
                <p>Enter Your Request ID and Check the progress</p>
            </div>
            <br /><br />


            {/* <Steps
                direction="vertical"
                size="small"
                current={1}
                items={[
                    { title: 'Finished', description },
                    {
                        title: 'In Progress',
                        description,
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            /> */}
            <div>
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", backgroundColor: "#5D5FEF", fontSize: "xx-large", color: "white", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>1</p>
                    <div className='tracking_steps'>
                        <p><b>Services Booked</b></p>
                        <br />
                        <div style={{ border: "2px solid gray", width: "80%", padding: "2px", borderRadius: "10px", paddingLeft: "15px" }}>Periodic service</div>
                        <br />
                        <div style={{ border: "2px solid gray", width: "80%", padding: "2px", borderRadius: "10px", paddingLeft: "15px" }}>AC service</div>
                        <br />
                        <div style={{ border: "2px solid gray", width: "80%", padding: "2px", borderRadius: "10px", paddingLeft: "15px" }}>Cleaning service</div>

                    </div>
                    <div className='tracking_line12'></div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", backgroundColor: "#5D5FEF", fontSize: "xx-large", color: "white", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>2</p>
                    <div className='tracking_steps'>
                        <p><b>Assigning respective mechanic and workshop</b></p>
                        <br />
                        <p style={{ color: "gray", fontSize: "medium" }}>Request ID</p>
                        <h6><b>MDC002345643</b></h6>
                        <br />

                        <p style={{ color: "gray", fontSize: "medium" }}>Mechanic's Name</p>
                        <h6><b>Seenu Reddy</b></h6>
                        <div className='tracking_line23'></div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>3</p>
                    <div className='tracking_steps'>
                        <p><b> Pick-up to your shared location</b></p>
                        <br />
                        <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                        <h6><b>Pending</b></h6>
                        <br />
                        <h6><b>check Location : </b><button>Click Here</button></h6>
                        <div className='tracking_line34'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>4</p>
                    <div className='tracking_steps'>
                        <p><b> Taking vehicle from shared location to workshop</b></p>
                        <br />
                        <input type="file" id="input-file-upload" multiple={true} />
                        <div className='tracking_line45'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>5</p>
                    <div className='tracking_steps'>
                        <p><b>  Service in progress</b></p>

                        <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                        <h6><b>work is in progess , it will be completed soon</b></h6>
                        <br />
                        <h6><b>check Location : </b><button>Click Here</button></h6>

                        <div className='tracking_line56'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>6</p>
                    <div className='tracking_steps'>
                        <p><b> service successfully completed </b></p>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style={{ marginLeft: "30%" }} fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                        <div className='tracking_line67'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>7</p>
                    <div className='tracking_steps'>
                        <p><b>Drop date and time </b></p>
                        <br />

                        <p style={{ color: "gray", fontSize: "medium" }}>Scheduled Time</p>
                        <h6><b>02, Jan 2023 12:05 pm</b></h6>\
                        <div className='tracking_line78'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>8</p>
                    <div className='tracking_steps'>
                        <p><b>Vehicle delivery to shared location</b></p>
                        <br />
                        <p style={{ color: "gray", fontSize: "medium" }}>Status</p>
                        <h6><b>Pending</b></h6>
                        <br />
                        <h6><b>check Location : </b><button>Click Here</button></h6>
                        <div className='tracking_line89'></div>

                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <p style={{ width: "100px", height: "100px", borderRadius: "100px", border: "5px solid #5D5FEF", fontSize: "xx-large", color: "#5D5FEF", textAlign: "center", paddingTop: "20px", marginLeft: "32%", marginTop: "50px" }}>9</p>
                    <div className='tracking_steps'>
                        <p><b> successfully delivered</b></p>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style={{ marginLeft: "30%" }} fill="green" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>


                    </div>
                </div>
            </div>
            <br /><br />    <br /><br />    <br /><br />    <br /><br />    <br /><br />    <br /><br />
        </div>
    )
}

export default Service_tracking_details