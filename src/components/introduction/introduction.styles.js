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
  @media only screen and (max-width: 700px) {
    font-size: min(65px, 15vw);
    word-spacing: 100vw;
    width: 250px;
    margin: 50px auto 0 auto;
    overflow: visible;
  }
`;

export const StyledLogo = styled(Logo)`
  margin: 100px 0;
  width: 100px;
  height: 100px;
  fill: white;
  @media only screen and (max-width: 700px) {
    margin: 20px 150px 70px 0;
    width: 85px;
    height: 85px;
  }
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

  @media only screen and (max-width: 375px){
    justify-content: flex-start;
  }

`;
