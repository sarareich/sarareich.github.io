import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../common/Logo/Logo';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header__wrap page">
        <div className="header">
          <div className="header__logo">
            <NavLink to="/work">
              <Logo/>
            </NavLink>
          </div>
          <div className="header__nav-links">
            <div className="header__sub-link">
              <NavLink to="/work" className="link">work</NavLink>
            </div>
            <div className="header__sub-link">
              <NavLink to="/about" className="link">about</NavLink>
            </div>
            <div className="header__sub-link">
              <NavLink to="/contact" className="link">contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
