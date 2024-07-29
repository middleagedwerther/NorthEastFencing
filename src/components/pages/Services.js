import bkgrnd from "../../images/eisen3.jpg";
import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import FooterWithColumns from "./FooterWithColumns.js";
import QuoteCarousel from './QuoteCarousel.js';
import { Link } from 'react-router-dom';


import holz1 from "../../images/holz1.jpg";
import holz3 from "../../images/aluminio6.jpg";
import Iron from "../../images/eisen1.webp";


const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden; /* Ensure content stays within the viewport */
  background: #f7f7f7;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  background: white;
  margin: 0 20px; /* Adds some padding to avoid content touching the edges */
`;


const HeaderWrapper = styled.div`
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity and color as needed */
  z-index: 0;
`;

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  padding: 20px;
  z-index: 20;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }


  @media screen and (max-width: 363px) {
    padding: 10px;
  }
`;

const H1Wrapper = styled.span`
  display: inline-block;
  z-index:1;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  font-size: 100px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 626px) {
    font-size: 50px;
    padding: 10px;
  }
`;
const H2 = styled.p`
  font-family: ${(props) => props.globalFont};
  color: black;
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 20px;
  line-height: 1.5;
    color: ${props => props.textColor}; // Updated to use textColor

  @media screen and (max-width: 626px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const SubHeading = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: black;
      color: ${props => props.textColor}; // Updated to use textColor
text-decoration:none;
  text-align: left;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 2px;
  padding-left: 20px;

  @media screen and (max-width: 626px) {
    font-size: 20px;
    padding: 10px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bkgrnd});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;


const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;

  @media screen and (max-width: 744px) {

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

const Row1Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  // background:blue;

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;


const Row1Right = styled.div`
  grid-area: right;
      border-radius: 10px; /* Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust values as needed */

  padding: 10px;
  gap: 20px;
// background:red;


  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

  transition: transform 0.3s ease; /* Add transition for smooth scaling effect */

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }



  @media screen and (max-width: 744px) {
    gap: 10px;
        min-height: 300; // Adjust height for smaller screens

  }
}
`;








const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;




  @media screen and (max-width: 744px) {
    grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

    grid-template-areas:
      "right"
      "left";
  }
`;








const Row2Left = styled.div`
  grid-area: left;
border-radius: 10px; /* Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust values as needed */


  padding: 10px;
  gap: 20px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

transition: transform 0.3s ease; /* Add transition for smooth scaling effect */

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }



  }
`;




const Row2Right = styled.div`
  grid-area: right;
  // display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

// background:red;

  }

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;






const Row3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;


  @media screen and (max-width: 744px) {
    grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

    grid-template-areas:
      "left"
      "right";
  }
`;




const Row3Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;




// background:blue;

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;


const Space = styled.div`
`;

const Row3Right = styled.div`
  grid-area: right;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust values as needed */


border-radius: 10px; /* Add rounded corners */


  padding: 10px;
  gap: 20px;


  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

  
  transition: transform 0.3s ease; /* Add transition for smooth scaling effect */

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }


  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;


export default function AboutUs() {
  const { GlobalFont, PrimaryColour } = useGlobals();


  return (
    <>

      <Container>
      <BackgroundImage />
      <Overlay/>
        <H1Wrapper>
          <H1 globalFont={GlobalFont}>Services</H1>
        </H1Wrapper>
      </Container>

<OuterContainer>
  <InnerContainer>
      <Row1>
        <Row1Left>
        <Link to='/wooden' style={{ textDecoration: 'none' }}>

  <SubHeading globalFont={GlobalFont} textColor={PrimaryColour}>
  Wooden Fences
  </SubHeading>
</Link>
          <H2 globalFont={GlobalFont}>
          Transform your property with the timeless elegance of wooden fences. Our premium wooden fences combine classic beauty with exceptional durability, providing a versatile solution that enhances both privacy and security. Crafted from high-quality, sustainably sourced timber, these fences resist the elements while offering a natural, eco-friendly choice. Their customizable designs range from rustic charm to sophisticated modern styles, ensuring a perfect match for any landscape. With easy installation and straightforward maintenance, our wooden fences are not only a cost-effective investment but also a stunning addition that increases your property value and curb appeal. Choose our wooden fences to create a warm, inviting, and secure environment around your home.
          </H2>
        </Row1Left>
        <Link to='/wooden' >
        <Row1Right style={{ backgroundImage: `url(${holz1})` }}>
        </Row1Right>
        </Link>

      </Row1>

      <Row2>
      <Link to='/aluminium' >
      <Row2Left style={{ backgroundImage: `url(${holz3})` }}>
        </Row2Left>
        </Link>

        <Row2Right>
        <Link to='/aluminium' style={{ textDecoration: 'none' }}>
  <SubHeading globalFont={GlobalFont} textColor={PrimaryColour}>
    Aluminium Fences
  </SubHeading>
</Link>

          <H2 globalFont={GlobalFont}>
          Our premium aluminium fences offer a sleek, modern design that provides exceptional durability and low maintenance. Made from high-quality materials, these fences are resistant to rust and corrosion, making them perfect for any climate. Available in various styles and finishes, aluminium fences can be customised to complement your property’s aesthetic. They provide excellent security without compromising on style. With straightforward installation and long-lasting performance, our aluminium fences are a practical and attractive choice for enhancing your property’s value and appearance.
          </H2>
        </Row2Right>
      </Row2>

      <Row3>
        <Row3Left>
        <Link to='/iron' style={{ textDecoration: 'none' }}>
  <SubHeading globalFont={GlobalFont} textColor={PrimaryColour}>
    Iron Fences
  </SubHeading>
</Link>
          <H2 globalFont={GlobalFont}>
          Enhance your property with the timeless strength and beauty of iron fences. Our iron fences are designed to provide unparalleled security and durability while adding a touch of elegance to your landscape. Made from robust, high-quality iron, these fences are ideal for both residential and commercial properties. They are customizable, offering a range of ornate and classic designs that can be tailored to your specific needs. With a protective coating to prevent rust and easy maintenance, our iron fences ensure long-lasting beauty and functionality. Choose our iron fences to create a distinguished, secure, and sophisticated perimeter for your property.
          </H2>
        </Row3Left>
        <Link to='/iron' >

        <Row3Right style={{ backgroundImage: `url(${Iron})` }}>
        </Row3Right>
        </Link>

      </Row3>
      <Space style={{ height: '8px' }}></Space>

      <QuoteCarousel />
      </InnerContainer>
      </OuterContainer>
      <HeaderWrapper>
      <FooterWithColumns />
      </HeaderWrapper>
    </>
  );
}

