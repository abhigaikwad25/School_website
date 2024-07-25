import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img_1 from '../assets/school.jpg'
import img_2 from '../assets/img_1.jpeg'
import img_3 from '../assets/img_2.jpeg'
import classroom_1 from '../assets/classroom_1.jpg'
import classroom_2 from '../assets/classroom_2.jpg'
import logo from '../assets/logo.png'
import '../css/home.css'




const HomeSlideshow = () => {
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
    <>
      <p className='d-flex justify-content-center mt-3 schoolheading'><img className='logo ' src={logo} alt="logo.png" /> Springdale Public School</p>
      <p className='schoolinfo m-3 d-flex justify-content-center'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>  
    <div className="slideshow">

      <Slider {...settings}>
        <div>
          <img className='w-100 h-100' src={img_1} alt="Slide 1" />
        </div>
        <div>
          <img className='w-100 h-100' src={img_2} alt="Slide 2" />
        </div>
        <div>
          <img className='w-100 h-100' src={img_3} alt="Slide 3" />
        </div>
        <div>
          <img className='w-100 h-100' src={classroom_1} alt="Slide 2" />
        </div>
        <div>
          <img className='w-100' src={classroom_2} alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
    </>
  );
};

export default HomeSlideshow;




