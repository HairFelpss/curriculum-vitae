import React from 'react';
import { Gradient, Container, JobInfo, JobLogo, Title, Text } from './styles';
import coinext from '../../assets/worked/coinext.png';
import sysmap from '../../assets/worked/logo_sysmap.svg';
const KnowMore = () => {
  const style = {
    width: '100%',
    padding: '0 auto',
  };
  return (
    <>
      <Gradient>
        <Container>
          <JobLogo background='#009ade'>
            <img src={coinext} style={style} />
          </JobLogo>
          <JobInfo>
            <Title>Coinext Criptomoedas</Title>
            <Text>
              It's where I work now, we are a{' '}
              <strong>Criptocurrency Exchange</strong>, using{' '}
              <strong>Reactjs</strong> as my main JS framework and{' '}
              <strong>React-Native</strong> in the mobile app, a lot of
              functionalities in the front-end were written with{' '}
              <strong>Vanilla JS, HTML5 and CSS3</strong>, so I have to work not
              just with frameworks but with the core of the language, and in the
              backend, mostly part of the job is with nodejs, but sometimes I
              have to have fun with <strong>Python</strong> and{' '}
              <strong>Ruby</strong> aswell.
            </Text>
          </JobInfo>
        </Container>
      </Gradient>
      <Gradient>
        <Container>
          <JobInfo>
            <Title>SysMap Solutions</Title>
            <Text>
              I've worked on continuous improvement team at SysMap for 9 mounths
              as a Junior front-end Developer. Our team had as objective
              improving with software applications the productivity of the
              company and all contributors, I'm worked a lot with{' '}
              <strong>Reactjs</strong> and <strong>React-Native</strong> so I
              had to study <strong>Redux and Redux-Saga</strong> aswell to share
              data between components, besides that I really worked a lot with{' '}
              <strong>HTML5</strong> and <strong>CSS3</strong>, I had the
              opportunity to work with <strong>Vuejs</strong> in minor problems
              too.
              <strong>Vuejs</strong>
            </Text>
          </JobInfo>
          <JobLogo background='#f5f5f5' radius>
            <img src={sysmap} style={style} />
          </JobLogo>
        </Container>
      </Gradient>
    </>
  );
};

export default KnowMore;
