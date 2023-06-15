import { styled } from "styled-components";

export const StyledHeader = styled.header`
  max-width: ${(props) => (props.page === "dashboard" ? "768px   " : "369px")};
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) =>
    props.page === "login" ? "center" : "space-between"};
  margin-top: 70px;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;
