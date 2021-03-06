import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    return (
      <div
        className="project-image__container"
        style={{
          backgroundColor: this.props.color
        }}
      >
        <img src={this.props.image} className="project-image" alt={this.props.alt}/>
      </div>
    );
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Image;
