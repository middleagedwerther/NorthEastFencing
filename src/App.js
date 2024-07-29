import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import Wooden from './components/pages/Wooden';
import Aluminium from './components/pages/Aluminium';
import Privacy from './components/pages/Privacy';
import Iron from './components/pages/Iron';
import useScrollToTop from './components/pages/ScrollToTop'; // Import the custom hook

function App() {
  useScrollToTop(); // Use the custom hook

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/wooden' element={<Wooden />} />
        <Route path='/aluminium' element={<Aluminium />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/iron' element={<Iron />} />
      </Routes>
    </>
  );
}

export default App;
