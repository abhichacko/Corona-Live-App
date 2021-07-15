import styled from "styled-components";
import { Spinner } from "react-bootstrap";

export const SpinnerWrapper = styled(Spinner)`
  width: 8rem;
  height: 8rem;
  color: ${(props) => props.theme.color.purple};
`;
