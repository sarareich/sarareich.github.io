import React from 'react';
import PropTypes from 'prop-types';

class ProjectDescription extends React.Component {
  render() {
    return (
      <div className="portfolio-content description">
        <h2 className="heading-2 one-third">
          {this.props.title}
        </h2>
        <div className="two-thirds">
          <p className="description-text">
          {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectDescription;
