import styled, { css } from 'styled-components';

import { scaleUpAnimation } from '../../animations/animations';
import { ReactComponent as Arrow } from '../../assets/next.svg';

const transition = (name) =>
  css`
    transition: ${name} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  `;

const overlayAnimation = (topElement) => {
  return css`
    ${topElement} {
      width: 100vw;
    }
  `;
};

const setStylesFromProps = ({
  signInFullScreen,
  signUpFullScreen,
  isMobile,
}) => {
  if (signInFullScreen) {
    return overlayAnimation(SignInContainer);
  }

  if (signUpFullScreen) {
    return overlayAnimation(SignUpContainer);
  }

  //Mobile------------------------------------

  if (isMobile) {
    return css`
      display: flex;
      flex-direction: column;

      overflow-y: scroll;
    `;
  }
};

export const MobileContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ signUp }) =>
    signUp
      ? css`
          background-color: #ff932e;
        `
      : null}
`;

export const MobileArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  width: 75px;
  height: 75px;
`;

export const MobileFormContainer = styled(MobileArrowContainer)`
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const ArrowLink = styled.a`
  position: absolute;

  display: block;
  width: 75px;
  min-height: 75px;
`;

const arrow = css`
  width: 75px;
  height: 75px;
  fill: white;
`;

export const ArrowDown = styled(Arrow)`
  ${arrow};
  transform: rotate(90deg);
`;

export const ArrowUp = styled(Arrow)`
  ${arrow};
  transform: rotate(-90deg);
`;

//------------------------

const setArrowStylesFromProps = (props) => {
  return css`
    ${props.right ? ' right: 0;' : ' left: 0;'};
  `;
};

const container = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: absolute;

  ${transition('width')}
  button {
    width: 250px;
  }
`;

export const ArrowContainer = styled.div`
  width: 100px;
  height: 100px;
  opacity: 0.5;

  position: absolute;
  right: 0;

  cursor: pointer;
  &:hover {
    width: 105px;
    height: 105px;
    opacity: 0.7;
    ${transition('all')}
  }
  ${setArrowStylesFromProps}
`;

export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  button {
    ${scaleUpAnimation}
  }

  ${setStylesFromProps}
`;

export const StyledSpan = styled.span`
  font-family: Roboto-Regular;
  font-size: 30px;
  color: white;
  text-transform: uppercase;

  margin-bottom: 50px;
  ${scaleUpAnimation}
`;

export const SignInContainer = styled(container)`
  background-color: #3b3dc5;

  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;

export const SignUpContainer = styled(container)`
  background-color: #ff932e;
  right: 0;

  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
