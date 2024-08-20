import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Assets/Components/Header';
import Footer from './Assets/Components/Footer';
import Home from './Assets/Components/Pages/Home';
import About from './Assets/Components/Pages/About';
import Contact from './Assets/Components/Pages/Contact';
import Download from './Assets/Components/Pages/Downloand1';
import Issue from './Assets/Components/Pages/Issue';
import Portfolio from './Assets/Components/Pages/Portfolio';
import Advisory from './Assets/Components/Pages/Advisory';
import Underwriting from './Assets/Components/Pages/Undewriting';
import Download2 from './Assets/Components/Pages/Download2';
import Navbar from './Assets/Components/Pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service2" element={<Issue />} />
          <Route path="/services" element={<Portfolio />} />
          <Route path="/service3" element={<Advisory />} />
          <Route path="/service4" element={<Underwriting />} />
          <Route path="/download1" element={<Download />} />
          <Route path="/download2" element={<Download2 />} />
        </Routes>
      <Footer />
      </BrowserRouter>
  )
}