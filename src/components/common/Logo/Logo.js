import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <svg
        className="logo"
        width="260px"
        height="71px"
        viewBox="0 0 260 71"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="sara-reich"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fontFamily="Bentham-Regular, Bentham"
          fontSize="63.9700012"
          fontWeight="normal"
        >
          <text id="full-name" fill="#202224">
            <tspan x="0" y="55">
              sara reich
            </tspan>
          </text>
          <text id="s" fill="#202224">
            <tspan x="0" y="55">
              s
            </tspan>
          </text>
          <text id="r" fill="#202224">
            <tspan x="123" y="55">
              r
            </tspan>
          </text>
        </g>
      </svg>
    );
  }
}

export default Logo;
