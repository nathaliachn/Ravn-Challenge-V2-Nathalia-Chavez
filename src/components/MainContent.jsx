import React, { useState } from "react";
import SideBar from "./SideBar";
import Information from "./Information";
import "../styles/MainContent.scss";

const MainContent = () => {
  const [personId, setPersonId] = useState(null);

  return (
    <div className="content">
      <div className="content-sidebar">
        <SideBar onPersonClick={(person) => setPersonId(person.id)} />
      </div>
      <div className="content-information">
        <Information personId={personId} />
      </div>
    </div>
  );
};

export default MainContent;
