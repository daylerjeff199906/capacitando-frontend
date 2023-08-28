/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();

  console.log(auth.usersData);

  if (loading) {
    return "Cargando...";
  }
  return <>{auth._idusuario ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
