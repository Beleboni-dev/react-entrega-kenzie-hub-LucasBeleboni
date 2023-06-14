import React, { useContext } from 'react'
import Template from '../../Template/Template'
import {StyledContainer } from './StyledContainer'
import { HeadlineBold, Title1 } from '../../../../styles/Typograph'
import { UserContext } from '../../../hooks/UserContext'
import { StyledWrapper } from './StyledWrapper'

const DashboardPage = () => {

  const {user} = useContext(UserContext)
  console.log(user)
  return (
    <Template page={'dashboard'}>
      <StyledContainer>
        <div>
          <Title1>Olá, {user.name}</Title1>
          <HeadlineBold>{user.course_module}</HeadlineBold>
        </div>
      </StyledContainer>
      <StyledWrapper>
          <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
          <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
      </StyledWrapper>
    </Template>
    )
}

export default DashboardPage