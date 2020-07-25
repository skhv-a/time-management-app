import React, { useState } from 'react';

import {
  IntroductionContainer,
  Title,
  StyledLogo,
} from './introduction.styles.js';
import { CustomButton } from '../custom-button/custom-button.styles';

import Auth from '../auth/auth.component';

const Introduction = () => {
  const [isClicked, setClicked] = useState(false);

  return !isClicked ? (
    <IntroductionContainer>
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
  ) : (
    <Auth />
  );
};

export default Introduction;
