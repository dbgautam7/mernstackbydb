import React, { useState } from 'react'
import './Register.css'
import assets from '../assets/register.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser, AiTwotonePhone, AiTwotoneMail } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { MdOutlineWork } from "react-icons/md";

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    confirmPassword: ''
  })
let name,value
  const handleUserInputs=(e)=>{
    console.log(e)
    name=e.target.name
    value=e.target.value
    setUserData({...userData,[name]:value})
  }

  return (
    <>
      <form>
        <div className="container">
          <div className='reg-img'>
            <img src={assets} alt='register' style={{ width: '200px', float: 'right', }} />
          </div>
          <h1>Register</h1>
          <BsPersonPlus />
          <p>Please fill all the credentials.</p><hr></hr><br></br><br></br>
          <AiOutlineUser />
          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter Your Name" name="name" id="name" required
            value={userData.name} onChange={handleUserInputs} />

          <AiTwotoneMail />
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required
            value={userData.email} onChange={handleUserInputs} />

          <AiTwotonePhone />
          <label for="phone"><b>Phone</b></label>
          <input type="number" placeholder="Enter Phone" name="phone" id="phone" required
            value={userData.phone} onChange={handleUserInputs} />

          <MdOutlineWork />
          <label for="work"><b>Work</b></label>
          <input type="text" placeholder="Enter Work" name="work" id="work" required
            value={userData.work} onChange={handleUserInputs} />

          <CgPassword />
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required
            value={userData.psw} onChange={handleUserInputs} />

          <CgPassword />
          <label for="psw-confirm"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="pswconfirm" id="psw-confirm" required
            value={userData.pswconfirm} onChange={handleUserInputs} />

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