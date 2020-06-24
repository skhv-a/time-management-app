import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/clock.svg';
import { CustomButton } from '../custom-button/custom-button.styles';
import {
  scaleUpAnimation,
  slideToTopAnimation,
} from '../../animations/animations';

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
    return slideToTopAnimation;
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
    ${scaleUpAnimation}
  }

`;
