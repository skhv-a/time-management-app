import React, { useContext, useState } from 'react';

import { HomepageContext } from '../../contexts/homepage/homepage.context';

import {
  IntroductionContainer,
  Title,
  StyledLogo,
} from './introduction.styles.js';
import { CustomButton } from '../custom-button/custom-button.styles';

import { canRender } from '../../reducers/homepage/homepage.actions';

const Introduction = () => {
  const [isClicked, setClicked] = useState(false);
  const { dispatch } = useContext(HomepageContext);

  return (
    <IntroductionContainer
      isClicked={isClicked}
      onAnimationEnd={() => (isClicked ? dispatch(canRender) : null)}
    >
      <Title>Be productive today!</Title>
      <StyledLogo />
      <CustomButton
        startButton
        isMobile={window.matchMedia('(max-width:375px)').matches}
        onClick={() => setClicked(!isClicked)}
      >
        Lets work
      </CustomButton>
    </IntroductionContainer>
  );
};

export default Introduction;
