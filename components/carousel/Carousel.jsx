import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import CarouselIndicator from './CarouselIndicator';
import CarouselItems from './CarouselItems';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => (prev - 1 < items.length ? prev + 1 : prev));
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => (prev + 1 >= 0 ? prev - 1 : prev));
  }

  return (
    <div className="carousel-container">
      {activeIndex > 0 && (
        <button
          className="text-primary-blue carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
          type="button"
        >
          <IoIosArrowBack />
        </button>
      )}
      {items?.map((item, index) => (
        <CarouselItems key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItems>
      ))}
      {activeIndex < items.length - 1 && (
        <button
          className="text-primary-blue carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
          type="button"
        >
          <IoIosArrowBack
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </button>
      )}
      <CarouselIndicator
        active={activeIndex}
        length={items.length}
        onSetActiveIndex={(index) => {
          setActiveIndex(index);
        }}
      />
    </div>
  );
};

export default Carousel;
