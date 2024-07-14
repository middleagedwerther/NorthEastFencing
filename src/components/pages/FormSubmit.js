import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.primaryColour};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* Limiting form width */
`;

const StyledInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: ${(props) => props.fontFamily};
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.primaryColour};
  }
`;

const StyledButton = styled.button`
  padding: 12px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${(props) => props.fontFamily};
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue; /* Darker shade on hover */
  }
`;

const StyledMessage = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: ${(props) => props.fontFamily};
  font-size: 16px;
  height: 150px;
  resize: none; /* Prevent resizing */
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.primaryColour};
  }
`;

const FormHeading = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: ${(props) => props.fontFamily};
  text-align: center;
`;

export default function FormSubmit() {
  const { GlobalFont, PrimaryColour } = useGlobals();

  return (
    <FormContainer primaryColour={PrimaryColour}>
      <StyledForm action="https://formsubmit.co/greyhoundcoding@gmail.com" method="POST">
        <FormHeading fontFamily={GlobalFont}>Get a FREE quote</FormHeading>

        <StyledInput type="text" name="name" placeholder="Name" required fontFamily={GlobalFont} primaryColour={PrimaryColour} />

        <StyledInput type="email" name="email" placeholder="Email" required fontFamily={GlobalFont} primaryColour={PrimaryColour} />

        <StyledInput type="tel" name="phone" placeholder="Telephone Number" required fontFamily={GlobalFont} primaryColour={PrimaryColour} />

        <StyledMessage name="message" placeholder="Message" required fontFamily={GlobalFont} primaryColour={PrimaryColour} />

        <StyledButton type="submit" primaryColour={PrimaryColour} fontFamily={GlobalFont}>Submit</StyledButton>
        <StyledInput type="hidden" name="_next" value="http://localhost:3000/" fontFamily={GlobalFont} />
      </StyledForm>
    </FormContainer>
  );
}
