
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const UnAuth = ({ children }) => {
   const isLogin=useSelector(state=>state.auth.isLogin)
    if (!isLogin) {
        return <>{children}</>
    } else {
        return <Navigate to="/dashboard" replace />;
    }
}

export default UnAuth;


