import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation here
import React, { useState, useEffect, useRef } from 'react';
import { useGlobals } from "../../Globals.js";
import Icon from "../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


// Styled components
const SocialIconsContainer = styled.div`
  display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
align-items:center;
justify-items:center;

@media screen and (max-width: 861px) {
  display: flex;
  flex-direction:column;
    justify-content: center;
align-items: center;
gap: 20px;
}

@media screen and (max-width: 720px) {
    display: flex;
    flex-direction:row;
      justify-content: center;
  align-items: center;
  gap: 20px;
  }
`;


const IconLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;
  &:hover {
    color: #0073b1; /* Change as needed */
  }
`;
const Container = styled.div`
  font-family: ${props => props.globalFont};
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.local};
  padding: 20px;
  display: grid;
  grid-template-columns: auto 2fr 1fr 1fr;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat (4, 1fr);
    // height:70%;
    // padding:2px;
  }
`;


const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: 20px 30px auto;
  // gap: 10px;  
   @media screen and (max-width: 720px) {
// background:blue;
padding:0;
margin:0;
  grid-template-rows: auto auto auto;

 }
`;


const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 20px 30px auto;
  // background:blue;

  // gap: 10px;  
    @media screen and (max-width: 720px) {
      grid-template-rows: auto auto auto;

// background:orange;
padding:0;
margin:0;
`;


const RightContainer = styled.div`
  display: grid;
  grid-template-rows: 20px 30px auto;
  // gap: 10px; 
    @media screen and (max-width: 720px) {
      grid-template-rows: auto auto auto;

// background:purple;
padding:0;
margin:0; 
`;


const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: repeat(5, auto);
  align-content: center;
  color: white;
    padding:0;

  gap: 5px;
  // background:red;
`;


const ContactGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  padding:0;
  // border: 1px solid white;
  // padding: 5px;
`;


const ContactGridItemR = styled.div`
  display: flex;
  align-items: center;
  padding:0;
  // border: 1px solid white;
  // padding: 5px;
  justify-content: flex-start; /* Align items to the left */
`;


const SuburbGrid = styled.div`
  background-color: ${props => props.local};
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 20px;
  gap: 10px; /* Ensure spacing between items */
    @media screen and (max-width: 720px) {
// background:red;
padding:0;
  }
`;


const SuburbText = styled.div`
  font-family: ${props => props.globalFont};
  color: ${props => props.PrimaryColour}; 
  white-space: nowrap;
`;


const ServiceAreas = styled.div`
  background-color: ${props => props.local};
  font-family: ${props => props.globalFont};
  font-weight: bold;
  display: flex;
  color: ${props => props.PrimaryColour}; 
  align-items: center;
  margin-left: 20px;
  // margin-top: 9px;
  // color: white;
    @media screen and (max-width: 720px) {
// background:red;
padding-top:15px;
  }
`;


const Copyright = styled.div`
  font-family: ${props => props.globalFont};
  background-color: ${props => props.local};

  color: white;
    color: ${props => props.PrimaryColour}; 

  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
  margin-top: 1.5px;
`;


const Underlined = styled.div`
  font-family: ${props => props.globalFont};
  background-color: ${props => props.local};
  color: white;
    color: ${props => props.PrimaryColour}; 

  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
`;


const BottomContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  background: black;
`;


const OtherLinks = styled.div`
  font-family: ${props => props.globalFont};
  padding: 5px;
  background-color: ${props => props.local};
  // background:red;
  color: blue;
    color: ${props => props.PrimaryColour}; 

  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
`;


const Divider = styled.span`
  height: 95%;
  width: 1px;
  background-color: white;
    background-color: ${props => props.PrimaryColour}; 

  margin: 0 10px;
`;


// const ContactButton = styled.div`
//   height: 20px;
//   color: white;
//   width: 50%;
//   grid-column: 2;
//   grid-row: 1;
//   text-decoration: none;
//   background-color: orange;
//   margin: 0 10px;
//   border-radius: 5px;
//   margin-top: 12px;
//   transition: background-color 0.1s ease;
//   &:hover {
//     background-color: darkorange;
//   }
// `;


const TopRow = styled.div`
  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  font-family: ${props => props.globalFont};
  // border: 1px solid white;
  // background:blue;
    @media screen and (max-width: 804px) {
margin-top:-13px;
// background:red;
  }
`;


const MiddleRow = styled.div`
  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  // background:red;
  font-family: ${props => props.globalFont};
  // border: 1px solid white;
    @media screen and (max-width: 720px) {
height:20px;
  }
`;


const BottomRow = styled.div`

  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  font-family: ${props => props.globalFont};
  // border: 1px solid white;
  // background:green;
  height:auto;

`;




const Details = styled.div`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  margin-top: 3px;
  font-weight: 900;
  padding:0;
`;


const PhoneLink = styled.a`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  margin-bottom: 2px;
  font-weight: normal;
  &:hover {
    text-decoration: underline;
  }
`;


const EmailLink = styled(Link)`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  font-weight: normal;
  &:hover {
    text-decoration: underline;
  }
`;


const HorizontalDivider = styled.div`
  width: 95%;
  height: 1px; // Standard height
  background-color: white;
    background-color: ${props => props.PrimaryColour}; 

  margin: 10px 10px; // Standard margin
  @media screen and (max-width: 720px) {
    display: none;
  }
`;


const ShrunkenDivider = styled.div`
  background-color: black;
  @media screen and (max-width: 720px) {
    display: block;
    width: 100%;

    height: 1px;
    background-color: white;
      background-color: ${props => props.PrimaryColour}; 

    margin: 10px 0 -2px 0;
  }
`;


const ShrunkenWrapper = styled.div`
padding-top:20px;
padding-bottom:20px;  
display:none;
@media screen and (max-width: 720px) {
  display: block;

`;

const HorizontalDivider3 = styled.div`
  width: 50%;
  height: 1px;
  background-color: white;
    background-color: ${props => props.PrimaryColour}; 

  margin-top: 0;
  justify-self: center;
`;


const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  // background:red;
`;


const Spant = styled.span`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
    color: ${props => props.PrimaryColour}; 

  font-weight: normal;
`;


const IconContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

export default function FooterWithColumns() {
  const { GlobalFont, PrimaryColour, SecondaryColour } = useGlobals();
  const [hoveredLink, setHoveredLink] = useState(null);
  const suburbRefs = useRef([]);


  const suburbs = [
    "Box Hill", "Blackburn", "Blackburn North", "Blackburn South",
    "Ringwood", "Mitcham", "Surrey Hills", "Laburnum"
  ];


  const linkStyleWithDecoration = (isHovered) => ({
    color: 'white',
    color: {PrimaryColour},

    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.1s ease',
    textDecoration: 'underline',
  });


  const location = useLocation();
  

  useEffect(() => {
    const homeLink = document.querySelector('.home-link');
    
    homeLink.addEventListener('click', function(event) {
      if (location.pathname === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    return () => {
      homeLink.removeEventListener('click', function(event) {
        if (location.pathname === "/") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    };
  }, [location]);

  return (
    <>
      <Container PrimaryColour={PrimaryColour} globalFont={GlobalFont} local="black">
        <IconContainer>
        <IconWrapper>
        <Link to='/' className="home-link" >

          <img src={Icon} alt="icon" />
          </Link>

        </IconWrapper>

        <ShrunkenWrapper>
          <ShrunkenDivider />
          </ShrunkenWrapper>
          </IconContainer>

        <LeftContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas globalFont={GlobalFont} PrimaryColour={PrimaryColour}>We service these areas</ServiceAreas>
          </TopRow>
         
         <MiddleRow>
         <HorizontalDivider />
         </MiddleRow>

         <BottomRow>
          <SuburbGrid local="black">
            {suburbs.map((suburb, index) => (
              <SuburbText
                key={index}
                ref={el => (suburbRefs.current[index] = el)}
                globalFont={GlobalFont}
                PrimaryColour={PrimaryColour}
              >
                {suburb}
              </SuburbText>
            ))}
          </SuburbGrid>
          <ShrunkenWrapper>
          <ShrunkenDivider />
          </ShrunkenWrapper>
          </BottomRow>
        </LeftContainer>


        <MiddleContainer>
          <TopRow globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
            <ServiceAreas globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
              <Link to='/contact-us' style={{ textDecoration: 'none', color: 'white' }} PrimaryColour={PrimaryColour}>
                Contact Us
              </Link>
            </ServiceAreas>


          </TopRow>
         
         <MiddleRow>
  <HorizontalDivider />
</MiddleRow>


<BottomRow>
          <ContactGrid>
            <ContactGridItem>
              <FontAwesomeIcon icon={faPhone} PrimaryColour={PrimaryColour}/>
            </ContactGridItem>
            <ContactGridItemR>
              <PhoneLink href="tel:0412123456" globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
                0412 123 456
              </PhoneLink>
            </ContactGridItemR>
            <ContactGridItem>
              <FontAwesomeIcon icon={faEnvelope} />
            </ContactGridItem>
            <ContactGridItemR>
              <EmailLink to='/contact-us' globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
                queries@fencing.com
              </EmailLink>
            </ContactGridItemR>
            <ContactGridItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </ContactGridItem>
            <ContactGridItemR>
              <Details globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
                <Spant globalFont={GlobalFont} PrimaryColour={PrimaryColour}> 123 Fake Rd</Spant>
                <br/>
                <Spant globalFont={GlobalFont} PrimaryColour={PrimaryColour} >  Suburb 3012</Spant>
              </Details>
            </ContactGridItemR>
            <div><br/></div>
            <div><br/></div>


            <ContactGridItem>
              <FontAwesomeIcon icon={faClock} />
            </ContactGridItem>
            <ContactGridItemR>
              <Details globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
                <Spant globalFont={GlobalFont} PrimaryColour={PrimaryColour}> Operating Hours</Spant>
                <div style={{ marginLeft: '25px', marginBottom:"-5px" }}>
                  <Spant globalFont={GlobalFont} PrimaryColour={PrimaryColour}>7am to 7pm</Spant>
                </div>
              </Details>
            </ContactGridItemR>
            
          </ContactGrid>

          <ShrunkenWrapper>       
              <ShrunkenDivider />
          </ShrunkenWrapper>
 
          </BottomRow>

        </MiddleContainer>


        <RightContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas globalFont={GlobalFont} PrimaryColour={PrimaryColour}>Follow Us</ServiceAreas>
          </TopRow>
          <MiddleRow>
          <HorizontalDivider />
          </MiddleRow>

          <BottomRow>
          <SocialIconsContainer PrimaryColour={PrimaryColour}>
            <IconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook" PrimaryColour={PrimaryColour}>
              <FaFacebook PrimaryColour={PrimaryColour} />
            </IconLink>
            <IconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </IconLink>
            <IconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </IconLink>
            <IconLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </IconLink>
          </SocialIconsContainer>
          </BottomRow>

        </RightContainer>
      </Container>

      <BottomContainer>
        <HorizontalDivider3 />
        <OtherLinks SecondaryColour={SecondaryColour} local="black">
          <Copyright globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
            Copyright © 2024 North East Fencing Pty Ltd.
          </Copyright>
          <Divider />
          <a
            href="https://content.legislation.vic.gov.au/sites/default/files/2021-03/68-7733aa072%20authorised.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyleWithDecoration(hoveredLink === 'fences')}
            PrimaryColour={PrimaryColour}
            onMouseEnter={() => setHoveredLink('fences')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Underlined globalFont={GlobalFont} PrimaryColour={PrimaryColour}>Fences Act 1968</Underlined>
          </a>
          <Divider />
          <Link
            to='/privacy'
            style={linkStyleWithDecoration(hoveredLink === 'privacy')}
            onMouseEnter={() => setHoveredLink('privacy')}
            onMouseLeave={() => setHoveredLink(null)}
            globalFont={GlobalFont}
            PrimaryColour={PrimaryColour}
          >
            <Underlined globalFont={GlobalFont} PrimaryColour={PrimaryColour}>Privacy Policy</Underlined>
          </Link>
        </OtherLinks>
      </BottomContainer>
    </>
  );
}



