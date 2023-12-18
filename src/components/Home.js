import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import PageNavLinks from './PageNavLinks';
import BeauAndHornbill from "../images/BeauAndHornbill.jpeg"

const welcomeMessageStyles = {
  fontFamily: 'Helvetica, sans-serif',
  // maxWidth: '1300px',
  margin: '0 auto',
  paddingBottom: '20px',
  paddingRight: '20px',
  paddingLeft: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const StyledIntroduction = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 800px) {
    max-width: 600px;
  }
`;

const StyledLink = styled(NavLink)`
  color: #3498db;
  text-decoration: underline;

  @media (max-width: 800px) {
    color: #3498db;
    text-decoration: underline;
  }
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #333;
`;

const SubHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: 800px) {
    text-align: left;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 16px;
  text-align: left;
`;

const imageWrapper = {
  width: '220px',
  height: '220px',
  margin: '0 auto',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
};

const image = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%'
};

const Home = () => {
  return (
    <div style={welcomeMessageStyles}>
      <PageNavLinks />
      <Heading>Christian Beau Lazear</Heading>
      <div style={imageWrapper}>
        <img src={BeauAndHornbill} alt="Beau with a dog named Ru" style={image} />
      </div>
      <StyledIntroduction>
        <Heading>About Me</Heading>
        <Paragraph>
        Hi, I'm Beau! I am based in Brooklyn NYC. I've had an eventful professional life involving multiple direct animal care positions, administrative & hospitality roles (within plant-based / cruelty-free establishments), and more. I've grown within these roles, and completed several educational programs / projects throughout my experience. I am currently maintaining my own business - providing exceptional animal care to clients across Brooklyn NYC. I am self-taught in basic computer programming, and I am a graduate from the Flatiron School's software development program. Proficiency in HTML, Javascript, React, CSS, Ruby & Rails, and more as I continue to learn.
        </Paragraph>
      </StyledIntroduction>
      <StyledIntroduction>
        <Heading>What can I do for you?</Heading>
        <Paragraph>
        I am available Monday-Friday, between 10 am and 5 pm, for animal care appointments. My service area is Carroll Gardens, Cobble Hill, Gowanus, and Brooklyn Heights. Weekend dog walks, evening/early morning walks, overnight pet sitting, and more available upon special request! I help connect clients with other independent contractors for services I cannot complete (due to location, schedule, pet's needs, etc...). Visit the <StyledLink to="/animal_care">Animal Care</StyledLink> page for more information.
          <br /><br />
          I am available for freelance computer programming work. I can help with your personal websites, application ideas, etc... Competent with Javascript, HTML, CSS, Ruby, and more. Visit the <StyledLink to="/programming">Programming</StyledLink> page to see previous projects.
          <br /><br />
          Visit the <StyledLink to="/resume">Resume Page</StyledLink> for contact info.
        </Paragraph>
      </StyledIntroduction>
    </div>
  );
};

export default Home;
