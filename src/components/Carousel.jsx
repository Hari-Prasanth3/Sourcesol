
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const Carousel = ({ images }) => {
 
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      {/* Previous Button */}
      <button onClick={prevImage} className="absolute left-0 text-3xl top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full focus:outline-none">
      <FaChevronLeft />      </button>
      
      {/* Next Button */}
      <button onClick={nextImage} className="absolute text-3xl right-0 top-1/2 transform -translate-y-1/2  text-white px-3 py-1 rounded-full focus:outline-none">
      <FaChevronRight />      </button>

      {/* Image */}
      <img src={images[currentImageIndex]} alt="carousel" className="w-full "  />
    </div>
  );
};

export default Carousel;



