import { gql } from '@apollo/client';

export const ADD_GOAL = gql`
  mutation updateUser($id: ID!, $title: String, $description: String) {
    updateUser(
      id: $id
      fields: {
        userGoals: {
          createAndAdd: { title: $title, description: $description }
        }
      }
    ) {
      id
      username
      email
      userGoals {
        results {
          title
          description
        }
      }
    }
  }
`;

export const UPDATE_GOAL = gql`
  mutation UpdateGoal(
    $id: ID!
    $title: String
    $description: String
    $isDone: Boolean
  ) {
    updateGoal(
      id: $id
      fields: { title: $title, description: $description, isDone: $isDone }
    ) {
      id
      title
      description
      isDone
    }
  }
`;

export const DELETE_GOAL = gql`
  mutation DeleteGoal($id: ID!) {
    deleteGoal(id: $id) {
      id
    }
  }
`;
