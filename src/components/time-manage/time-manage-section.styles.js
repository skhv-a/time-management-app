import styled, { css } from 'styled-components';

import { ReactComponent as addButtonSVG } from '../../assets/add.svg';

const appearAnimation = css`
  animation: extend 0.4s ease-in both;
  @keyframes extend {
    0% {
      top: 100vh;
    }
    100% {
      top: 0px;
    }
  }
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeManageSectionContainer = styled.div`
  width: 25%;
  height: 100vh;
  position: absolute;

  ${appearAnimation}
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  ${flexCenter};
  align-items: flex-end;
`;

export const LogoContainer = styled.div`
  max-width: 380px;
  height: 70px;
  background-image: linear-gradient(90deg, #3b3dc5 25%, #ef820d 95%);
  border: 2px solid #ffa100;
  border-radius: 26px;
  ${flexCenter}
`;

export const LogoTitle = styled.span`
  font-family: Roboto-Medium;
  font-size: min(2vw, 34px);
  padding: 0 20px;

  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 140px;
  ${flexCenter}
`;

export const Search = styled.input`
  max-width: 300px;
  height: 30px;
  outline: none;
  border-radius: 25px;
  padding: 25px;
  border: none;

  font-family: RobotoCondensed-Light;
  font-size: 25.5px;
  color: #595959;
  text-align: left;
`;

export const GoalsForTodayContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const GoalsForTodayHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #211c74;
  ${flexCenter};
`;

export const GoalsForTodayTitle = styled.span`
  font-family: Roboto-Regular;
  font-size: min(2vw, 28px);
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;

export const AddGoalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #211c74;
  ${flexCenter}
`;

export const AddButton = styled(addButtonSVG)`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;
