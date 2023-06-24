import React from 'react';
import PageTemplate from '../../components/Template/Template';
import RegisterForm from './RegisterForm/RegisterForm';


const RegisterPage = () => {
  return (
    <PageTemplate page={'register'}>
      <RegisterForm />
    </PageTemplate>
  );
};

export default RegisterPage;
