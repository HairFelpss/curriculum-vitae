import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #141a20;
  width: 100vw;
  height: 20vh;
  border-top: 0.5px solid black;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #f5f5f5;
  font-weight: 600;
  margin: 1vh 3vw;
  text-align: center;
`;

export const Icons = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vh 0;
  margin: 0 auto;
  width: 20vw;
`;
