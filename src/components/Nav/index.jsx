import React from 'react';
import { Nav, List } from './style';
import logo from '../../assets/img/logo.svg';

export default () => (
  <Nav>
    <Nav.Bg />
    <Nav.Logo>
      <a href="/">
        <Nav.LogoImg src={logo} />
      </a>
    </Nav.Logo>
    <List>
      <List.Item>
        <List.Link href="/">Home</List.Link>
      </List.Item>
      <List.Item>
        <List.Link href="/projects">Projects</List.Link>
      </List.Item>
      <List.Item>
        <List.Link href="/about">About</List.Link>
      </List.Item>
      <List.Item>
        <List.Link href="/contact">Contact us</List.Link>
      </List.Item>
    </List>
  </Nav>
);
