import React, { useEffect, useState, useRef } from 'react';
import {
  Body,
  ContSlider,
  Header,
  FrontText,
  Footer,
  Img,
  ConFooter,
  Indicators,
  Indicator,
  Title,
  Text
} from './style';

export default ({ slider }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesRef = useRef(null);
  useEffect(() => {}, []);
  const handleActive = (index) => {
    // imagesRef.current.children[activeIndex].classList.remove('active');
    // imagesRef.current.children[index].classList.add('active');
    setActiveIndex(index);
  };
  return (
    <ContSlider>
      <Header>Outstanding</Header>
      <Body ref={imagesRef}>
        {slider.map((item, index) => (
          <Img
            key={item.id}
            active={index === activeIndex}
            src={item.img}
          />
        ))}
      </Body>
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
        {/* <span>Nest-one</span>
        <span>Milliyx</span> */}
      </FrontText>
      <Footer>
        <ConFooter>
          {slider.map((item, index) => (
            <Text
              active={index === activeIndex}
              // eslint-disable-next-line react/jsx-closing-bracket-location
              key={item.id}>
              {item.text}
            </Text>
          ))}
          {/* <span>Building</span>
          <span>Milliyx portfolio website</span> */}
          <Indicators>
            {[...Array(slider.length)].map((_, index) => (
              <Indicator
                active={index === activeIndex}
                key={slider[index].id}
                onClick={() => handleActive(index)}
              />
            ))}
          </Indicators>
        </ConFooter>
      </Footer>
    </ContSlider>
  );
};
