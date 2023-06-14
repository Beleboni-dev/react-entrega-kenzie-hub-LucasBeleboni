import React, { useContext } from 'react';
import { StyledHeader } from './StyledHeader';
import { StyledRegisterBtn } from '../../../styles/StyledRegisterButtons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

const Header = ({ page }) => {
const {updateUser} = useContext(UserContext) 
  const handleCleanSessions = ()=>{
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    updateUser(null);

  }
  
    return (
      <StyledHeader page={page}>
        <img src="/Logo.svg" alt="logo-kenziehub" />
        {page === 'register' && <Link to='/'><StyledRegisterBtn variant={'headerBtn'}>Voltar</StyledRegisterBtn>
        </Link>}
        {page === 'dashboard' && <Link to='/'><StyledRegisterBtn variant={'headerBtn'} onClick={handleCleanSessions}>Sair</StyledRegisterBtn>
        </Link>}
      </StyledHeader>
    );
  };
  
export default Header;