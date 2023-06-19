import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from '../../../../styles/Theme';

export const StyledLink = styled(Link)`
  height: 40px;
  width: 67px;
  background-color: ${theme.colors.grey3};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  outline: none;
  border-radius: 4px;
  padding: 0px 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.grey0};
  cursor: pointer;
`;