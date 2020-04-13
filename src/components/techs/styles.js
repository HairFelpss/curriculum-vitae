import styled from 'styled-components';

export const Gradient = styled.div`
  background: linear-gradient(10deg, #2d3d46, #07131d);
  height: 100%;
  width: 98%;
  border-radius: 30px;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f5f5f5;
  height: 40vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: calc(18px + 0.6vw);
  font-weight: 800;
  text-transform: uppercase;
  padding: 5vh;
`;

export const Text = styled.p`
  font-size: calc(16px + 0.4vw);
  font-weight: 500;
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vh 0;
  margin: 0 auto;
  width: 70vw;
`;

export const Show = styled.span`
  transform: rotate(-45deg);
  background-color: #07131d;
  border-radius: 3px;
  border: solid 2px #fff;
  display: inline-block;
  font-size: 1.35em;
  height: calc(3em + 2px);
  line-height: 3em;
  text-align: center;
  width: calc(3em + 2px);
  margin: 3vh 2vw;
`;
