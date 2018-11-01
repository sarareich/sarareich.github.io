import React from 'react';
import { NavLink } from 'react-router-dom';
import FFHome from '../../assets/ForwardFinancing/FF_HomePage.png';
import MunchHero from '../../assets/Munch/MunchHero.jpg';
import MiscHome from '../../assets/Miscellaneous/MiscellaneousHome.jpg';
import DoughHome from '../../assets/Dough/homePage.png';

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
        <div className="header-description">
          <h3 className="heading-2 lato title-case">Hi there! I'm Sara, and I'm a digital product designer.</h3>
          <p>I'm currently completing my senior year at Northeastern University.</p>
        </div>
        <div className="portfolio-content">
          {this.renderImage("two-thirds", "work/munch", "", MunchHero, "Munch", "non-responsive")}
          {this.renderImage("one-third", "work/dough", "blue-gradient", DoughHome, "Dough", "")}
          {this.renderImage("one-third", "/work/forward-financing", "green-gradient", FFHome, "Forward Financing", "")}
          {this.renderImage("two-thirds", "/work/miscellaneous", "default", MiscHome, "Miscellaneous", "")}
        </div>
      </div>
    );
  }
}

export default HomePage;
