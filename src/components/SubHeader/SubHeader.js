import React from "react";
import { HeadingWrapper, DateWrapper } from "./SubHeader.styled";

const SubHeader = (props) => {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center">
      <HeadingWrapper className="col-lg-8 col-sm-8 col-md-8">
        {props.heading}
      </HeadingWrapper>

      {props.isSubHeading && (
        <DateWrapper className="col-lg-4 col-sm-4 col-md-4">
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
