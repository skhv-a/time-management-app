import styled, { css } from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const Goal = styled.div`
  min-height: 60px;
  width: 80%;

  display: inline-flex;
  word-break: break-word;
  justify-content: flex-start;
  align-self: center;
  align-items: center;

  background-color: #272187;
  border-radius: 26px;
  padding: 10px 25px;
  margin: 25px 0;

  font-family: Roboto-Regular;
  color: white;
  font-size: min(2vw, 30px);
  cursor: pointer;

  flex-wrap: wrap;
  ${scaleUpAnimation}

  &:first-child {
    margin-top: 50px;
  }
`;

export const InProcessGoalItem = styled.div`
  width: 80%;

  display: flex;
  justify-self: center;

  flex-direction: column;

  cursor: pointer;
  ${scaleUpAnimation}
`;

const setGoalTitle = ({ makeRound }) => {
  if (makeRound) {
    return css`
      border-radius: 26px;
    `;
  }
};

export const GoalTitle = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: #3b3dc5;
  border-radius: 26px 26px 0 0;
  padding: 10px 25px;
  font-family: Roboto-Regular;
  font-size: 25px;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  word-break: break-word;
  ${setGoalTitle}
`;

export const GoalDescription = styled.div`
  background-color: white;
  width: 100%;
  padding: 25px;
  border-radius: 0 0 26px 26px;
  font-family: RobotoCondensed-Regular;
  font-size: 25px;
  color: #494949;
  display: inline-flex;
  word-break: break-word;
`;
