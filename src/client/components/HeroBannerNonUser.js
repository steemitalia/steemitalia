import React from 'react';
import PropTypes from 'prop-types';
import './HeroBannerNonUser.less';

const bannerContent = {
  image: '/images/hero_banner.jpg',
  titleID: 'hero_banner_title_1',
  defaultTitle: 'Le tue idee valgono',
  defaultContent:
    'SteemItalia, il social che paga i tuoi post e le tue interazioni. <br> Senza pubblicità !',
  className: 'HeroBannerSlider__image',
  number: 1,
};

/* eslint-disable react/no-danger */
const HeroBannerNoneUser = ({ onCloseClick, visible }) =>
  !visible ? null : (
    <div className="HeroBanner">
      <a onClick={onCloseClick} role="button" tabIndex="0" className="HeroBanner__close">
        <i className="iconfont icon-close" />
      </a>
      <div className="HeroBanner__container">
        <img
          src={bannerContent.image}
          className="HeroBanner__content__image"
          alt={bannerContent.defaultTitle}
        />
        <div className="HeroBanner__content__slogan">
          <h3 className="HeroBanner__content__slogan__title"> {bannerContent.defaultTitle} </h3>
          <p
            className="HeroBanner__content__slogan__details"
            dangerouslySetInnerHTML={{ __html: bannerContent.defaultContent }}
          />
        </div>
      </div>
    </div>
  );
/* eslint-enable react/no-danger */
HeroBannerNoneUser.propTypes = {
  visible: PropTypes.bool,
  onCloseClick: PropTypes.func,
};
HeroBannerNoneUser.defaultProps = {
  visible: true,
  onCloseClick: () => {},
};
export default HeroBannerNoneUser;
