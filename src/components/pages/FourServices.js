import styled from 'styled-components';
import React from 'react';
import { useGlobals } from "../../Globals.js";
import { Link } from 'react-router-dom';

import WoodenFence from "../../images/woodenfence.png";
import Aluminium from "../../images/alunimiumfence.png";
import Iron from "../../images/ironfence.jpg";
import AmeriFence from "../../images/amerifence.png"


const ImageBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 5px;
  overflow: hidden; /* Ensure the overlay stays within the box */
`;

const Overlay = styled.div`
  position: absolute;
  top: 100%; /* Start the overlay below the image */
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-family: ${props => props.globalFont};
  transition: top 0.3s ease; /* Animation effect */

  ${ImageBoxWrapper}:hover & {
    top: 0; /* Slide the overlay to the top on hover */
  }

  @media screen and (max-width: 670px) {
    display: none; /* Hide the overlay */
  }
`;

const MobileOverlayText = styled.div`
  display: none;
  text-align: center;
  font-size: 16px;
  font-family: ${props => props.globalFont};
  color: #353E43;
  margin-top: 10px;

  @media screen and (max-width: 670px) {
    display: block;
  }
`;

const Container = styled.div`
  font-family: ${props => props.globalFont};
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 20px;
  padding-right: 20px;
  background: ${props => props.primaryColour};

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  z-index: 2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white; /* Explicitly set to white */
    z-index: -1;
    border-radius: 5px; /* Ensure it has the same border-radius */
  }

  &:hover {
    border-color: orange; /* Change this color to whatever you prefer */
  }
`;

const SectionHeading = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 30px;
  color: orange;
  margin-bottom: 0;
  font-family: ${props => props.globalFont};
`;

const SubHeading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 20px 20px 12px 20px;
  font-weight: 500;
  color: orange;
  font-family: ${props => props.globalFont};
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

export default function FourServices() {
  const { GlobalFont, PrimaryColour } = useGlobals();

  return (
    <>
      <SectionHeading globalFont={GlobalFont}>Our Services</SectionHeading>

      <Container  globalFont={GlobalFont}>
        <Cell primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
          <Link to='/wooden'>

            <ImageBox src={WoodenFence} alt="Wooden Fence" />
            <Overlay globalFont={GlobalFont}>Wood fence is good.</Overlay>
            </Link>

          </ImageBoxWrapper>
          <>
            <SubHeading globalFont={GlobalFont}>Wood</SubHeading>
            <MobileOverlayText globalFont={GlobalFont}>Wood fence is good.</MobileOverlayText>
            {/* <Para globalFont={GlobalFont}>Wood is good</Para> */}
          </>
        </Cell>

        <Cell primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
          <Link to='/aluminium'>

            <ImageBox src={Aluminium} alt="Aluminium Fence" />
            <Overlay globalFont={GlobalFont}>Aluminium fence is good.</Overlay>
            </Link>
          </ImageBoxWrapper>
          <>
            <SubHeading globalFont={GlobalFont}>Aluminium</SubHeading>
            <MobileOverlayText globalFont={GlobalFont}>Aluminium fence is good.</MobileOverlayText>
            {/* <Para globalFont={GlobalFont}>Aluminium is good</Para> */}
          </>
        </Cell>

        <Cell primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
          <Link to='/iron'>

            <ImageBox src={Iron} alt="Iron Fence" />
            <Overlay globalFont={GlobalFont}>Iron fence is good.</Overlay>
            </Link>
          </ImageBoxWrapper>
          <>
            <SubHeading globalFont={GlobalFont}>Iron</SubHeading>
            <MobileOverlayText globalFont={GlobalFont}>Iron fence is good.</MobileOverlayText>
            {/* <Para globalFont={GlobalFont}>Iron is good</Para> */}
          </>
        </Cell>

        <Cell primaryColour={PrimaryColour}>
          <ImageBoxWrapper>
            <ImageBox src={AmeriFence} alt="USA Fence" />
            <Overlay globalFont={GlobalFont}>USA fence is good.</Overlay>
          </ImageBoxWrapper>
          <>
            <SubHeading globalFont={GlobalFont}>USA</SubHeading>
            <MobileOverlayText globalFont={GlobalFont}>USA fence is good.</MobileOverlayText>
            {/* <Para globalFont={GlobalFont}>Iron is good</Para> */}
          </>
        </Cell>
      </Container>
    </>
  );
}
