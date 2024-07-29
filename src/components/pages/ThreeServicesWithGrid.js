import styled from 'styled-components';
import React from 'react';
import { useGlobals } from "../../Globals.js";
import { Link } from 'react-router-dom';

import WoodenFence from "../../images/woodenfence.png";
import Aluminium from "../../images/alunimiumfence.png";
import Iron from "../../images/ironfence.jpg";

import "./BodyText.css";

// Adjusted styled components
const ImageBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50%; /* Aspect ratio: 2:1 */
  border-radius: 5px;
  overflow: hidden;

  @media screen and (max-width: 990px) {
    padding-top: 66%; /* Aspect ratio: 4:3 for smaller screens */
  }
`;

const ImageBox = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
  border-radius: 5px;
`;

const WebCopy = styled.div`
  text-align: left;
  margin: 0 10px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
  font-family: ${props => props.globalFont};
  overflow: hidden; /* Ensure no overflow */
  flex-grow: 1; /* Ensure the WebCopy takes available space */

    @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
    margin: 0 5px;
  }
`;

const StyledButton = styled(Link)`
  padding: 14px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: ${props => props.fontFamily};
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  font-family: ${props => props.globalFont};
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 0 auto;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid ${props => props.primaryColour};
  border-radius: 5px;
  padding: 20px;
  height: 100%; /* Ensure full height columns */

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

    @media screen and (max-width: 600px) {
padding:10px;
}
`;

const SectionHeading = styled.div`
  width: 100%;
  // background:green;
  text-align: center;
  padding: 10px;
  font-size: ${props => props.subheadingSize}; /* Use SubheadingSize here */
  color: ${props => props.textColor};
  margin-bottom: 0;
  font-family: ${props => props.globalFont};
`;

const SubHeading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding: 20px 0 12px 0;
  font-weight: 500;
  color: ${props => props.textColor};
  font-family: ${props => props.globalFont};
`;

export default function ThreeServicesWithGrid() {
  const { GlobalFont, PrimaryColour } = useGlobals();
  const myColor = PrimaryColour;

  return (
    <>
      <SectionHeading globalFont={GlobalFont} textColor={myColor} className="SubHeading">Our Services</SectionHeading>
      <Container globalFont={GlobalFont} primaryColour={PrimaryColour}>
        <ColumnWrapper primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
            <Link to='/wooden'>
              <ImageBox src={WoodenFence} alt="Wooden Fence" />
            </Link>
          </ImageBoxWrapper>
          <SubHeading globalFont={GlobalFont} textColor={myColor}>Wooden Fences</SubHeading>
          <WebCopy globalFont={GlobalFont} className="BodyText">
            Enhance your property with elegant wooden fences. They offer timeless beauty, customizable designs, and natural privacy. Ideal for adding charm and security, wooden fences are eco-friendly and adaptable to various styles. Choose wood for a classic look that stands the test of time, with easy maintenance and lasting durability.
          </WebCopy>
          <StyledButton to='/wooden' fontFamily={GlobalFont}>See our work</StyledButton>
        </ColumnWrapper>

        <ColumnWrapper primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
            <Link to='/aluminium'>
              <ImageBox src={Aluminium} alt="Aluminium Fence" />
            </Link>
          </ImageBoxWrapper>
          <SubHeading globalFont={GlobalFont} textColor={myColor}>Aluminium Fences</SubHeading>
          <WebCopy globalFont={GlobalFont} className="BodyText">
            Upgrade your property with sleek aluminium fences. Lightweight yet sturdy, they provide modern aesthetics and long-lasting durability. Resistant to rust and low-maintenance, aluminium fences offer exceptional security and style without the hassle. Perfect for a contemporary look that combines elegance with practicality, enhancing both function and curb appeal.
          </WebCopy>
          <StyledButton to='/aluminium' fontFamily={GlobalFont}>See our work</StyledButton>
        </ColumnWrapper>

        <ColumnWrapper primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
            <Link to='/iron'>
              <ImageBox src={Iron} alt="Iron Fence" />
            </Link>
          </ImageBoxWrapper>
          <SubHeading globalFont={GlobalFont} textColor={myColor}>Iron Fences</SubHeading>
          <WebCopy globalFont={GlobalFont} className="BodyText">
            Iron fences add timeless elegance and strength to any property. Their classic design offers unmatched durability and security, making them ideal for both decorative and functional purposes. With minimal maintenance, iron fences withstand the elements and provide a sophisticated touch, enhancing your home’s beauty and safety for years.
          </WebCopy>
          <StyledButton to='/iron' fontFamily={GlobalFont}>See our work</StyledButton>
        </ColumnWrapper>
      </Container>
    </>
  );
}
