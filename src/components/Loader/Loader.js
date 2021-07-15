import React from "react";
import { SpinnerWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <div className="row d-flex justify-content-center h-100">
      <SpinnerWrapper animation="border" size="lg" />
    </div>
  );
};

export default Loader;
