import React from 'react';
import { NavLink } from "react-router-dom";
import PageNavLinks from './PageNavLinks';
import BeauAndHornbill from "../images/BeauAndHornbill.jpeg"

const welcomeMessageStyles = {
  fontFamily: 'Helvetica, sans-serif',
  maxWidth: '600px',
  margin: '0 auto',
  paddingBottom: '40px',
  paddingRight: '40px',
  paddingLeft: '40px',
  // backgroundColor: '#f2f2f2',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const headingStyles = {
  fontSize: '30px',
  marginBottom: '20px',
  color: '#333',
};

const paragraphStyles = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#666',
  marginBottom: '16px',
  textAlign: 'left'
};

const imageWrapper = {
  width: '200px',
  height: '200px',
  margin: '0 auto 20px',
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
      <h2 style={headingStyles}>Christian Beau Lazear</h2>
      <div style={imageWrapper}>
        <img src={BeauAndHornbill} alt="Beau with a dog named Ru" style={image} />
      </div>
      <h2>About Me</h2>
      <p style={paragraphStyles}> Hi, I'm Beau! I am based in Brooklyn NYC. I've had an eventful professional life involving multiple direct animal care positions, administrative & hospitality roles (within plant-based / cruelty-free establishments), and more. I've grown within these roles, and completed several educational programs / projects throughout myexperience. I am currently maintaining my own business - providing exceptional animal care to clients across Brooklyn NYC. I am self-taught in basic computer programming, and I am currently in an educational program to expand my understanding even further. Proficiency in HTML, Javascript, React, CSS, Ruby & Rails, and more as I continue to learn.
      </p>
      <h2>What can I do for you?</h2>
      <p style={paragraphStyles}> I am available Monday-Friday, between 10 am and 5 pm, for animal care appointments. My service area is Carroll Gardens, Cobble Hill, Gowanus, and Brooklyn Heights. Weekend dog walks, evening/early morning walks, overnight pet sitting, and more available upon special request! I help connect clients with other independent contractors for services I cannot complete (due to location, schedule, pet's needs, etc...). Visit the <NavLink to="/animal_care">Animal Care</NavLink> page for more information.
        <br />
        <br />
        I am available for freelance computer programming work. I can help with your personal websites, application ideas, etc... Competent with Javascript, HTML, CSS, Ruby, and more. Visit the <NavLink to="/programming">Programming</NavLink> page to see previous projects.
        <br />
        <br />
        Visit <NavLink to="/resume">Resume</NavLink> page for contact info.
      </p>
    </div>
  );
};

export default Home;
