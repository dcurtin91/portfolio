import React, { useState, useEffect } from 'react';
import './App.css'; // Your CSS for styling

const AbstractArt = () => {
  const [isMorphed, setIsMorphed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsMorphed(true);
    } else {
      setIsMorphed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`abstract-art ${isMorphed ? 'morphed' : ''}`}>
      {/* You can add an SVG or abstract shape here */}
      <svg height="200" width="200">
        <circle cx="100" cy="100" r="50" />
      </svg>
    </div>
  );
};

export default AbstractArt;
