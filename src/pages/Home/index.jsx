/* eslint-disable object-shorthand */
import React, { useEffect, useRef } from 'react';
import { TimelineLite, Power3 } from 'gsap';
import {
  useViewportScroll,
  useTransform
} from 'framer-motion';
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
  BackText,
  BackText2,
  BackTextCont
} from './style';
import MainSection from '../../components/MainSection';
import imgBig from '../../assets/img/img14.jpg';
import img1 from '../../assets/img/img13.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/back2.jpg';

export default () => {
  const { scrollYProgress } = useViewportScroll();
  const scale1 = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );
  const translateY1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200]
  );
  const translateY2 = useTransform(
    scrollYProgress,
    [0, 1],
    [-150, 50]
  );
  const translateY3 = useTransform(
    scrollYProgress,
    [0, 1],
    [-150, 50]
  );
  const translateX1 = useTransform(
    scrollYProgress,
    [0, 1],
    [-5, 50]
  );
  let box1Title = useRef(null);
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
          <ImgBig
            style={{
              scale: scale1,
              translateY: translateY1,
              translateX: 0,
              translateZ: 0
            }}
            src={imgBig}
          />
        </ImgCont>
        <Title
          ref={(item) => {
            box1Title = item;
          }}
        >
          We create
          experiences
        </Title>
      </Box1>
      <Box2>
        <SubBox1>
          <BackTextCont>
            <BackText style={{ translateY: translateY3, translateX: translateX1 }}>R</BackText>
            <BackText2 style={{ translateY: translateY3, translateX: translateX1 }}>R</BackText2>
          </BackTextCont>
          <Item>
            <Box2.ImgCont>
              <Box2.Img style={{ translateY: translateY2 }} src={img2} />
              <Box2.ImgSecond style={{ translateY: translateY2 }} src={img2} />
            </Box2.ImgCont>
            <Box2.Title>Maximum Adaptability</Box2.Title>
            <Box2.Text>
              Creative solutions for all types of projects.
              App, Web, Dashboard, Software
            </Box2.Text>
          </Item>
          <BackTextCont>
            <BackText style={{ translateY: translateY3, translateX: translateX1 }}>S</BackText>
            <BackText2 style={{ translateY: translateY3, translateX: translateX1 }}>S</BackText2>
          </BackTextCont>
        </SubBox1>
        <SubBox2>
          <SubBox2.Item1>
            <Box2.Title>Responsive design</Box2.Title>
            <Box2.Text>
              We get interfaces for any user-friendly device
            </Box2.Text>
            <Box2.ImgCont>
              <Box2.Img style={{ translateY: translateY2 }} src={img1} />
              <Box2.ImgSecond style={{ translateY: translateY2 }} src={img1} />
            </Box2.ImgCont>
          </SubBox2.Item1>
          <BackTextCont>
            <BackText style={{ translateY: translateY3, translateX: translateX1 }}>M</BackText>
            <BackText2 style={{ translateY: translateY3, translateX: translateX1 }}>M</BackText2>
          </BackTextCont>
          <SubBox2.Item2>
            <Box2.ImgCont>
              <Box2.Img style={{ translateY: translateY2 }} src={img3} />
              <Box2.ImgSecond style={{ translateY: translateY2 }} src={img3} />
            </Box2.ImgCont>
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
