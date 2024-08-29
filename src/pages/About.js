import React from 'react';
import useBoxShadow from '../hooks/useBoxShadow'; 
import '../components/Abouts.css'; 
import netcodexImage from '../components/img/Netcodex.png'

function About() {
  const { isOn, toggleBoxShadow } = useBoxShadow();

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="image-container">
        <img 
          src={netcodexImage}
          alt="About Us"
          className={`box-shadow-image ${isOn ? 'shadow-on' : ''}`}
        />
      </div>
      <button onClick={toggleBoxShadow} className="toggle-button">
        {isOn ? 'Turn Off Shadow' : 'Turn On Shadow'}
      </button>
    </div>
  );
}

export default About;