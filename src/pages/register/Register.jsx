/*import React from "react";
class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phno: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  doRegister = (event) => {
    event.preventDefault();
    console.log('Form Data:', this.state);
    
  }
  render() {
    return (
      <>
        <div id='form'>
          <h2 style={{ color: "purple" }}>Student Registration Form</h2>
          <form onSubmit={this.doRegister}>
            <label>First Name</label><br />
            <input type='text' id="firstname" placeholder='Enter your first name.....'
              value={this.state.firstname}
              onChange={this.handleChange} /><br />

            <label>Last Name</label><br />
            <input type='text' id="lastname" placeholder='Enter your last name.....'
              value={this.state.lastname}
              onChange={this.handleChange} /><br />

            <label>Email</label><br />
            <input type='email' id="email" placeholder='Enter your email.....'
              value={this.state.email}
              onChange={this.handleChange} /><br />

            <label>Phone Number</label><br />
            <input type='number' id="phno" placeholder='Enter your phone no.....'
              value={this.state.phno}
              onChange={this.handleChange} /><br />

            <label>Password</label><br />
            <input type='password' id="password" placeholder='Enter a password.....'
              value={this.state.password}
              onChange={this.handleChange} /><br />
            <input type='button' value={"Submit"} onClick={this.doRegister} />
          </form>
        </div>

      </>
    )
  }

}
export default Register


import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phno: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  doRegister = (event) => {
    event.preventDefault();
    console.log('Form Data:', this.state);
  }

  render() {
    return (
      <>
        <div id='form'>
          <h2 style={{ color: "purple" }}>Student Registration Form</h2>
          <form onSubmit={this.doRegister}>
            <label>First Name</label><br />
            <input
              type='text'
              id="firstname"
              placeholder='Enter your first name.....'
              value={this.state.firstname}
              onChange={this.handleChange}
            /><br />

            <label>Last Name</label><br />
            <input
              type='text'
              id="lastname"
              placeholder='Enter your last name.....'
              value={this.state.lastname}
              onChange={this.handleChange}
            /><br />

            <label>Email</label><br />
            <input
              type='email'
              id="email"
              placeholder='Enter your email.....'
              value={this.state.email}
              onChange={this.handleChange}
            /><br />

            <label>Phone Number</label><br />
            <input
              type='number'
              id="phno"
              placeholder='Enter your phone no.....'
              value={this.state.phno}
              onChange={this.handleChange}
            /><br />

            <label>Password</label><br />
            <input
              type='password'
              id="password"
              placeholder='Enter a password.....'
              value={this.state.password}
              onChange={this.handleChange}
            /><br />
            
            <input type='submit' value={"Submit"} />
          </form>
        </div>
      </>
    );
  }
}

export default Register;
*/


//import { useState } from "react";

import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phno: '',
      password: '',
      redirect: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  doRegister = (event) => {
    event.preventDefault();
    this.setState({ redirect: true });
    console.log('Form Data:', this.state);
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/dashboard" state={this.state} />;
    }

    return (
      <>
        <div id='form'>
          <h2 style={{ color: "purple" }}>Student Registration Form</h2>
          <form onSubmit={this.doRegister}>
            <label>First Name</label><br />
            <input
              type='text'
              id="firstname"
              placeholder='Enter your first name.....'
              value={this.state.firstname}
              onChange={this.handleChange}
            /><br />

            <label>Last Name</label><br />
            <input
              type='text'
              id="lastname"
              placeholder='Enter your last name.....'
              value={this.state.lastname}
              onChange={this.handleChange}
            /><br />

            <label>Email</label><br />
            <input
              type='email'
              id="email"
              placeholder='Enter your email.....'
              value={this.state.email}
              onChange={this.handleChange}
            /><br />

            <label>Phone Number</label><br />
            <input
              type='number'
              id="phno"
              placeholder='Enter your phone no.....'
              value={this.state.phno}
              onChange={this.handleChange}
            /><br />

            <label>Password</label><br />
            <input
              type='password'
              id="password"
              placeholder='Enter a password.....'
              value={this.state.password}
              onChange={this.handleChange}
            /><br />
             <Link to="/Login" style={{backgroundcolor:"blueviolet",fontSize:'20px'}}>Submit</Link>
           
          </form>
        </div>
      </>
    );
  }
}

export default Register;

//// <input type='submit' value={"Submit"} />