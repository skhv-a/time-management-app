import React from 'react';

import {
  HomepageContainer,
  Title,
  StyledLogo,
  StyledButton,
} from './homepage.styles';

const Homepage = () => (
  <HomepageContainer>
    <Title>Be productive today!</Title>
    <StyledLogo />
    <StyledButton>Lets work</StyledButton>
  </HomepageContainer>
);

export default Homepage;
