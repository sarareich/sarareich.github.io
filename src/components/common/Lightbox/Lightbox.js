import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

class LightBox extends React.Component {
  render() {
    const { images, isOpen, onClose, prevImage, nextImage, photoIndex } = this.props;
    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={onClose}
            onMovePrevRequest={prevImage}
            onMoveNextRequest={nextImage}
          />
        )}
      </div>
    );
  }
}

LightBox.propTypes = {
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired
};

export default LightBox;
