import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/clock.svg';

export const HomepageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #3b3dc5 25%, #ef820d 95%);
`;

export const Title = styled.span`
  font-family: Roboto-Medium;
  font-size: 73px;
  color: #ffffff;
`;

export const StyledLogo = styled(Logo)`
  margin: 100px 0;
  width: 100px;
  height: 100px;
  fill: white;
`;

export const StyledButton = styled.button`
  font-family: Roboto-Regular;

  cursor: pointer;
  outline: none;

  width: 250px;
  height: 85px;
  background: #ffa500;
  color: #ffffff;
  text-transform: uppercase;

  border: none;
  border-radius: 25px;
  font-size: 33px;
`;
