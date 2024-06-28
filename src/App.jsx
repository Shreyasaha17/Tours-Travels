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

function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App










