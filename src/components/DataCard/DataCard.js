import React, { useState, useEffect } from "react";
import {
  CardWrapper,
  TextWrapper,
  TitleWrapper,
  IconWrapper,
} from "./DataCard.styled";
import { Card } from "react-bootstrap";

const DataCard = (props) => {
  let iconClassName = "";

  const { heading, number, color } = props.data;
  switch (color) {
    case "crimson":
      iconClassName = "fa fa-sad-tear";
      break;
    case "limegreen":
      iconClassName = "fas fa-syringe";
      break;
    case "lightgreen":
      iconClassName = "fas fa-smile-beam";
      break;
    case "gold":
      iconClassName = "fas fa-exclamation-triangle";
      break;
    case "tan":
      iconClassName = "fas fa-bacteria";
      break;
    case "Active Cases":
      iconClassName = "fas fa-bacteria";
      break;
    case "darkgrey":
      iconClassName = "fas fa-syringe";
      break;
    default:
      iconClassName = "fa fa-home";
      break;
  }
  return (
    <CardWrapper variant={color}>
      <Card.Body>
        <IconWrapper className={iconClassName}></IconWrapper>

        <TextWrapper>{number}</TextWrapper>
        <TitleWrapper> {heading} </TitleWrapper>
      </Card.Body>
    </CardWrapper>
  );
};

export default DataCard;
