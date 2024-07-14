import bkgrnd from "../../images/amerifence.png";
import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import FooterWithColumns from "./FooterWithColumns.js";
import QuoteCarousel from './QuoteCarousel.js';
import { Link } from 'react-router-dom';


import holz1 from "../../images/holz1.jpg";
import holz3 from "../../images/aluminio6.jpg";
import Iron from "../../images/eisen1.webp";

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  padding: 20px;
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

const H2 = styled.p`
  font-family: ${(props) => props.globalFont};
  color: black;
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 20px;
  line-height: 1.5;

  @media screen and (max-width: 626px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const SubHeading = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: black;
  text-align: left;
  font-size: 32px;
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

const Row1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;

  @media screen and (max-width: 744px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

const Row1Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */

        &:hover {
      transform: scale(1.05);
    }

  }

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;

const Row1Right = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */

        &:hover {
      transform: scale(1.05);
    }

  }

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;

const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;

  @media screen and (max-width: 744px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "right"
      "left";
  }
`;

const Row2Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  padding: 10px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */

        &:hover {
      transform: scale(1.05);
    }

  }
`;

const Row2Right = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */

        &:hover {
      transform: scale(1.05);
    }

  }

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;



const Row3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;

  @media screen and (max-width: 744px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

const Row3Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */

        &:hover {
      transform: scale(1.05);
    }

  }

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;

const Row3Right = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */

        &:hover {
      transform: scale(1.05);
    }

  }

  @media screen and (max-width: 744px) {
    gap: 10px;
  }
`;


export default function AboutUs() {
  const { GlobalFont } = useGlobals();

  return (
    <>
      <Container>
        <BackgroundImage />
        <H1Wrapper>
          <H1 globalFont={GlobalFont}>Services</H1>
        </H1Wrapper>
      </Container>

      <Row1>
        <Row1Left>
          <SubHeading globalFont={GlobalFont}>
            Heading 1
          </SubHeading>
          <H2 globalFont={GlobalFont}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </H2>
        </Row1Left>
        <Row1Right>
        <Link to='/wooden' >

          <img src={holz1} alt="holz1" />
          </Link>

        </Row1Right>
      </Row1>

      <Row2>
        <Row2Left>
        <Link to='/aluminium' >

          <img src={holz3} alt="holz3" />
          </Link>
        </Row2Left>
        <Row2Right>
          <SubHeading globalFont={GlobalFont}>
            Heading 2
          </SubHeading>
          <H2 globalFont={GlobalFont}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </H2>
        </Row2Right>
      </Row2>


      <Row3>
        <Row3Left>
        <SubHeading globalFont={GlobalFont}>
            Heading 3
          </SubHeading>
          <H2 globalFont={GlobalFont}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </H2>
        </Row3Left>
        <Row3Right>
        <Link to='/iron' >

        <img src={Iron} alt="holz3" />
      </Link>
        </Row3Right>
      </Row3>

      <QuoteCarousel />
      <FooterWithColumns />
    </>
  );
}
