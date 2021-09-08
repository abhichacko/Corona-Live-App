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
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
