import { styled } from 'styled-components';
import { theme } from '../../../../../styles/Theme';

export const StyledWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 37px;
  gap: 22px;
  h2 {
    color: ${theme.colors.grey0};
  }
  span {
    font-weight: 400;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding: 0 5%;
    font-size: 12px;
  }


`;
