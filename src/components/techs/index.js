import React from 'react';
import {
  Container,
  Gradient,
  Technologies,
  Show,
  Row,
  Title,
  Text,
} from './styles';
import {
  Javascript,
  Nodejs,
  ReactLogo,
  Redux,
  Css3,
  Html5,
} from '@styled-icons/boxicons-logos';
import { Code, CodeAlt } from '@styled-icons/boxicons-regular';
import { Docker } from '@styled-icons/fa-brands';
import { ReactComponent as ExpressLogo } from '../../assets/icons/express.svg';
import mongo from '../../assets/icons/mongodb.png';
import sequelize from '../../assets/icons/sequelize.png';
import postgres from '../../assets/icons/postgressql.png';
import mysql from '../../assets/icons/mysql.png';
import python from '../../assets/icons/python.png';
import firebase from '../../assets/icons/firebase.png';

const Tech = () => {
  const size = 50;
  const space = 10;
  const main = {
    transform: 'rotate(45deg)',
  };
  const imgs = [sequelize, mongo, postgres, mysql, firebase, python];
  return (
    <Container>
      <Gradient>
        <div>
          <Title>I'm working with...</Title>
          <Text>
            I'm now focused on working with Javascript ecossystem, developing my
            skills in MERN Stack and libs that improve my productivity.
          </Text>
          <Row>
            <Show>
              <ReactLogo size={size} color={'#61DBFB'} style={main} />
            </Show>
            <Show>
              <Javascript size={size} color={'#F0DB4F'} style={main} />
            </Show>
            <Show>
              <Nodejs size={size} color={'#68A063'} style={main} />
            </Show>
          </Row>
          <Technologies>
            <Code size={size} color={'#F5F5F5'} />
            <Html5 size={size} color={'#FF5733'} />
            <Css3 size={size} color={'#2965f1'} />
            <Redux size={size} color={'#764abc'} />
            <ExpressLogo
              fill={'#F5F5F5'}
              style={{ width: size, margin: `0 ${space}` }}
            />
            <Docker size={size} color={'#F5F5F5'} />
            {imgs.map((img) => (
              <img src={img} style={{ width: size }} alt='logo' />
            ))}
            <CodeAlt size={size} color={'#F5F5F5'} />
          </Technologies>
        </div>
      </Gradient>
    </Container>
  );
};

export default Tech;
