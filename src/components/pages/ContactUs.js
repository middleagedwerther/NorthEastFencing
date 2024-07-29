import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import bkgrnd from "../../images/holz4.jpg";

import EmailForm from './Formspree.js';


import { useGlobals } from "../../Globals.js";
import Accordion from "./SitePointAccordion.js";
import FooterWithColumns from './FooterWithColumns.js';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Adjust opacity and color as needed */
  z-index: 0;
`;


const PageContainer = styled.div`
  display: grid;
  grid-template-columns:5fr 4fr;
  justify-content: center;
  gap: 50px;
  padding: 10px;
  border: 2px solid black;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);


  @media screen and (max-width: 900px) {
  display:flex;
    flex-direction: column; /* Stack the children vertically on smaller screens */
    align-items: center; /* Center align the children */
  }
`;


const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: ${(props) => props.primaryColour}; /* Set background color */
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
  // background-color: ${(props) => props.primaryColour}; 
  padding: 10px; /* Add some padding to the header */
  border-radius: 5px; /* Optional: add rounded corners */
`;


const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  font-size: 100px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect */


  @media screen and (max-width: 626px) {
    font-size: 50px;
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

  background-color: ${(props) => props.primaryColour}; /* Set background color */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;


export default function ContactUs() {
  const { GlobalFont, PrimaryColour } = useGlobals();


  return (
    <>
      <Container primaryColour={PrimaryColour}>
        <BackgroundImage primaryColour={PrimaryColour} />
        <Overlay/>
        <H1Wrapper primaryColour={PrimaryColour}>
          <H1 globalFont={GlobalFont}>Contact Us</H1>
        </H1Wrapper>
      </Container>


      <PageContainer>
        <Accordion />
        <EmailForm />
      </PageContainer>


      <FooterWithColumns />
    </>
  );
}
