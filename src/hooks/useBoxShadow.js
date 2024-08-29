import { useState, useEffect } from 'react';

const useBoxShadow = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const image = document.querySelector('.box-shadow-image');
    if (image) {
      image.style.boxShadow = isOn ? '0 0 10px 5px rgba(0, 255, 0, 0.7)' : 'none';
    }
  }, [isOn]);

  const toggleBoxShadow = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return { isOn, toggleBoxShadow };
};

export default useBoxShadow;
