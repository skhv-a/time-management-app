import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String, $password: String!) {
    signUp(
      fields: { username: $username, email: $email, password: $password }
    ) {
      id
      username
      email
      sessionToken
      createdAt
    }
  }
`;
