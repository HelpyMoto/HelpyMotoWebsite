import React from 'react'
import '../styles/App.css'
import img1 from "../assets/images.jpg";
import img2 from "../assets/images.png";
import mobile from "../assets/mobile.jpeg";
import { Slide } from 'react-awesome-reveal';

const App = () => {
    return (
  <div class="flex flex-col items-center justify-center bg-blue-100 text-black-500">
    <Slide direction="left">
   <h1 class="text-3xl font-bold">Download HelpyMoto App</h1>
    </Slide>
  <div class="flex flex-col items-center mt-4">
  <div class="flex justify-center">
      <img src={mobile} alt="mobile" class="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mr-3 mb-3 transition-all duration-300 ease-in-out"/>
      <img src={mobile} alt="mobile" class="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-3 transition-all duration-300 ease-in-out" />
  </div>
    
    <p class="text-center mt-4">Choose and book a seamless car service experience and get up to Rs 750 off with the HelpyMoto App</p>
    <div class="flex justify-center mt-4">
      <img src={img1} alt="mobile" class="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mr-4 transition-all duration-300 ease-in-out" />
      <img src={img2} alt="mobile" class="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 transition-all duration-300 ease-in-out" />
    </div>
  </div>
</div>
  
)}

export default App