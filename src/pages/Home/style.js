import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../../style/style';

export const ContainerHome = styled(Container)`
  background: rgba(var(--bg), 1);
  width: 100%;
  margin: 0;
`;

export const ImgCont = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;
export const Box1 = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 100px 0 100px 0;
  /* background-color: rgba(var(--color), 1); */
`;
export const ImgBig = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.2s ease;
  position: relative;
  backface-visibility: hidden;
  transition: transform  1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const Title = styled.h2`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--bg), 1);
  position: absolute;
  color: transparent;
  text-align: center;
  letter-spacing: 18px;
  line-height: 150%;
  height: 100%;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  user-select: none;
  font-family: Monument, sans-serif !important;
  z-index: 1;
  font-size: 2rem;
  font-weight: 400;
`;

export const Box2 = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(var(--color), 0.05);
  display: flex;
  padding: 0;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SubBox1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0 100px 0;
`;
export const SubBox2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 0 100px 0;
`;

export const Item = styled.div`
  width: 100%;
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  justify-content: flex-end;
`;

Box2.TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: flex-end;
`;

SubBox2.Item1 = styled.div`
  width: 100%;
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  justify-content: flex-start;
`;
SubBox2.Item2 = styled.div`
  width: 100%;
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  justify-content: flex-end;
`;
Box2.ImgCont = styled.div`
  position: relative;
  width: 576px;
  height: auto;
  overflow: hidden;
`;
Box2.Img = styled(motion.img)`
  position: relative;
  width: 100%;
  z-index: 200;
  opacity: .8;
  filter: saturate(4.5);
  backface-visibility: hidden;
  transition: transform  .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
Box2.ImgSecond = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: .2;
  width: 100%;
  z-index: 300;
  filter: grayscale(1);
  backface-visibility: hidden;
  transition: transform  1s ease-out;
`;

// Box2.Title = styled.h3`
//   padding: 20px 0;
// `;
Box2.Text = styled(motion.p)`
  font-size: 0.85rem;
  padding-left: 5px;
  position: relative;
  transition: transform  .7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

Box2.Title2 = styled.h3`
  padding: 20px 0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--color), 1);
  color: transparent;
  font-family: Monument, sans-serif !important;
`;
Box2.Title = styled(motion.h3)`
  padding: 20px 5px;
  position: relative;
  font-family: Monument, sans-serif !important;
  transition: transform  .7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const BackText = styled(motion.h2)`
  font-size: 20rem;
  width: 100%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--color), 1);
  color: transparent;
  text-align: center;
  letter-spacing: 30px;
  white-space: nowrap;
  z-index: 100;
  user-select: none;
  font-family: Monument !important;
  font-weight: 400;
  padding: 0;
  margin: 100px 0;
  filter: saturate(4.5);
  opacity: 0.2;
  position: relative;
  transition: transform  1s ease-out;
  transition-delay: .1s;
`;
export const BackText2 = styled(motion.h2)`
  font-size: 20rem;
  top: 0;
  left:0;
  width: 100%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--bg), 1);
  color: transparent;
  text-align: center;
  letter-spacing: 30px;
  white-space: nowrap;
  z-index: 200;
  user-select: none;
  font-family: Monument !important;
  font-weight: 400;
  padding: 0;
  margin: 100px 0;
  position: absolute;
  mix-blend-mode: difference;
  transition: transform  .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const BackTextCont = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
