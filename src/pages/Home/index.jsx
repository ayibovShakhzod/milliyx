import React from 'react';
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

export default () => (
  <ContainerHome>
    <MainSection />
    <Box1>
      <ImgCont>
        <ImgBig src={imgBig} />
      </ImgCont>
      <Title>
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
            Capture the essence in each project and give it
            life.
          </Box2.Text>
        </SubBox2.Item2>
      </SubBox2>
    </Box2>
  </ContainerHome>
);
