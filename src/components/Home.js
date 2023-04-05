
import '../App.css';

import NewNavbar from "./newnavbar"
import Numbers from './work';
// import ClientsSays from './ClientsSays';
import App from './App'
import Footer from './footer';
// import Tracker from './Tracker';

// import Clients from "../Clients/Clients"
// import styled from "styled-components";
import Dropdown from './dropdown';
import Servicing from "./servicing";


// import Service from './Service';

function Home() {
  return (
    <div className="App">
      <NewNavbar />
      <App/>
      {/* <Tracker /> */}
   
      <Numbers mealsTarget={10000} customersTarget={15000} menuTarget={2000} starsTarget={4.5} step={1} />
      {/* <ClientsSays/> */}
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
