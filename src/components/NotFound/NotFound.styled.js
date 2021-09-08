import styled from "styled-components";

export const DivWrapper = styled.div`
  height: 70vh;
`;
export const ErrorWrapper = styled.div`
  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.color.purple};
    display: inline-block;
    padding-right: 2vh;
    animation: type 0.5s alternate infinite;
    @keyframes type {
      from {
        box-shadow: inset -3px 0px 0px ${(props) => props.theme.color.purple};
      }
      to {
        box-shadow: inset -3px 0px 0px transparent;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2.1rem;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
`;

export const IconWrapper = styled.i`
  margin-left: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.color.purple};
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
