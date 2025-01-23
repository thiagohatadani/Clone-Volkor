import React, { useState, useEffect } from "react";
import slide1 from '../images/Space_background4.png'
import slide2 from '../images/Space_background3.png'
import slide3 from '../images/Space_background2-scaled.jpg'
import slide4 from '../images/Space_background1-scaled.jpg'


const images = [slide1, slide2, slide3, slide4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalDuration = 11000; 
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover transition-transform duration-[11000ms] ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100 z-10" 
              : "opacity-100 scale-150 z-0" 
          }`}
          style={{ backgroundImage: `url(${img})`}}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
