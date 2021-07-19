import React from "react";
import { HeadingWrapper, DateWrapper } from "./SubHeader.styled";

const SubHeader = (props) => {
  return (
    <div className="d-flex flex-lg-row justify-content-start align-items-center">
      <HeadingWrapper className="col-lg-6 col-sm-6 col-md-6">
        {props.heading}
      </HeadingWrapper>

      {props.isSubHeading && (
        <DateWrapper className="col-lg-6 col-sm-6 col-md-6">
          {`Last updated : ${props.lastUpdated}`}
        </DateWrapper>
      )}
    </div>
  );
};

SubHeader.defaultProps = {
  isSubHeading: true,
};
export default SubHeader;
