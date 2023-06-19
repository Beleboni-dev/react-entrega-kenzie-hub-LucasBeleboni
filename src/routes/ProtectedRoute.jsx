import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../providers/UserContext";
import { api, endpoints } from "../api/api";

import { Spinner, SpinnerContainer } from "../../styles/StyledSpinner";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const { user, updateUser } = useUserContext();


  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        try {
         const { data } = await api.get(endpoints.profile);
         updateUser(data);
        } catch {
          navigate("/");
          localStorage.removeItem("@TOKEN")
          localStorage.removeItem("@USERID")
          toast.error("Você precisa estar autenticado",{
            autoClose: 600,
          })
        }
      }
    };
    checkAuth();
    
  
  }, []);
  if (!user) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
  return <Outlet />;
};
export default ProtectedRoute;
