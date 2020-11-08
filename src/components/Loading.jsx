import React from "react";
import "../styles/LoadingSpinner.scss";

const Loading = () => (
  <div className="loading">
    <div className="loader lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="text">Loading ...</div>
  </div>
);

export default Loading;
