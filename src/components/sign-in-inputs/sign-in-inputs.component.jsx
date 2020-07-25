import React, { useContext, useState } from 'react';
import { Container } from './sign-in-inputs.styles';
import { StyledInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';

import useSignInInputs from '../../custom-hooks/use-sign-in-inputs';

import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../apollo-gqls/sign-in.gql';

import { HomepageContext } from '../../contexts/homepage/homepage.context';
import { canRender } from '../../reducers/homepage/homepage.actions';

import { ModalWarning } from '../modal-warning/modal-warning.styles';
import { validation, localStorageDataLoader } from '../../utils';

const SignInInputs = () => {
  const {
    inputsChangers: { setUsernameOnInput, setPasswordOnInput },
    inputsValues: { username, password },
  } = useSignInInputs();
  const [signIn] = useMutation(SIGN_IN, {
    update(cache, { data }) {
      localStorageDataLoader(data.logIn.sessionToken);
    },
  });

  const { dispatch } = useContext(HomepageContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = async () => {
    try {
      await signIn({ variables: { username, password } });
      dispatch(canRender);
    } catch (error) {
      setErrorMessage(error.message.replace('GraphQL error: ', ''));
    }
  };

  const isValid = validation(username, password);

  return (
    <React.Fragment>
      {errorMessage ? <ModalWarning>{errorMessage}</ModalWarning> : null}

      <Container>
        <StyledInput
          placeholder={'username...'}
          type={'text'}
          onInput={setUsernameOnInput}
          required
        />
        <StyledInput
          placeholder={'password...'}
          type={'password'}
          onInput={setPasswordOnInput}
          required
        />
        <CustomButton onClick={handleClick} disabled={!isValid}>
          Sign in
        </CustomButton>
      </Container>
    </React.Fragment>
  );
};

export default SignInInputs;
