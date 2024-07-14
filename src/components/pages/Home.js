import React from 'react';
import '../../App.css';
import styled from 'styled-components';

import Zaun from "../../images/zaun.jpg"; // Corrected the import path

import { Link } from 'react-router-dom';
import FooterWithColumns from "./FooterWithColumns.js"
import QuoteCarousel from './QuoteCarousel.js';
import { useGlobals } from "../../Globals.js";
import Accordion from './SitePointAccordion.js';
import Header from './Header.js';
import ThreeServices from './ThreeServices.js';

const Parent = styled.div`
  margin-top: 60px;
  width: 100%;
  position: relative;
  overflow: hidden; /* Ensure content stays within the viewport */
  background: #f7f7f7;
`;

const ServicesContainer = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;

  @media screen and (max-width: 626px) {
    grid-template-columns: 1fr;
  }
`;

const WhyChooseUsGrid = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 626px) {
    grid-template-columns: 1fr;
  }
`;

const AboutUsCell = styled.div`
  width: 100%;

  img {
    max-width: 100%; /* Ensures the image doesn't overflow its container */
    display: block; /* Ensures the image behaves like a block element */
    border-radius: 5px; /* Optional: Adds rounded corners to the image */
  }
`;

const Separator = styled.div`
  width: 70%;
  height: 1px;
  background-color: black;
  margin: 0 auto;
  margin-top: 0;

  @media screen and (max-width: 626px) {
    width: 90%;
  }
`;

const ImageBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  border-radius: 5px;
`;

const TestimonialsContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.background || 'transparent'};
`;

const ImageBox = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 5px;

  ${ImageBoxWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  border-radius: 5px;
  transition: transform 0.3s ease;

  ${ImageBoxWrapper}:hover & {
    transform: scale(1.02);
    background-color: rgba(0, 0, 0, 0);
  }
`;

const WhyChooseUsContainer = styled.div`
  position: relative;
  background: ${props => props.background || '#eaf8f9'};
  margin-top: 0;
  padding: 20px;
`;

const OurServicesContainer = styled.div`
  background-color: ${props => props.background || 'transparent'};
  padding: 20px;
`;

const SectionHeading = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  text-align: center;
  font-size: 30px;
  color: ${props => props.secondaryColour};  // Change here
  margin-bottom: 0;
  font-family: ${props => props.globalFont};
  font-size: 32px;
  font-weight: 500;
  padding-left: 20px;
`;

const WhyChooseUs = ({ globalFont, secondaryColour, background }) => (
  <WhyChooseUsContainer background={background}>
    <SectionHeading globalFont={globalFont} secondaryColour={secondaryColour}>Who Are We?</SectionHeading>
    <WhyChooseUsGrid>
      <AboutUsCell>
        <img src={Zaun} alt="Zaun" style={{ maxWidth: '100%', height: 'auto' }} />
      </AboutUsCell>
      <AboutUsCell>
        <p>blah blah blah</p>
      </AboutUsCell>
    </WhyChooseUsGrid>
  </WhyChooseUsContainer>
);

const StyledLink = styled(Link)``;

const Testimonials = ({ globalFont, background }) => (
  <TestimonialsContainer background={background}>
    <QuoteCarousel />
  </TestimonialsContainer>
);

export default function Home() {
  const { GlobalFont, PrimaryColour, SecondaryColour } = useGlobals();

  const ColorA = "#f7f7f7";

  return (
    <Parent>
      <Header />
      <WhyChooseUs globalFont={GlobalFont} secondaryColour={SecondaryColour} background={ColorA} />
      <Separator />
      <ThreeServices />
      <Separator />
      <Testimonials globalFont={GlobalFont} background={ColorA} />
      <Separator />
      <Accordion />
      <FooterWithColumns />
    </Parent>
  );
}
