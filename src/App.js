import React from 'react';
import './style.css';
import Home from './Home.js';
import Contact from './Contact.js';
import AboutUs from './AboutUs.js';
import Header from './Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
