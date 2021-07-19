import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import {
  AccordionWrapper,
  AccordionHeaderWrapper,
  IconWrapper,
  TextWrapper,
} from "./Accordian.styled";

const AccordionCard = (props) => {
  return (
    <AccordionWrapper>
      <AccordionSummary>
        <div class="row d-flex flex-lg-row flex-sm-column w-100">
          <div class="col-lg-1 col-md-1 col-sm-1">
            <IconWrapper className="fas fa-plus-square" />
          </div>
          <div class="col-lg-11 col-md-11 col-sm-11">
            <AccordionHeaderWrapper>
              {props.data.question}
            </AccordionHeaderWrapper>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <div class="d-flex flex-column">
          <TextWrapper>{props.data.answer1}</TextWrapper>
          <br />
          <TextWrapper>{props.data.answer2}</TextWrapper>
        </div>
      </AccordionDetails>
    </AccordionWrapper>
  );
};
export default AccordionCard;
