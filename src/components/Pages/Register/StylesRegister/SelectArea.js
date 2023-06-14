import { styled } from "styled-components";
import { theme } from "../../../../../styles/GlobalStyles";

export const StyledDiv = styled.div`
width: 100%;
background-color: ${theme.colors.grey4};
border: 1px solid ${theme.colors.grey4};
border-radius: 4px;
margin: 22px 0 9px;

&:hover{
    border: 1px solid ${theme.colors.grey0};
    cursor: pointer;
}
`;