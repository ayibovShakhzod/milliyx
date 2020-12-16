import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  max-height: 1000px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const BackTitle = styled.h3`
  position: absolute;
  font-size: 20rem;
  width: 100%;
  top: 10%;
  left: -15%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--color), 0.05);
  color: transparent;
  text-align: center;
  letter-spacing: 30px;
  white-space: nowrap;
  z-index: 100;
  user-select: none;
  font-family: Monument !important;
  font-weight: 400;
  padding: 0;
  margin: 0;
  z-index: 0;
`;

export const ConSlide1 = styled.div`
  width: 420px;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  margin-right: 24px;
`;
export const ConSlide2 = styled.div`
  width: 500px;
  height: 420px;
  position: relative;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 3rem;
  padding: 0 24px;
`;

const lineAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: calc(100% + 38px);
    height:2px;
    background: rgba(var(--color), 1);
  }
  75% {
    width: calc(100% + 38px);
    height: 120%;
    background: rgba(var(--color), 1);  
  }
  100% {
    width: calc(100% + 38px);
    height:100%;
    background: rgba(var(--color), 1);
  }
`;

export const Line = styled.div`
  display: inline;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -24px;
    animation: ${lineAnimation} 2s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`;
export const MixText = styled.div`
  mix-blend-mode: difference;
  position: relative;
  z-index: 99;
  display: inline;
  color: rgba(var(--bg), 1);
  & p {
    position: absolute;
    top: 0;
    right: -14px;
    font-size: 1rem;
  }
`;
