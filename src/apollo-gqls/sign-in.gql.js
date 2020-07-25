import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    logIn(fields: { username: $username, password: $password }) {
      id
      username
      email
      sessionToken
    }
  }
`;
