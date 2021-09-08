import React from "react";
import { HeadingWrapper, DateWrapper, HeadWrapper } from "./SubHeader.styled";

const SubHeader = (props) => {
  return (
    <HeadWrapper className="row d-flex flex-lg-row flex-sm-column  align-items-center ">
      <HeadingWrapper className="col-lg-6">{props.heading}</HeadingWrapper>

      {props.isSubHeading && (
        <DateWrapper className="col-lg-6">
          {`Last updated : ${props.lastUpdated}`}
        </DateWrapper>
      )}
    </HeadWrapper>
  );
};

SubHeader.defaultProps = {
  isSubHeading: true,
};
export default SubHeader;
