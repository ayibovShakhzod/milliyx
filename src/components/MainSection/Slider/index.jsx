import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite, Power3 } from 'gsap';
import {
  Body,
  ContSlider,
  FrontText,
  Footer,
  Img,
  Indicators,
  Indicator,
  Title,
  Text,
  Cover,
  Images
} from './style';

export default ({ slider }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let container = useRef(null);
  let footer = useRef(null);
  const tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    const images = container.children[2].children[0];
    tl.to(container.firstElementChild, 0, {
      css: { visibility: 'visible' }
    });
    tl.to(container.firstElementChild, 1.4, {
      width: '0%',
      ease: Power3.easeInOut
    });
    tl.from(images, 1.4, {
      scale: 1.6,
      ease: Power3.easeInOut,
      delay: -1.4
    }).from(footer, 1.4, {
      x: 100,
      scale: 1.6,
      ease: Power3.easeInOut
    }, 0.1);
  }, []);
  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <ContSlider
      ref={(item) => {
        container = item;
      }}
    >
      <Cover />
      <Footer ref={(item) => {
        footer = item;
      }}
      >
        <Indicators>
          {[...Array(slider.length)].map((_, index) => (
            <Indicator
              active={index === activeIndex}
              key={slider[index].id}
              onClick={() => handleActive(index)}
            />
          ))}
        </Indicators>
        {slider.map((item, index) => (
          <Text
            active={index === activeIndex}
            key={item.id}
          >
            {item.text}
          </Text>
        ))}
        <FrontText>
          {slider.map((item, index) => (
            <Title
              className={
                index === activeIndex ? 'active' : ''
              }
              // eslint-disable-next-line react/jsx-closing-bracket-location
              key={item.id}>
              {item.title}
            </Title>
          ))}
        </FrontText>
      </Footer>
      <Images>
        <Body>
          {slider.map((item, index) => (
            <Img
              key={item.id}
              active={index === activeIndex}
              src={item.img}
            />
          ))}
        </Body>
      </Images>
    </ContSlider>
  );
};
