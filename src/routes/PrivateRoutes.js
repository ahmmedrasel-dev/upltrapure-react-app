/* eslint-disable react/prop-types */
import AuthContext, { AuthenticateContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, isLoggedIn, setIsLoggedIn, loading, setLoading } =
    AuthContext(AuthenticateContext);
  const location = useLocation();

  if (loading) {
    <Loader></Loader>;
  }
  if (isLoggedIn && user) {
    <Navigate to="/" />;
  }

  if (!user && !isLoggedIn) {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setLoading(false);
    return (
      <Navigate
        to="/login"
        state={{ from: location, search: location.search }}
        replace
      ></Navigate>
    );
  }

  return children;
};

export default PrivateRoutes;
