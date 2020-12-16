import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  color: rgba(var(--color), 1);
  background: transparent;
  position: fixed;
  z-index: 4000;
  transition: padding 0.3s ease, boxShadow 0.3s ease;
  box-shadow: 0 0 37px 0 transparent;
  width: 100%;
  left: 0;
  top: 0;
`;

Nav.Bg = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  position: absolute;
  pointer-events: none;
  width: 100%;
`;

Nav.Logo = styled.div`
  position: absolute;
  left: 20px;
`;
Nav.LogoImg = styled.img`
  transition: all 0.3s ease;
  width: 150px;
`;
