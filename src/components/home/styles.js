import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Profile = styled.div`
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  color: #f5f5f5;
  font-size: 14px;
  border: 0.5px solid #f5f5f5;

  @media screen and (max-width: 767px) {
    border: none;
    background-color: transparent;
  }
`;

export const Img = styled.img`
  width: 300px;
  border: 1.5px solid #202f37;
  border-radius: 50%;
  &:hover {
    animation: ${rotate360} infinite 10s linear;
  }
`;

export const Content = styled.div`
  width: calc(320px + 5vw);
  text-align: center;
`;

export const Border = styled.div`
  padding: 8px 0;
  margin: 16px 0;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;

export const Name = styled.h1`
  font-size: calc(18px + 0.6vw);
  font-weight: 800;
  text-transform: uppercase;
`;

export const Introduction = styled.p`
  font-size: calc(16px + 0.4vw);
  font-weight: 500;
`;
