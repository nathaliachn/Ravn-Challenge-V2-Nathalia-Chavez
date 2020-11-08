import React from "react";
import "../styles/InformatioStyles.scss";

const CharacterDescription = ({ person }) => {
  const { eyeColor, hairColor, skinColor, birthYear } = person;

  return (
    <div className="info-description">
      <p className="title">General Information</p>

      <div className="row">
        <p className="key">Eyes Color</p>
        <p className="value">{eyeColor}</p>
      </div>
      <div className="row">
        <p className="key">Hair Color</p>
        <p className="value">{hairColor}</p>
      </div>
      <div className="row">
        <p className="key">Skin Color</p>
        <p className="value">{skinColor}</p>
      </div>
      <div className="row">
        <p className="key">Birth Year</p>
        <p className="value">{birthYear}</p>
      </div>
    </div>
  );
};

export default CharacterDescription;
