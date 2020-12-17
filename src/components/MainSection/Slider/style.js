import styled from 'styled-components';

export const ContSlider = styled.div`
  width: 100%;
  height: 100%;
  border: 0 solid rgba(var(--color), 1);
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
`;
export const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(var(--bg), 1);
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  z-index:9;
  visibility: hidden;
`;
export const Images = styled.div`
  overflow: hidden;
  width: calc(100% - 60px);
  height: 100%;
  position: relative;
`;
export const Body = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  overflow: hidden;
  top: 0;
  right: 0px;          
  width: 100%;
  position: absolute;
  height: 100%;
  transition: all 0.25s ease-in-out;
  display: block;
  outline: none;
  margin: 0;
  object-fit: cover;
  ${({ active }) => (active ? 'opacity: 1; visibility: visible; transform: scale(1)' : 'transform: scale(1.1); opacity: 0; visibility: hidden;')};
`;

export const FrontText = styled.div`
  background: transparent;
  color: rgba(var(--color), 1);
  padding: 8px 15px;
  font-size: 1rem;
  transform: rotate(-90deg);
  transition: all 0.2s ease;
  pointer-events: none;
  font-style: italic;
  height: 100px;
  width: 120px;
  text-align: center;
  background-color: rgba(var(--bg), 1);
`;

export const Title = styled.div`
  transition: all 0.5s ease-in-out;
  display: block;
  transform: translateY(150px) scale(1.1); 
  visibility: hidden; 
  opacity: 0;
  white-space: nowrap;
  mix-blend-mode: difference;
  color: rgba(var(--bg), 1);
  position: absolute;
  &.active {
    opacity: 1;
    position: relative;
    visibility: visible;
    transform: translate(0) scale(1);
  }
`;

export const Footer = styled.div`
  width:60px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 8;
  color: rgba(var(--bg), 1);
  background-color: rgba(var(--color), 1);
`;

export const Text = styled.div`
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  white-space: nowrap;
  pointer-events: none;
  ${({ active }) => (active ? 'opacity: 1; visibility: visible; transform: rotate(-90deg) translate(0) scaleX(1); position: relative;' : 'opacity: 0; visibility: hidden; transform: rotate(-90deg) translateX(-50px) scale(1.3); position: absolute;')};
`;

export const Indicators = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  z-index: 9;
  transform: rotate(-90deg);
`;

export const Indicator = styled.li`
  width: 2px;
  height: 25px;
  padding: 8px;
  opacity: ${({ active }) => (active ? '1' : '.25')};
  transition: all 0.2s ease;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 2px;
    height: 90%;
    background: rgba(var(--bg), 1);
  }
  &:hover{
    opacity: ${({ active }) => (active ? '1' : '.35')};;
  }
`;
