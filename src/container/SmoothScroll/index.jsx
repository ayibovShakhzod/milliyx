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
    
    // let topx = window.pageYOffset
    // this.setState({offset:((topx - this.state.offset) * 0.05)+this.state.offset});
    // var scroll = "translateY(-" + this.state.offset + "px) translateZ(0)"
    // this.viewport.style.transform = scroll

    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power1.easeOut
    });
  };

  render() {
    return (
      <>
        <div
          className="viewport"
          ref={(ref) => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    );
  }
}
