import React, { useContext, useState } from 'react';

import { HomepageContext } from '../../contexts/homepage/homepage.context';

import {
  IntroductionContainer,
  Title,
  StyledLogo,
  StartButton,
} from './introduction.styles.js';

const Introduction = () => {
  const [isClicked, setClicked] = useState(false);
  const { actions, dispatch } = useContext(HomepageContext);

  return (
    <IntroductionContainer
      isClicked={isClicked}
      onAnimationEnd={() =>
        isClicked ? dispatch({ type: actions.CAN_RENDER }) : null
      }
    >
      <Title>Be productive today!</Title>
      <StyledLogo />
      <StartButton onClick={() => setClicked(!isClicked)}>
        Lets work
      </StartButton>
    </IntroductionContainer>
  );
};

export default Introduction;
