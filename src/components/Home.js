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

// import Service from './Service';

function Home() {
  return (
    <div className="App">
      <NewNavbar />
      <App />
      <Service/>
      <Tracker />
      <br/><br/>

      <Numbers
        mealsTarget={10000}
        customersTarget={15000}
        menuTarget={2000}
        starsTarget={4.5}
        step={1}
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
