import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardWrapper = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 2rem;
  margin-bottom: 1rem;
  background-color: white;
  background-color: ${(props) => props.variant};
  color: ${(props) => props.variant === "red" && "white"};
  border-radius: 6px;
`;
export const TitleWrapper = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;
export const TextWrapper = styled(Card.Text)`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  span {
    font-size: 1rem;
  }
`;
export const IconWrapper = styled.i`
  position: absolute;
  top: auto;
  bottom: 5px;
  right: 5px;
  z-index: 0;
  font-size: 72px;
  color: rgba(0, 0, 0, 0.15);
`;
