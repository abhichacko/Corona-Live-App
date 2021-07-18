import React from "react";
import { Linkwrapper } from "../Sidebar/Sidebar.styled";
import { ErrorWrapper, DivWrapper, IconWrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <>
      <DivWrapper className="d-flex justify-content-center align-items-center flex-column">
        <ErrorWrapper>
          <h1>Error 404</h1>
        </ErrorWrapper>
        <ErrorWrapper>
          <Linkwrapper to="/" className="d-flex">
            <h2>Page Not Found Go To Home </h2>
            <IconWrapper className="fa fa-home" />
          </Linkwrapper>
        </ErrorWrapper>
      </DivWrapper>
    </>
  );
};

export default NotFound;
