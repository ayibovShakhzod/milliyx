/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import RGBShiftEffect from './EffectShell';

class MotionHover extends Component {
  componentDidMount() {
    const container = this.items.parentElement;
    // eslint-disable-next-line no-new
    new RGBShiftEffect(container, this.items, {
      strength: 0.25
    });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const srcImg = this.props.imgSrc;
    return (
      <div
        className="demo2"
        // eslint-disable-next-line no-return-assign
        ref={(ref) => (this.items = ref)}
      >
        <a className="link w-inline-block">
          <img
            className="content__img"
            src={srcImg}
            alt="img2"
          />
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default MotionHover;
