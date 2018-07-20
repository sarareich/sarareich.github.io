import React from 'react';
import PropTypes from 'prop-types';

class ProjectInfo extends React.Component {
  renderSummaryInfo(info) {
    return (
      <div className="summary" key={info.title}>
        <h3 className="summary__subtitle heading-3">{info.title}</h3>
        <div className="summary__info">
          {info.description}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="project-info portfolio-content">
        <div className="project-info__name one-third">
          <div className="project-info__title">
            <h1 className="heading-1">{this.props.title}</h1>
          </div>
          <div className="project-info__subtitle">
            {this.props.subtitle}
          </div>
        </div>
        <div className="project-info__summary two-thirds">
          {this.props.summaryInfo.map(info => this.renderSummaryInfo(info))}
        </div>
      </div>
    );
  }
}

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summaryInfo: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })).isRequired,
};

export default ProjectInfo;
