import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './BodyText.css';
















import image1 from '../../images/image-daniel.jpg';
import image2 from '../../images/image-jeanette.jpg';
import image3 from '../../images/image-jonathan.jpg';
import image4 from '../../images/image-kira.jpg';
import quote from "../../images/quotemark.png";
import { useGlobals } from "../../Globals.js";








import styled from 'styled-components';








const SectionHeading = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: ${(props) => props.subheadingSize}; // Use SubheadingSize here
  color: ${(props) => props.PrimaryColour};
  font-family: ${(props) => props.globalFont};
`;








const Container = styled.div`
  padding: 10px;
  font-family: ${(props) => props.globalFont};
`;








const Box = styled.div`
  color: white;
  display: flex;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adjust values as needed */

  flex-direction: column;
  background-color: ${(props) => props.PrimaryColour};
  text-align: center;
  margin: 0 10px;
  margin-bottom: 8px;
  font-family: ${(props) => props.globalFont};
  box-sizing: border-box;
  border-radius: 15px;
`;








const QuoteBox = styled.div`
  left: 0;
  top: 0;
  margin: 0;
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 3px;
  text-align: left;
  background: ${(props) => props.PrimaryColour};
  border-radius: 15px 15px 0 0;
`;








const TextBox = styled.div`
  font-size: 15px;
  background: ${(props) => props.PrimaryColour};
  width: 100%;
  height: auto;
  object-fit: cover;
  font-family: ${(props) => props.GlobalFont};
  // font-style: italic;
  font-weight: normal;
  text-align: left;




    text-align: left;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  min-height: ${(props) => props.maxHeight}px;
  border-radius: 15px 15px 0 0;
`;








const ImageStyle = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
  position: absolute;
  transform: translate(23%, -15%);
`;








const H4Style = styled.div`
  grid-column: 2;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  font-size: 13px;
  text-align: center;
  font-family: ${(props) => props.GlobalFont};
  background: ${(props) => props.PrimaryColour};
  font-weight: 100;
  color: orange;
  padding: 0;
  box-sizing: border-box;
`;








const ImageBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  padding-bottom: 18px;
  grid-template-columns: 79px auto;
  grid-template-rows: 1;
`;








const ClientName = styled.p`
  bottom: 0;
  margin: 0;
  font-size: 18px;
  color: white;
  padding: 0;
  text-align: left;
  align-self: flex-end;
  background: ${(props) => props.PrimaryColour};
`;








const ClientSuburb = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  text-align: left;
  background: ${(props) => props.PrimaryColour};
`;








