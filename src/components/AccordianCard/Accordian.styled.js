import styled from "styled-components";
import { Accordion } from "@material-ui/core";

export const AccordionWrapper = styled(Accordion)`
  margin-top: 1rem;
  width: 100%;
`;
export const AccordionTitleWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.green};
`;
export const AccordionHeaderWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
export const IconWrapper = styled.i`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.purple};
`;
export const TextWrapper = styled.div`
  font-size: 1rem;
  text-align: justify;
`;
