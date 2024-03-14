import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const StyledContactContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledFormContainer = styled.form`
  width: 100%;
  max-width: 750px;
  padding: 20px;
  background-color: #ffc09f;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
  text-align: left;
  display: block;
`;

const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledSubmitButton = styled.input`
  background-color: #007bff;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SubHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.6;
`;

export default function Contact() {
  const form = useRef();
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, from_email, message } = form.current;

    if (!from_name.value || !from_email.value || !message.value) {
      setError('Please fill out all fields.');
      return;
    }

    emailjs
      .sendForm('service_kqz5x4o', 'template_3ba6d27', form.current, '11CxjbisIoTlyftVb')
      .then(
        (result) => {
          console.log(result.text);
          alert('Form submitted successfully!');
          form.current.reset(); // Reset the form
          setError('');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to submit the form. Please try again.');
        }
      );
  };

  return (
    <StyledContactContainer>
      <StyledFormContainer ref={form} onSubmit={sendEmail}>
        <SubHeading>Contact Form</SubHeading>
        <Paragraph>Fill out the form below and I will be in touch shortly!</Paragraph>
        <StyledLabel>Name</StyledLabel>
        <StyledInput placeholder='Your name' type="text" name="from_name" />

        <StyledLabel>Email</StyledLabel>
        <StyledInput placeholder='Your email address' type="email" name="from_email" />

        <StyledLabel>How can I help you?</StyledLabel>
        <StyledTextarea placeholder='Brief description of your inquiry' name="message" />

        <StyledSubmitButton type="submit" value="Send" />
        {error && <Paragraph style={{ color: 'red' }}>{error}</Paragraph>}
      </StyledFormContainer>
    </StyledContactContainer>
  );
}
