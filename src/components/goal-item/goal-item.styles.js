import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const Goal = styled.div`
  min-height: 60px;
  width: 80%;

  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;

  background-color: #272187;
  border-radius: 26px;
  padding: 0 25px;
  margin: 25px 0;

  font-family: Roboto-Regular;
  color: white;
  font-size: min(2vw, 30px);
  cursor: pointer;

  overflow-wrap: break-word;
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
`;

export const GoalTitle = styled.div`
  width: 100%;
  height: 60px;
  background-color: #3b3dc5;
  border-radius: 26px 26px 0 0;
  padding-left: 25px;
  font-family: Roboto-Regular;
  font-size: 25px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

export const GoalDescription = styled.div`
  background-color: white;
  width: 100%;
  padding: 25px;
  border-radius: 0 0 26px 26px;
  font-family: RobotoCondensed-Regular;
  font-size: 25px;
  color: #494949;
`;
