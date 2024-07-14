import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  font-size: 30px;
  color: ${(props) => props.PrimaryColour}; // Ensure the prop name matches
  font-family: ${(props) => props.globalFont}; // Ensure the prop name matches
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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

  const imageStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(23%, -15%)',
  };

  const textStyle = {
    fontSize: '15px',
    background: PrimaryColour,
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    fontFamily: GlobalFont,
    fontStyle: 'italic',
    fontWeight: 'normal',
    textAlign: 'left',
    paddingBottom: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    boxSizing: 'border-box',
    minHeight: `${maxHeight}px`,
    borderRadius: '15px 15px 0 0', // Rounded corners for the top of the text box
  };

  const H4style = {
    gridColumn: '2',
    width: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    height: '100%',
    fontSize: '13px',
    textAlign: 'center',
    fontFamily: GlobalFont,
    background: PrimaryColour,
    fontWeight: '100',
    color: 'orange',
    padding: '0',
    boxSizing: 'border-box',
  };

  const boxStyle = {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: PrimaryColour,
    // backgroundColor: "grey",

    textAlign: 'center',
    margin: '0 10px',
    fontFamily: GlobalFont,
    boxSizing: 'border-box',
    borderRadius: '15px', // Added border-radius to the entire box
  };

  const imageBox = {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    paddingBottom: '18px',
    gridTemplateColumns: '79px auto',
    gridTemplateRows: '1',
  };

  const containerStyle = {
    padding: '10px',
    fontFamily: GlobalFont,
  };

  const quoteStyle = {
    left: '0',
    top: '0',
    margin: '0',
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingBottom: '3px',
    textAlign: 'left',
    background: PrimaryColour,
    borderRadius: '15px 15px 0 0', // Added border-radius to the quote box
  };

  const clientName = {
    bottom: '0',
    margin: '0',
    fontSize: '18px',
    color: 'white',
    padding: '0',
    textAlign: 'left',
    alignSelf: 'flex-end',
    background: PrimaryColour,
  };

  const clientSuburb = {
    margin: '0',
    padding: '0',
    color: 'white',
    textAlign: 'left',
    background: PrimaryColour,
  };

  return (
    <div style={containerStyle}>
      <SectionHeading globalFont={GlobalFont} PrimaryColour={PrimaryColour}>
        Here's What People Are Saying About Us
      </SectionHeading>
      <Carousel responsive={responsive}>
        <div style={boxStyle}>
          <div style={quoteStyle}>
            <img src={quote} alt="quote" style={quoteStyle} />
          </div>
          <div style={{ ...textStyle }} ref={el => boxRefs.current[0] = el}>
            The fence looks great! The guys did a fantastic job, and you were far and away the most professional company we dealt with in seeking quotes. We’ll definitely be recommending Eastside to anyone who needs fence work done.
          </div>
          <div style={imageBox}>
            <img src={image1} alt="Image 1" style={imageStyle} />
            <div style={H4style}>
              <p style={clientName}>MARK F</p>
              <p style={clientSuburb}>Blackburn</p>
            </div>
          </div>
        </div>

        <div style={boxStyle}>
          <div style={quoteStyle}>
            <img src={quote} alt="quote" style={quoteStyle} />
          </div>
          <div style={{ ...textStyle }} ref={el => boxRefs.current[1] = el}>
            The fence looks great! The guys did a fantastic job, and you were far and away the most professional company we dealt with in seeking quotes. We’ll definitely be recommending Eastside to anyone who needs fence work done.  
            blah.  take up extra lines.  see if box gets bigger.
            quick brown fox.  yada yada yada.  more text here to make the box taller.  more crap to text 
 looks like it is working.  the whole thing is automated.  
          </div>
          <div style={imageBox}>
            <img src={image2} alt="Image 2" style={imageStyle} />
            <div style={H4style}>
              <p style={clientName}>JANE T</p>
              <p style={clientSuburb}>Mitcham</p>
            </div>
          </div>
        </div>

        <div style={boxStyle}>
          <div style={quoteStyle}>
            <img src={quote} alt="quote" style={quoteStyle} />
          </div>
          <div style={{ ...textStyle }} ref={el => boxRefs.current[2] = el}>
            The .
          </div>
          <div style={imageBox}>
            <img src={image1} alt="Image 1" style={imageStyle} />
            <div style={H4style}>
              <p style={clientName}>MARK F</p>
              <p style={clientSuburb}>Blackburn</p>
            </div>
          </div>
        </div> 

        <div style={boxStyle}>
          <div style={quoteStyle}>
            <img src={quote} alt="quote" style={quoteStyle} />
          </div>
          <div style={{ ...textStyle }} ref={el => boxRefs.current[3] = el}>
       f
                 </div>
          <div style={imageBox}>
            <img src={image1} alt="Image 1" style={imageStyle} />
            <div style={H4style}>
              <p style={clientName}>MARK F</p>
              <p style={clientSuburb}>Blackburn</p>
            </div>
          </div>
        </div> 
      </Carousel>
    </div>
  );
};

export default QuoteCarousel;
