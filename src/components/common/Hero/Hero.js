import React from 'react';
import PropTypes from 'prop-types';

class Hero extends React.Component {
  render() {
    return (
      <div
        className="hero-image__container"
        style={{
          backgroundColor: this.props.background
        }}
      >
        <img
          src={this.props.image}
          alt={this.props.imageAlt}
          className="hero-image"
        />
      </div>
    );
  }
}

Hero.propTypes = {
  background: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default Hero;
