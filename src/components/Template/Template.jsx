import React from 'react';
import Header from '../Header/Header';
import { StyledMain } from './TemplateStyles/StyledMain';
import { ToastContainer } from 'react-toastify';
import { CustomToastContainer } from '../../styles/StyledToast';


const PageTemplate = ({ page, children }) => {
  return (
    <>
      <Header page={page} />
      <CustomToastContainer />
      <StyledMain page={page}>
        {children}
      </StyledMain>
    </>
  );
};

export default PageTemplate;