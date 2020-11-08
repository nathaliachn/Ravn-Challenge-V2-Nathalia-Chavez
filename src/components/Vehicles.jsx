import React from "react";
import "../styles/InformationStyles.scss";

const Vehicles = ({ vehicles }) => (
  <div className="info-vehicles">
    <p className="title">Vehicles</p>
    {vehicles.map((vehicle) => (
      <div className="row" key={vehicle.id}>
        <p className="key">{vehicle.name}</p>
      </div>
    ))}
  </div>
);

export default Vehicles;
