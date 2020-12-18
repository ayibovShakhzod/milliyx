/* eslint-disable object-shorthand */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, Power3 } from 'gsap';
import { useViewportScroll, useTransform } from 'framer-motion';
import {
  ContainerHome,
  ImgCont,
  ImgBig,
  Title,
  Box1,
  Box2,
  SubBox1,
  SubBox2,
  Item,
  BackText
} from './style';
import MainSection from '../../components/MainSection';
import imgBig from '../../assets/img/img4.jpg';
import img1 from '../../assets/img/img13.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/back2.jpg';

export default () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  let box1Title = useRef();
  const tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    tl.from(box1Title, 1.4, {
      scale: 1.6,
      ease: Power3.easeInOut
    });
  }, []);

  return (
    <ContainerHome>
      <MainSection />
      <Box1>
        <ImgCont>
          <ImgBig style={{ scale: scale }} src={imgBig} />
        </ImgCont>
        <Title ref={(item) => {
          box1Title = item;
        }}
        >
          We create
          <br />
          experiences
        </Title>
      </Box1>
      <Box2>
        <SubBox1>
          <BackText>R</BackText>
          <Item>
            <Box2.Img src={img2} />
            <Box2.Title>Maximum Adaptability</Box2.Title>
            <Box2.Text>
              Creative solutions for all types of projects.
              App, Web, Dashboard, Software
            </Box2.Text>
          </Item>
          <BackText>S</BackText>
        </SubBox1>
        <SubBox2>
          <SubBox2.Item1>
            <Box2.Title>Responsive design</Box2.Title>
            <Box2.Text>
              We get interfaces for any user-friendly device
            </Box2.Text>
            <Box2.Img src={img1} />
          </SubBox2.Item1>
          <BackText>M</BackText>
          <SubBox2.Item2>
            <Box2.Img src={img3} />
            <Box2.Title>Style</Box2.Title>
            <Box2.Text>
              Capture the essence in each project and give
              it life.
            </Box2.Text>
          </SubBox2.Item2>
        </SubBox2>
      </Box2>
    </ContainerHome>
  );
};
