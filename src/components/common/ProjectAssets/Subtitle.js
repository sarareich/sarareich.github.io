import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    return (
      <h3 className="heading-3">
        {this.props.subtitle}
      </h3>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default Subtitle;
