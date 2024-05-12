import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import "./Carousel.css"

const Carousel = () => {
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const previousSlide = () => {
    carouselRef.current.slickPrev();
  };

  const nextSlide = () => {
    carouselRef.current.slickNext();
  };

  return (
    <div className='carasol'>
       <span>
       <h3>Lorem ipsum</h3>
      <h1>Lorem ipsum dolor</h1>
       </span>
      <Slider {...carouselSettings} ref={carouselRef}>
        <div className='images-c'>
          <img src={img1} alt="Image 1" />
        </div>
        <div>
          <img src={img2} alt="Image 2" />
        </div>
        {/* Add more image slides here */}
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
