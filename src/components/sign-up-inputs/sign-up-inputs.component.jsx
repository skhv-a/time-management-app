import React, { useContext, useState } from 'react';
import { Container } from '../sign-in-inputs/sign-in-inputs.styles';
import { StyledInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';

import useSignUpInputs from '../../custom-hooks/use-sign-up-inputs';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../apollo-gqls/sign-up.gql';
import { canRender } from '../../reducers/homepage/homepage.actions';
import { HomepageContext } from '../../contexts/homepage/homepage.context';
import { ModalWarning } from '../modal-warning/modal-warning.styles';
import { validation, localStorageDataLoader } from '../../utils';

const SignUpInputs = () => {
  const {
    inputsChangers: {
      setEmailOnInput,
      setPasswordOnInput,
      setConfirmPasswordOnInput,
      setUsernameOnInput,
    },
    inputsValues: { email, username, password, confirmPassword },
  } = useSignUpInputs();
  const [signUp] = useMutation(SIGN_UP, {
    update(cache, { data }) {
      localStorageDataLoader(data.signUp.sessionToken);
    },
  });
  const { dispatch } = useContext(HomepageContext);
  const [errorMessage, setErrorMessage] = useState('');

  const isValid = validation(email, username, password, confirmPassword);

  const handleClick = async () => {
    try {
      if (password !== confirmPassword) {
        return setErrorMessage('Passwords should be match');
      }
      if (password.length <= 5) {
        return setErrorMessage('Password length should be at least 6');
      }
      await signUp({ variables: { username, email, password } });
      dispatch(canRender);
    } catch (error) {
      setErrorMessage(error.message.replace('GraphQL error: ', ''));
    }
  };

  return (
    <React.Fragment>
      {errorMessage ? <ModalWarning>{errorMessage}</ModalWarning> : null}
      <Container style={{ height: '400px' }}>
        <StyledInput
          placeholder={'username...'}
          type="text"
          onInput={setUsernameOnInput}
          required
        />
        <StyledInput
          placeholder={'email...'}
          type="email"
          onInput={setEmailOnInput}
          required
        />

        <StyledInput
          placeholder={'password...'}
          type="password"
          onInput={setPasswordOnInput}
          required
        />
        <StyledInput
          placeholder={'confirm password...'}
          type="password"
          onInput={setConfirmPasswordOnInput}
          required
        />

        <CustomButton
          onClick={handleClick}
          disabled={!isValid}
          style={{ backgroundColor: '#3b3dc5' }}
        >
          Sign up
        </CustomButton>
      </Container>
    </React.Fragment>
  );
};

export default SignUpInputs;
