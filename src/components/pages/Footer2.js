import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useGlobals } from "../../Globals.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



// Define the constant
const local = "black";

// Define a styled component for the form container
const Container = styled.div`
  font-family: ${props => props.globalFont};
  width: 100%;
  margin: 0 auto;
  background-color:${props => props.local};
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 6px 1fr;
  padding: 0;

  @media screen and (max-width: 670px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SuburbGrid = styled.div`
  background-color:${props => props.local};
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
  grid-row-gap: 0px;
  margin-left: 20px;
`;

const SuburbText = styled.div`
  font-family: ${props => props.globalFont};
  margin-left: 5px;
  color: white;
`;

const StyledDiv = styled.div`
  font-family: ${props => props.globalFont};
`;

const ServiceAreas = styled.div`
  background-color: ${props => props.local};
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 9px;
  color: white;
`;

const Copyright = styled.div`
  font-family: ${props => props.globalFont};
  background-color:${props => props.local};
  color: white;
  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
  margin-top: 1.5px;
`;

const Underlined = styled.div`
  font-family: ${props => props.globalFont};
  background-color:${props => props.local};
  color: white;
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
  background-color:${props => props.local};
  color: blue;
  display: flex;
  font-weight: thin;
  font-size: 15px;
  justify-content: center;
`;

const Divider = styled.span`
  height: 95%;
  width: 1px;
  background-color: white;
  margin: 0 10px;
`;

const ContactButton = styled.div`
  height: 20px;
  color: white;
  width: 50%;
  grid-column: 2;
  grid-row: 1;
  text-decoration: none;
  background-color: orange;
  margin: 0 10px;
  border-radius: 5px;
  margin-top: 12px;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: darkorange;
  }
`;

const TopRow = styled.div`
  text-decoration: none;
  color: white;
  font-family: ${props => props.globalFont};
`;

const Details = styled.div`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  padding-left: 20px;
`;

const PhoneLink = styled.a`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  padding-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalDivider = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  grid-row: 2;
  grid-column: 1/2;
  height: 1px;
  background-color: white;
  margin: 10px 20px;

  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const ShrunkenDivider = styled.div`
  background-color: black;

  @media screen and (max-width: 670px) {
    display: block;
    width: 100%;
    grid-row: 2;
    grid-column: 1/2;
    height: 1px;
    background-color: white;
    margin: 10px 0 -2px 0;
  }
`;

const HorizontalDivider2 = styled.div`
  width: 100%;
  grid-row: 2;
  grid-column: 2/3;
  height: 1px;
  background-color: white;
  margin: 10px 0;
`;

const HorizontalDivider3 = styled.div`
  width: 70%;
  height: 1px;
  background-color: white;
  margin-top: 10px;
  justify-self: center;
`;

const BigVerticalDivider = styled.span`
  margin-top: 5px;
  height: 115%;
  width: 1px;
  grid-column: 2;
  background-color: white;
  color: white;
  padding-top: 2px;
  margin: 0 auto;
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const EmailLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer2() {
  const { GlobalFont, PrimaryColour, SecondaryColour } = useGlobals();
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyleWithDecoration = (isHovered) => ({
    color: 'white',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.1s ease',
    textDecoration: 'underline',
  });

  return (
    <>
      <Container PrimaryColour={PrimaryColour} globalFont={GlobalFont} local={local}>
        <LeftContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas>We service these areas</ServiceAreas>
            <HorizontalDivider />
          </TopRow>

          <SuburbGrid>
            <SuburbText globalFont={GlobalFont}>Box Hill</SuburbText>
            <SuburbText globalFont={GlobalFont}>Blackburn</SuburbText>
            <SuburbText globalFont={GlobalFont}>Blackburn North</SuburbText>
            <SuburbText globalFont={GlobalFont}>Blackburn South</SuburbText>
            <SuburbText globalFont={GlobalFont}>Ringwood</SuburbText>
            <SuburbText globalFont={GlobalFont}>Mitcham</SuburbText>
            <SuburbText globalFont={GlobalFont}>Surrey Hills</SuburbText>
            <SuburbText globalFont={GlobalFont}>Laburnum</SuburbText>
          </SuburbGrid>
          <ShrunkenDivider />
        </LeftContainer>

        <MiddleContainer>
          <BigVerticalDivider />
        </MiddleContainer>

        <RightContainer>
          <TopRow globalFont={GlobalFont}>
            <ServiceAreas>
              <Link to='/contact-us' style={{ textDecoration: 'none', color: 'white' }}>
                Contact Us
              </Link>
            </ServiceAreas>
          </TopRow>

          <HorizontalDivider />
          <div>
            <PhoneLink href="tel:95488268" globalFont={GlobalFont}>
            <FontAwesomeIcon icon={faPhone}/>
                9548 8268</PhoneLink>
            <Details globalFont={GlobalFont}>
            <FontAwesomeIcon icon={faEnvelope} />

              <EmailLink to='/contact-us'> queries@fencing.com</EmailLink>
            </Details>
          </div>
        </RightContainer>
      </Container>

      <BottomContainer>
        <HorizontalDivider3 />

        <OtherLinks SecondaryColour={SecondaryColour} local={local}>
          <Copyright globalFont={GlobalFont}>Copyright © 2024 North East Fencing Pty Ltd.</Copyright>
          <Divider />
          <a
            href="https://content.legislation.vic.gov.au/sites/default/files/2021-03/68-7733aa072%20authorised.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyleWithDecoration(hoveredLink === 'fences')}
            onMouseEnter={() => setHoveredLink('fences')}
            onMouseLeave={() => setHoveredLink(null)}
            globalFont={GlobalFont}
          >
            <Underlined globalFont={GlobalFont}>Fences Act 1968</Underlined>
          </a>
          <Divider />
          <Link
            to='/privacy'
            style={linkStyleWithDecoration(hoveredLink === 'privacy')}
            onMouseEnter={() => setHoveredLink('privacy')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Underlined globalFont={GlobalFont}>Privacy Policy</Underlined>
          </Link>
        </OtherLinks>
      </BottomContainer>
    </>
  );
}
