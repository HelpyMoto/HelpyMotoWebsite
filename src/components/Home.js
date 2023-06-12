import "../App.css";
import Clients from "../Clients/Clients";
import NewNavbar from "./newnavbar";
import Numbers from "./work";

import App from "./App";
import Footer from "./footer";

import Dropdown from "./dropdown";
import Servicing from "./servicing";
import Service from "./description"
import Tracker from './Tracker';
import TrackerNew from "./TrackerNew";
import NavbarUpdate from "./NavbarUpdate";

// import Service from './Service';

function Home() {
  return (
    <div className="">
      {/* <NewNavbar /> */}
      <NavbarUpdate/>
      <div className="max-w-6xl mx-auto">

      <App />
      </div>
      <Service/>

      <TrackerNew />
      <br/><br/>

      <Numbers
        mealsTarget={1000}
        customersTarget={1500}
        menuTarget={200}
        starsTarget={4.5}
        step={2}  
        />

      <Clients/>

      <Dropdown />
      <Servicing />
       
      {/* <Aboutus/>  */}
      {/* <Work/> */}
      {/* <Connect/> */}
      <Footer />
    </div>
  );
}

export default Home;
