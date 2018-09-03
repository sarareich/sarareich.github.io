import React from 'react';
import { NavLink } from 'react-router-dom';
import FFHome from '../../assets/ForwardFinancing/FF_HomePage.png';

class HomePage extends React.Component {
  render() {
    return (
      <div className="portfolio-home page">
        <div className="portfolio-content">
          <NavLink
            to="/work/forward-financing"
            className="portfolio-image__container two-thirds green-gradient"
          >
            <img
              src={FFHome}
              alt="Forward Financing"
              className="portfolio-image"
            />
            <div className="portfolio-image__caption">
              <h4 className="portfolio-image__caption-text heading-3">
                Forward Financing
              </h4>
            </div>
          </NavLink>
          <div className="portfolio-image__container one-third">
          </div>
          <div className="portfolio-image__container full-width">
          </div>
          <div className="portfolio-image__container two-thirds">
          </div>
          <div className="portfolio-image__container one-third">
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
