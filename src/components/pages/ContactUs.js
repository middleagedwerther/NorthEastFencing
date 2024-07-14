import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import FormSubmit from './FormSubmit';
import bkgrnd from "../../images/amerifence.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


import { useGlobals } from "../../Globals.js";
import FooterWithIcon from './FooterWithIcon.js';
import Accordion from "./SitePointAccordion.js";
import FooterWithColumns from './FooterWithColumns.js';


const ContactUsWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  margin-top: 50px;
`;


const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Add gap between the items */
`;


const ContactDetailsItem = styled.div`
  display: flex;
  align-items: center;
`;


const ContactDetailsText = styled.p`
  margin: 0 0 0 10px; /* Margin to the left of the text for spacing */
`;


const FormContainer = styled.div`
  display: flex;
  height: 450px;
  width: 400px; /* Set the desired width for the form container */
  padding: 20px;
  background: ${(props) => props.primaryColour};
  border-radius: 5px;
  // border: 2px solid ${(props) => props.primaryColour};


  @media screen and (max-width: 642px) {
    width: 100%; /* Make the form container take full width on smaller screens */
  }
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


  @media screen and (max-width: 642px) {
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
  background-color: ${(props) => props.primaryColour}; /* Set background color */
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
        <H1Wrapper primaryColour={PrimaryColour}>
          <H1 globalFont={GlobalFont}>Contact Us</H1>
        </H1Wrapper>
      </Container>


      <PageContainer>
        <Accordion />
        <FormSubmit />
      </PageContainer>


      <FooterWithColumns />
    </>
  );
}
