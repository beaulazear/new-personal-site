import React, { useEffect, useRef } from 'react';
import PageNavLinks from './PageNavLinks';
import Resume2023Dec from "../images/Resume2023Dec.pdf"

const headingStyles = {
    fontSize: '30px',
    marginBottom: '20px',
    color: '#333',
};

const welcomeMessageStyles = {
    fontFamily: 'Helvetica, sans-serif',
    margin: '0 auto',
    paddingBottom: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

const sectionTitleStyles = {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#333',
};

const jobTitleStyles = {
    fontSize: '18px',
    marginTop: '10px',
    marginBottom: '5px',
    color: '#444',
};

const jobDescriptionStyles = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
};

const Resume = () => {

    const topElement = useRef(null);

    function scrollToTop() {
        topElement?.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      scrollToTop()
    },[])

    return (
        <div style={welcomeMessageStyles} ref={topElement}>
            <PageNavLinks />
            <h2 style={headingStyles}>Resume</h2>
            <a target="blank" href={Resume2023Dec}><button class="button2">PDF Version</button></a>
            <br /><br />
            <h3 style={jobTitleStyles}>Beau Lazear<br />
                beaulazear@gmail.com<br />
                Instagram - <a href="https://www.instagram.com/beau.lazear/?hl=en" target="_blank">beau.lazear</a><br />
                Based in Brooklyn, NY
            </h3>
            <br />
            <h1 style={sectionTitleStyles}>Animal Care Experience</h1>
            <h2 style={jobTitleStyles}>Freelance Animal Care, self-employed (2019-Present)</h2>
            <p style={jobDescriptionStyles}>
                - Built and maintained an informational website for incoming clients<br />
                - Built a network of animal care clients and subcontracted additional staff<br />
                - Continually expanded client base via personal networking, customer referral, and social media marketing<br />
                - Maintained & fulfilled a schedule for services to be provided<br />
                - Provided updates and invoiced clients following service completion<br />
                - General bookkeeping, accounting.. etc.<br />
            </p>
            <h2 style={jobTitleStyles}>Veterinary Assistant, ASPCA-ARC (Apr.2019-Nov.2019)</h2>
            <p style={jobDescriptionStyles}>
                - Daily husbandry, medical attention, enrichment, and cleaning/maintenance for all dogs & cats located
                in my section<br />
                - Properly filled out medical paperwork to keep the veterinary team on the same page<br />
                - Assisted veterinarians during medical procedures, and completed more basic medical procedures myself<br />
                - Employed during a period of high employee turnover, took initiative & quickly became a lead vet assistant<br />
                - Worked with the communications team for events based on donor outreach<br />
                - Handled dog alongside CEO for a communications event on Good Morning America,{' '}
                <a href="https://twitter.com/gma/status/1186651005129150464?s=27&t=ghSiPaRjXnr4PxD451NsoA" target="_blank">
                    click here for video
                </a>
                <br />
            </p>
            <h2 style={jobTitleStyles}>Zookeeping, Wildlife Conservation Society - Prospect Park Zoo (Sept.2017-Feb.2019)</h2>
            <p style={jobDescriptionStyles}>
                - Completed one full-time internship, one part-time internship, and one enrichment-based "final project"<br />
                - Obtained part-time position as barn associate and worked alongside zookeepers<br />
                - Promoted to full-time zookeeper after years of proven competence<br />
                - Completed required animal husbandry, daily enrichment, cleaning/maintenance procedures, & nutrition
                preparation<br />
                - Created new systems and communicated with other zookeepers to complete jobs as efficiently as possible<br />
                - Recorded daily data for proper communication<br />
            </p>
            <br />
            <h1 style={sectionTitleStyles}>Additional Experience, 2014-2022</h1>
            <h2 style={jobTitleStyles}>Hospitality</h2>
            <p style={jobDescriptionStyles}>
                - Worked in a variety of plant-based restaurants, ranging from local cafes to more upscale dining<br />
                - Held positions including shift supervisor, lead server, and bartender<br />
            </p>
            <h2 style={jobTitleStyles}>Administrative</h2>
            <p style={jobDescriptionStyles}>
                - Worked as an office administrator for a local Brooklyn dog day care/dog walking company called{' '}
                <em>The Peaceful Pack</em>
                <br />
                - Worked as the event coordinator at <em>Chocolate Works</em> in Brooklyn NY<br />
            </p>
            <br />
            <h2 style={jobTitleStyles}>Skills</h2>
            <p style={jobDescriptionStyles}>
                - Empathic: both with humans and animals<br />
                - Quick learner: I easily adapt to new systems/procedures<br />
                - Self-starter: I take initiative with enthusiasm<br />
                - Environmentally & socially conscious: Always striving to do my part to make the world a better place<br />
                - Foundational computer programming: HTML, CSS, JavaScript, React, & Ruby on Rails - currently taking courses to
                expand this knowledge
            </p>
            <br />
            <h2 style={jobTitleStyles}>Education</h2>
            <p style={jobDescriptionStyles}>
                - High school diploma from East Knox High School<br />
                - Flatiron School Software Development Program 2023 Graduate<br />
                - Real estate license from the New York Real Estate Institute<br />
                - Continuing education credits from Prospect Park Zoo (Wildlife Conservation Society)<br />
            </p>
        </div>

    );
};

export default Resume;
