import styled, { css } from 'styled-components';

import { ReactComponent as Logo } from '../../assets/clock.svg';
import { CustomButton } from '../custom-button/custom-button.styles';

const apearAnimation = css`
  -webkit-animation: scale-up-center 0.5s ease-out both;
  animation: scale-up-center 0.5s ease-out both;
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
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

const addDisapearAnimation = ({ isClicked }) => {
  if (isClicked) {
    return css`
      -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      @-webkit-keyframes slide-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100% {
          -webkit-transform: translateY(-100vh);
          transform: translateY(-100vh);
        }
      }
      @keyframes slide-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100% {
          -webkit-transform: translateY(-100vh);
          transform: translateY(-100vh);
        }
      }
    `;
  }
};

export const IntroductionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${addDisapearAnimation}

  ${Title}, ${StyledLogo}, ${CustomButton} {
    ${apearAnimation}
  }

`;
