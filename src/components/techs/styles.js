import styled from 'styled-components';

export const Gradient = styled.div`
  display: block;
  background: linear-gradient(10deg, #2d3d46, #07131d);
  height: 100%;
  width: 98%;
  border-radius: 30px;
  margin-bottom: 6vh;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f5f5f5;
  text-align: center;
  margin-bottom: 5vh;

  @media only screen and (max-width: 1120px) {
    height: 100%;
  }
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
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2vh 0;
  margin: 2vh auto;
  width: 70vw;
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 2vh 30vw;

  @media only screen and (max-width: 1000px) {
    margin: 2vh 15vw;
  }
  @media only screen and (max-width: 600px) {
    margin: 2vh 5vw;
  }
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
`;
