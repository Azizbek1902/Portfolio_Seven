import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Feature from "../pages/Feature";
import Quote from "../pages/FreeQoute";
import Teams from "../pages/Team";
import NotFound from "../pages/NotFound";
import Services from "../pages/Service";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/servis" element={<Services />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/not" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
