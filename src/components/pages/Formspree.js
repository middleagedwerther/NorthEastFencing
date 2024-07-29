import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import { useGlobals } from "../../Globals.js";

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.primaryColour};
  padding: 20px; /* Adjusted to match FormSubmit */
  padding-left:40px;
  padding-right:40px;
  border-radius: 10px; /* Adjusted to match FormSubmit */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Adjusted to match FormSubmit */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: ${(props) => props.fontFamily};
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.primaryColour};
  }
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: ${(props) => props.fontFamily};
  font-size: 16px;
  height: 150px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.primaryColour};
  }
`;

const StyledButton = styled.button`
  padding: 14px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: ${(props) => props.fontFamily};
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const FormHeading = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 25px;
  font-family: ${(props) => props.fontFamily};
  text-align: center;
`;

function ContactForm({ fontFamily, primaryColour }) {
  const [state, handleSubmit] = useForm("mzzpzvjo");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const resetForm = () => {
    setFormSubmitted(false);
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  if (state.succeeded && !formSubmitted) {
    setFormSubmitted(true);
    setTimeout(resetForm, 3000); // Reset form after 3 seconds
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormHeading fontFamily={fontFamily}>Get in Touch</FormHeading>

      <StyledInput
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        required
        fontFamily={fontFamily}
        primaryColour={primaryColour}
        ref={nameRef}
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <StyledInput
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        fontFamily={fontFamily}
        primaryColour={primaryColour}
        ref={emailRef}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <StyledInput
        id="phone"
        type="tel"
        name="phone"
        placeholder="Telephone Number"
        required
        fontFamily={fontFamily}
        primaryColour={primaryColour}
        ref={phoneRef}
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <StyledTextArea
        id="message"
        name="message"
        placeholder="Message"
        required
        fontFamily={fontFamily}
        primaryColour={primaryColour}
        ref={messageRef}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <StyledButton type="submit" disabled={state.submitting} fontFamily={fontFamily}>
        Submit
      </StyledButton>
    </StyledForm>
  );
}

export default function EmailForm() {
  const { GlobalFont, PrimaryColour } = useGlobals();
  return (
    <FormContainer primaryColour={PrimaryColour}>
      <ContactForm fontFamily={GlobalFont} primaryColour={PrimaryColour} />
    </FormContainer>
  );
}
