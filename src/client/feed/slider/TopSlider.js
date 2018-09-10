import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import './Slider.less';

const sliderObj = [
  {
    image: '/images/slider/slider_1.png',
    content: 'Cari steemies, vagare per una città senza una mappa e senza una guida è affascinante',
    title: 'Esplorare qua e là...',
    link: '/ita/@isakost/esplorare-qua-e-la',
    date: '18/07/2018',
    avatar: 'https://steemitimages.com/u/isakost/avatar',
  },
  {
    image: '/images/slider/slider_2.jpg',
    content:
      "Ciao a tutti, in questo post vorrei parlare dell'informazione dei giovani riguardo alle nuove tecnologie",
    title: 'Blockchain e Bitcoin sono conosciuti tra i giovani?',
    link: '/ita/@lelluzzo/blockchain-e-bitcoin-sono-conosciuti-tra-i-giovani',
    date: '17/07/2018',
    avatar: 'https://steemitimages.com/u/lelluzzo/avatar',
  },
  {
    image: '/images/slider/slider_3.jpg',
    content:
      "Erano passate ormai diverse settimane da quando Liz aveva incontrato l'uomo della casa azzurra. ",
    title: 'La finestra gialla [parte terza]',
    link: '/ita/@pawpawpaw/la-finestra-gialla-parte-tre',
    date: '17/07/2018',
    avatar: 'https://steemitimages.com/u/pawpawpaw/avatar',
  },
  {
    image: '/images/slider/slider_4.JPG',
    content: 'Ciao Steemians! In questo post vi ho parlato del mio grande amico Simo, in arte Leon',
    title: "Leon: l'evoluzione continua",
    link: '/dlive/@dexpartacus/da522f10-899d-11e8-adb2-bf4283a63cb9',
    date: '18/07/2018',
    avatar: 'https://steemitimages.com/u/dexpartacus/avatar',
  },
  {
    image: '/images/slider/slider_5.jpg',
    content:
      'Una delle mie tanti passioni è il cibo, per questo non solo seguo con affetto @alinaknot e guardo in tv molti programmi dedicati ad esso',
    title: 'Passione street food #Agliana',
    link: '/ita/@noemilunastorta/passione-street-food-agliana',
    date: '18/07/2018',
    avatar: 'https://steemitimages.com/u/noemilunastorta/avatar',
  },
  {
    image: '/images/slider/slider_6.jpeg',
    content:
      'IL PORTIERE: Uno dei ruoli forse più affascinanti, misteriosi, particolari nel calcio.',
    title: 'Il portiere della nebbia',
    link: '/ita/@mondodidave73/il-portiere-della-nebbia',
    date: '19/07/2018',
    avatar: 'https://steemitimages.com/u/mondodidave73/avatar',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '260px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
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
              <Link target="_blank" to={slider.link}>
                {' '}
                {slider.title}{' '}
              </Link>{' '}
            </h3>
            <p className="slider-content">
              {' '}
              <Link target="_blank" to={slider.link}>
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
