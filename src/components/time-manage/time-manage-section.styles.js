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
  display: flex;
  flex-direction: column;
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
  font-size: min(2vw, 32px);
  padding: 0 20px;

  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;

export const GoalsForTodayContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
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

export const Goals = styled.div`
  margin: 0 auto;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 1;
  margin: 35px 0;
  overflow: scroll;
`;

export const GoalItem = styled.div`
  width: 80%;
  background-color: #272187;
  border-radius: 26px;
  font-family: Roboto-Regular;
  color: white;
  text-align: left;
  font-size: min(2vw, 30px);
  padding: 25px;
  display: flex;
  align-self: center;
  align-items: center;
  cursor: pointer;
`;

export const AddGoalContainer = styled.div`
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #211c74;
  ${flexCenter}
  align-self: flex-end;
`;

export const AddButton = styled(addButtonSVG)`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;
