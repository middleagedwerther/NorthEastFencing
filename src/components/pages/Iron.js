import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import FooterWithColumns from "./FooterWithColumns.js";
import WSPGallery from './Gallery2';

import bkgrnd from "../../images/eisen3.jpg";
import holz1 from "../../images/eisen1.webp";
import holz2 from "../../images/eisen10.webp";
import holz3 from "../../images/eisen11.jpg";
import holz4 from "../../images/eisen12.jpg";
import holz5 from "../../images/eisen2.jpg";
import holz6 from "../../images/eisen3.jpg";
import holz7 from "../../images/eisen3.webp";
import holz8 from "../../images/eisen4.jpg";
import holz9 from "../../images/eisen5.jpg";
import madera from "../../images/eisen7.jpg";
import madera1 from "../../images/eisen6.jpg";
import madera2 from "../../images/eisen9.webp";
import madera3 from "../../images/eisen13.jpg";
import madera4 from "../../images/eisen14.jpg";
import madera5 from "../../images/eisen15.jpg";


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
  z-index:1;
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  font-size: 100px;
  margin: 0;
  z-index:1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 626px) {
    font-size: 50px;
    padding: 10px;
  }
`;

const H2Wrapper = styled.span`
  display: inline-block;
  z-index:1;
`;

const H2 = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: white;
  text-align: left;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
  padding-left: 20px;
  z-index:1;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity and color as needed */
  z-index: 0;
`;

const GalleryContainer = styled.div`
  display: flex;          /* Enable Flexbox */
  justify-content: center; /* Center children horizontally */
  width: 100%;           /* Ensure the container takes full width */`;

export default function Iron() {
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
        <Overlay />

        <H1Wrapper>
          <H1 globalFont={GlobalFont}>Iron Fences</H1>
        </H1Wrapper>
        <H2Wrapper>
          <H2 globalFont={GlobalFont}>Explore Our Beautiful Iron Fence Collection</H2>
        </H2Wrapper>
      </Container>
      <GalleryContainer>
        <WSPGallery galleryImages={galleryImages} />
      </GalleryContainer>
      <FooterWithColumns />
    </>
  );
}
