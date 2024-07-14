import bkgrnd from "../../images/amerifence.png";
import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import FormSubmit from "./FormSubmit.js";
import TextAndForm from "./TextAndForm.js";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Equal width for both columns */

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100%;
  margin: 0;
  padding: 0;
    text-align: center; /* Center text inside flexbox */

`;

const RightContainer = styled.div`\
  display: flex;
  flex-direction:column;
  gap:20px;
  justify-items: left;
  align-items: flex-start; /* Center vertically */
  position: relative;
  border-radius: 5px;
  padding: 5px;
  height: 100%; /* Ensures the container takes up full height */

  @media screen and (max-width: 960px) {
    grid-row: 2/3;
    width: 100%;
    position: static;
    margin: 0;
    padding: 10px;
  }
`;

const BottomContainer = styled.div`
grid-column: span 2;
display:flex;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content to the start (top) */
  align-items: flex-start; /* Aligns content to the start (left) */
  height: 100%;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  text-align: center;
  font-size: 100px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect */

  @media screen and (max-width: 626px) {
    font-size: 30px;
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

const CheckMarkGrid = styled.div`
  display: flex;
  justify-items:flex-start;
  align-items: center; /* Align items vertically center */
  gap: 10px; /* Space between the icon and the text */
  color: white; /* Ensure text color matches */
`;

export default function DotPointHero() {
  const { GlobalFont } = useGlobals();

  return (
    <>
    <Container>
      <BackgroundImage />
      <LeftContainer>
        <Row>
          <H1 globalFont={GlobalFont}>North East Fencing</H1>
        </Row>
      </LeftContainer>
      <RightContainer>
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
      </RightContainer>
      <BottomContainer>
       <TextAndForm/>
</BottomContainer>
    </Container>
</>
  );
}
