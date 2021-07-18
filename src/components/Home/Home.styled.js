import styled from "styled-components";
export const BodyWrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
`;

export const LoaderWrapper = styled.div`
  margin-top: 30vh;
`;

export const HeadingWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;
