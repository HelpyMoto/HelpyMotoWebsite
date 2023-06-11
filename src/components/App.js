import React from 'react'
import '../styles/App.css'
import img1 from "../assets/images.jpg";
import img2 from "../assets/images.png";
import mobile from "../assets/mobile.jpeg";
const App = () => {
    return (
  <div class="flex flex-col items-center justify-center bg-white-100 text-black-500 ">
  <h1 class="text-3xl font-bold">Download HelpyMoto App</h1>
  <div class="flex flex-col items-center mt-4">
    <img src={mobile} alt="mobile" />
    <p class="text-center mt-4">Choose and book a seamless car service experience and get up to Rs 750 off with the HelpyMoto App</p>
    <div class="flex justify-center mt-4">
      <img src={img1} alt="mobile" class="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mr-4 transition-all duration-300 ease-in-out" />
      <img src={img2} alt="mobile" class="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 transition-all duration-300 ease-in-out" />
    </div>
  </div>
</div>
  
    )
}

export default App