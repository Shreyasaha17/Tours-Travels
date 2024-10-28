
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const WithAuth = ({ children }) => {

//   const isLogin=useSelector(state=>state.auth.isLogin)
  const token = localStorage.getItem('token');

 

    if (token) {
        return <>{children}</>;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default WithAuth;


