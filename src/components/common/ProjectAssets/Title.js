import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    return (
      <h2 className="heading-2 one-third">
        {this.props.title}
      </h2>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
