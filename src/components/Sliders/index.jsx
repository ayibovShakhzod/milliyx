import React, { useEffect, useState } from 'react';
import {
  Container,
  BackTitle,
  ConSlide1,
  Title,
  Line,
  MixText
} from './style';
import Slider from './Slider';
import sliders from '../../services/sliders';

export default () => {
  const [firstSlider, setFirstSlider] = useState([]);
  useEffect(() => {
    let unmounted = false;
    Promise.all([sliders.getSlider(1)]).then(
      ([slider1]) => {
        if (!unmounted) {
          setFirstSlider(slider1);
        }
      }
    );
    return () => {
      unmounted = true;
    };
  }, []);
  return (
    <Container>
      <BackTitle>MILLIYX</BackTitle>
      <Title>
        Creative Digital Agency.
        <br />
        <Line>
          <MixText>
            MILLIYX
            <p> &#174;</p>
          </MixText>
        </Line>
      </Title>
      <ConSlide1>
        <Slider slider={firstSlider} />
      </ConSlide1>
    </Container>
  );
};
