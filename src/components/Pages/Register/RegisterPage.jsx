import React from 'react'
import Template from '../../Template/Template'
import { StyledRegisterBtn } from './StylesRegister/StyledRegisterButtons'
import { StyledForm } from '../Login/StylesLogin/StyledForm'

const RegisterPage = () => {
  return (
    <Template page={'register'}>
      <StyledForm>

      <StyledRegisterBtn variant={'registerBtn'}>Cadastrar</StyledRegisterBtn>
      </StyledForm>
    </Template>
  )
}

export default RegisterPage