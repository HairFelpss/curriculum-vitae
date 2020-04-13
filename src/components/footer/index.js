import React from 'react';
import { Container, Title, Icons } from './styles';
import {
  FacebookSquare,
  LinkedinSquare,
  Instagram,
  Twitter,
} from '@styled-icons/boxicons-logos';
import { Email } from '@styled-icons/entypo/Email';

const Footer = () => {
  const size = 50;
  return (
    <Container>
      <Icons>
        <FacebookSquare size={size} color={'#4267B2'} />
        <LinkedinSquare size={size} color={'#0E76A8'} />
        <Instagram size={size} color={'#C13584'} />
        <Email size={size} color={'#F5F5F5'} />
        <Twitter size={size} color={'#00ACEE'} />
      </Icons>
      <Title>PAPO 10 E POESIA</Title>
    </Container>
  );
};

export default Footer;
