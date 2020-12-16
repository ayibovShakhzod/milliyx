import styled from 'styled-components';

export const ContSlider = styled.div``;

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateY(-100%);
  text-align: right;
  font-style: italic;
  font-family: poppins;
  font-size: .8rem;
  font-weight: 400;
  padding: 15px 30px;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 200;
  border: 0 solid rgba(var(--color), 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  transition: all 0.25s ease;
  display: block;
  outline: none;
  margin: 0;
  object-fit: cover;
  ${({ active }) => (active ? 'opacity: 1; visibility: visible; transform: scale(1);' : 'transform: scale(1.1); opacity: 0; visibility: hidden;')};
`;

export const FrontText = styled.div`
  position: absolute;
  bottom: 40%;
  left: 0;
  background: transparent;
  z-index: 300;
  color: rgba(var(--bg), 1);
  padding: 8px 15px;
  font-size: 0.75rem;
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease;
  overflow: hidden;
  pointer-events: none;
  font-style: italic;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(var(--color),1);
  }
`;
export const Title = styled.div`
  transition: all 0.25s ease;
  display: block;
  position: absolute; 
  transform: translate(-150%) scale(0); 
  visibility: hidden; 
  opacity: 0;
  &.active {
    opacity: 1;
    position: relative;
    visibility: visible;
    transform: translate(0) scaleX(1);
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0px;
  z-index: 300;
`;
export const ConFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  padding: 0px 20px;
`;
export const Text = styled.div`
  transition: all 0.25s ease;
  display: block;
  font-size: .9rem;
  ${({ active }) => (active ? 'opacity: 1; position: relative; visibility: visible; transform: translate(0) scaleX(1);' : 'position: absolute;  transform: translate(0, -150%) scale(0);  visibility: hidden;  opacity: 0;')}
`;
export const Indicators = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Indicator = styled.li`
  width: 10px;
  height: 25px;
  padding: 8px;
  opacity: ${({ active }) => (active ? '1' : '.15')};
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
    background: rgba(var(--color), 1);
  }
  &:hover{
    opacity: ${({ active }) => (active ? '1' : '.25')};;
  }
`;
