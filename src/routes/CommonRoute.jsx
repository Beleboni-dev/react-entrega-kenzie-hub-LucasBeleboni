import { Outlet, useNavigate } from 'react-router-dom';
import { Spinner, SpinnerContainer } from '../../styles/StyledSpinner';
import { useEffect } from 'react';

const CommonRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('@TOKEN');

  useEffect(() => {
  const checkToken = () =>{
      if (token) {
        navigate('/dashboard');
    }
  }
  checkToken();
  
  }, [token]);

  if (token) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
  return <Outlet />;
};
export default CommonRoute;
