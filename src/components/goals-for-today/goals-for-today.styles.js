import styled from 'styled-components';
import { ReactComponent as LogOutIcoSvg } from '../../assets/logout.svg';

export const GoalsForTodayContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex: 1;
  flex-direction: column;
  /* overflow-y: scroll; */
`;

export const GoalsForTodayHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #211c74;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-left: 10%;
  @media only screen and (max-width: 700px) {
    border-radius: 15px;
  }
`;

export const GoalsForTodayTitle = styled.span`
  font-family: Roboto-Regular;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (min-width: 1401px) {
    font-size: min(2vw, 28px);
  }
`;

export const LogOut = styled(LogOutIcoSvg)`
  display: block;
  width: 45px;
  height: 45px;

  position: absolute;
  right: 10%;

  fill: #757575;
  cursor: pointer;
  &:hover {
    fill: white;
    transition: 0.3s;
  }
`;
