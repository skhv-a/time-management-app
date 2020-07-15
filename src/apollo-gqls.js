import { gql } from 'apollo-boost';

export const GET_GOALS = gql`
  {
    goals {
      results {
        title
        description
        isDone
        id
      }
    }
  }
`;

// export const GET_CURRENT_GOAL = gql`
//   query Goal($id: ID!) {
//     goal(id: $id) {
//       id
//       title
//       description
//       isDone
//     }
//   }
// `;

export const ADD_GOAL = gql`
  mutation CreateGoal($title: String, $description: String!) {
    createGoal(fields: { title: $title, description: $description }) {
      id
      createdAt
      title
      description
      isDone
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
