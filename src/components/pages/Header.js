import bkgrnd from "../../images/amerifence.png";
import React from 'react';
import FormSubmit from './FormSubmit';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

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
`;

const H1Wrapper = styled.span`
  display: inline-block;
  width: 80%;
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
  align-items: center;
  gap: 10px;
  color: ${(props) => props.color};
`;

const StyledIcon = styled(IoIosCheckmarkCircleOutline)`
  font-size: 40px;

  @media screen and (max-width: 667px) {
    font-size: 30px;
  }
`;

const StyledSpan = styled.span`
  font-family: ${(props) => props.globalFont};
  font-size: 20px;
  color: white;
`;

export default function Header() {
  const {
    GlobalFont,
    PrimaryColour,
  } = useGlobals();

  return (
    <Container>
      <BackgroundImage />
      <LeftContainer>
        <Row>
          <H1Wrapper>
            <H1 globalFont={GlobalFont} PrimaryColour={PrimaryColour}>North East Fencing</H1>
          </H1Wrapper>
        </Row>

        <Row2Wrapper>
          <Row2>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>Quality workmanship and materials</StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>20 years of experience</StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>12-month warranty on workmanship</StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>Qualified carpenter</StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>Free, no-obligation quotes</StyledSpan>
            </CheckMarkGrid>
            <CheckMarkGrid color={PrimaryColour}>
              <StyledIcon color={PrimaryColour} />
              <StyledSpan globalFont={GlobalFont}>4.8 rating on Google Reviews</StyledSpan>
            </CheckMarkGrid>
          </Row2>
        </Row2Wrapper>
      </LeftContainer>
      <RightContainer>
        <FormSubmit />
      </RightContainer>
    </Container>
  );
}
