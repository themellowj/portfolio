import React from 'react';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';
import PhotoCarousel from './PhotoCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


ReactDOM.render(<PhotoCarousel />, document.getElementById('root'));


const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="imgs/ram.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="image3.jpg" alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default PhotoCarousel;
