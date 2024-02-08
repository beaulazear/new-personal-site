import React, { useRef } from 'react';
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

  @media (max-width: 800px) {
    max-width: 600px;
  }
`;

const StyledFormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #fff2eb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
  color: #333;
  text-align: left;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledSubmitButton = styled.input`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SubHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: 800px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1em;
    color: #777;
    line-height: 1.6;
  }
`;

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kqz5x4o', 'template_3ba6d27', form.current, '11CxjbisIoTlyftVb')
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Form submitted successfully!');
                    form.current.reset(); // Reset the form
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
                <StyledInput placeholder='Your email address I should respond too' type="email" name="from_email" />

                <StyledLabel>How can I help you?</StyledLabel>
                <StyledTextarea placeholder='Brief description of your inquiry' name="message" />

                <StyledSubmitButton type="submit" value="Send" />
            </StyledFormContainer>
        </StyledContactContainer>
    );
}
