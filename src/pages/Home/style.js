import styled from 'styled-components';
import { Container } from '../../style/style';

export const ContainerHome = styled(Container)`
  background: rgba(var(--bg), 1);
  width: 100%;
  margin: 0;
`;

export const ImgCont = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 50px;
`;
export const Box1 = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 0 0 100px 0;
  background-color: rgba(var(--color), 1);
`;
export const ImgBig = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.2s ease;
  position: relative;
  transform: scale(1);
  &:hover {
    transition: all 0.2s ease;
  }
`;

export const Title = styled.h2`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--bg), 1);
  color: transparent;
  text-align: right;
  letter-spacing: 18px;
  line-height: 150%;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  box-sizing: border-box;
`;

export const SubBox1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0 100px 0;
`;
export const SubBox2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
 align-items: flex-end;
`;

export const Item = styled.div`
  width: 576px;
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
`;

SubBox2.Item1 = styled.div`
  width: 576px;
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
`;
SubBox2.Item2 = styled.div`
  width: 576px;
  transition: all 0.25s ease;
  position: relative;
  z-index: 1;
  margin-top: 0;
`;

Box2.Img = styled.img`
  width: 100%;
  display: block;
`;

// Box2.Title = styled.h3`
//   padding: 20px 0;
// `;
Box2.Text = styled.p`
  font-size: 0.85rem;
  padding-left: 5px;
`;

Box2.Title2 = styled.h3`
  padding: 20px 0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--color), 1);
  color: transparent;
  font-family: Monument, sans-serif !important;
`;
Box2.Title = styled.h3`
  padding: 20px 5px;
  /* color: transparent; */
  font-family: Monument, sans-serif !important;
`;

export const BackText = styled.h2`
  font-size: 20rem;
  width: 100%;
  top: 0;
  left: 0;
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
  z-index: 0;
`;
