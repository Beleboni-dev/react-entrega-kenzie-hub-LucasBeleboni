import React from 'react';
import PageTemplate from './../../components/Template/Template';
import { LoginForm } from './LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <PageTemplate page={'login'}>
      <LoginForm />
    </PageTemplate>
  );
};

export default LoginPage;
