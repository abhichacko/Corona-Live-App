import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const AutoCompletWrapper = styled(Autocomplete)`
  margin: 3rem;
  margin-right: 1rem;
  margin-bottom: 0;
`;

export const HeadingWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
