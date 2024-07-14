import bkgrnd from "../../images/amerifence.png";
import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import Navbar from "../Navbar.js";
import FormSubmit from "./FormSubmit.js";

const Container = styled.div`
//   position: relative;
//   display: flex;
  // width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100%;
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 1; // Ensures the header is above the background image
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: rgb(47, 79, 79);
  text-align: left;
  padding-left: 20px;
  font-size: 50px;
  margin: 0;

  @media screen and (max-width: 626px) {
    font-size: 30px;
    padding: 10px;
  }
`;

const H2 = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: rgb(47, 79, 79);
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

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Temporary background color for debugging */
  z-index: 100; /* Ensure it is above the background */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Allows the content to grow and take the available space */
`;

const Container2 = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  background: blue;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center; /* Center text inside flexbox */
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: relative;
  flex: 1;
  border-radius: 5px;
  padding: 5px;
  height: 100%; /* Ensures the container takes up full height */

  @media screen and (max-width: 960px) {
    width: 100%;
    position: static;
    margin: 0;
    padding: 10px;
  }
`;

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
  justify-content: center; /* Aligns content to the center vertically */
  align-items: center; /* Aligns content to the center horizontally */
  height: 100%;
`;

export default function TextAndForm() {
  const { GlobalFont } = useGlobals();

  return (
    <>
      <Container>
        <LeftContainer>
          <Row2>
            <H2 globalFont={GlobalFont}>
              Enhance the beauty, security, and privacy of your property with our expert fencing services. With years of experience and a dedication to craftsmanship, we are committed to delivering fences that not only stand the test of time but also add value to your property.
            </H2>
          </Row2>
        </LeftContainer>
        <RightContainer>
          <FormSubmit />
        </RightContainer>
      </Container>
    </>
  );
}
