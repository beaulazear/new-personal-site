import React from 'react';
import BeauAndRu from '../images/BeauAndRu.JPG'
import Ruth from "../images/Ruth.jpeg"
import BeauAndRalph from "../images/BeauAndRalph.JPG"
import JavaLookinCute from "../images/JavaLookinCute.jpeg"
import RiverWithBrick from "../images/RiverWithBrick.jpeg"
import MooseOnVerandah from "../images/MooseOnVerandah.jpeg"

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
  width: '200px', // Increased width to 200px
  height: '200px', // Increased height to 200px
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

// service card style below, used above style for intro to animal care page

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
  textAlign: 'left'
};

const pStyles = {
  color: '#777',
  fontSize: '16px',
  textAlign: 'left'
};

const AnimalCareInfo = () => {
  return (
    <div style={welcomeMessageStyles}>
      <h2 style={headingStyles}>Animal Care Information</h2>
      <div style={imageWrapper}>
        <img style={image} src={BeauAndRu} alt="Beau with two dogs" />
      </div>
      <h2>Your pets best friend!</h2>
      <p style={paragraphStyles}> Animal caretaker with over eight years of professional caretaking experience. Experience including zookeeping (Prospect Park Zoo, Wildlife Conservation Society), veterinary assisting, rescue rehabilitation (ASPCA), general pet care & enrichment. Empathic, patient, and if it doesn't go without saying, an animal lover at heart.
        <br /><br />
        Let's get your pet in on the fun! Contact me with any pet service inquiries, and we can get started with a free introduction walk. Visit <a href="/resume">resume page</a> for contact info.
      </p>
      <h2 style={headingStyles}>Services and Pricing</h2>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Dog walks</h2>
        <h3 style={h3Styles}>
          $22 - 30 minute walk<br />
          $27 - 45 minute walk<br />
          $33 - 60 minute walk<br />
          $42 - 90 minute walk<br />
          $50 - 120 minute walk<br />
        </h3>
        <p style={pStyles}>
          - Add $5 if additional Dog (same household)<br />
          - Add $5 for solo walk (behavioral, senior citizen)<br />
          - Add $5 if earlier than 10am / later than 5pm<br />
          <br />
          * Walk may be shortened if weather is hazardous<br />
          <br />
          Photo updates and description of service provided sent via text or email.
        </p>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Pet sitting</h2>
        <h3 style={h3Styles}>$85 - Overnight pet sitting, includes:</h3>
        <p style={pStyles}>
          - Morning walk + breakfast (7-10am)<br />
          - Evening walk + dinner (4-6pm)<br />
          - Bedtime walk (8-11pm)<br />
          <br />
          - Extra $10 if 4th mid day walk is required<br />
          - Add $10 if additional dog in household<br />
          - Add $10 if cat care is required (litter, feeding, water, etc)<br />
          - Add $10 to make every walk 45 minutes
          <br />
          <br />
          Photo updates and description of service provided sent via text or email.
        </p>
      </div>
      <div style={serviceCardStyles} className="serviceCard">
        <h2 style={h2Styles}>Cat visits</h2>
        <h3 style={h3Styles}>
          $25 - one visit (approximately 30 minutes)<br />
          $40 - two visits in one day (AM + PM)
        </h3>
        <p style={pStyles}>
          I will clean the litterboxes, sweep the surrounding area, feed and refill water bowls, clean old food
          dishes, and bring in any mail. (Special requests can be made, ex. water the plants...)<br />
          <br />
          I will play with your cat for the rest of the visit, if they want that is!
          <br />
          <br />
          Photo updates and description of service provided sent via text or email.
        </p>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Exotic animal care</h2>
        <h3 style={h3Styles}>$30 - one visit (approximately 30 minutes)</h3>
        <p style={pStyles}>
          I can feed your snake, parrot, iguana... pretty much anything! I used to work as a zookeeper, so I have
          plenty of experience. I will clean enclosures, change water dishes, make sure heat lamps are running, and
          complete any other special requests. I'm aware at how delicate some of these creatures are, and will ensure
          the safety of your animal during your whole vacation!
          <br />
          <br />
          Photo updates and description of service provided sent via text or email.
        </p>
      </div>
      <div style={serviceCardStyles}>
        <h2 style={h2Styles}>Euthanasia support</h2>
        <h3 style={h3Styles}>Free of charge :)</h3>
        <p style={pStyles}>
          With my animal rescue / veterinary experience, I have been there for a lot of euthanasia. I know this can be
          a very tough moment for an animal lover! I would like to offer my company free of charge... To be with you
          during the euthanasia visit, so you do not have to go through it alone. I am also more than happy to spend
          some time with you afterwards. It is always helpful to have someone to talk to :)
          <br />
          <br />
          "To live in hearts we leave behind is not to die" -Thomas Campbell
        </p>
      </div>
      <h2 style={headingStyles}>Client Testimonials</h2>
      <div style={serviceCardStyles}>
        <div style={imageWrapper}>
          <img style={image} src={BeauAndRalph} alt="a dog named Ralph with Beau" />
        </div>
        <h2 style={h2Styles}>Julie and Ralph</h2>
        <p style={pStyles}>Beau is the absolute best! Like many pet owners, my pup, Ralph, means the
          world to me
          and it takes a lot for me
          to trust someone. Beau always keeps me updated on the walks and any new friends that Ralph makes. His
          daily
          recap texts include pictures which I joke is like I hired a professional photographer as an added bonus.
          I think
          the favorite part of Ralph's day is when Beau arrives, he knows he'll get fresh air, lots of love and a
          few
          treats.
        </p>
      </div>
      <div style={serviceCardStyles}>
        <div style={imageWrapper}>
          <img style={image} src={Ruth} alt="a dog named Ruth" />
        </div>
        <h2 style={h2Styles}>Anna + Anna and Ruthie</h2>
        <p style={pStyles}>From the moment our Ruthie met Beau, she was in love. We say his name and her
          tail
          wags
          with delight. And if we
          had tails, we would wag them too! Beau is communicative and professional, clear and detailed with his
          walking
          reports and pet sits. We trust him profoundly with our excitable and sometimes too stubborn mini
          goldendoodle.
          He loves her as if she was his own, with great care and compassion. When he walks her, our busy lives
          are made
          easier. We come home to a happily walked and calm dog after each and every visit. We couldn’t recommend
          Beau
          with higher praise and feel lucky that Ruthie gets to spend time with him.
        </p>
      </div>
      <div style={serviceCardStyles}>
        <div style={imageWrapper}>
          <img src={RiverWithBrick} alt="A dog named river" style={image} />
        </div>
        <h2 style={h2Styles}>Vanessa and River</h2>
        <p style={pStyles}>Admittedly, it's not easy for me to leave my pup, River, with anyone… except for
          Beau. I
          met Beau at a nearby dog park and knew instantly that he was a genuine and compassionate animal lover.
          He proves
          that time and time again, going above and beyond to keep River happy and safe. Beau is thoughtful,
          dependable,
          responsible, and incredibly kind. He communicates thoroughly and sends detailed summaries (with adorable
          photographs!) after every walk. We are incredibly grateful that we found Beau and could not possibly
          recommend
          him more!</p>
      </div>
      <div style={serviceCardStyles}>
        <div style={imageWrapper}>
          <img src={JavaLookinCute} alt="a dog named Java" style={image} />
        </div>
        <h2 style={h2Styles}>Jaimee and Java</h2>
        <p style={pStyles}>I can't recommend Beau enough. Above all, he values each pet's safety and
          comfort.
          He is
          passionate about connecting with and understanding the needs of animals, which I have seen in his
          connection
          with Java, our 15 year old goldendoodle. Beau is reliable, communicative, and extremely thoughtful, and
          Java is
          consistently excited to see him. Beau took time to get to know Java and we are so grateful to put her in
          his
          care.</p>
      </div>
      <div style={serviceCardStyles}>
        <div style={imageWrapper}>
          <img src={MooseOnVerandah} alt="a dog named moose" style={image} />
        </div>
        <h2 style={h2Styles}>Carolyn + Patrick and Moose</h2>
        <p style={pStyles}>I highly recommend Beau as a dog walker and dog sitter. Beau has been regularly
          walking
          our dog Moose and has consistently provided excellent care, and our dog absolutely loves him! Beau is
          extremely
          reliable, and always goes above and beyond to make sure Moose is happy and has a good walk. Beau’s
          extremely
          accommodating of our schedules, and has saved us on multiple occasions when we last minute needed dog
          care. I’m
          really thankful for his flexibility and kindness. Beau has dog sat for Moose on several occasions and
          has always provided exceptional care during his stays. He
          sends regular updates about walks / dog sits and provides awesome pictures with each update. I trust
          Beau completely and am so grateful to have him as Moose's dog walker and dog sitter.</p>
      </div>
    </div>
  );
};

export default AnimalCareInfo;

