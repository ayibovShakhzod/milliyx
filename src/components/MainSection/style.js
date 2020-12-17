import styled from 'styled-components';

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
  bottom: 0%;
  left: -15%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(var(--color), 0.2);
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
  width: 40%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 4rem;
  padding: 0 24px;
  width: 60%;
  .title{
    transform: translateY(0px);
  }
`;

export const Line = styled.div`
    position: absolute;
    top: 0;
    left: -24px;
    background: rgba(var(--color), 1);
    height: 2px;
`;
export const Name = styled.div`
  display: inline;
  position: relative;
`;

export const MixText = styled.div`
  mix-blend-mode: difference;
  position: relative;
  z-index: 99;
  display: inline;
  color: rgba(var(--bg), 1);
  transform: translateY(0px);
  & p {
    position: absolute;
    top: 0;
    right: -14px;
    font-size: 1rem;
  }
`;
