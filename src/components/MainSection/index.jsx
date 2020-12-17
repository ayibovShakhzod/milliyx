import React, { useEffect, useState, useRef } from 'react';
import { Power2, TimelineLite, TweenMax } from 'gsap';
import {
  Container,
  BackTitle,
  ConSlide1,
  Title,
  Line,
  MixText,
  Name
} from './style';
import Slider from './Slider';
import sliders from '../../services/sliders';

export default () => {
  let line = useRef(null);
  let title = useRef(null);
  let mixText = useRef(null);
  let app = useRef(null);
  const [firstSlider, setFirstSlider] = useState([]);
  const tl = new TimelineLite({ delay: 0.99 });
  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    let unmounted = false;
    Promise.all([sliders.getSlider(1)]).then(
      ([slider1]) => {
        if (!unmounted) {
          setFirstSlider(slider1);
        }
      }
    );
    tl.to(line, 1, {
      width: '120%',
      ease: Power2.easeInOut
    })
      .to(
        line,
        0.8,
        { height: '120%', ease: Power2.easeInOut },
        0.5
      )
      .to(
        line,
        0.8,
        {
          width: '102%',
          ease: Power2.easeInOut
        },
        1
      )
      .to(
        line,
        0.8,
        { height: '100%', ease: Power2.easeInOut },
        1.2
      );

    tl.from(
      title,
      1.2,
      { y: 20, opacity: 0, ease: Power2.easeOut },
      0.8
    );
    tl.from(
      mixText,
      1.2,
      { y: 20, opacity: 0, ease: Power2.easeOut },
      0.9
    );
    return () => {
      unmounted = true;
    };
  }, []);
  return (
    <Container ref={(item) => {
      app = item;
    }}
    >
      <BackTitle>MILLIYX</BackTitle>
      <Title>
        <div
          className="title"
          ref={(item) => {
            title = item;
          }}
        >
          Creative Digital Agency.
        </div>
        <Name>
          <Line
            ref={(item) => {
              line = item;
            }}
          />
          <MixText
            ref={(item) => {
              mixText = item;
            }}
          >
            MILLIYX
            <p> &#174;</p>
          </MixText>
        </Name>
      </Title>
      <ConSlide1>
        <Slider slider={firstSlider} />
      </ConSlide1>
    </Container>
  );
};
