import React from 'react';

import { ReactComponent as RightArrow } from '../../assets/next.svg';

import {
  SignInContainer,
  ArrowContainer,
  StyledSpan,
} from '../auth/auth.styles';

import { CustomButton } from '../custom-button/custom-button.styles';

import SignInInputs from '../sign-in-inputs/sign-in-inputs.component';

const SignIn = ({
  utils: {
    signInProps: { isSignInClicked, isSignInFullScreen },
    signInPropsChangers: {
      setFullWidth,
      setSignInWidthDefault,
      setIsSignInClickedDefault,
    },
  },
}) => {
  return (
    <SignInContainer
      style={{
        zIndex: isSignInClicked ? '1' : '0',
      }}
      onAnimationEnd={() => {
        if (!isSignInFullScreen) {
          setIsSignInClickedDefault();
        }
      }}
    >
      {isSignInFullScreen ? (
        <React.Fragment>
          <SignInInputs />
          <ArrowContainer right onClick={setSignInWidthDefault}>
            <RightArrow style={{ fill: 'white' }} />
          </ArrowContainer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledSpan>I already have an account</StyledSpan>
          <CustomButton type={'button'} onClick={setFullWidth}>
            Sign in
          </CustomButton>
        </React.Fragment>
      )}
    </SignInContainer>
  );
};

export default SignIn;
