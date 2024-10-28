import Header from "../component/Header";
import AuthHeader from "../component/AuthHeader";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../component/footer";
import AdminHeader from "../component/AdminHeader";

const Layout = () => {
    const navigate = useNavigate();
   
    const isLogin = !!localStorage.getItem('token');
    const isAdmin = !!localStorage.getItem('admintoken');

    const logout = () => {
      console.log('Logout function triggered');
        if (isAdmin) {
            console.log('Admin logout clicked');
            localStorage.removeItem('admintoken');
        } else if (isLogin) {
            console.log('User logout clicked');
            localStorage.removeItem('token'); // Remove token
            localStorage.removeItem('user');  // Remove user data
        }
        navigate('/'); // Redirect to home page for admin or login for user
    }


    return (
        <>
            {isAdmin ? <AdminHeader logout={logout} /> : isLogin ? <AuthHeader logout={logout} /> : <Header />}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
