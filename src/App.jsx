//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
Route,
Routes
} from "react-router-dom"

import Home from './pages/Home';
//import Header from './component/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Aboutus from './pages/Aboutus';
import Dashboard from './pages/Dashboard';
import Layout from './Layout/Layout';
import WithAuth from './auth/withAuth';
import UnAuth from './auth/unAuth';

function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<UnAuth> <Login /></UnAuth>} />
          <Route path="/signup" element={<UnAuth><Signup /></UnAuth>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/dashboard" element={<WithAuth><Dashboard /></WithAuth>} />
        </Route>
      </Routes>
    </>
  )
}

export default App










