import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <h1 className="main-title">Netcodex Technology</h1>
      <p className="intro-text">Your one-stop solution for all tech needs.</p>
      <div className="service-section">
        <h2 className="section-title">Our Services</h2>
        <div className="service">
          <h3 className="service-title">Computer Maintenance</h3>
          <p className="service-description">We offer comprehensive maintenance services to keep your computer running smoothly. From hardware checks to software updates, we've got you covered.</p>
        </div>
        <div className="service">
          <h3 className="service-title">PC Component Sales</h3>
          <p className="service-description">Looking to upgrade or build your own PC? We provide a wide range of high-quality components at competitive prices. Find everything you need from the best brands.</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
