import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Wooden from './components/pages/Wooden';
import Aluminium from './components/pages/Aluminium';
import Gallery from './components/pages/Gallery';
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
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/wooden' element={<Wooden />} />
        <Route path='/aluminium' element={<Aluminium />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/iron' element={<Iron />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
