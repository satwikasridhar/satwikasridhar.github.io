
import React from 'react'
import { useState, useEffect } from 'react';
import './navprompt.css'
const NavPrompt = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the duration (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`navbar-prompt ${isVisible ? 'visible' : ''}`}>
      <p>Please use the navbar</p>
    </div>
  );
};

export default NavPrompt;
