import React from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="portfolio-home page">
        <div className="portfolio-content">
          <NavLink
            to="/work/forward-financing"
            className="portfolio-image one-third"
          >
            <div className="portfolio-image__caption">
              <h4 className="portfolio-image__caption-text heading-4">
                Forward Financing
              </h4>
            </div>
          </NavLink>
          <div className="portfolio-image two-thirds">
          </div>
          <div className="portfolio-image full-width">
          </div>
          <div className="portfolio-image two-thirds">
          </div>
          <div className="portfolio-image one-third">
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
