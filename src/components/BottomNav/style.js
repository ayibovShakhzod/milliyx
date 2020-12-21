import styled from 'styled-components';
import { ReactComponent as gitHub } from '../../assets/img/gitHub.svg';
import { ReactComponent as instagram } from '../../assets/img/instagram.svg';

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 20px 24px;
  z-index: 3000;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: rgba(var(--color), 1);
`;
const svgStyle = {
  fill: 'rgba(var(--color), 1);',
  'max-width': '19px;',
  transition: 'all 0.25s ease;'
};
export const GitHub = styled(gitHub)`
  ${svgStyle};
`;
export const Instagram = styled(instagram)`
  ${svgStyle};
`;

export const ConLeft = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li``;

export const Link = styled.a`
  padding: 10px;
  text-decoration: none;
  position: relative;
  display: block;
  transition: all 0.2s ease 0.2s;
  border: 1px solid transparent;
  display: flex;
`;
