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
        <div class="col-lg-2">
          <IconWrapper className="fas fa-plus-square" />
        </div>
        <div class="col-lg-10">
          <AccordionHeaderWrapper>{props.data.question}</AccordionHeaderWrapper>
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
