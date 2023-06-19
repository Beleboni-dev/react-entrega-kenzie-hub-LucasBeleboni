import { styled } from 'styled-components';
import { theme } from '../../../styles/Theme';

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid
    ${(props) =>
      props.primary ? `${theme.colors.colorPrimary}` : `${theme.colors.grey1}`};
  background-color: ${(props) =>
    props.primary ? `${theme.colors.colorPrimary}` : `${theme.colors.grey1}`};
  font-weight: 500;
  color: ${theme.colors.grey0};
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.primary
        ? `${theme.colors.colorPrimaryFocus}`
        : `${theme.colors.grey2}`};
    transition: 0.3s;
  }
`;
