import Header from "../component/Header";
import AuthHeader from "../component/AuthHeader";
import { Outlet,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reduxstore/authSlice";


const Layout = () => {

 const dispatch=useDispatch()
 const isLogin=useSelector(state=>state.auth.isLogin)
 const navigate = useNavigate();
   
 
 const applogout=()=>{
    dispatch(logout())
   navigate('/login')
   }
    return(
      <>
      {isLogin ? <AuthHeader logout={applogout}/>:<Header/>}
      <Outlet />
      
      </>

    )

  
}

export default Layout


















// import { useState, useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Header from "../component/Header";
// import AuthHeader from "../component/AuthHeader";
// import storageHandler from "../helper/storageHandler";

// const Layout = () => {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const authData = storageHandler.getLocalData();
//         setUser(authData);
        
//     }, [])
    
//     const logout = () => {
//         storageHandler.removeLocalData('local-store');
//         setUser(null);
//         navigate("/login")
//     }

//   return (
//     <>
//      {user ? <AuthHeader user={user} logout={logout} /> : <Header/>}
//      <Outlet context={{ setUser }}/>
//     </>
//   )
// }

// export default Layout;




