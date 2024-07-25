import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sport_1 from '../assets/gallery/sport_1.jpeg';
import sport_2 from '../assets/gallery/sport_2.jpeg';
import project_1 from '../assets/gallery/project_1.jpeg';
import project_2 from '../assets/gallery/project_2.jpeg';
import cultural_1 from '../assets/gallery/cultural_1.jpeg';
import cultural_2 from '../assets/gallery/cultural_2.jpeg';
import classroom_1 from '../assets/gallery/classroom_1.jpg';
import classroom_2 from '../assets/gallery/classroom_2.jpg';
import library_1 from '../assets/gallery/library_1.jpeg';
import library_2 from '../assets/gallery/library_2.jpeg';

import video_1 from '../assets/video/video_1.mp4';
import video_2 from '../assets/video/video_2.mp4';

import '../css/gallery.css';

const Gallery = () => {
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
    <div className="gallery-slideshow">
      <h1 className='facultyheading d-flex justify-content-center'>Gallery</h1>
      <Slider {...settings} className='my-5'>
        <div>
          <img className='w-100 h-100' src={sport_1} alt="Slide 1" />
        </div>
        <div>
          <img className='w-100 h-100' src={sport_2} alt="Slide 2" />
        </div>
        <div>
          <img className='w-100 h-100' src={project_1} alt="Slide 3" />
        </div>
        <div>
          <img className='w-100 h-100' src={project_2} alt="Slide 4" />
        </div>
        <div>
          <img className='w-100 h-100' src={cultural_1} alt="Slide 5" />
        </div>
        <div>
          <img className='w-100 h-100' src={cultural_2} alt="Slide 6" />
        </div>
        <div>
          <img className='w-100 h-100' src={classroom_1} alt="Slide 7" />
        </div>
        <div>
          <img className='w-100 h-100' src={classroom_2} alt="Slide 8" />
        </div>
        <div>
          <img className='w-100 h-100' src={library_1} alt="Slide 9" />
        </div>
        <div>
          <img className='w-100 h-100' src={library_2} alt="Slide 10" />
        </div>
      </Slider>
      </div>
      <div className="video-section d-flex justify-content-center m-5">
        <div className='video-slide col-md-6 mx-2 my-5'>
          <video className='w-100 h-100' controls>
            <source src={video_1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='video-slide col-md-6 mx-2 my-5'>
          <video className='w-100 h-100' controls>
            <source src={video_2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </>
  );
};

export default Gallery;
