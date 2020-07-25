import React from 'react';
import {
  SignUpContainer,
  ArrowContainer,
  StyledSpan,
} from '../auth/auth.styles';

import { CustomButton } from '../custom-button/custom-button.styles';

import { ReactComponent as LeftArrow } from '../../assets/back.svg';

import SignUpInputs from '../sign-up-inputs/sign-up-inputs.component';

const SignUp = ({
  utils: {
    signUpProps: { isSignUpClicked, isSignUpFullScreen },
    signUpPropsChangers: {
      setFullWidth,
      setSignUpWidthDefault,
      setIsSignUpClickedDefault,
    },
  },
}) => {
  return (
    <SignUpContainer
      style={{
        zIndex: isSignUpClicked ? '1' : '0',
      }}
      onAnimationEnd={() => {
        if (!isSignUpFullScreen) {
          setIsSignUpClickedDefault();
        }
      }}
    >
      {isSignUpFullScreen ? (
        <React.Fragment>
          <SignUpInputs />
          <ArrowContainer left onClick={setSignUpWidthDefault}>
            <LeftArrow style={{ fill: 'white' }} />
          </ArrowContainer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledSpan>I do not have an account</StyledSpan>
          <CustomButton onClick={setFullWidth}>Sign up</CustomButton>
        </React.Fragment>
      )}
    </SignUpContainer>
  );
};

export default SignUp;
