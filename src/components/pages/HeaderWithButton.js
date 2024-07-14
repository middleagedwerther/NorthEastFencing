import bkgrnd from "../../images/amerifence.png";
import React from 'react';
import FormSubmit from './FormSubmit';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";




const CheckMarkGrid = styled.div`
  display: flex;
  justify-items:flex-start;
  align-items: center; /* Align items vertically center */
  gap: 10px; /* Space between the icon and the text */
  color: white; /* Ensure text color matches */
`;




const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding:20px;
  margin-bottom:0;
  z-index:20;


  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }


  @media screen and (max-width: 363px) {
padding:10px;
  }
`;


const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin-top: 10px; /* Optional: Add some margin to separate from above content */
`;

const ContactButton = styled.button`
  background: blue;
  max-width:auto;
  padding: 10px 20px; /* Add padding to create some space around text */
  border-radius: 5px; /* Optional: Adds rounded corners */
  cursor: pointer; /* Make the button cursor pointer on hover */
  color: white; /* Text color */
  display: inline-block; /* Ensures button spans only the width of its content */
`;


const RightContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: relative;
  grid-column: 2/3;
  border-radius: 5px;
  padding: 5px;
  height: 100%; /* Ensures the container takes up full height */


  @media screen and (max-width: 960px) {
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
    position: static;
    margin: 0;
    padding: 10px;
  }


  @media screen and (max-width: 363px) {
    padding: 0;
  }
`;


const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


const Row2 = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: left;
  // justify-content: center;
  // height: 100%;


  display:grid;
  grid-template-columns: auto auto;
  column-gap: 30px; /* Set the desired gap between columns */


  @media screen and (max-width: 667px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }


`;




const Row2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;


const H1Wrapper = styled.span`
  display: inline-block;
  width: 80%;
  // background: blue;
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


const H2 = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: white;
  text-align: left;
  font-size: 30px;
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


export default function HeaderWithButton() {
  const { GlobalFont } = useGlobals();


  return (
    <Container>
      <BackgroundImage />
      <LeftContainer>
        <Row>
          <H1Wrapper>
            <H1 globalFont={GlobalFont}>North East Fencing</H1>
          </H1Wrapper>
        </Row>


        <Row2Wrapper>
          <Row2>
            <CheckMarkGrid>
              <IoIosCheckmarkCircleOutline size={40} color="green" />
              <span>Quality workmanship and materials</span>
            </CheckMarkGrid>
            <CheckMarkGrid>
              <IoIosCheckmarkCircleOutline size={40} color="green" />
              <span>20 years of experience</span>
            </CheckMarkGrid>
            <CheckMarkGrid>
              <IoIosCheckmarkCircleOutline size={40} color="green" />
              <span>12-month warranty on workmanship</span>
            </CheckMarkGrid>
            <CheckMarkGrid>
              <IoIosCheckmarkCircleOutline size={40} color="green" />
              <span>Qualified carpenter</span>
            </CheckMarkGrid>
            <CheckMarkGrid>
              <IoIosCheckmarkCircleOutline size={40} color="green" />
              <span>Free, no-obligation quotes</span>
            </CheckMarkGrid>
            <CheckMarkGrid>
              <IoIosCheckmarkCircleOutline size={40} color="green" />
              <span>4.8 rating on Google Reviews</span>
            </CheckMarkGrid>
          </Row2>
        </Row2Wrapper>
        <ContactButtonWrapper>
        <ContactButton>
          Contact Us
        </ContactButton>
        </ContactButtonWrapper>


      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </Container>
  );
}



