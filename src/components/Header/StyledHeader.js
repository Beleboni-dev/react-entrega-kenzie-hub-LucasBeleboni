import { styled } from "styled-components";

export const StyledHeader = styled.header`
max-width: 369px;
margin: 0 auto;
display: flex;
justify-content: ${props => props.page === 'login' ? 'center' : 'space-between'};
margin-top: 70px;

@media(max-width: 380px){
    padding: 0 3%;
}
`
