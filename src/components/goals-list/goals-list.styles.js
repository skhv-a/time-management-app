import styled, { css } from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

//Goals

const setStylesToGoalsContainer = ({ manageYourTimeSection }) => {
  if (manageYourTimeSection) {
    return css`
      width: 100%;

      grid-template-columns: repeat(auto-fit, 80%);

      margin: 0 auto;
    `;
  }
};

export const Goals = styled.div`
  width: 95%;
  height: calc(100% - 100px - 5vh);
  margin: 0 auto;
  margin-top: 5vh;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: min-content;
  row-gap: 35px;

  overflow-x: hidden;
  overflow-y: scroll;

  ${setStylesToGoalsContainer}
`;

//NothingMessage

export const NothingMessage = styled.span`
  color: white;

  font-family: RobotoCondensed-Light;
  font-size: 25px;
  min-height: 60px;

  background-color: #3b3dc5;

  margin: auto auto;
  padding: 25px;
  border-radius: 26px;

  ${scaleUpAnimation};

  @media only screen and (min-width: 1472px) {
    font-size: min(1.5vw, 28px);
  }
`;
