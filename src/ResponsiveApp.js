import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Wooden from './components/pages/Wooden';
import Consulting from './components/pages/Consulting';
import Gallery from './components/pages/Gallery';
import Privacy from './components/pages/Privacy';








import { useMediaQuery } from 'react-responsive';




import MediaQuery from 'react-responsive'




import { DesktopNav, TabletNav, MobileNav } from './ResponsiveComponent';




import "./Responsive.css"




const Container = ({children}) => {




    return (
 
      <section>
 
        {children}
 
      </section>
 
    );
 
  };
 
  const RespNavbar = ({children}) => {
 
    return (
 
      <nav>
 
       {children}
 
      </nav>
 
    );
 
  };








  const ContentView = () => {




    return (


        <>
 
      <div class="body-cont">
 
         <div>
 
          <h1>Device Test!</h1>
 
          <MediaQuery minWidth={992}>
 
          <p>You are a desktop or laptop</p>
          {/* <Services/> */}
 
          </MediaQuery>
 
          <MediaQuery minWidth={768} maxWidth={991}>
 
          <p>You're a tablet or a landscape smartphone</p>
          {/* <Products/> */}
 
          </MediaQuery>
 
          <MediaQuery maxWidth={767}>
 
          <p>You're a smartphone</p>
          {/* <ContactUs/>
  */}
          </MediaQuery>
 
          <MediaQuery minResolution="2dppx">
 
          {(matches) =>
 
              matches
 
              ? <p>And you are high DPI</p>
 
              : <p>And you are low DPI</p>
 
          }
 
          </MediaQuery>
 
         </div>
 
      </div>


      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/wooden' element={<Wooden/>} />
        <Route path='/consulting' element={<Consulting/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/privacy' element={<Privacy/>} />




           </Routes>


      </>
    );
 
  };








  const App2 = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
   
   
    return (
    <Container>
    <RespNavbar>
    {isDesktop && <DesktopNav />}
    {isTablet && <TabletNav />}
    {isMobile && <MobileNav />}
    </RespNavbar>
    <Container>
    <ContentView />
    </Container>
    </Container>
    );
    };
   
   
    export default App2;







