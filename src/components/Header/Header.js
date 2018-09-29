import React from 'react';
import Logo from '../common/Logo/Logo';
import { NavLink } from 'react-router-dom';
import Resume from '../../assets/Resume.pdf';

class Header extends React.Component {
  render() {
    return (
      <div className="header__wrap page">
        <div className="header">
          <div className="header__logo">
            <NavLink to="/">
              <Logo/>
            </NavLink>
          </div>
          <div className="header__nav-links">
            <div className="header__sub-link">
              <NavLink exact to="/" className="link">work</NavLink>
            </div>
            <div className="header__sub-link">
              <NavLink to="/about" className="link">about</NavLink>
            </div>
            <div className="header__sub-link">
              <NavLink to={Resume} target="blank" className="link">resume</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
