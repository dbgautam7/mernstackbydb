import React from 'react'
import dbPic from '../assets/db.jpg'
import './About.css'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div class="about-section">
      <div className='image-section'>
        <img src={dbPic} alt="profile" className="profile-picture" />
      </div>
      </div>
      <div className='text-section'>
      <div class="about-info">
          <h2>Name: DB Gautam</h2>
          <h2>Phone No: 9804400486</h2>
          <h2>Address:New Baneshwor</h2>
          <h2>Age: 25</h2>
          <h2>Course: BSC-CSIT</h2>
        </div>
        </div>

      <p>I'm a full-stack MERN developer who is seeking for the best suited job.
        I am learning in building web applications using the latest technologies,
        such as MongoDB, Express.js, React.js, and Node.js.
        I have a passion for creating user-friendly, high-performance, and scalable applications
        that deliver an exceptional user experience.</p>

      <div className='social-link'>
        <h3>You can connect with me.</h3>
        <a href="https://www.instagram.com/cr7.db7/" target="_dbgautam">
          Follow me on Instagram <AiFillInstagram />
        </a>

        <a href=" https://www.facebook.com/aaditya.gautam.777?mibextid=ZbWKwL" target="_dbgautam">
          Follow me oin Facebook <AiFillFacebook />
        </a>

        <a href="https://www.linkedin.com/in/d-b-gautam-b5b0b2241?original_referer=https%3A%2F%2Fl.facebook.com%2F" target="_dbgautam">
          Follow me oin Linkedin <AiFillLinkedin />
        </a>

        <a href="https://github.com/dbgautam7" target="_dbgautam">
          Follow me oin Linkedin <AiFillGithub />
        </a>
      </div>
    </>
  )
}

export default About