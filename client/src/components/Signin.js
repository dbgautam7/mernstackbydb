import React from 'react'
import './Signin.css'
import loginImage from '../assets/login.jpg'
import { NavLink } from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";
import { MdMarkEmailRead,MdPassword } from "react-icons/md";

const Signin = () => {
  return (
    <>
      <form>
  <div className="imgcontainer">
    <img src={loginImage} alt="login" className="login" />
  </div>
  <div className='let-be-in'>
  <h1>Let Be In ...<FaSignInAlt /></h1><hr></hr>
  </div>
  <div className="container">
    <label for="email"><b>Email <MdMarkEmailRead /></b></label>
    <input type="text" placeholder="Enter Email" name="email" required />

    <label for="psw"><b>Password <MdPassword /></b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit">Signin</button>
  </div>
  <div className="register">
    <p>Create an Account <NavLink to="/register"><br></br>Register</NavLink>.</p>
  </div>
</form>
    </>
  )
}

export default Signin