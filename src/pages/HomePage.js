import React from 'react';
import Content from '../components/Content/Content';
import Services from '../components/Services/Services';
import Products from '../components/Products/Products';

function HomePage() {
  const centerStyle = {
    textAlign: 'center',
    margin: '0 auto', 
    padding: '1rem 0', 
  };

  const servicesWrapperStyle = {
    backgroundColor: '#000', 
    color: '#fff', 
    padding: '5rem', 
  };

  return (
    <div>
      <Content />
      <div style={servicesWrapperStyle}>
        <Services />
      </div>
      <h1 style={centerStyle}>Products</h1>
      <Products />
    </div>
  );
}

export default HomePage;
