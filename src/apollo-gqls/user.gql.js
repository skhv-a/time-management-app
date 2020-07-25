import { gql } from '@apollo/client';

export const CURRENT_USER_DATA = gql`
  query Me {
    viewer {
      id
      username
      email
      userGoals {
        results {
          title
          description
          isDone
          id
        }
      }
      sessionToken
    }
  }
`;
