import { gql } from "@apollo/client";

export const GET_User = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
      phone
      email
      id
    }
  }
`;

export const Get_Users = gql`
  query {
    users {
      data {
        name
        phone
        email
      }
    }
  }
`;
