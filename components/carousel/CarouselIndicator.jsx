import React from 'react';

const CarouselIndicator = ({
  active,
  length,
  maxIndicatorVisible = 5,
  onSetActiveIndex,
}) => (
  <div className="carousel-indicator">
    {Array.from(
      Array(length > maxIndicatorVisible ? maxIndicatorVisible : length),
      (_, index) => (
        <div
          key={index}
          className={`carousel-indicator-dots ${
            active === index ? 'w-4 opacity-100' : 'w-2 bg-gray-400'
          }`}
          onClick={() => {
            onSetActiveIndex(index);
          }}
        />
      ),
    )}
  </div>
);

export default CarouselIndicator;
