import React from 'react'
import '../styles/App.css'
import img1 from "../assets/images.jpg";
import img2 from "../assets/images.png";
import mobile from "../assets/mobile.jpeg";
const App = () => {
    return (
        <div class="helpymoto-container">
  <div class="helpymoto-title">
    <h1>Download HelpyMoto App</h1>
  </div>
  <div class="helpymoto-content">
    <div class="helpymoto-image">
      <img src={mobile} alt="mobile" />
    </div>
    <div class="helpymoto-text">
      <p>Choose and book a seamless car service experience and get upto Rs 750 off with the HelpyMoto App</p>
      <div class="helpymoto-buttons">
        <img src={img1} alt="mobile" />
        <img src={img2} alt="mobile" />
      </div>
    </div>
  </div>
</div>

    )
}

export default App