import styled from "styled-components";
import { Accordion } from "@material-ui/core";

export const AccordionWrapper = styled(Accordion)`
  margin-top: 1rem;
  width: 100%;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export const AccordionTitleWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.green};
`;
export const AccordionHeaderWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const IconWrapper = styled.i`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.green};
  &:hover {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
    &:hover {
      font-size: 1.8rem;
    }
  }
`;
export const TextWrapper = styled.div`
  font-size: 0.9rem;
  text-align: justify;
`;
