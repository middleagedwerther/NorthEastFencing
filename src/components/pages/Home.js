import React from 'react';
import '../../App.css';
import './BodyText.css';
import styled from 'styled-components';


import Zaun from "../../images/zaun.jpg"; // Corrected the import path


import FooterWithColumns from "./FooterWithColumns.js";
import QuoteCarousel from './QuoteCarousel.js';
import { useGlobals } from "../../Globals.js";
import Accordion from './SitePointAccordion.js';
import Header from './Header.js';
import ThreeServicesWithGrid from './ThreeServicesWithGrid.js';


const HeaderWrapper = styled.div`
`;


const OuterContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden; /* Ensure content stays within the viewport */
  background: #f7f7f7;
  display: flex;
  justify-content: center;
`;


const InnerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  background: white;
  margin: 0 20px; /* Adds some padding to avoid content touching the edges */
`;


const WhyChooseUsGrid = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  padding: 20px;
  gap: 20px;
  // background:red;


  @media screen and (max-width: 744px) {
    grid-template-columns: 1fr;
    grid-template-rows: 350px auto;
    grid-template-areas:
      "left"
      "right";
      padding:0;
      gap:0;
  }

      @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 350px auto;
    gap:0;
    padding:0;
}

  
`;


const AboutUsCell = styled.div`
  width: 100%;
  font-family: ${props => props.globalFont};
  border-radius: 10px; /* Add rounded corners */
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
  padding-left: 20px;
  padding-right: 10px;
  gap: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  // background:orange;

      @media screen and (max-width: 744px) {
      padding: 20px 10px 20px 10px;
}
`;


const AboutUsCellPic = styled.div`
  width: 100%;
  background:blue;
  font-family: ${props => props.globalFont};
  border-radius: 10px; /* Add rounded corners */
  text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
  padding-left: 20px;
  padding-right: 10px;
  gap: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

    @media screen and (max-width: 744px) {

  max-height:350px;}
`;


const TestimonialsContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.background || 'transparent'};
`;


const FAQsContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.background || 'transparent'};
`;


const OurServicesContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.background || 'transparent'};
`;


const WhyChooseUsContainer = styled.div`
  position: relative;
  background: ${props => props.background || '#eaf8f9'};
  margin-top: 0;
  padding: 20px;
`;


const Space = styled.div`
`;


const SectionHeading = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  text-align: center;
  color: ${props => props.primaryColour};
  margin-bottom: 0;
  font-family: ${props => props.globalFont};
  font-size: ${props => props.SubheadingSize}; // Use SubheadingSize here
  font-weight: 500;
  padding-left: 20px;
`;


const WhyChooseUs = ({ globalFont, primaryColour, background, SubheadingSize }) => (
  <WhyChooseUsContainer background={background}>
    <SectionHeading globalFont={globalFont} primaryColour={primaryColour} className="SubHeading">Who Are We?</SectionHeading>
    <WhyChooseUsGrid>
      <AboutUsCellPic style={{ backgroundImage: `url(${Zaun})`, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      </AboutUsCellPic>
      <AboutUsCell globalFont={globalFont} className="BodyText">
        Welcome to North East Fencing, your trusted partner in crafting durable and aesthetically pleasing fences for over 20 years. Founded on the principles of quality, craftsmanship, and customer satisfaction, North East Fencing has been a staple in the community, providing reliable fencing solutions that stand the test of time.
        <br/><br/>
        With two decades of hands-on experience in the fencing industry, our team has honed the skills necessary to deliver exceptional results on every project. Our founder and lead carpenter, a qualified professional with a deep passion for woodworking, brings unparalleled expertise and precision to every fence we build. This blend of experience and qualification ensures that each fence is not only functional but also a beautiful addition to your property.
      </AboutUsCell>
    </WhyChooseUsGrid>
  </WhyChooseUsContainer>
);


const Testimonials = ({ globalFont, background }) => (
  <TestimonialsContainer background={background}>
    <QuoteCarousel/>
  </TestimonialsContainer>
);


const FAQs = ({ globalFont, background }) => (
  <FAQsContainer background={background}>
    <Accordion/>
  </FAQsContainer>
);


const OurServices = ({ globalFont, background }) => (
  <OurServicesContainer background={background}>
    <ThreeServicesWithGrid/>
  </OurServicesContainer>
);


export default function Home() {
  const { GlobalFont, PrimaryColour, SubheadingSize } = useGlobals();


  const ColorA = "white";


  return (
    <>
      <HeaderWrapper style={{ marginTop: '60px' }}>
        <Header />
      </HeaderWrapper>
      <OuterContainer>
        <InnerContainer>
          <WhyChooseUs globalFont={GlobalFont} primaryColour={PrimaryColour} background={ColorA} SubheadingSize={SubheadingSize} />
          <OurServices background={ColorA} />
          <Space style={{ height: '1px' }}></Space>
          <Testimonials globalFont={GlobalFont} background={ColorA} />
          <FAQs background={ColorA} />
        </InnerContainer>
      </OuterContainer>
      <HeaderWrapper>
        <FooterWithColumns />
      </HeaderWrapper>
    </>
  );
}



