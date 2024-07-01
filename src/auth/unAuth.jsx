
import { Navigate } from "react-router-dom";
import storageHandler from "../helper/storageHandler";

// eslint-disable-next-line react/prop-types
const UnAuth = ({ children }) => {
    const authData = storageHandler.getLocalData();
    if (authData?.email) {
        return <Navigate to="/dashboard" replace />;
    } else {
        return <>{children}</>;
    }
}

export default UnAuth;


