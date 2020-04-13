import styled from 'styled-components';

export const Gradient = styled.div`
  background: linear-gradient(10deg, #2d3d46, #07131d);
  border-radius: 30px;
  margin: 1vh auto;
  width: 50%;
`;

export const Container = styled.section`
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
`;

export const JobLogo = styled.div`
  display: flex;
  border-radius: ${(props) =>
    props.radius ? '0 25px 25px 0' : '25px 0 0 25px'};
  background-color: ${(props) => props.background};
  min-width: 20%;
`;

export const JobInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 3vh 3vw;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: calc(16px + 0.6vw);
  font-weight: 600;
  padding: 0 0 2vh 0;
`;

export const Text = styled.p`
  color: #f5f5f5;
  font-size: calc(14px + 0.4vw);
  text-align: left;
`;
