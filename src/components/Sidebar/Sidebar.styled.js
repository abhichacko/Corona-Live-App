import styled from "styled-components";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { theme } from "../../styles/theme";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";

export const Linkwrapper = styled(Link)`
  text-decoration: none;
  color: ${theme.color.grey};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const AppBarWrapper = styled(AppBar)`
  background-color: ${theme.color.purple};
`;

export const ListItemIconWrapper = styled(ListItemIcon)`
  &:hover {
    color: ${theme.color.white};
  }
`;

export const IconButtonWrapper = styled(IconButton)`
  &:hover {
    background-color: ${theme.color.purple};
    color: ${theme.color.white};
  }
`;
export const ListItemWrapper = styled(ListItem)`
  /* color: ${theme.color.purple}; */
  &:hover {
    color: ${theme.color.white};
    background-color: ${theme.color.purple};
    ${ListItemIconWrapper} {
      color: ${theme.color.white};
    }
  }
`;
