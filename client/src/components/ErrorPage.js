import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrorImg from '../assets/notfound.jpg'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <>
        <div id='nottfound'>
            <div className='notfound'>
                <div className='notfound-404'>
                  <img src={ErrorImg} alt='notfoundimage' />
                </div>
            </div>
            <p className='mb-10'>
                The page that you are looking for might have been removed 
                or name has been changed or might be temporarily unavailable.
            </p>
            <div className='nav-link'>
    <NavLink to='/'>Back to Home Page</NavLink>
    </div>
        </div>
    </>
  )
}

export default ErrorPage