import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CharacterDescription from "./CharecterDescription";
import Vehicles from "./Vehicles";
import "../styles/Info.scss";
import Loading from "./Loading";

const QUERY_PERSON = gql`
  query getPerson($id: ID) {
    person(id: $id) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;

const Information = ({ personId }) => {
  const { loading, data } = useQuery(QUERY_PERSON, {
    variables: { id: personId },
  });

  return (
    <div className="info">
      {data?.person && <CharacterDescription person={data.person} />}
      {data?.person && (
        <Vehicles vehicles={data.person.vehicleConnection.vehicles} />
      )}
      {loading && <Loading />}
    </div>
  );
};

export default Information;
