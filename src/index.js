import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/Home";
import LoginPage from "./components/loginPage";
import Newaccount from "./components/newaccount";
import Loginuser from "./components/login";
import Signupuser from "./components/signup_user";
import Loginmechanic from "./components/login_mechanic";
import Logindriver from "./components/login_driver";
import Passwordreset from "./components/password_reset";
import Registermechanic from "./components/register_mechanic";
import Registerdriver from "./components/register_driver";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";
import Hire from "./components/hire";
import Mechlist from "./components/mechanic_list";
import Mechprofile from "./components/Mechanical_profile";
import Custlist from "./components/customer_list";
import ServicePayment from "./components/service_payment";
import SelectDateService from "./components/date_service";
import BookAppointment from "./components/book_appointment";
import PaymentMethodh from "./components/paymentmethodh";
import GotoCart from "./components/goto_cart";
import Tracking from "./components/service_tracking";
import Track from "./components/service_tracking_details";
import Dropdown from "./components/dropdown";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Newaccount" element={<Newaccount />} />
        <Route path="/" element={<Home />} />
        <Route path="/loginuser" element={<Loginuser />} />
        <Route path="/signupuser" element={<Signupuser />} />
        <Route path="/loginmechanic" element={<Loginmechanic />} />
        <Route path="/logindriver" element={<Logindriver />} />
        <Route path="/passwordreset" element={<Passwordreset />} />
        <Route path="/registermechanic" element={<Registermechanic />} />
        <Route path="/registerdriver" element={<Registerdriver />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/mechlist" element={<Mechlist />} />
        <Route path="/mechprofile" element={<Mechprofile />} />
        <Route path="/custlist" element={<Custlist />} />
        <Route path="/servicepayment" element={<ServicePayment />} />
        <Route path="/selectdateservice" element={<SelectDateService />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/paymentmethodh" element={<PaymentMethodh />} />
        <Route path="/gotocart" element={<GotoCart />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/track" element={<Track />} />
        <Route path="/dropdown" element={<Dropdown />} />
        {/* <Route path="/CreateAnAccount" element={<CreateAnAccount/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
