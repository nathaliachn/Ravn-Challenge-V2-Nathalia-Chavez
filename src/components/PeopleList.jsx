import React from "react";
import Person from "./Person";

const PeopleList = ({ people, onPersonClick }) => (
  <>
    {people.map((person) => (
      <Person
        person={person.node}
        key={person.node.id}
        onClick={onPersonClick}
      />
    ))}
  </>
);
export default PeopleList;
