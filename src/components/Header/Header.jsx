import React from 'react';
import { StyledHeader } from './StyledHeader';
import { StyledRegisterBtn } from '../../../styles/StyledRegisterButtons';
import { Link } from 'react-router-dom';

const Header = ({ page }) => {

  
    return (
      <StyledHeader page={page}>
        <img src="/Logo.svg" alt="logo-kenziehub" />
        {page === 'register' && <Link to='/'><StyledRegisterBtn variant={'headerBtn'}>Voltar</StyledRegisterBtn>
        </Link>}
        {page === 'dashboard' && <Link to='/'><StyledRegisterBtn variant={'headerBtn'}>Sair</StyledRegisterBtn>
        </Link>}
      </StyledHeader>
    );
  };
  
export default Header;