const QuoteCarousel = () => {
  const { GlobalFont, PrimaryColour } = useGlobals();
  const [maxHeight, setMaxHeight] = useState(0);
  const boxRefs = useRef([]);








  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };








  const calculateMaxHeight = () => {
    if (boxRefs.current.length > 0) {
      const heights = boxRefs.current.map(ref => ref ? ref.offsetHeight : 0);
      const maxHeight = Math.max(...heights);
      setMaxHeight(maxHeight);
    }
  };








  useEffect(() => {
    // Run initial height calculation
    calculateMaxHeight();
   
    // Recalculate heights on window resize
    const handleResize = () => calculateMaxHeight();
    window.addEventListener('resize', handleResize);
   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);








  useEffect(() => {
    // Run after every render to ensure heights are correct
    setTimeout(() => {
      calculateMaxHeight();
    }, 100);
  });








  const myColor ="#94BBC0";








  return (
    <Container globalFont={GlobalFont}>
      <SectionHeading globalFont={GlobalFont} PrimaryColour={PrimaryColour} className="SubHeading">
        Here's What People Are Saying About Us
      </SectionHeading>
      <Carousel responsive={responsive}>
        <Box PrimaryColour={myColor} globalFont={GlobalFont}>
          <QuoteBox PrimaryColour={myColor}>
            <img src={quote} alt="quote" />
          </QuoteBox>
          <TextBox PrimaryColour={myColor} GlobalFont={GlobalFont} maxHeight={maxHeight} ref={el => boxRefs.current[0] = el}>
          North East Fencing transformed our yard with their exceptional fencing work. Their team was professional, punctual, and meticulous, ensuring every detail was perfect. The quality of the materials and craftsmanship exceeded our expectations, creating a beautiful and durable fence. We couldn't be happier with the results and highly recommend North East Fencing for any fencing needs.          </TextBox>
          <ImageBox>
            <ImageStyle src={image1} alt="Image 1" />
            <H4Style GlobalFont={GlobalFont} PrimaryColour={myColor}>
              <ClientName PrimaryColour={myColor}>MARK F</ClientName>
              <ClientSuburb PrimaryColour={myColor}>Blackburn</ClientSuburb>
            </H4Style>
          </ImageBox>
        </Box>








        <Box PrimaryColour={myColor} globalFont={GlobalFont}>
          <QuoteBox PrimaryColour={myColor}>
            <img src={quote} alt="quote" />
          </QuoteBox>
          <TextBox PrimaryColour={myColor} GlobalFont={GlobalFont} maxHeight={maxHeight} ref={el => boxRefs.current[1] = el}>
          Robert and his team did an outstanding job on our new fence. Their professionalism, attention to detail, and quality craftsmanship were evident in every step of the process. The fence is not only sturdy and durable but also enhances the look of our yard. Highly recommend Robert for any fencing needs!          </TextBox>
          <ImageBox>
            <ImageStyle src={image2} alt="Image 2" />
            <H4Style GlobalFont={GlobalFont} PrimaryColour={myColor}>
              <ClientName PrimaryColour={myColor}>JANE T</ClientName>
              <ClientSuburb PrimaryColour={myColor}>Mitcham</ClientSuburb>
            </H4Style>
          </ImageBox>
        </Box>








        <Box PrimaryColour={myColor} globalFont={GlobalFont}>
          <QuoteBox PrimaryColour={myColor}>
            <img src={quote} alt="quote" />
          </QuoteBox>
          <TextBox PrimaryColour={myColor} GlobalFont={GlobalFont} maxHeight={maxHeight} ref={el => boxRefs.current[2] = el}>
          North East Fencing exceeded our expectations with their exceptional service and quality craftsmanship. From the initial consultation to the final installation, their team was professional, efficient, and attentive to every detail. Our new fence looks fantastic and adds significant value to our property. We highly recommend North East Fencing for any fencing needs!          </TextBox>
          <ImageBox>
            <ImageStyle src={image3} alt="Image 3" />
            <H4Style GlobalFont={GlobalFont} PrimaryColour={myColor}>
              <ClientName PrimaryColour={myColor}>MARK F</ClientName>
              <ClientSuburb PrimaryColour={myColor}>Mitcham</ClientSuburb>
            </H4Style>
          </ImageBox>
        </Box>








        <Box PrimaryColour={myColor} globalFont={GlobalFont}>
          <QuoteBox PrimaryColour={myColor}>
            <img src={quote} alt="quote" />
          </QuoteBox>
          <TextBox PrimaryColour={myColor} GlobalFont={GlobalFont} maxHeight={maxHeight} ref={el => boxRefs.current[3] = el}>
          North East Fencing did an outstanding job on our new fence. Their team was professional, prompt, and meticulous from start to finish. The quality of their workmanship is impressive, and the fence has added both beauty and value to our home. We highly recommend North East Fencing for top-notch fencing services          </TextBox>
          <ImageBox>
            <ImageStyle src={image4} alt="Image 4" />
            <H4Style GlobalFont={GlobalFont} PrimaryColour={myColor}>
              <ClientName PrimaryColour={myColor}>Francine W</ClientName>
              <ClientSuburb PrimaryColour={myColor}>Box Hill</ClientSuburb>
            </H4Style>
          </ImageBox>
        </Box>








      </Carousel>
    </Container>
  );
};








export default QuoteCarousel;





















