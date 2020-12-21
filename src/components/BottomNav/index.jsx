import React from 'react';
import {
  Container,
  ConLeft,
  Item,
  Link,
  GitHub,
  Instagram
} from './style';

export default () => (
  <Container>
    <ConLeft>
      <Item>
        <Link href="#">
          <GitHub />
        </Link>
      </Item>
      <Item>
        <Link href="#">
          <Instagram />
        </Link>
      </Item>
    </ConLeft>
  </Container>
);
