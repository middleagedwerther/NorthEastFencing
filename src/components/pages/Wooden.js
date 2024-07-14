import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useGlobals } from "../../Globals.js";
import FooterWithColumns from "./FooterWithColumns.js";
import WSPGallery from './Gallery2';

import bkgrnd from "../../images/amerifence.png";
import image1 from "../../images/img-1.jpg";
import holz1 from "../../images/holz1.jpg";
import holz2 from "../../images/holz2.jpg";
import holz3 from "../../images/holz3.jpg";
import holz4 from "../../images/holz4.jpg";
import holz5 from "../../images/holz5.jpg";
import holz6 from "../../images/holz6.jpg";
import holz7 from "../../images/holz7.webp";
import holz8 from "../../images/holz8.jpg";
import holz9 from "../../images/holz9.jpg";
import madera from "../../images/madera3.jpg";
import madera1 from "../../images/madera1.jpg";
import madera2 from "../../images/madera2.webp";
import madera3 from "../../images/wooden12.jpeg";
import madera4 from "../../images/wooden13.webp";
import madera5 from "../../images/wooden14.jpg";



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  z-index: 20;

  @media screen and (max-width: 960px) {
    padding: 10px;
  }
`;

const H1Wrapper = styled.span`
  display: inline-block;
  // animation: ${slideInFromLeft} 1s ease-in-out;
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

const H2Wrapper = styled.span`
  display: inline-block;
  // animation: ${slideInFromRight} 1s ease-in-out;
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
  // animation: ${fadeIn} 2s ease-in-out;
`;

const GalleryContainer = styled.div`
  width: 100%;
  // animation: ${fadeIn} 1.5s ease-in-out;
`;

export default function Wooden() {
  const { GlobalFont } = useGlobals();

  const galleryImages = [
    { img: holz1, className: "thumbnail" },
    { img: holz2, className: "thumbnail" },
    { img: holz3, className: "thumbnail" },
    { img: holz4, className: "thumbnail" },
    { img: holz5, className: "thumbnail" },
    { img: holz6, className: "thumbnail" },
    { img: holz7, className: "thumbnail" },
    { img: holz8, className: "thumbnail" },
    { img: holz9, className: "thumbnail" },
    { img: madera, className: "thumbnail" },
    { img: madera1, className: "thumbnail" },
    { img: madera2, className: "thumbnail" },
    { img: madera3, className: "thumbnail" },
    { img: madera4, className: "thumbnail" },
    { img: madera5, className: "thumbnail" },

  ];

  return (
    <>
      <Container>
        <BackgroundImage />
        <H1Wrapper>
          <H1 globalFont={GlobalFont}>Wooden Fences</H1>
        </H1Wrapper>
        <H2Wrapper>
          <H2 globalFont={GlobalFont}>Explore Our Beautiful Wooden Fence Collection</H2>
        </H2Wrapper>
      </Container>
      <GalleryContainer>
        <WSPGallery galleryImages={galleryImages} />
      </GalleryContainer>
      <FooterWithColumns />
    </>
  );
}
