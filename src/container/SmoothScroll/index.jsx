/* eslint-disable */
import React from 'react';
import { TweenLite, Power1 } from 'gsap';

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight,
    offset: 0
  };

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height
      });
    }
  });

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1.2, {
      y: -window.pageYOffset,
      ease: Power1.easeOut
    });
  };

  render() {
    document.body.style.height = `${this.state.height}px`;
    return (
      <>
        <div
          className="viewport"
          ref={(ref) => (this.viewport = ref)}>
          {this.props.children}
        </div>
      </>
    );
  }
}
