import styled from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';

export const Nav = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 6vh;
  border-bottom: 0.5px solid black;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #f5f5f5;
  font-weight: 600;
  margin: 0 3vw;
`;

export const Icons = styled.span`
  margin: 0 3vw;
  color: #f5f5f5;
  font-size: 24px;
`;

export const FB = styled(Facebook)`
  color: #f5f5f5;
`;
