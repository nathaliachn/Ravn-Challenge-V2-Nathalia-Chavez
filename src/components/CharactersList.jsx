import React from "react";
import Person from "./Person";

const CharactersList = ({ caracters, onPersonClick }) => (
  <>
    {caracters.map((person) => (
      <Person
        person={person.node}
        key={person.node.id}
        onClick={onPersonClick}
      />
    ))}
  </>
);
export default CharactersList;
