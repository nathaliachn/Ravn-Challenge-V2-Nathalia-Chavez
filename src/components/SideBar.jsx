import React, { useState, useEffect } from "react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


const QUERY_PEOPLE = gql`
  query getPeople($cursor: String) {
    allPeople(first: 5, after: $cursor) {
      edges {
        node {
          id
          name
          species {
            id
            name
          }
          homeworld {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const Sidebar = ({ onPersonClick }) => {
  const { loading, error, data, fetchMore } = useQuery(QUERY_PEOPLE);

  const [isLoadingMore, setIsLoadingMore] = useState(false);