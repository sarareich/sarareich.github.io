import React from 'react';
import PropTypes from 'prop-types';

class Hero extends React.Component {
  render() {
    return (
      <div
        className="hero-image"
        style={{
          backgroundColor: this.props.background
        }}>
      </div>
    );
  }
}

Hero.propTypes = {
  background: PropTypes.string.isRequired
};

export default Hero;
