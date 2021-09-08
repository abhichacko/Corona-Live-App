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
          <Linkwrapper to="/">
            <div class="d-flex flex-lg-row flex-sm-column row align-items-center justify-content-center">
              <div>
                <h2>Page Not Found Go To Home </h2>
              </div>
              <div>
                <IconWrapper className="fa fa-home" />
              </div>
            </div>
          </Linkwrapper>
        </ErrorWrapper>
      </DivWrapper>
    </>
  );
};

export default NotFound;
