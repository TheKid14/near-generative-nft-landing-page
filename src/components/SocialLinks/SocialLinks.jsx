import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import socialFace from '../../assets/images/social-face.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

const SocialLinks = ({ className }) => (
  <div className={`social-links ${className || ''}`}>
    <a href="#face">
      <ReactSVG className="social-links__item" src={socialFace} />
    </a>
    <a href="#twitter">
      <ReactSVG className="social-links__item" src={socialTwitter} />
    </a>
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: '',
};

export default SocialLinks;