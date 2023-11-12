import React, { useRef, useEffect } from 'react';
import PageNavLinks from './PageNavLinks';
import WorkoutGif from "../images/WorkoutGif.gif";
import PetSitGif2 from "../images/PetSitGif2.gif";
import PetSitGif3 from "../images/PetSitGif3.gif"

const welcomeMessageStyles = {
  fontFamily: 'Helvetica, sans-serif',
  maxWidth: '600px',
  margin: '0 auto',
  paddingBottom: '20px',
  paddingRight: '20px',
  paddingLeft: '20px',
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

// above is for intro, below starts for programming cards

const serviceCardStyles = {
  backgroundColor: '#ffe2d1',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const h2Styles = {
  color: '#333',
  fontSize: '24px',
  marginBottom: '10px',
  marginTop: '0px'
};

const h3Styles = {
  color: '#555',
  fontSize: '18px',
};

const pStyles = {
  color: '#777',
  fontSize: '16px',
  textAlign: 'left'
};

const gifContainerStyle = {
  width: '80%', /* Adjust this value to control the size of the GIF */
  maxWidth: '456px', /* The original width of the GIF */
  margin: '0 auto', /* Center the container horizontally */
  overflow: 'hidden', /* Hide any overflowing parts of the GIF */
  borderRadius: '8px', /* Add a slight border radius for a modern look */
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', /* Add a subtle shadow for depth */
};

const gifImageStyle = {
  width: '100%', /* Ensure the image fills the container */
  height: 'auto', /* Maintain the original aspect ratio */
  display: 'block', /* Remove any extra space below the image */
  borderRadius: '8px', /* Add the same border radius as the container */
};

const modernButtonStyle = {
  display: 'inline-block',
  padding: '12px 20px',
  margin: '10px',
  border: 'none',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  backgroundColor: '#3498db', /* Use your preferred color or any other modern color */
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s',
};

const Programming = () => {

  const topElement = useRef(null);

  function scrollToTop() {
    topElement?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div style={welcomeMessageStyles} ref={topElement}>
      <PageNavLinks />
      <h2 style={headingStyles}>Computer Programming</h2>
      <p style={paragraphStyles}>Welcome to my programming portfolio! I'm a web developer proficient with JavaScript, Ruby on Rails, React, HTML, and CSS. With a background in the animal care industry, I've been combining my love for animals with my coding skills to create projects for my dog walking business.
        <br></br><br></br>
        I'm still exploring the world of web development, and my portfolio showcases my journey as I learn and grow. From front-end to back-end, I enjoy building websites that are functional and visually appealing. Take a look at my projects to visualize my progress.</p>
      <h2 style={headingStyles}>Projects</h2>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Aria Design Consultants</h2>
        <h3 style={h3Styles}>React, HTML, CSS, Bootstrap</h3>
        <p style={pStyles}>Single page application built for a client for marketing purposes using primarily React. Displays recent projects and some other company content. I use a few design libraries, Bootstrap, Ant, and Styled Components.</p>
        <a style={modernButtonStyle} target="_blank" href="https://beaulazear.github.io/michael-personal-site/">Deployed Website Link</a>
        <br />
        <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/michael-personal-site.git">Github Repository Link</a>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Pet Sitting Application</h2>
        <h3 style={h3Styles}>React, Ruby on Rails, HTML, CSS</h3>
        <p style={pStyles}>Full stack application built with Ruby on Rails, and React. Users can create both a petsitter and client account. Clients can contact pet sitters and book pet sit requests. Application is not yet deployed.</p>
        <div style={gifContainerStyle}>
          <img src={PetSitGif2} alt="gif of this project" style={gifImageStyle} />
        </div>
        <br />
        <div style={gifContainerStyle}>
          <img src={PetSitGif3} alt="gif of this project" style={gifImageStyle} />
        </div>
        <br />
        <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/pet-sitting-app.git">Github Repository Link</a>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Exercise/Workout Log</h2>
        <h3 style={h3Styles}>React, Ruby (ActiveRecord & Sinatra), HTML, CSS</h3>
        <p style={pStyles}>Single page application made with Ruby, React, Active Record, and Sinatra. Front end and database are in seperate repositories - clone both and run locally. Users can create their own exercises and add workout data to view trends over time.</p>
        <div style={gifContainerStyle}>
          <img src={WorkoutGif} alt="gif of this project" style={gifImageStyle} />
        </div>
        <br />
        <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/react-sinatra-project">Front End Repository Link</a>
        <br />
        <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/phase-3-sinatra-react-project">Database Repository Link</a>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>www.beaulazear.com</h2>
        <h3 style={h3Styles}>React, Javascript, HTML, CSS</h3>
        <p style={pStyles}>The website you are curerntly on! Single page application made with React for marketing my business / providing information to new clients.</p>
        <a style={modernButtonStyle} target="_blank" href="https://beaulazear.com/">Deployed Website Link</a>
        <br />
        <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/beaus-website">Github Repository Link</a>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Personal Marketing Website</h2>
        <h3 style={h3Styles}>React, Javascript, HTML, CSS</h3>
        <p style={pStyles}>Single page application made with React for information/resume sharing & personal marketing.</p>
        <a style={modernButtonStyle} target="_blank" href="https://beaulazear.github.io/nadine/#/">Deployed Website Link</a>
        <br />
        <a style={modernButtonStyle} target="_blank" href="https://github.com/beaulazear/nadine">Github Repository Link</a>
      </div>
    </div>
  );
};

export default Programming;
