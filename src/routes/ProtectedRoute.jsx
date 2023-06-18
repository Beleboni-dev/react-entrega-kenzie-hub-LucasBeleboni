import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/UserContext";
import { api, endpoints } from "../api/api";

import { Spinner, SpinnerContainer } from "../../styles/StyledSpinner";

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
