import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      name
      username
      email
      phone
    }
  }
`;

export const UBDATE_USER = gql`
  mutation ubdateUser($id: ID!, $name: String!) {
    updateUser(id: $id, input: { name: $name }) {
      id
      name
      email
      phone
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
