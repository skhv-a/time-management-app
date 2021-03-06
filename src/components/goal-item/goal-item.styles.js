import styled, { css } from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

//!CustomStyles

export const setDoneStyles = ({ isDone }) => {
  if (isDone) {
    return css`
      background-color: #ef820d;
      transition: background-color 0.3s;
    `;
  }
};

const setBorder = ({ makeRound }) => {
  if (makeRound) {
    return css`
      border-radius: 26px;
    `;
  }
};

const setCustomGoalTitleStyles = ({ manageYourTimeSection }) => {
  if (manageYourTimeSection) {
    return css`
      justify-content: flex-start;

      background-color: #272187;
      border-radius: 26px;

      font-size: 22px;

      cursor: pointer;

      flex-wrap: wrap;

      ${scaleUpAnimation}
      ${setDoneStyles}

      &:first-child {
        margin-top: 50px;
      }

      &:last-child {
        margin-bottom: 50px;
      }

      @media only screen and (min-width: 1472px) {
        font-size: min(2vw, 30px);
      }
    `;
  }
};

//!Styled Components

export const InProcessGoalItem = styled.div`
  width: 80%;
  max-height: 250px;

  display: flex;
  justify-self: center;

  flex-direction: column;

  cursor: pointer;
  ${scaleUpAnimation}
`;

export const CustomGoalTitle = styled.div`
  width: 100%;
  min-height: fit-content;
  background-color: #3b3dc5;
  border-radius: 26px 26px 0 0;
  padding: 10px 25px;
  font-family: Roboto-Regular;
  font-size: 25px;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  word-break: break-word;
  ${setBorder}
  ${setDoneStyles}
  ${setCustomGoalTitleStyles}
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
