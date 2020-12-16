import React from 'react';
import { Nav } from './style';
import logo from '../../assets/img/logo.png';

export default () => (
  <Nav>
    <Nav.Bg />
    <Nav.Logo>
      <a href="/">
        <Nav.LogoImg src={logo} />
      </a>
    </Nav.Logo>
    dasd
  </Nav>
);
