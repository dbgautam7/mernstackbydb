import React from 'react'
import './Register.css'
import assets from '../assets/register.png'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <form>
  <div className="container">
    <div className='reg-img'>
    <img src={assets} alt='register' style={{ width: '200px', float: 'right',  }} />
    </div>
    <h1>Register</h1>
    <p>Please fill all the credentials.</p><hr></hr><br></br><br></br>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Your Name" name="name" id="name" required />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />
    
    <label for="phone"><b>Phone</b></label>
    <input type="number" placeholder="Enter Phone" name="phone" id="phone" required />

    <label for="work"><b>Work</b></label>
    <input type="text" placeholder="Enter Work" name="work" id="work" required /> 

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

    <label for="psw-confirm"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="psw-confirm" id="psw-confirm" required />

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" className="registerbtn">Register</button>
  </div>
</form>
<div className="signin">
    <p>Already have an account? <NavLink to="/signin"><br></br>Sign in</NavLink>.</p>
  </div>
    </>
  )
}

export default Register