import React from 'react';
import PropTypes from 'prop-types';

const arrowIcon = '/images/arrow-right.png';
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={typeof className === 'undefined' ? '' : className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    role="link"
    tabIndex={0}
  >
    <img className="topslider-next-image" src={arrowIcon} alt="Next" />
  </div>
);

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape(),
  onClick: PropTypes.func,
};
NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => null,
};
export default NextArrow;
