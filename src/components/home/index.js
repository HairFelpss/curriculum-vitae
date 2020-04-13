import React from 'react';
import {
  Container,
  Profile,
  Img,
  Content,
  Border,
  Name,
  Introduction,
} from './styles';
import profile from '../../assets/profile/eu.jp2';

const Home = () => {
  return (
    <Container>
      <Profile>
        <Img src={profile} />
        <Content>
          <Border>
            <Name>Felipe Alves de Jesus</Name>
          </Border>
          <Introduction>
            Hey there! I'm glad to see you here! Welcome to my little Resume
          </Introduction>
        </Content>
      </Profile>
    </Container>
  );
};

export default Home;
