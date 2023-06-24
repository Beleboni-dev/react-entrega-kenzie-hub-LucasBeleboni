import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from './Theme';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.spinner === 'true' ? '100%' : '100vh'} ;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${theme.colors.grey0};
  border-top: 4px solid ${theme.colors.negative};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
