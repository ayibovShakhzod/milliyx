import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 24px;
  color: rgba(var(--color), 1);
  background: transparent;
  z-index: 4000;
  transition: padding 0.3s ease, boxShadow 0.3s ease;
  box-shadow: 0 0 37px 0 transparent;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
`;

Nav.Bg = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  position: absolute;
  pointer-events: none;
  width: 100%;
  background: rgba(var(--bg),.5);
  backdrop-filter: saturate(180%) blur(20px);
`;

Nav.Logo = styled.div`
  position: absolute;
  left: 20px;
`;
Nav.LogoImg = styled.img`
  transition: all 0.3s ease;
  width: 150px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

List.Item = styled.li`

`;
List.Link = styled.a`
  padding: 15px 25px;
  display: block;
  font-size: .75rem;
  text-decoration: none;
  color: rgba(var(--color), 1);
  opacity: .5;
  position: relative;
  transition: all .2s ease;
  text-transform: capitalize;
  font-family: poppins;
  &:hover{
    opacity: 1;
  }
`;
