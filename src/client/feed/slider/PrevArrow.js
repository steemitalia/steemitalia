import React from 'react';
import PropTypes from 'prop-types';

const arrowIcon = '/images/arrow-right.png';
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={typeof className === 'undefined' ? '' : className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    role="link"
    tabIndex={0}
  >
    <img className="topslider-prev-image" src={arrowIcon} alt="Prev" />
  </div>
);
PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape(),
  onClick: PropTypes.func,
};
PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => null,
};
export default PrevArrow;
