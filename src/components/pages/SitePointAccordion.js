import React, { useRef, useState } from "react";
import data from "./SitePointAccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";
import { useGlobals } from "../../Globals.js";

const SectionHeading = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;
  text-align: center;
  font-size: ${(props) => props.globalFontSize};  // Use globalFontSize prop for font-size
  color: ${(props) => props.primaryColour};
  margin-bottom: 0;
  font-family: ${(props) => props.globalFont};
`;

// Styled components
const Container = styled.div`
  max-width: 850px;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  overflow: hidden;
`;

const Parent = styled.div`
  padding: 20px;
`;

const QuestionContainer = styled.button`
  width: 100%;
  text-align: left;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: auto 32px;
  font-weight: 500;
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${(props) => props.fontFamily};

  &.active {
    color: black;
    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
  }

  &:hover {
    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
  }
`;

const QuestionContent = styled.p`
  font-family: ${(props) => props.fontFamily};
  //   text-align: left;
  // font-size: 16px;
  // letter-spacing: 1px;
  // line-height: 1.5;
`;

const Arrow = styled(RiArrowDropDownLine)`
  font-size: 32px;
  width: 32px; // Ensure the arrow has a fixed width
  height: 32px; // Ensure the arrow has a fixed height
  transition: 0.3s ease-in-out;
  &.active {
    transform: rotate(180deg);
    color: black;
  }
`;

const AnswerContainer = styled.div`
  padding: 0 1rem;
  transition: height 0.3s ease-in-out;
`;

const AnswerContent = styled.p`
  padding: 1rem 0;
  font-size: 20px;
  // font-style: italic;s
   letter-spacing: 1px;
  // line-height: 1.5;
 
  font-family: ${(props) => props.fontFamily};
`;

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  const { GlobalFont } = useGlobals();

  return (
    <Wrapper>
      <QuestionContainer className={isOpen ? "active" : ""} onClick={onClick} fontFamily={GlobalFont}>
        <QuestionContent fontFamily={GlobalFont}>{question}</QuestionContent>
        <Arrow className={isOpen ? "active" : ""} />
      </QuestionContainer>

      <AnswerContainer
        ref={contentHeight}
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <AnswerContent fontFamily={GlobalFont}>{answer}</AnswerContent>
      </AnswerContainer>
    </Wrapper>
  );
};

// Accordion component
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { GlobalFont, PrimaryColour } = useGlobals();

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Parent>
      <SectionHeading globalFont={GlobalFont} className="SubHeading" primaryColour={PrimaryColour}>FAQs</SectionHeading>

      <Container>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </Container>
    </Parent>
  );
};

export default Accordion;
