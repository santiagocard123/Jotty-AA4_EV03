import React from 'react';
import './Services.css';
import netcodexImage from '../img/Netcodex.png'
const servicesData = [
  {
    id: 1,
    image: netcodexImage,
    title: 'Computer Repair',
    description: 'Expert repair services for desktops, laptops, and other computing devices. Fast and reliable solutions for any issues.'
  },
  {
    id: 2,
    image: netcodexImage,
    title: 'Software Installation',
    description: 'Installation and configuration of software applications. Ensure that your software runs smoothly with our professional help.'
  },
  {
    id: 3,
    image: netcodexImage,
    title: 'Network Setup',
    description: 'Setting up and securing your home or office network. Reliable and efficient networking solutions for smooth connectivity.'
  },
  {
    id: 4,
    image: netcodexImage,
    title: 'Data Recovery',
    description: 'Recover lost data from various devices. Our experts can help you retrieve your important files safely.'
  }

];

function Services() {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-list">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <img src={service.image} alt={service.title} className="service-image" />
                <h3 className="service-title">{service.title}</h3>
              </div>
              <div className="service-card-back">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
