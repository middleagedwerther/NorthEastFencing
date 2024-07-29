import bkgrnd from "../../images/eisen13.jpg";
import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import EmailForm from "./Formspree.js";

// Styled components for various elements
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 20px;
  margin-bottom: 0;
  z-index: 20;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  @media screen and (max-width: 363px) {
    padding: 10px;
  }
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
  z-index: 1;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-column: 2/3;
  border-radius: 5px;
  padding: 5px;
  height: 100%;
  z-index: 1;

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
  display: grid;
  justify-items: start; 
  grid-template-columns: auto auto;
  column-gap: 30px;

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
  margin: 0 20px;
`;

const H1Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  // background: purple;
  margin: 0 auto;

  @media screen and (max-width: 626px) {
    width: auto;
    margin: 0 auto;
  }
`;

const H1 = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: white;
  display: inline-block;
  text-align: center;
  padding-left: 20px;
  font-size: clamp(100px, 9vw, 180px);
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7); /* Stronger text shadow */

  @media screen and (max-width: 626px) {
    padding: 10px;
    margin: 0 auto;
    font-size: clamp(75px, 9vw, 180px);
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

const CheckMarkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: start;
  gap: 15px;
  margin: 5px;
  color: ${(props) => props.color};
`;

const StyledIcon = styled(IoIosCheckmarkCircleOutline)`
  font-size: 40px;
  font-size: clamp(35px, 4vw, 40px);

  @media screen and (max-width: 667px) {
    font-size: 30px;
    font-size: clamp(25px, 3vw, 35px);
  }
`;

const StyledSpan = styled.span`
  font-family: ${(props) => props.globalFont};
  justify-items: start;
  font-size: clamp(15px, 4vw, 25px);
  color: white;
  text-shadow: 30px 30px 60px rgba(0, 0, 0, 0.7); /* Stronger text shadow */

  @media screen and (max-width: 667px) {
    font-size: 30px;
    font-size: clamp(20px, 3vw, 25px);
  }

  @media screen and (min-width: 1300px) {
    font-size: clamp(20px, 4vw, 30px);
  }
`;

export default function Header() {
  const {
    GlobalFont,
    PrimaryColour,
  } = useGlobals();

  return (
    <Container>
      <BackgroundImage />
      <Overlay />
      <LeftContainer>
        <Row>
          <H1Wrapper>
            <H1 globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
              North East Fencing
            </H1>
          </H1Wrapper>
        </Row>
        <Row2Wrapper>
          <Row2>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>
                Quality workmanship and materials
              </StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>
                Over 20 years of experience
              </StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>
                12-month warranty on workmanship
              </StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>
                Qualified carpenter
              </StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>
                Free, no-obligation quotes
              </StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>
                4.8 rating on Google Reviews
              </StyledSpan>
            </CheckMarkGrid>
          </Row2>
        </Row2Wrapper>
      </LeftContainer>
      <RightContainer>
        <EmailForm />
      </RightContainer>
    </Container>
  );
}
