// import React from "react";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Appoinment from "./pages/Appoinment";
import Contect from "./pages/Contect";
import Doctor from "./pages/Doctor";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAppoinments from "./pages/MyAppoinments";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppoinments />} />
        <Route path="/appointment/:docId" element={<Appoinment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
