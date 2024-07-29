import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";


const Parent = styled.div`
display:grid;
grid-template-rows:2;
background: #E6E6FA;

`;


const BottomContainer = styled.div`
display:grid;
grid-template-columns:2;
`

const LeftContainer = styled.div`

`;

const RightContainer = styled.div`

`;


const H2 = styled.h2`
  font-family: ${props => props.globalFont};
  position: absolute;
  top: 30%;
  left: 0;
  color: white;
  width: 65%;
  text-align: left;
  padding: 20px;
  font-size: 30px;
  font-weight: 50;
  letter-spacing: 2px;

  @media screen and (max-width: 626px) {
    font-size: 20px;
    width: 100%;
    padding: 10px;
  }
`;

const H2Wrapper = styled.span`

`

const H3 = styled.h3`
  font-family: ${props => props.globalFont};
  position: absolute;
  top: 30%;
  left: 0;
  color: white;
  width: 65%;
  text-align: left;
  padding: 20px;
  font-size: 30px;
  font-weight: 50;
  letter-spacing: 2px;

  @media screen and (max-width: 626px) {
    font-size: 20px;
    width: 100%;
    padding: 10px;
  }
`;


export default function WhoAreWe() {
  // const { GlobalFont } = useGlobals();

  return (
    <Parent>

        <H2Wrapper>
            <H2>
                Who Are We?
            </H2>
        </H2Wrapper>

        <BottomContainer>
        <LeftContainer>

        </LeftContainer>
        <RightContainer>
            <H3>
            With more than 20 years of experience, we offer exceptional craftsmanship for both residential and commercial clients. Whether it's new constructions or renovations, we are here to help.

Our goal is to achieve exceptional results for our clients by exceeding expectations and ensuring complete satisfaction with every project. We provide free measurements and quotes, and our highly skilled tradesmen ensure unbeatable prices and quality.
            </H3>
        </RightContainer>
        </BottomContainer>
    </Parent>  
  );
}

