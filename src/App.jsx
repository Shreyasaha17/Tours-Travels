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
import Tour from './pages/Tourpackages';
import TourDetails from './pages/TourDetails';
import Footer from './component/footer';
import ReservationForm from './pages/ReservationForm';
// import TourBooking from './pages/tourBooking';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

function App() {

  
  // return (
  //   <>


  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />
  //         <Route path="/login" element={<UnAuth> <Login /></UnAuth>} />
  //         <Route path="/signup" element={<UnAuth><Signup /></UnAuth>} />
  //         <Route path="/aboutus" element={<Aboutus />} />
  //         <Route path="/dashboard" element={<WithAuth><Dashboard /></WithAuth>} />
  //         <Route path="/tour" element={<Tour/>} />
  //         {/* <Route path="/tourBooking" element={<WithAuth><TourBooking/></WithAuth>} /> */}
  //         <Route path="/cart" element={<WithAuth><Cart/></WithAuth>} />

  //         <Route path="/tourDetails/:tourId" element={<TourDetails/>} />
  //         <Route path="/reservationForm/:tourId" element={<WithAuth><ReservationForm /></WithAuth>} />
  //         <Route path="/home" element={<Home />} />
  //       </Route>
  //     </Routes>
  //   </>
  // )


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<UnAuth><Login /></UnAuth>} />
          <Route path="/signup" element={<UnAuth><Signup /></UnAuth>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/dashboard" element={<WithAuth><Dashboard /></WithAuth>} />
          <Route path="/profile" element={<WithAuth><Profile/></WithAuth>} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/cart" element={<WithAuth><Cart /></WithAuth>} />
          <Route path="/tourDetails/:tourId" element={<TourDetails />} />
          <Route path="/reservationForm/:tourId" element={<WithAuth><ReservationForm /></WithAuth>} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App










