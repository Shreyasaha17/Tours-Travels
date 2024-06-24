/*make a header component of this following code and add a login and register when log in button will be c,icked it will show a 
login page but the header will not change and when the register button will be clicked it will show a register page but the 
header component will not be changed


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'react-bootstrap'
import './App.css'
import Register from './pages/register/Register'
import Login from './pages/register/login'
function App() {
 const [showPage, setShowPage] = useState("Login")

 const changeForm=(formName)=> {
  setShowPage(formName)
 }

  return (
  <>
  <Button onClick={()=> {changeForm("Login")}}>Login</Button>
  <Button style={{marginLeft:'20px'}} onClick={()=> {changeForm("Register")}}>Register</Button>
  {showPage==="Login"?<Login/>:<Register/>}
  </>
  )
}

export default App 

*/
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Register from './pages/register/Register';
// import Login from './pages/register/login'; // Corrected import statement for Login
// import Header from './Headerr';

// function App() {
// const [showPage, setShowPage] = useState("Home");

// const changeForm = (formName) => {
// setShowPage(formName);
// }

// return (
// <>
// <Header onChangeForm={changeForm} />
// {showPage === "home" && <div>Welcome to the Home Page!</div>}
// {showPage === "Login" && <Login />}
// {showPage === "Register" && <Register />}
// </>
// );
// }

// export default App;



import {Route,Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from 'react'
import './App.css';
import Home from "./pages/register/Home";
import Register from './pages/register/Register';
import Login from './pages/register/login';
import Dashboard from "./pages/register/Dashboard";
import AboutUs from "./pages/register/AboutUs";
import Header from './Headerr';

function App() {
  

   return (
   <>
   <Header/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/AboutUs" element={<AboutUs/>} /> 
      <Route path="/Dashboard" element={<Dashboard/>} /> 
      {/* <Route path="/Dashboard/:email" element={<Dashboard/>}/> */}
   </Routes>
   </>
   );
   }
export default App;

