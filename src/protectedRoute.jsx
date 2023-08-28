import { Navigate, useRoutes } from "react-router-dom";

function ProtectedRoute({ element }) {
  const isAuthenticated = false;
  
  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
