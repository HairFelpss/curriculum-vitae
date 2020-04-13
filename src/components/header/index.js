import React from 'react';
import { Nav, Title, Icons } from './styles';
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from '@styled-icons/boxicons-logos';
import { Email } from '@styled-icons/entypo/Email';

const Header = () => {
  return (
    <Nav>
      <Title>PAPO 10 E POESIA</Title>
      <Icons>
        <Facebook size='16' />
        <Linkedin size='16' />
        <Instagram size='16' />
        <Email size='16' />
        <Twitter size='16' />
      </Icons>
    </Nav>
  );
};

export default Header;
