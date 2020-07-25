import React from 'react';

import {
  AuthContainer,
  StyledSpan,
  MobileContainer,
  ArrowDown,
  ArrowUp,
  MobileArrowContainer,
  ArrowLink,
  MobileFormContainer,
} from './auth.styles';

import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

import useSignIn from '../../custom-hooks/use-sign-in';
import useSignUp from '../../custom-hooks/use-sign-up';

import SignInInputs from '../sign-in-inputs/sign-in-inputs.component';
import SignUpInputs from '../sign-up-inputs/sign-up-inputs.component';

const Auth = () => {
  const signInUtils = useSignIn();
  const signUpUtils = useSignUp();
  const isMobile = window.matchMedia('(max-width:900px)').matches;
  return (
    <AuthContainer
      signInFullScreen={signInUtils.signInProps.isSignInFullScreen}
      signUpFullScreen={signUpUtils.signUpProps.isSignUpFullScreen}
      isMobile={isMobile}
    >
      {isMobile ? (
        <React.Fragment>
          <MobileContainer id="signIn">
            <MobileFormContainer>
              <StyledSpan>Log in</StyledSpan>
              <SignInInputs />
            </MobileFormContainer>

            <MobileArrowContainer style={{ bottom: '0px' }}>
              <ArrowDown />
              <ArrowLink href="#signUp" />
            </MobileArrowContainer>
          </MobileContainer>

          <MobileContainer signUp id="signUp">
            <MobileArrowContainer style={{ top: '0px' }}>
              <ArrowUp />
              <ArrowLink href="#signIn" />
            </MobileArrowContainer>

            <MobileFormContainer>
              <StyledSpan style={{ marginBottom: '35px' }}>
                Create account
              </StyledSpan>
              <SignUpInputs />
            </MobileFormContainer>
          </MobileContainer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SignIn utils={signInUtils} />
          <SignUp utils={signUpUtils} />
        </React.Fragment>
      )}
    </AuthContainer>
  );
};

export default Auth;
