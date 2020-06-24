import styled, { css } from 'styled-components';
import { slideFromBottonAnimation } from '../../animations/animations';

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeManageSectionContainer = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;

  ${slideFromBottonAnimation}
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  ${flexCenter};
  align-items: flex-end;
`;

export const LogoContainer = styled.div`
  max-width: 3;
  height: 70px;
  background-image: linear-gradient(90deg, #3b3dc5 25%, #ef820d 95%);
  border: 2px solid #ffa100;
  border-radius: 26px;
  ${flexCenter}
`;

export const LogoTitle = styled.span`
  font-family: Roboto-Medium;
  font-size: min(2vw, 32px);
  padding: 0 20px;

  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;
