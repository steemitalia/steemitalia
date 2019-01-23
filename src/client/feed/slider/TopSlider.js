import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import './Slider.less';

const sliderObj = [
    {
        "image": "https://cdn.steemitimages.com/DQmUGzfCsVheJZxvCaKJW5zi1QnXYt8T38zKfYq1AMyN7w8/moon%20game%202008%20cm.70x70%20avalabile.jpg",
        "title": "The Myth Of Eternal Love Oil And ...",
        "content": "@armandosodano ci regala oggi una sua opera realizzata con olio e cemento su tela, dedicata all'amore eterno. Il mito di Selene si incrocia con ...",
        "link": "@armandosodano/ntopaz--armandosodano--410740771--ntopaz-ita-love-painting-art--2019-01-14-18-29-14--artwork--none",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/armandosodano/avatar"
    },
    {
        "image": "https://cdn.steemitimages.com/DQmR5QnxU2H9YBtsKhoqvmMiPRbAwhFwLDi475omiv9ZLZ4/image.png",
        "title": "Attacco A Marte! (By @Kork75)",
        "content": "Un racconto di fantascienza appassionante e avvincente, Valentino Persichetti e un giovane rivoluzionario terrestre prigioniero ...",
        "link": "@kork75/attacco-a-marte-by-kork75",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/kork75/avatar"
    },
    {
        "image": "https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845546__340.jpg",
        "title": "Con Il Sorriso - 1 Parte",
        "content": "Marina, una giovane ragazza proprietaria di un bar sulla spiaggia, si prepara per la fine della stagione. Sposata e mamma di due teneri pargoli, ...",
        "link": "@mad-runner/con-il-sorriso-1-parte",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/mad-runner/avatar"
    },
    {
        "image": "https://cdn.pixabay.com/photo/2018/01/04/20/52/dark-3061610_1280.jpg",
        "title": "Black Mirror - Bandersnatch: Flop ...",
        "content": "Ogni volta che compiamo una scelta, il nostro percorso cambia, superiamo un bivio e percorriamo una via nuova, diversa. Scegliere di fare o di non ...",
        "link": "@serialfiller/black-mirror-bandersnatch-flop-o-capolavoro",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/serialfiller/avatar"
    },
    {
        "image": "https://cdn.steemitimages.com/DQmdzhJAktg1sG5ZikzERpXeKS6jzHrjZ56pvfeBzVJdaht/logo-2650906_960_720.jpg",
        "title": "Google: Come Funziona?",
        "content": "Tutti noi conosciamo ed usiamo ogni giorno \"Google\", ma sappiamo veramente come funziona? Quale algoritmo viene utilizzato? E come possiamo far ...",
        "link": "@moncia90/google-come-funziona-sogxae3u",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/moncia90/avatar"
    },
    {
        "image": "https://img.youtube.com/vi/rumx_U7Z30I/0.jpg",
        "title": "Le Balene Del Bitcoin Si Stanno ...",
        "content": "Bentornati al Cryptomonday, la rubrica settimanale @tizswa, nel suo video-post troverete un'analisi sull'andamento del prezzo di Bitcoin ...",
        "link": "@tizswa/le-balene-del-bitcoin-si-stanno-risvegliando",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/tizswa/avatar"
    },
    {
        "image": "https://cdn.steemitimages.com/DQmZYWgadaqkHPnspjtK4dsfP9XXJbnx4ZSPYfHSqBwa5GN/46039181_10161335630695554_9018598621930586112_n.jpg",
        "title": "Cena Romantica Al Diversorium ...",
        "content": "Il Diversorium Cavour, nel cuore di Pistoia,  e un ristorante elegante e dalla lunga storia. @noemilunastorta ricorda ancora quando il locale ...",
        "link": "@noemilunastorta/cena-romantica-al-diversorium-cavour",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/noemilunastorta/avatar"
    },
    {
        "image": "https://cdn.steemitimages.com/DQmUtqQYE2qwzgmWaq1GAh2UWv23i9QdsxhFC6enPwLE6Z5/tino.jpg",
        "title": "Guess Again #1 Week 4, The Answer ...",
        "content": "Ecco i risultati del quarto turno di Guess again, indovina ancora, il contest di @road2horizon: che dolce stava cucinando Tino il coniglio? Leggete ...",
        "link": "@road2horizon/guess-again-1-week-4-the-answer-is-indovina-ancora-1-settimana-4-la-risposta-e",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/road2horizon/avatar"
    },
    {
        "image": "https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmPrTCSBWMoNZSZLc9gjD7cghbP36X9YMhZ7XPqdzpSN1s/ask-3070333_960_720.jpg",
        "title": "[Contest] Guess Again #1 Week 5  ...",
        "content": "Nuovo appuntamento con la serie Guess again, Indovina ancora di @road2horizon, questa volta l'indovinello proposto ha a che fare con la cioccolata, ...",
        "link": "@road2horizon/contest-guess-again-1-week-5-indovina-ancora-1-settimana-5",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/road2horizon/avatar"
    },
    {
        "image": "https://cdn.steemitimages.com/DQmPYPdwehTJJhUV8srCNmxZHwYqP8uxatxiraPfwwQnPgG/logorosso.jpeg",
        "title": "Theneverendingcontest N 17 ...",
        "content": "Ecco i risultati di theneverendingcontest n17, il contest infinito di @spi-storychain. In questo turno l'ambientazione doveva essere un ...",
        "link": "@spi-storychain/theneverendingcontest-n-17-s2-p4-i1-risultati",
        "date": "14/01/2019",
        "avatar": "https://steemitimages.com/u/spi-storychain/avatar"
    }
];

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
