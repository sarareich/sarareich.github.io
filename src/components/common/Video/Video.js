import React from 'react';
import PropTypes from 'prop-types';

class Video extends React.Component {
  videoRef = React.createRef();

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.active) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    return (
      <video autoPlay loop className="video-margin" ref={this.videoRef}>
        <source type="video/mp4" src={this.props.source} />
      </video>
    );
  }
}

Video.propTypes = {
  source: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default Video;
