import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { theme } from "../../styles/theme";

export const Linkwrapper = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const NavBarWrapper = styled(Navbar)`
  background-color: ${theme.color.purple};
`;
