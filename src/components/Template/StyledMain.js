import { styled } from "styled-components";

export const StyledMain = styled.main`
width: 100%;
max-width: ${props => props.page === 'dashboard' ? '100vw' : '369px'};;;
margin: 0 auto;

@media(max-width: 768px){
    padding: 0 3%;
}
`;
