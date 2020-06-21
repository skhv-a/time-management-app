import React, { useContext, useState } from 'react';

import { HomepageContext } from '../../contexts/homepage/homepage.context';

import {
  IntroductionContainer,
  Title,
  StyledLogo,
  StartButton,
} from './introduction.styles.js';

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
      <StartButton onClick={() => setClicked(!isClicked)}>
        Lets work
      </StartButton>
    </IntroductionContainer>
  );
};

export default Introduction;
