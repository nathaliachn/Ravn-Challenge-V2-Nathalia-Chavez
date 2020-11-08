import React from "react";
import "../styles/Person.scss";

const Person = ({ person, onClick }) => {
  const handleClick = () => {
    onClick(person);
  };

  return (
    <div className="person-item" key={person.id} onClick={handleClick}>
      <div>
        <p className="person-name">{person.name}</p>
        <p className="person-info">
          {person.species ? person.species.name : ""} from{" "}
          {person.homeworld.name}
        </p>
      </div>
      <div>
        <i className="arrow right" />
      </div>
    </div>
  );
};

export default Person;
