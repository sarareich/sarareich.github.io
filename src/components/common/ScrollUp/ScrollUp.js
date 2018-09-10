import React from 'react';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class ScrollUp extends React.Component {
  render() {
    return (
      <ScrollUpButton
        style={{
          backgroundColor: "transparent"
        }}
        ToggledStyle={{
          bottom: 40,
          right: 40
        }}
      />
    );
  }
}

export default ScrollUp;
