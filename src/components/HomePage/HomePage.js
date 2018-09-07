import React from 'react';
import { NavLink } from 'react-router-dom';
import FFHome from '../../assets/ForwardFinancing/FF_HomePage.png';
import MunchHero from '../../assets/Munch/MunchHero.jpg';

class HomePage extends React.Component {
  renderImage(size, route, desiredClass, image, title, imageClass) {
    return (
      <NavLink
        to={route}
        className={`portfolio-image__container ${size} ${desiredClass}`}
      >
        <img
          src={image}
          alt={title}
          className={`portfolio-image ${imageClass}`}
        />
        <div className="portfolio-image__caption">
          <h4 className="portfolio-image__caption-text heading-3">
            {title}
          </h4>
        </div>
      </NavLink>
    );
  }

  render() {
    return (
      <div className="portfolio-home page">
        <div className="portfolio-content">
          {this.renderImage("full-width", "work/munch", "", MunchHero, "Munch", "non-responsive")}
          {this.renderImage("two-thirds", "/work/forward-financing", "green-gradient", FFHome, "Forward Financing", "")}
          {this.renderImage("one-third", "/work/miscellaneous", "", null, "Miscellaneous", "")}
        </div>
      </div>
    );
  }
}

export default HomePage;
