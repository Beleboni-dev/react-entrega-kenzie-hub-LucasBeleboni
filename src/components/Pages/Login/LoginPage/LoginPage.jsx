import React from 'react';
import PageTemplate from '../../../Template/Template';
import { LoginForm } from './LoginForm';

const LoginPage = () => {
  return (
    <PageTemplate page={'login'}>
      <LoginForm />
    </PageTemplate>
  );
};

export default LoginPage;
