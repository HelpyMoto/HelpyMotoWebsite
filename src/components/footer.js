import React from 'react'
import "../styles/footer.css"

const footer = () => {
  return (

    <footer id="footer">
    {" "}
    <div className="footer-newsletter">
      {" "}
      <div className="container1212">
        {" "}
        <div className="row">
          {" "}
          <div className="col-lg-6">
            {" "}
            <h4> Sign up to Our Newsletter</h4>{" "}
            <p>
            We will be consistently sending you valuable newsletters with substantial content.
            </p>{" "}
          </div>{" "}
          <div className="col-lg-6">
            {" "}
            <form action="" method="post">
              {" "}
              <input class="a" type="email" name="email" placeholder="Email-Address" />
              <input type="submit" defaultValue="Subscribe" />{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="footer-top">
      {" "}
      <div className="container1212">
        {" "}
        <div className="row">
          {" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            <h4>Useful Links</h4>{" "}
            <ul>
              {" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="/">Home</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="/">About us</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="/">Services</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/">Terms of service</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/">Privacy policy</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            <h4>Practice Areas</h4>{" "}
            <ul>
              {" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="/">Repairing</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/">Engine</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/">Painting</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="/">Body and Tires</a>
              </li>{" "}
              
            </ul>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            <h4 >Contact Us</h4>{" "}
            <p>
              {" "}
              New Delhi,Indranagar phase-2,
              <br /> India<br />
              <br /> <strong>Phone:</strong>+91 90986 30635
              <br /> <strong>Email:</strong> officialbusiness.sb@gmail.com
                <br />{" "}
                <br />{" "}
                
              {/* <a href="#" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" width="250" alt="google play and apple app store logos"  /></a> */}
             
            </p>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            {/* <h2> <img src={require("../image/image1.jpg")} alt="logo" className="img-fluid" style={{ width:"150px",marginTop:"-40px",marginBottom:"3px" }} /></h2>{" "} */}
            <p className='j'>
            At our venture, we strive to restore motors all across India in an efficient manner that saves our customers' valuable time by eliminating the need to bring their cars to a repair shop
              </p>{" "}
              <br />{" "}
              <br />{" "}
            <div className="social-links">
              {" "}
              <a href="https://twitter.com/HelpyMoto?t=FmxcdcAnmVX6GO20FkKFzA&s=09" className="twitter">
                <i className="bx bxl-twitter" />
              </a>{" "}
              <a href="https://www.facebook.com/profile.php?id=100069828099402&mibextid=ZbWKwL" className="facebook">
                <i className="bx bxl-facebook" />
              </a>{" "}
              <a href="https://instagram.com/helpy_moto?igshid=YmMyMTA2M2Y=" className="instagra">
                <i className="bx bxl-instagram" />
              </a>{" "}
              <a href="https://www.linkedin.com/company/helpy-moto/mycompany/" className="linkedin">
                <i className="bx bxl-linkedin" />
                </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <br/><br/><br/>
    <div className="container12">
      {" "}<br/><br/>
      <div className="copyright">
        {" "}
        © 2023 Helpy Moto{" "}
        <strong>
            <span></span>
            <br />
        </strong>
         All Rights Reserved{" "}
      </div>{" "}
      <div className="credits">
        {" "}
        Designed by <a href="/">Helpy Moto</a>{" "}
      </div>{" "}
    </div>
  </footer>
   


  )
}

export default footer;