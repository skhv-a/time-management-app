import styled, { css } from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

//Goals

const setStylesToGoalsContainer = ({ whichComponent }) => {
  if (whichComponent.inProcess) {
    return css`
      width: 95%;
      height: calc(100% - 100px - 5vh);

      margin-top: 5vh;

      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 240px);
      grid-auto-rows: min-content;
      row-gap: 35px;
    `;
  }
};

export const Goals = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-self: center;

  flex: 1;

  overflow-x: hidden;
  overflow-y: scroll;

  margin: 0 auto;

  ${setStylesToGoalsContainer}
`;

//NothingMessage

const nothingInProcessMessageStyles = css`
  font-family: Roboto-Regular;
  font-size: min(2vw, 28px);
  height: calc(95vh - 100px);
`;

const setStylesToNothingMessage = ({
  hasFound,
  whichComponent: { inProcess },
}) => {
  if (hasFound && inProcess) {
    return css`
      ${scaleUpAnimation};
      ${nothingInProcessMessageStyles}
    `;
  } else if (hasFound) {
    return scaleUpAnimation;
  } else if (inProcess) {
    return nothingInProcessMessageStyles;
  }
};

export const NothingMessage = styled.span`
  font-family: RobotoCondensed-Light;
  font-size: min(1.5vw, 28px);
  color: white;

  margin: auto auto;

  ${setStylesToNothingMessage};
`;
