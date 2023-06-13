import React from 'react';
import { StyledHeader } from './StyledHeader';
import { StyledRegisterBtn } from '../Pages/Register/StylesRegister/StyledRegisterButtons';

const Header = ({ page }) => {

  
    return (
      <StyledHeader page={page}>
        <img src="/Logo.svg" alt="logo-kenziehub" />
        {page === 'register' && <StyledRegisterBtn variant={'headerBtn'}>Voltar</StyledRegisterBtn>}
      </StyledHeader>
    );
  };
  
export default Header;