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
import Service from './Assets/Components/Pages/Service';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Service />} /> 
        </Routes>
      <Footer />
      </BrowserRouter>
  )
}