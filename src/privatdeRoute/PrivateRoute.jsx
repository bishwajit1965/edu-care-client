import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return <Navigate to="/" state={{ from: location }} replace={true} />;
};

export default PrivateRoute;
