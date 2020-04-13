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
        <a href='https://www.facebook.com/felipe.alves.39566' target='_blank'>
          <FacebookSquare size={size} color={'#4267B2'} />
        </a>
        <a
          href='https://www.linkedin.com/in/felipe-alves-423647141/'
          target='_blank'
        >
          <LinkedinSquare size={size} color={'#0E76A8'} />
        </a>
        <a href='https://www.instagram.com/cinzagranito/' target='_blank'>
          <Instagram size={size} color={'#C13584'} />
        </a>
        <a href='mailto:fajreyy.bh@gmail.com' target='_blank'>
          <Email size={size} color={'#F5F5F5'} />
        </a>
        <a href='https://twitter.com/cinzagranito' target='_blank'>
          <Twitter size={size} color={'#00ACEE'} />
        </a>
      </Icons>
      <Title>PAPO 10 E POESIA</Title>
    </Container>
  );
};

export default Footer;
