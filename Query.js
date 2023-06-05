import { gql } from "@apollo/client";

export const CONTENT_QUERY = gql`
  query ContentQuery {
    continents {
      code
      name
    }
  }
`;
