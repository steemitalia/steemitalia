import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import './Slider.less';

const sliderObj = OBJ_HERE;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '50px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '10px',
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        // centerPadding: '10px',
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        // centerPadding: '10px',
        slidesToScroll: 1,
      },
    },
  ],
};

const TopSlider = () => (
  <div className="topSlider">
    <Slider {...settings}>
      {sliderObj.map(slider => (
        <div className="slider-item" key={slider.title}>
          <div className="slider-hover" />
          <img src={slider.image} alt="Slider 1" />
          <div className="user-avatar">
            <img className="user-avatar-image" src={slider.avatar} alt="User Avatar" />
          </div>
          <div className="caption">
            <h3 className="slider-title">
              {' '}
              <Link to={slider.link} target="_self" rel="noopener noreferrer" title={slider.title} className="Story__content__title">
                {' '}
                {slider.title}{' '}
              </Link>{' '}
            </h3>
            <p className="slider-content">
              {' '}
              <Link target="_self" to={slider.link}>
                {' '}
                {slider.content}{' '}
              </Link>{' '}
            </p>
            <p className="date"> {slider.date} </p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default TopSlider;
