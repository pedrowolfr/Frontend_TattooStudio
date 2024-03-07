import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";
import { Artists } from "./Artists/Artists";
import { Appointments } from "./Appointments/Appointments";
import { Users } from "./Users/Users";
import { AllAppointments } from "./AllAppointments/AllAppointments";
import About from "./About"; 
import GallerySection from "./GallerySection";
import Skills from "./Skills"; 
import Contact from "./Contact";
// import { MisAppointments } from "./myAppointments";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/GallerySection" element={<GallerySection />} /> 
        <Route path="/Skills" element={<Skills />} /> 
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/Users" element={<Users />} />
        {/* <Route path="/myappointments" element={<MisAppointments />} /> */}
        <Route path="/allappointments" element={<AllAppointments />} />
      </Routes>
    </>
  );
};
